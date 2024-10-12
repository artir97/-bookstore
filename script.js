let bookCardsContainer = document.getElementById('book-cards-container');

function init() {
    renderAllBooks();
}

function renderAllBooks() {
    bookCardsContainer.innerHTML = '';
    let count = books.length;
    for(let i = 0; i < count; i++) {
        bookCardsContainer.innerHTML += bookCardTemplate(i);
    }
}

function commentTemplate(i) {
    if(books[i].comments.length > 0) {
        let comments = '';
        for (j = 0; j < books[i].comments.length; j++) {
            comments += getCommentsTemplate(i, j);           
        }
        return comments;
    } else {
        return getNoCommentsTemplate();
    }
}

function getCommentsTemplate(i, j) {
    return (
        `
        <div class="comment">
            <div>[${books[i].comments[j].name}] :</div>
            <div>${books[i].comments[j].comment}</div>
        </div>
        `
    )
}

function getNoCommentsTemplate() {
    return (
        `
        <div class="comment">
            <div>Es gibt noch keine Kommentare, sei der Erste!</div>
        </div>
        
        `
    );
}

function bookCardTemplate(i) {
    return (
        `
        <div class="card">
            <div class="sub-container headline-container">
                <h2>${books[i].name}</h2>
            </div>
            <div class="sub-container image-book">
                <img src="./assets/img/book.png" alt="image of a book">
            </div>
            <div class="sub-container book-information">
                <div class="top-row">
                    <div class="price">${books[i].price.toFixed(2)} €</div>
                    <div class="likes-container">
                        <div>${books[i].likes}</div>
                        <img src="./assets/icon/heart-red.png" alt="red heart">
                    </div>
                </div>
                <div class="bottom-row">
                    <div class="book-information-data">
                        <div>Author</div>
                        <div>: ${books[i].author}</div>
                    </div>
                    <div class="book-information-data">
                        <div>Erscheinungsjahr</div>
                        <div>: ${books[i].publishedYear}</div>
                    </div>
                    <div class="book-information-data">
                        <div>Genre</div>
                        <div>: ${books[i].genre}</div>
                    </div>
                </div>
            </div>
            <div class="sub-container comments-container">
                <div class="comment-headline">Kommentare:</div>
                <div id="comments">
                    ${commentTemplate(i)}
                </div>
            </div>
            <div class="sub-container write-comment-section">
                <input type="text" name="message-input" id="message-input" placeholder="Schreibe dein Kommentar">
                <img src="./assets/icon/send-message.png" alt="send message arrow">
            </div>
        </div>
        `
    );
}
