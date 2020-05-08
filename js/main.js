$('.parallax-window').parallax({imageSrc: '../img/unicorn1.jpg'});

$('.profile').parallax({imageSrc: '../img/profile3.jpg'});

$('.parallax-window-works').parallax({imageSrc: '../img/more3.jpg'});

$('.img-text-wrapper').parallax({imageSrc: '../img/willowisp5.jpg'});


 const worksitems = document.querySelectorAll('.works-item-wrapper');
  worksitems.forEach(worksitem =>{
  worksitem.addEventListener('mouseover', ()=>{
    worksitem.childNodes[1].classList.add('img-darken');
  })
  worksitem.addEventListener('mouseout', ()=>{
    worksitem.childNodes[1].classList.remove('img-darken');
  })

});







//<div class="subtitle"><a class="WOTW" href="WOTW.html" data-parallax="scroll" data-z-index="3">Will o the Wisp</a></div>

//$('.WOTW').parallax({imageSrc: '../img/willowisp.jpg'});

//$('.profile-subtitle').parallax({imageSrc: '../img/background2.jpg'});

//$('.aboutme').getElementById("about").parallax({imageSrc: '../img/Profile.jpg'});
