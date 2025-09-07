// Heart Icon Feature 

const hearts = document.getElementsByClassName("heart-button")
let heartCount = parseInt(document.getElementById('heart').innerText);

for (const heart of hearts) {
    heart.addEventListener('click', function () {
        heartCount++;
        document.getElementById('heart').innerHTML = heartCount;
    })
}


// Custom function for Call 
const callCost = 20;
function call(service, number) {
    let totalCoin = parseInt(document.getElementById('coin').innerText);
    if (totalCoin <= 0) {
        alert("Need at least 20 coins for a call");
        return;
    }
    else {
        alert(`Calling, ${service}, ${number}`);
        const remainingCoin = totalCoin - callCost;
        document.getElementById('coin').innerText = remainingCoin;
    }
}


// Calling Features 

document.getElementById('emergency-call').addEventListener('click', function () {
    call('National Emergency Number', 999)
})

document.getElementById('police-call').addEventListener('click', function () {
    call('Police Helpline Number', 999)
})

document.getElementById('fire-service-call').addEventListener('click', function () {
    call('Fire Service Number', 999)
})

document.getElementById('ambulance-call').addEventListener('click', function () {
    call('Ambulance Service', '1994-999999')
})

document.getElementById('women-child-call').addEventListener('click', function () {
    call('Women & Child Helpline', 109)
})

document.getElementById('anti-corruption-call').addEventListener('click', function () {
    call('Anti-Corruption Helpline', 106)
})

document.getElementById('electricity-call').addEventListener('click', function () {
    call('Electricity Helpline', 16216)
})

document.getElementById('brac-call').addEventListener('click', function () {
    call('Brac Helpline', 16445)
})

document.getElementById('bangladesh-railway-call').addEventListener('click', function () {
    call('Bangladesh Railway Helpline', 163)
})

