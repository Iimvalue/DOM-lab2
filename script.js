let userData = [
  {
    name: "ahmed",
    age: 20,
    src: "https://images.pexels.com/photos/31829770/pexels-photo-31829770/free-photo-of-solitary-red-tulip-in-lush-green-meadow.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  },
  {
    name: "khaled",
    age: 30,
    src: "https://images.pexels.com/photos/31831857/pexels-photo-31831857/free-photo-of-young-man-standing-on-coastal-cliff-overlooking-ocean.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  },
];



let card = document.createElement("div")
card.className = "card bg-secondary";
card.style.width = "300px"
let cardBody = document.createElement("div")
cardBody.className = "card-body";

let nameTag = document.createElement("h3")
nameTag.className = "card-title"
nameTag.textContent = `Welcome ${userData[1].name}`

let ageTag = document.createElement("h5");
ageTag.className = "card-subtitle";
ageTag.textContent = `My age is ${userData[1].age}`

let img = document.createElement("img");
img.src = userData[1].src
img.classList = "card-img-top"
img.width = "200px"


cardBody.appendChild(img)
cardBody.appendChild(nameTag)
cardBody.appendChild(ageTag)

card.appendChild(cardBody)

let card2 = document.createElement("div")
card2.className = "card bg-secondary";
card2.style.width = "300px"
let cardBody2 = document.createElement("div")
cardBody2.className = "card-body";

let nameTag2 = document.createElement("h3")
nameTag2.className = "card-title"
nameTag2.textContent = `Welcome ${userData[0].name}`

let ageTag2 = document.createElement("h5");
ageTag2.className = "card-subtitle";
ageTag2.textContent = `My age is ${userData[0].age}`

let img2 = document.createElement("img");
img2.src = userData[0].src
img2.classList = "card-img-top"
img2.width = "200px"


cardBody2.appendChild(img2)
cardBody2.appendChild(nameTag2)
cardBody2.appendChild(ageTag2)

card2.appendChild(cardBody2)

document.body.appendChild(card);
document.body.appendChild(card2);



