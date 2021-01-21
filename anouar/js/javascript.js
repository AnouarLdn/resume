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
