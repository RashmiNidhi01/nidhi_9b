// Createing traveller info
const traveler = {
    name: "Rashmi",
    countries: [
      {
        name: "Nepal",
        year: 2003
      },
      {
        name: "Bhutan",
        year: 2019
      },
      {
        name: "USA",
        year: 2021
      }
    ]
  };
  // Cancel default behavior of sending a synchronous POST request
  const formElement=document.querySelector("form");
  formElement.addEventListener("click", e => {
    e.preventDefault(); 
  // Send this object as JSON data to the server
  fetch("http://localhost:3008/api/countries", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(traveler)
  })
    then(response => response.text())
       .then(result => {
         document.getElementById("visiting").textContent = result;
       })
    .catch(err => {
      console.error(err.message);})
    });