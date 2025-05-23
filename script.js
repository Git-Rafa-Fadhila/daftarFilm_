let daftarFilm = [
  {
    judul: "Inception",
    deskripsi: "Film tentang mimpi dalam mimpi.",
    kategori: "Science Fiction",
    rating: "9.8 / 10",
    tahun_terbit: "2020",
    sutradara: "Neilechi",
    gambar: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
  },
  {
    judul: "Interstellar",
    deskripsi: "Perjalanan antar planet untuk mencari tempat tinggal baru.",
    kategori: "Science Fiction",
    rating: " 10 / 10",
    tahun_terbit: "2022",
    sutradara: "Neilechi",
    gambar: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
  }
];

function tampilkanDaftarFilm(list = daftarFilm) {
  let container = document.getElementById("daftar-film");
  container.innerHTML = "";

  list.forEach(function (film, index) {
    let filmDiv = document.createElement("div");
    filmDiv.classList.add("film-card");
    filmDiv.innerHTML = `
      <img src="${film.gambar}" alt="${film.judul}">
      <h3>${film.judul}</h3>
      <p>${film.deskripsi}</p>
      <small>Kategori: ${film.kategori}</small>
      <small>Rating: ${film.rating}</small>
      <small>Tahun Terbit: ${film.tahun_terbit}</small>
      <small>Sutradara: ${film.sutradara}</small><br>
      <button onclick="editFilm(${index})">Edit</button>
      <button onclick="hapusFilm(${index})">Hapus</button>
    `;
    container.appendChild(filmDiv);
  });
}

tampilkanDaftarFilm();

let formFilm = document.getElementById("form-film");

function defaultSubmit(event) {
  event.preventDefault();

  let judul = document.getElementById("judul").value;
  let deskripsi = document.getElementById("deskripsi").value;
  let kategori = document.getElementById("kategori").value;
  let rating = document.getElementById("rating").value;
  let tahun_terbit = document.getElementById("tahun_terbit").value;
  let sutradara = document.getElementById("sutradara").value;
  let gambar = document.getElementById("gambar").value;

  let filmBaru = {
    judul: judul,
    deskripsi: deskripsi,
    kategori: kategori,
    rating: rating,
    tahun_terbit: tahun_terbit,
    sutradara: sutradara,
    gambar: gambar
  };

  daftarFilm.push(filmBaru);

  tampilkanDaftarFilm();
  formFilm.reset();
}

formFilm.onsubmit = defaultSubmit;

function hapusFilm(index) {
    daftarFilm.splice(index, 1);
    tampilkanDaftarFilm();
}

function editFilm(index) {
  let film = daftarFilm[index];

  document.getElementById("judul").value = film.judul;
  document.getElementById("deskripsi").value = film.deskripsi;
  document.getElementById("kategori").value = film.kategori;
  document.getElementById("rating").value = film.rating;
  document.getElementById("tahun_terbit").value = film.tahun_terbit;
  document.getElementById("sutradara").value = film.sutradara;
  document.getElementById("gambar").value = film.gambar;

  formFilm.onsubmit = function (event) {
    event.preventDefault();

    film.judul = document.getElementById("judul").value;
    film.deskripsi = document.getElementById("deskripsi").value;
    film.kategori = document.getElementById("kategori").value;
    film.rating = document.getElementById("rating").value;
    film.tahun_terbit = document.getElementById("tahun_terbit").value;
    film.sutradara = document.getElementById("sutradara").value;
    film.gambar = document.getElementById("gambar").value;

    tampilkanDaftarFilm();
    formFilm.reset();

    formFilm.onsubmit = defaultSubmit;
  }
}

function cariFilm() {
  let query = document.getElementById("search").value.toLowerCase();
  let hasilPencarian = daftarFilm.filter(film => 
    film.judul.toLowerCase().includes(query) 
  );

  tampilkanDaftarFilm(hasilPencarian);
}