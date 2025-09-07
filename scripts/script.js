// Heart Icon Feature 

const hearts = document.getElementsByClassName("heart-button")
let heartCount = parseInt(document.getElementById('heart').innerText);

for (const heart of hearts) {
    heart.addEventListener('click', function () {
        heartCount++;
        document.getElementById('heart').innerHTML = heartCount;
    })
}

