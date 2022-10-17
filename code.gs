function onEdit(e) {
  var range = e.range;
  var sheet = range.getSheet();
  if(sheet.getSheetName() == "Placements") {
    if(range.columnStart == 9) { //Column I
      var nextCell = range.offset(0, 1);
      nextCell.setValue(new Date());
    } else if(range.columnStart == 9 && range.isChecked()) {
      var nextCell = range.offset(0, 10);
      nextCell.setValue(new Date());
    }
  }
}
//https://stackoverflow.com/questions/61119442/how-to-insert-date-and-time-when-a-check-box-is-checked-in-google-sheet
