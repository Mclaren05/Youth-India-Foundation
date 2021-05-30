const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
nextBtnSec.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
nextBtnThird.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
// submitBtn.addEventListener("click", function () {
//   bullet[current - 1].classList.add("active");
//   progressCheck[current - 1].classList.add("active");
//   progressText[current - 1].classList.add("active");
//   current += 1;
//   setTimeout(function () {
//     alert("Your form is successfully submitted.");
//     // location.reload();
//   }, 800);
// });

prevBtnSec.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnThird.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnFourth.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

//form subdivisions
// let division = document.getElementById('id_Division');
// let edu = document.getElementById('id_Education');
// let dept = document.getElementById('id_Department');

// division.onclick = function () {
//   if (division.value == 'State') {
//     document.getElementById('St').classList.remove('hidden');
//     document.getElementById('So').classList.add('hidden');
//     document.getElementById('I').classList.add('hidden');
//     document.getElementById('Ou').classList.add('hidden');
//   }
//   else if (division.value == 'Society') {
//     document.getElementById('So').classList.remove('hidden');
//     document.getElementById('St').classList.add('hidden');
//     document.getElementById('I').classList.add('hidden');
//     document.getElementById('Ou').classList.add('hidden');
//   }
//   else if (division.value == 'Initiative') {
//     document.getElementById('I').classList.remove('hidden');
//     document.getElementById('So').classList.add('hidden');
//     document.getElementById('St').classList.add('hidden');
//     document.getElementById('Ou').classList.add('hidden');
//   }
//   else if (division.value == 'National') {
//     document.getElementById('I').classList.add('hidden');
//     document.getElementById('So').classList.add('hidden');
//     document.getElementById('St').classList.add('hidden');
//     document.getElementById('Ou').classList.add('hidden');
//   }
//   else if (division.value == 'Outreach') {
//     document.getElementById('I').classList.add('hidden');
//     document.getElementById('So').classList.add('hidden');
//     document.getElementById('St').classList.add('hidden');
//     document.getElementById('Ou').classList.remove('hidden');
//   }
//   else{
//     document.getElementById('I').classList.add('hidden');
//     document.getElementById('So').classList.add('hidden');
//     document.getElementById('St').classList.add('hidden');
//     document.getElementById('Ou').classList.add('hidden');
//   }
// }

// edu.onclick = function () {
//   if (edu.value == 'School' || edu.value == 'College') {
//     document.getElementById('edu-level').classList.remove('hidden');
//   }
//   else {
//     document.getElementById('edu-level').classList.add('hidden');
//   }
// }


// dept.onclick = function () {
//   if (dept.value) {
//       console.log("VAL");

//     document.getElementById('position').classList.remove('hidden');
//   }
//   else {
//     document.getElementById('position').classList.add('hidden');
//   }
// }

// //submit
// function disableSubmit() {
//   document.getElementById("submit").disabled = true;
//   document.getElementById("submit").style.cursor = "not-allowed";
// }

// function activateButton(element) {

//   if (element.checked) {
//     document.getElementById("submit").style.cursor = "pointer";
//     document.getElementById("submit").disabled = false;
//   }
//   else {
//     document.getElementById("submit").style.cursor = "not-allowed";
//     document.getElementById("submit").disabled = true;
//   }
// }