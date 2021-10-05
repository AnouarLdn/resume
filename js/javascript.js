const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove("active");
    }
    })

// Side navbar

(function() {

  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle: function(e) {
      // e.preventDefault(); // Had to remove this line to allow the href to work
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };

  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());

// // cursor
//
// let mouseCursor = document.querySelector(".cursor");
// let submitBtn = document.querySelector("button");
// let smartPhone = document.querySelector(".smartPhone");
//
// console.log(smartPhone);
//
// console.log(submitBtn);
//
// window.addEventListener("mousemove", cursor);
//
// function cursor(e) {
//     mouseCursor.style.top = e.pageY + "px";
//     mouseCursor.style.left = e.pageX + "px";
// }
//
// submitBtn.addEventListener("mouseover", function(){
//     mouseCursor.classList.add("cursor-grow");
//     submitBtn.classList.add("hovered-button");
// });
//
// submitBtn.addEventListener("mouseleave", function(){
//     mouseCursor.classList.remove("cursor-grow");
//     submitBtn.classList.remove("hovered-button");
// });
//
// smartPhone.addEventListener("mouseover", function(){
//     mouseCursor.classList.add("cursor-grow");
// });
//
// smartPhone.addEventListener("mouseleave", function(){
//     mouseCursor.classList.remove("cursor-grow");
// });
