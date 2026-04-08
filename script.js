// 1. Language Data (A-Z)
const langData = [
    { name: "Argentina", code: "es", flag: "🇦🇷" },
    { name: "Australia", code: "en", flag: "🇦🇺" },
    { name: "Brazil", code: "pt", flag: "🇧🇷" },
    { name: "California (US)", code: "en", flag: "🇺🇸" },
    { name: "Canada", code: "en", flag: "🇨🇦" },
    { name: "Finland", code: "fi", flag: "🇫🇮" },
    { name: "France", code: "fr", flag: "🇫🇷" },
    { name: "Germany", code: "de", flag: "🇩🇪" },
    { name: "Italy", code: "it", flag: "🇮🇹" },
    { name: "Japan", code: "ja", flag: "🇯🇵" },
    { name: "Morocco", code: "ar", flag: "🇲🇦" },
    { name: "Netherlands", code: "nl", flag: "🇳🇱" },
    { name: "Poland", code: "pl", flag: "🇵🇱" },
    { name: "Russia", code: "ru", flag: "🇷🇺" },
    { name: "Spain", code: "es", flag: "🇪🇸" },
    { name: "Sweden", code: "sv", flag: "🇸🇪" },
    { name: "Switzerland", code: "de", flag: "🇨🇭" },
    { name: "Turkey", code: "tr", flag: "🇹🇷" },
    { name: "UAE", code: "ar", flag: "🇦🇪" },
    { name: "UK", code: "en", flag: "🇬🇧" },
    { name: "Ukraine", code: "uk", flag: "🇺🇦" }
].sort((a, b) => a.name.localeCompare(b.name));

// 2. Initialization Logic
window.onload = () => {
    // Splash logic
    setTimeout(() => {
        document.getElementById('splash-screen').classList.add('hidden');
        document.getElementById('language-screen').classList.remove('hidden');
        renderFlags();
    }, 4000);
};

// 3. Render Flags
function renderFlags() {
    const container = document.getElementById('flag-list'); // In HTML use id="flag-container"
    langData.forEach(l => {
        let div = document.createElement('div');
        div.className = "mood-btn"; 
        div.innerHTML = `${l.flag} ${l.name}`;
        div.onclick = () => selectLanguage(l.code);
        document.getElementById('flag-container').appendChild(div);
    });
}

// 4. Language Selection & GDPR
function selectLanguage(code) {
    document.getElementById('language-screen').classList.add('hidden');
    document.getElementById('legal-screen').classList.remove('hidden');
    
    // Auto Translation Logic for GDPR (Example)
    const content = {
        en: "We protect your data under GDPR/CCPA...",
        hi: "हम GDPR के तहत आपके डेटा की रक्षा करते हैं...",
        de: "Wir schützen Ihre Daten gemäß DSGVO..."
    };
    document.getElementById('legal-content').innerText = content[code] || content['en'];
}

// Checkboxes Logic
const checks = ['age-check', 'gdpr-check', 'ads-check'];
checks.forEach(id => {
    document.getElementById(id).onchange = () => {
        const allChecked = checks.every(c => document.getElementById(c).checked);
        document.getElementById('proceed-btn').disabled = !allChecked;
    };
});

document.getElementById('proceed-btn').onclick = () => {
    document.getElementById('legal-screen').classList.add('hidden');
    document.getElementById('home-screen').classList.remove('hidden');
    speak("Hello! I am your GenBurn assistant. How can I help you today?");
};

// 5. Talking Animation Logic
function speak(text) {
    const msg = document.getElementById('girl-text');
    const img = document.getElementById('girl-img');
    msg.innerText = text;
    img.classList.add('talking');
    
    // Simulate speech end
    setTimeout(() => {
        img.classList.remove('talking');
    }, text.length * 100); 
}
