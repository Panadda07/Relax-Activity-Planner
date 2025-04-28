const activities = {
    "มีความสุข": {
        "ทำคนเดียว": ["วาดรูป", "อ่านหนังสือเล่มโปรด", "แต่งเพลง", "ทำขนม"],
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
        "ทำคนเดียว": ["เรียนรู้อะไรใหม่ๆ", "ทำอาหารเมนูใหม่", "ลองเขียนไดอารี่"],
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

    const randomIndex = Math.floor(Math.random() * activityList.length);
    const activity = activityList[randomIndex];

    suggestedActivity.innerText = `คุณรู้สึก${mood} เราแนะนำให้ ${activity} นะ!`;
    resultBox.style.display = "block";
}