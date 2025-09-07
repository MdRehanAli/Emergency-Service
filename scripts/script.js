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
        alert(`Calling ${service}: ${number}`);
        const remainingCoin = totalCoin - callCost;
        document.getElementById('coin').innerText = remainingCoin;
    }

    const history = document.getElementById('call-history')
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="mx-auto">
                            <div class="bg-[#FAFAFA] p-4 flex justify-between items-center gap-4 rounded-xl mb-3 ">
                                <div>
                                    <h2 class="font-semibold">${service}</h2>
                                    <p class="text-[#5C5C5C]">${number}</p>
                                </div>
                                <div>
                                    <p>${new Date().toLocaleTimeString()}</p>
                                </div>
                            </div>
                        </div>
    `
    history.appendChild(div);
}


// Calling Features 

document.getElementById('emergency-call').addEventListener('click', function () {
    call('National Emergency Number', 999);
})

document.getElementById('police-call').addEventListener('click', function () {
    call('Police Helpline Number', 999);
})

document.getElementById('fire-service-call').addEventListener('click', function () {
    call('Fire Service Number', 999);
})

document.getElementById('ambulance-call').addEventListener('click', function () {
    call('Ambulance Service', '1994-999999');
})

document.getElementById('women-child-call').addEventListener('click', function () {
    call('Women & Child Helpline', 109);
})

document.getElementById('anti-corruption-call').addEventListener('click', function () {
    call('Anti-Corruption Helpline', 106);
})

document.getElementById('electricity-call').addEventListener('click', function () {
    call('Electricity Helpline', 16216);
})

document.getElementById('brac-call').addEventListener('click', function () {
    call('Brac Helpline', 16445);
})

document.getElementById('bangladesh-railway-call').addEventListener('click', function () {
    call('Bangladesh Railway Helpline', 163);
})



// Clear Call History 
document.getElementById('clear').addEventListener('click', function () {
    const callHistory = document.getElementById('call-history');
    callHistory.style.display = "none";
})



// Copy Features
const copies = document.getElementsByClassName("copy-button")
let copyCount = parseInt(document.getElementById('copy').innerText);

for (const copy of copies) {
    copy.addEventListener('click', function () {
        copyCount++;
        document.getElementById('copy').innerHTML = copyCount;
    })
}

// copy Functionality 
function copy(service, number) {
    // alert(`Copied ${service}: ${number}`);
    navigator.clipboard.writeText(`${number}`).then(() => {
        alert(`Copied ${service}: ${number}`);
    }).catch(() => {
        alert("Failed to copy");
    });
}
document.getElementById('emergency-number-copy').addEventListener('click', function () {
    copy('National Emergency Number', 999);;
})

document.getElementById('police-number-copy').addEventListener('click', function () {
    copy('Police Helpline Number', 999);;
})

document.getElementById('fire-service-number-copy').addEventListener('click', function () {
    copy('Fire Service Number', 999);;
})

document.getElementById('ambulance-number-copy').addEventListener('click', function () {
    copy('Ambulance Service', '1994-999999');;
})

document.getElementById('women-child-number-copy').addEventListener('click', function () {
    copy('Women & Child Helpline', 109);;
})

document.getElementById('anti-corruption-number-copy').addEventListener('click', function () {
    copy('Anti-Corruption Helpline', 106);;
})

document.getElementById('electricity-number-copy').addEventListener('click', function () {
    copy('Electricity Helpline', 16216);;
})

document.getElementById('brac-number-copy').addEventListener('click', function () {
    copy('Brac Helpline', 16445);;
})

document.getElementById('bangladesh-railway-number-copy').addEventListener('click', function () {
    copy('Bangladesh Railway Helpline', 163);;
})