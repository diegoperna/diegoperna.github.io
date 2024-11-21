'use strict'

// change compta a+ image on hover
let comptiaAPlusIcon = document.getElementById('comptia-a-plus');
let comptiaAPlusBox = document.getElementById('comptia-a-plus-box')

comptiaAPlusBox.addEventListener ('mouseover', function () {
    comptiaAPlusBox.classList.toggle('hover')
    comptiaAPlusIcon.src = '/images/comptia_a+_logo-hover.png';
})
comptiaAPlusBox.addEventListener ('mouseout', function () {
    comptiaAPlusBox.classList.toggle('hover')
    comptiaAPlusIcon.src = '/images/comptia_a+_logo.png';
})


// modal window
const modal = document.querySelector('.modal-window');
const modalImage = document.querySelector('.modal-image')
const overlay = document.querySelector('.overlay-window');
const btnCloseModal = document.querySelector('.close-modal-window')
const designImages = document.querySelectorAll('.img.d-flex.align-items-center');
const body = document.querySelector('body');



const openModal = function () {

}

for (let i=0;i<designImages.length;i++) 
    designImages[i].addEventListener('click', function() {
        modal.classList.remove('hidden-window');
        overlay.classList.remove('hidden-window');
        body.classList.add('overflow-y-hidden');
        modal.style.backgroundImage = designImages[i].style.backgroundImage;

    });

const closeModal = function () {
    modal.classList.add('hidden-window');
    overlay.classList.add('hidden-window');
    body.classList.remove('overflow-y-hidden');
}



btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    // console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden-window')) {
        closeModal();
    }
});


// skill box shadow and icon change colour on hover
let skillBoxes = document.getElementsByClassName('feature-box')
let skillIcons = document.getElementsByClassName('mfizz-icon')

// for (let i=0;i<skillBoxes.length-1;i++) {
//     skillBoxes[i].addEventListener('mouseover', function() {
//         let currentIcon = skillBoxes[i].querySelector('.mfizz-icon');
//         let currentClass1 = currentIcon.classList[1]
//         skillBoxes[i].classList.add('feature-box-hover')
//         currentIcon.classList.add(`${currentClass1}-hover`)
//     })
//     skillBoxes[i].addEventListener('mouseout', function() {
//         let currentIcon = skillBoxes[i].querySelector('.mfizz-icon');
//         let currentClass1 = currentIcon.classList[1]
//         skillBoxes[i].classList.remove('feature-box-hover')
//         currentIcon.classList.remove(`${currentClass1}-hover`)
//     })
// }

for (let i=0;i<skillBoxes.length-1;i++) {
    skillBoxes[i].addEventListener('mouseover', function() {
        let currentIcon = skillBoxes[i].querySelector('.mfizz-icon');
        skillBoxes[i].classList.toggle('hover')
        currentIcon.classList.toggle('hover')
    })
    skillBoxes[i].addEventListener('mouseout', function() {
        let currentIcon = skillBoxes[i].querySelector('.mfizz-icon');
        skillBoxes[i].classList.toggle('hover')
        currentIcon.classList.toggle('hover')
    })
}

// contact form
// your_email = "test@test.com";
// emailSub = "test";
// emailBody = document.getElementById("message").innerText; 
// var email_btn = document.getElementById('send_email');
// email_btn.addEventListener("click",function(e){
//     e.preventDefault();
//     location.href = "mailto:"+your_email+'&subject='+emailSub+'&body='+emailBody;
// });

// smooth-scrolling
// $(document).ready(function(){
//     // Add smooth scrolling to all links
//     $("a").on('click', function(event) {
  
//       // Make sure this.hash has a value before overriding default behavior
//       if (this.hash !== "") {
//         // Prevent default anchor click behavior
//         event.preventDefault();
  
//         // Store hash
//         var hash = this.hash;
  
//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//         $('html, body').animate({
//           scrollTop: $(hash).offset().top
//         }, 800, function(){
     
//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         });
//       } // End if
//     });
//   });