//search function 

function searchRecord(){
  //active google sheet
  var myGoogleSheet = SpreadsheetApp.getActiveSpreadsheet();

  //declare variable and set the user form
  var shUserForm = myGoogleSheet.getSheetByName("User Form");

  //declare varialbe and set the database sheet
  var datasheet = myGoogleSheet.getSheetByName("Database");

  var str = shUserForm.getRange("I7").getValue();

  //get the values from the used range assign it to value variable
  var values = datasheet.getDataRange().getValues();

  var valuesFound = false; //variable to store boolean value

  for (var i = 0; i < values.length; i++){
      var rowValue = values[i]; //declare a variable and storing the value

      //checking the first value of recordis equal to search item

      if(rowValue[0] == str){
        shUserForm.getRange("D7").setValue(rowValue[0]);  
        shUserForm.getRange("D10").setValue(rowValue[1]);  
        shUserForm.getRange("D13").setValue(rowValue[2]);  
        shUserForm.getRange("D16").setValue(rowValue[3]);  
        shUserForm.getRange("D19").setValue(rowValue[4]);  
        valuesFound = true;
        return;
        
      }
  }

  if(valuesFound==false){
    //if can't find pop up message "can't find"

    var ui= SpreadsheetApp.getUi();
    ui.alert("Can't Find the Record");
  }

}
