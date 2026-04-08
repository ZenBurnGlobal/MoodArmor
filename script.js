window.addEventListener('load', () => {
    const statusText = document.getElementById('status');
    setTimeout(() => { statusText.innerText = "System Ready..."; }, 1500);
    setTimeout(() => {
        document.getElementById('splash-screen').classList.add('hidden');
        document.getElementById('language-screen').classList.remove('hidden');
        renderFlags();
    }, 3000);
});

const languages = [
    { name: "Arabic", code: "ar", flag: "https://flagcdn.com/ae.svg", msg: "نحن نحمي خصوصيتك.", greet: "مرحباً! أنا حارسك." },
    { name: "Chinese", code: "zh", flag: "https://flagcdn.com/cn.svg", msg: "我们保护您的隐私。", greet: "你好！我是你的守卫。" },
    { name: "English (USA)", code: "en", flag: "https://flagcdn.com/us.svg", msg: "We protect your privacy.", greet: "Hello! I am your Guard." },
    { name: "French", code: "fr", flag: "https://flagcdn.com/fr.svg", msg: "Nous protégeons votre vie privée.", greet: "Bonjour! Je suis votre garde." },
    { name: "German", code: "de", flag: "https://flagcdn.com/de.svg", msg: "Wir schützen Ihre Privatsphäre.", greet: "Hallo! Ich bin deine Wache." },
    { name: "Hindi", code: "hi", flag: "https://flagcdn.com/in.svg", msg: "हम आपकी गोपनीयता की रक्षा करते हैं।", greet: "नमस्ते! मैं आपकी रक्षक हूँ।" },
    { name: "Japanese", code: "ja", flag: "https://flagcdn.com/jp.svg", msg: "プライバシーを保護します。", greet: "こんにちは！私はあなたの警備員です。" },
    { name: "Spanish", code: "es", flag: "https://flagcdn.com/es.svg", msg: "Protegemos su privacidad.", greet: "¡Hola! Soy tu guardia." }
];

function renderFlags() {
    const flagList = document.getElementById('flag-list');
    languages.forEach(lang => {
        const div = document.createElement('div');
        div.className = 'flag-item';
        div.style.cssText = "background:#222; padding:10px; border-radius:10px; width:120px; cursor:pointer;";
        div.innerHTML = `<img src="${lang.flag}" style="width:40px;height:25px;display:block;margin:0 auto 5px;"><p style="font-size:12px;color:white;">${lang.name}</p>`;
        div.onclick = () => showLegal(lang);
        flagList.appendChild(div);
    });
}

function showLegal(lang) {
    localStorage.setItem('userLanguage', lang.code);
    document.getElementById('language-screen').classList.add('hidden');
    document.getElementById('legal-screen').classList.remove('hidden');
    document.getElementById('legal-text').innerText = lang.msg;
    document.getElementById('accept-btn').onclick = () => startCharacter(lang);
}

function startCharacter(lang) {
    document.getElementById('legal-screen').classList.add('hidden');
    document.getElementById('main-character-screen').classList.remove('hidden');
    const speech = document.getElementById('character-speech');
    let i = 0;
    const text = lang.greet;
    speech.innerText = "";
    function typeWriter() {
        if (i < text.length) {
            speech.innerText += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
}
