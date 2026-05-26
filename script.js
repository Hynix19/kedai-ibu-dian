// script.js
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: true,
    duration: 800, // Durasi animasi (800ms adalah sweet spot untuk kelancaran)
    easing: "ease-out-cubic", // Transisi melambat di akhir, jauh lebih smooth dibanding default
    offset: 100, // Animasi baru dipicu setelah elemen masuk 100px ke layar
    delay: 50, // Animasi cuma berjalan sekali pas di-scroll awal (opsional)
  });
  // LOGIKA SCROLL TOP APP BAR
  const topAppBar = document.getElementById("topAppBar");
  const topAppBarContainer = document.getElementById("topAppBarContainer");

  // Defensive programming: cek dulu elemennya ada atau enggak biar ga bikin crash seisi script
  if (topAppBar && topAppBarContainer) {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 20) {
          topAppBar.classList.remove(
            "bg-surface/80",
            "border-outline-variant/20",
            "shadow-xs",
          );
          topAppBar.classList.add(
            "bg-surface/95",
            "border-outline-variant/40",
            "shadow-sm",
          );

          topAppBarContainer.classList.remove("py-4");
          topAppBarContainer.classList.add("py-2.5");
        } else {
          topAppBar.classList.remove(
            "bg-surface/95",
            "border-outline-variant/40",
            "shadow-sm",
          );
          topAppBar.classList.add(
            "bg-surface/80",
            "border-outline-variant/20",
            "shadow-xs",
          );

          topAppBarContainer.classList.remove("py-2.5");
          topAppBarContainer.classList.add("py-4");
        }
      },
      { passive: true },
    );
    setTimeout(() => {
      AOS.refresh();
    }, 350);
  }

  const heroBg = document.getElementById("heroBg");

  if (heroBg) {
    window.addEventListener(
      "scroll",
      () => {
        // Batasi kalkulasi hanya saat area hero terlihat di layar (Optimasi Performa)
        if (window.scrollY <= window.innerHeight) {
          const speed = 0.4;
          const yPos = window.scrollY * speed;
          // Gunakan translate3d untuk memicu hardware acceleration GPU browser
          heroBg.style.transform = `translate3d(0, ${yPos}px, 0) scale(1.05)`;
        }
      },
      { passive: true },
    );
    setTimeout(() => {
      AOS.refresh();
    }, 350);
  }
  // aboutsection
  const aboutSection = document.getElementById("aboutSection");

  if (aboutSection) {
    const observerOptions = {
      root: null, // Menggunakan viewport browser
      threshold: 0.15, // Animasi jalan saat 15% area section sudah masuk layar
    };

    const aboutObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Hapus class penahan, masukkan class animasi masuk
          entry.target.classList.remove("opacity-0", "translate-y-8");
          entry.target.classList.add("opacity-100", "translate-y-0");

          // Unobserve karena kita cuma butuh animasi ini jalan sekali saja saat di-scroll
          observer.unobserve(entry.target);
        }
        setTimeout(() => {
          AOS.refresh();
        }, 350);
      });
    }, observerOptions);

    aboutObserver.observe(aboutSection);
  }
  // LOGIKA AKTIF INDIKATOR DOTS TESTIMONIALS
  const testimonialContainer = document.getElementById("testimonialContainer");
  const dots = document.querySelectorAll("#paginationDots > div");

  if (testimonialContainer && dots.length > 0) {
    testimonialContainer.addEventListener(
      "scroll",
      () => {
        // Ambil lebar satu kartu beserta gap-nya (scroll width proporsional)
        const cardWidth =
          testimonialContainer.firstElementChild.getBoundingClientRect().width +
          16; // 16px adalah estimasi gap-md
        const scrollLeft = testimonialContainer.scrollLeft;

        // Tentukan index kartu mana yang paling dekat dengan posisi scroll saat ini
        const activeIndex = Math.round(scrollLeft / cardWidth);

        // Looping untuk merubah class dot secara dinamis
        dots.forEach((dot, index) => {
          if (index === activeIndex) {
            dot.classList.remove("bg-outline-variant", "w-2");
            dot.classList.add("bg-primary", "w-4"); // Efek memanjang (pill) untuk yang aktif
          } else {
            dot.classList.remove("bg-primary", "w-4");
            dot.classList.add("bg-outline-variant", "w-2"); // Kembali jadi dot bulat kecil
          }
        });
      },
      { passive: true },
    );
    setTimeout(() => {
      AOS.refresh();
    }, 350);
  }

  // 1. LOGIKA INTERAKTIF FILTER MENU KEDAI
  // ==========================================
  const filterButtons = document.querySelectorAll(".filter-btn");
  const menuCards = document.querySelectorAll(".menu-card");

  if (filterButtons.length > 0 && menuCards.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedFilter = button.getAttribute("data-filter");

        // ====================================================================
        // 1. UPDATE STYLE TOMBOL AKTIF VS INAKTIF
        // ====================================================================
        filterButtons.forEach((btn) => {
          const crownIcon = btn.querySelector(".crown-icon");

          if (btn.getAttribute("data-filter") === "best-seller") {
            // KONDISI NONAKTIF: Tombol putih, border kuning, tulisan gelap, MAHKOTA EMAS
            btn.classList.remove(
              "bg-amber-500",
              "border-amber-500",
              "text-black",
            );
            btn.classList.add(
              "bg-white",
              "border",
              "border-amber-400",
              "text-on-surface-variant",
            );
            // Kembalikan mahkota jadi EMAS saat nonaktif
            if (crownIcon) crownIcon.style.fill = "#ffb940";
          } else {
            // Reset tombol biasa ke kondisi inaktif standard
            btn.classList.remove("bg-primary", "text-on-primary");
            btn.classList.add(
              "bg-white",
              "border",
              "border-outline-variant",
              "text-on-surface-variant",
            );
          }
        });

        // ====================================================================
        // 2. SET STYLE AKTIF UNTUK TOMBOL YANG SEDANG DIKLIK
        // ====================================================================
        const currentCrownIcon = button.querySelector(".crown-icon");

        if (selectedFilter === "best-seller") {
          // KONDISI AKTIF: Tombol full emas, TULISAN HITAM
          button.classList.remove(
            "bg-white",
            "border-amber-400",
            "text-on-surface-variant",
          );
          button.classList.add(
            "bg-amber-500",
            "border-amber-500",
            "text-black", // Mengubah teks menjadi hitam saat aktif
          );

          // PAKSA MAHKOTA JADI HITAM SAAT AKTIF
          if (currentCrownIcon) currentCrownIcon.style.fill = "#000000"; // Mengubah mahkota jadi hitam murni
        } else {
          // Jika yang diklik tombol biasa: Aktif hijau primary murni
          button.classList.remove(
            "bg-white",
            "border",
            "border-outline-variant",
            "text-on-surface-variant",
          );
          button.classList.add("bg-primary", "text-on-primary");
        }

        // ====================================================================
        // 3. ANIMASI FILTER PADA KARTU MENU (KODE ASLI KAMU)
        // ====================================================================
        menuCards.forEach((card) => {
          const cardCategories = card.getAttribute("data-category").split(" ");

          if (cardCategories.includes(selectedFilter)) {
            card.classList.remove("hidden");
            setTimeout(() => {
              card.classList.remove("opacity-0", "scale-95");
            }, 10);
          } else {
            card.classList.add("opacity-0", "scale-95");
            setTimeout(() => {
              card.classList.add("hidden");
            }, 300);
          }
        });

        setTimeout(() => {
          if (typeof AOS !== "undefined") {
            AOS.refresh();
          }
        }, 350);
      });
    });
    const defaultFilterBtn = document.querySelector(
      '.filter-btn[data-filter="best-seller"]',
    );
    if (defaultFilterBtn) {
      defaultFilterBtn.click();
    }
  }
  const scrollContainer = document.getElementById("filterBtnContainer");
  const filterDots = document.querySelectorAll(".filter-dot");

  if (scrollContainer && filterDots.length > 0) {
    scrollContainer.addEventListener("scroll", () => {
      // Hitung batas maksimal scroll horizontal container filter
      const maxScroll =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      if (maxScroll <= 0) return;

      // Ubah posisi koordinat scroll menjadi nilai persentase (0 sampai 1)
      const scrollPercent = scrollContainer.scrollLeft / maxScroll;

      // Fungsi pembantu (helper) untuk mengubah status ukuran dan warna bintik
      const updateActiveDot = (activeIndex) => {
        dots.forEach((dot, index) => {
          if (index === activeIndex) {
            // Jika Dot Aktif: Membesar, warna cerah utama, full opacity
            dot.classList.remove(
              "bg-outline-variant",
              "w-1.5",
              "h-1.5",
              "opacity-50",
            );
            dot.classList.add("bg-primary", "w-2", "h-2", "opacity-100");
          } else {
            // Jika Dot Inaktif: Mengecil, warna redup, transparan 50%
            dot.classList.remove("bg-primary", "w-2", "h-2", "opacity-100");
            dot.classList.add(
              "bg-outline-variant",
              "w-1.5",
              "h-1.5",
              "opacity-50",
            );
          }
        });
      };

      // Tentukan bintik mana yang harus membesar berdasarkan posisi jempol user
      if (scrollPercent < 0.2) {
        updateActiveDot(0); // Posisi Awal (Paling Kiri)
      } else if (scrollPercent > 0.8) {
        updateActiveDot(2); // Posisi Akhir (Paling Kanan)
      } else {
        updateActiveDot(1); // Posisi Tengah-tengah
      }
    });
  }

  // ==========================================
  // 2. LOGIKA DINAMIS AUTOMATION WHATSAPP CTA
  // ==========================================
  const waOrderButtons = document.querySelectorAll(".wa-order-btn");
  // Ganti nomor di bawah ini dengan nomor asli Kedai Ibu Dian (Gunakan kode negara '62')
  const noWhatsApp = "6281299966383";

  if (waOrderButtons.length > 0) {
    waOrderButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const namaMenu = button.getAttribute("data-menu");
        const teksPesan = `Bu, saya ingin pesan ${namaMenu}`;

        // Amankan teks string agar valid menjadi URL string browser
        const urlFormatTeks = encodeURIComponent(teksPesan);
        const linkWhatsApp = `https://wa.me/${noWhatsApp}?text=${urlFormatTeks}`;

        // Buka aplikasi WhatsApp/Web langsung ke ruang chat tujuan
        window.open(linkWhatsApp, "_blank");
      });
    });
  }
  // 3. LOGIKA BUTTON UTAMA (GENERAL INQUIRY)
  // ==========================================
  const waGeneralBtn = document.getElementById("waGeneralBtn");

  if (waGeneralBtn) {
    waGeneralBtn.addEventListener("click", () => {
      // Template pesan umum untuk menanyakan menu lain / katering
      const teksPesanUmum = `Halo Kedai Ibu Dian, saya mau tanya untuk ketersediaan menu lainnya hari ini.`;

      const urlFormatTeks = encodeURIComponent(teksPesanUmum);
      const linkWhatsApp = `https://wa.me/${noWhatsApp}?text=${urlFormatTeks}`;

      window.open(linkWhatsApp, "_blank");
    });
  }
  // 4. LOGIKA BUTTON KATERING (CATERING CONSULTATION)
  // ==========================================
  const waCateringBtn = document.getElementById("waCateringBtn");

  if (waCateringBtn) {
    waCateringBtn.addEventListener("click", () => {
      // Teks pesan khusus untuk kebutuhan pemesanan acara besar
      const teksPesanCatering = `Halo Kedai Ibu Dian, saya ingin konsultasi mengenai pesanan besar / katering untuk acara.`;

      const urlFormatTeks = encodeURIComponent(teksPesanCatering);
      // Otomatis menggunakan variabel noWhatsApp yang sudah dideklarasikan di bagian atas script
      const linkWhatsApp = `https://wa.me/${noWhatsApp}?text=${urlFormatTeks}`;

      window.open(linkWhatsApp, "_blank");
    });
  }
  // 5. LOGIKA TOMBOL NAVIGASI GOOGLE MAPS
  // ==========================================
  const getDirectionsBtn = document.getElementById("getDirectionsBtn");

  if (getDirectionsBtn) {
    const mapsUrl = "https://maps.app.goo.gl/uRiQXPXLetHVPCp97";
    // Aksi ketika tombol "Dapatkan Arah" diklik
    getDirectionsBtn.addEventListener("click", () => {
      window.open(mapsUrl, "_blank");
    });
  }
  // 6. LOGIKA TOMBOL WHATSAPP DI FOOTER
  // ==========================================
  const footerWaBtn = document.getElementById("footerWaBtn");

  if (footerWaBtn) {
    footerWaBtn.addEventListener("click", () => {
      // Template pesan umum dari footer
      const teksPesanFooter =
        "Halo Ibu Dian, saya tertarik untuk memesan makanan di Kedai Ibu Dian. Boleh tahu menu yang ready hari ini?";

      const urlFormatTeks = encodeURIComponent(teksPesanFooter);
      // Langsung memakai variabel noWhatsApp yang ada di bagian atas script kamu
      const linkWhatsApp = `https://wa.me/${noWhatsApp}?text=${urlFormatTeks}`;

      window.open(linkWhatsApp, "_blank");
    });
  }
  // 7. LOGIKA FLOATING WHATSAPP BUTTON
  // ==========================================
  const floatingWaBtn = document.getElementById("floatingWaBtn");

  if (floatingWaBtn) {
    floatingWaBtn.addEventListener("click", () => {
      // Template pesan cepat dari tombol mengambang (pertanyaan umum)
      const teksPesanFloating =
        "Halo Kedai Ibu Dian, saya sedang melihat menu di website dan ingin bertanya sesuatu.";

      const urlFormatTeks = encodeURIComponent(teksPesanFloating);
      // Otomatis tersambung ke variabel noWhatsApp yang ada di bagian atas script
      const linkWhatsApp = `https://wa.me/${noWhatsApp}?text=${urlFormatTeks}`;

      window.open(linkWhatsApp, "_blank");
      setTimeout(() => {
        AOS.refresh();
      }, 350);
    });
  }
});
