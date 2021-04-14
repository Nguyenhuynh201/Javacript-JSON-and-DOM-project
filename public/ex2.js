const traveler = {
    name: "Nguyen",
    countries: [
      {
        name: "Thailand",
        year: 2009
      },
      {
        name: "Singapore",
        year: 2012
      },
      {
        name: "USA",
        year: 2013
      }
    ]
  };
  fetch("http://localhost:3000/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(traveler)
})
  .then(response => response.text())
  .then(result => {
    document.getElementById("result").textContent = result;
  })
  .catch(err => {
    console.error(err.message);
  });