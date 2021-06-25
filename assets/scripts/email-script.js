document.getElementById('email-form').addEventListener('submit', function(event){
    event.preventDefault();
    let pageForm = document.getElementById('email-form');
    document.getElementById('form-submission').style.pointerEvents = 'none';
    emailjs.sendForm(
        'service_qcwv5hy', 'template_mwkm1ac', '#email-form', 'user_G4jZs712zju74E5JnCbeM')
    .then(function(response) { 
    
    if(document.getElementById('check').checked){ 
        document.getElementsByClassName('form')[0].innerHTML = 
        `<h2>Thank you!</h2><p>Your response has been sent.</p>
        <p>We will send an email to ${pageForm.elements['email'].value} once the shop opensgit  :)</p> 
        <p>click <a href ="index.html">here to go back to home page</a></p>
        `;
    }
    else {
        document.getElementsByClassName('form')[0].innerHTML = 
        `<h2>Thank you!</h2><p>Your response has been sent.</p>
        <p><a href="signup.html">reload the page here</a> to resubmit the form 
        and register your email <br>
        or click <a href ="index.html">here to go back to home page</a> :)
        `;
    }
    }, function(error) { 
       document.getElementsByClassName('form')[0].innerHTML = 
       `<h2>Oops... Something went wrong</h2><p>Your response wasn't sent</p> 
       <a href="signup.html">reload the page here</a> to try again <br>
       or click <a href ="index.html">here to go back to home page</a> :)`
    })
    
   });