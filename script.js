
function addUser() {
    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var email = document.getElementById("email").value;
  
    if (nome && cognome && email) {
      if (isValidEmail(email) && isValidName(nome) && isValidName(cognome)) {
        var table = document.getElementById("userTable").getElementsByTagName("tbody")[0];
        var newRow = table.insertRow(table.rows.length);
  
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
  
        cell1.innerHTML = nome;
        cell2.innerHTML = cognome;
        cell3.innerHTML = email;
        cell4.innerHTML = "<button onclick='editUser(this)'>Modifica</button> <button onclick='deleteUser(this)'>Elimina</button>";
  
        document.getElementById("nome").value = "";
        document.getElementById("cognome").value = "";
        document.getElementById("email").value = "";
  
        alert("Utente aggiunto correttamente!");
      } else {
        if (!isValidEmail(email)) {
          alert("Inserisci un'email valida.");
        } else {
          alert("Inserisci un nome e un cognome validi.");
        }
      }
    } else {
      alert("Inserisci nome, cognome ed email.");
    }
  }
  

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailRegex.test(email);
  }  
  
function isValidName(name) {
    if (name.length < 2 || name.length > 50) {
      return false;
    }
  
    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (specialChars.test(name)) {
      return false;
    }
  
    return true;
  }

function deleteUser(row) {
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById("userTable").deleteRow(i);
  }
  

 
function editUser(row) {
    var i = row.parentNode.parentNode.rowIndex;
    var table = document.getElementById("userTable");
    var nome = table.rows[i].cells[0].innerHTML;
    var cognome = table.rows[i].cells[1].innerHTML;
    var email = table.rows[i].cells[2].innerHTML;
  
    document.getElementById("nome").value = nome;
    document.getElementById("cognome").value = cognome;
    document.getElementById("email").value = email;
  
    table.deleteRow(i);
  }
  


function searchUser() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let table = document.getElementById("userTable");
    let rows = table.getElementsByTagName("tr");
  
    for (let i = 0; i < rows.length; i++) {
      let cells = rows[i].getElementsByTagName("td");
      let found = false;
  
      for (let j = 0; j < cells.length; j++) {
        let cellValue = cells[j].innerHTML.toLowerCase();
  
        if (cellValue.indexOf(input) > -1) {
          found = true;
          break;
        }
      }
  
      if (found) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }
  