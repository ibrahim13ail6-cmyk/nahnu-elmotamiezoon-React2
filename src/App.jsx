import { useState } from 'react';

const pages = [
  ['home', 'الرئيسية', 'index.html'],
  ['botany', 'نبات', 'botany.html'],
  ['animal', 'حيوان زراعي', 'animal.html'],
  ['chemistry', 'كيمياء', 'chemistry.html'],
  ['crops', 'محاصيل', 'crops.html'],
  ['economics', 'اقتصاد', 'economics.html'],
  ['computer', 'حاسب آلي', 'computer.html'],
  ['math', 'رياضة عامة', 'math.html'],
  ['planner', 'تنظيم الوقت', 'planner.html'],
  ['timer', 'مؤقت المذاكرة', 'timer.html'],
  ['leaderboard', 'لوحة الأوائل', 'leaderboard.html'],
  ['challenge', 'التحدي', 'challenge-final.html'],
];

export default function App() {
  const [active, setActive] = useState('home');
  const [frameSrc, setFrameSrc] = useState('/legacy/index.html');
  const [menuOpen, setMenuOpen] = useState(false);
  const go = (page) => {
    setActive(page[0]);
    setFrameSrc(`/legacy/${page[2]}`);
    setMenuOpen(false);
  };
  return <div className="app-shell" dir="rtl">
    <header className="topbar">
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="فتح القائمة">☰</button>
      <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); go(pages[0]); }}>
        <img src="/legacy/assets/images/logo.jpg" alt="شعار نحن المتميزون" />
        <span>نحن المتميزون</span>
      </a>
      <span className="topbar-note">منصة تعليمية — الفرقة الأولى</span>
    </header>
    <div className="layout">
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`} aria-label="التنقل الرئيسي">
        <div className="sidebar-title">أقسام المنصة</div>
        {pages.map(page => <button key={page[0]} className={`nav-item ${active === page[0] ? 'active' : ''}`} onClick={() => go(page)}>{page[1]}</button>)}
        <a className="legacy-link" href="/legacy/README.md" target="_blank" rel="noreferrer">دليل النسخة الأصلية</a>
      </aside>
      <main className="content">
        <iframe key={frameSrc} title="محتوى المنصة" src={frameSrc} className="legacy-frame" />
      </main>
    </div>
  </div>;
}
