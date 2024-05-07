console.log(document.getElementById("first-name"));
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;

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

  td1.innerHTML = firstName;
  td2.innerHTML = lastName;
  td3.innerHTML = address;
  td4.innerHTML = pincode;
  td5.innerHTML = gender;
  td6.innerHTML = food1 + ", " + food2;
  td7.innerHTML = state;
  td8.innerHTML = country;

  row.append(td1, td2, td3, td4, td5, td6, td7, td8);

  tbody.appendChild(row);

  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("pincode").value = "";
  document.getElementById("gender").value = "";
  document.querySelector('input[name="food1"]:checked').value = "";
  document.querySelector('input[name="food2"]:checked').value = "";
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";
});
