
let addButton = document.querySelector('button');
let message = document.querySelector('#message')

function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);
    let ul = document.querySelector('ul');
    ul.appendChild(movie);
    inputField.textContent = '';
}
let form = document.querySelector('form');
form.addEventListener('submit', addMovie);

let span = target.parentNode.querySelector('span');

function deleteMovie(event) {
    event.target.parentNode.remove();
    message.textContent = `${span.textContent} Deleted!`;
    revealMessage();
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked');
    if (event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} Watched!`;
    } else {
        message.textContent = `${event.target.textContent} added back!`;
    }
    revealMessage();
}

function revealMessage () {
message.classList.remove('hide');
setTimeout(() => {
message.classList.add('hide');
}, 10000)
}

