console.log(document.getElementById("first-name"));
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
  const email = document.getElementById("email").value;

  if (pincode.length !== 6) {
    alert("Please enter a valid pincode");
    return;
  }

  const gender = document.getElementById("gender").value;
  if (document.querySelector('input[name="food1"]:checked') === null) {
    alert("Please select food 1 option");
    return;
  } else {
    var food1 = document.querySelector('input[name="food1"]:checked').value;
  }
  if (document.querySelector('input[name="food2"]:checked') === null) {
    alert("Please select food 2 option");
    return;
  } else {
    var food2 = document.querySelector('input[name="food2"]:checked').value;
  }
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;

  const tbody = document.getElementById("tbody");
  const row = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const td5 = document.createElement("td");
  const td6 = document.createElement("td");
  const td7 = document.createElement("td");
  const td8 = document.createElement("td");
  const td9 = document.createElement("td");

  td1.innerHTML = firstName;
  td2.innerHTML = lastName;
  td3.innerHTML = email;
  td4.innerHTML = address;
  td5.innerHTML = pincode;
  td6.innerHTML = gender;
  td7.innerHTML = food1 + ", " + food2;
  td8.innerHTML = state;
  td9.innerHTML = country;

  row.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);

  tbody.appendChild(row);

  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("pincode").value = "";
  document.getElementById("gender").value = "";
  document.querySelector('input[name="food1"]:checked').value = "";
  document.querySelector('input[name="food2"]:checked').value = "";
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";
});
