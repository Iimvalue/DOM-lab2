let userData = [
  {
    name: "ahmed",
    age: 20,
    src: "https://images.pexels.com/photos/31831857/pexels-photo-31831857/free-photo-of-young-man-standing-on-coastal-cliff-overlooking-ocean.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
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

document.body.appendChild(card);



