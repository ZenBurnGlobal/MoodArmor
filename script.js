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
    { name: "Arabic", code: "ar", flag: "https://flagcdn.com/ae.svg", msg: "نحن نحمي خصوصيتك وفقًا لمعايير GDPR." },
    { name: "Chinese", code: "zh", flag: "https://flagcdn.com/cn.svg", msg: "我们根据 GDPR 标准保护您的隐私。" },
    { name: "English (USA)", code: "en", flag: "https://flagcdn.com/us.svg", msg: "We protect your privacy under GDPR & CCPA standards." },
    { name: "French", code: "fr", flag: "https://flagcdn.com/fr.svg", msg: "Nous protégeons votre vie privée selon les normes RGPD." },
    { name: "German", code: "de", flag: "https://flagcdn.com/de.svg", msg: "Wir schützen Ihre Privatsphäre nach DSGVO-Standards." },
    { name: "Hindi", code: "hi", flag: "https://flagcdn.com/in.svg", msg: "हम GDPR मानकों के तहत आपकी गोपनीयता की रक्षा करते हैं।" },
    { name: "Japanese", code: "ja", flag: "https://flagcdn.com/jp.svg", msg: "GDPR基準に基づきお客様のプライバシーを保護します。" },
    { name: "Spanish", code: "es", flag: "https://flagcdn.com/es.svg", msg: "Protegemos su privacidad bajo los estándares de RGPD." }
];

function renderFlags() {
    const flagList = document.getElementById('flag-list');
    languages.forEach(lang => {
        const div = document.createElement('div');
        div.className = 'flag-item';
        div.style.cssText = "background:#222; padding:10px; border-radius:10px; width:120px; cursor:pointer;";
        div.innerHTML = `
            <img src="${lang.flag}" style="width:40px;height:25px;display:block;margin:0 auto 5px;">
            <p style="font-size:12px; color:white;">${lang.name}</p>
        `;
        div.onclick = () => showLegal(lang);
        flagList.appendChild(div);
    });
}

function showLegal(lang) {
    localStorage.setItem('userLanguage', lang.code);
    document.getElementById('language-screen').classList.add('hidden');
    document.getElementById('legal-screen').classList.remove('hidden');
    document.getElementById('legal-text').innerText = lang.msg;
    
    document.getElementById('accept-btn').onclick = () => {
        alert("Policy Accepted! Loading MoodArmor Girl...");
        // Next Phase: Character Animation & Mouth Sync
    };
}
