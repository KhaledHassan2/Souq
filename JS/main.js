let landingPage = document.querySelector(".landing");
let imgsArray = [
    "1.webp",
    "2.webp",
    "3.webp",
    "4.webp",
    "5.webp",
    "6.webp",
    "7.webp",
    "8.webp",
    "9.webp",
    "10.webp",
    "11.webp",
];

setInterval(() => {


    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] +'")';


},5000)





