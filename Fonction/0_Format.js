// Deb Format

import {globalVar} from './taskpane.js';

export async function formatProtection() {
  await Excel.run(async (context) => {
    globalVar.debug = false;

    const workbook = context.workbook;
    const ws = workbook.worksheets.getActiveWorksheet();
    await ws.load("name");
    await context.sync();

    // Déprotéger la feuille
    ws.protection.unprotect();

    // Verrouiller toutes les cellules
    ws.getRange().format.protection.locked = true;

    const columnB = ws.getRange("B:B").getUsedRange();
    await columnB.load("rowCount");
    await context.sync();

    if (globalVar.debug) {console.log("nb val colonne B :", columnB.rowCount)};

    if (ws.name === "2. Planning - Consultant") {
      const nonEmptyCount = columnB.rowCount - 9;
      if (globalVar.debug) {console.log("nbMissions :", nonEmptyCount)};

      // Déverrouiller les cellules spécifiques
      ws.getRange("B2:B3").format.protection.locked = false;

      if (nonEmptyCount > 0) {
        const startRange = ws.getRange("E10");
        const endRange = ws.getCell(9 + nonEmptyCount, 81); // CD correspond à colonne 81
        await startRange.load("address");
        await endRange.load("address");
        await context.sync();

        const rangeToUnlock = ws.getRange(startRange.address + ":" + endRange.address);
        rangeToUnlock.format.protection.locked = false;
      }
    }

    if (ws.name === "2. Planning - Missions") {

      await columnB.load("values");
      await context.sync();

      if (globalVar.debug) {
        console.log("val colonne B :", columnB.values.flat());
        console.log("val colonne B :", columnB.values.flat().filter(value => value !== ""));
      }

      const nonEmptyCount = columnB.values.flat().filter(value => value !== "").length - 3;
      if (globalVar.debug) {console.log("nb Consultants :", nonEmptyCount)};

      const cellB2 = ws.getRange("B2");
      await cellB2.load("values")
      await context.sync();

      cellB2.format.protection.locked = false;

      if (cellB2.values[0][0] !== "00 - Congés/jours fériés") {
        const startRange = ws.getRange("E9");
        const endRange = ws.getCell(7 + nonEmptyCount, 81); // CD correspond à colonne 81
        await startRange.load("address");
        await endRange.load("address");
        await context.sync();

        if (globalVar.debug) {console.log("Plage à débloquer :", startRange.address + ":" + endRange.address)};
        const rangeToUnlock = ws.getRange(startRange.address + ":" + endRange.address);
        rangeToUnlock.format.protection.locked = false;
      }
    }

    // Protéger la feuille
    ws.protection.protect();
    if (globalVar.debug) {console.log("Feuille", ws.name, "protégée")};
    await context.sync();
    globalVar.debug = true;
  }).catch((error) => {
    globalVar.debug = true;
    console.error("Erreur lors de l'exécution de formatProtection :", error);
    if (error instanceof OfficeExtension.Error) {
      console.error("Error globalVar.debug info: " + JSON.stringify(error.debugInfo));
    }
  });
}

export async function formatMissions() {
  await Excel.run(async (context) => {
    globalVar.debug = false;

    const workbook = context.workbook;
    const ws = workbook.worksheets.getItem("2. Planning - Missions");

    // Déprotection de la feuille
    ws.protection.unprotect();

    // Obtenir la plage Modif_Missions
    const modifMissionsRange = workbook.names.getItem("Modif_Missions").getRange();
    await modifMissionsRange.load("address, formatConditions, rowIndex, rowCount, columnCount");
    await context.sync();

    const endRange = ws.getCell(modifMissionsRange.rowIndex + modifMissionsRange.rowCount - 1, modifMissionsRange.columnCount + 3);
    await endRange.load("address");
    await context.sync();

    const conditionalFormats = modifMissionsRange.conditionalFormats;
    await conditionalFormats.load("items");
    await context.sync();

    const sRange = `B${modifMissionsRange.rowIndex+1}:${endRange.address}`;
    if (globalVar.debug) {
      console.log("modifMissionsRange :", modifMissionsRange.address);
      console.log("globalVar.debug sRange: ", sRange);
    }

    // Nouvelle plage
    const newRange = ws.getRange(sRange);
    await newRange.load("address");
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
      formatCondition.setRanges(newRange);

      await context.sync();

      const newRangeCond = formatCondition.getRanges();
      await newRangeCond.load("address");
      await context.sync();

      if (globalVar.debug) {console.log("Nouvelle plage :", newRangeCond.address)};
    }

    // Gestion des lignes visibles en fonction du nombre de consultants

    const nbConsultantsItem = workbook.names.getItemOrNullObject("Nb_Consultants");
    await nbConsultantsItem.load("value");
    await context.sync();

    let nbConsultants;
    if (!nbConsultantsItem.isNullObject) {
      nbConsultants = nbConsultantsItem.value;
    } else {
      throw new Error("Le nom 'nbConsultants' n'existe pas dans le classeur");
    }
    if (globalVar.debug) {console.log("nbConsultants cabinet:", nbConsultants)}

    const columnB = ws.getRange("B:B").getUsedRange();
    await columnB.load("values");
    await context.sync();

    const nbConsultantsMission = columnB.values.flat().filter((value) => value !== "").length - 3;

    if (globalVar.debug) {
      console.log("val colonne B :", columnB.values.flat());
      console.log("val colonne B :", columnB.values.flat().filter(value => value !== ""));
      console.log("nb Consultants mission:", nbConsultantsMission);
    }

    const startRangeShow = ws.getRange(`C${9}`);
    const endRangeShow = ws.getRange(`C${8 + nbConsultants}`);
    await startRangeShow.load("address");
    await endRangeShow.load("address");
    await context.sync();

    const rangeToShow = ws.getRange(startRangeShow.address + ":" + endRangeShow.address);
    if (globalVar.debug) {console.log("Plage à cacher :", startRangeShow.address + ":" + endRangeShow.address)};
    await rangeToShow.load("address, rowIndex, rowCount");
    await context.sync();

    const entireRowShow = ws.getRange(`${rangeToShow.rowIndex + 1}:${rangeToShow.rowIndex + rangeToShow.rowCount - 1}`);
    entireRowShow.rowHidden = false;

    if (nbConsultantsMission < nbConsultants) {
      const startRange = ws.getRange(`C${9 + nbConsultantsMission}`);
      const endRange = ws.getRange(`C${9 + nbConsultants}`);
      await startRange.load("address");
      await endRange.load("address");
      await context.sync();

      const rangeToHide = ws.getRange(startRange.address + ":" + endRange.address);
      if (globalVar.debug) {console.log("Plage à cacher :", startRange.address + ":" + endRange.address)};
      await rangeToHide.load("address, rowIndex, rowCount");
      await context.sync();

      if (globalVar.debug) {
        console.log("adresse rangeToHide", rangeToHide.address);
        console.log("rangetohide.entireRow", rangeToHide.entireRow);
      }

      const entireRow = ws.getRange(`${rangeToHide.rowIndex + 1}:${rangeToHide.rowIndex + rangeToHide.rowCount - 1}`);
      entireRow.rowHidden = true;
      
    }
    await context.sync();

    // Revenir à la cellule B3
    const cellB3 = ws.getRange("B3");
    cellB3.select();

    // Réactiver la protection de la feuille
    ws.protection.protect();
    await context.sync();
    globalVar.debug = true;
  }).catch((error) => {
    globalVar.debug = true;
    console.error("Erreur lors de l'exécution de formatMissions :", error);
    if (error instanceof OfficeExtension.Error) {
      console.error("Error globalVar.debug info: " + JSON.stringify(error.debugInfo));
    }
  });
}


export async function formatConsultants() {
  await Excel.run(async (context) => {
    globalVar.debug = false;

    const workbook = context.workbook;
    const ws = workbook.worksheets.getItem("2. Planning - Consultant");

    // Obtenir la plage Modif_Consultant
    const modifConsultantRange = workbook.names.getItem("Modif_Consultant").getRange();
    await modifConsultantRange.load("address, conditionalFormats, rowIndex, rowCount, columnCount");
    await context.sync();
    if (globalVar.debug) {console.log("Modif_Consultant :", modifConsultantRange.address, "\nFormats conditionnels :", modifConsultantRange.conditionalFormats)};

    const conditionalFormats = modifConsultantRange.conditionalFormats;
    await conditionalFormats.load("items");
    await context.sync();

    const endRange = ws.getCell(modifConsultantRange.rowIndex + modifConsultantRange.rowCount - 1, modifConsultantRange.columnCount + 3);
    await endRange.load("address");
    await context.sync();

    const sRange = `B${modifConsultantRange.rowIndex+1}:${endRange.address}`;
    if (globalVar.debug) {
      console.log("modifMissionsRange :", modifConsultantRange.address);
      console.log("globalVar.debug sRange: ", sRange);
    }

    // Nouvelle plage
    const newRange = ws.getRange(sRange);
    await newRange.load("address");
    await context.sync();

    const formatCount = conditionalFormats.items.length;
    if (globalVar.debug) {console.log(`Nombre de formats conditionnels trouvés : ${formatCount}`)};

    // Modifier la plage à laquelle s'applique les formats conditionnels
    for (let i = 0; i < formatCount; i++) {
      if (globalVar.debug) {console.log(`Traitement du format ${i} sur ${formatCount}`)};

      const formatCondition = conditionalFormats.getItemAt(i);
      await context.sync();

      await context.sync();

      if (globalVar.debug) {
        const oldRange = formatCondition.getRanges();
        await oldRange.load("address");
        await context.sync();
        console.log("Ancienne plage :", oldRange.address)
      }

      // Appliquer les formats conditionnels à la nouvelle plage
      formatCondition.setRanges(newRange);

      await context.sync();

      if (globalVar.debug) {
        const newRangeCond = formatCondition.getRanges();
        await newRangeCond.load("address");
        await context.sync();
        console.log("Nouvelle plage :", newRangeCond.address)
      }
    }

    await context.sync();
    if (globalVar.debug) {console.log("Format_Consultants appliqué avec succès.")};

    globalVar.debug = true;
  }).catch((error) => {
    globalVar.debug = true;
    console.error("Erreur lors de l'exécution de formatConsultants :", error);
    if (error instanceof OfficeExtension.Error) {
      console.error("Error globalVar.debug info: " + JSON.stringify(error.debugInfo));
    }
  });
}

export async function formatSemaine(sheetName, ligne) {
  await Excel.run(async (context) => {
    globalVar.debug = false;
    const workbook = context.workbook;
    const ws = workbook.worksheets.getItem(sheetName);

    // Déprotection de la feuille
    ws.protection.unprotect();

    // Charger la ligne spécifiée
    const targetRange = ws.getRange(`C${ligne}:XFD${ligne}`).getUsedRange();
    await targetRange.load("values");
    await context.sync();

    if (globalVar.debug) {console.log("Ligne semaine val", targetRange.values.flat())}

    // Trouver l'index de la colonne correspondant à "Aujourdhui"
    const aujourdhui = workbook.names.getItem("Aujourdhui").getRange();
    await aujourdhui.load("values");
    await context.sync();

    if (globalVar.debug) {console.log("Date :", aujourdhui.values[0][0])}

    const aujourdhuiValue = aujourdhui.values[0][0];
    const ligneValues = targetRange.values.flat().filter(value => value !== "");
    const i = ligneValues.findIndex(value => value === aujourdhuiValue) - 2;

    if (globalVar.debug) {console.log("Nombre de semaines (colonnes) à masquer", i)}

    if (i >= 0) {
      // Masquer les colonnes correspondant à l'index trouvé

      const startColumn = ws.getCell(0, i + 3);
      const endColumn = ws.getCell(0, 4);
      await startColumn.load("address");
      await endColumn.load("address");
      await context.sync();

      const rangeToHide = ws.getRange(`${startColumn.address}:${endColumn.address}`);

      if (globalVar.debug) {
        await rangeToHide.load("address");
        await context.sync();
        console.log("Colonnes à masquer :", rangeToHide.address);
      }

      await rangeToHide.load("columnIndex, columnCount");
      await context.sync();

      if (globalVar.debug) {
        console.log("adresse rangeToHide", rangeToHide.address);
        console.log("rangetohide.entireColumn", rangeToHide.entireColumn);
      }

      const entireColumn = ws.getRangeByIndexes(0, rangeToHide.columnIndex, 1, rangeToHide.columnCount);

      if (globalVar.debug) {
        await entireColumn.load("address");
        await context.sync();
        console.log("Adresse de la plage à masquer :", entireColumn.address);
        console.log("entireColumn", entireColumn);
      }

      entireColumn.columnHidden = true;

      await context.sync();
    }

    // Protection de la feuille avec filtrage autorisé
    ws.protection.protect({allowFiltering: true});

    await context.sync();
    globalVar.debug = true;
  }).catch((error) => {
    globalVar.debug = true;
    console.error("Erreur lors de l'exécution de formatSemaine :", error);
    if (error instanceof OfficeExtension.Error) {
      console.error("Error globalVar.debug info: " + JSON.stringify(error.debugInfo));
    }
  });
}

export async function applyNewRangeToConditionnalFormat(namedRangeItems, newRange) {
  await Excel.run(async (context) => {
    // globalVar.debug = false;

    if (globalVar.debug) {console.log("namedRangeItems", namedRangeItems)}

    const formatCount = namedRangeItems.length;
    if (globalVar.debug) {console.log(`Nombre de formats conditionnels trouvés : ${formatCount}`)};

    // Modifier la plage à laquelle s'applique les formats conditionnels
    for (let i = 0; i < formatCount; i++) {
      if (globalVar.debug) {console.log(`Traitement du format ${i} sur ${formatCount}`)};

      const formatCondition = namedRangeItems[i];
      await context.sync();

      await context.sync();

      if (globalVar.debug) {
        const oldRange = formatCondition.getRanges();
        await oldRange.load("address");
        await context.sync();
        console.log("Ancienne plage :", oldRange.address)
      }

      // Appliquer les formats conditionnels à la nouvelle plage
      formatCondition.setRanges(newRange);

      await context.sync();

      if (globalVar.debug) {
        const newRangeCond = formatCondition.getRanges();
        await newRangeCond.load("address");
        await context.sync();
        console.log("Nouvelle plage :", newRangeCond.address)
      }
    }

    globalVar.debug = true;
  }).catch((error) => {
    globalVar.debug = true;
    console.error("Erreur lors de l'exécution de applyNewRangeToConditionnalFormat :", error);
    if (error instanceof OfficeExtension.Error) {
      console.error("Error globalVar.debug info: " + JSON.stringify(error.debugInfo));
    }
  });
}



// Fin Format
