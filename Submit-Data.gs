//function to sumbit to datebase sheet

function submitData(){

  //declare and active google sheet
  var myGoogleSheet = SpreadsheetApp.getActiveSpreadsheet();

  var shUserForm = myGoogleSheet.getSheetByName('User Form');
  var datasheet = myGoogleSheet.getSheetByName("Database");

  //create UI
  var ui = SpreadsheetApp.getUi();
  var response = ui.alert("Submit", "Do you want to submit the data", ui.ButtonSet.YES_NO);

  //checking the response
  if(response == ui.Button.No){
    return; 
  }
  //if user click yes, transfer the data to database sheet
  if (validateEntry() == true){

    var blankRow = datasheet.getLastRow()+1;  //identify the next blank row

    //update the data
    datasheet.getRange(blankRow, 1).setValue(shUserForm.getRange("D7").getValue()); //CUNY ID
    datasheet.getRange(blankRow, 2).setValue(shUserForm.getRange("D10").getValue()); //First Name
    datasheet.getRange(blankRow, 3).setValue(shUserForm.getRange("D13").getValue()); //Last Name
    datasheet.getRange(blankRow, 4).setValue(shUserForm.getRange("D16").getValue()); //GPA
    datasheet.getRange(blankRow, 5).setValue(shUserForm.getRange("D19").getValue()); //Submit by 
    
    ui.alert ('"Data Saved - CUNY ID # ' + shUserForm.getRange("C7").getValue()+ '"');

    //clear the input box
    shUserForm.getRange("D7").clear();
    shUserForm.getRange("D10").clear();
    shUserForm.getRange("D13").clear();
    shUserForm.getRange("D16").clear();
    shUserForm.getRange("D19").clear();

  }
}
