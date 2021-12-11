//function to delete record

function deleteRow(){

  var myGoogleSheet = SpreadsheetApp.getActiveSpreadsheet();

  var shUserForm = myGoogleSheet.getSheetByName("User Form");

  var datasheet = myGoogleSheet.getSheetByName("Database");

  var ui = SpreadsheetApp.getUi();

  var response = ui.alert("Edit, 'Do you want to edit the record ?", ui.ButtonSet.YES_NO );

  if(response == ui.Button.NO){
    return; //exit from the function
  }

  var str = shUserForm.getRange("I7").getValue(); //getting the search item: CUNY ID
  var values = datasheet.getDataRange().getValues();

  var valuesFound = false;

  for (var i = 0; i< values.length; i++){
    var rowValue = values[i];
    if(rowValue[0] == str){
        var iRow = i +1 ;

      datasheet.deleteRow(iRow);


    ui.alert("Data Deleted");

    shUserForm.getRange("H7").clear();
    shUserForm.getRange("D7").clear();
    shUserForm.getRange("D10").clear();
    shUserForm.getRange("D13").clear();
    shUserForm.getRange("D16").clear();
    shUserForm.getRange("D19").clear();
    

    valuesFound = true;
    return;
  }
  }

  if (valuesFound == false){
    ui.alert("No Record Found ");
  }

}
