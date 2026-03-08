//rightmenu
function openMenu(){
    document.getElementById("sideMenu").style.width = "250px";
}

function closeMenu(){
    document.getElementById("sideMenu").style.width = "0";
}
function getroad(id){
document.getElementById(id).scrollIntoView({behavior:"smooth"});
}
//entryhtml
function saveUser(){
    let name = document.getElementById("nameInput").value;  //jsonparse
    let email = document.getElementById("emailInput").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({
        name,
        email
    });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Saved Successfully");
}
function showUsers(){
    let users = JSON.parse(localStorage.getItem("users")) || [];  //json parse
    let html = "";
    users.forEach(({name,email})=>{ //arrow function
        html += `
        <div class="card">
            <h3>${name}</h3>
            <p>${email}</p>
        </div>
        `;
    });

    document.getElementById("list").innerHTML = html;
}
//indexhtml counter
    const counters=document.querySelectorAll(".counter");   //settimeout
    counters.forEach(counter=>{
        counter.innerText="0";
    const updateCounter=()=>{
        const target=+counter.getAttribute("data-target");
    const c=+counter.innerText;
    const increment=target/200;
    if(c<target){
        counter.innerText=`${Math.ceil(c+increment)}`;
        setTimeout(updateCounter,10);
}    else{
        counter.innerText=target;
}
};
    updateCounter();
});




        /* --- 2. JAVASCRIPT (DATA) --- */
        const travelData = [
            { name: "İspanya", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/1280px-Flag_of_Spain.svg.png", price: 1200, rate: 4.8, tags: ["Eğlence", "Deniz"], link: "2espana.html" },
            { name: "Macaristan", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/250px-Flag_of_Hungary.svg.png", price: 550, rate: 4.5, tags: ["Ucuz", "Tarih"] },
            { name: "İtalya", flag: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/250px-Flag_of_Italy.svg.png", price: 1500, rate: 4.9, tags: ["Yemek", "Sanat"] },
            { name: "Bosna Hersek", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/250px-Flag_of_Bosnia_and_Herzegovina.svg.png", price: 400, rate: 4.7, tags: ["Vizesiz", "Ucuz"] },
            { name: "Avusturya", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/250px-Flag_of_Austria.svg.png", price: 1000, rate: 4.7, tags: ["Doğa", "Klasik"] },
            { name: "Belçika", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/250px-Flag_of_Belgium.svg.png", price: 900, rate: 4.4, tags: ["Çikolata", "Avrupa"] },
            { name: "Almanya", flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/250px-Flag_of_Germany.svg.png", price: 1100, rate: 4.6, tags: ["Düzen", "Teknoloji"] },
            { name: "Fransa", flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png", price: 1400, rate: 4.8, tags: ["Moda", "Kültür"] },
            { name: "Hollanda", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/250px-Flag_of_the_Netherlands.svg.png", price: 1300, rate: 4.7, tags: ["Kanal", "Bisiklet"] },
            { name: "Karadağ", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/250px-Flag_of_Montenegro.svg.png", price: 500, rate: 4.4, tags: ["Vizesiz", "Deniz"] },
            { name: "Arnavutluk", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/250px-Flag_of_Albania.svg.png", price: 450, rate: 4.3, tags: ["Ucuz", "Vizesiz"] },
            { name: "Makedonya", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/250px-Flag_of_North_Macedonia.svg.png", price: 420, rate: 4.5, tags: ["Vizesiz", "Balkan"] }
        ];

        function draw() {
            const liste = document.getElementById('liste');
            let toplam = 0;

            liste.innerHTML = travelData.map(u => {
                toplam += u.price;
                return `
                <div class="country">
                    <div class="rating">
                        <div class="yildiz-ikon"></div> ${u.rate}
                    </div>
                    <img src="${u.flag}">
                    <div class="icerik">
                        <h3 class="ulke-adi">${u.name}</h3>
                        <div class="etiketler">
                            ${u.tags.map(t => `<span class="etiket">${t}</span>`).join('')}
                        </div>
                        <span class="fiyat">${u.price} €</span>
                        <a href="#" class="link">Detayları Gör</a>
                    </div>
                </div>
                `;
            }).join('');

            document.getElementById('budgettotal').innerText = toplam;
        }

        draw();
          function render() {
            const liste = document.getElementById('liste');
            let toplam = 0;
            liste.innerHTML = travelData.map(u => {
                toplam += u.price;
                return `
                <div class="country">
                    <div class="rating"><div class="yildiz-ikon"></div> ${u.rate}</div>
                    <img src="${u.flag}">
                    <div class="icerik">
                        <h3 class="ulke-adi">${u.name}</h3>
                        <div class="etiketler">${u.tags.map(t => `<span class="etiket">${t}</span>`).join('')}</div>
                        <span class="fiyat">${u.price} €</span>
                        <a href="${u.link}" class="link">Detayları Gör</a>
                    </div>
                </div>`;
            }).join('');
            document.getElementById('budgettotal').innerText = toplam;
        }
        render();


    // 3. Form İşleme & Mesaj Kaydetme
    function handleFormSubmit(event) {
        event.preventDefault();
        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
        const message = document.getElementById('userMessage').value;

        const newEntry = { name, email, message, date: new Date().toLocaleString() };
        
        // LocalStorage'a kaydet
        let messages = JSON.parse(localStorage.getItem('akayMessages')) || [];
        messages.push(newEntry);
        localStorage.setItem('akayMessages', JSON.stringify(messages));

        alert("Mesajınız başarıyla iletildi, Admin Paneline düştü!");
        event.target.reset(); // Formu temizle
        return false;
    }

    // 4. Admin Erişim & Panel
    function handleAdminAccess() {
        const pass = prompt("Yönetici Şifresini Giriniz:");
        if (pass === "1234") {
            document.getElementById('adminModal').style.display = "block";
            loadAdminData();
            closeMenu();
        } else {
            alert("Hatalı Şifre!");
        }
    }




    function closeAdmin() {
        document.getElementById('adminModal').style.display = "none";
    }

    function loadAdminData() {
        const inbox = document.getElementById('inboxList');
        const messages = JSON.parse(localStorage.getItem('akayMessages')) || [];
        document.getElementById('msgCount').innerText = messages.length;

        if (messages.length === 0) {
            inbox.innerHTML = "<p>Henüz gelen bir mesaj yok.</p>";
        } else {
            inbox.innerHTML = messages.map((m, index) => `
                <div class="message-card">
                    <strong>Gönderen:</strong> ${m.name} (${m.email}) <br>
                    <strong>Mesaj:</strong> ${m.message} <br>
                    <small style="color:gray">${m.date}</small>
                    <button onclick="deleteMsg(${index})" style="float:right; background:none; border:none; color:red; cursor:pointer;">Sil</button>
                </div>
            `).reverse().join('');
        }
    }

    function deleteMsg(index) {
        let messages = JSON.parse(localStorage.getItem('akayMessages'));
        messages.splice(index, 1);
        localStorage.setItem('akayMessages', JSON.stringify(messages));
        loadAdminData();
    }
