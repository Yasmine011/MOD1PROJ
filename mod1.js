let pic = document.getElementsByClassName("dogSearchButton");
Array.from(pic).forEach((search) => search.addEventListener("click", dogPic));

document.querySelector(".submit").addEventListener("click", dogPic)

function dogBreed(pressedButton) {
  // variable assigned to user input for dog breed pic search
  let breed = document.getElementsById("dogSearchBar").value;

  // capitalize all letters in dog name
  breed = breed.toUpperCase();

  // if user inputs no bred name or a number,
  // then Irish setter is applied
  if (!breed.isNaN() || breed == "") breed = "IRISH SETTER";

  // checks for two word named breeds
  // makes array then string
  // concatenates %20 for fetch url
  breed = breed.split(" ").join("%20");

  // no use just to carry event listening parameter and
  // signify when user has finished entering a input
  let press = pressedButton.target.innterHTML;

  // clears the pic holder inner text for a new pic!
  document.getElementsByName("Pic Holder").innerText = "";

  // sends the user input as string parameter to api
  dogPic(breed);
}

async function dogPic(breedofdog) {
    console.log(breedofdog)
  const site = "https://projectksara-images.p.rapidapi.com/Animals/AnimalsDogs.php?x=";
  const pic = breedofdog.toLowerCase();
  fetch(site + pic, {
    method: "GET",
	headers: {
		"x-rapidapi-host": "projectksara-images.p.rapidapi.com",
		"x-rapidapi-key": "3e43544298msh712d1554095d175p1e110bjsnc6d879e70c09",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let dogpic = document.querySelector('.dogpic')
      dogpic.innerHTML=`<img src ="${data}" >`
    })
    .catch((err) => console.error(err));
}
























/*
async function dogPic(breedofdog) {
    console.log(breedofdog)
  const site = "https://projectksara-images.p.rapidapi.com/Animals/AnimalsDogs.php?x=";
  const pic = breedofdog.toLowerCase();
  fetch(site + pic, {
    method: "GET",
	headers: {
		"x-rapidapi-host": "projectksara-images.p.rapidapi.com",
		"x-rapidapi-key": "3e43544298msh712d1554095d175p1e110bjsnc6d879e70c09",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let dogpic = document.querySelector('.dogpic')
      dogpic.innerHTML=`<img src ="${data}" >`
    })
    .catch((err) => console.error(err));
}
*/