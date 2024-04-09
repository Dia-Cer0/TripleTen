import "./styles/index.css"; // add import of the main stylesheets file
import stepsSrc from "./images/steps.png"; //import steps.png as stepsSrc

// we can now import images
// webpack will add the correct paths to the variables
const jordanImage = new URL("./images/jordan.jpg", import.meta.url);
const jamesImage = new URL("./images/james.jpg", import.meta.url);
const bryantImage = new URL("./images/bryant.jpg", import.meta.url);

const numbers = [2, 3, 5];

// Arrow function. How will Internet Explorer cope with it?
const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // 4, 6, 10

const stepsImage = document.getElementById("image-steps"); //select the img element
stepsImage.src = stepsSrc; //set the source of the image

const whoIsTheGoat = [
  // replace original paths with variables
  { name: "Michael Jordan", image: jordanImage },
  { name: "Lebron James", link: jamesImage },
  { name: "Kobe Bryant", link: bryantImage },
];
