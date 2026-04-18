(function () {
  /* ─────────────────────────────────────────
     DATA KOMUNITAS
     Tambah/kurangi foto sesuai file yang ada.
     Path: assets/images/komunitas/{nama}/{nama}{n}.jpg
  ───────────────────────────────────────── */
  var DATA = {
    idan: {
      tag: "Komunitas Pertanian · 01",
      tagClass: "",
      title: "Idan",
      subtitle: "Pertanian Sayuran — Arava Utara",
      description: [
        {
          heading: "Tempat Bertani dan Berkebun",
          body: "Di tempat inilah banyak masyarakat melakukan pekerjaan melalui berkebun dan bertani. Terutama bagi masyarakat pelosok untuk menjual hasil kebunnya ke kota-kota atau pemasok untuk menerima hasil kebun yang dijual. Tempat ini cocok sebagai area perkebunan karena memiliki tanah yang subur.",
        },
        {
          heading: "Tempat Ilmu Pengetahuan dan Pengalaman",
          body: "Di tempat ini difokuskan untuk belajar sambil bekerja, sehingga yang pernah berada di tempat tersebut bisa membagikan pengalamannya kepada orang lain.",
        },
      ],
      chipClass: "",
      photos: [
        {
          src: "/assets/images/komunitas/idan/idan1.jpg",
          caption: "Lahan pertanian Idan",
        },
        {
          src: "/assets/images/komunitas/idan/idan2.jpg",
          caption: "Sistem irigasi modern",
        },
        {
          src: "/assets/images/komunitas/idan/idan3.jpg",
          caption: "Hasil panen sayuran",
        },
        {
          src: "/assets/images/komunitas/idan/idan4.jpg",
          caption: "Hasil panen sayuran",
        },
      ],
    },

    hatzeva: {
      tag: "Komunitas Pertanian · 02",
      tagClass: "",
      title: "Hatzeva",
      subtitle: "Pertanian & Bunga — Arava Tengah",
      description: [
        {
          heading: "Sebagai Tempat Pariwisata",
          body: "Lokasi ini memiliki tempat-tempat indah yang  waajib untuk di datangai oleh Masyarakat luar yang berkunjung ke tempat tersebut.Lokasi ini juga memiliki banyak makanan yang beragam banyak-nya yang wajib untuk di coba.",
        },
      ],
      chipClass: "",
      photos: [
        {
          src: "/assets/images/komunitas/hatzeva/unnamed (1).jpg",
          caption: "Kebun bunga Hatzeva",
        },
        {
          src: "/assets/images/komunitas/hatzeva/unnamed (2).jpg",
          caption: "Produksi bunga ekspor",
        },
        {
          src: "/assets/images/komunitas/hatzeva/unnamed (29).jpg",
          caption: "Greenhouse herbal",
        },
      ],
    },

    "ein-yahav": {
      tag: "Komunitas Pertanian · 03",
      tagClass: "",
      title: "Ein Yahav",
      subtitle: "Pertanian Modern — Teknologi Terpadu",
      description: [
        {
          body: "Dari gambar yang ada di atas dapat di simpulkan bahwa Lokasi tersebut sangat cocok utnuk tempat perkebunan dikarenakan lokassi ini jauh dari perkotaan dan memiliki tanya yang subur yang bisa di manfaatkan oleh Masyarakat sekitar.Tempat ini juga bisa untuk mencaari ilmu di karenakan kita bakal di ajarin cara menanam dan cara untuk menjaga kelestarian alam.",
        },
      ],
      chipClass: "",
      photos: [
        {
          src: "/assets/images/komunitas/ein_yahav/unnamed (2).jpg",
          caption: "Greenhouse Ein Yahav",
        },
        {
          src: "/assets/images/komunitas/ein_yahav/unnamed (3).jpg",
          caption: "Sistem sensor tanah IoT",
        },
        {
          src: "/assets/images/komunitas/ein_yahav/unnamed (4).jpg",
          caption: "Kolam aquakultur",
        },
      ],
    },

    sapir: {
      tag: "Pusat AICAT ★ · 04",
      tagClass: "gold",
      title: "Sapir",
      subtitle: "Pusat Komunitas & Lokasi AICAT",
      chips: ["Pusat Pelatihan", "Riset Agrikultur", "Kolaborasi Global"],
      chipClass: "gold",
      description: [
        {
          heading: "Pusat Pelatihan dan Pengembangan",
          body: "Sapir merupakan pusat utama kegiatan pelatihan di kawasan Arava yang menjadi lokasi dari AICAT. Di tempat ini, peserta dari berbagai negara mendapatkan pembelajaran langsung mengenai pertanian modern, mulai dari teknik budidaya hingga pengelolaan hasil pertanian secara profesional.",
        },
        {
          heading: "Riset dan Inovasi Agrikultur",
          body: "Selain sebagai tempat pelatihan, Sapir juga berperan sebagai pusat riset agrikultur. Berbagai teknologi dan metode terbaru dikembangkan untuk meningkatkan kualitas dan produktivitas pertanian, seperti sistem irigasi cerdas, greenhouse modern, serta pemanfaatan teknologi dalam monitoring tanaman.",
        },
        {
          heading: "Kolaborasi Global",
          body: "Sapir menjadi tempat bertemunya peserta dari berbagai negara untuk saling bertukar ilmu, pengalaman, dan budaya. Lingkungan ini mendorong terciptanya kolaborasi global yang tidak hanya memperluas wawasan, tetapi juga membangun jaringan internasional di bidang pertanian dan teknologi.",
        },
      ],

      photos: [
        {
          src: "/assets/images/komunitas/sapir/sapir6.jpeg",
          caption: "Kampus AICAT Sapir",
        },
        {
          src: "/assets/images/komunitas/sapir/sapir1.jpg",
          caption: "Kampus AICAT Sapir",
        },
        {
          src: "/assets/images/komunitas/sapir/sapir5.jpg",
          caption: "Kampus AICAT Sapir",
        },
        {
          src: "/assets/images/komunitas/sapir/sapir2.jpg",
          caption: "Kampus AICAT Sapir",
        },
        {
          src: "/assets/images/komunitas/sapir/sapir3.jpg",
          caption: "Kampus AICAT Sapir",
        },
        {
          src: "/assets/images/komunitas/sapir/sapir4.jpg",
          caption: "Kampus AICAT Sapir",
        },
      ],
    },

    tsofar: {
      tag: "Komunitas Pertanian · 05",
      tagClass: "",
      title: "Tsofar",
      subtitle: "Perkebunan Buah — Arava Selatan",
      description: [
        {
          heading: "Potensi Pertanian Modern",
          body: "Tsofar merupakan salah satu wilayah yang sangat cocok untuk kegiatan pertanian, bahkan telah terbukti berhasil melalui pengembangan kebun kurma yang luas. Pola tanam yang rapi serta penggunaan sistem irigasi modern membuat vegetasi di daerah ini terlihat lebih hijau dibandingkan wilayah gurun pada umumnya. Komoditas yang dikembangkan meliputi kurma sebagai tanaman utama, serta berbagai jenis sayuran greenhouse, tanaman buah tahan panas, dan bunga hias.",
        },
        {
          heading: "Lingkungan Kerja dan Edukasi",
          body: "Selain sebagai pusat pertanian, Tsofar juga menjadi tempat yang ideal untuk bekerja dan belajar. Wilayah ini mendukung berbagai aktivitas seperti pekerjaan di sektor perkebunan, penelitian agrikultur, hingga pembelajaran langsung bagi pelajar dan mahasiswa. Sistem agroteknologi seperti irigasi tetes dan greenhouse modern menjadikan Tsofar sebagai contoh nyata keberhasilan bertani di daerah kering.",
        },
        {
          heading: "Potensi Pariwisata Agro",
          body: "Tsofar juga memiliki potensi besar di bidang pariwisata, khususnya wisata berbasis pertanian. Perkebunan kurma yang unik, perpaduan pemandangan gurun dengan area hijau, serta langit yang cerah menjadi daya tarik tersendiri. Wilayah ini sangat cocok dikembangkan sebagai wisata agro seperti kegiatan petik kurma, edukasi sistem irigasi modern, hingga wisata desa berbasis ekowisata dan fotografi.",
        },
      ],
      chipClass: "",
      photos: [
        {
          src: "/assets/images/komunitas/tsofar/tsofar1.jpg",
          caption: "Tsofar",
        },
        {
          src: "/assets/images/komunitas/tsofar/tsofar2.jpg",
          caption: "Tsofar",
        },
        {
          src: "/assets/images/komunitas/tsofar/tsofar3.jpg",
          caption: "Tsofar",
        },
        {
          src: "/assets/images/komunitas/tsofar/tsofar4.jpg",
          caption: "Tsofar",
        },
        {
          src: "/assets/images/komunitas/tsofar/tsofar5.jpg",
          caption: "Tsofar",
        },
      ],
    },

    zuqim: {
      tag: "Komunitas Ekowisata · 06",
      tagClass: "blue",
      title: "Zuqim",
      subtitle: "Ekowisata — Alam Gurun Arava",
      description: [
        {
          heading: "Tempat Tinggal",
          body: "Zuqim dapat dijadikan tempat tinggal dalam skala kecil, terutama bagi komunitas yang menginginkan kehidupan sederhana. Namun, kondisi lingkungan seperti suhu ekstrem, keterbatasan air, dan fasilitas yang minim membuat wilayah ini kurang ideal untuk kehidupan modern dalam jumlah besar.",
        },
        {
          heading: "Peluang Pekerjaan",
          body: "Peluang kerja di Zuqim cukup terbatas, namun tetap ada di beberapa sektor seperti peternakan, pariwisata lokal, penelitian lingkungan, serta energi seperti tenaga surya. Wilayah ini tidak cocok untuk industri besar atau pertanian skala luas.",
        },
        {
          heading: "Potensi Pariwisata",
          body: "Zuqim memiliki potensi besar sebagai destinasi wisata gurun. Keindahan alam yang unik, suasana yang tenang, serta pengalaman hidup sederhana menjadi daya tarik utama untuk wisata edukasi, fotografi, dan ekowisata.",
        },
      ],
      chipClass: "blue",
      photos: [
        {
          src: "/assets/images/komunitas/zuqim/zuqim1.jpg",
          caption: "Zuqim",
        },
        {
          src: "/assets/images/komunitas/zuqim/zuqim2.jpg",
          caption: "Zuqim",
        },
        {
          src: "/assets/images/komunitas/zuqim/zuqim3.jpg",
          caption: "Zuqim",
        },
        {
          src: "/assets/images/komunitas/zuqim/zuqim4.jpg",
          caption: "Zuqim",
        },
        {
          src: "/assets/images/komunitas/zuqim/zuqim5.jpg",
          caption: "Zuqim",
        },
      ],
    },

    paran: {
      tag: "Komunitas Pertanian · 07",
      tagClass: "",
      title: "Paran",
      subtitle: "Peternakan & Kebun — Ujung Selatan Arava",
      description: [
        {
          heading: "Potensi Pertanian Edukatif",
          body: "Paran cocok untuk pengembangan pertanian modern berbasis teknologi seperti irigasi tetes dan greenhouse. Tanaman yang sesuai antara lain kurma, zaitun, dan tanaman herbal. Wilayah ini sangat baik dijadikan tempat pembelajaran, meskipun memiliki kendala seperti keterbatasan air, tanah kurang subur, dan suhu yang cukup ekstrem.",
        },
        {
          heading: "Peluang Kerja",
          body: "Paran mendukung berbagai aktivitas seperti penelitian pertanian, konservasi lingkungan, serta perkebunan khusus. Namun, wilayah ini kurang cocok untuk pertanian tradisional skala besar tanpa dukungan teknologi modern.",
        },
        {
          heading: "Potensi Pariwisata",
          body: "Paran memiliki daya tarik wisata berupa lanskap gurun, kebun kurma, serta area taman yang sudah tertata. Cocok untuk wisata alam, edukasi pertanian, fotografi, hingga aktivitas seperti trekking dan bersepeda.",
        },
      ],
      chipClass: "",
      photos: [
        {
          src: "/assets/images/komunitas/paran/paran1.jpg",
          caption: "paran",
        },
        {
          src: "/assets/images/komunitas/paran/paran2.jpg",
          caption: "paran",
        },
        {
          src: "/assets/images/komunitas/paran/paran5.jpg",
          caption: "paran",
        },
        {
          src: "/assets/images/komunitas/paran/paran3.jpg",
          caption: "paran",
        },
        {
          src: "/assets/images/komunitas/paran/paran4.jpg",
          caption: "paran",
        },
      ],
    },
  };

  /* ─────────────────────────────────────────
     STATE
  ───────────────────────────────────────── */
  var currentSlide = 0;
  var currentData = null;
  var autoTimer = null;

  /* ─────────────────────────────────────────
     BUAT ELEMEN LIGHTBOX (inject sekali)
  ───────────────────────────────────────── */
  var overlay = document.createElement("div");
  overlay.className = "lb-overlay";
  overlay.id = "lbOverlay";
  overlay.innerHTML = [
    '<div class="lb-modal" id="lbModal">',

    /* Header */
    '<div class="lb-header">',
    '<div class="lb-header-info">',
    '<div class="lb-tag" id="lbTag"></div>',
    '<div class="lb-title" id="lbTitle"></div>',
    '<div class="lb-subtitle" id="lbSubtitle"></div>',
    "</div>",
    '<button class="lb-close" id="lbClose" aria-label="Tutup">&#x2715;</button>',
    "</div>",

    /* Slider */
    '<div class="lb-slider-wrap">',
    '<div class="lb-slides-track" id="lbTrack"></div>',
    '<button class="lb-btn prev" id="lbPrev" aria-label="Sebelumnya">',
    '<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>',
    "</button>",
    '<button class="lb-btn next" id="lbNext" aria-label="Berikutnya">',
    '<svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>',
    "</button>",
    '<div class="lb-counter" id="lbCounter">1 / 3</div>',
    '<div class="lb-dots" id="lbDots"></div>',
    "</div>",

    /* Thumbnail strip */
    '<div class="lb-thumbs" id="lbThumbs"></div>',

    /* Footer chips */
    '<div class="lb-footer" id="lbFooter"></div>',

    "</div>",
  ].join("");

  document.body.appendChild(overlay);

  /* Referensi elemen */
  var elTag = document.getElementById("lbTag");
  var elTitle = document.getElementById("lbTitle");
  var elSubtitle = document.getElementById("lbSubtitle");
  var elTrack = document.getElementById("lbTrack");
  var elPrev = document.getElementById("lbPrev");
  var elNext = document.getElementById("lbNext");
  var elCounter = document.getElementById("lbCounter");
  var elDots = document.getElementById("lbDots");
  var elThumbs = document.getElementById("lbThumbs");
  var elFooter = document.getElementById("lbFooter");
  var elClose = document.getElementById("lbClose");

  /* ─────────────────────────────────────────
     OPEN LIGHTBOX
  ───────────────────────────────────────── */
  function openLightbox(key) {
    var d = DATA[key];
    if (!d) return;

    currentData = d;
    currentSlide = 0;

    /* Tag & judul */
    elTag.textContent = d.tag;
    elTag.className = "lb-tag" + (d.tagClass ? " " + d.tagClass : "");
    elTitle.textContent = d.title;
    elSubtitle.textContent = d.subtitle;

    /* Slides */
    elTrack.innerHTML = "";
    d.photos.forEach(function (p) {
      var slide = document.createElement("div");
      slide.className = "lb-slide";
      slide.innerHTML =
        '<img src="' +
        p.src +
        '" alt="' +
        d.title +
        '" loading="lazy"/>' +
        (p.caption
          ? '<div class="lb-slide-caption">' + p.caption + "</div>"
          : "");
      elTrack.appendChild(slide);
    });

    /* Dots */
    elDots.innerHTML = "";
    d.photos.forEach(function (_, i) {
      var dot = document.createElement("button");
      dot.className = "lb-dot" + (i === 0 ? " active" : "");
      dot.setAttribute("aria-label", "Foto " + (i + 1));
      dot.addEventListener("click", function () {
        goTo(i);
      });
      elDots.appendChild(dot);
    });

    /* Thumbnails */
    elThumbs.innerHTML = "";
    d.photos.forEach(function (p, i) {
      var th = document.createElement("div");
      th.className = "lb-thumb" + (i === 0 ? " active" : "");
      th.innerHTML = '<img src="' + p.src + '" alt="thumb" loading="lazy"/>';
      th.addEventListener("click", function () {
        goTo(i);
      });
      elThumbs.appendChild(th);
    });

    /* Footer — deskripsi paragraf atau chips */
    elFooter.innerHTML = "";
    if (d.description && d.description.length) {
      /* Mode deskripsi: tampilkan paragraf per poin */
      elFooter.style.flexDirection = "column";
      elFooter.style.alignItems = "flex-start";
      elFooter.style.gap = "10px";
      d.description.forEach(function (item) {
        var wrap = document.createElement("div");
        wrap.style.cssText = "width:100%";
        if (item.heading) {
          var h = document.createElement("p");
          h.style.cssText =
            "font-size:12px;font-weight:700;color:#1f4d36;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px";
          h.textContent = item.heading;
          wrap.appendChild(h);
        }
        var p = document.createElement("p");
        p.style.cssText = "font-size:13px;color:#444;line-height:1.7;margin:0";
        p.textContent = item.body;
        wrap.appendChild(p);
        elFooter.appendChild(wrap);
      });
    } else if (d.chips && d.chips.length) {
      /* Mode chips: tampilkan badge seperti semula */
      elFooter.style.flexDirection = "";
      elFooter.style.alignItems = "";
      elFooter.style.gap = "";
      d.chips.forEach(function (c) {
        var chip = document.createElement("span");
        chip.className = "lb-chip" + (d.chipClass ? " " + d.chipClass : "");
        chip.textContent = c;
        elFooter.appendChild(chip);
      });
    }

    updateUI();

    /* Tampilkan */
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";

    /* Autoplay */
    startAuto();
  }

  /* ─────────────────────────────────────────
     CLOSE LIGHTBOX
  ───────────────────────────────────────── */
  function closeLightbox() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
    stopAuto();
  }

  /* ─────────────────────────────────────────
     NAVIGASI
  ───────────────────────────────────────── */
  function goTo(n) {
    var total = currentData.photos.length;
    currentSlide = (n + total) % total;
    updateUI();
    resetAuto();
  }

  function updateUI() {
    var total = currentData.photos.length;

    /* Geser track */
    elTrack.style.transform = "translateX(-" + currentSlide * 100 + "%)";

    /* Counter */
    elCounter.textContent = currentSlide + 1 + " / " + total;

    /* Dots */
    elDots.querySelectorAll(".lb-dot").forEach(function (d, i) {
      d.classList.toggle("active", i === currentSlide);
    });

    /* Thumbs */
    elThumbs.querySelectorAll(".lb-thumb").forEach(function (t, i) {
      t.classList.toggle("active", i === currentSlide);
      if (i === currentSlide) {
        t.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    });
  }

  /* ─────────────────────────────────────────
     AUTOPLAY
  ───────────────────────────────────────── */
  function startAuto() {
    stopAuto();
    autoTimer = setInterval(function () {
      goTo(currentSlide + 1);
    }, 4000);
  }

  function stopAuto() {
    clearInterval(autoTimer);
  }

  function resetAuto() {
    stopAuto();
    startAuto();
  }

  /* ─────────────────────────────────────────
     EVENT LISTENERS
  ───────────────────────────────────────── */
  /* Tombol panah */
  elPrev.addEventListener("click", function () {
    goTo(currentSlide - 1);
  });
  elNext.addEventListener("click", function () {
    goTo(currentSlide + 1);
  });

  /* Keyboard */
  document.addEventListener("keydown", function (e) {
    if (!overlay.classList.contains("active")) return;
    if (e.key === "ArrowRight") goTo(currentSlide + 1);
    if (e.key === "ArrowLeft") goTo(currentSlide - 1);
    if (e.key === "Escape") closeLightbox();
  });

  /* Tombol close */
  elClose.addEventListener("click", closeLightbox);

  /* Klik overlay (luar modal) */
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeLightbox();
  });

  /* Pause autoplay saat hover slider */
  elTrack.parentElement.addEventListener("mouseenter", stopAuto);
  elTrack.parentElement.addEventListener("mouseleave", startAuto);

  /* ── TOUCH SWIPE ── */
  var touchStartX = 0;
  var touchStartY = 0;

  elTrack.addEventListener(
    "touchstart",
    function (e) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    },
    { passive: true },
  );

  elTrack.addEventListener("touchend", function (e) {
    var dx = e.changedTouches[0].clientX - touchStartX;
    var dy = e.changedTouches[0].clientY - touchStartY;
    /* Pastikan swipe horizontal, bukan vertical scroll */
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      goTo(dx < 0 ? currentSlide + 1 : currentSlide - 1);
    }
  });

  /* ─────────────────────────────────────────
     PASANG EVENT CLICK KE SETIAP KOMUNITAS CARD
     Baca data-location dari atribut HTML
  ───────────────────────────────────────── */
  function attachCards() {
    document
      .querySelectorAll(".komunitas-card[data-location]")
      .forEach(function (card) {
        card.addEventListener("click", function () {
          openLightbox(card.getAttribute("data-location"));
        });
      });
  }

  /* Jalankan setelah DOM siap */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", attachCards);
  } else {
    attachCards();
  }
})();
