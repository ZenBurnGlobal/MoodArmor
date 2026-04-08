window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splash-screen').classList.add('hidden');
        document.getElementById('language-screen').classList.remove('hidden');
        renderFlags();
    }, 3000);
});

const languages = [
    { name: "English", code: "en", flag: "https://flagcdn.com/us.svg", msg: "Privacy Protected.", greet: "Hello! I am your Guard." },
    { name: "Hindi", code: "hi", flag: "https://flagcdn.com/in.svg", msg: "गोपनीयता सुरक्षित है।", greet: "नमस्ते! मैं आपकी रक्षक हूँ।" }
];

function renderFlags() {
    const list = document.getElementById('flag-list');
    languages.forEach(lang => {
        const div = document.createElement('div');
        div.style.cssText = "background:#222; padding:10px; border-radius:10px; width:110px; text-align:center;";
        div.innerHTML = `<img src="${lang.flag}" style="width:30px;"><p style="font-size:12px;">${lang.name}</p>`;
        div.onclick = () => {
            document.getElementById('language-screen').classList.add('hidden');
            document.getElementById('legal-screen').classList.remove('hidden');
            document.getElementById('legal-text').innerText = lang.msg;
            document.getElementById('accept-btn').onclick = () => {
                document.getElementById('legal-screen').classList.add('hidden');
                document.getElementById('main-character-screen').classList.remove('hidden');
                document.getElementById('character-speech').innerText = lang.greet;
            };
        };
        list.appendChild(div);
    });
}

document.getElementById('start-journey-btn').onclick = () => {
    document.getElementById('main-character-screen').classList.add('hidden');
    document.getElementById('mood-hub').classList.remove('hidden');
};

function openAngry() {
    document.getElementById('mood-hub').classList.add('hidden');
    document.getElementById('angry-mode').classList.remove('hidden');
    const cont = document.getElementById('bubble-container');
    cont.innerHTML = "";
    for(let i=0; i<25; i++) {
        const b = document.createElement('div');
        b.className = 'bubble';
        b.onclick = () => b.classList.add('popped');
        cont.appendChild(b);
    }
}

function openDepression() {
    document.getElementById('mood-hub').classList.add('hidden');
    document.getElementById('depression-mode').classList.remove('hidden');
    let timeLeft = 90;
    const timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer-display').innerText = timeLeft;
        if(timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('dep-msg').innerText = "Feel better now?";
        }
    }, 1000);
}

function backToHub() {
    document.getElementById('angry-mode').classList.add('hidden');
    document.getElementById('depression-mode').classList.add('hidden');
    document.getElementById('mood-hub').classList.remove('hidden');
}
