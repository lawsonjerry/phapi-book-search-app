
const inputElement = document.querySelector(`[type="search box"]`)
const searchButton = document.getElementById('search');
const listOutput = document.getElementById('list-output');


searchButton.addEventListener('click', (event) => {
    event.preventDefault()
    const searchTerm = inputElement.value.trim();

    if (!searchTerm) {
        return;
    }

    // Make an API call to search for books using the search term
    fetch('https://openlibrary.org/search.json?subject=hermeticism&title' + searchTerm)
        .then(response => response.json())
        .then(data => {
            const docs = data.docs;

            if (!docs.length) {
                listOutput.innerHTML = '<p>No books found.</p>';
                return;
            }

            let resultsHTML = '';
            for (const doc of docs) {
                resultsHTML += `
                    <p>
                    <strong>${doc.title_suggest}</strong><br>
                    ${doc.author_name || `Unknown Author`}<br>
                    <a href="${doc.covers?.[0]?.large}">Cover Image</a>
                </p>`;
            }

            listOutput.innerHTML = resultsHTML;
        });
});