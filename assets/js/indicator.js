// ===================== FLOATING SECTION INDICATOR =====================
(function () {
  const indicator = document.getElementById("floatingIndicator");
  const sectionEl = document.getElementById("currentSection");
  if (!indicator || !sectionEl) return;

  // Daftar section yang ingin dilacak beserta label tampilannya
  const sections = [
    { id: "tentang", label: "Sejarah AICAT" },
    { id: "program", label: "Program Kami" },
    { id: "filosofi", label: "Filosofi" },
    { id: "kolaborasi", label: "Kolaborasi Ilmiah" },
    { id: "mitra", label: "Mitra & Pendukung" },
  ];

  // Batas atas: mulai muncul saat #tentang masuk viewport
  const triggerStart = document.getElementById("tentang");
  // Batas bawah: hilang saat #footer masuk viewport
  const triggerEnd = document.getElementById("footer");

  if (!triggerStart || !triggerEnd) return;

  function getCurrentLabel() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    let active = null;

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (!el) continue;
      // Section dianggap "aktif" kalau titik tengah layar sudah melewati top-nya
      if (el.getBoundingClientRect().top <= windowHeight * 0.5) {
        active = s.label;
      }
    }
    return active || sections[0].label;
  }

  function updateIndicator() {
    const startTop = triggerStart.getBoundingClientRect().top;
    const endTop = triggerEnd.getBoundingClientRect().top;

    // Tampilkan: setelah #tentang masuk layar DAN sebelum #footer masuk layar
    const shouldShow = startTop <= window.innerHeight * 0.9 && endTop > 0;

    if (shouldShow) {
      sectionEl.textContent = getCurrentLabel();
      indicator.classList.add("visible");
    } else {
      indicator.classList.remove("visible");
    }
  }

  // Jalankan saat scroll dan saat pertama load
  window.addEventListener("scroll", updateIndicator, { passive: true });
  updateIndicator();
})();

