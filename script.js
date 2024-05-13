

document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('header ul li a');
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        links.forEach(function(l) {
          l.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  });
  