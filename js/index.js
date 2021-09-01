
// Function
const loadBooks = () => {
    // Declare variable
    const searchField = document.getElementById("searchField");
    const searchFieldText = searchField.value;

    // Clear
    searchField.value = "";
    const url = `http://openlibrary.org/search.json?q=${searchFieldText}`;

    // Fetching data
    fetch(url)
    .then(res => res.json())
    .then(data => displayBooks(data.docs));
}


const displayBooks = books => {
    const bookContainer = document.getElementById("book_container");
    const erroMsg = document.getElementById("errorMsg");

    // Error handling
    if(books.length === 0){
        erroMsg.innerText = "No Result Found";
    }
    else{
        erroMsg.innerText = "";
    }

    // console.log(books);
    books.forEach(book => {
        console.log(book);
        const createDiv = document.createElement("div");
        createDiv.classList.add("book_card");
        createDiv.innerHTML = `
            <h2>${book.title}</h2>
            <p><span style="font-weight: bold">Author Name: </span>${book.author_name[0]}</p>
            <p><span style="font-weight: bold">First Publish: </span>${book.first_publish_year}</p>
            <p><span style="font-weight: bold">Publisher: </span>${book.publisher[0]}</p>
        `;
        bookContainer.appendChild(createDiv);
    });
    
}