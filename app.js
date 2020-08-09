//if user add a note add it to local storage
showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {


    let addTxt = document.getElementById('addTxt');   


    if (addTxt.value == '') {
        let alerti = alert('Write a note');
    }
    else {
        let notes = localStorage.getItem('notes');
        if (notes == null) {

            notesObj = [];

        }

        else {
            notesObj = JSON.parse(notes);
        }

        let addTitle = document.getElementById('addTitle');
        
        //         adding a date
        
        let noteDate = new Date();

        let currentDay = noteDate.getDay();

        let allDay = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

        let day = allDay[currentDay];

        myobj = {
            txt : addTxt.value ,
            title : addTitle.value
            dayy: day
        };

        notesObj.push(myobj);
        localStorage.setItem('notes', JSON.stringify(notesObj));
        


        addTxt.value = '';
        addTitle.value = '';
        console.log(notesObj);

        showNotes();

    }
})






//defining showNotes showing element from local storage

function showNotes() {

    let notes = localStorage.getItem('notes');
    if (notes == null) {

        notesObj = [];

    }

    else {
        notesObj = JSON.parse(notes);
    }

    let html = '';

    notesObj.forEach(function (element, index) {
        html += `
            
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;" id="day">
                    <div class="card-body">
                        <div class="days" id="day" align="right"  style="color: darkgrey; float: right;"> ${element.dayy} </div>
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text"> ${element.txt}</p>
                        <button id = "${index}" onclick = "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`

    });

    let noteElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        noteElm.innerHTML = html;

    }
    else {
        noteElm.innerHTML = `Nothing to show!`
    }
}





// fucntion to delete  localStorage.setItem('notes', JSON.stringify(notesObj));te note
function deleteNote(index) {
    alerti = confirm(`Are you sure you want to delete Note ${index + 1}`);
    let notes = localStorage.getItem('notes');

    if (notes == null) {

        notesObj = [];

    }

    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();

}

// search 
let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {

        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        let header = element.getElementsByTagName('h5')[0].innerText;
        if (cardTxt.includes(inputVal) | header.includes(inputVal)) {

            element.style.display = 'block'
        }

        else {
            element.style.display = 'none'
        }
    })


})

// failed day idea

/*


function date() {

    let noteDate = new Date();

    let currentDay = noteDate.getDay();

    let allDay = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

    let day = allDay[currentDay];

    // let beforeClass = document.getElementsByClassName("card-text");

    // let parentClass = document.getElementById('card-body');

    var popUpDiv = $("#notes");

    var panelDiv = $("<div>rere</div>").addClass("side_panel");

    popUpDiv.append(panelDiv);

    // let divDate = document.createElement('div');

    // divDate.className = "elem";
    // divDate.id = 'elem';

    // divDate.innerText = 'hello';

    // parentClass.insertBefore(divDate, beforeClass);


    // let divDate = document.getElementsByClassName('day');

    // divDate.innerText = 'ff';



    // console.log(day);

}


Panel = function () {
var popUpDiv = $("#firewall-content");
var panelDiv = $("<div></div>").addClass("side_panel");
popUpDiv.append(panelDiv);

*/
