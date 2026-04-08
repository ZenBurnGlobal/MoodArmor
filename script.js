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
    { name: "Arabic", code: "ar", flag: "https://flagcdn.com/ae.svg" },
    { name: "Chinese", code: "zh", flag: "https://flagcdn.com/cn.svg" },
    { name: "English (USA)", code: "en", flag: "https://flagcdn.com/us.svg" },
    { name: "French", code: "fr", flag: "https://flagcdn.com/fr.svg" },
    { name: "German", code: "de", flag: "https://flagcdn.com/de.svg" },
    { name: "Hindi", code: "hi", flag: "https://flagcdn.com/in.svg" },
    { name: "Indonesian", code: "id", flag: "https://flagcdn.com/id.svg" },
    { name: "Italian", code: "it", flag: "https://flagcdn.com/it.svg" },
    { name: "Japanese", code: "ja", flag: "https://flagcdn.com/jp.svg" },
    { name: "Korean", code: "ko", flag: "https://flagcdn.com/kr.svg" },
    { name: "Portuguese", code: "pt", flag: "https://flagcdn.com/br.svg" },
    { name: "Russian", code: "ru", flag: "https://flagcdn.com/ru.svg" },
    { name: "Spanish", code: "es", flag: "https://flagcdn.com/es.svg" },
    { name: "Turkish", code: "tr", flag: "https://flagcdn.com/tr.svg" }
];

function renderFlags() {
    const flagList = document.getElementById('flag-list');
    languages.forEach(lang => {
        const div = document.createElement('div');
        div.className = 'flag-item';
        div.innerHTML = `
            <img src="${lang.flag}" style="width:40px;height:30px;display:block;margin:0 auto 5px;">
            <p style="font-size:12px;">${lang.name}</p>
        `;
        div.onclick = () => selectLanguage(lang.code);
        flagList.appendChild(div);
    });
}

function selectLanguage(code) {
    localStorage.setItem('userLanguage', code);
    alert("Language Selected: " + code);
}
