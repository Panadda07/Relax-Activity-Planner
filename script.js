const activities = {
    "มีความสุข": {
        "ทำคนเดียว": ["วาดรูป", "อ่านหนังสือเล่มโปรด", "ทำขนม"],
        "ทำกับเพื่อน": ["ปาร์ตี้เล็กๆ", "เล่นบอร์ดเกม", "ดูหนังด้วยกัน"],
        "กิจกรรมกลางแจ้ง": ["ปั่นจักรยาน", "เดินเล่นสวนสาธารณะ", "ไปเที่ยวทะเล"],
        "กิจกรรมในบ้าน": ["ดูซีรีส์", "ทำงานศิลปะ", "ทำโยคะเบาๆ"]
    },
    "เครียด": {
        "ทำคนเดียว": ["นั่งสมาธิ", "ฟังเพลงผ่อนคลาย", "ระบายสี", "ปลูกต้นไม้ในกระถาง"],
        "ทำกับเพื่อน": ["ไปนวดสปา", "ทำกิจกรรมระบายอารมณ์", "เล่นเกมคลายเครียด"],
        "กิจกรรมกลางแจ้ง": ["เดินเล่นช้าๆ", "ดูพระอาทิตย์ตก", "ทำสมาธิในสวน"],
        "กิจกรรมในบ้าน": ["ฟังเสียงธรรมชาติ", "อ่านหนังสือแนวปลุกใจ", "นอนพัก"]
    },
    "เบื่อ": {
        "ทำคนเดียว": ["เรียนรู้อะไรใหม่ๆ", "ฟังเพลงผ่อนคลาย", "ลองเขียนไดอารี่"],
        "ทำกับเพื่อน": ["ตั้ง challenge ท้ากัน", "แข่งทำอาหาร", "ไปคาเฟ่แปลกๆ"],
        "กิจกรรมกลางแจ้ง": ["เที่ยวสถานที่ใหม่ๆ", "ออกกำลังกายแบบสนุกๆ", "ขับรถเล่น"],
        "กิจกรรมในบ้าน": ["เริ่มโปรเจกต์ DIY", "เล่นเกมออนไลน์", "ดูหนังต่างประเทศ"]
    },
    "เหนื่อย": {
        "ทำคนเดียว": ["ฟัง podcast", "นอนกลางวัน", "อาบน้ำอุ่น"],
        "ทำกับเพื่อน": ["คุยสบายๆกับเพื่อน", "กินขนมด้วยกัน", "ทำสปากับเพื่อน"],
        "กิจกรรมกลางแจ้ง": ["ไปเดินห้าง", "เดินเล่นสวนเล็กๆ", "ปิกนิกเบาๆ"],
        "กิจกรรมในบ้าน": ["ดูคลิปตลก", "เล่นแมว", "เปิดเพลงชิลล์ๆ"]
    },
    "ตื่นเต้น": {
        "ทำคนเดียว": ["ลอง extreme sport เบาๆ", "ถ่าย vlog", "ตั้งเป้าหมายใหม่"],
        "ทำกับเพื่อน": ["ไปสวนสนุก", "ทำกิจกรรม adventure", "เล่นเกม VR ด้วยกัน"],
        "กิจกรรมกลางแจ้ง": ["ปีนหน้าผา", "ไปล่องแก่ง", "เที่ยวธรรมชาติแบบมันส์ๆ"],
        "กิจกรรมในบ้าน": ["เล่นเกมที่ใช้พลังงาน", "ลองเต้นตามคลิป", "เล่นเกม escape room แบบตั้งเองในบ้าน"]
    }
};

const moodSongs = {
    "เครียด": [
        { name: "รอยยิ้ม - scrubb", url: "https://youtu.be/czvDyFfVoVU?si=YdeeolOKu0QjG2v7" },
        { name: "CHI MI FT. GUNNER - YOUNGGU", url: "https://youtu.be/EpqaMKAaoTY?si=nSXW1xY5AopyKcFo" },
        { name: "Raindrop - 1MILL", url: "https://youtu.be/4OR3uPXAih4?si=fvdtdXdYyXwTRStk" }
    ],
    "เบื่อ": [
        { name: "ลาลาลอย - THE TOYS", url: "https://youtu.be/jdiRSOkzQns?si=XYxP7Yo1g6n1e3bK" },
        { name: "เพื่อนเล่น ไม่เล่นเพื่อน - Tilly Birds Feat. MILLI", url: "https://youtu.be/AJEoJYgktb4?si=g4eTpK7drL5EYbtl" },
        { name: "ถ้าเราเจอกันอีก (Until Then) - Tilly Birds", url: "https://youtu.be/zwvv71slEYc?si=jfwGvAP5HcoMe7mr" }
    ],
    "เหนื่อย": [
        { name: "ระบายมา (paint the pain) - พัด Vorapat x JIXGO", url: "https://youtu.be/m6ipHazDxKs?si=Sl0e40dlx4BNNz3x" },
        { name: "ฮีลใจ (heal jai) - JIXGO version ", url: "https://youtu.be/O7JVYSsEehU?si=gakfa6eykq9nVQZx" },
        { name: "OPharrell Williams - Happy", url: "https://youtu.be/ZbZSe6N_BXs?si=prXnHDrZjeiSQygg" }
    ],
};

const moodMovies = {
    "เบื่อ": [
        { name: "Brooklyn Nine-Nine", url: "https://www.netflix.com/title/70281562" },
        { name: "A Love So Beautiful", url: "https://www.netflix.com/title/81354739" },
        { name: "Twenty-Five Twenty-One", url: "https://www.netflix.com/title/81517168" }
    ],
    "มีความสุข": [
        { name: "Brooklyn Nine-Nine", url: "https://www.netflix.com/title/70281562" },
        { name: "A Love So Beautiful", url: "https://www.netflix.com/title/81354739" },
        { name: "Twenty-Five Twenty-One", url: "https://www.netflix.com/title/81517168" }
    ]
};

const lastActivities = {
    activity: null,
    song: null
};

function suggestActivity() {
    const day = document.getElementById('day').value;
    const mood = document.getElementById('mood').value;
    const activityType = document.getElementById('activity-type').value;

    const resultBox = document.getElementById('result-box');
    const suggestedActivity = document.getElementById('suggested-activity');

    if (!day || !mood || !activityType) {
        suggestedActivity.innerText = "กรุณาเลือกให้ครบทั้งวัน ความรู้สึก และประเภทกิจกรรมก่อนนะ!";
        resultBox.style.display = "block";
        return;
    }

    const moodActivities = activities[mood];
    if (!moodActivities) {
        suggestedActivity.innerText = "ไม่พบกิจกรรมที่เหมาะสม ลองเลือกใหม่ดูนะ!";
        resultBox.style.display = "block";
        return;
    }

    const activityList = moodActivities[activityType];
    if (!activityList) {
        suggestedActivity.innerText = "ไม่พบกิจกรรมที่เหมาะสม ลองเลือกใหม่ดูนะ!";
        resultBox.style.display = "block";
        return;
    }

    let availableActivities = activityList.filter(a => a !== lastActivities.activity);
    if (availableActivities.length === 0) {
        availableActivities = [...activityList];
    }
    const randomIndex = Math.floor(Math.random() * availableActivities.length);
    const activity = availableActivities[randomIndex];
    lastActivities.activity = activity;

    let suggestionText = `คุณรู้สึก${mood} เราแนะนำให้ "${activity}" นะ!`;

    if (activity === "เล่นบอร์ดเกม") {
        suggestionText += `<br><br>คุณสามารถดูบอร์ดเกมที่แนะนำได้ที่ <b><a href="https://www.wongnai.com/articles/application-board-game" target="_blank" style="color: #3d5245; text-decoration: none;">ที่นี่</a></b>`;
    }

    if (activity.includes("เพลง")) {
        const songs = moodSongs[mood];
        if (songs && songs.length > 0) {
            let availableSongs = songs.filter(s => s.name !== lastActivities.song);
            if (availableSongs.length === 0) {
                availableSongs = [...songs];
            }
            const randomSong = availableSongs[Math.floor(Math.random() * availableSongs.length)];
            lastActivities.song = randomSong.name;

            const videoId = getYouTubeVideoId(randomSong.url);

            suggestionText += `
                <br><br>เพลงที่เหมาะกับอารมณ์ "${mood}" คือ
                <br><b><a href="${randomSong.url}" target="_blank" style="color: #3d5245; text-decoration: none;">${randomSong.name}</a></b>
            `;
        }
    }

    if (activity.includes("ดูหนังต่างประเทศ") || activity.includes("ดูซีรีส์")) {
        const movies = moodMovies[mood];
        if (movies && movies.length > 0) {
            const randomMovie = movies[Math.floor(Math.random() * movies.length)];

            suggestionText += `
                <br><br>ซีรีส์และหนังที่แนะนำสำหรับอารมณ์ "${mood}" คือ
                <br><b><a href="${randomMovie.url}" target="_blank" style="color: #3d5245; text-decoration: none;">${randomMovie.name}</a></b>
            `;
        }
    }

    suggestedActivity.innerHTML = suggestionText;
    resultBox.style.display = "block";
}
script.js
