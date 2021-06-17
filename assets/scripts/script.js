document.getElementsByClassName('company-logo')[0].style.marginTop
   = `${document.getElementsByClassName('small-screen-navbar-container')[0].offsetHeight}px`;

window.addEventListener('resize', function(){
   document.getElementsByClassName('company-logo')[0].style.marginTop
   = `${document.getElementsByClassName('small-screen-navbar-container')[0].offsetHeight}px`;
}
);


     jQuery.noConflict();
     jQuery(document).ready(function(){
        jQuery('.burger').click(function(){jQuery('.small-screen-nav-dropdown').toggle('slow')});
     });  

     

     document.addEventListener('scroll', function(){
      //document.getElementsByClassName('announcement-bar')[0].style.display = 'none';
     // console.log(document.getElementsByTagName('body')[0].style.display);
     let aHeight = document.getElementsByClassName('announcement-bar')[0].offsetHeight;
     if ((aHeight-window.scrollY) > 0){
        document.getElementsByClassName('small-screen-navbar-container')[0].style.top = `${aHeight - window.scrollY}px`;
        
     }
     else{
      document.getElementsByClassName('small-screen-navbar-container')[0].style.top = '0px';
   }
      console.log(aHeight - window.scrollY);
      
     
   });
     