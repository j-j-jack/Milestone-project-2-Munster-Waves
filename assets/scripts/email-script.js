
/*an event listener is added to the form submission. The form is prevented from submitting. 
the emailjs api is used to send the contents of the form via email to munsterwaves@tutanota.com. 
This is done using the sendForm method as documented on the emailjs website. The input names 
in the form respond to the variable names used in the template on by my user account on the 
emailjs website. The sender email is munsterwaves@outlook.com */

document.getElementById('email-form').addEventListener('submit', function(event){
    event.preventDefault();
    let pageForm = document.getElementById('email-form');
    document.getElementById('form-submission').style.pointerEvents = 'none';
    emailjs.sendForm(
        'service_qwv5hy', 'template_mwkm1ac', '#email-form', 'user_G4jZs712zju74E5JnCbeM')
    .then(function(response) { //protocol to deal with responses as documented on the emailjs website
    console.log('SUCCESS!', response.status, response.text);
    
    if(document.getElementById('contact').checked){
        document.getElementsByClassName('form')[0].innerHTML = 
        `<h2>Thank you!</h2><p>Your response has been sent.</p>
        We will send an email to ${pageForm.elements['email'].value}
        once the shop is open :)`;
    }
    else {
        document.getElementsByClassName('form')[0].innerHTML = 
        `<h2>Thank you!</h2><p>Your response has been sent.</p>
        <p>If you want to sign up for the email notification feel free to reload the page
        and resubmit the form :)</p>`
    }
    console.log(pageForm.elements['contact'].value);
    }, function(error) {
       console.log('FAILED...', error);
       document.getElementsByClassName('form')[0].innerHTML = 
       `<h2>Oops... Something went wrong</h2><p>Your response wasn't sent</p>
        reload the page <a href="signup.html">here</a> to try again`
    })
    
   });