// Menu mobile
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// Tombol detail proyek
function showProject() {
    alert("Proyek ini dibuat menggunakan HTML, CSS, dan JavaScript.");
}

// Form kontak
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("result").textContent =
        "Terima kasih, " + name + "! Pesan berhasil dikirim.";

    document.getElementById("contactForm").reset();
});