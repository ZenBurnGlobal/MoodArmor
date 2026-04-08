window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splash-screen').classList.add('hidden');
        document.getElementById('language-screen').classList.remove('hidden');
        renderFlags();
    }, 3000);
});

const languages = [
    { name: "English (USA)", code: "en", flag: "https://flagcdn.com/us.svg", msg: "Privacy Protected.", greet: "Hello! I am your Guard." },
    { name: "Hindi", code: "hi", flag: "https://flagcdn.com/in.svg", msg: "गोपनीयता सुरक्षित है।", greet: "नमस्ते! मैं आपकी रक्षक हूँ।" }
];

function renderFlags() {
    const flagList = document.getElementById('flag-list');
    languages.forEach(lang => {
        const div = document.createElement('div');
        div.style.cssText = "background:#222; padding:10px; border-radius:10px; width:120px;";
        div.innerHTML = `<img src="${lang.flag}" style="width:40px;"><p>${lang.name}</p>`;
        div.onclick = () => showLegal(lang);
        flagList.appendChild(div);
    });
}

function showLegal(lang) {
    document.getElementById('language-screen').classList.add('hidden');
    document.getElementById('legal-screen').classList.remove('hidden');
    document.getElementById('legal-text').innerText = lang.msg;
    document.getElementById('accept-btn').onclick = () => {
        document.getElementById('legal-screen').classList.add('hidden');
        document.getElementById('main-character-screen').classList.remove('hidden');
        document.getElementById('character-speech').innerText = lang.greet;
    };
}

document.getElementById('start-journey-btn').onclick = () => {
    document.getElementById('main-character-screen').classList.add('hidden');
    document.getElementById('mood-hub').classList.remove('hidden');
};

function openMood(type) {
    alert("Opening " + type + " mode...");
}
