// slide image
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var imgList = document.getElementsByClassName("img-slideshow");
  if (n > imgList.length) slideIndex = 1;
  else if (n < 1) slideIndex = imgList.length;

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }

  imgList[slideIndex - 1].style.display = 'block';

  setInterval(() => {
    plusDivs(1);
  }, 1600);
}

// Alert nama
const masuk = confirm("Selamat datang di Website saya!");
if (masuk) {
  let userName = prompt("Masukkan nama Anda dibawah!");
  document.getElementById("username").innerText = userName;
}

// message form
function kirim() {
  // array nama bulan
  const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "Desember"];

  // membuat waktu saat ini
  let date = new Date();
  let tanggal = date.getDate() + " " + (bulan[date.getMonth()]) + " " + date.getFullYear();
  let jam = date.getHours() + ":" + date.getMinutes();

  waktuIni = jam + ", " + tanggal



  // mengambil data input fom
  let nama = document.forms["message-form"]["nama"].value;
  let ttl = document.forms["message-form"]["ttl"].value;
  let gender = document.forms["message-form"]["gender"].value;
  let pesan = document.forms["message-form"]["pesan"].value;


  // validasi form ke-2 | validasi form pertama memakai atribut required pada tag input form
  if (nama === "" || ttl === "" || gender === "" || pesan === "") {
    alert("Input form tidak boleh kosong!");
    return false;
  }


  // DOM element lalu diberi isi dari form
  document.getElementById("waktu").innerText = waktuIni;
  document.getElementById("nama2").innerText = nama;
  document.getElementById("ttl2").innerText = ttl;
  document.getElementById("gender2").innerText = gender;
  document.getElementById("pesan2").innerText = pesan;
}