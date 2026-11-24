# ruangwaktu (RW) - Nostalgia Facebook Era 2011

Website nostalgia jejaring sosial ikonik era **Facebook 2011**, dibuat khusus agar bisa **langsung online secara gratis melalui GitHub Pages**. Lengkap dengan warna biru khas `#3b5998`, tata letak 3 kolom klasik, obrolan (chat) bawah dengan teman online, status PIN BlackBerry (BBM), colek (poke), hingga game nostalgia masa itu (Ninja Saga, FarmVille).

---

## 🌟 Fitur Utama

1. **Sistem Akun & Kebebasan Privasi:**
   - **Username Asal / Samaran:** Pengguna bebas membuat akun dengan username apa saja tanpa memerlukan data pribadi nyata (nama asli, email asli, atau nomor HP tidak diwajibkan).
   - **Ketentuan Akun yang Jelas:** Panduan di halaman masuk mengingatkan pengguna untuk mengingat username & kata sandi mereka.
   - **Tombol Akun Demo:** Sekali klik tombol *Masuk Akun Demo* untuk langsung bernostalgia tanpa perlu mengetik pendaftaran.
   - **Tersimpan di Browser:** Menggunakan `localStorage` sehingga data akun, postingan, dan komentar tetap tersimpan saat halaman dimuat ulang.

2. **Tampilan Autentik Facebook 2011 (Bebas AI-Slop):**
   - Header biru klasik `#3b5998` dengan logo **ruangwaktu** dan ikon kotak **rw**.
   - Tata letak 3 kolom desktop (Navigasi Kiri, Kabar Berita Tengah, Widget Kanan).
   - Tipografi *Lucida Grande* / *Tahoma* dengan garis batas 1px tegas dan tombol beveled khas.
   - Nol gradien ungu generik AI, nol glassmorphism berlebihan, dan nol bentuk kapsul tak bertujuan.

3. **Fitur Status & Budaya Internet 2011:**
   - Kotak pembuat status dengan tab *Perbarui Status* dan *Pasang PIN BB*.
   - Pilihan pengiriman khas: *melalui BlackBerry® Smartphones*, *melalui BlackBerry Bold 9700 Onyx*, *melalui Facebook Zero (0.facebook.com)*, dan *melalui Web*.
   - Banner PIN BBM yang bisa langsung disalin dengan 1 klik.
   - Interaksi status lengkap: **Suka** (dengan penghitung dinamis), **Komentari**, **Bagikan**, dan **Colek Penulis**.

4. **Obrolan (Chat) Dock Pojok Kanan Bawah:**
   - Tab obrolan di pojok kanan bawah dengan titik hijau status online.
   - Pop-up jendela chat mandiri per teman dengan tombol perkecil (minimize) dan tutup.
   - Teman-teman online dapat membalas chat secara otomatis dengan gaya bahasa internet santai era 2011.
   - Efek suara notifikasi retro (ding/pop) yang disintesis langsung via Web Audio API browser (tidak bergantung pada file MP3 eksternal).

5. **Profil / Kronologi Dinding:**
   - Navigasi mulus antara Beranda dan Profil.
   - Info hubungan (*Hubungannya Rumit*, *Lajang*), kutipan favorit, sekolah, dan dinding pribadi.

6. **Nostalgia Game 2011 & Colekan:**
   - Pintasan interaktif untuk *Ninja Saga*, *FarmVille*, dan *Pusat Colekan (Pokes)*.

---

## 🚀 Cara Menjadikan Website Ini Online di GitHub Pages

Website ini dibuat murni menggunakan **HTML5, CSS3, dan Vanilla JavaScript** tanpa ketergantungan server database backend, sehingga **100% kompatibel dan siap tayang di GitHub Pages**.

### Cara 1: Upload via Browser (Paling Mudah, Tanpa Terminal)

1. Buka [GitHub.com](https://github.com) dan masuk ke akun Anda.
2. Klik tombol **New** (Buat Repositori Baru).
3. Beri nama repositori, misalnya: `ruangwaktu`.
4. Pilih opsi **Public**, lalu klik **Create repository**.
5. Di halaman repositori baru, klik tautan **uploading an existing file**.
6. Tarik dan lepas (drag & drop) seluruh file dari folder ini:
   - `index.html`
   - `style.css`
   - `app.js`
   - `README.md`
7. Klik tombol hijau **Commit changes**.
8. Buka menu **Settings** pada repositori Anda (di bagian atas tab repositori).
9. Pada menu samping kiri, klik **Pages**.
10. Pada bagian **Build and deployment** -> **Branch**:
    - Pilih branch: `main` (atau `master`)
    - Folder: `/ (root)`
    - Klik **Save**.
11. Tunggu sekitar 1 menit. GitHub akan memberikan link website online Anda, misalnya:
    ```
    https://<username-github-kamu>.github.io/ruangwaktu/
    ```

---

### Cara 2: Menggunakan Git CLI (Terminal)

Jika Anda memiliki Git di komputer:

```bash
cd "d:\Saya Gamten\ruangwaktu"
git init
git add .
git commit -m "Inisialisasi ruangwaktu - Facebook 2011 nostalgia"
git branch -M main
git remote add origin https://github.com/<username-github-kamu>/ruangwaktu.git
git push -u origin main
```

Setelah push selesai, aktifkan GitHub Pages di tab **Settings** -> **Pages** seperti langkah pada Cara 1.

---

## 💻 Pengujian Lokal di Komputer

Anda juga dapat membuka website ini secara langsung di laptop/PC tanpa koneksi internet:
1. Masuk ke folder `ruangwaktu`.
2. Klik dua kali file `index.html`.
3. Website akan langsung terbuka di browser favorit Anda (Chrome, Edge, Firefox, dll.).
