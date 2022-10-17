function onEdit(e) {
  //Columns
  checkBoxCol = 9; //Number not letter
  datetimePasteCol = 10;
  colDifference = datetimePasteCol - checkBoxCol;

  var range = e.range;
  var sheet = range.getSheet();
  if(sheet.getSheetName() == "Placements") {
    if(range.columnStart == checkBoxCol) { //Column I
      var nextCell = range.offset(0, colDifference); //The column next to it. The datetime column
      nextCell.setValue(new Date());
    } else if(range.columnStart == checkBoxCol && range.isChecked()) { //Column I
      var nextCell = range.offset(0, datetimePasteCol); //The datetime column
      nextCell.setValue(new Date());
    }
  }
}
//Built on top of a script found here:
//https://stackoverflow.com/questions/61119442/how-to-insert-date-and-time-when-a-check-box-is-checked-in-google-sheet
