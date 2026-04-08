window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splash-screen').classList.add('hidden');
        document.getElementById('language-screen').classList.remove('hidden');
        renderFlags();
    }, 3000);
});

const languages = [
    { name: "Arabic", code: "ar", flag: "https://flagcdn.com/ae.svg", msg: "نحن نحمي خصوصيتك.", greet: "مرحباً!" },
    { name: "Bengali", code: "bn", flag: "https://flagcdn.com/bd.svg", msg: "আমরা আপনার গোপনীয়তা রক্ষা করি।", greet: "হ্যালো!" },
    { name: "Chinese", code: "zh", flag: "https://flagcdn.com/cn.svg", msg: "我们保护您的隐私。", greet: "你好！" },
    { name: "Dutch", code: "nl", flag: "https://flagcdn.com/nl.svg", msg: "Wij beschermen uw privacy.", greet: "Hallo!" },
    { name: "English", code: "en", flag: "https://flagcdn.com/us.svg", msg: "We protect your privacy.", greet: "Hello!" },
    { name: "French", code: "fr", flag: "https://flagcdn.com/fr.svg", msg: "Nous protégeons votre vie privée.", greet: "Bonjour!" },
    { name: "German", code: "de", flag: "https://flagcdn.com/de.svg", msg: "Wir schützen Ihre Privatsphäre.", greet: "Hallo!" },
    { name: "Hindi", code: "hi", flag: "https://flagcdn.com/in.svg", msg: "हम आपकी गोपनीयता की रक्षा करते हैं।", greet: "नमस्ते!" },
    { name: "Indonesian", code: "id", flag: "https://flagcdn.com/id.svg", msg: "Kami melindungi privasi Anda.", greet: "Halo!" },
    { name: "Italian", code: "it", flag: "https://flagcdn.com/it.svg", msg: "Proteggiamo la tua privacy.", greet: "Ciao!" },
    { name: "Japanese", code: "ja", flag: "https://flagcdn.com/jp.svg", msg: "プライバシーを保護します。", greet: "こんにちは！" },
    { name: "Korean", code: "ko", flag: "https://flagcdn.com/kr.svg", msg: "우리는 당신의 개인 정보를 보호합니다.", greet: "안녕하세요!" },
    { name: "Marathi", code: "mr", flag: "https://flagcdn.com/in.svg", msg: "आम्ही तुमच्या गोपनीयतेचे रक्षण करतो.", greet: "नमस्कार!" },
    { name: "Portuguese", code: "pt", flag: "https://flagcdn.com/br.svg", msg: "Protegemos a sua privacidade.", greet: "Olá!" },
    { name: "Russian", code: "ru", flag: "https://flagcdn.com/ru.svg", msg: "Мы защищаем вашу конфиденциальность.", greet: "Привет!" },
    { name: "Spanish", code: "es", flag: "https://flagcdn.com/es.svg", msg: "Protegemos su privacidad.", greet: "¡Hola!" },
    { name: "Tamil", code: "ta", flag: "https://flagcdn.com/in.svg", msg: "உங்கள் தனியுரிமையை நாங்கள் பாதுகாக்கிறோம்.", greet: "வணக்கம்!" },
    { name: "Telugu", code: "te", flag: "https://flagcdn.com/in.svg", msg: "మేము మీ గోప్యతను రక్షిస్తాము.", greet: "నమస్కారం!" },
    { name: "Turkish", code: "tr", flag: "https://flagcdn.com/tr.svg", msg: "Gizliliğinizi koruyoruz.", greet: "Merhaba!" },
    { name: "Vietnamese", code: "vi", flag: "https://flagcdn.com/vn.svg", msg: "Chúng tôi bảo vệ quyền riêng tư của bạn.", greet: "Xin chào!" }
].sort((a, b) => a.name.localeCompare(b.name));

function renderFlags() {
    const list = document.getElementById('flag-list');
    languages.forEach(lang => {
        const div = document.createElement('div');
        div.style.cssText = "background:#222; padding:10px; border-radius:10px; width:110px; text-align:center; cursor:pointer; margin:5px;";
        div.innerHTML = `<img src="${lang.flag}" style="width:30px; display:block; margin:0 auto;"><p style="font-size:12px; margin-top:5px;">${lang.name}</p>`;
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
    for(let i=0; i<30; i++) {
        const b = document.createElement('div');
        b.className = 'bubble';
        b.onclick = () => b.classList.add('popped');
        cont.appendChild(b);
    }
}

function openDepression() {
    document.getElementById('mood-hub').classList.add('hidden');
    document.getElementById('depression-mode').classList.remove('hidden');
    let t = 90;
    const interval = setInterval(() => {
        t--;
        document.getElementById('timer-display').innerText = t;
        if(t <= 0) { clearInterval(interval); document.getElementById('dep-msg').innerText = "Feel lighter?"; }
    }, 1000);
}

function openNoble() {
    const d = ["Feed a stray animal.", "Call a friend.", "Drink water.", "Clean your desk.", "Say thank you."];
    alert("Task: " + d[Math.floor(Math.random()*d.length)]);
}

function openMood(m) { alert("Opening " + m + "..."); }
function backToHub() {
    document.getElementById('angry-mode').classList.add('hidden');
    document.getElementById('depression-mode').classList.add('hidden');
    document.getElementById('mood-hub').classList.remove('hidden');
}
