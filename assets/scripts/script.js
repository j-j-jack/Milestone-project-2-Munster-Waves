let aHeight = document.getElementsByClassName('announcement-bar')[0].offsetHeight;
let nHeight = document.getElementsByClassName('small-screen-navbar-container')[0].offsetHeight;



document.getElementsByClassName('small-screen-navbar-dropdown-curtain')[0].style.top = `${aHeight - window.scrollY}px`;

document.getElementsByClassName('company-logo')[0].style.marginTop
   = `${document.getElementsByClassName('small-screen-navbar-container')[0].offsetHeight}px`;

     jQuery.noConflict();
     jQuery(document).ready(function(){
        jQuery('.burger').click(function(){ 
           jQuery('.small-screen-navbar-dropdown-container').toggle('slow');
           let smallScreenNavbarDropdownCurtain = document.getElementsByClassName('small-screen-navbar-dropdown-curtain')[0];
           let smallScreenNavbarContentDisabler = document.getElementsByClassName('small-screen-navbar-content-disabler')[0];
           if(window.getComputedStyle(smallScreenNavbarDropdownCurtain,
            null).getPropertyValue('display') == 'none'){
              smallScreenNavbarDropdownCurtain.style.display = 'block'; 
              smallScreenNavbarContentDisabler.style.pointerEvents = 'none'; 
              smallScreenNavbarDropdownCurtain.style.pointerEvents = 'auto'; 
           }
           else{
            smallScreenNavbarDropdownCurtain.style.display = 'none'; 
            smallScreenNavbarContentDisabler.style.pointerEvents = 'auto'; 
           }
            
      });
     });  


     jQuery('.small-screen-navbar-dropdown-curtain').click(function(){ 
      jQuery('.small-screen-navbar-dropdown-container').toggle('slow');
      let smallScreenNavbarDropdownCurtain = document.getElementsByClassName('small-screen-navbar-dropdown-curtain')[0];
      let smallScreenNavbarContentDisabler = document.getElementsByClassName('small-screen-navbar-content-disabler')[0];
           if(window.getComputedStyle(smallScreenNavbarDropdownCurtain,
            null).getPropertyValue('display') == 'none'){
              smallScreenNavbarDropdownCurtain.style.display = 'block';
              smallScreenNavbarContentDisabler.style.pointerEvents = 'none';
           }
           else{
            smallScreenNavbarDropdownCurtain.style.display = 'none';
            smallScreenNavbarContentDisabler.style.pointerEvents = 'auto';
           }
     });

window.addEventListener('resize', function(){
   document.getElementsByClassName('company-logo')[0].style.marginTop
   = `${document.getElementsByClassName('small-screen-navbar-container')[0].offsetHeight}px`;
   if(window.innerWidth>768){
      document.getElementsByClassName('small-screen-navbar-dropdown-curtain')[0]
      .style.display = 'none';
      document.getElementsByClassName('small-screen-navbar-content-disabler')[0]
      .style.pointerEvents = 'auto';
   }
   aHeight = document.getElementsByClassName('announcement-bar')[0].offsetHeight;
   document.getElementsByClassName('small-screen-navbar-container')[0].style.top 
    = `${aHeight - window.scrollY}px`;
    document.getElementsByClassName('small-screen-navbar-dropdown-curtain')[0].style.top 
    = `${aHeight - window.scrollY}px`;
} 
);
     
     document.addEventListener('scroll', function(){ 
      aHeight = document.getElementsByClassName('announcement-bar')[0].offsetHeight;
     if ((aHeight-window.scrollY) > 0){
        document.getElementsByClassName('small-screen-navbar-container')[0].style.top = `${aHeight - window.scrollY}px`;
        document.getElementsByClassName('small-screen-navbar-dropdown-curtain')[0].style.top = `${aHeight - window.scrollY}px`;
        
     }
     else{
      document.getElementsByClassName('small-screen-navbar-container')[0].style.top = '0px';
   } 
   documentHeight = jQuery(document).height(1500);
   });
     
  let clareNav = document.getElementsByClassName('clare-nav'); 
  clareNav[0].addEventListener('click', function(){
              window.location.href = "clare.html";
         });
         clareNav[1].addEventListener('click', function(){
            window.location.href = "clare.html";
       });

       let kerryNav = document.getElementsByClassName('kerry-nav'); 
       kerryNav[0].addEventListener('click', function(){
              window.location.href = "kerry.html";
         });
         kerryNav[1].addEventListener('click', function(){
            window.location.href = "kerry.html";
       });

       let corkNav = document.getElementsByClassName('cork-nav'); 
         corkNav[0].addEventListener('click', function(){
              window.location.href = "cork.html";
         });
         corkNav[1].addEventListener('click', function(){
            window.location.href = "cork.html";
       });
      
       let waterfordNav = document.getElementsByClassName('waterford-nav'); 
       waterfordNav[0].addEventListener('click', function(){
              window.location.href = "waterford.html";
         });
         waterfordNav[1].addEventListener('click', function(){
            window.location.href = "waterford.html";
       });

       let signupNav = document.getElementsByClassName('signup-nav'); 
       signupNav[0].addEventListener('click', function(){
              window.location.href = "signup.html";
         });
         signupNav[1].addEventListener('click', function(){
            window.location.href = "signup.html";
       });

