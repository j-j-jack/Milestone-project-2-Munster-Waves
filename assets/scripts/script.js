let aHeight = document.getElementsByClassName('announcement-bar')[0].offsetHeight;
let nHeight = document.getElementsByClassName('small-screen-navbar-container')[0].offsetHeight;



/* the line of code below is necessary to prevent a gap from appearing between the announcement bar 
and the navbar. If the page was refreshed when the announcement bar was only partially in view the 
initial positioning of the navbar caused it to appear where under where the announcement bar would
have been if the page was scrolled to the top (fixed positioning) */
/* the line of code below is used to calculate where the dropdown curtain that is used to darken
the screen and toggle the navbar dropdown is placed initially. this prevents it from covering the
announcement bar when the burger icon is clicked */
document.getElementsByClassName('small-screen-navbar-dropdown-curtain')[0].style.top = `${aHeight - window.scrollY}px`;

document.getElementsByClassName('company-logo')[0].style.marginTop
   = `${document.getElementsByClassName('small-screen-navbar-container')[0].offsetHeight}px`;

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

     

     document.addEventListener('scroll', function(){
      aHeight = document.getElementsByClassName('announcement-bar')[0].offsetHeight;
     if ((aHeight-window.scrollY) > 0){
        document.getElementsByClassName('small-screen-navbar-container')[0].style.top = `${aHeight - window.scrollY}px`;
        document.getElementsByClassName('small-screen-navbar-dropdown-curtain')[0].style.top = `${aHeight - window.scrollY}px`;
        
     }
     else{
      document.getElementsByClassName('small-screen-navbar-container')[0].style.top = '0px';
   } 
   console.log(jQuery(document).height());
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

