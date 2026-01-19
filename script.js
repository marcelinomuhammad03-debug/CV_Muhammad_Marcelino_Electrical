document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let hasil = document.getElementById("hasil");

  if (nama === "" || email === "") {
    hasil.style.color = "red";
    hasil.innerText = "Nama dan Email wajib diisi!";
  } else {
    hasil.style.color = "green";
    hasil.innerText = "Terima kasih, " + nama + "! Data berhasil dikirim.";
  }
});
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;

  localStorage.setItem("nama", nama);
  localStorage.setItem("email", email);

  document.getElementById("hasil").innerText =
    "Data tersimpan. Halo " + nama;
});

// Ambil data saat halaman dibuka
window.onload = function () {
  let nama = localStorage.getItem("nama");
  if (nama) {
    document.getElementById("hasil").innerText =
      "Selamat datang kembali, " + nama;
  }
};
