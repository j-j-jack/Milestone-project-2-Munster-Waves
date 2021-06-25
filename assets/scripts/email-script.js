
/*an event listener is added to the form submission. The form is prevented from submitting. 
the emailjs api is used to send the contents of the form via email to munsterwaves@tutanota.com. 
This is done using the sendForm method as documented on the emailjs website. The input names 
in the form respond to the variable names used in the template on by my user account on the 
emailjs website. The sender email is jackosullivan541@gmail.com */

document.getElementById('email-form').addEventListener('submit', function(event){
    event.preventDefault();
    let pageForm = document.getElementById('email-form');
    document.getElementById('form-submission').style.pointerEvents = 'none';
    emailjs.sendForm(
        'service_qcwv5hy', 'template_mwkm1ac', '#email-form', 'user_G4jZs712zju74E5JnCbeM')
    .then(function(response) { //protocol to deal with responses as documented on the emailjs website
    console.log('SUCCESS!', response.status, response.text);
    
    if(document.getElementById('check').checked){ //checks if the user wants to be emailed
        document.getElementsByClassName('form')[0].innerHTML = // replaces the form with the html below
        `<h2>Thank you!</h2><p>Your response has been sent.</p>
        <p>We will send an email to ${pageForm.elements['email'].value} once the shop opensgit  :)</p> 
        <p>click <a href ="index.html">here to go back to home page</a></p>
        `;
    }
    else {
        document.getElementsByClassName('form')[0].innerHTML = // otherwise gives the user option to resubmit
        `<h2>Thank you!</h2><p>Your response has been sent.</p>
        <p><a href="signup.html">reload the page here</a> to resubmit the form 
        and register your email <br>
        or click <a href ="index.html">here to go back to home page</a> :)
        `;
    }
    }, function(error) { // if there is an error the user can click the link to resubmit or return home
       document.getElementsByClassName('form')[0].innerHTML = 
       `<h2>Oops... Something went wrong</h2><p>Your response wasn't sent</p> 
       <a href="signup.html">reload the page here</a> to try again <br>
       or click <a href ="index.html">here to go back to home page</a> :)`
    })
    
   });