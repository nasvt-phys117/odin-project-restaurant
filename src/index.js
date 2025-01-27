import "./styles.css";
import { initModule } from "./initializeContent.js";
import { loadMenu } from "./menuModule.js";
import { loadAbout } from "./aboutModule.js";

console.log("Js seems to be working!");
window.onload =(event) => {
    initModule();
}
const btnHome = document.querySelector('#home');
const btnMenu = document.querySelector('#menu');
const btnAbout = document.querySelector('#about');

btnHome.addEventListener("click", () => {
    initModule();
});
btnMenu.addEventListener("click", () => {
    loadMenu();
});
btnAbout.addEventListener("click", () => {
    loadAbout();
});