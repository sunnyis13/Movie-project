const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value

// Update total and count

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem(selectedMovieIndex, movieIndex);
    localStorage.setItem(selectedMoviePrice, moviePrice);
}

function UpdateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))
    
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice
}

// Movie select event

function populateUI() {
    const selectedSeats = Json.parse
}

movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    console.log(e.target.selectedIndex, e.target.value);
    UpdateSelectedCount();
})

container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        UpdateSelectedCount()
    }
})