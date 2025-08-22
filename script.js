// Mobile nav toggle
const toggleBtn = document.querySelector('.nav-toggle');
const navList = document.querySelector('#nav-list');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true' || false;
    toggleBtn.setAttribute('aria-expanded', !expanded);
    navList.classList.toggle('open');
  });
}

// Scroll spy for active links
const navLinks = Array.from(document.querySelectorAll('.nav-list a[href^="#"]'));
const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const activate = id => { navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`)); };
const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) activate(e.target.id); }); }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });
sections.forEach(s => obs.observe(s));

// Theme toggle (persisted)
const themeBtn = document.getElementById('theme-toggle');
function setTheme(t){ document.documentElement.setAttribute('data-theme', t); try{localStorage.setItem('theme', t)}catch(e){} }
if (themeBtn){ themeBtn.addEventListener('click', ()=>{
  const curr = document.documentElement.getAttribute('data-theme') || 'dark';
  setTheme(curr === 'dark' ? 'light' : 'dark');
});}

// Language toggle (EN/BN) — only affects elements with data-i18n
const i18n = {
  en: {
    brand_name:'Hasibul Badhon',
    nav_about:'About', nav_skills:'Skills', nav_projects:'Projects', nav_experience:'Experience', nav_contact:'Contact', nav_achievements:'Achievements',
    hero_title:'Hi, I'm <span class="accent">Badhon</span> —<br />Jr. Support Engineer at bracIT',
    hero_tag:'I build reliable systems and user-friendly web experiences. Exploring data analysis networking, systems testing, and cloud.<br><br> I'm from Chandpur,Chittagong, Bangladesh and now living in Sector 14, Uttara, Dhaka-1230.',
    cta_projects:'View Projects', cta_cv:'Download CV',
    tk1:'IT Solutions', tk2:'Networking', tk3:'R&D', tk4:'Troubleshooting', tk5:'Security Testing',
    about_h:'About', about_p:'My journey in technology began with curiosity and has evolved into a deep commitment to creating meaningful solutions. With hands-on experience in software development, artificial intelligence, and IT support, I thrive in collaborative environments where innovation meets practical application. My recent thesis project on "Aspect Based Sentiment Analysis Using Deep Learning for Banglish E-commerce Reviews" demonstrates my ability to tackle complex problems using cutting-edge technology. What drives me is the opportunity to bridge the gap between complex technical solutions and real world user needs. Whether I`m troubleshooting network issues, developing AI models, or leading team initiatives, I approach each task with enthusiasm and attention to detail. I believe technology should empower people, and I`m committed to making it accessible and efficient for everyone.',
    about_do_h:'What I do', about_do_1:'Security testing & hardening', about_do_2:'Web apps with HTML/CSS/JS', about_do_3:'Cloud & DevOps basics',
    about_use_h:'What I use', about_use_p:'',
    about_want_h:'What I want', about_want_p:'Roles to grow as a <span class="accent">System Engineer</span> and reliable <span class="accent">Data Analyst</span>.',
    skills_h:'Skills', skill_sec:'Security Testing',
    projects_h:'Projects',
    exp_h:'Experience',
    contact_h:'Contact', contact_p:'Have a role or project in mind? Let`s talk.',
    f_name:'Name', f_email:'Email', f_msg:'Message', f_send:'Send'
  },
  bn: {
    // brand stays Latin to avoid spelling errors
    brand_name:'Hasibul Badhon',
    nav_about:'পরিচিতি', nav_skills:'দক্ষতা', nav_projects:'প্রজেক্ট', nav_experience:'অভিজ্ঞতা', nav_contact:'যোগাযোগ', nav_achievements:'অর্জন',
    hero_title:'হাই, আমি <span class="accent">Badhon</span> —<br />জুনিয়র সাপোর্ট ইঞ্জিনিয়ার, bracIT',
    hero_tag:'আমি নির্ভরযোগ্য সিস্টেম ও ব্যবহারবান্ধব ওয়েব অভিজ্ঞতা তৈরি করি। নেটওয়ার্কিং, সিকিউরিটি টেস্টিং ও ক্লাউড নিয়ে কাজ করছি।',
    cta_projects:'প্রজেক্ট দেখুন', cta_cv:'সিভি ডাউনলোড',
    tk1:'আইটি সলিউশন', tk2:'নেটওয়ার্কিং', tk3:'আরঅ্যান্ডডি', tk4:'ট্রাবলশুটিং', tk5:'সিকিউরিটি টেস্টিং',
    about_h:'পরিচিতি', about_p:'প্রযুক্তিতে আমার যাত্রা শুরু হয়েছিল কৌতূহল থেকে এবং এখন তা অর্থপূর্ণ সমাধান তৈরির প্রতি গভীর প্রতিশ্রুতিতে পরিণত হয়েছে। সফটওয়্যার ডেভেলপমেন্ট, কৃত্রিম বুদ্ধিমত্তা এবং আইটি সহায়তায় বাস্তব অভিজ্ঞতার সাথে সাথে, আমি সহযোগিতামূলক পরিবেশে সাফল্য লাভ করি যেখানে উদ্ভাবন ব্যবহারিক প্রয়োগের সাথে মিলিত হয়। "অ্যাসপেক্ট বেসড সেন্টিমেন্ট অ্যানালাইসিস ইউজিং ডিপ লার্নিং ফর বাংলিশ ই-কমার্স রিভিউ" শীর্ষক আমার সাম্প্রতিক থিসিস প্রকল্পটি অত্যাধুনিক প্রযুক্তি ব্যবহার করে জটিল সমস্যাগুলি মোকাবেলা করার আমার দক্ষতা প্রদর্শন করে। জটিল প্রযুক্তিগত সমাধান এবং বাস্তব বিশ্বের ব্যবহারকারীর চাহিদার মধ্যে ব্যবধান পূরণ করার সুযোগ আমাকে যা অনুপ্রাণিত করে তা হল। আমি নেটওয়ার্ক সমস্যা সমাধান করছি, এআই মডেল তৈরি করছি, অথবা দলীয় উদ্যোগের নেতৃত্ব দিচ্ছি, আমি প্রতিটি কাজ উৎসাহ এবং মনোযোগের সাথে বিস্তারিতভাবে করি। আমি বিশ্বাস করি প্রযুক্তির উচিত মানুষকে ক্ষমতায়িত করা, এবং আমি এটিকে সকলের জন্য অ্যাক্সেসযোগ্য এবং দক্ষ করে তুলতে প্রতিশ্রুতিবদ্ধ।',
    about_do_h:'আমি যা করি', about_do_1:'সিকিউরিটি টেস্টিং ও হার্ডেনিং', about_do_2:'HTML/CSS/JS দিয়ে ওয়েব অ্যাপ', about_do_3:'ক্লাউড ও ডেভঅপস বেসিকস',
    about_use_h:'আমি যা ব্যবহার করি', about_use_p:'',
    about_want_h:'আমার লক্ষ্য', about_want_p:'একজন সিস্টেম ইঞ্জিনিয়ার এবং নির্ভরযোগ্য ডেটা বিশ্লেষক হিসেবে ভূমিকা পালন করতে হবে।',
    skills_h:'দক্ষতা', skill_sec:'সিকিউরিটি টেস্টিং',
    projects_h:'প্রজেক্ট',
    exp_h:'অভিজ্ঞতা',
    contact_h:'যোগাযোগ', contact_p:'কোনো রোল বা প্রজেক্ট আছে? কথা বলি।',
    f_name:'নাম', f_email:'ইমেইল', f_msg:'বার্তা', f_send:'পাঠান'
  }
};
function applyLang(lang){
  document.documentElement.setAttribute('lang', lang);
  try{localStorage.setItem('lang', lang)}catch(e){}
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const val = (i18n[lang]||{})[key];
    if (typeof val === 'string') el.innerHTML = val; // allow inline HTML in some keys
  });
}
const langBtn = document.getElementById('lang-toggle');
if (langBtn){
  langBtn.addEventListener('click', ()=>{
    const curr = document.documentElement.getAttribute('lang') || 'en';
    applyLang(curr === 'en' ? 'bn' : 'en');
  });
  applyLang(localStorage.getItem('lang') || 'en');
}

// Current year
const y = document.getElementById('y'); if (y) y.textContent = new Date().getFullYear();

// Respect reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('*').forEach(el => el.style.scrollBehavior = 'auto');
}

// Smooth ticker loop
const track = document.getElementById('ticker');
if (track){ track.innerHTML = track.innerHTML + track.innerHTML; }

// Web3Forms AJAX submission — show alert on success, no redirect
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  // Guard: remove any leftover hidden redirect field from older versions
  const leftoverRedirect = contactForm.querySelector('input[name="redirect"]');
  if (leftoverRedirect) leftoverRedirect.remove();

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // never navigate away
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const original = submitBtn ? submitBtn.textContent : '';
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }

    try {
      const fd = new FormData(contactForm);
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: fd,
        headers: { 'Accept': 'application/json' }
      });
      const data = await res.json().catch(()=>({}));
      if (res.ok && (data.success !== false)) {
        alert('Message Sent. Thank You!');
        contactForm.reset();
      } else {
        alert(data.message || 'Something went wrong. Please email me directly.');
      }
    } catch (err) {
      alert('Network error. Please email me directly.');
      console.error(err);
    } finally {
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = original || 'Send'; }
    }
  });
}