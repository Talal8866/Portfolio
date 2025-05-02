document.querySelector("form").addEventListener("submit", function (event) {
    alert("Your email client will open, Make sure to send the email manually");
})

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("focus", () => {
        input.style.color = "black";
    });

    input.addEventListener("blur", () => {
        input.style.color = "white";
    });
});

// ******************** //

// projects slider
let imageSlider = Array.from(document.querySelectorAll('.slider-container a img'));

let imageCount = imageSlider.length;

let currentImage = 2;

// console.table(imageSlider);

let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

nextButton.onclick = next;
prevButton.onclick = prev;

checker();

function next() {
    if (nextButton.classList.contains('disabled')) {
        return false;
    } else {
        currentImage++;
        checker();
    }
}

function prev() {
    if (prevButton.classList.contains('disabled')) {
        return false;
    } else {
        currentImage--;
        checker();
    }
}

function checker() {

    removeActive();

    imageSlider[currentImage - 1].classList.add('active')

    if (currentImage == 1) {
        prevButton.classList.add('disabled')

    } else {
        prevButton.classList.remove('disabled')
    }

    if (currentImage == imageCount) {
        nextButton.classList.add('disabled')

    } else {
        nextButton.classList.remove('disabled')
    }
}

function removeActive() {
    imageSlider.forEach(function (img) {
        img.classList.remove('active');
    })
}

// ********************* //

// Skills slider
let skillsSlider = Array.from(document.querySelectorAll('.cards .card'));

let skillsCount = skillsSlider.length;

let currentSkill = 4;

let leftButton = document.getElementById('next-skill');
let rightButton = document.getElementById('prev-skill');

leftButton.onclick = prevSkill;
rightButton.onclick = nextSkill;

skillChecker();

function nextSkill() {
    if (rightButton.classList.contains('disabled')) {
        return false
    } else {
        currentSkill++;
        skillChecker();
    }
}

function prevSkill() {
    if (leftButton.classList.contains('disabled')) {
        return false
    } else {
        currentSkill--;
        skillChecker();
    }
}

function skillChecker() {

    removeActiveSkill();

    skillsSlider[currentSkill - 1].classList.add('active')

    if (currentSkill == 1) {
        leftButton.classList.add('disabled');
    } else {
        leftButton.classList.remove('disabled');
    }

    if (currentSkill == skillsCount) {
        rightButton.classList.add('disabled');
    } else {
        rightButton.classList.remove('disabled');
    }
}

function removeActiveSkill() {
    skillsSlider.forEach(function (skill) {
        skill.classList.remove('active');
    })
}