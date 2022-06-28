const inputCity = document.querySelector("#input");
const searchBtn = document.querySelector("#btnGo");
const nameOf = document.querySelector(".name");
const mainOf = document.querySelector(".main");
const tempOf = document.querySelector(".temp");
const descOf = document.querySelector(".desc");
const countryOf = document.querySelector(".country");

searchBtn.addEventListener("click", function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=11720c2e75d4009abd43c1f558204b7d&units=metric&lang=id`
  )
    .then((response) => response.json())
    .then((data) => {

      const valOfName = data["name"];
      const valOfMain = data["weather"][0]["main"];
      const valOfTemp = data["main"]["temp"];
      const valOfDesc = data["weather"][0]["description"];
      const valOfCountry = data["sys"]["country"];


     
      nameOf.innerText = valOfName;
      mainOf.innerText = valOfMain;
      tempOf.innerHTML = `${valOfTemp} &#8451;`;
      descOf.innerText = valOfDesc;
      countryOf.innerText = valOfCountry;

      inputCity.value = "";
    })
    .catch(() => alert(`I love you`));
});
