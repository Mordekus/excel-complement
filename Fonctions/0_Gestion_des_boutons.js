import {globalVar} from './taskpane.js';

export async function handleClick(event) {
  globalVar.debug = true;

  const buttonId = event.target.id;
  if (globalVar.debug) {console.log("Id du bouton :", buttonId)}

  if (buttonId == "btn-AjoutMission") {
    // Ajouter stop si nb mission = nb mission max
    await Excel.run(async (context) => { 
      const usedRange = context.workbook.worksheets.getItem("1. Liste des missions").getRange("B:B").getUsedRange();
      await usedRange.load("values");
      const nbMissionsMax = context.workbook.names.getItem("Nb_Missions_Max");
      await nbMissionsMax.load("value");

      await context.sync();

      let nbMission = usedRange.values.flat().filter(val => val !== "").length - 1;

      if (globalVar.debug) {console.log(usedRange.values.flat())}

      if (usedRange.values.flat().includes(0)){
        nbMission = 1;
      }

      if (globalVar.debug) {console.log("Nb Mission :", nbMission, "nbMissionsMax :", nbMissionsMax.value)};
      if (nbMission < nbMissionsMax.value) {
        showSection("sec-userForm-AjoutMission")
        document.getElementById("input-text-Mission").value = ""
        document.getElementById("input-text-Mission").placeholder = "Saisissez un texte"
        ajoutOptionsListes("Liste_Encadrant", "dropdown-Mission")
        document.getElementById("btn-validate-AjoutMission").addEventListener("click", handleClick)
      } else {
        // Ajouter un gestionnaire de problème
        if (globalVar.debug) {console.log("Nombre de mission max atteint")}
        showSection("sec-userForm-AjoutMissionError")
        document.getElementById("btn-validate-AjoutMissionError").addEventListener("click", handleClick)
      }
    })
  } else if (buttonId == "btn-validate-AjoutMission") {
    showSection("sec-userForm-SelectionConsultant")
    ajoutOptionsListes("Liste_Consultants_Triée", "listbox-SelectionConsultant")
    document.getElementById("btn-validate-SelectionConsultant").addEventListener("click", nouvelleMission)
  } else if (buttonId == "btn-Suppression" || buttonId == "btn-validate-AjoutMissionError") {
    showSection("sec-userForm-SuppressionMission")
    ajoutOptionsListes("Liste_Missions_Triée", "listbox-SuppressionMission")
    document.getElementById("btn-validate-SuppressionMission").addEventListener("click", handleClick)
  } else if (buttonId == "btn-validate-SuppressionMission") {
    showSection("sec-userForm-SuppressionMissionInter")
    let nbSuppr = document.getElementById("listbox-SuppressionMission").selectedOptions.length
    let texteSuppressionMission = "Voulez-vous supprimer " + nbSuppr + " missions ?"
    if (nbSuppr == 1) {texteSuppressionMission = "Voulez-vous supprimer " + nbSuppr + " mission ?"}
    document.getElementById("texte-SuppressionMissionInter").innerText = texteSuppressionMission
    document.getElementById("btn-validate-SuppressionMissionInter").addEventListener("click", suppressionMission)
  } else if (buttonId == "btn-ModifierAffectationMission") {
    showSection("sec-userForm-ModifierAffectationMission")
    ajoutOptionsListes("Liste_Consultants_Update", "listbox-AjouterConsultant")
    ajoutOptionsListes("Liste_Consultant_Mission", "listbox-EnleverConsultant")
    document.getElementById("btn-validate-ModifierAffectationMission").addEventListener("click", affectationMission)
  } else if (buttonId == "btn-ModifierAffectationConsultant") {
    showSection("sec-userForm-ModifierAffectationConsultant")
    ajoutOptionsListes("Liste_Missions_Update2", "listbox-AjouterMission")
    ajoutOptionsListes("Liste_Mission_Consultant", "listbox-EnleverMission")
    document.getElementById("btn-validate-ModifierAffectationConsultant").addEventListener("click", affectationConsultant)
  } else if (buttonId.includes("btn-return")) {
    if (globalVar.debug) {console.log("Bouton retour")}
      handleSheetChange();
  } else {
    globalVar.debug = false;
    console.error("Aucune action définie pour ", buttonId)
  }
  globalVar.debug = false;
}

export async function ajoutOptionsListes(rangeName, objectId) {
  try{
    await Excel.run(async (context) => {
      globalVar.debug = true;
      if (globalVar.debug) {console.log("Ajout des options pour :", objectId, "à partir de la liste", rangeName)}
      // Attention à bien définir les nouveaux noms dans la vraie version du planning
      const list = context.workbook.names.getItem(rangeName).getRange();
      list.load("values");
      await context.sync();
      if (globalVar.debug) {console.log("Valeurs de ", rangeName, ":", list.values)}

      const htmlObject = document.getElementById(objectId);
      htmlObject.innerHTML = "";

      list.values.forEach((row) => {
        if (row[0]) { // Vérifie si la cellule n'est pas vide
          const option = document.createElement("option");
          option.value = row[0];
          option.textContent = row[0];
          htmlObject.appendChild(option);
        }
      });
      // Ajouter une option par défaut
      if (!objectId.includes("listbox")) {
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Sélectionnez une option";
        defaultOption.selected = true;
        defaultOption.disabled = true;
        htmlObject.insertBefore(defaultOption, htmlObject.firstChild);
      }
    })
  } catch (error) {
      console.error("Erreur lors du chargement de la liste", rangeName, " :", error);
/*      document.getElementById("status").innerText = "Erreur lors du chargement de la liste.";*/
  }
}

export async function nouvelleMission() {
  globalVar.debug = true;
  if (globalVar.debug) {console.log("Lancement fonction nouvelleMission")}

  const nomMission = document.getElementById("input-text-Mission").value;
  const nomEncadrant = document.getElementById("dropdown-Mission").value;

  const lsConsultants = Array.from(document.getElementById("listbox-SelectionConsultant").selectedOptions).map(option => option.value);

  if (globalVar.debug) {console.log("nomMission :", nomMission, "\nnomEncadrant :", nomEncadrant, "\nlsConsultants :", lsConsultants)}


  await Excel.run(async (context) => { 
    context.application.screenUpdating = false
    const wsListeMission = context.workbook.worksheets.getItem("1. Liste des missions");
    const wsAffectation = context.workbook.worksheets.getItem("Affectation des consultants");

    const listeMissions = context.workbook.names.getItem("Liste_Missions").getRange();
    await listeMissions.load("values");
    const nbMissionsMax = context.workbook.names.getItem("Nb_Missions_Max");
    await nbMissionsMax.load("value");

    const rangeConsultant = context.workbook.names.getItem("Liste_Consultants").getRange();
    await rangeConsultant.load("values");

    await context.sync();
 
    let index = listeMissions.values.length + 3;

    if (listeMissions.values.flat().includes(0)){
      index = listeMissions.values.flat().findIndex(value => value === 0) + 3;
    }

    wsListeMission.protection.unprotect()
    await context.sync()

    if (globalVar.debug) {console.log("index nouvelle mission", index)}

    wsListeMission.getCell(index, 1).values = [[nomMission]]
    wsListeMission.getCell(index, 2).values = [[nomEncadrant]]
    await context.sync()


    for (let i = 0; i < lsConsultants.length; i++) {
        const name = lsConsultants[i];
        const indexName = rangeConsultant.values.flat().findIndex(value => value === name) + 1;
        if (globalVar.debug) {console.log("nom :", name, "\nrangeConsultant", rangeConsultant.values.flat(), "indexName :",indexName)}
        wsAffectation.getCell(index, indexName + 2).values = [["Affecté à la mission"]]
    }

    wsListeMission.protection.protect()
    wsAffectation.calculate()
    await context.sync()
    context.application.screenUpdating = true
    globalVar.debug= true

    showSection("sec-userForm-AjoutMissionOk")
    document.getElementById("texte-AjoutMissionOK").innerText = 
      "Nom : " + nomMission + "\nEncadrant : " + nomEncadrant + "\nConsultants : " + lsConsultants
  }).catch((error) => {
    globalVar.debug = true;
    console.error("Erreur lors l'ajout de l'ajout de mission : " + error);
    if (error instanceof OfficeExtension.Error) {
      console.error("Error debug info: " + JSON.stringify(error.debugInfo));
    }
  });
}

export async function suppressionMission() {
  globalVar.debug = true;
  if (globalVar.debug) {console.log("Lancement fonction suppressionMission")}

  const lsMissionsASuppr = Array.from(document.getElementById("listbox-SuppressionMission").selectedOptions).map(option => option.value);
  
  if (globalVar.debug) {console.log("lsMissionsASuppr", lsMissionsASuppr)}

  await Excel.run(async (context) => { 
    context.application.screenUpdating = false
    const wsAffectation = context.workbook.worksheets.getItem("Affectation des consultants");
    const wsListeMission = context.workbook.worksheets.getItem("1. Liste des missions");

    const listeMissions = context.workbook.names.getItem("Liste_Missions").getRange();
    await listeMissions.load("values");
    const listeConsultants = context.workbook.names.getItem("Liste_Consultants").getRange();
    await listeConsultants.load("values");

    await context.sync()

    for (let i = 0; i < lsMissionsASuppr.length; i++) {
      const missionName = lsMissionsASuppr[i];
      const indexMission = listeMissions.values.flat().findIndex(value => value === missionName) + 1;
      if (globalVar.debug) {console.log("Nom mission :", missionName, "\nindexMission :", indexMission)}

      const rangeAffectation = wsAffectation.getRangeByIndexes(indexMission + 2, 3, 1, listeConsultants.values.length);
      await rangeAffectation.load("values");
      await context.sync();

      const lsIndex = rangeAffectation.values.flat().map((value, index) => value != "" ? index : -1).filter(index => index != -1);

      const lsConsultants = lsIndex.map(index => listeConsultants.values.flat()[index]);

      if (globalVar.debug) {console.log("rangeAffectation", rangeAffectation.values.flat(), "\nlsIndex", lsIndex, "\nlsConsultants", lsConsultants)}
  
      for (const constName of lsConsultants) {
        if (globalVar.debug) {console.log("constName", constName)}
        const wsConsultant = context.workbook.worksheets.getItem(constName);
        await context.sync();
        const rangeNbJoursMissions = wsConsultant.getRangeByIndexes(indexMission + 5, 4, 1, 81 - 3);
        await rangeNbJoursMissions.load("values")
        await context.sync();
        if (globalVar.debug) {console.log("rangeNbJoursMissions", rangeNbJoursMissions.values.flat())}

        const valNbJoursMissions = rangeNbJoursMissions.values.flat()
        if (valNbJoursMissions.filter(value => value != "").length != 0) {
          rangeNbJoursMissions.values = [Array(78).fill("")]; //78 car c'est le nombre de semaines dans le planning
          await context.sync();
        }
      }
      rangeAffectation.values = [Array(listeConsultants.values.length).fill("")]
      wsListeMission.protection.unprotect();
      wsListeMission.getRangeByIndexes(indexMission + 2, 1, 1, 2).values = [Array(2).fill("")];
      wsListeMission.protection.protect()
      await context.sync();
    }
    context.application.calculate();
    context.application.screenUpdating = true;
    globalVar.debug= true;

    showSection("sec-userForm-SuppressionMissionOk")
    document.getElementById("texte-SuppressionMissionOk").innerText = 
      "Nom : " + lsMissionsASuppr

  }).catch((error) => {
    globalVar.debug = true;
    console.error("Erreur lors l'ajout de l'ajout de mission : " + error);
    if (error instanceof OfficeExtension.Error) {
      console.error("Error debug info: " + JSON.stringify(error.debugInfo));
    }
  });
}

export async function affectationMission() {
  globalVar.debug = true;
  if (globalVar.debug) {console.log("Lancement fonction affectationMission")}

  const lsConsultantsAAjouter = Array.from(document.getElementById("listbox-AjouterConsultant").selectedOptions).map(option => option.value);
  const lsConsultantsASuppr = Array.from(document.getElementById("listbox-EnleverConsultant").selectedOptions).map(option => option.value);
    
  if (globalVar.debug) {console.log("lsConsultantsAAjouter", lsConsultantsAAjouter, "\nlsConsultantsASuppr", lsConsultantsASuppr)}

  await Excel.run(async (context) => { 
    context.application.screenUpdating = false;
    const wsAffectation = context.workbook.worksheets.getItem("Affectation des consultants");
    const wsPlanningMission = context.workbook.worksheets.getItem("2. Planning - Missions");
    
    const listeMissions = context.workbook.names.getItem("Liste_Missions").getRange();
    await listeMissions.load("values");
    const listeConsultants = context.workbook.names.getItem("Liste_Consultants").getRange();
    await listeConsultants.load("values");

    await context.sync();

    const missionName = wsPlanningMission.getCell(1, 1); //B2 = 1, 1
    await missionName.load("values");
    await context.sync();

    const indexMission = listeMissions.values.flat().findIndex(value => value === missionName.values[0][0]) + 1;
    if (globalVar.debug) {console.log("Nom de la mission :", missionName.values[0][0], "indexMission", indexMission)}

    for (const constName of lsConsultantsAAjouter) {
      if (globalVar.debug) {console.log("constName à ajouter", constName)}
      const indexName = listeConsultants.values.flat().findIndex(value => value === constName) + 1;
      wsAffectation.getCell(indexMission + 2, indexName + 2).values = [["Affecté à la mission"]]
    }

    for (const constName of lsConsultantsASuppr) {
      if (globalVar.debug) {console.log("constName à suppr", constName)}
      const wsConsultant = context.workbook.worksheets.getItem(constName);
      await context.sync();
      const rangeNbJoursMissions = wsConsultant.getRangeByIndexes(indexMission + 5, 4, 1, 81 - 3);
      await rangeNbJoursMissions.load("values")
      await context.sync();
      if (globalVar.debug) {console.log("rangeNbJoursMissions", rangeNbJoursMissions.values.flat())}

      const valNbJoursMissions = rangeNbJoursMissions.values.flat()
      if (valNbJoursMissions.filter(value => value != "").length != 0) {
        rangeNbJoursMissions.values = [Array(78).fill("")]; //78 car c'est le nombre de semaines dans le planning
        await context.sync();
      }
      const indexName = listeConsultants.values.flat().findIndex(value => value === constName) + 1;
      wsAffectation.getCell(indexMission + 2, indexName + 2).values = [[""]]
    }
    await context.sync()

    context.application.calculate();
    await context.sync();
    await formatMissions();
    await formatProtection();
    context.application.screenUpdating = true;
    globalVar.debug = true;

    showSection("sec-userForm-AffectationMissionOk");
    document.getElementById("texte-AffectationMissionOk").innerText = 
      "Consultant(s) ajouté(s) : " + lsConsultantsAAjouter +
      "\nConsultant(s) retiré(s) : " + lsConsultantsASuppr;

  }).catch((error) => {
    globalVar.debug = true;
    console.error("Erreur lors l'ajout de la modification de l'affectation à la mission : " + error);
    if (error instanceof OfficeExtension.Error) {
      console.error("Error debug info: " + JSON.stringify(error.debugInfo));
    }
  });
}

export async function affectationConsultant() {
  if (globalVar.debug) {console.log("Lancement fonction affectationConsultant")}
  if (globalVar.debug) {console.log("Lancement fonction affectationMission")}

  const lsMissionsAAjouter = Array.from(document.getElementById("listbox-AjouterMission").selectedOptions).map(option => option.value);
  const lsMissionsASuppr = Array.from(document.getElementById("listbox-EnleverMission").selectedOptions).map(option => option.value);
    
  if (globalVar.debug) {console.log("lsMissionsAAjouter", lsMissionsAAjouter, "\lsMissionsASuppr", lsMissionsASuppr)}

  await Excel.run(async (context) => { 
    context.application.screenUpdating = false;
    const wsAffectation = context.workbook.worksheets.getItem("Affectation des consultants");
    const wsPlanningConsultant = context.workbook.worksheets.getItem("2. Planning - Consultant");
    
    const listeMissions = context.workbook.names.getItem("Liste_Missions").getRange();
    await listeMissions.load("values");
    const listeConsultants = context.workbook.names.getItem("Liste_Consultants").getRange();
    await listeConsultants.load("values");

    await context.sync();


    const rangeName = wsPlanningConsultant.getCell(1, 1); //B2 = 1, 1
    await rangeName.load("values");
    await context.sync();

    const constName = rangeName.values[0][0];

    const indexName = listeConsultants.values.flat().findIndex(value => value === constName) + 1;
    if (globalVar.debug) {console.log("Nom de la mission :", constName, "indexMission", indexName)}

    for (const missionName of lsMissionsAAjouter) {
      if (globalVar.debug) {console.log("missionName à ajouter :", missionName)}
      const indexMission = listeMissions.values.flat().findIndex(value => value === missionName) + 1;
      wsAffectation.getCell(indexMission + 2, indexName + 2).values = [["Affecté à la mission"]];
    }

    for (const missionName of lsMissionsASuppr) {
      if (globalVar.debug) {console.log("missionName à suppr", missionName)}
      const indexMission = listeMissions.values.flat().findIndex(value => value === missionName) + 1;      
      const wsConsultant = context.workbook.worksheets.getItem(constName);
      await context.sync();
      const rangeNbJoursMissions = wsConsultant.getRangeByIndexes(indexMission + 5, 4, 1, 81 - 3);
      await rangeNbJoursMissions.load("values")
      await context.sync();
      if (globalVar.debug) {console.log("rangeNbJoursMissions", rangeNbJoursMissions.values.flat())}

      const valNbJoursMissions = rangeNbJoursMissions.values.flat()
      if (valNbJoursMissions.filter(value => value != "").length != 0) {
        if (globalVar.debug) {console.log("val a supprimer")}
        rangeNbJoursMissions.values = [Array(78).fill("")]; //78 car c'est le nombre de semaines dans le planning
        await context.sync();
      }
      wsAffectation.getCell(indexMission + 2, indexName + 2).values = [[""]]
    }
    await context.sync()

    context.application.calculate();
    await context.sync();
    await formatConsultants();
    await formatProtection();
    context.application.screenUpdating = true;
    globalVar.debug = true;

    showSection("sec-userForm-AffectationConsultantOk");
    document.getElementById("texte-AffectationConsultantOk").innerText = 
      "Mission(s) ajoutée(s) : " + lsMissionsAAjouter +
      "\nMission(s) retirée(s) : " + lsMissionsASuppr;

 }).catch((error) => {
   globalVar.debug = true;
   console.error("Erreur lors l'ajout de la modification de l'affectation du consultant : " + error);
   if (error instanceof OfficeExtension.Error) {
     console.error("Error debug info: " + JSON.stringify(error.debugInfo));
   }
 });
}   
