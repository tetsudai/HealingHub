/* 

  Made with love and pandas by aidswidjaja
        https://github.com/tetsudai
       https://aidswidjaja.github.io

Filename    ::  nav.js
Purpose     ::  Script to enable hamburger button to work
Project     ::  Official website for Healing Hub Inc, a peer-to-peer mental health support server. By aidswidjaja @ tetsudai.
GitHub      ::  https://github.com/tetsudai/HealingHub
License     ::  MIT License 2020

*/

function navclick() {
  var button = document.getElementById("navbarBurger");
  button.classList.toggle("is-active");
  var menu = document.getElementById("navbarTarget");
  menu.classList.toggle("is-active");
};