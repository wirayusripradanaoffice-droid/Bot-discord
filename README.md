# 🎮 YTTA COMMUNITY BOT — v3.0.0

> Bot Discord resmi untuk server **YTTA (Yang Tau Tau Aja)** — dilengkapi welcome card dinamis, giveaway otomatis, reaction roles, moderasi, dan mini games!

---

## ✨ Fitur Lengkap

| Kategori | Fitur |
|---|---|
| 👋 Welcome Card | Kartu sambutan dinamis dengan foto profil member otomatis |
| 📢 Announcement | Pengumuman resmi dengan embed & auto-publish |
| 🎉 Giveaway | Sistem giveaway lengkap — react untuk ikut, pilih pemenang random, DM otomatis |
| 🎭 Reaction Roles | Member ambil role sendiri via emoji |
| 🛡️ Moderasi | Kick, Ban, Timeout, Clear pesan |
| 🎮 Mini Games | Coinflip, RPS, Trivia, Tebak Angka, 8Ball + sistem poin |
| 🏆 Leaderboard | Ranking poin trivia member |
| 📊 Info | ServerInfo, UserInfo, Ping |

---

## 🚀 Cara Setup

### 1. Buat Bot di Discord Developer Portal

1. Buka [discord.com/developers/applications](https://discord.com/developers/applications)
2. Klik **New Application** → beri nama bot
3. Masuk tab **Bot** → klik **Reset Token** → copy token
4. Aktifkan semua **Privileged Gateway Intents:**
   - ✅ Presence Intent
   - ✅ Server Members Intent
   - ✅ Message Content Intent
5. Klik **Save Changes**
6. Copy **Application ID** dari tab General Information

### 2. Upload ke GitHub

Upload 5 file berikut ke repo GitHub baru:

```
✅ index.js
✅ package.json
✅ railway.toml
✅ .gitignore
✅ .env.example
✅ README.md
❌ .env  ← JANGAN diupload!
```

### 3. Deploy ke Railway

1. Buka [railway.app](https://railway.app) → login dengan GitHub
2. **New Project** → **Deploy from GitHub repo**
3. Pilih repo bot kamu
4. Masuk tab **Variables** → tambahkan:

| Variable | Value |
|---|---|
| `BOT_TOKEN` | Token dari Developer Portal |
| `CLIENT_ID` | Application ID dari Developer Portal |

5. Tunggu status **Success** ✅

### 4. Invite Bot ke Server

1. Developer Portal → tab **OAuth2** → **URL Generator**
2. Centang **Scopes:** `bot` + `applications.commands`
3. Centang **Bot Permissions:** `Administrator`
4. Copy link → buka di browser → pilih server → Authorise

---

## ⚙️ Setup Awal di Discord

Jalankan command berikut setelah bot masuk server:

```
/setup-announcement #channel-pengumuman
/setup-welcome #channel-welcome kartu:True background:[url gambar] warna:#A855F7
/setup-goodbye #channel-goodbye
/setup-log #channel-log
```

---

## 📋 Daftar Command

### ⚙️ Admin & Setup
| Command | Fungsi |
|---|---|
| `/setup-announcement` | Set channel pengumuman |
| `/setup-welcome` | Set channel + welcome card dinamis |
| `/setup-goodbye` | Set channel + pesan perpisahan |
| `/setup-log` | Set channel log aktivitas |
| `/setup-roles` | Buat reaction role (max 4 role) |
| `/announce` | Kirim pengumuman resmi |

### 🎉 Giveaway
| Command | Fungsi |
|---|---|
| `/giveaway-start` | Mulai giveaway baru |
| `/giveaway-end` | Akhiri giveaway lebih awal |
| `/giveaway-reroll` | Pilih ulang pemenang |

### 🎭 Role Management
| Command | Fungsi |
|---|---|
| `/giverole` | Beri role ke member |
| `/removerole` | Hapus role dari member |

### 🛡️ Moderasi
| Command | Fungsi |
|---|---|
| `/kick` | Kick member |
| `/ban` | Ban member |
| `/timeout` | Timeout member |
| `/clear` | Hapus pesan (max 100) |

### 🎮 Mini Games
| Command | Fungsi |
|---|---|
| `/coinflip` | Lempar koin |
| `/rps` | Batu Gunting Kertas |
| `/trivia` | Kuis trivia (+5 poin) |
| `/tebakangka` | Tebak angka 1-100 (+10 poin) |
| `/8ball` | Tanya bola ajaib |

### 📊 Info & Statistik
| Command | Fungsi |
|---|---|
| `/serverinfo` | Info server |
| `/userinfo` | Info user |
| `/ping` | Cek latency bot |
| `/poin` | Lihat poin trivia |
| `/leaderboard` | Ranking trivia |
| `/help` | Semua command |

---

## 🖼️ Welcome Card

Welcome card otomatis menampilkan:
- Foto profil member dalam lingkaran
- Teks **WELCOME** besar
- Username member
- Nama server

**Cara set background foto sendiri:**
1. Upload foto di Discord → tekan lama → **Copy Media Link**
2. Jalankan: `/setup-welcome channel:#welcome kartu:True background:[link foto]`

**Placeholder pesan custom:**

| Placeholder | Hasil |
|---|---|
| `{user}` | Mention member |
| `{username}` | Nama member |
| `{server}` | Nama server |
| `{count}` | Jumlah member |
| `\n` | Baris baru |

---

## 🎉 Cara Pakai Giveaway

```
/giveaway-start
  hadiah: Nitro Classic 1 Bulan
  durasi: 60
  emoji: 🎉
  klaim: DM admin dengan screenshot bukti menang
  admin: @NamaAdmin
  pemenang: 1
```

- Member **react** dengan emoji untuk ikut
- Bot pilih pemenang secara **random** saat waktu habis
- Pemenang mendapat **DM otomatis** berisi cara klaim + tag admin
- Kalau DM tertutup, bot kirim notif di channel

---

## 🔧 Troubleshooting

| Masalah | Solusi |
|---|---|
| Bot crash "Used disallowed intents" | Aktifkan 3 Intent di Developer Portal |
| Slash command tidak muncul | Tunggu 1 jam atau invite ulang bot |
| Welcome card tidak muncul | Jalankan `/setup-welcome kartu:True` dulu |
| Giveaway tidak pilih pemenang | Pastikan ada yang react dengan emoji yang benar |
| Bot tidak bisa kick/ban | Pastikan role bot lebih tinggi dari target |
| Deploy crashed di Railway | Cek Variables — pastikan BOT_TOKEN & CLIENT_ID sudah diisi |

---

## 📁 Struktur File

```
ytta-community-bot/
├── index.js          → Kode utama bot
├── package.json      → Dependencies
├── railway.toml      → Konfigurasi Railway
├── .gitignore        → File yang diabaikan Git
├── .env.example      → Contoh variabel environment
└── README.md         → Panduan ini
```

---

## 📦 Dependencies

| Package | Fungsi |
|---|---|
| `discord.js` | Library utama Discord |
| `dotenv` | Baca file .env |
| `express` | Keep-alive server Railway |
| `@napi-rs/canvas` | Generate welcome card dinamis |

---

*YTTA Community Bot v3.0.0 — Made with ❤️ for YTTA Community*
