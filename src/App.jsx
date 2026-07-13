import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Sun, Moon, Globe, Phone, Mail, MapPin, 
  Calendar, ArrowRight, Briefcase, GraduationCap, Award, 
  MessageSquare, Settings, Users, FileText, Image as ImageIcon,
  Plus, Edit, Trash2, Check, QrCode, BookOpen, ExternalLink, Heart, CheckCircle2
} from 'lucide-react';

const initialSchedule = [
  { id: 1, date: '12 Juli 2026', event: 'Seminar Digital & Kepemimpinan', location: 'Yogyakarta' },
  { id: 2, date: '20 Juli 2026', event: 'Sosialisasi Aplikasi Bank Sampah', location: 'Klaten' },
  { id: 3, date: '05 Agustus 2026', event: 'Gerakan Resik-Resik Masjid Akbar', location: 'Sleman, Jogja' },
];

const blogPosts = [
  { id: 1, title: 'Inovasi Digital Bank Sampah untuk Kemandirian Desa', date: '10 Juli 2026', excerpt: 'Bagaimana teknologi cloud Google Apps Script dapat dioptimalkan secara gratis untuk kemajuan lingkungan desa.' },
  { id: 2, title: 'Pentingnya Menata Hati di Tengah Perubahan Zaman', date: '15 Juni 2026', excerpt: 'Menghadapi disrupsi dengan ketenangan batin, kebersihan jiwa, dan pikiran yang senantiasa jernih.' },
  { id: 3, title: 'Menjaga Rumah Allah Melalui Resik-Resik Masjid', date: '28 Mei 2026', excerpt: 'Aksi nyata kerelawanan sosial untuk merawat kebersihan tempat ibadah demi kenyamanan jamaah.' },
];

const galleryImages = [
  {
    src: "1.jpg",
    title: "Panduan Lengkap Jualan Online Maksimal di Instagram, Facebook, TikTok & WhatsApp"
  },
  {
    src: "1.png",
    title: "Panduan Lengkap Membuat Website Pakai Blogger Sampai Bisa Berdomain"
  },
  {
    src: "ChatGPT Image 5 Jun 2026, 19.42.49.png",
    title: "Buku Panduan Konten Kreator Untuk Pemula"
  },
  {
    src: "ChatGPT Image 24 Mei 2026, 14.00.08 - Salin(1).jpg",
    title: "Panduan Lengkap Cara Membuat Toko Online di Blogspot"
  }
];

const booksList = [
  {
    id: "buku-lalu-depan",
    title: "Masa Lalu Masa Depan",
    subtitle: "Perjalanan Hidup Penulis Latif Safruddin",
    description: "Kisah inspiratif perjalanan hijrah rohani dan perjuangan kehidupan dari Dusun Kelet Jepara, Bandung, Solo, Klaten, hingga meraih kesuksesan di Sleman Jogja.",
    cover: "ChatGPT Image 7 Mei 2026, 08.04.12.png",
    tag: "Autobiografi & Motivasi",
    quote: "Dari dusun kecil, langkah panjang menuju ridha-Nya."
  },
  {
    id: "buku-bpd-mengabdi",
    title: "15 Tahun Sebagai BPD",
    subtitle: "Mengabdi di Desa Sumberejo (Tahun 2012-2026)",
    description: "Catatan perjalanan nyata penuh dedikasi, aspirasi, dan kontribusi nyata dalam melayani masyarakat desa serta membangun kemandirian lokal.",
    cover: "WhatsApp Image 2026-05-07 at 06.36.09.jpeg",
    tag: "Pemberdayaan Masyarakat",
    quote: "Mengabdi bukan untuk dikenal, tapi untuk memberi manfaat yang nyata."
  },
  {
    id: "buku-dapur-barokah",
    title: "Dapur Barokah Sleman",
    subtitle: "Bisnis Kuliner Online Yang Menjanjikan",
    description: "Kisah nyata luar biasa ketangguhan, kegigihan, dan keberkahan berbisnis online dari nol (mantan tukang parkir) hingga memiliki kerajaan kuliner yang berkah.",
    cover: "ChatGPT Image 11 Mei 2026, 10.03.21.png",
    tag: "Kewirausahaan & Kuliner",
    quote: "Setiap perjalanan hebat selalu dimulai dari sebuah cerita."
  },
  {
    id: "buku-noto-ati",
    title: "Noto Ati Resiki Ati",
    subtitle: "Menata Hati, Membersihkan Jiwa di Era Modern",
    description: "Panduan praktis spiritual bagi generasi modern untuk memurnikan niat, menghindari penyakit hati (riya, hasad, takabur) demi hidup yang damai lahir batin.",
    cover: "WhatsApp Image 2026-05-07 at 06.01.06.jpeg",
    tag: "Spiritual & Refleksi Diri",
    quote: "Hati yang bersih adalah awal dari hidup yang tenang."
  }
];

const digitalProducts = [
  {
    id: "web-masjid",
    title: "Website Gerakan Resik-Resik Masjid",
    subtitle: "Pemberdayaan Rumah Ibadah Bersih",
    description: "Portal digital kerelawanan sosial untuk merencanakan, mendanai, dan menggerakkan komunitas peduli kebersihan masjid.",
    link: "http://resikresikmasjid.my.id/",
    btnText: "Kunjungi Website Gerakan",
    tag: "Social Impact Movement"
  },
  {
    id: "app-banksampah",
    title: "Aplikasi Desa Bank Sampah",
    subtitle: "Sistem Informasi Manajemen Sampah Mandiri",
    description: "Sistem digital cerdas terintegrasi Google Apps Script & Spreadsheet untuk mengelola tabungan sampah warga secara real-time.",
    link: "https://script.google.com/macros/s/AKfycbztxfwBN-mHbW3kOTpnBhxFSSValpEWJBl7QSW0_UQBUbH43M21rCiM1Jsx_By_geLT/exec",
    btnText: "Buka Aplikasi Web",
    tag: "Eco-Tech Innovation"
  }
];

const translations = {
  id: {
    nav: { home: 'Beranda', profile: 'Profil', portfolio: 'Karya & Proyek', blog: 'Artikel', gallery: 'Galeri Panduan', schedule: 'Jadwal', contact: 'Hubungi' },
    hero: { 
      greeting: 'Halo, Saya', 
      tagline: 'Membangun Inspirasi, Edukasi, dan Perubahan Positif', 
      desc: '"Berbagi gagasan, karya nyata, dan pengabdian demi kesejahteraan masyarakat."',
      cta: 'Lihat Karya Buku',
      wa: 'Hubungi via WhatsApp'
    },
    profile: {
      title: 'Profil Lengkap',
      bio: 'Biodata Singkat',
      bioText: 'Saya adalah seorang profesional, penulis, dan praktisi pemberdayaan masyarakat yang berdedikasi tinggi pada literasi digital, wirausaha kuliner berkah, dan pembangunan berkelanjutan di tingkat desa.',
      edu: 'Pendidikan Terakhir',
      exp: 'Pengalaman & Bisnis',
      vision: 'Prinsip Hidup'
    },
    schedule: { title: 'Jadwal Kegiatan Mendatang', date: 'Tanggal', event: 'Kegiatan', location: 'Lokasi' },
    contact: { title: 'Mari Berdiskusi & Berkolaborasi', name: 'Nama Lengkap Anda', msg: 'Pesan / Maksud Kemitraan', send: 'Kirim Langsung Ke WhatsApp' },
    footer: { rights: 'Hak Cipta Dilindungi Undang-Undang.' }
  },
  en: {
    nav: { home: 'Home', profile: 'Profile', portfolio: 'Works & Apps', blog: 'Articles', gallery: 'Guide Gallery', schedule: 'Schedule', contact: 'Contact' },
    hero: { 
      greeting: 'Hello, I am', 
      tagline: 'Building Inspiration, Education, and Positive Change', 
      desc: '"Sharing authentic ideas, literary works, and dedication for community growth."',
      cta: 'Explore My Books',
      wa: 'Chat via WhatsApp'
    },
    profile: {
      title: 'Full Biography',
      bio: 'Short Summary',
      bioText: 'I am a highly dedicated professional, author, and community empowerment practitioner with a focus on digital literacy, blessings-oriented culinary business, and sustainable development.',
      edu: 'Education Journey',
      exp: 'Experience & Ventures',
      vision: 'Life Principles'
    },
    schedule: { title: 'Upcoming Events Schedule', date: 'Date', event: 'Activity', location: 'Location' },
    contact: { title: 'Let\'s Collaborate', name: 'Your Full Name', msg: 'Your Proposal / Message', send: 'Send Directly to WhatsApp' },
    footer: { rights: 'All Rights Reserved.' }
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lang, setLang] = useState('id');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [schedules, setSchedules] = useState(initialSchedule);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const t = translations[lang];
  const phoneNumber = "628551236277"; 

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const message = e.target.message.value;
    const text = `Halo Pak Latif, saya ${name}. ${message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const navItems = ['home', 'profile', 'portfolio', 'blog', 'gallery', 'schedule', 'contact'];

  const renderHeader = () => (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <img 
              src="logo-latif.png" 
              alt="Latif Logo" 
              className="w-10 h-10 rounded-lg object-cover shadow-md border border-gray-200 dark:border-slate-800" 
            />
            <span className="font-bold text-xl tracking-tight text-gray-950 dark:text-white uppercase">LATIF SAFRUDDIN</span>
          </div>
          
          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex space-x-7">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`${
                  activeTab === item
                    ? 'text-blue-600 dark:text-blue-400 font-bold border-b-2 border-blue-600 dark:border-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium'
                } capitalize transition-all duration-200 text-sm pb-1`}
              >
                {t.nav[item]}
              </button>
            ))}
          </nav>

          {/* Quick Access Control Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button onClick={() => setLang(lang === 'id' ? 'en' : 'id')} className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider">
              <Globe size={16} /> {lang}
            </button>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full shadow-inner transition-transform hover:rotate-45">
              {isDarkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile responsive navigation toggles */}
          <div className="flex lg:hidden items-center space-x-2">
            <button onClick={() => setLang(lang === 'id' ? 'en' : 'id')} className="p-2 text-sm font-bold text-gray-700 dark:text-gray-250">
              {lang.toUpperCase()}
            </button>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 text-gray-600 dark:text-gray-300">
              {isDarkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation List */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 transition-all">
          <div className="px-3 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => { setActiveTab(item); setIsMenuOpen(false); }}
                className={`block w-full text-left px-4 py-2.5 rounded-lg text-base font-semibold ${
                  activeTab === item 
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-250 hover:bg-gray-100 dark:hover:bg-slate-800'
                } capitalize`}
              >
                {t.nav[item]}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );

  const renderHome = () => (
    <div className="animate-fadeIn">
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 flex items-center justify-center min-h-[85vh] overflow-hidden">
        {/* Visual Soft Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/70 to-white dark:from-slate-950 dark:to-slate-900 -z-10"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Bio Copy */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/75 text-blue-800 dark:text-blue-300 font-bold text-sm">
              🌟 GERAKAN NOTO ATI RESIKI ATI
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 dark:text-white leading-tight">
              {t.hero.greeting} <span className="text-blue-600 dark:text-blue-400 block lg:inline">Latif Safruddin</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium">
              {t.hero.tagline}
            </p>
            <p className="text-md sm:text-lg text-gray-500 dark:text-gray-400 italic border-l-4 border-blue-500 pl-4 py-1">
              {t.hero.desc}
            </p>
            
            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button 
                onClick={() => setActiveTab('portfolio')}
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2.5 w-full sm:w-auto justify-center text-sm"
              >
                {t.hero.cta} <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => window.open(`https://wa.me/${phoneNumber}`, '_blank')}
                className="px-8 py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold transition-all flex items-center gap-2.5 w-full sm:w-auto justify-center shadow-lg shadow-green-500/25 text-sm"
              >
                <MessageSquare size={18} /> {t.hero.wa}
              </button>
              <a 
                href="https://linktr.ee/notoatiresikiati" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all flex items-center gap-2.5 w-full sm:w-auto justify-center shadow-lg shadow-emerald-500/25 text-sm"
              >
                <Globe size={18} /> Linktree Utama
              </a>
            </div>
          </div>
          
          {/* Main Visual Frame for the Sketch Profile Cover */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl rotate-3 scale-105 opacity-10 dark:opacity-30 blur-md"></div>
              
              {/* Profile Image Frame */}
              <div className="absolute inset-0 bg-slate-950 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                <img 
                  src="WhatsApp Image 2026-05-11 at 09.52.07.jpeg" 
                  alt="Latif Safruddin" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Status Badges */}
              <div className="absolute -bottom-5 -left-5 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-gray-150 dark:border-slate-700 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-950/50 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Award size={22} />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-gray-950 dark:text-white">Founder</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">MediaDesa & Dapur Barokah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Quick Portfolio Highlights */}
      <section className="py-16 bg-white dark:bg-slate-900 border-y border-gray-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-10">Karya Buku Unggulan Terbaru</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {booksList.slice(0, 4).map((book) => (
              <div 
                key={book.id} 
                className="bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between border border-gray-150 dark:border-slate-700"
                onClick={() => { setSelectedBook(book); setActiveTab('portfolio'); }}
              >
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4 shadow-sm border border-gray-200 dark:border-slate-700">
                  <img src={book.cover} alt={book.title} className="w-full h-full object-cover hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{book.tag}</span>
                  <h3 className="font-bold text-base text-gray-950 dark:text-white mt-1 line-clamp-1">{book.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">{book.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const renderProfile = () => (
    <div className="max-w-4xl mx-auto px-4 py-12 lg:py-16 animate-fadeIn">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-950 dark:text-white tracking-tight">{t.profile.title}</h2>
      
      <div className="space-y-10">
        {/* Bio Card */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-150 dark:border-slate-700">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-xl"><CheckCircle2 size={24} /></div>
            <h3 className="text-2xl font-bold text-gray-950 dark:text-white">{t.profile.bio}</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            {t.profile.bioText}
          </p>
        </div>

        {/* Parallel Grid: Education & Experience */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education timeline */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-150 dark:border-slate-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-xl"><GraduationCap size={24} /></div>
              <h3 className="text-xl font-bold text-gray-950 dark:text-white">{t.profile.edu}</h3>
            </div>
            <ul className="space-y-6 relative border-l-2 border-indigo-100 dark:border-slate-700 ml-4">
              <li className="pl-6 relative">
                <span className="absolute w-3.5 h-3.5 bg-indigo-600 rounded-full -left-[8px] top-1.5 ring-4 ring-white dark:ring-slate-800"></span>
                <h4 className="font-extrabold text-gray-950 dark:text-white text-md">S1 Ekonomi Manajemen</h4>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mt-1">Universitas Muhammadiyah Surakarta</p>
                <p className="text-xs text-gray-500 mt-1">(1998 - 2003)</p>
              </li>
            </ul>
          </div>

          {/* Core Business & Experience */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-150 dark:border-slate-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-xl"><Briefcase size={24} /></div>
              <h3 className="text-xl font-bold text-gray-950 dark:text-white">{t.profile.exp}</h3>
            </div>
            <ul className="space-y-6 relative border-l-2 border-emerald-100 dark:border-slate-700 ml-4">
              <li className="pl-6 relative">
                <span className="absolute w-3.5 h-3.5 bg-emerald-600 rounded-full -left-[8px] top-1.5 ring-4 ring-white dark:ring-slate-800"></span>
                <h4 className="font-extrabold text-gray-950 dark:text-white text-md">Owner PT Webdigital Marketing</h4>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-bold mt-1">2023 - Sekarang</p>
              </li>
              <li className="pl-6 relative">
                <span className="absolute w-3.5 h-3.5 bg-emerald-500 rounded-full -left-[8px] top-1.5 ring-4 ring-white dark:ring-slate-800"></span>
                <h4 className="font-extrabold text-gray-950 dark:text-white text-md">Owner Dapur Barokah Sleman</h4>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-bold mt-1">2025 - Sekarang</p>
              </li>
              <li className="pl-6 relative">
                <span className="absolute w-3.5 h-3.5 bg-emerald-400 rounded-full -left-[8px] top-1.5 ring-4 ring-white dark:ring-slate-800"></span>
                <h4 className="font-extrabold text-gray-950 dark:text-white text-md">Pendiri MediaDesaOnline</h4>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-bold mt-1">2024 - Sekarang</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Life Mission Box */}
        <div className="bg-gradient-to-tr from-blue-600 to-indigo-700 p-8 rounded-2xl text-white shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Heart size={26} className="fill-white/20" />
            <h3 className="text-2xl font-bold">Visi & Dedikasi Sosial</h3>
          </div>
          <p className="text-lg opacity-90 leading-relaxed italic">
            "Mengembangkan dan memberdayakan masyarakat desa secara mandiri melalui inisiatif ekosistem digital, literasi kewirausahaan kuliner yang barokah, serta senantiasa mengutamakan gerakan kebersihan spiritual Noto Ati Resiki Ati."
          </p>
        </div>
      </div>
    </div>
  );

  const renderPortfolio = () => (
    <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16 animate-fadeIn">
      
      {/* SECTION 1: KARYA BUKU UTAMA */}
      <div className="mb-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Buku Best-Seller</span>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-2">Karya Buku Latif Safruddin</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Kumpulan goresan tinta kisah inspiratif, pengalaman kepemimpinan desa, serta refleksi kebersihan hati.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {booksList.map((book) => (
            <div 
              key={book.id} 
              className={`bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                selectedBook?.id === book.id 
                ? 'border-blue-500 ring-4 ring-blue-500/10 shadow-xl' 
                : 'border-gray-150 dark:border-slate-700 hover:shadow-lg'
              }`}
            >
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 flex justify-center items-center aspect-[3/4] relative group">
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className="max-h-full rounded-lg shadow-xl group-hover:scale-[1.03] transition-transform duration-300" 
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {book.tag}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-lg text-gray-950 dark:text-white leading-tight line-clamp-1">{book.title}</h3>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-1">{book.subtitle}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 line-clamp-3 leading-relaxed">{book.description}</p>
                </div>
                
                <div className="mt-5 pt-4 border-t border-gray-100 dark:border-slate-700">
                  <p className="text-xs italic text-blue-600 dark:text-blue-400 line-clamp-2">"{book.quote}"</p>
                  <button 
                    onClick={() => {
                      const text = `Halo Pak Latif, saya tertarik memesan atau berdiskusi tentang buku "${book.title}".`;
                      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
                    }}
                    className="w-full mt-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 dark:bg-slate-700 dark:hover:bg-slate-650 text-blue-700 dark:text-blue-300 font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <BookOpen size={14} /> Pesan Buku / Diskusi
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: DIGITAL PRODUCTS / APLIKASI WEB */}
      <div className="pt-12 border-t border-gray-200 dark:border-slate-800">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Inovasi Teknologi & Sosial</span>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-2">Sistem Aplikasi & Gerakan Sosial</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Daftar produk teknologi serta sistem berbasis web untuk kemajuan dan kemakmuran warga.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {digitalProducts.map((p) => (
            <div key={p.id} className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl border border-gray-150 dark:border-slate-750 flex flex-col justify-between hover:shadow-xl transition-all shadow-sm">
              <div>
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full uppercase tracking-wider">
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-extrabold text-xl text-gray-950 dark:text-white mt-4">{p.title}</h3>
                <h4 className="text-sm text-gray-500 dark:text-gray-400 font-semibold mt-1">{p.subtitle}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">{p.description}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 dark:border-slate-700">
                <a 
                  href={p.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/10"
                >
                  {p.btnText} <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBlog = () => (
    <div className="max-w-4xl mx-auto px-4 py-12 lg:py-16 animate-fadeIn">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-950 dark:text-white tracking-tight">{t.nav.blog} & Berita Terbaru</h2>
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-150 dark:border-slate-700 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="md:w-1/3 h-44 md:h-auto bg-gray-200 dark:bg-slate-700 rounded-xl overflow-hidden shrink-0">
               <img src={`https://images.unsplash.com/photo-145${post.id}000000000-000000000000?auto=format&fit=crop&q=80&w=600`} alt="Blog Cover" className="w-full h-full object-cover" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600"}/>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{post.date}</span>
                <h3 className="text-xl font-bold text-gray-950 dark:text-white mt-1 hover:text-blue-600 transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">{post.excerpt}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-50 dark:border-slate-700">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">BACA SELENGKAPNYA &rarr;</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  const renderGallery = () => (
    <div className="max-w-6xl mx-auto px-4 py-12 lg:py-16 animate-fadeIn">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-extrabold text-gray-950 dark:text-white tracking-tight">{t.nav.gallery}</h2>
        <p className="text-gray-550 dark:text-gray-400 mt-2 text-sm sm:text-base">Koleksi e-book panduan digital lengkap yang dirancang khusus oleh PT Web Digital Marketing untuk membantu kesuksesan bisnis online Anda.</p>
      </div>
      
      {/* Optimized grid layout with aspect-[3/4] for elegant portrait covers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md border border-gray-150 dark:border-slate-800/80 flex flex-col justify-between group transform hover:-translate-y-1 transition-all duration-300">
            {/* Visual Frame */}
            <div className="aspect-[3/4] bg-slate-900 overflow-hidden relative">
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-bold flex items-center gap-1.5 bg-blue-600/90 px-3 py-1.5 rounded-lg shadow-md backdrop-blur-xs">
                  <ImageIcon size={14} /> PT Web Digital
                </span>
              </div>
            </div>
            {/* Text description footer */}
            <div className="p-4 bg-gray-50 dark:bg-slate-800/60 border-t border-gray-100 dark:border-slate-700/55 flex-1 flex flex-col justify-between">
              <h3 className="font-extrabold text-sm text-gray-900 dark:text-white leading-snug line-clamp-2">
                {image.title}
              </h3>
              <button 
                onClick={() => {
                  const text = `Halo Pak Latif, saya tertarik berkonsultasi tentang panduan digital: "${image.title}".`;
                  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
                }}
                className="mt-3 w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                Tanya Detail / Order <ArrowRight size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSchedule = () => (
    <div className="max-w-4xl mx-auto px-4 py-12 lg:py-16 animate-fadeIn">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-950 dark:text-white tracking-tight">{t.schedule.title}</h2>
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-150 dark:border-slate-750 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-slate-900 border-b border-gray-150 dark:border-slate-700">
                <th className="p-5 font-bold text-sm uppercase tracking-wider text-gray-900 dark:text-white">{t.schedule.date}</th>
                <th className="p-5 font-bold text-sm uppercase tracking-wider text-gray-900 dark:text-white">{t.schedule.event}</th>
                <th className="p-5 font-bold text-sm uppercase tracking-wider text-gray-900 dark:text-white">{t.schedule.location}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
              {schedules.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50 dark:hover:bg-slate-850/40 transition-colors">
                  <td className="p-5 text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    <div className="flex items-center gap-2"><Calendar size={16} className="text-blue-500"/> {s.date}</div>
                  </td>
                  <td className="p-5 font-bold text-gray-950 dark:text-white text-md">{s.event}</td>
                  <td className="p-5 text-gray-600 dark:text-gray-350">
                    <div className="flex items-center gap-2"><MapPin size={16} className="text-red-500"/> {s.location}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="max-w-5xl mx-auto px-4 py-12 lg:py-16 animate-fadeIn">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-950 dark:text-white tracking-tight">{t.contact.title}</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-bold mb-6">Saluran Hubungan Resmi</h3>
            <p className="mb-8 opacity-90 leading-relaxed text-sm sm:text-base">Gunakan saluran WhatsApp resmi untuk pengajuan kerjasama bisnis, undangan seminar, bedah buku, ataupun partisipasi sosial.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"><Phone size={20} /></div>
                <div>
                  <p className="text-xs opacity-85 uppercase tracking-wider">WhatsApp Direct</p>
                  <p className="font-bold text-lg">+62 855-1236-277</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"><Mail size={20} /></div>
                <div>
                  <p className="text-xs opacity-85 uppercase tracking-wider">Surat Elektronik</p>
                  <p className="font-bold text-lg">latifsafruddin2222@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"><MapPin size={20} /></div>
                <div>
                  <p className="text-xs opacity-85 uppercase tracking-wider">Domisili Utama</p>
                  <p className="font-bold text-lg">Sleman, D.I. Yogyakarta</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Professional QR Code Badge */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-150 dark:border-slate-700 flex items-center gap-6 shadow-sm">
             <div 
               onClick={() => window.open('https://linktr.ee/notoatiresikiati', '_blank')} 
               className="w-24 h-24 bg-gray-100 dark:bg-white rounded-xl flex items-center justify-center p-2 border border-gray-200 shrink-0 cursor-pointer hover:scale-105 transition-transform"
             >
                <QrCode size={64} className="text-slate-900" />
             </div>
             <div>
               <h4 className="font-bold text-gray-950 dark:text-white">Kartu Kontak & Linktree Digital</h4>
               <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                 Klik atau pindai kode QR untuk mengakses portal resmi <a href="https://linktr.ee/notoatiresikiati" target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 font-bold underline">Linktree Noto Ati Resiki Ati</a> yang memuat seluruh aset informasi sosial kami.
               </p>
             </div>
          </div>
        </div>

        {/* WhatsApp form card container */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-150 dark:border-slate-700">
          <form onSubmit={handleWhatsApp} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t.contact.name}</label>
              <input 
                type="text" 
                name="name"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-950 dark:text-white transition-all font-medium text-sm"
                placeholder="Cth: Budi Pratama"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t.contact.msg}</label>
              <textarea 
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-950 dark:text-white transition-all resize-none font-medium text-sm"
                placeholder="Tuliskan poin rencana diskusi atau keperluan kerja sama..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-extrabold text-md transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/30"
            >
              <MessageSquare size={18} /> {t.contact.send}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const renderAdmin = () => (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-950 dark:text-white flex items-center gap-3">
            <Settings className="text-blue-600 animate-spin-slow" /> Dashboard Admin Persona
          </h2>
          <p className="text-sm text-gray-500">domain utama: latifsafruddin.online | resikresikmasjid.my.id</p>
        </div>
        <button onClick={() => setIsAdmin(false)} className="px-5 py-2.5 bg-gray-200 dark:bg-slate-700 rounded-xl text-sm font-bold hover:bg-gray-300 dark:hover:bg-slate-650 transition-colors">
          Kembali ke Website
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-150 dark:border-slate-700 flex items-center gap-4 shadow-sm">
          <div className="p-4 bg-blue-100 dark:bg-blue-900/40 text-blue-600 rounded-lg"><Users size={24} /></div>
          <div>
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Kunjungan Unik</p>
            <p className="text-2xl font-black text-gray-950 dark:text-white">3,124</p>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-150 dark:border-slate-700 flex items-center gap-4 shadow-sm">
          <div className="p-4 bg-green-100 dark:bg-green-900/40 text-green-600 rounded-lg"><MessageSquare size={24} /></div>
          <div>
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Koneksi WA</p>
            <p className="text-2xl font-black text-gray-950 dark:text-white">142</p>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-150 dark:border-slate-700 flex items-center gap-4 shadow-sm">
          <div className="p-4 bg-purple-100 dark:bg-purple-900/40 text-purple-600 rounded-lg"><BookOpen size={24} /></div>
          <div>
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Katalog Buku</p>
            <p className="text-2xl font-black text-gray-950 dark:text-white">{booksList.length}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-150 dark:border-slate-700 flex items-center gap-4 shadow-sm">
          <div className="p-4 bg-orange-100 dark:bg-orange-900/40 text-orange-600 rounded-lg"><Calendar size={24} /></div>
          <div>
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Agenda Aktif</p>
            <p className="text-2xl font-black text-gray-950 dark:text-white">{schedules.length}</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-150 dark:border-slate-700 p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-extrabold text-gray-950 dark:text-white">Manajemen Agenda & Jadwal Gerakan</h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl flex items-center gap-2 text-xs font-bold hover:bg-blue-700 transition-all">
            <Plus size={16}/> Tambah Agenda Baru
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
             <thead>
                <tr className="border-b border-gray-200 dark:border-slate-700 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <th className="pb-3">Tanggal Pelaksanaan</th>
                  <th className="pb-3">Kegiatan / Seminar</th>
                  <th className="pb-3">Lokasi / Venue</th>
                  <th className="pb-3 text-right">Menu Tindakan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-slate-700 text-sm">
                {schedules.map((s) => (
                  <tr key={s.id} className="text-gray-700 dark:text-gray-200">
                    <td className="py-4 font-semibold">{s.date}</td>
                    <td className="py-4 font-bold text-gray-950 dark:text-white">{s.event}</td>
                    <td className="py-4 font-semibold text-gray-500">{s.location}</td>
                    <td className="py-4 text-right">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-lg mr-2 transition-all"><Edit size={16}/></button>
                      <button className="p-2 text-red-650 hover:bg-red-50 dark:hover:bg-slate-700 rounded-lg transition-all"><Trash2 size={16}/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {isAdmin ? (
        renderAdmin()
      ) : (
        <>
          {renderHeader()}
          <main>
            {activeTab === 'home' && renderHome()}
            {activeTab === 'profile' && renderProfile()}
            {activeTab === 'portfolio' && renderPortfolio()}
            {activeTab === 'blog' && renderBlog()}
            {activeTab === 'gallery' && renderGallery()}
            {activeTab === 'schedule' && renderSchedule()}
            {activeTab === 'contact' && renderContact()}
          </main>

          {/* Core Footer Element */}
          <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 py-10 mt-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="flex justify-center items-center gap-2.5 mb-4">
                <img 
                  src="logo-latif.png" 
                  alt="Latif Logo" 
                  className="w-8 h-8 rounded-md object-cover shadow-sm border border-gray-150 dark:border-slate-800" 
                />
                <span className="font-bold tracking-widest text-sm text-gray-950 dark:text-white">LATIF SAFRUDDIN</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Latif Safruddin. {t.footer.rights} 
              </p>
              
              {/* External Links */}
              <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                <a href="http://resikresikmasjid.my.id/" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">Resik-Resik Masjid</a>
                <a href="https://script.google.com/macros/s/AKfycbztxfwBN-mHbW3kOTpnBhxFSSValpEWJBl7QSW0_UQBUbH43M21rCiM1Jsx_By_geLT/exec" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">Aplikasi Bank Sampah</a>
                <a href="https://linktr.ee/notoatiresikiati" target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline font-bold">Linktree Utama</a>
                <a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a>
              </div>

              {/* Secret Admin Entry door */}
              <button onClick={() => setIsAdmin(true)} className="mt-8 text-[10px] uppercase tracking-widest text-gray-300 dark:text-slate-700 hover:text-gray-500 transition-colors">
                Sistem Admin Login
              </button>
            </div>
          </footer>
        </>
      )}
      
      {/* Dynamic Keyframe Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}
