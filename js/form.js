const submitButton = document.querySelector('#submit');




submitButton.addEventListener('click', (event) => {
    const form = document.querySelector('form');

     if (form.bookTitle.value === "") {
    return alert("You must provide the title of the book!");
  }

    if (!form.checkValidity()) {
        event.preventDefault();

        // errorMessage.textContent = 'Please complete all required fields.';
        // errorMessage.style.color = 'red';

        form.reportValidity();
    }
});

