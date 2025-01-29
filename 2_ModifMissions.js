

import {globalVar, ajoutModif} from './taskpane.js';
import {formatProtection, formatMissions, formatSemaine} from "./0_Format.js"


// Deb Modif Missions :

export async function ActivationPlanningMission() {
  await Excel.run(async (context) => {
    // globalVar.debug = false;
    if (globalVar.debug) {console.log("Activation de la feuille 2. Planning - Missions")};

    // Désactiver la mise à jour écran
    const application = context.application;
    application.screenUpdating = false;

    // Calculer les formules
    application.calculate();

    // Appeler les fonctions de formatage
    await formatProtection();
    await formatMissions();
    await formatSemaine("2. Planning - Missions", 5);

    application.screenUpdating = true;

    await context.sync();
    globalVar.debug = true;
  }).catch((error) => {
    globalVar.debug = true;
    console.error("Erreur lors de l'exécution de ActivationPlanningMission :", error);
    if (error instanceof OfficeExtension.Error) {
      console.error("Error globalVar.debug info: " + JSON.stringify(error.debugInfo));
    }
  });
}

export async function modifPlanningMission(celluleModifiee, rowIndexModif, columnIndexModif) {
  // globalVar.debug = false;
  if (globalVar.debug) {
    console.log("Fonction modifPlanningMission exécutée.");
    console.log("modifPlanningMission appelée avec :", celluleModifiee, rowIndexModif, columnIndexModif);
  }
  await Excel.run(async (context) => {
    if (globalVar.debug) {console.log("Début de la fonction modifPlanningMission")};

    // Définir les variables des feuilles de calcul
    const workbook = context.workbook;
    const wsPlanning = workbook.worksheets.getActiveWorksheet();
    const nbMissionsMaxItem = workbook.names.getItemOrNullObject("Nb_Missions_Max");
    
    // Charger des propriétés pour s'assurer de leur disponibilité
    await wsPlanning.load("name");
    await nbMissionsMaxItem.load("value");
    await context.sync();


    let Nb_Missions_Max;
    if (!nbMissionsMaxItem.isNullObject) {
      Nb_Missions_Max = nbMissionsMaxItem.value;
    } else {
      throw new Error("Le nom 'Nb_Missions_Max' n'existe pas dans le classeur");
    }
    
    // Chargement de la plage de cellule modifiée
    await celluleModifiee.load("address, values");
    await context.sync();

    // globalVar.debug chargement des propriétés du classeur
    if (globalVar.debug) {
      console.log("Feuille de calcul chargée :", wsPlanning.name);
      console.log("Valeur de Nb_Missions_Max :", Nb_Missions_Max);
      console.log("Adresse de la plage modifiée :", celluleModifiee);

      console.log("Numéro de la première ligne modifiée :", rowIndexModif+1);
    }
    
    // Définition valeur de la cellule mission
    const celluleMission = wsPlanning.getRange("B2");
    await celluleMission.load("values");
    await context.sync();
    const missionName = celluleMission.values[0][0];
    if (globalVar.debug) {console.log("Valeur de la cellule B2 chargée :", celluleMission.values[0][0])};

    // Définition des modifications enregistrées
    const modifiedValues = celluleModifiee.values.flat();
    if (globalVar.debug) {console.log("Nombre de jours renseigné :", modifiedValues)};
    
    for (let boucle = 0; boucle < celluleModifiee.rowCount; boucle++) {
      if (globalVar.debug) {console.log(`Traitement de la ligne ${boucle + 1} sur ${celluleModifiee.rowCount}`)};
      const planningValue = modifiedValues[boucle];

      // Vérifier si la valeur de la cellule de la colonne 2 est non vide
      if (planningValue !== "") {
        if (globalVar.debug) {console.log("Nombre de jour non vide pour la ligne :", boucle, "\nNombre de jour :", planningValue)};

        // Chargement de la feuille du consultant
        const consultantName = wsPlanning.getCell(rowIndexModif + boucle, 2);
        await consultantName.load("values");
        await context.sync();
        if (globalVar.debug) {console.log("Nom du consultant :", consultantName.values[0][0])};
 
        const wsConsultant = workbook.worksheets.getItem(consultantName.values[0][0]);
        await wsConsultant.load("name");
        await context.sync();
        if (globalVar.debug) {console.log("Feuille du consultant", wsConsultant.name, "chargée")};
 
        const missionSupervisor = wsPlanning.getCell(rowIndexModif + boucle, 1);
        await missionSupervisor.load("values");
        await context.sync();

        if (globalVar.debug) {console.log("Nom Mission :", missionName, "Cellule :", rowIndexModif + boucle, 2)};
        const matchRange = wsConsultant.getRange("C7:C" + (parseInt(Nb_Missions_Max) + 6));
        await matchRange.load("values");
        await context.sync();


        // Trouver l'index avec une logique similaire à `XMatch`
        const missionList = matchRange.values.flat();
        if (globalVar.debug) {console.log("Valeurs aplaties de la plage C7:C :", missionList)};
        let index = missionList.indexOf(missionName);

        if (index !== -1) {
          if (globalVar.debug) {console.log("Index trouvé pour la mission :", index)};
          for (let col = 0; col < celluleModifiee.columnCount; col++) {
            const destinationRange = wsConsultant.getRange("D7").getCell(index, columnIndexModif + col - 3);
            destinationRange.values = [[planningValue]];
          }
        } else {
          if (globalVar.debug) {console.log("Aucun index trouvé pour la mission.")};
        }
        ajoutModif(missionName, missionSupervisor.values[0][0], consultantName.values[0][0])
      }
    }
    await context.sync();
    // Supprimer la plage modifiée après traitement
    celluleModifiee.clear(Excel.ClearApplyTo.contents);
    if (globalVar.debug) {console.log("Contenu de la plage modifiée supprimé :", celluleModifiee.address)};
    
    //await Excel.run(async (ctx) => ctx.application.calculate()); XXXXX
    
    if (globalVar.debug) {console.log("Calcul déclenché après modification de la feuille", wsPlanning.name)};
    await context.sync();
    globalVar.debug = true;
  }).catch((error) => {
    globalVar.debug = true;
    console.error("Erreur lors de la modification du planning mission: " + error);
    if (error instanceof OfficeExtension.Error) {
      console.error("Error globalVar.debug info: " + JSON.stringify(error.debugInfo));
    }
  });
}

// Fonction de gestion des modifications de la feuille
export async function ChgtFeuilleMission(event) {
  // globalVar.debug = false;

  if (globalVar.debug) {console.log("Fonction ChgtFeuilleMission exécutée.")};

  if (event.triggerSource == "ThisLocalAddin") {
    if (globalVar.debug) {console.log("Modification stopée car pas demandée par l'utilisateur")};
    return;
  }

  if (globalVar.isProcessing) {
    if (globalVar.debug) {console.log("Une modification est déjà en cours de traitement. Ignorée.")};
    return;
  }
  globalVar.isProcessing = true;

  await Excel.run(async (context) => {
    if (globalVar.debug) {console.log("Détection de modification dans la feuille", globalVar.nbExecModifMission++, "fois")};
    const workbook = context.workbook;
    const activeSheet = workbook.worksheets.getActiveWorksheet();
    
    const sheetName = "2. Planning - Missions";
    const sheet = context.workbook.worksheets.getItem(sheetName);
    
    // Désactiver temporairement le gestionnaire d'événements
    if (globalVar.debug) {console.log("Désactivation temporaire du gestionnaire onChanged")};
    sheet.onChanged.remove(ChgtFeuilleMission);

    try {
      await activeSheet.load("name");
      await context.sync();
      if (globalVar.debug) {console.log("Feuille active :", activeSheet.name)};

      if (activeSheet.name === sheetName) {
        // Charger les plages
        const rangeToCheck = activeSheet.getRange(event.address);
        const rangeTableauModif = workbook.names.getItem("Modif_Missions").getRange();
        
        await context.sync();

        // Charger les dimensions nécessaires
        await rangeToCheck.load("rowIndex, columnIndex, rowCount, columnCount, columnCount, address");
        await rangeTableauModif.load("rowIndex, columnIndex, rowCount, columnCount");
        await context.sync();

        // Vérifier l'inclusion complète en une seule ligne
        const isModifInTab =
          rangeToCheck.rowIndex >= rangeTableauModif.rowIndex &&
          rangeToCheck.rowIndex + rangeToCheck.rowCount <= rangeTableauModif.rowIndex + rangeTableauModif.rowCount &&
          rangeToCheck.columnIndex >= rangeTableauModif.columnIndex &&
          rangeToCheck.columnIndex + rangeToCheck.columnCount <= rangeTableauModif.columnIndex + rangeTableauModif.columnCount;

        if (globalVar.debug) {console.log("Flag Modif dans le tableau :", isModifInTab)};

        if (isModifInTab){
          const modifiedRange = activeSheet.getRange(event.address);
          await modifiedRange.load("address, values, rowIndex, columnIndex, rowCount, columnCount");
          await context.sync();
          
          await modifPlanningMission(modifiedRange, modifiedRange.rowIndex, modifiedRange.columnIndex);
          await context.sync();
          await Excel.run(async (ctx) => ctx.application.calculate());
        }
        if (event.address.includes("B2")) {
          if (globalVar.debug) {console.log("Modification détectée dans la plage B2")};
          await Excel.run(async (ctx) => ctx.application.calculate());
          await formatProtection();
          await formatMissions();
        }
      }
      const valCalculationState = workbook.application;
      await valCalculationState.load("calculationState");
      await context.sync();
      if (globalVar.debug) {console.log("calculationState =", valCalculationState.calculationState)}

      while (valCalculationState.calculationState !== "Done") {
        await new Promise(resolve => setTimeout(resolve, 500));
        await valCalculationState.load("calculationState");
        await context.sync();
        if (globalVar.debug) {console.log("calculationState en attente", valCalculationState.calculationState)}
      }

      globalVar.debug = true;
    } catch (error) {
      globalVar.debug = true;
      console.error("Erreur lors du traitement de la modification : " + error);
    } finally {
      // Réactiver le gestionnaire d'événements
      if (globalVar.debug) {console.log("Réactivation du gestionnaire onChanged")};
      sheet.onChanged.add(ChgtFeuilleMission);
      await context.sync();
      globalVar.debug = true;
      globalVar.isProcessing = false;
    }
  }).catch((error) => {
    console.error("Erreur lors de la gestion des modifications de la feuille : " + error);
    if (error instanceof OfficeExtension.Error) {
      console.error("Error globalVar.debug info: " + JSON.stringify(error.debugInfo));
    }
    globalVar.isProcessing = false;
    globalVar.debug = true;
  });
}

// Fin Modif Missions
