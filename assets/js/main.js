function setVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

setVH();
window.addEventListener("resize", setVH);
window.addEventListener("orientationchange", setVH);
/* ==================================================================================================================
   INITIALIZE AOS ANIMATION
   ================================================================================================================== */

AOS.init({
  once: true,
});

/* ==================================================================================================================
   FAQ ACCORDION
   ================================================================================================================== */

function toggleAccordion(id) {
  const content = document.getElementById("content-" + id);
  const card = content.closest(".card");
  const isOpen = content.classList.contains("open");

  // Tutup semua
  document
    .querySelectorAll(".card-content")
    .forEach((c) => c.classList.remove("open"));
  document
    .querySelectorAll(".card")
    .forEach((c) => c.classList.remove("active"));

  // Buka yang diklik (toggle)
  if (!isOpen) {
    content.classList.add("open");
    card.classList.add("active");
  }
}

/* ==================================================================================================================
   HERO INTRO PAGE
   ================================================================================================================== */

const aicatSound = new Audio("assets/sounds/soound1.mp3");
aicatSound.preload = "auto";
aicatSound.volume = 0.9;

// ===== AUDIO UNLOCK SYSTEM =====
let audioReady = false;

function unlockAudio() {
  if (audioReady) return;

  aicatSound.muted = true;

  aicatSound
    .play()
    .then(() => {
      aicatSound.pause();
      aicatSound.currentTime = 0;
      aicatSound.muted = false;

      audioReady = true;
      sessionStorage.setItem("audioUnlocked", "true");
    })
    .catch(() => {});
}

if (sessionStorage.getItem("audioUnlocked") === "true") {
  audioReady = true;
}

// ===== DOM READY =====
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.overflow = "hidden";
  window.scrollTo(0, 0);

  const logo = document.getElementById("introLogo");

  // jika logo diklik → unlock + play sound
  if (logo) {
    logo.addEventListener("click", () => {
      unlockAudio();

      setTimeout(() => {
        playAICATSound();
      }, 100);
    });
  }

  // typewriter
  setTimeout(() => {
    typeWriter("Arava International Center for Agriculture Training.", 0);
  }, 1400);
});

// ===== PLAY SOUND =====
function playAICATSound() {
  if (!audioReady) return;

  aicatSound.currentTime = 0;
  aicatSound.play().catch(() => {});
}

// ===== TYPEWRITER =====
function typeWriter(text, index) {
  const el = document.getElementById("typewriter");
  if (!el) return;

  if (index < text.length) {
    el.textContent += text.charAt(index);

    setTimeout(() => {
      typeWriter(text, index + 1);
    }, 55);
  } else {
    setTimeout(() => {
      const btn = document.getElementById("introBtn");
      if (btn) btn.classList.add("visible");
    }, 400);
  }
}

// ===== DISMISS INTRO ==============================================================
function dismissIntro() {
  const screen = document.getElementById("intro-screen");
  const identity = document.querySelector(".intro-identity");
  const btn = document.getElementById("introBtn");
  const particles = document.querySelector(".intro-particles");

  if (!screen) return;

  aicatSound.pause();
  aicatSound.currentTime = 0;

  if (identity) identity.classList.add("fade-out");
  if (btn) btn.classList.add("fade-out");
  if (particles) particles.classList.add("fade-out");

  setTimeout(() => {
    screen.classList.add("split-open");
  }, 800);

  setTimeout(() => {
    screen.classList.add("done");
    screen.style.display = "none";
    document.body.style.overflow = "";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 1750);
}

/* ==================================================================================================================
NAVBAR SCROLL EFFECT
================================================================================================================== */

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".main-navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

/* ==================================================================================================================
   MOBILE SIDEBAR MENU
   ================================================================================================================== */

const toggler = document.querySelector(".custom-toggler");
const sidebar = document.querySelector(".mobile-sidebar");
const overlay = document.querySelector(".mobile-overlay");
const closeBtn = document.querySelector(".close-sidebar");
const body = document.body;

toggler.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
  toggler.classList.add("active");
  body.classList.add("sidebar-open");
});

closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

function closeSidebar() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  toggler.classList.remove("active");
  body.classList.remove("sidebar-open");
}

/* ==================================================================================================================
   HERO SLIDER
   ================================================================================================================== */

const slides = document.querySelectorAll(".hero-bg");
const bars = document.querySelectorAll(".bar span");
const title = document.getElementById("heroTitle");
const desc = document.getElementById("heroDesc");

const heroTexts = [
  {
    title: "Labu Berkualitas, Panen Lebih Bernilai",
    desc: "Budidaya labu dengan teknik modern mampu meningkatkan hasil panen sekaligus nilai jual di pasar lokal dan ekspor.",
  },
  {
    title: "Kurma: Potensi Besar di Lahan Tropis",
    desc: "Inovasi pertanian memungkinkan kurma tumbuh optimal di berbagai kondisi, membuka peluang bisnis baru bagi petani muda.",
  },
  {
    title: "Cabai Unggul, Tahan Cuaca Ekstrem",
    desc: "Dengan teknologi pertanian, produksi cabai menjadi lebih stabil meskipun menghadapi perubahan iklim.",
  },
  {
    title: "Dari Bibit Terbaik, Hasil Maksimal",
    desc: "Pemilihan bibit unggul menjadi kunci utama dalam meningkatkan kualitas dan kuantitas panen.",
  },
  {
    title: "Belajar Pertanian Modern di Israel",
    desc: "Bekerja Sambil Menghasilkan Pulang Membangun Toba.",
  },
  {
    title: "Membangun Pertanian Modern",
    desc: "AICAT menghadirkan pelatihan berbasis teknologi dan inovasi.",
  },
  {
    title: "Smart Farming Technology",
    desc: "Mengintegrasikan IoT dan AI dalam sektor agrikultur.",
  },
  {
    title: "Kolaborasi Internasional",
    desc: "Membuka peluang global untuk pertanian berkelanjutan.",
  },
];

let index = 0;

function startSlider() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[index].classList.add("active");

  title.style.opacity = 0;
  desc.style.opacity = 0;

  setTimeout(() => {
    title.textContent = heroTexts[index].title;
    desc.innerHTML = heroTexts[index].desc;

    title.style.opacity = 1;
    desc.style.opacity = 1;
  }, 500);

  bars.forEach((bar) => (bar.style.width = "0%"));

  setTimeout(() => {
    if (bars[index]) {
      bars[index].style.transition = "width 4s linear";
      bars[index].style.width = "100%";
    }
  }, 1000);

  setTimeout(() => {
    index = (index + 1) % slides.length;
    startSlider();
  }, 5000);
}

startSlider();

/* ==================================================================================================================
SCROLL BUTTON
================================================================================================================= */

document
  .getElementById("scrollToPartner")
  .addEventListener("click", function () {
    document.querySelector("#about-aicat").scrollIntoView({
      behavior: "smooth",
    });
  });

/* ==================================================================================================================
  TESTIMONIAL LOOP CAROUSEL
  ================================================================================================================== */
const testimonials = [
  {
    text: "Program MSc Plant Biology dari AICAT dan Tel Aviv University memberi saya banyak pengalaman berharga. Meski menghadapi berbagai tantangan, termasuk cuaca ekstrem, kami berhasil lulus dan mendapatkan ilmu yang sangat berguna untuk masa depan.",
    name: "Tran Hoai Thanh – Nong Lam University HCMC",
    image: "/assets/images/testimonial/thanh.jpg",
  },
  {
    text: "Saya belajar banyak dari program AICAT di Israel. Setelah kembali ke Thailand, saya bersama para alumni mendirikan Arava Farm Company dan menerapkan teknik pertanian modern seperti drip irrigation untuk budidaya jagung manis yang memiliki permintaan tinggi di pasar.",
    name: "Wirin Anthakhaek – Thailand",
    image: "/assets/images/testimonial/wirin1.jpg",
  },
  {
    text: "Program MSc di AICAT dan Tel Aviv University adalah perjalanan yang sangat berarti bagi hidup saya. Selain ilmu akademik, saya menjadi lebih percaya diri, lebih matang, dan belajar berpikir “out of the box”. Program ini benar-benar mengubah hidup saya.",
    name: "Hung – Vietnam",
    image: "/assets/images/testimonial/Hung MSc2(1).jpg",
  },
  {
    text: "Saya sangat menghargai pengalaman belajar di AICAT dengan metode “learning by doing”. Setelah lulus, saya mendapatkan posisi manajemen di bidang pertanian di Myanmar dan dapat langsung menerapkan ilmu yang saya pelajari.",
    name: "Thida Win – Myanmar",
    image: "/assets/images/testimonial/Thida Win – Myanmar.jpg",
  },
  {
    text: "Kami bangga atas pencapaian Vu, Tuan, dan Thanh yang berhasil meraih gelar MSc di bidang Plant Biology dari Tel Aviv University. Dedikasi dan kerja keras mereka telah membuka jalan bagi mahasiswa berikutnya dalam program ini.",
    name: "Prof. Ohad Nir – Tel Aviv University",
    image: "/assets/images/testimonial/Ohad.jpg",
  },
  {
    text: "Program AICAT memberi saya pengalaman luar biasa dengan pendekatan “learning by doing”. Saya mendapatkan ilmu teori dari Tel Aviv University sekaligus pengalaman langsung bekerja dengan petani dan peneliti, yang mempersiapkan saya untuk berkontribusi pada ketahanan pangan di masa depan.",
    name: "Endurance P. Ojo – Nigeria",
    image: "/assets/images/testimonial/P-ojo.jpg",
  },
];

let current = 0;
let isAnimating = false;

const textEl = document.getElementById("testimonialText");
const authorEl = document.getElementById("authorText");
const avatarEl = document.getElementById("avatarEl");
const dotsContainer = document.getElementById("dotsContainer");

// Build dots
testimonials.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.addEventListener("click", () => goTo(i, i < current ? "prev" : "next"));
  dotsContainer.appendChild(dot);
});

function updateDots() {
  document.querySelectorAll(".dot").forEach((d, i) => {
    d.classList.toggle("active", i === current);
  });
}

function render(dir = "next") {
  const t = testimonials[current];
  const enterClass = dir === "next" ? "slide-enter" : "slide-enter-prev";

  textEl.className = "testimonial-text " + enterClass;
  authorEl.className = "author " + enterClass;

  textEl.textContent = t.text;
  authorEl.innerHTML = `${t.name}`;
  avatarEl.src = t.image;
  avatarEl.alt = t.name;

  updateDots();

  // Remove animation class after it plays
  setTimeout(() => {
    textEl.className = "testimonial-text";
    authorEl.className = "author";
    isAnimating = false;
  }, 450);
}

function goTo(index, dir = "next") {
  if (isAnimating || index === current) return;
  isAnimating = true;
  current = index;
  render(dir);
}

document.getElementById("nextBtn").addEventListener("click", () => {
  goTo((current + 1) % testimonials.length, "next");
});

document.getElementById("prevBtn").addEventListener("click", () => {
  goTo((current - 1 + testimonials.length) % testimonials.length, "prev");
});

// Keyboard navbar halaman nico23
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") document.getElementById("nextBtn").click();
  if (e.key === "ArrowLeft") document.getElementById("prevBtn").click();
});

// Init dulu
render("next");
