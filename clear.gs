// function to clear the userForm

function  clearform(){

  var myGoogleSheet = SpreadsheetApp.getActiveSpreadsheet();

  var shUserForm = myGoogleSheet.getSheetByName("User Form");

  var ui = SpreadsheetApp.getUi();

  var response = ui.alert("Reset Confirmation" , "Do you want to clear the Student Form", ui.ButtonSet.YES_NO);

  if(response == ui.Button.NO){
    return;
  }

  shUserForm.getRange("I7").clear(); //search bar = CUNY ID

  shUserForm.getRange("D7").clear(); //CUNY ID
  shUserForm.getRange("D10").clear(); //First Name
  shUserForm.getRange("D13").clear(); //Last Name
  shUserForm.getRange("D16").clear(); //GPA
  shUserForm.getRange("D19").clear(); //Status

  shUserForm.getRange("I7").setBackground("FFFFFF");
  shUserForm.getRange("D7").setBackground("FFFFFF");
  shUserForm.getRange("D10").setBackground("FFFFFF");
  shUserForm.getRange("D13").setBackground("FFFFFF");
  shUserForm.getRange("D16").setBackground("FFFFFF");
  shUserForm.getRange("D19").setBackground("FFFFFF");

  return true;
  
}
