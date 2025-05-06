let form = document.getElementById('register');

form.addEventListener("submit", function(event){
    event.preventDefault();
    
    let username = document.getElementById("input-username").value;
    let email = document.getElementById("input-email").value;
    let server = document.getElementById("input-server").value;
    let desc = document.getElementById("input-desc").value;

    if(username ==='' || email ===''||server===''||desc===''){
        alert("please fill in all field");
        return;
    }

    if (username.includes("-") || email.includes("-") || server.includes("-") || desc.includes("-")) {
        alert("fields cannot contain '-'");
        return;
    }

    if(!email.endsWith("@gmail.com")){
        alert("email must be with @gmail.com");
        return;
    }
    if(email.length < 11){
        alert("Email must be at least 11 characters long");
        return;
    }
    if(desc.length < 10){
        alert("Description must be at least 10 characters long");
        return;
    }
    

    alert("Register success");

    document.getElementById("input-username").value = '';
    document.getElementById("input-email").value = '';
    document.getElementById("input-server").value = '';
    document.getElementById("input-desc").value = '';

});

// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("register");

//     form.addEventListener("submit", function (e) {
//         // Ambil nilai input
//         const username = document.getElementById("input-username").value.trim();
//         const email = document.getElementById("input-email").value.trim();
//         const server = document.getElementById("input-server").value.trim();
//         const desc = document.getElementById("input-desc").value.trim();

//         // Cek kalau ada yang kosong
//         if (!username || !email || !server || !desc) {
//             e.preventDefault(); // Mencegah form disubmit
//             alert("Semua field harus diisi!");
//         }
//     });
// });