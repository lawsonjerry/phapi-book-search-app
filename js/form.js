// const submitButton = document.querySelector('#submit'); //this selects the submit button
const form = document.querySelector('form'); //this selects the form



// submitButton.addEventListener('click', (event) => {
 

//      if (form.bookTitle.value === "") {
//     return alert("You must provide the title of the book!");
//   }

//     if (!form.checkValidity()) {
//       event.preventDefault(); //prevent form submission


//         form.reportValidity(); //diplay validation messages
//     }
// });

form.addEventListener('submit', (event) => {
  if (!form.checkValidity()) {
    event.preventDefault(); // Prevent form submission
    form.reportValidity(); // Display validation messages
  } else {
    // Display success message
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Thank you for submitting your comment!';
    form.appendChild(successMessage);

    // Reset the form
    form.reset();
  }
});
