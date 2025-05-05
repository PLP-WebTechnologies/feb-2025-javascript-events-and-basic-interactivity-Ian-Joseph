// 1. EVENT HANDLING
document.getElementById('clickBtn').addEventListener('click', function() {
    this.textContent = 'Clicked!';
});

document.getElementById('hoverElement').addEventListener('mouseover', function() {
    this.style.color = 'red';
});

document.addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
});

// Bonus: Secret action for double-click
document.getElementById('secretAction').addEventListener('dblclick', function() {
    alert('Secret action unlocked!');
});

// 2. INTERACTIVE ELEMENTS
// Button changing text and colour
document.getElementById('changeBtn').addEventListener('click', function() {
    this.textContent = 'I changed!';
    this.style.backgroundColor = 'blue';
});

// Image gallery/slideshow
let images = ['https://images.pexels.com/photos/16844777/pexels-photo-16844777/free-photo-of-food-and-cameras-on-a-blanket-on-a-picnic.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/3013975/pexels-photo-3013975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/18725562/pexels-photo-18725562/free-photo-of-bags-with-fruit-and-vegetables.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'];
let index = 0;

document.getElementById('nextImg').addEventListener('click', function() {
    index = (index + 1) % images.length;
    document.getElementById('gallery').src = images[index];
});

// Accordion-style content
document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('visible');
    });
});

// 3. FORM VALIDATION
// Basic required field validation
document.getElementById('form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    if (!name) {
        alert('Name is required!');
        event.preventDefault();
    }
});

// Email format validation
document.getElementById('email').addEventListener('input', function() {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(this.value)) {
        this.style.border = '2px solid red';
    } else {
        this.style.border = '2px solid green';
    }
});

// Password rules
document.getElementById('password').addEventListener('input', function() {
    let msg = this.value.length >= 8 ? '✔ Strong' : '❌ Too short';
    document.getElementById('passwordFeedback').textContent = msg;
});

// Bonus: Real-time feedback
document.getElementById('username').addEventListener('input', function() {
    document.getElementById('usernameFeedback').textContent = `Typing: ${this.value}`;
});

// ADVANCED ENHANCEMENTS
// Event Delegation
document.getElementById('parentContainer').addEventListener('click', function(event) {
    if (event.target.classList.contains('child-item')) {
        console.log(`Clicked on: ${event.target.textContent}`);
    }
});

// Debouncing for Improved Performance
function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

document.getElementById('search').addEventListener('input', debounce(function() {
    console.log('Searching: ', this.value);
}, 500));

// Local Storage - Save Form Data
document.getElementById('userData').addEventListener('input', function() {
    localStorage.setItem('savedData', this.value);
});

document.getElementById('userData').value = localStorage.getItem('savedData') || '';