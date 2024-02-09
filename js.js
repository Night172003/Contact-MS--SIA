

function searchFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("employee-records");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those that don't match the search query
  for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1]; // Index 1 corresponds to the Name column
      if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }
  }
}

  function editForm() {
    var formPopup = document.getElementById("Contact-Form");
    formPopup.style.display = "block";
}
  
function closeForm() {
  var formPopup = document.getElementById("Contact-Form");
  formPopup.style.display = "none";

  var formPopup = document.getElementById("Show-Cont-Form");
  formPopup.style.display = "none";

  var formPopup = document.getElementById("Add-Cont-Form");
  formPopup.style.display = "none";
}

function openForm() {
  var formPopup = document.getElementById("Show-Cont-Form");
  formPopup.style.display = "block";
}

function addFunction() {
  var formPopup = document.getElementById("Add-Cont-Form");
  formPopup.style.display = "block";
}

function deleteRow(button) {
  // Get the row associated with the button
  var row = button.closest("tr");
  // Remove the row from the table
  row.parentNode.removeChild(row);
}