const accordion = document.getElementsByClassName('accordion-part');

for (i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
      this.classList.toggle('active')
    })
}