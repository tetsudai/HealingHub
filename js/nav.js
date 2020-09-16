/* 

  Made with love and pandas by aidswidjaja
        https://github.com/tetsudai
       https://aidswidjaja.github.io

Filename    ::  nav.js
Purpose     ::  Script to enable hamburger button to work
Project     ::  Official website for Healing Hub Inc, a peer-to-peer mental health support server. By aidswidjaja @ tetsudai.
GitHub      ::  https://github.com/tetsudai/HealingHub
License     ::  MIT License 2020

*stolen from the spec implementation at
https://bulma.io/documentation/components/navbar/

*/

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});