
const container = document.querySelector(".container");
const books = [
  {
    name: "From Research to Manuscript",
    image: "images/book1.jpg"
  },
  {
    name: "Probability",
    image: "images/book2.jpg"
  },
  {
    name: "HCI Models, Theories, and Frameworks",
    image: "images/book3.jpg"
  },
  {
    name: "Communication Networks",
    image: "images/book4.jpg"
  },
  {
    name: " Managing Software Projects",
    image: "images/book5.jpg"
  },
  {
    name: " All of Statistics",
    image: "images/book6.jpg"
  },
  {
    name: "Methods for Applied Macroeconomic Research",
    image: "images/book7.jpg"
  },
  {
    name: "Software Project Secrets",
    image: "images/book8.jpg"
  },
  {
    name: "Understanding Mobile Human-Computer Interaction",
    image: "images/book9.jpg"
  },
  {
    name: "Visualizing Project Management",
    image: "images/book10.jpg"
  },
  {
    name: "A Modern Introduction to Probability and Statistics",
    image: "images/book11.jpg"
  },
  {
    name: "Effective Software Project Management",
    image: "images/book12.jpg"
  },
];
const showbooks = () => {
  let output = "";
  books.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Add to Cart</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showbooks);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
