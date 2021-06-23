
/*an event listener is added to the form submission. The form is prevented from submitting. 
the emailjs api is used to send the contents of the form via email to munsterwaves@tutanota.com. 
This is done using the sendForm method as documented on the emailjs website. The input names 
in the form respond to the variable names used in the template on by my user account on the 
emailjs website. The sender email is munsterwaves@outlook.com */
document.getElementById('email-form').addEventListener('submit', function(event){
    let pageForm = document.getElementById('email-form');
    event.preventDefault();
    emailjs.sendForm('service_qcwv5hy', 'template_mwkm1ac', '#email-form', 'user_G4jZs712zju74E5JnCbeM')
    .then(function(response) { //protocol to deal with responses as documented on the emailjs website
    console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    })
/* The response div is shown. The user sees the message 'Thank' you and the following template 
literals which are created using their answers from the form */
   console.log(`Your name is: ${pageForm.elements['name'].value}`);
   console.log(`Your email is: ${pageForm.elements['email'].value}`);
   console.log(`Your message is ${pageForm.elements['feedback'].value}`);
   console.log(`Your message is ${pageForm.elements['requests'].value}`);
   });