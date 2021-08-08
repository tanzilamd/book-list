const name = document.querySelector('#name');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const tbody = document.querySelector('#tbody');
const btn = document.querySelector('#btn');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (name.value == '' || author.value == '' || year.value == '') {
        alert('Fill up all section')
    }
    else {
    let newRow = document.createElement('tr');

    let newName = document.createElement('th');
    newName.innerHTML = name.value;
    newRow.appendChild(newName)

    let newAuthor = document.createElement('th');
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor)

    let newYear = document.createElement('th');
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear)

    tbody.appendChild(newRow)

    name.value = '';
    author.value = '';
    year.value = '';
    }
})
