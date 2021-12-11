//function to edit the record
function editRecord(){

  var myGoogleSheet = SpreadsheetApp.getActiveSpreadsheet();

  var shUserForm = myGoogleSheet.getSheetByName("User Form");

  var datasheet = myGoogleSheet.getSheetByName("Database");

  var ui = SpreadsheetApp.getUi();

  var response = ui.alert("Edit, 'Do you want to edit the record ?", ui.ButtonSet.YES_NO);

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
    

    datasheet.getRange(iRow, 2).setValue(shUserForm.getRange("D10").getValue());  //First Name
    datasheet.getRange(iRow, 3).setValue(shUserForm.getRange("D13").getValue());  //Last Name
    datasheet.getRange(iRow, 4).setValue(shUserForm.getRange("D16").getValue());  //GPA
    datasheet.getRange(iRow, 5).setValue(shUserForm.getRange("D19").getValue());  //Status
    
    ui.alert("Data Updated");

    shUserForm.getRange("I7").clear();
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
