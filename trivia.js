// ╔══════════════════════════════════════════════════╗
// ║   YTTA COMMUNITY BOT — DATABASE TRIVIA          ║
// ║   500+ Pertanyaan Ilmu Pengetahuan Umum         ║
// ╚══════════════════════════════════════════════════╝

const TRIVIA_DB = [

  // ════════════════════════════════
  //   🇮🇩 INDONESIA — SEJARAH
  // ════════════════════════════════
  { q:"Siapa presiden pertama Indonesia?", a:"Soekarno", opts:["Soekarno","Soeharto","Habibie","Megawati"] },
  { q:"Indonesia merdeka pada tanggal?", a:"17 Agustus 1945", opts:["17 Agustus 1945","17 Agustus 1946","10 November 1945","1 Juni 1945"] },
  { q:"Siapa yang membacakan teks proklamasi kemerdekaan Indonesia?", a:"Soekarno", opts:["Soekarno","Mohammad Hatta","Sutan Syahrir","Ahmad Soebardjo"] },
  { q:"Peristiwa pemberontakan PKI pertama kali terjadi pada tahun?", a:"1948", opts:["1945","1948","1965","1955"] },
  { q:"Konferensi Asia Afrika pertama diadakan di kota?", a:"Bandung", opts:["Jakarta","Bandung","Surabaya","Yogyakarta"] },
  { q:"Siapa tokoh yang dikenal sebagai 'Bapak Koperasi Indonesia'?", a:"Mohammad Hatta", opts:["Mohammad Hatta","Soekarno","Ki Hajar Dewantara","Soeharto"] },
  { q:"Kerajaan Hindu tertua di Indonesia adalah?", a:"Kutai", opts:["Kutai","Majapahit","Sriwijaya","Tarumanegara"] },
  { q:"Kerajaan Majapahit mencapai puncak kejayaannya di bawah pimpinan?", a:"Hayam Wuruk", opts:["Hayam Wuruk","Ken Arok","Raden Wijaya","Jayanegara"] },
  { q:"Patih Majapahit yang terkenal dengan Sumpah Palapa adalah?", a:"Gajah Mada", opts:["Gajah Mada","Tribhuwana","Hayam Wuruk","Adityawarman"] },
  { q:"Pertempuran Surabaya yang heroik terjadi pada tanggal?", a:"10 November 1945", opts:["10 November 1945","17 Agustus 1945","19 September 1945","1 Maret 1949"] },
  { q:"Tokoh yang mendapat julukan 'Pahlawan Revolusi' berjumlah?", a:"7 orang", opts:["5 orang","6 orang","7 orang","8 orang"] },
  { q:"Supersemar ditandatangani pada tahun?", a:"1966", opts:["1965","1966","1967","1968"] },
  { q:"Siapa presiden Indonesia yang ke-3?", a:"BJ Habibie", opts:["Megawati","BJ Habibie","Abdurrahman Wahid","Soeharto"] },
  { q:"Kongres Pemuda II yang menghasilkan Sumpah Pemuda diadakan pada tahun?", a:"1928", opts:["1926","1927","1928","1930"] },
  { q:"Organisasi pergerakan nasional pertama di Indonesia adalah?", a:"Budi Utomo", opts:["Budi Utomo","Sarekat Islam","Indische Partij","PNI"] },
  { q:"Siapa pendiri Budi Utomo?", a:"Dr. Wahidin Sudirohusodo", opts:["Dr. Wahidin Sudirohusodo","Ki Hajar Dewantara","HOS Tjokroaminoto","Douwes Dekker"] },

  // ════════════════════════════════
  //   🇮🇩 INDONESIA — GEOGRAFI
  // ════════════════════════════════
  { q:"Ibu kota Indonesia adalah?", a:"Jakarta", opts:["Jakarta","Surabaya","Bandung","Medan"] },
  { q:"Pulau terbesar di Indonesia adalah?", a:"Kalimantan", opts:["Sumatra","Kalimantan","Papua","Jawa"] },
  { q:"Gunung tertinggi di Indonesia adalah?", a:"Puncak Jaya", opts:["Gunung Semeru","Gunung Rinjani","Puncak Jaya","Gunung Kerinci"] },
  { q:"Danau terluas di Indonesia adalah?", a:"Danau Toba", opts:["Danau Poso","Danau Toba","Danau Sentani","Danau Maninjau"] },
  { q:"Sungai terpanjang di Indonesia adalah?", a:"Sungai Kapuas", opts:["Sungai Mahakam","Sungai Musi","Sungai Kapuas","Sungai Brantas"] },
  { q:"Provinsi paling timur di Indonesia adalah?", a:"Papua Pegunungan", opts:["Papua","Papua Pegunungan","Maluku","Papua Selatan"] },
  { q:"Indonesia memiliki berapa provinsi (2024)?", a:"38", opts:["34","36","37","38"] },
  { q:"Selat yang memisahkan Pulau Jawa dan Sumatra adalah?", a:"Selat Sunda", opts:["Selat Malaka","Selat Lombok","Selat Sunda","Selat Madura"] },
  { q:"Pulau yang dijuluki 'Pulau Dewata' adalah?", a:"Bali", opts:["Lombok","Bali","Flores","Sumbawa"] },
  { q:"Kota terbesar di Indonesia adalah?", a:"Jakarta", opts:["Surabaya","Medan","Jakarta","Bandung"] },
  { q:"Letak astronomis Indonesia secara garis lintang adalah?", a:"6°LU - 11°LS", opts:["6°LU - 11°LS","5°LU - 10°LS","7°LU - 12°LS","4°LU - 9°LS"] },
  { q:"Gunung berapi paling aktif di Indonesia adalah?", a:"Gunung Merapi", opts:["Gunung Bromo","Gunung Merapi","Gunung Krakatau","Gunung Semeru"] },
  { q:"Ibu kota Kalimantan Timur adalah?", a:"Samarinda", opts:["Balikpapan","Samarinda","Banjarmasin","Palangkaraya"] },
  { q:"Taman Nasional Komodo berada di provinsi?", a:"Nusa Tenggara Timur", opts:["Nusa Tenggara Barat","Nusa Tenggara Timur","Bali","Jawa Timur"] },
  { q:"Kota yang dijuluki 'Kota Pahlawan' adalah?", a:"Surabaya", opts:["Jakarta","Bandung","Surabaya","Yogyakarta"] },
  { q:"Kepulauan Raja Ampat berada di provinsi?", a:"Papua Barat Daya", opts:["Papua","Papua Barat","Papua Barat Daya","Maluku"] },
  { q:"Selat Malaka menghubungkan Samudra Hindia dengan laut?", a:"Laut China Selatan", opts:["Laut Jawa","Laut China Selatan","Laut Banda","Laut Sulawesi"] },

  // ════════════════════════════════
  //   🇮🇩 INDONESIA — BUDAYA & UMUM
  // ════════════════════════════════
  { q:"Batik diakui UNESCO sebagai warisan budaya dari negara?", a:"Indonesia", opts:["Malaysia","Indonesia","India","Thailand"] },
  { q:"Tarian tradisional dari Jawa Barat yang terkenal adalah?", a:"Tari Jaipong", opts:["Tari Kecak","Tari Jaipong","Tari Saman","Tari Tor-Tor"] },
  { q:"Tari Saman berasal dari provinsi?", a:"Aceh", opts:["Sumatera Barat","Aceh","Sumatera Utara","Riau"] },
  { q:"Wayang kulit merupakan kesenian khas dari?", a:"Jawa", opts:["Bali","Lombok","Jawa","Kalimantan"] },
  { q:"Lagu kebangsaan Indonesia adalah?", a:"Indonesia Raya", opts:["Garuda Pancasila","Indonesia Raya","Tanah Airku","Bagimu Negeri"] },
  { q:"Hari Pendidikan Nasional diperingati setiap tanggal?", a:"2 Mei", opts:["2 Mei","28 Oktober","20 Mei","21 April"] },
  { q:"Tokoh pendidikan Indonesia yang dikenal sebagai 'Bapak Pendidikan'?", a:"Ki Hajar Dewantara", opts:["Ki Hajar Dewantara","RA Kartini","Mohammad Yamin","Tan Malaka"] },
  { q:"Huruf abjad dalam aksara Jawa disebut?", a:"Hanacaraka", opts:["Hanacaraka","Pallawa","Brahmi","Kawi"] },
  { q:"Senjata tradisional khas Sulawesi Selatan adalah?", a:"Badik", opts:["Keris","Rencong","Badik","Mandau"] },
  { q:"Alat musik gamelan berasal dari budaya?", a:"Jawa dan Bali", opts:["Minangkabau","Jawa dan Bali","Bugis","Dayak"] },
  { q:"Rumah adat Minangkabau berbentuk seperti?", a:"Tanduk kerbau", opts:["Kerucut","Tanduk kerbau","Perahu","Gunungan"] },
  { q:"Upacara adat 'Ngaben' merupakan tradisi dari?", a:"Bali", opts:["Jawa","Lombok","Bali","Nusa Tenggara"] },
  { q:"Makanan khas Padang yang terkenal di dunia adalah?", a:"Rendang", opts:["Rendang","Pempek","Nasi Goreng","Soto"] },
  { q:"Mata uang Indonesia adalah?", a:"Rupiah", opts:["Ringgit","Rupiah","Peso","Baht"] },

  // ════════════════════════════════
  //   🌍 GEOGRAFI DUNIA
  // ════════════════════════════════
  { q:"Benua terluas di dunia adalah?", a:"Asia", opts:["Afrika","Asia","Amerika","Eropa"] },
  { q:"Negara terluas di dunia adalah?", a:"Rusia", opts:["Amerika Serikat","Kanada","China","Rusia"] },
  { q:"Sungai terpanjang di dunia adalah?", a:"Sungai Nil", opts:["Amazon","Sungai Nil","Mississippi","Yangtze"] },
  { q:"Gunung tertinggi di dunia adalah?", a:"Everest", opts:["K2","Kangchenjunga","Everest","Lhotse"] },
  { q:"Samudra terluas di dunia adalah?", a:"Samudra Pasifik", opts:["Samudra Hindia","Samudra Atlantik","Samudra Pasifik","Samudra Arktik"] },
  { q:"Danau terluas di dunia adalah?", a:"Laut Kaspia", opts:["Danau Superior","Laut Kaspia","Danau Victoria","Danau Baikal"] },
  { q:"Negara dengan populasi terbanyak di dunia (2024) adalah?", a:"India", opts:["China","India","Amerika Serikat","Indonesia"] },
  { q:"Ibu kota Australia adalah?", a:"Canberra", opts:["Sydney","Melbourne","Brisbane","Canberra"] },
  { q:"Ibu kota Brasil adalah?", a:"Brasilia", opts:["Rio de Janeiro","São Paulo","Brasilia","Salvador"] },
  { q:"Ibu kota Kanada adalah?", a:"Ottawa", opts:["Toronto","Vancouver","Montreal","Ottawa"] },
  { q:"Negara yang memiliki menara Eiffel adalah?", a:"Prancis", opts:["Italia","Inggris","Prancis","Spanyol"] },
  { q:"Tembok Besar China dibangun untuk menghadang invasi dari?", a:"Mongolia", opts:["Rusia","Mongolia","Jepang","Korea"] },
  { q:"Gurun terluas di dunia adalah?", a:"Gurun Antartika", opts:["Gurun Sahara","Gobi","Gurun Antartika","Arabian"] },
  { q:"Negara kepulauan terbesar di dunia adalah?", a:"Indonesia", opts:["Filipina","Jepang","Indonesia","Maladewa"] },
  { q:"Kota terbesar di dunia berdasarkan populasi adalah?", a:"Tokyo", opts:["New York","Shanghai","Mumbai","Tokyo"] },
  { q:"Benua yang tidak memiliki negara adalah?", a:"Antartika", opts:["Arktik","Antartika","Oseania","Pasifik"] },
  { q:"Ibu kota Jepang adalah?", a:"Tokyo", opts:["Osaka","Kyoto","Tokyo","Hiroshima"] },
  { q:"Negara dengan garis pantai terpanjang di dunia adalah?", a:"Kanada", opts:["Australia","Rusia","Indonesia","Kanada"] },
  { q:"Selat Dover memisahkan Inggris dengan negara?", a:"Prancis", opts:["Belgia","Belanda","Prancis","Jerman"] },
  { q:"Kota yang dijuluki 'Kota Seribu Menara' adalah?", a:"Kairo", opts:["Istanbul","Marrakech","Kairo","Baghdad"] },
  { q:"Pegunungan Himalaya terletak di benua?", a:"Asia", opts:["Eropa","Asia","Afrika","Amerika"] },
  { q:"Ibu kota Amerika Serikat adalah?", a:"Washington D.C.", opts:["New York","Los Angeles","Chicago","Washington D.C."] },
  { q:"Negara yang berbatasan dengan paling banyak negara lain adalah?", a:"China", opts:["Rusia","Brazil","China","Jerman"] },

  // ════════════════════════════════
  //   📚 SEJARAH DUNIA
  // ════════════════════════════════
  { q:"Perang Dunia I berakhir pada tahun?", a:"1918", opts:["1916","1917","1918","1919"] },
  { q:"Perang Dunia II berakhir pada tahun?", a:"1945", opts:["1943","1944","1945","1946"] },
  { q:"Siapa yang menemukan benua Amerika?", a:"Christopher Columbus", opts:["Amerigo Vespucci","Vasco da Gama","Christopher Columbus","Ferdinand Magellan"] },
  { q:"Revolusi Perancis terjadi pada tahun?", a:"1789", opts:["1776","1789","1799","1815"] },
  { q:"Siapa pemimpin Jerman saat Perang Dunia II?", a:"Adolf Hitler", opts:["Benito Mussolini","Adolf Hitler","Joseph Stalin","Winston Churchill"] },
  { q:"Bom atom pertama dijatuhkan di kota?", a:"Hiroshima", opts:["Tokyo","Nagasaki","Hiroshima","Osaka"] },
  { q:"Peristiwa jatuhnya tembok Berlin terjadi pada tahun?", a:"1989", opts:["1985","1987","1989","1991"] },
  { q:"Siapa yang pertama kali mengelilingi bumi?", a:"Ferdinand Magellan", opts:["Columbus","Vasco da Gama","Ferdinand Magellan","James Cook"] },
  { q:"Peradaban kuno Mesir dikenal dengan bangunan?", a:"Piramida", opts:["Colosseum","Piramida","Parthenon","Stonehenge"] },
  { q:"Kekaisaran terluas dalam sejarah dunia adalah?", a:"Kekaisaran Mongol", opts:["Kekaisaran Romawi","Kekaisaran Inggris","Kekaisaran Mongol","Kekaisaran Utsmaniyah"] },
  { q:"Revolusi Industri pertama dimulai di negara?", a:"Inggris", opts:["Prancis","Jerman","Amerika Serikat","Inggris"] },
  { q:"Siapa presiden Amerika Serikat saat serangan Pearl Harbor?", a:"Franklin Roosevelt", opts:["Harry Truman","Franklin Roosevelt","Dwight Eisenhower","Woodrow Wilson"] },
  { q:"PBB (Perserikatan Bangsa-Bangsa) didirikan pada tahun?", a:"1945", opts:["1943","1944","1945","1946"] },
  { q:"Siapa tokoh yang memimpin perlawanan pasif di India melawan Inggris?", a:"Mahatma Gandhi", opts:["Jawaharlal Nehru","Mahatma Gandhi","Subhas Chandra Bose","B.R. Ambedkar"] },
  { q:"Perang Dingin terjadi antara Amerika Serikat dan?", a:"Uni Soviet", opts:["China","Uni Soviet","Jerman","Korea"] },
  { q:"Apartheid adalah sistem diskriminasi ras yang terjadi di?", a:"Afrika Selatan", opts:["Zimbabwe","Kenya","Nigeria","Afrika Selatan"] },
  { q:"Siapa tokoh yang mengakhiri apartheid di Afrika Selatan?", a:"Nelson Mandela", opts:["Desmond Tutu","Nelson Mandela","F.W. de Klerk","Chris Hani"] },
  { q:"Perang Vietnam berakhir pada tahun?", a:"1975", opts:["1973","1974","1975","1976"] },

  // ════════════════════════════════
  //   🔬 ILMU PENGETAHUAN — BIOLOGI
  // ════════════════════════════════
  { q:"Organ terbesar dalam tubuh manusia adalah?", a:"Kulit", opts:["Hati","Paru-paru","Kulit","Jantung"] },
  { q:"Berapa jumlah tulang dalam tubuh manusia dewasa?", a:"206", opts:["196","206","216","226"] },
  { q:"Proses fotosintesis terjadi di organel?", a:"Kloroplas", opts:["Mitokondria","Nukleus","Kloroplas","Ribosom"] },
  { q:"DNA singkatan dari?", a:"Deoxyribonucleic Acid", opts:["Deoxyribonucleic Acid","Dinitrogen Acid","Deoxyribose Nucleotide Acid","Dynamic Nucleic Acid"] },
  { q:"Berapa jumlah kromosom manusia normal?", a:"46", opts:["42","44","46","48"] },
  { q:"Hewan yang memiliki jantung dengan 4 ruang adalah?", a:"Mamalia", opts:["Ikan","Amfibi","Reptil","Mamalia"] },
  { q:"Proses pencernaan makanan dimulai di?", a:"Mulut", opts:["Lambung","Usus halus","Mulut","Kerongkongan"] },
  { q:"Hormon yang mengatur kadar gula darah diproduksi oleh?", a:"Pankreas", opts:["Hati","Limpa","Pankreas","Kelenjar adrenal"] },
  { q:"Sel yang membawa oksigen dalam darah adalah?", a:"Sel darah merah", opts:["Sel darah putih","Trombosit","Sel darah merah","Plasma"] },
  { q:"Proses penyerapan nutrisi terjadi di?", a:"Usus halus", opts:["Lambung","Usus besar","Usus halus","Hati"] },
  { q:"Vitamin C banyak terdapat pada buah?", a:"Jeruk", opts:["Pisang","Apel","Jeruk","Mangga"] },
  { q:"Tulang yang melindungi otak adalah?", a:"Tengkorak", opts:["Tulang rusuk","Tengkorak","Tulang belakang","Tulang dada"] },
  { q:"Respirasi aerob menghasilkan energi dalam bentuk?", a:"ATP", opts:["ADP","ATP","GTP","NAD"] },
  { q:"Hewan yang berdarah dingin disebut?", a:"Ektotermik", opts:["Endotermik","Ektotermik","Homeotermik","Poikotermik"] },
  { q:"Bagian sel yang berfungsi sebagai 'otak sel' adalah?", a:"Nukleus", opts:["Mitokondria","Ribosom","Nukleus","Membran sel"] },
  { q:"Proses pembelahan sel secara mitosis menghasilkan berapa sel anak?", a:"2 sel", opts:["1 sel","2 sel","4 sel","8 sel"] },
  { q:"Enzim yang membantu pencernaan protein adalah?", a:"Protease", opts:["Amilase","Lipase","Protease","Selulase"] },
  { q:"Rantai makanan dimulai dari?", a:"Produsen (tumbuhan)", opts:["Konsumen","Dekomposer","Produsen (tumbuhan)","Predator"] },
  { q:"Hewan yang mengalami metamorfosis sempurna adalah?", a:"Kupu-kupu", opts:["Belalang","Kecoak","Kupu-kupu","Capung dewasa"] },
  { q:"Bagian tanaman yang berfungsi menyerap air dari tanah adalah?", a:"Akar", opts:["Batang","Daun","Bunga","Akar"] },

  // ════════════════════════════════
  //   ⚗️ KIMIA
  // ════════════════════════════════
  { q:"Simbol kimia untuk emas adalah?", a:"Au", opts:["Ag","Au","Fe","Cu"] },
  { q:"Simbol kimia untuk perak adalah?", a:"Ag", opts:["Ag","Au","Al","Ar"] },
  { q:"Air memiliki rumus kimia?", a:"H₂O", opts:["H₂O","HO₂","H₃O","OH₂"] },
  { q:"Tabel periodik unsur disusun oleh?", a:"Dmitri Mendeleev", opts:["Antoine Lavoisier","Dmitri Mendeleev","John Dalton","Henry Moseley"] },
  { q:"Unsur dengan nomor atom 1 adalah?", a:"Hidrogen", opts:["Helium","Litium","Hidrogen","Boron"] },
  { q:"Gas yang paling banyak di atmosfer bumi adalah?", a:"Nitrogen", opts:["Oksigen","Nitrogen","Karbon Dioksida","Argon"] },
  { q:"pH larutan yang bersifat netral adalah?", a:"7", opts:["0","7","14","10"] },
  { q:"Larutan dengan pH di bawah 7 bersifat?", a:"Asam", opts:["Basa","Netral","Asam","Garam"] },
  { q:"Proses perubahan air menjadi uap disebut?", a:"Evaporasi", opts:["Kondensasi","Presipitasi","Evaporasi","Sublimasi"] },
  { q:"Baja merupakan paduan antara besi dan?", a:"Karbon", opts:["Tembaga","Nikel","Karbon","Mangan"] },
  { q:"Gas yang menyebabkan efek rumah kaca adalah?", a:"CO₂", opts:["O₂","N₂","CO₂","H₂"] },
  { q:"Reaksi kimia yang melepaskan panas disebut?", a:"Eksotermik", opts:["Endotermik","Eksotermik","Katalitik","Oksidasi"] },
  { q:"Simbol kimia untuk natrium adalah?", a:"Na", opts:["N","Na","Ni","Ne"] },
  { q:"Unsur yang paling banyak di kerak bumi adalah?", a:"Oksigen", opts:["Silikon","Aluminium","Oksigen","Besi"] },
  { q:"Proses pemisahan campuran berdasarkan titik didih disebut?", a:"Distilasi", opts:["Filtrasi","Kristalisasi","Distilasi","Kromatografi"] },

  // ════════════════════════════════
  //   ⚡ FISIKA
  // ════════════════════════════════
  { q:"Kecepatan cahaya di ruang hampa adalah?", a:"300.000 km/s", opts:["150.000 km/s","300.000 km/s","500.000 km/s","1.000.000 km/s"] },
  { q:"Satuan kuat arus listrik adalah?", a:"Ampere", opts:["Volt","Watt","Ampere","Ohm"] },
  { q:"Hukum gravitasi universal dikemukakan oleh?", a:"Isaac Newton", opts:["Albert Einstein","Isaac Newton","Galileo Galilei","Nikola Tesla"] },
  { q:"Energi yang tersimpan dalam benda diam disebut?", a:"Energi potensial", opts:["Energi kinetik","Energi potensial","Energi mekanik","Energi termal"] },
  { q:"Frekuensi diukur dalam satuan?", a:"Hertz", opts:["Joule","Watt","Hertz","Newton"] },
  { q:"Bunyi tidak dapat merambat melalui?", a:"Ruang hampa", opts:["Air","Udara","Benda padat","Ruang hampa"] },
  { q:"Alat untuk mengukur tekanan udara adalah?", a:"Barometer", opts:["Termometer","Barometer","Manometer","Higrometer"] },
  { q:"Teori relativitas dikemukakan oleh?", a:"Albert Einstein", opts:["Isaac Newton","Niels Bohr","Albert Einstein","Max Planck"] },
  { q:"Satuan tekanan dalam SI adalah?", a:"Pascal", opts:["Joule","Newton","Pascal","Bar"] },
  { q:"Hukum Ohm menyatakan hubungan antara tegangan, arus, dan?", a:"Hambatan", opts:["Daya","Frekuensi","Hambatan","Kapasitansi"] },
  { q:"Pelangi terbentuk karena proses?", a:"Dispersi cahaya", opts:["Refleksi","Refraksi","Dispersi cahaya","Difraksi"] },
  { q:"Satuan energi dalam SI adalah?", a:"Joule", opts:["Watt","Joule","Newton","Kalori"] },
  { q:"Suhu mutlak nol (0 Kelvin) setara dengan berapa Celsius?", a:"-273°C", opts:["-100°C","-200°C","-273°C","-373°C"] },
  { q:"Magnet selalu memiliki berapa kutub?", a:"2 kutub", opts:["1 kutub","2 kutub","3 kutub","4 kutub"] },
  { q:"Gelombang yang tidak memerlukan medium adalah?", a:"Gelombang elektromagnetik", opts:["Gelombang bunyi","Gelombang air","Gelombang mekanik","Gelombang elektromagnetik"] },

  // ════════════════════════════════
  //   🌌 ASTRONOMI & ANTARIKSA
  // ════════════════════════════════
  { q:"Planet terdekat dengan matahari adalah?", a:"Merkurius", opts:["Venus","Mars","Bumi","Merkurius"] },
  { q:"Planet terbesar di tata surya adalah?", a:"Jupiter", opts:["Saturn","Uranus","Jupiter","Neptunus"] },
  { q:"Berapa lama bumi mengelilingi matahari?", a:"365,25 hari", opts:["360 hari","364 hari","365,25 hari","366 hari"] },
  { q:"Bulan adalah satelit alami dari planet?", a:"Bumi", opts:["Mars","Venus","Bumi","Saturnus"] },
  { q:"Manusia pertama yang menginjakkan kaki di bulan adalah?", a:"Neil Armstrong", opts:["Buzz Aldrin","Neil Armstrong","Yuri Gagarin","Alan Shepard"] },
  { q:"Matahari termasuk dalam kategori benda langit?", a:"Bintang", opts:["Planet","Asteroid","Bintang","Satelit"] },
  { q:"Galaksi tempat tata surya kita berada disebut?", a:"Bima Sakti", opts:["Andromeda","Bima Sakti","Triangulum","Sombrero"] },
  { q:"Planet yang memiliki cincin paling terkenal adalah?", a:"Saturnus", opts:["Jupiter","Uranus","Neptunus","Saturnus"] },
  { q:"Jarak rata-rata bumi ke matahari sekitar?", a:"150 juta km", opts:["100 juta km","150 juta km","200 juta km","300 juta km"] },
  { q:"Fenomena gerhana matahari terjadi ketika?", a:"Bulan berada di antara matahari dan bumi", opts:["Bumi berada di antara matahari dan bulan","Bulan berada di antara matahari dan bumi","Matahari berada di antara bumi dan bulan","Bumi berada di antara bulan dan matahari"] },
  { q:"Planet yang berputar terbalik (retrograde) adalah?", a:"Venus", opts:["Mars","Venus","Merkurius","Neptunus"] },
  { q:"Astronot Rusia pertama yang pergi ke luar angkasa adalah?", a:"Yuri Gagarin", opts:["Valentina Tereshkova","Yuri Gagarin","Alexei Leonov","Sergei Korolev"] },
  { q:"Benda langit yang ekornya selalu menjauhi matahari adalah?", a:"Komet", opts:["Asteroid","Meteor","Komet","Satelit"] },
  { q:"Lapisan atmosfer yang paling dekat dengan bumi adalah?", a:"Troposfer", opts:["Stratosfer","Mesosfer","Troposfer","Termosfer"] },

  // ════════════════════════════════
  //   🧮 MATEMATIKA
  // ════════════════════════════════
  { q:"Hasil dari 12 × 12 adalah?", a:"144", opts:["124","134","144","154"] },
  { q:"Berapa nilai π (pi) yang paling umum digunakan?", a:"3,14", opts:["3,12","3,14","3,16","3,18"] },
  { q:"Akar kuadrat dari 144 adalah?", a:"12", opts:["11","12","13","14"] },
  { q:"Berapa hasil 15% dari 200?", a:"30", opts:["20","25","30","35"] },
  { q:"Segitiga dengan ketiga sisi sama panjang disebut?", a:"Segitiga sama sisi", opts:["Segitiga sama kaki","Segitiga siku-siku","Segitiga sama sisi","Segitiga sembarang"] },
  { q:"Jumlah sudut dalam segitiga adalah?", a:"180 derajat", opts:["90 derajat","180 derajat","270 derajat","360 derajat"] },
  { q:"Bilangan prima antara 10 dan 20 adalah?", a:"11, 13, 17, 19", opts:["11, 13, 15, 19","11, 13, 17, 19","11, 15, 17, 19","13, 15, 17, 19"] },
  { q:"Rumus luas lingkaran adalah?", a:"πr²", opts:["2πr","πr²","πd","2πr²"] },
  { q:"Bilangan Fibonacci dimulai dengan?", a:"0, 1, 1, 2, 3", opts:["1, 1, 2, 3, 5","0, 1, 1, 2, 3","0, 1, 2, 3, 5","1, 2, 3, 5, 8"] },
  { q:"Berapa hasil 2⁸?", a:"256", opts:["128","256","512","64"] },
  { q:"Logaritma natural menggunakan basis?", a:"e (2,718...)", opts:["2","10","e (2,718...)","π"] },
  { q:"Berapa jumlah sisi pada segi delapan (octagon)?", a:"8", opts:["6","7","8","9"] },
  { q:"Persamaan kuadrat ax²+bx+c=0, nilai x ditemukan dengan rumus?", a:"Rumus abc", opts:["Rumus abc","Teorema Pythagoras","Aturan sinus","Determinan"] },
  { q:"Berapakah nilai dari 0 faktorial (0!)?", a:"1", opts:["0","1","Tidak terdefinisi","∞"] },
  { q:"Dalam geometri, garis yang menyentuh lingkaran di satu titik disebut?", a:"Garis singgung", opts:["Diameter","Garis singgung","Tali busur","Jari-jari"] },

  // ════════════════════════════════
  //   💻 TEKNOLOGI & IT
  // ════════════════════════════════
  { q:"WWW (World Wide Web) ditemukan oleh?", a:"Tim Berners-Lee", opts:["Bill Gates","Tim Berners-Lee","Steve Jobs","Linus Torvalds"] },
  { q:"CPU adalah singkatan dari?", a:"Central Processing Unit", opts:["Central Power Unit","Central Processing Unit","Computer Processing Unit","Central Program Unit"] },
  { q:"Sistem operasi Linux dibuat oleh?", a:"Linus Torvalds", opts:["Bill Gates","Steve Jobs","Linus Torvalds","Dennis Ritchie"] },
  { q:"HTML adalah singkatan dari?", a:"HyperText Markup Language", opts:["HyperText Markup Language","HighText Machine Language","HyperText Machine Language","HyperTool Markup Language"] },
  { q:"Python adalah bahasa pemrograman yang dibuat oleh?", a:"Guido van Rossum", opts:["Dennis Ritchie","James Gosling","Guido van Rossum","Brendan Eich"] },
  { q:"RAM singkatan dari?", a:"Random Access Memory", opts:["Read Access Memory","Random Access Memory","Rapid Access Memory","Read And Memory"] },
  { q:"Google didirikan pada tahun?", a:"1998", opts:["1994","1996","1998","2000"] },
  { q:"Bahasa pemrograman Java dibuat oleh?", a:"James Gosling", opts:["Dennis Ritchie","James Gosling","Bjarne Stroustrup","Ken Thompson"] },
  { q:"Kepanjangan dari AI adalah?", a:"Artificial Intelligence", opts:["Automated Intelligence","Artificial Intelligence","Advanced Interface","Autonomous Integration"] },
  { q:"Siapa pendiri Microsoft?", a:"Bill Gates & Paul Allen", opts:["Bill Gates & Steve Jobs","Bill Gates & Paul Allen","Steve Jobs & Steve Wozniak","Mark Zuckerberg & Eduardo Saverin"] },
  { q:"Protokol yang digunakan untuk mengirim email adalah?", a:"SMTP", opts:["HTTP","FTP","SMTP","SSH"] },
  { q:"JavaScript dibuat oleh?", a:"Brendan Eich", opts:["Guido van Rossum","Brendan Eich","James Gosling","Rasmus Lerdorf"] },
  { q:"Kepanjangan dari USB adalah?", a:"Universal Serial Bus", opts:["Universal System Bus","Unified Serial Bus","Universal Serial Bus","Ultra Speed Bus"] },
  { q:"Perusahaan yang membuat iPhone adalah?", a:"Apple", opts:["Samsung","Apple","Google","Microsoft"] },
  { q:"Blockchain pertama kali digunakan untuk?", a:"Bitcoin", opts:["Ethereum","Bitcoin","Ripple","Litecoin"] },

  // ════════════════════════════════
  //   ⚽ OLAHRAGA
  // ════════════════════════════════
  { q:"Negara yang paling banyak memenangkan Piala Dunia FIFA adalah?", a:"Brasil", opts:["Argentina","Jerman","Brasil","Italia"] },
  { q:"Olimpiade modern pertama diadakan di kota?", a:"Athena", opts:["Paris","London","Athena","Berlin"] },
  { q:"Olahraga yang menggunakan raket dan kok adalah?", a:"Badminton", opts:["Tenis","Squash","Badminton","Tenis Meja"] },
  { q:"Pemegang rekor gol terbanyak sepanjang sejarah Piala Dunia adalah?", a:"Miroslav Klose", opts:["Ronaldo (Brazil)","Miroslav Klose","Gerd Müller","Just Fontaine"] },
  { q:"Dalam bola basket, berapa angka untuk lemparan dari luar garis tiga angka?", a:"3 poin", opts:["1 poin","2 poin","3 poin","4 poin"] },
  { q:"Atlet bulu tangkis Indonesia yang terkenal di era 80-90an adalah?", a:"Susi Susanti & Alan Budikusuma", opts:["Kevin Sanjaya","Susi Susanti & Alan Budikusuma","Marcus Fernaldi","Taufik Hidayat"] },
  { q:"Renang gaya bebas juga disebut?", a:"Gaya crawl", opts:["Gaya dada","Gaya kupu-kupu","Gaya crawl","Gaya punggung"] },
  { q:"Dalam tenis, set pertama dimenangkan saat mencapai berapa game?", a:"6 game", opts:["4 game","5 game","6 game","7 game"] },
  { q:"Sepatu roda dengan 4 roda sejajar disebut?", a:"Inline skate", opts:["Quad skate","Inline skate","Speed skate","Hockey skate"] },
  { q:"Olahraga lari jarak 42,195 km disebut?", a:"Marathon", opts:["Sprint","Half marathon","Marathon","Ultra marathon"] },
  { q:"Pemain legenda sepak bola Argentina yang memenangkan Piala Dunia 2022 adalah?", a:"Lionel Messi", opts:["Diego Maradona","Lionel Messi","Gabriel Batistuta","Hernan Crespo"] },
  { q:"Cabang olahraga yang menggunakan pedang dalam kompetisi disebut?", a:"Anggar", opts:["Kendo","Taekwondo","Anggar","Judo"] },
  { q:"Olahraga Formula 1 pertama kali diadakan pada tahun?", a:"1950", opts:["1945","1950","1955","1960"] },
  { q:"Dalam voli, berapa set yang dibutuhkan untuk memenangkan pertandingan?", a:"3 set", opts:["2 set","3 set","4 set","5 set"] },

  // ════════════════════════════════
  //   🎵 MUSIK & SENI
  // ════════════════════════════════
  { q:"Alat musik piano memiliki berapa tuts (standar)?", a:"88 tuts", opts:["72 tuts","80 tuts","88 tuts","96 tuts"] },
  { q:"Musik 'Beethoven' Symphony No. 5 dimulai dengan motif berapa nada?", a:"4 nada", opts:["3 nada","4 nada","5 nada","6 nada"] },
  { q:"Genre musik yang berasal dari Jamaica adalah?", a:"Reggae", opts:["Blues","Jazz","Reggae","Ska"] },
  { q:"Album terlaris sepanjang masa adalah?", a:"Thriller - Michael Jackson", opts:["Back in Black - AC/DC","The Dark Side of the Moon","Thriller - Michael Jackson","Rumours - Fleetwood Mac"] },
  { q:"Lagu kebangsaan Indonesia diciptakan oleh?", a:"W.R. Soepratman", opts:["C. Simanjuntak","W.R. Soepratman","Ismail Marzuki","Koes Plus"] },
  { q:"Alat musik yang dimainkan dengan ditiup dan memiliki tuts adalah?", a:"Harmonika", opts:["Biola","Gitar","Harmonika","Harpa"] },
  { q:"Genre musik 'K-Pop' berasal dari negara?", a:"Korea Selatan", opts:["Jepang","China","Korea Selatan","Korea Utara"] },
  { q:"Penyanyi yang dijuluki 'King of Pop' adalah?", a:"Michael Jackson", opts:["Elvis Presley","Michael Jackson","Prince","Whitney Houston"] },
  { q:"Orkestra dipimpin oleh seorang?", a:"Konduktor", opts:["Pianis","Konduktor","Dirigen","Solois"] },
  { q:"Not balok ditulis pada sebuah?", a:"Paranada", opts:["Akor","Paranada","Melodi","Harmoni"] },
  { q:"Alat musik tradisional Jawa Barat yang terkenal adalah?", a:"Angklung", opts:["Gamelan","Angklung","Kolintang","Sasando"] },
  { q:"Sasando adalah alat musik khas dari daerah?", a:"Nusa Tenggara Timur", opts:["Nusa Tenggara Barat","Nusa Tenggara Timur","Maluku","Sulawesi"] },

  // ════════════════════════════════
  //   📖 BAHASA & SASTRA
  // ════════════════════════════════
  { q:"Bahasa yang paling banyak digunakan di dunia adalah?", a:"Bahasa Inggris", opts:["Bahasa Mandarin","Bahasa Spanyol","Bahasa Inggris","Bahasa Arab"] },
  { q:"Bahasa dengan penutur terbanyak sebagai bahasa pertama adalah?", a:"Bahasa Mandarin", opts:["Bahasa Inggris","Bahasa Spanyol","Bahasa Hindi","Bahasa Mandarin"] },
  { q:"Novel 'Harry Potter' ditulis oleh?", a:"J.K. Rowling", opts:["J.R.R. Tolkien","J.K. Rowling","C.S. Lewis","Roald Dahl"] },
  { q:"Novel 'The Lord of the Rings' ditulis oleh?", a:"J.R.R. Tolkien", opts:["J.K. Rowling","J.R.R. Tolkien","C.S. Lewis","George R.R. Martin"] },
  { q:"Penulis Indonesia yang menulis tetralogi 'Bumi Manusia' adalah?", a:"Pramoedya Ananta Toer", opts:["Andrea Hirata","Habiburrahman El Shirazy","Pramoedya Ananta Toer","Dee Lestari"] },
  { q:"Novel 'Laskar Pelangi' ditulis oleh?", a:"Andrea Hirata", opts:["Tere Liye","Andrea Hirata","Habiburrahman El Shirazy","Dewi Lestari"] },
  { q:"Karya sastra 'Romeo and Juliet' ditulis oleh?", a:"William Shakespeare", opts:["Charles Dickens","William Shakespeare","Jane Austen","Oscar Wilde"] },
  { q:"Pantun adalah karya sastra berbentuk puisi dari tradisi?", a:"Melayu", opts:["Jawa","Sunda","Melayu","Bugis"] },
  { q:"Huruf pertama alfabet Yunani adalah?", a:"Alpha", opts:["Alpha","Beta","Gamma","Delta"] },
  { q:"Bahasa resmi PBB ada berapa?", a:"6 bahasa", opts:["4 bahasa","5 bahasa","6 bahasa","7 bahasa"] },

  // ════════════════════════════════
  //   🌿 LINGKUNGAN & ALAM
  // ════════════════════════════════
  { q:"Gas rumah kaca utama yang menyebabkan pemanasan global adalah?", a:"Karbon dioksida", opts:["Oksigen","Nitrogen","Karbon dioksida","Metana"] },
  { q:"Lapisan ozon berada di lapisan atmosfer?", a:"Stratosfer", opts:["Troposfer","Stratosfer","Mesosfer","Termosfer"] },
  { q:"Hutan hujan tropis terbesar di dunia berada di?", a:"Amazon, Brasil", opts:["Kongo, Afrika","Borneo, Indonesia","Amazon, Brasil","Papua, Indonesia"] },
  { q:"Pemanasan global menyebabkan es di kutub?", a:"Mencair", opts:["Membeku lebih tebal","Mencair","Tidak berubah","Mengeras"] },
  { q:"Proses daur ulang air di alam disebut?", a:"Siklus hidrologi", opts:["Siklus karbon","Siklus nitrogen","Siklus hidrologi","Siklus oksigen"] },
  { q:"Hewan yang terancam punah akibat perburuan gadingnya adalah?", a:"Gajah", opts:["Harimau","Badak","Gajah","Orangutan"] },
  { q:"Energi yang bersumber dari panas bumi disebut?", a:"Geothermal", opts:["Solar","Geothermal","Biomassa","Angin"] },
  { q:"Terumbu karang paling besar di dunia adalah?", a:"Great Barrier Reef", opts:["Great Barrier Reef","Coral Triangle","Mesoamerican Reef","Ningaloo Reef"] },
  { q:"Pohon yang menghasilkan oksigen terbanyak adalah?", a:"Pohon beech", opts:["Pohon pinus","Pohon beech","Pohon kelapa","Pohon mangga"] },
  { q:"Penyebab utama kebakaran hutan di Indonesia adalah?", a:"Pembukaan lahan", opts:["Petir","Gesekan batu","Pembukaan lahan","Cuaca panas"] },

  // ════════════════════════════════
  //   🍽️ MAKANAN & KULINER
  // ════════════════════════════════
  { q:"Makanan khas Jepang yang terbuat dari nasi dan ikan mentah adalah?", a:"Sushi", opts:["Sashimi","Ramen","Sushi","Tempura"] },
  { q:"Pizza berasal dari negara?", a:"Italia", opts:["Amerika","Spanyol","Italia","Yunani"] },
  { q:"Cokelat pertama kali berasal dari buah?", a:"Kakao", opts:["Kopi","Kakao","Vanila","Kayu manis"] },
  { q:"Minuman kopi espresso berasal dari negara?", a:"Italia", opts:["Brasil","Prancis","Italia","Ethiopia"] },
  { q:"Makanan fermentasi Korea yang terbuat dari kubis adalah?", a:"Kimchi", opts:["Miso","Tofu","Kimchi","Tempeh"] },
  { q:"Tempe adalah makanan fermentasi khas dari?", a:"Indonesia", opts:["Malaysia","Thailand","Indonesia","Vietnam"] },
  { q:"Bumbu yang memberikan warna kuning pada masakan adalah?", a:"Kunyit", opts:["Jahe","Kunyit","Lengkuas","Kencur"] },
  { q:"Masakan 'Rendang' berasal dari daerah?", a:"Minangkabau/Sumatra Barat", opts:["Aceh","Minangkabau/Sumatra Barat","Jawa","Bali"] },
  { q:"Nasi goreng telah diakui sebagai salah satu makanan terenak di dunia versi?", a:"CNN Travel", opts:["Forbes","CNN Travel","TIME Magazine","National Geographic"] },
  { q:"Cabai mengandung senyawa pedas bernama?", a:"Kapsaisin", opts:["Piperin","Kapsaisin","Allicin","Gingerol"] },

  // ════════════════════════════════
  //   🏛️ PENGETAHUAN UMUM LAINNYA
  // ════════════════════════════════
  { q:"Siapa penemu telepon?", a:"Alexander Graham Bell", opts:["Thomas Edison","Nikola Tesla","Alexander Graham Bell","Guglielmo Marconi"] },
  { q:"Siapa yang menemukan bola lampu listrik praktis?", a:"Thomas Edison", opts:["Nikola Tesla","Thomas Edison","Alexander Graham Bell","Albert Einstein"] },
  { q:"Teori evolusi dikemukakan oleh?", a:"Charles Darwin", opts:["Gregor Mendel","Charles Darwin","Louis Pasteur","Carl Linnaeus"] },
  { q:"Siapa yang menemukan penisilin?", a:"Alexander Fleming", opts:["Louis Pasteur","Alexander Fleming","Joseph Lister","Robert Koch"] },
  { q:"Vaksin pertama di dunia ditemukan oleh?", a:"Edward Jenner", opts:["Louis Pasteur","Edward Jenner","Alexander Fleming","Robert Koch"] },
  { q:"Hari Bumi diperingati setiap tanggal?", a:"22 April", opts:["5 Juni","22 April","21 Maret","16 September"] },
  { q:"Organisasi kesehatan dunia PBB disebut?", a:"WHO", opts:["UNICEF","UNESCO","WHO","UNDP"] },
  { q:"Nobel Prize pertama kali diberikan pada tahun?", a:"1901", opts:["1895","1901","1910","1920"] },
  { q:"Bahasa pemrograman pertama di dunia adalah?", a:"Assembly", opts:["FORTRAN","COBOL","Assembly","C"] },
  { q:"Siapa pencipta telepon genggam pertama?", a:"Martin Cooper", opts:["Steve Jobs","Bill Gates","Martin Cooper","Jack Kilby"] },
  { q:"Bangunan tertinggi di dunia saat ini (2024) adalah?", a:"Burj Khalifa", opts:["Shanghai Tower","Makkah Clock Tower","Burj Khalifa","Taipei 101"] },
  { q:"Emas murni memiliki kemurnian berapa karat?", a:"24 karat", opts:["18 karat","20 karat","22 karat","24 karat"] },
  { q:"Hewan yang memiliki masa kehamilan terlama adalah?", a:"Gajah", opts:["Paus","Jerapah","Gajah","Badak"] },
  { q:"Berapa persen tubuh manusia terdiri dari air?", a:"60-70%", opts:["40-50%","50-60%","60-70%","70-80%"] },
  { q:"Tangan kanan manusia umumnya dikontrol oleh otak bagian?", a:"Kiri", opts:["Kanan","Kiri","Tengah","Belakang"] },
  { q:"Berapa lama manusia bisa bertahan tanpa air?", a:"3 hari", opts:["1 hari","3 hari","7 hari","10 hari"] },
  { q:"Penyakit yang disebabkan oleh nyamuk Aedes aegypti adalah?", a:"Demam Berdarah", opts:["Malaria","Demam Berdarah","Tifus","Kolera"] },
  { q:"Berapa jumlah gigi permanen manusia dewasa?", a:"32 gigi", opts:["28 gigi","30 gigi","32 gigi","34 gigi"] },
  { q:"Kelenjar endokrin terbesar dalam tubuh manusia adalah?", a:"Tiroid", opts:["Pankreas","Tiroid","Kelenjar adrenal","Hipofisis"] },
  { q:"Warna yang tidak ada dalam pelangi adalah?", a:"Pink", opts:["Nila","Violet","Pink","Jingga"] },
  { q:"Jumlah benua di dunia adalah?", a:"7", opts:["5","6","7","8"] },
  { q:"Benua terkecil di dunia adalah?", a:"Australia", opts:["Eropa","Antartika","Australia","Amerika Utara"] },
  { q:"Laut Mati adalah danau dengan kadar garam tertinggi, terletak di?", a:"Yordania & Israel", opts:["Arab Saudi","Mesir","Yordania & Israel","Iran"] },
  { q:"Hewan dengan lidah terpanjang relatif terhadap tubuhnya adalah?", a:"Bunglon", opts:["Anteater","Bunglon","Katak","Iguana"] },
  { q:"Negara yang dijuluki 'Negeri Sakura' adalah?", a:"Jepang", opts:["Korea Selatan","China","Jepang","Vietnam"] },
  { q:"Negara yang dijuluki 'Negeri Ginseng' adalah?", a:"Korea Selatan", opts:["China","Jepang","Korea Selatan","Vietnam"] },
  { q:"Fenomena alam 'Aurora Borealis' paling sering terlihat di daerah?", a:"Kutub Utara", opts:["Kutub Selatan","Ekuator","Kutub Utara","Tropis"] },
  { q:"Satuan jarak yang digunakan dalam astronomi untuk jarak bintang adalah?", a:"Tahun cahaya", opts:["Kilometer","Mil","Tahun cahaya","Parsec biasa"] },
  { q:"Hewan yang bisa hidup paling lama adalah?", a:"Tardigrade / Ubur-ubur immortal", opts:["Kura-kura raksasa","Paus kepala busur","Tardigrade / Ubur-ubur immortal","Buaya"] },
  { q:"Negara dengan jumlah danau terbanyak di dunia adalah?", a:"Kanada", opts:["Rusia","Finlandia","Amerika Serikat","Kanada"] },
  { q:"Organ manusia yang bisa tumbuh kembali adalah?", a:"Hati", opts:["Ginjal","Hati","Paru-paru","Jantung"] },
  { q:"Warna langit tampak biru karena?", a:"Hamburan Rayleigh", opts:["Pantulan laut","Hamburan Rayleigh","Efek prisma","Kandungan oksigen"] },
  { q:"Berapa persen oksigen yang ada di atmosfer bumi?", a:"21%", opts:["15%","18%","21%","25%"] },
  { q:"Proses tidur yang baik untuk orang dewasa berapa jam per hari?", a:"7-9 jam", opts:["4-5 jam","5-6 jam","6-7 jam","7-9 jam"] },
  { q:"Alat yang digunakan untuk mengukur gempa bumi adalah?", a:"Seismograf", opts:["Barometer","Termometer","Seismograf","Anemometer"] },
  { q:"Kecepatan suara di udara sekitar?", a:"340 m/s", opts:["240 m/s","340 m/s","440 m/s","540 m/s"] },
  { q:"Hewan yang menggunakan ekolokasi untuk navigasi adalah?", a:"Kelelawar", opts:["Lumba-lumba saja","Kelelawar","Tikus","Anjing laut"] },
  { q:"Fotografi digital pertama kali dikembangkan pada dekade?", a:"1970-an", opts:["1950-an","1960-an","1970-an","1980-an"] },
  { q:"Satelit buatan pertama yang diluncurkan manusia adalah?", a:"Sputnik 1", opts:["Explorer 1","Sputnik 1","Vostok 1","Apollo 1"] },
  { q:"Negara pertama yang memberikan hak pilih kepada perempuan adalah?", a:"Selandia Baru", opts:["Amerika Serikat","Inggris","Australia","Selandia Baru"] },
  { q:"Siapa ilmuwan wanita pertama yang memenangkan Nobel Prize?", a:"Marie Curie", opts:["Rosalind Franklin","Marie Curie","Lise Meitner","Dorothy Hodgkin"] },
  { q:"Berapa suhu tubuh normal manusia?", a:"36-37°C", opts:["34-35°C","35-36°C","36-37°C","37-38°C"] },
  { q:"Benda yang memiliki massa tapi tidak memiliki volume adalah?", a:"Tidak ada (semua materi punya volume)", opts:["Gas","Cahaya","Tidak ada (semua materi punya volume)","Plasma"] },
  { q:"Tahun kabisat terjadi setiap berapa tahun?", a:"4 tahun", opts:["2 tahun","3 tahun","4 tahun","5 tahun"] },

  // ════════════════════════════════
  //   🌏 ASIA & ASEAN
  // ════════════════════════════════
  { q:"Negara pendiri ASEAN berjumlah?", a:"5 negara", opts:["4 negara","5 negara","6 negara","7 negara"] },
  { q:"ASEAN didirikan pada tahun?", a:"1967", opts:["1961","1965","1967","1970"] },
  { q:"Ibu kota Thailand adalah?", a:"Bangkok", opts:["Chiang Mai","Bangkok","Phuket","Pattaya"] },
  { q:"Tembok Besar China panjangnya sekitar?", a:"21.000 km", opts:["8.000 km","13.000 km","21.000 km","30.000 km"] },
  { q:"Gunung berapi yang meletus dan menghancurkan kota Pompeii adalah?", a:"Vesuvius", opts:["Etna","Stromboli","Vesuvius","Santorini"] },
  { q:"Negara di Asia Tenggara yang tidak pernah dijajah adalah?", a:"Thailand", opts:["Malaysia","Myanmar","Thailand","Vietnam"] },
  { q:"Sungai Mekong mengalir melalui berapa negara?", a:"6 negara", opts:["4 negara","5 negara","6 negara","7 negara"] },
  { q:"Ibu kota Vietnam adalah?", a:"Hanoi", opts:["Ho Chi Minh City","Hanoi","Da Nang","Hue"] },
  { q:"Filipina memiliki berapa pulau?", a:"Lebih dari 7.600 pulau", opts:["Lebih dari 3.000 pulau","Lebih dari 5.000 pulau","Lebih dari 7.600 pulau","Lebih dari 10.000 pulau"] },
  { q:"Negara di Asia yang memiliki populasi lebih dari 1 miliar selain China adalah?", a:"India", opts:["Pakistan","Bangladesh","India","Indonesia"] },
  // ════════════════════════════════
  //   🇮🇩 INDONESIA — TAMBAHAN
  // ════════════════════════════════
  { q:"Pancasila sebagai dasar negara dirumuskan pertama kali oleh?", a:"Soekarno", opts:["Mohammad Hatta","Soekarno","Mohammad Yamin","Soepomo"] },
  { q:"Hari lahir Pancasila diperingati setiap tanggal?", a:"1 Juni", opts:["17 Agustus","1 Juni","28 Oktober","20 Mei"] },
  { q:"Badan yang menyusun UUD 1945 adalah?", a:"BPUPKI", opts:["PPKI","BPUPKI","DPR","MPR"] },
  { q:"Garuda Pancasila memiliki berapa helai bulu pada sayapnya masing-masing?", a:"17 helai", opts:["14 helai","17 helai","19 helai","45 helai"] },
  { q:"Jumlah bulu ekor Garuda Pancasila melambangkan?", a:"Bulan kemerdekaan (8)", opts:["Tahun (45)","Tanggal (17)","Bulan kemerdekaan (8)","Rantai Pancasila"] },
  { q:"Operasi Trikora bertujuan untuk membebaskan?", a:"Papua Barat", opts:["Timor Timur","Sabah","Papua Barat","Pulau Sipadan"] },
  { q:"Konstitusi Indonesia yang pertama adalah?", a:"UUD 1945", opts:["UUD 1945","Konstitusi RIS","UUDS 1950","UUD 1949"] },
  { q:"Bahasa Indonesia berasal dari bahasa?", a:"Melayu", opts:["Jawa","Sansekerta","Melayu","Arab"] },
  { q:"Lembaga legislatif di Indonesia terdiri dari?", a:"DPR, DPD, MPR", opts:["DPR saja","DPR dan DPD","DPR, DPD, MPR","DPR, MPR, MK"] },
  { q:"Ibu kota baru Indonesia yang sedang dibangun bernama?", a:"Nusantara", opts:["Palangkaraya","Nusantara","Samarinda","Balikpapan"] },
  { q:"Komoditas ekspor terbesar Indonesia adalah?", a:"Batu bara dan minyak sawit", opts:["Karet","Batu bara dan minyak sawit","Kopi","Timah"] },
  { q:"Lagu 'Halo-Halo Bandung' diciptakan oleh?", a:"Ismail Marzuki", opts:["W.R. Soepratman","Ismail Marzuki","C. Simanjuntak","AT Mahmud"] },
  { q:"Bandara internasional terbesar di Indonesia adalah?", a:"Soekarno-Hatta", opts:["Juanda","Ngurah Rai","Soekarno-Hatta","Kualanamu"] },
  { q:"Museum nasional Indonesia berada di kota?", a:"Jakarta", opts:["Yogyakarta","Bandung","Surabaya","Jakarta"] },
  { q:"Keris diakui UNESCO sebagai warisan budaya pada tahun?", a:"2005", opts:["2003","2005","2007","2009"] },
  { q:"Pulau Komodo terkenal karena hewan endemik?", a:"Komodo", opts:["Anoa","Komodo","Babirusa","Tarsius"] },
  { q:"Danau Toba terbentuk akibat?", a:"Letusan gunung berapi purba", opts:["Gempa bumi","Letusan gunung berapi purba","Pergeseran lempeng","Erosi"] },
  { q:"Suku dengan populasi terbesar di Indonesia adalah?", a:"Jawa", opts:["Sunda","Jawa","Batak","Madura"] },

  // ════════════════════════════════
  //   🔬 SAINS TAMBAHAN
  // ════════════════════════════════
  { q:"Teori sel dikemukakan oleh?", a:"Schleiden dan Schwann", opts:["Robert Hooke","Louis Pasteur","Schleiden dan Schwann","Charles Darwin"] },
  { q:"Vitamin D dapat diperoleh dari?", a:"Sinar matahari", opts:["Buah jeruk","Sinar matahari","Ikan laut","Susu"] },
  { q:"Berapa jumlah pasang kromosom seks manusia?", a:"1 pasang", opts:["1 pasang","2 pasang","3 pasang","23 pasang"] },
  { q:"Proses pembuatan makanan pada tumbuhan menggunakan?", a:"Klorofil, air, CO₂, cahaya", opts:["Oksigen dan air","Klorofil, air, CO₂, cahaya","Nitrogen dan mineral","Glukosa dan air"] },
  { q:"Tulang yang paling kecil dalam tubuh manusia ada di?", a:"Telinga", opts:["Jari tangan","Hidung","Telinga","Mata"] },
  { q:"Sistem peredaran darah manusia terdiri dari berapa jenis?", a:"2 (besar dan kecil)", opts:["1","2 (besar dan kecil)","3","4"] },
  { q:"Suhu air mendidih pada tekanan 1 atmosfer adalah?", a:"100°C", opts:["90°C","95°C","100°C","105°C"] },
  { q:"Besi berkarat karena proses?", a:"Oksidasi", opts:["Reduksi","Oksidasi","Hidrolisis","Elektrolisis"] },
  { q:"Senyawa yang mengandung C, H, O disebut?", a:"Senyawa organik", opts:["Senyawa anorganik","Senyawa ionik","Senyawa organik","Senyawa kovalen"] },
  { q:"Kecepatan terminal dicapai ketika?", a:"Gaya hambat = gaya gravitasi", opts:["Percepatan maksimum","Gaya hambat = gaya gravitasi","Kecepatan nol","Massa = nol"] },
  { q:"Jantung manusia memompa darah ke seluruh tubuh sekitar berapa kali per menit?", a:"60-100 kali", opts:["30-50 kali","60-100 kali","100-120 kali","20-30 kali"] },
  { q:"Unsur radioaktif yang ditemukan oleh Marie Curie adalah?", a:"Polonium dan Radium", opts:["Uranium","Torium","Polonium dan Radium","Radon"] },
  { q:"Cahaya putih dapat diurai menjadi spektrum warna melalui?", a:"Prisma", opts:["Cermin","Lensa cembung","Prisma","Filter warna"] },
  { q:"Satuan besaran panjang dalam SI adalah?", a:"Meter", opts:["Sentimeter","Meter","Kilometer","Inchi"] },
  { q:"Proses peluruhan radioaktif menghasilkan partikel?", a:"Alpha, Beta, Gamma", opts:["Proton dan neutron","Alpha, Beta, Gamma","Elektron saja","Foton saja"] },
  { q:"Materi yang bersifat sebagai konduktor terbaik adalah?", a:"Perak (Silver)", opts:["Emas","Tembaga","Perak (Silver)","Aluminium"] },

  // ════════════════════════════════
  //   🌍 GEOGRAFI & NEGARA TAMBAHAN
  // ════════════════════════════════
  { q:"Mata uang Eropa yang digunakan bersama disebut?", a:"Euro", opts:["Poundsterling","Frank","Euro","Gulden"] },
  { q:"Negara di mana Menara Pisa yang miring berada?", a:"Italia", opts:["Prancis","Spanyol","Yunani","Italia"] },
  { q:"Piramida Giza terletak di negara?", a:"Mesir", opts:["Irak","Suriah","Yordania","Mesir"] },
  { q:"Kolosseum yang terkenal berada di kota?", a:"Roma", opts:["Milano","Venezia","Roma","Firenze"] },
  { q:"Laut Merah terletak di antara?", a:"Afrika dan Arab", opts:["Eropa dan Afrika","Asia dan Australia","Afrika dan Arab","Amerika dan Eropa"] },
  { q:"Ibu kota Mesir adalah?", a:"Kairo", opts:["Alexandria","Luxor","Kairo","Aswan"] },
  { q:"Negara yang memiliki luas wilayah terkecil di dunia adalah?", a:"Vatikan", opts:["Monaco","San Marino","Vatikan","Liechtenstein"] },
  { q:"Terusan Suez menghubungkan Laut Merah dengan?", a:"Laut Mediterania", opts:["Laut Arab","Laut Tengah/Mediterania","Samudra Hindia","Selat Gibraltar"] },
  { q:"Kota yang dikenal sebagai 'Kota Terapung' adalah?", a:"Venesia", opts:["Amsterdam","Bangkok","Venesia","Stockholm"] },
  { q:"Ibu kota India adalah?", a:"New Delhi", opts:["Mumbai","Kolkata","Chennai","New Delhi"] },
  { q:"Sungai Amazon mengalir melalui negara?", a:"Brasil", opts:["Peru","Argentina","Kolombia","Brasil"] },
  { q:"Pegunungan Andes terletak di benua?", a:"Amerika Selatan", opts:["Amerika Utara","Amerika Tengah","Amerika Selatan","Eropa"] },
  { q:"Ibu kota Korea Selatan adalah?", a:"Seoul", opts:["Busan","Incheon","Seoul","Daegu"] },
  { q:"Negara yang dikenal sebagai 'Negeri Kincir Angin' adalah?", a:"Belanda", opts:["Denmark","Belanda","Belgia","Jerman"] },
  { q:"Ibu kota Argentina adalah?", a:"Buenos Aires", opts:["Santiago","Lima","Bogota","Buenos Aires"] },

  // ════════════════════════════════
  //   🎮 GAME & POP CULTURE
  // ════════════════════════════════
  { q:"Game Minecraft dibuat oleh perusahaan?", a:"Mojang", opts:["EA Games","Activision","Mojang","Ubisoft"] },
  { q:"Karakter utama dalam game Legend of Zelda adalah?", a:"Link", opts:["Zelda","Link","Ganon","Impa"] },
  { q:"Game PUBG dikembangkan oleh perusahaan dari negara?", a:"Korea Selatan", opts:["China","Jepang","Korea Selatan","Amerika"] },
  { q:"Film animasi 'Spirited Away' dibuat oleh studio?", a:"Studio Ghibli", opts:["Pixar","DreamWorks","Studio Ghibli","Walt Disney"] },
  { q:"Film superhero 'Avengers: Endgame' dirilis pada tahun?", a:"2019", opts:["2018","2019","2020","2021"] },
  { q:"Karakter Mario Bros berasal dari negara?", a:"Jepang (Nintendo)", opts:["Amerika","Jepang (Nintendo)","Korea","Eropa"] },
  { q:"Serial anime 'Naruto' dibuat oleh?", a:"Masashi Kishimoto", opts:["Eiichiro Oda","Akira Toriyama","Masashi Kishimoto","Hajime Isayama"] },
  { q:"Film 'Titanic' disutradarai oleh?", a:"James Cameron", opts:["Steven Spielberg","James Cameron","Christopher Nolan","Peter Jackson"] },
  { q:"Siapa pemeran Iron Man di MCU?", a:"Robert Downey Jr.", opts:["Chris Evans","Robert Downey Jr.","Chris Hemsworth","Mark Ruffalo"] },
  { q:"Serial manga 'One Piece' dibuat oleh?", a:"Eiichiro Oda", opts:["Masashi Kishimoto","Hajime Isayama","Akira Toriyama","Eiichiro Oda"] },

  // ════════════════════════════════
  //   💡 PENEMUAN & INOVASI
  // ════════════════════════════════
  { q:"Pesawat terbang pertama berhasil terbang pada tahun?", a:"1903", opts:["1896","1900","1903","1910"] },
  { q:"Penemu pesawat terbang pertama adalah?", a:"Wright Bersaudara", opts:["Leonardo da Vinci","Wright Bersaudara","Henry Ford","Nikola Tesla"] },
  { q:"Mesin cetak pertama ditemukan oleh?", a:"Johannes Gutenberg", opts:["Benjamin Franklin","Johannes Gutenberg","Isaac Newton","Leonardo da Vinci"] },
  { q:"Komputer elektronik pertama bernama?", a:"ENIAC", opts:["UNIVAC","ENIAC","IBM 360","Apple I"] },
  { q:"Internet pertama kali dikembangkan dari proyek?", a:"ARPANET", opts:["MILNET","ARPANET","NSFNet","BITNET"] },
  { q:"Vaksin COVID-19 pertama yang disetujui secara resmi adalah dari?", a:"Pfizer-BioNTech", opts:["Moderna","Pfizer-BioNTech","AstraZeneca","Sinovac"] },
  { q:"Kendaraan listrik modern pertama yang populer dibuat oleh perusahaan?", a:"Tesla", opts:["BMW","Tesla","Nissan","Toyota"] },
  { q:"Teleskop ruang angkasa Hubble diluncurkan pada tahun?", a:"1990", opts:["1985","1988","1990","1993"] },
  { q:"Siapa penemu mesin uap yang mengawali Revolusi Industri?", a:"James Watt", opts:["Thomas Newcomen","James Watt","George Stephenson","Richard Arkwright"] },
  { q:"Siapa penemu dinamit?", a:"Alfred Nobel", opts:["Nikola Tesla","Alfred Nobel","Thomas Edison","Robert Oppenheimer"] },

  // ════════════════════════════════
  //   🧠 PSIKOLOGI & SOSIAL
  // ════════════════════════════════
  { q:"Teori hierarki kebutuhan manusia dikemukakan oleh?", a:"Abraham Maslow", opts:["Sigmund Freud","Abraham Maslow","Carl Jung","B.F. Skinner"] },
  { q:"Bapak psikologi modern adalah?", a:"Sigmund Freud", opts:["William James","Sigmund Freud","Wilhelm Wundt","Carl Rogers"] },
  { q:"IQ adalah singkatan dari?", a:"Intelligence Quotient", opts:["Intellectual Quality","Intelligence Quotient","Internal Quota","Integrated Questions"] },
  { q:"Efek placebo terjadi ketika pasien?", a:"Membaik hanya karena percaya pada pengobatan", opts:["Mendapat obat terbaik","Membaik hanya karena percaya pada pengobatan","Sembuh karena operasi","Mendapat antibiotik"] },
  { q:"Fobia terhadap laba-laba disebut?", a:"Arachnofobia", opts:["Agorafobia","Arachnofobia","Klaustrofobia","Xenofobia"] },
  { q:"Kondisi di mana seseorang tidak bisa mengenali wajah disebut?", a:"Prosopagnosia", opts:["Amnesia","Prosopagnosia","Disleksia","Afasia"] },

  // ════════════════════════════════
  //   🏥 KESEHATAN & MEDIS
  // ════════════════════════════════
  { q:"Golongan darah yang disebut 'donor universal' adalah?", a:"O negatif", opts:["O positif","A negatif","AB positif","O negatif"] },
  { q:"Golongan darah yang disebut 'resipien universal' adalah?", a:"AB positif", opts:["O positif","A positif","AB positif","B positif"] },
  { q:"Penyakit diabetes disebabkan oleh gangguan hormon?", a:"Insulin", opts:["Adrenalin","Tiroksin","Insulin","Kortisol"] },
  { q:"Tulang yang paling panjang dalam tubuh manusia adalah?", a:"Femur (tulang paha)", opts:["Tibia","Fibula","Femur (tulang paha)","Humerus"] },
  { q:"Penyakit yang disebabkan kekurangan vitamin C adalah?", a:"Skorbut", opts:["Rakitis","Skorbut","Beri-beri","Pellagra"] },
  { q:"Kekurangan vitamin D menyebabkan penyakit?", a:"Rakitis", opts:["Anemia","Rakitis","Skorbut","Gondok"] },
  { q:"Tekanan darah normal manusia adalah?", a:"120/80 mmHg", opts:["100/60 mmHg","120/80 mmHg","140/90 mmHg","160/100 mmHg"] },
  { q:"Organ yang berfungsi menyaring darah dan membentuk urin adalah?", a:"Ginjal", opts:["Hati","Limpa","Ginjal","Pankreas"] },
  { q:"Antibiotik ditemukan secara tidak sengaja melalui?", a:"Jamur Penicillium", opts:["Bakteri E. coli","Jamur Penicillium","Virus influenza","Parasit malaria"] },
  { q:"Berapa normal denyut nadi manusia dewasa per menit?", a:"60-100 kali", opts:["40-60 kali","60-100 kali","100-120 kali","30-50 kali"] },

  // ════════════════════════════════
  //   🌱 PERTANIAN & BIOLOGI TUMBUHAN
  // ════════════════════════════════
  { q:"Tanaman yang menghasilkan biji kopi adalah?", a:"Coffea", opts:["Theobroma","Coffea","Camellia","Theaceae"] },
  { q:"Bagian bunga yang mengandung serbuk sari adalah?", a:"Benang sari (stamen)", opts:["Putik","Kelopak","Benang sari (stamen)","Mahkota"] },
  { q:"Proses penyerbukan oleh angin disebut?", a:"Anemogami", opts:["Entomogami","Anemogami","Ornitogami","Hidrogami"] },
  { q:"Tanaman padi (Oryza sativa) termasuk famili?", a:"Gramineae/Poaceae", opts:["Leguminosae","Gramineae/Poaceae","Solanaceae","Cucurbitaceae"] },
  { q:"Pupuk yang mengandung unsur nitrogen antara lain?", a:"Urea", opts:["TSP","KCl","Urea","Dolomit"] },
  { q:"Proses penguapan air melalui daun disebut?", a:"Transpirasi", opts:["Respirasi","Transpirasi","Evaporasi","Kondensasi"] },
  { q:"Bagian sel tumbuhan yang tidak dimiliki sel hewan adalah?", a:"Dinding sel dan vakuola besar", opts:["Mitokondria","Nukleus","Dinding sel dan vakuola besar","Ribosom"] },

  // ════════════════════════════════
  //   🏦 EKONOMI & BISNIS
  // ════════════════════════════════
  { q:"GDP singkatan dari?", a:"Gross Domestic Product", opts:["General Domestic Product","Gross Domestic Product","Global Development Plan","General Development Program"] },
  { q:"Inflasi adalah kondisi di mana?", a:"Harga barang naik secara umum", opts:["Nilai mata uang naik","Harga barang naik secara umum","Pengangguran menurun","Produksi meningkat"] },
  { q:"Bursa saham terbesar di dunia adalah?", a:"NYSE (New York Stock Exchange)", opts:["NASDAQ","NYSE (New York Stock Exchange)","Tokyo Stock Exchange","London Stock Exchange"] },
  { q:"Mata uang Amerika Serikat adalah?", a:"Dolar", opts:["Pound","Euro","Dolar","Yen"] },
  { q:"Bank sentral Indonesia adalah?", a:"Bank Indonesia", opts:["BRI","BNI","Bank Mandiri","Bank Indonesia"] },
  { q:"Pajak yang dikenakan atas barang dan jasa disebut?", a:"PPN", opts:["PPh","PPN","PPnBM","Bea cukai"] },

  // ════════════════════════════════
  //   ✈️ TRANSPORTASI & PERJALANAN
  // ════════════════════════════════
  { q:"Pesawat penumpang terbesar yang pernah dibuat adalah?", a:"Airbus A380", opts:["Boeing 747","Airbus A380","Boeing 777","Airbus A350"] },
  { q:"Kapal Titanic tenggelam pada tahun?", a:"1912", opts:["1905","1908","1912","1915"] },
  { q:"Kereta cepat pertama di dunia beroperasi di negara?", a:"Jepang", opts:["Prancis","Jerman","China","Jepang"] },
  { q:"Kereta Shinkansen adalah kereta cepat dari negara?", a:"Jepang", opts:["China","Korea","Prancis","Jepang"] },
  { q:"Bandara tersibuk di dunia adalah?", a:"Hartsfield-Jackson Atlanta", opts:["Dubai International","Beijing Capital","Hartsfield-Jackson Atlanta","Los Angeles International"] },
  { q:"Terusan Panama menghubungkan Samudra Pasifik dengan?", a:"Samudra Atlantik", opts:["Laut Karibia","Samudra Atlantik","Teluk Meksiko","Laut Mediterania"] },

  // ════════════════════════════════
  //   🎓 PENDIDIKAN & ILMU LAINNYA
  // ════════════════════════════════
  { q:"Hukum Newton pertama berbunyi tentang?", a:"Kelembaman (inersia)", opts:["Gaya dan percepatan","Aksi-reaksi","Gravitasi","Kelembaman (inersia)"] },
  { q:"Hukum Newton kedua: F = ?", a:"m × a", opts:["m × v","m × a","m × g","m × d"] },
  { q:"Siapa yang menciptakan teori heliosentris?", a:"Nicolaus Copernicus", opts:["Galileo Galilei","Nicolaus Copernicus","Johannes Kepler","Tycho Brahe"] },
  { q:"Berapakah nilai konstanta gravitasi (g) di bumi?", a:"9,8 m/s²", opts:["8,9 m/s²","9,8 m/s²","10,8 m/s²","7,9 m/s²"] },
  { q:"Rumus Pythagoras adalah?", a:"a² + b² = c²", opts:["a + b = c","a² + b² = c²","a × b = c²","a² × b² = c²"] },
  { q:"Cermin cekung bersifat?", a:"Mengumpulkan cahaya (konvergen)", opts:["Menyebarkan cahaya","Mengumpulkan cahaya (konvergen)","Membiaskan cahaya","Menyerap cahaya"] },
  { q:"Bilangan yang hanya habis dibagi 1 dan dirinya sendiri disebut?", a:"Bilangan prima", opts:["Bilangan genap","Bilangan ganjil","Bilangan prima","Bilangan komposit"] },
  { q:"Berapa hasil dari sin 90°?", a:"1", opts:["0","0,5","1","√2/2"] },
  { q:"Logika 'AND' menghasilkan TRUE jika?", a:"Kedua input TRUE", opts:["Salah satu TRUE","Kedua input TRUE","Kedua input FALSE","Salah satu FALSE"] },
  { q:"Proses penuaan dan kematian sel disebut?", a:"Apoptosis", opts:["Mitosis","Meiosis","Apoptosis","Nekrosis"] },
  { q:"Asam amino merupakan penyusun dari?", a:"Protein", opts:["Karbohidrat","Lemak","Protein","Vitamin"] },
  { q:"Kecepatan rata-rata dihitung dengan?", a:"Jarak / Waktu", opts:["Waktu / Jarak","Jarak × Waktu","Jarak / Waktu","Jarak + Waktu"] },
  { q:"Berapa jumlah dimensi dalam ruang biasa?", a:"3 dimensi", opts:["1 dimensi","2 dimensi","3 dimensi","4 dimensi"] },
  { q:"Teorema Pythagoras berlaku untuk segitiga?", a:"Siku-siku", opts:["Sama sisi","Sama kaki","Siku-siku","Sembarang"] },
  { q:"Unsur paling ringan di tabel periodik adalah?", a:"Hidrogen", opts:["Helium","Litium","Hidrogen","Boron"] },

  // ════════════════════════════════
  //   🌊 KELAUTAN & GEOLOGI
  // ════════════════════════════════
  { q:"Palung laut terdalam di dunia adalah?", a:"Palung Mariana", opts:["Palung Tonga","Palung Mariana","Palung Puerto Rico","Palung Java"] },
  { q:"Kedalaman Palung Mariana sekitar?", a:"11.000 meter", opts:["7.000 meter","9.000 meter","11.000 meter","13.000 meter"] },
  { q:"Gempa bumi diukur dengan skala?", a:"Richter / Skala Moment Magnitudo", opts:["Fahrenheit","Richter / Skala Moment Magnitudo","Beaufort","Saffir-Simpson"] },
  { q:"Proses terbentuknya batuan sedimen adalah melalui?", a:"Pengendapan material", opts:["Pembekuan magma","Pengendapan material","Metamorfosis","Kristalisasi"] },
  { q:"Lapisan inti bumi yang cair adalah?", a:"Inti luar", opts:["Inti dalam","Inti luar","Mantel","Kerak"] },
  { q:"Energi gelombang tsunami berasal dari?", a:"Gempa bumi bawah laut", opts:["Angin kencang","Gempa bumi bawah laut","Letusan gunung es","Pasang surut bulan"] },
  { q:"Lempeng tektonik yang menopang Indonesia adalah?", a:"Lempeng Indo-Australia, Eurasia, dan Pasifik", opts:["Hanya Lempeng Indo-Australia","Lempeng Indo-Australia, Eurasia, dan Pasifik","Lempeng Pasifik saja","Lempeng Afrika dan Eurasia"] },
  { q:"Fenomena El Niño memengaruhi?", a:"Pola cuaca global", opts:["Gempa bumi","Pola cuaca global","Gunung berapi","Pasang surut"] },
  { q:"Proses pembentukan batubara berlangsung selama?", a:"Jutaan tahun", opts:["Ratusan tahun","Ribuan tahun","Jutaan tahun","Miliaran tahun"] },
  { q:"Batuan yang terbentuk dari pembekuan magma disebut?", a:"Batuan beku", opts:["Batuan sedimen","Batuan metamorf","Batuan beku","Batuan malihan"] },

  // ════════════════════════════════
  //   🎨 SENI & DESAIN
  // ════════════════════════════════
  { q:"Pelukis 'Mona Lisa' adalah?", a:"Leonardo da Vinci", opts:["Michelangelo","Raphael","Leonardo da Vinci","Sandro Botticelli"] },
  { q:"Lukisan 'The Starry Night' dibuat oleh?", a:"Vincent van Gogh", opts:["Pablo Picasso","Claude Monet","Vincent van Gogh","Salvador Dali"] },
  { q:"Aliran seni yang menggambarkan objek dari berbagai sudut pandang sekaligus disebut?", a:"Kubisme", opts:["Impresionisme","Surealisme","Kubisme","Abstrak"] },
  { q:"Pelukis terkenal dari Indonesia yang dikenal dengan lukisan 'Penari Bali' adalah?", a:"Walter Spies", opts:["Raden Saleh","Walter Spies","Affandi","Basuki Abdullah"] },
  { q:"Teknik melukis menggunakan cat berbasis minyak disebut?", a:"Oil painting", opts:["Watercolor","Oil painting","Acrylic","Gouache"] },
  { q:"Warna primer dalam seni lukis (pigmen) adalah?", a:"Merah, kuning, biru", opts:["Merah, hijau, biru","Cyan, magenta, yellow","Merah, kuning, biru","Oranye, hijau, ungu"] },
  { q:"Patung 'David' yang terkenal dibuat oleh?", a:"Michelangelo", opts:["Donatello","Bernini","Michelangelo","Rodin"] },
  { q:"Arsitektur Candi Borobudur berbentuk?", a:"Stupa bertingkat (mandala)", opts:["Piramida","Stupa bertingkat (mandala)","Menara","Dome"] },
  { q:"Gaya arsitektur yang menggunakan lengkungan dan kubah besar disebut?", a:"Romawi/Baroque", opts:["Gothic","Romawi/Baroque","Art Deco","Modern"] },

  // ════════════════════════════════
  //   🤔 TRIVIA UNIK & MENARIK
  // ════════════════════════════════
  { q:"Berapa lama lebah madu bekerja untuk menghasilkan 1 sendok madu?", a:"Seumur hidup 12 lebah", opts:["1 lebah sehari","1 minggu 5 lebah","Seumur hidup 12 lebah","Sebulan 1 lebah"] },
  { q:"Hewan yang memiliki sidik jari mirip manusia adalah?", a:"Koala", opts:["Simpanse","Koala","Gorila","Orangutan"] },
  { q:"Hewan mamalia yang dapat terbang adalah?", a:"Kelelawar", opts:["Tupai terbang","Kelelawar","Colugo","Lemur terbang"] },
  { q:"Berapa persen DNA manusia yang sama dengan DNA simpanse?", a:"98,7%", opts:["90%","95%","98,7%","99,9%"] },
  { q:"Ikan yang bisa berjalan di darat adalah?", a:"Ikan gabus / mudskipper", opts:["Ikan pari","Ikan gabus / mudskipper","Ikan salmon","Ikan lele"] },
  { q:"Planet yang paling panas di tata surya adalah?", a:"Venus", opts:["Merkurius","Venus","Bumi","Mars"] },
  { q:"Hewan yang tidur paling lama adalah?", a:"Beruang kutub (hibernasi 7-8 bulan)", opts:["Singa laut","Kucing","Beruang kutub (hibernasi 7-8 bulan)","Kelelawar"] },
  { q:"Warna yang tidak bisa dilihat oleh anjing adalah?", a:"Merah dan hijau (dalam spektrum itu)", opts:["Biru","Merah dan hijau (dalam spektrum itu)","Hitam","Putih"] },
  { q:"Suara yang paling keras di alam diproduksi oleh?", a:"Paus biru", opts:["Gajah","Singa","Paus biru","Petir"] },
  { q:"Hewan yang tidak memiliki otak adalah?", a:"Bintang laut", opts:["Ubur-ubur","Bintang laut","Karang","Cacing tanah"] },
  { q:"Berapa tahun lamanya gajah mengandung anaknya?", a:"22 bulan", opts:["12 bulan","16 bulan","18 bulan","22 bulan"] },
  { q:"Pohon tertua di dunia diperkirakan berumur?", a:"5.000 tahun lebih", opts:["1.000 tahun","2.000 tahun","3.500 tahun","5.000 tahun lebih"] },
  { q:"Hewan yang memiliki darah berwarna biru adalah?", a:"Gurita dan kepiting tapal kuda", opts:["Udang","Gurita dan kepiting tapal kuda","Ikan hiu","Cumi-cumi"] },
  { q:"Berapa lama cahaya matahari sampai ke bumi?", a:"8 menit 20 detik", opts:["1 menit","3 menit","8 menit 20 detik","15 menit"] },
  { q:"Negara yang memiliki waktu siang terpanjang di dunia (midnight sun) adalah?", a:"Norwegia", opts:["Finlandia","Swedia","Norwegia","Islandia"] },
  { q:"Kata 'robot' pertama kali digunakan dalam karya?", a:"R.U.R. oleh Karel Čapek", opts:["I, Robot oleh Asimov","Frankenstein","R.U.R. oleh Karel Čapek","2001: A Space Odyssey"] },
  { q:"Hewan yang memiliki kaki terbanyak adalah?", a:"Kaki seribu (Millipede)", opts:["Laba-laba","Kalajengking","Kaki seribu (Millipede)","Lipan"] },
  { q:"Manusia menggunakan berapa persen dari kapasitas otaknya?", a:"Hampir 100% (mitos 10% sudah dibantah)", opts:["10%","30%","50%","Hampir 100% (mitos 10% sudah dibantah)"] },
  { q:"Kecepatan rata-rata kedipan mata manusia adalah?", a:"100-400 milidetik", opts:["10-50 milidetik","100-400 milidetik","1-2 detik","500-800 milidetik"] },
  { q:"Bahan yang paling keras secara alami di bumi adalah?", a:"Berlian", opts:["Baja","Titanium","Berlian","Tungsten"] },
  { q:"Berapa lama kapal selam nuklir bisa berlayar tanpa mengisi bahan bakar?", a:"20-25 tahun", opts:["1-2 tahun","5-10 tahun","20-25 tahun","50 tahun"] },
  { q:"Bahasa isyarat internasional digunakan untuk?", a:"Komunikasi orang tuli", opts:["Komunikasi rahasia","Komunikasi diplomatik","Komunikasi orang tuli","Komunikasi bawah air"] },

  // ════════════════════════════════
  //   🇮🇩 KULINER & WISATA INDONESIA
  // ════════════════════════════════
  { q:"Kota yang terkenal dengan objek wisata Tanah Lot adalah?", a:"Tabanan, Bali", opts:["Denpasar","Tabanan, Bali","Gianyar","Ubud"] },
  { q:"Makanan khas Yogyakarta yang terkenal adalah?", a:"Gudeg", opts:["Soto","Rawon","Gudeg","Gado-gado"] },
  { q:"Pempek adalah makanan khas dari kota?", a:"Palembang", opts:["Medan","Padang","Palembang","Banjarmasin"] },
  { q:"Soto Betawi adalah soto khas dari daerah?", a:"Jakarta", opts:["Bandung","Surabaya","Semarang","Jakarta"] },
  { q:"Minuman tradisional Jawa yang terbuat dari rempah-rempah disebut?", a:"Jamu", opts:["Wedang jahe","Jamu","Bir pletok","Es dawet"] },
  { q:"Kota yang dijuluki 'Kota Bunga' di Indonesia adalah?", a:"Tomohon", opts:["Malang","Bandung","Tomohon","Salatiga"] },
  { q:"Objek wisata Labuan Bajo terkenal dengan?", a:"Komodo dan perairan indah", opts:["Pantai putih saja","Komodo dan perairan indah","Hutan hujan","Perkebunan teh"] },
  { q:"Candi Prambanan adalah candi bercorak agama?", a:"Hindu", opts:["Buddha","Hindu","Islam","Animisme"] },
  { q:"Raja Ampat terkenal dengan wisata?", a:"Bawah laut / diving", opts:["Trekking gunung","Bawah laut / diving","Budaya suku","Perkebunan"] },
  { q:"Makanan khas Manado yang terkenal pedas adalah?", a:"Tinutuan dan rica-rica", opts:["Rendang","Tinutuan dan rica-rica","Papeda","Coto Makassar"] },

  // ════════════════════════════════
  //   📱 MEDIA SOSIAL & INTERNET
  // ════════════════════════════════
  { q:"Platform media sosial YouTube didirikan pada tahun?", a:"2005", opts:["2003","2004","2005","2006"] },
  { q:"Instagram dibeli oleh Facebook (Meta) pada tahun?", a:"2012", opts:["2010","2011","2012","2013"] },
  { q:"Fitur 'Reels' pada Instagram terinspirasi dari aplikasi?", a:"TikTok", opts:["YouTube","Snapchat","TikTok","Vine"] },
  { q:"Pendiri Twitter adalah?", a:"Jack Dorsey dkk", opts:["Mark Zuckerberg","Jack Dorsey dkk","Evan Spiegel","Kevin Systrom"] },
  { q:"Emoji pertama kali dibuat di negara?", a:"Jepang", opts:["Amerika","Korea","Jepang","China"] },
  { q:"TikTok merupakan aplikasi buatan perusahaan?", a:"ByteDance (China)", opts:["Tencent","ByteDance (China)","Alibaba","Baidu"] },
  { q:"Siapa CEO Tesla dan SpaceX?", a:"Elon Musk", opts:["Jeff Bezos","Bill Gates","Elon Musk","Larry Page"] },
  { q:"Platform e-commerce terbesar di Indonesia adalah?", a:"Tokopedia/Shopee", opts:["Bukalapak","Lazada","Tokopedia/Shopee","Blibli"] },
  { q:"Siapa pendiri Amazon?", a:"Jeff Bezos", opts:["Elon Musk","Jeff Bezos","Bill Gates","Larry Ellison"] },
  { q:"Nama asli perusahaan induk Google adalah?", a:"Alphabet Inc.", opts:["Google LLC","Alphabet Inc.","Silicon Corp","Tech Giants"] },

  // ════════════════════════════════
  //   🌐 AGAMA & KEPERCAYAAN
  // ════════════════════════════════
  { q:"Agama Islam diturunkan kepada Nabi?", a:"Muhammad SAW", opts:["Ibrahim AS","Musa AS","Isa AS","Muhammad SAW"] },
  { q:"Kitab suci agama Islam adalah?", a:"Al-Qur'an", opts:["Injil","Taurat","Zabur","Al-Qur'an"] },
  { q:"Kitab suci agama Kristen adalah?", a:"Alkitab (Bibel)", opts:["Taurat","Al-Qur'an","Alkitab (Bibel)","Weda"] },
  { q:"Kitab suci agama Hindu adalah?", a:"Weda", opts:["Tripitaka","Weda","Granth Sahib","Avesta"] },
  { q:"Kitab suci agama Buddha adalah?", a:"Tripitaka", opts:["Weda","Tripitaka","Granth Sahib","Talmud"] },
  { q:"Ibukota agama Katolik (Vatikan) dipimpin oleh?", a:"Paus", opts:["Kardinal","Uskup","Paus","Pastor"] },
  { q:"Tempat ibadah umat Islam disebut?", a:"Masjid", opts:["Gereja","Pura","Masjid","Kuil"] },
  { q:"Tempat ibadah umat Hindu disebut?", a:"Pura/Mandir", opts:["Masjid","Gereja","Pura/Mandir","Wihara"] },
  { q:"Bulan suci umat Islam adalah?", a:"Ramadan", opts:["Muharram","Ramadan","Syawal","Dzulhijjah"] },
  { q:"Rukun Islam ada berapa?", a:"5", opts:["3","4","5","6"] },
  { q:"Hari raya umat Islam setelah Ramadan adalah?", a:"Idul Fitri", opts:["Idul Adha","Idul Fitri","Maulid Nabi","Isra Mi'raj"] },
  { q:"Hari Natal diperingati setiap tanggal?", a:"25 Desember", opts:["24 Desember","25 Desember","26 Desember","1 Januari"] },
  { q:"Nyepi adalah hari raya dari agama?", a:"Hindu", opts:["Buddha","Islam","Kristen","Hindu"] },
  { q:"Waisak adalah hari raya dari agama?", a:"Buddha", opts:["Hindu","Konghucu","Buddha","Kristen"] },
  { q:"Agama asli Jepang yang menyembah alam dan leluhur adalah?", a:"Shinto", opts:["Buddhism","Shinto","Taoisme","Konfusianisme"] },

  // ════════════════════════════════
  //   🦁 HEWAN & SATWA LIAR
  // ════════════════════════════════
  { q:"Hewan tercepat di darat adalah?", a:"Cheetah", opts:["Singa","Macan tutul","Cheetah","Serigala"] },
  { q:"Hewan terbesar di darat adalah?", a:"Gajah Afrika", opts:["Gajah Asia","Kuda nil","Gajah Afrika","Badak putih"] },
  { q:"Hewan terbesar di lautan adalah?", a:"Paus biru", opts:["Hiu paus","Paus biru","Paus sperma","Cumi-cumi raksasa"] },
  { q:"Hewan yang dapat memutuskan ekornya sendiri sebagai pertahanan adalah?", a:"Cicak/Tokek", opts:["Bunglon","Cicak/Tokek","Salamander","Iguana"] },
  { q:"Jerapah adalah hewan dengan leher terpanjang, namun tulang lehernya berjumlah?", a:"7 ruas (sama dengan manusia)", opts:["14 ruas","20 ruas","7 ruas (sama dengan manusia)","10 ruas"] },
  { q:"Hewan yang melambangkan negara Australia adalah?", a:"Kanguru dan Koala", opts:["Dingo","Wombat","Kanguru dan Koala","Echidna"] },
  { q:"Panda raksasa adalah hewan endemik dari?", a:"China", opts:["Jepang","Tibet","China","Mongolia"] },
  { q:"Hewan yang dikenal sebagai 'Raja Hutan' adalah?", a:"Singa", opts:["Harimau","Singa","Macan","Cheetah"] },
  { q:"Hewan yang bisa mengubah warna tubuhnya adalah?", a:"Bunglon/Cumi-cumi/Gurita", opts:["Cicak","Bunglon/Cumi-cumi/Gurita","Bunglon saja","Kameleon saja"] },
  { q:"Orangutan adalah hewan endemik dari?", a:"Kalimantan dan Sumatra", opts:["Papua","Jawa","Kalimantan dan Sumatra","Sulawesi"] },
  { q:"Hewan yang memiliki masa hidup terpendek adalah?", a:"Lalat buah (Drosophila)", opts:["Nyamuk","Lebah madu","Lalat buah (Drosophila)","Kutu"] },
  { q:"Hewan yang dapat bertahan hidup di lingkungan paling ekstrem adalah?", a:"Tardigrade (beruang air)", opts:["Kecoa","Bakteri","Tardigrade (beruang air)","Cacing tanah"] },
  { q:"Spesies burung yang tidak bisa terbang antara lain?", a:"Penguin, emu, kasuari", opts:["Burung unta saja","Penguin saja","Penguin, emu, kasuari","Flamingo"] },
  { q:"Komodo adalah reptil terbesar di dunia, panjangnya bisa mencapai?", a:"3 meter", opts:["1,5 meter","2 meter","3 meter","4 meter"] },
  { q:"Hewan yang memiliki mulut di bagian tengah badan (bukan di kepala) adalah?", a:"Bintang laut", opts:["Ubur-ubur","Bintang laut","Cacing laut","Anemon"] },

  // ════════════════════════════════
  //   🏆 REKOR DUNIA
  // ════════════════════════════════
  { q:"Gedung tertinggi di dunia, Burj Khalifa, tingginya sekitar?", a:"828 meter", opts:["600 meter","700 meter","828 meter","900 meter"] },
  { q:"Pelari 100 meter tercepat di dunia adalah?", a:"Usain Bolt", opts:["Tyson Gay","Asafa Powell","Usain Bolt","Yohan Blake"] },
  { q:"Rekor dunia lari 100 meter oleh Usain Bolt adalah?", a:"9,58 detik", opts:["9,69 detik","9,58 detik","9,72 detik","9,81 detik"] },
  { q:"Pendaki pertama yang mencapai puncak Everest adalah?", a:"Edmund Hillary & Tenzing Norgay", opts:["Reinhold Messner","Edmund Hillary & Tenzing Norgay","George Mallory","Peter Habeler"] },
  { q:"Manusia pertama yang pergi ke luar angkasa adalah?", a:"Yuri Gagarin", opts:["Alan Shepard","John Glenn","Yuri Gagarin","Buzz Aldrin"] },
  { q:"Rekor dunia makan hot dog terbanyak dalam 10 menit dipegang oleh?", a:"Joey Chestnut", opts:["Kobayashi","Matt Stonie","Joey Chestnut","Takeru Kobayashi"] },
  { q:"Film terlaris sepanjang masa (box office) adalah?", a:"Avatar (2009)", opts:["Avengers: Endgame","Titanic","Avatar (2009)","Star Wars: The Force Awakens"] },
  { q:"Buku terlaris di dunia sepanjang masa adalah?", a:"Alkitab", opts:["Harry Potter","Don Quixote","Alkitab","Quotations from Mao Tse-tung"] },
  { q:"Negara dengan angka harapan hidup tertinggi adalah?", a:"Jepang", opts:["Swiss","Singapura","Hong Kong","Jepang"] },
  { q:"Pria terkaya di dunia (2024) adalah?", a:"Elon Musk", opts:["Jeff Bezos","Bill Gates","Bernard Arnault","Elon Musk"] },

  // ════════════════════════════════
  //   🌦️ CUACA & IKLIM
  // ════════════════════════════════
  { q:"Skala yang digunakan untuk mengukur kecepatan angin adalah?", a:"Skala Beaufort", opts:["Skala Richter","Skala Beaufort","Skala Fujita","Skala Saffir-Simpson"] },
  { q:"Awan yang paling tinggi di atmosfer adalah?", a:"Cirrus", opts:["Cumulus","Stratus","Nimbus","Cirrus"] },
  { q:"Fenomena hujan es disebut?", a:"Hujan hail/es batu", opts:["Salju","Hujan hail/es batu","Embun beku","Frost"] },
  { q:"Negara dengan curah hujan tertinggi di dunia adalah?", a:"Kolombia", opts:["Indonesia","Brasil","Kolombia","India"] },
  { q:"Angin yang bertiup dari darat ke laut disebut?", a:"Angin darat", opts:["Angin laut","Angin darat","Angin musim","Angin pasat"] },
  { q:"Lapisan atmosfer yang melindungi bumi dari radiasi UV adalah?", a:"Lapisan ozon di stratosfer", opts:["Troposfer","Mesosfer","Lapisan ozon di stratosfer","Termosfer"] },
  { q:"Musim panas di belahan bumi utara terjadi pada bulan?", a:"Juni - Agustus", opts:["Desember - Februari","Maret - Mei","Juni - Agustus","September - November"] },
  { q:"Angin puting beliung disebut juga?", a:"Tornado", opts:["Topan","Siklon","Tornado","Badai tropis"] },
  { q:"Indonesia memiliki iklim?", a:"Tropis", opts:["Subtropis","Tropis","Sedang","Dingin"] },
  { q:"Hujan asam disebabkan oleh polutan utama?", a:"SO₂ dan NOₓ", opts:["CO₂ dan CH₄","SO₂ dan NOₓ","O₃ dan CO","H₂S dan NH₃"] },

  // ════════════════════════════════
  //   🧪 KIMIA & FISIKA TAMBAHAN
  // ════════════════════════════════
  { q:"Reaksi inti yang terjadi di matahari adalah?", a:"Fusi nuklir", opts:["Fisi nuklir","Fusi nuklir","Reaksi kimia biasa","Oksidasi"] },
  { q:"Titik leleh es pada tekanan 1 atm adalah?", a:"0°C", opts:["-10°C","0°C","4°C","10°C"] },
  { q:"Simbol kimia untuk timbal adalah?", a:"Pb", opts:["Ti","Sn","Pb","Bi"] },
  { q:"Prinsip ketidakpastian dikemukakan oleh?", a:"Werner Heisenberg", opts:["Niels Bohr","Werner Heisenberg","Max Planck","Erwin Schrödinger"] },
  { q:"Warna nyala api natrium adalah?", a:"Kuning/jingga", opts:["Merah","Biru","Kuning/jingga","Hijau"] },
  { q:"Reaksi antara asam dan basa menghasilkan?", a:"Garam dan air", opts:["Gas dan air","Garam dan air","Asam lemah","Basa lemah"] },
  { q:"Simbol kimia untuk kalium adalah?", a:"K", opts:["Ka","Ke","K","Km"] },
  { q:"Karbondioksida padat disebut?", a:"Dry ice / es kering", opts:["Salju CO₂","Dry ice / es kering","Batu es","Kristal karbon"] },
  { q:"Proses penguraian senyawa dengan arus listrik disebut?", a:"Elektrolisis", opts:["Elektrolisis","Hidrolisis","Fotolisis","Pirolisis"] },
  { q:"Atom terdiri dari inti dan?", a:"Elektron yang mengelilinginya", opts:["Proton saja","Neutron saja","Elektron yang mengelilinginya","Quark"] },

  // ════════════════════════════════
  //   🎯 PENGETAHUAN POPULER
  // ════════════════════════════════
  { q:"Warna bendera Indonesia adalah?", a:"Merah dan putih", opts:["Merah, putih, biru","Merah dan putih","Merah, kuning, hijau","Merah, putih, hijau"] },
  { q:"Semboyan negara Indonesia adalah?", a:"Bhinneka Tunggal Ika", opts:["Garuda Pancasila","Bhinneka Tunggal Ika","Maju Tak Gentar","Satu Nusa Satu Bangsa"] },
  { q:"'Bhinneka Tunggal Ika' artinya?", a:"Berbeda-beda tetapi tetap satu", opts:["Satu untuk semua","Berbeda-beda tetapi tetap satu","Bersatu kita teguh","Dari sabang sampai merauke"] },
  { q:"Negara dengan bendera paling tua di dunia adalah?", a:"Denmark", opts:["Inggris","Prancis","Denmark","Swiss"] },
  { q:"Bahasa resmi PBB salah satunya adalah?", a:"Arab, China, Inggris, Prancis, Rusia, Spanyol", opts:["Jerman, Jepang, Italia","Arab, China, Inggris, Prancis, Rusia, Spanyol","Portugis, Belanda, Turki","Hindi, Swahili, Bengali"] },
  { q:"Siapa yang menulis 'Art of War' (Seni Perang)?", a:"Sun Tzu", opts:["Konfusius","Sun Tzu","Lao Tzu","Mencius"] },
  { q:"Olimpiade 2024 diadakan di kota?", a:"Paris", opts:["Tokyo","London","Paris","Los Angeles"] },
  { q:"Piala Dunia FIFA 2022 diadakan di negara?", a:"Qatar", opts:["Arab Saudi","Uni Emirat Arab","Qatar","Bahrain"] },
  { q:"Siapa penemu gravitasi yang terinspirasi dari jatuhnya apel?", a:"Isaac Newton", opts:["Galileo Galilei","Isaac Newton","Albert Einstein","Robert Hooke"] },
  { q:"Jumlah sisi pada kubus adalah?", a:"6", opts:["4","5","6","8"] },
  { q:"Jumlah kartu dalam satu deck kartu standar adalah?", a:"52", opts:["48","50","52","54"] },
  { q:"Berapa jumlah lubang pada lapangan golf standar?", a:"18", opts:["9","12","18","24"] },
  { q:"Permainan catur berasal dari negara?", a:"India", opts:["China","Persia","India","Arab"] },
  { q:"'Wikipedia' adalah ensiklopedia yang dapat diedit oleh?", a:"Siapa saja (crowd-sourced)", opts:["Para ahli saja","Staf Wikipedia","Siapa saja (crowd-sourced)","Akademisi"] },
  { q:"Berapa jumlah warna pada bendera pelangi (LGBT Pride)?", a:"6", opts:["5","6","7","8"] },
  { q:"Kalender Masehi dimulai dari peristiwa?", a:"Kelahiran Yesus Kristus", opts:["Berdirinya Roma","Kelahiran Yesus Kristus","Hijrah Nabi Muhammad","Berdirinya Olimpiade"] },
  { q:"Siapa filsuf Yunani yang menjadi guru Alexander Agung?", a:"Aristoteles", opts:["Socrates","Plato","Aristoteles","Pythagoras"] },
  { q:"Hukum pertama Termodinamika berbunyi tentang?", a:"Kekekalan energi", opts:["Entropi","Kekekalan energi","Kesetimbangan termal","Kerja maksimum"] },
  { q:"Istilah 'Big Bang' mengacu pada?", a:"Asal usul alam semesta", opts:["Ledakan bom nuklir","Asal usul alam semesta","Tabrakan galaksi","Letusan bintang"] },
  { q:"Berapa lama waktu yang dibutuhkan cahaya untuk mengelilingi bumi 1x?", a:"0,13 detik", opts:["1 detik","0,5 detik","0,13 detik","2 detik"] },

];

module.exports = TRIVIA_DB;
