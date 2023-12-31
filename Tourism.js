
const menu = document.querySelector('.menu');
const header = document.querySelector('.navbar');

menu.addEventListener('click',()=>{
  header.classList.toggle('active');
   menu.classList.toggle('active');

});


/***********ScrollBar*********/ 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = ()=>{
    sections.forEach(sec =>{

        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            
        });
      };
    });
        menu.classList.remove('change');
        header.classList.remove('active');
};
