//function of the validation
function validateEntry(){

  //decleare variable, active google sheet
  var myGoogleSheet = SpreadsheetApp.getActiveSpreadsheet();

  var shUserForm = myGoogleSheet.getSheetByName("User Form");

  var ui = SpreadsheetApp.getUi();

  shUserForm.getRange("D7").setBackground('#FFFFFF');
  shUserForm.getRange("D10").setBackground('#FFFFFF');
  shUserForm.getRange("D13").setBackground('#FFFFFF');
  shUserForm.getRange("D16").setBackground('#FFFFFF');
  shUserForm.getRange("D19").setBackground('#FFFFFF');

  //Validating CUNY ID

  if (shUserForm.getRange("D7").isBlank()==true){
    ui.alert("please enter CUNY ID");
    shUserForm.getRange("D7").activate();
    shUserForm.getRange("D7").setBackground("#FF0000");
    return false;
  }

   if (shUserForm.getRange("D10").isBlank()==true){
    ui.alert("please enter First Name");
    shUserForm.getRange("D10").activate();
    shUserForm.getRange("D10").setBackground("#FF0000");
    return false;
  }

   if (shUserForm.getRange("D13").isBlank()==true){
    ui.alert("please enter Last Name");
    shUserForm.getRange("D13").activate();
    shUserForm.getRange("D13").setBackground("#FF0000");
    return false;
  }

   if (shUserForm.getRange("D16").isBlank()==true){
    ui.alert("please enter GPA");
    shUserForm.getRange("D16").activate();
    shUserForm.getRange("D16").setBackground("#FF0000");
    return false;
  }

   if (shUserForm.getRange("D19").isBlank()==true){
    ui.alert("please enter the Status");
    shUserForm.getRange("D19").activate();
    shUserForm.getRange("D19").setBackground("#FF0000");
    return false;
  }

  return true;
}
