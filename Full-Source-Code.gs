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

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

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


////------------------------------------------------------------------------------------------------------------------------------------------------------
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

//-------------------------------------------------------------------------------------------------------------------------------------

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


//-------------------------------------------------------------------------------------


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
