
const loadBooks = () => {
    // Declare variable
    const searchField = document.getElementById("searchField");
    const searchFieldText = searchField.value;
    const url = `http://openlibrary.org/search.json?q=${searchFieldText}`;

    // Fetching data
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
}