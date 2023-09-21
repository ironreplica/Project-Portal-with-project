let cardsList = document.querySelector(".cards");
let cards = [];

// look up what an object in JavaScript is, when you find the syntax for an object, include a title and a url link
// Look up how to push an object to an array

let project1 = {
  title: "Memory-Card-Game",
  URL: "https://ironreplica.github.io/Memory-Card-Game/",
};
let project2 = {
  title: "Weather-and-News",
  URL: "https://ironreplica.github.io/api-final-project/",
};
let project3 = {
  title: "Javascript-Quiz-App",
  URL: "https://ironreplica.github.io/Javascript-Quiz-Application/",
};
let project4 = {
  title: "30-Days-of-Javascript-Repository",
  URL: "https://github.com/ironreplica/30-days-of-javascript",
};
cards.push(project1, project2, project3, project4);

cards.map((item) => {
  console.log(item);
  var newCard = document.createElement("div");
  newCard.innerHTML = `
  <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <h2>${item.title}</h2>
          </div>
          <div class="card-back">
            <a href="${item.URL}">${item.title}</a>
          </div>
        </div>
    </div>
      
  `;
  cardsList.appendChild(newCard);
});
