document.addEventListener('DOMContentLoaded', function() {
    fetchBooks();
    document.getElementById('bookForm').addEventListener('submit', function(e) {
        e.preventDefault();
        addBook();
    });
});

async function fetchBooks() {
    const response = await fetch('http://localhost:3000/libros'); 
    const books = await response.json();
    const booksList = document.getElementById('booksList');
    booksList.innerHTML = '';
    console.log(books)
    books.forEach(book => {
        const bookCard = `<div class="bookCard">
                                <h3>${book.name}</h3>
                                <center><img src="${book.picture}" alt="Portada del libro ${book.name}" class="book-image"></center>
                                <p>Año de publicacion: Año ${book.publication}</p>
                                <p>Páginas: ${book.pages}</p>
                                <p>Saga: ${book.series}h</p>
                            </div>`;
        booksList.innerHTML += bookCard;
    });
}

async function addBook() {
    const formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('publication', document.getElementById('publication').value);
    formData.append('pages', document.getElementById('pages').value);
    formData.append('series', document.getElementById('series').value);
    formData.append('picture', document.getElementById('picture').files[0]);

    await fetch('http://localhost:3000/libros', { 
        method: 'POST',
        body: formData,
    });

    fetchBooks();
}