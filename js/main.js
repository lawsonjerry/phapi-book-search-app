const bookDataURL =
  "https://openlibrary.org/search.json?q=the+lord+of+the+rings&limit=3";
const inputElement = document.querySelector(`[type="search box"]`); //selects search box

console.log(inputElement);
const searchButton = document.getElementById("search"); //selects search button
const listOutput = document.getElementById("list-output"); //selects the list of output of books
const searchResults = document.querySelector("h2");

const searchTerm = inputElement.value.trim();
console.log(searchTerm);

fetch(bookDataURL + searchTerm)
  .then((response) => response.json())
  .then((data) => {
    const books = data.docs;
    console.log(books);

    let resultsHTML = "";
    for (const book of books) {
      const bookTitle = book.title;

      const bookAuthor = book.author_name;
      resultsHTML += `
                      <p>
                      <strong>${bookTitle}</strong><br>
                      ${bookAuthor || `Unknown Author`}<br>
                  </p>`;

      searchButton.addEventListener("click", (event) => {
        event.preventDefault();

        books.filter((book) => {
          if (book.title.includes(searchTerm)) {
            resultsHTML = `
                      <p>
                      <strong>${bookTitle}</strong><br>
                      ${bookAuthor || `Unknown Author`}<br>
                  </p>`;
                  listOutput.innerHTML = resultsHTML
            return;    
          } else {
            console.log("keep digging");
          }
       
        });
    
      });
    }
    listOutput.innerHTML = resultsHTML;
  })
  .catch((error) => {
    console.error("Error fetching questions:", error);
  });

// searchButton.addEventListener("click", (event) => {
//   event.preventDefault();

//   const searchTerm = inputElement.value.trim();

//   if (!searchTerm) {
//     alert('please enter a book');
//   }

//   fetch(bookDataURL + searchTerm);

//   if (!books.length) {
//     listOutput.innerHTML = "<p>No books found.</p>";
//     return;
//   }

//   let resultsHTML = "";
//   for (const doc of docs) {
//     resultsHTML += `
//                     <p>
//                     <strong>${doc.title_suggest}</strong><br>
//                     ${doc.author_name || `Unknown Author`}<br>
//                 </p>`;
//   }

//   listOutput.innerHTML = resultsHTML;
// });

// const generateBooks = () => {};
// searchResults.style.display = "none";

// searchButton.addEventListener("click", (event) => {
//   event.preventDefault();

//   if (!searchTerm) {
//     return;
//   }

//   if (!books.length) {
//     listOutput.innerHTML = "<p>No books found.</p>";
//     return;
//   }

//   for (const book of books) {
//     if (searchTerm === book.title) {
//         console.log('found a match')
//     }

//   }

// });
