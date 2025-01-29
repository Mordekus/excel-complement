
import {globalVar, ajoutModif} from './taskpane.js';

// Deb Modif Encadrant


export async function ActivationPlanningEncadrant() {
  await Excel.run(async (context) => {
    // globalVar.debug = false;
    if (true) {console.log("Activation de la feuille 3. Planning - Encadrant")};

    const workbook = context.workbook;

    // Calculer les formules
    const application = context.application;
    application.calculate();

    const rangeTableau = workbook.names.getItem("Recap_3").getRange(); 
    await context.sync();

    const conditionalFormats = rangeTableau.conditionalFormats;
    await conditionalFormats.load("items");
    await context.sync();

    const formatCount = conditionalFormats.items.length;

    // Modifier la plage à laquelle s'applique les formats conditionnels
    for (let i = 0; i < formatCount; i++) {
      if (globalVar.debug) {console.log(`Traitement du format ${i} sur ${formatCount}`)};

      const formatCondition = conditionalFormats.getItemAt(i);
      await context.sync();

      if (globalVar.debug) {
        console.log("Format condition", formatCondition);
        console.log("Ancienne plage :", formatCondition.address);
      }

      // Appliquer les formats conditionnels à la nouvelle plage
      formatCondition.setRanges(rangeTableau);

      await context.sync();

      const newRangeCond = formatCondition.getRanges();
      await newRangeCond.load("address");
      await context.sync();

      if (globalVar.debug) {console.log("Nouvelle plage :", newRangeCond.address)};
    }
    await context.sync();

    globalVar.debug = true;
  }).catch((error) => {
    globalVar.debug = true;
    console.error("Erreur lors de l'exécution de ActivationPlanningEncadrant :", error);
    if (error instanceof OfficeExtension.Error) {
      console.error("Error globalVar.debug info: " + JSON.stringify(error.debugInfo));
    }
  });
}

// Fonction de gestion des modifications de la feuille
export async function ChgtFeuilleEncadrant(event) {
  //globalVar.debug = false;

  if (globalVar.debug) {console.log("Fonction ChgtFeuilleEncadrant exécutée")};
  if (globalVar.isProcessing) {
    if (globalVar.debug) {console.log("Une modification est déjà en cours de traitement. Ignorée.")};
    return;
  }
  globalVar.isProcessing = true;

  await Excel.run(async (context) => {
    if (globalVar.debug) {console.log("Détection de modification dans la feuille", globalVar.nbExecModifEncadrant++, "fois")};
    const workbook = context.workbook;
    const activeSheet = workbook.worksheets.getActiveWorksheet();

    const sheetName = "3. Planning - Encadrant";
    const sheet = context.workbook.worksheets.getItem(sheetName);
    
    // Désactiver temporairement le gestionnaire d'événements
    if (globalVar.debug) {console.log("Désactivation temporaire du gestionnaire onChanged")};
    sheet.onChanged.remove(ChgtFeuilleEncadrant);

    try {
      await activeSheet.load("name");
      await context.sync();
      if (globalVar.debug) {console.log("Feuille active :", activeSheet.name)};

      if (activeSheet.name === sheetName) {
        if (event.address.includes("B2") | event.address.includes("B3")) {
          if (globalVar.debug) {console.log("Modification détectée dans la plage B2:B3")};
          await Excel.run(async (ctx) => ctx.application.calculate());
          
          const rangeTableau = workbook.names.getItem("Recap_3").getRange();
          await context.sync();

          const conditionalFormats = rangeTableau.conditionalFormats;
          await conditionalFormats.load("items");
          await context.sync();

          const formatCount = conditionalFormats.items.length;

          // Modifier la plage à laquelle s'applique les formats conditionnels
          for (let i = 0; i < formatCount; i++) {
            if (globalVar.debug) {console.log(`Traitement du format ${i} sur ${formatCount}`)};

            const formatCondition = conditionalFormats.getItemAt(i);
            await context.sync();

            if (globalVar.debug) {
              console.log("Format condition", formatCondition);
              console.log("Ancienne plage :", formatCondition.address);
            }

            // Appliquer les formats conditionnels à la nouvelle plage
            formatCondition.setRanges(rangeTableau);

            await context.sync();

            const newRangeCond = formatCondition.getRanges();
            await newRangeCond.load("address");
            await context.sync();

            if (globalVar.debug) {console.log("Nouvelle plage :", newRangeCond.address)};
          }

          // await applyNewRangeToConditionnalFormat(rangeTableau, rangeTableau);
        }
      }
      globalVar.debug = true;
    } catch (error) {
      globalVar.debug = true;
      console.error("Erreur lors du traitement de la modification : " + error);
    } finally {
      // Réactiver le gestionnaire d'événements
      if (globalVar.debug) {console.log("Réactivation du gestionnaire onChanged")};
      sheet.onChanged.add(ChgtFeuilleEncadrant);
      await context.sync();
      globalVar.isProcessing = false;
      globalVar.debug = true;
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

// Fin Modif Encadrant
