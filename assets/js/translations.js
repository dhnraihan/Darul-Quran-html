 // Simple i18n dictionary (extend as needed)
    const translations = {
        en: {
        'nav.home': 'Home',
        'nav.courses': 'Courses',
        'nav.get_started': 'Get Started',
        'badge.modern_platform': 'Modern online learning platform',

        'form.title': 'Learn the Quran correctly online',
        'form.subtitle': 'Daarul Quran has arranged a free assessment class. Fill out the form below to join our trial class, in shaa Allah.',
        'form.name_label': 'Your Name',
        'form.name_placeholder': 'Enter your full name',
        'form.phone_label': 'Mobile Number',
        'form.submit': 'Free Trial Class',
        },
        bn: {
        'nav.home': 'হোম',
        'nav.courses': 'কোর্সসমূহ',
        'nav.get_started': 'শুরু করুন',
        'badge.modern_platform': 'আধুনিক অনলাইন শিক্ষা প্ল্যাটফর্ম',

        'form.title': 'অনলাইনে সহিহ কুরআন শিক্ষা',
        'form.subtitle': 'Daarul Quran আপনাদের জন্য ফ্রি মূল্যায়ন ক্লাস এর ব্যবস্থা রেখেছে নিচের ফর্মটি পূরণ করে আপনি আমাদের মূল্যায়ন ক্লাসে অংশগ্রহণ করতে পারেন ইনশাআল্লাহ',
        'form.name_label': 'আপনার নাম',
        'form.name_placeholder': 'আপনার পূর্ণ নাম লিখুন',
        'form.phone_label': 'মোবাইল নম্বর',
        'form.submit': 'ফ্রি ট্রায়াল ক্লাস',
        }
    };

    function setLang(lang) {
        document.documentElement.setAttribute('lang', lang === 'bn' ? 'bn' : 'en');
        document.documentElement.setAttribute('data-lang', lang);
        localStorage.setItem('dq_lang', lang);

        // text content nodes
        document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = translations[lang]?.[key];
        if (val !== undefined) {
            el.textContent = val;
        }
        });

        // placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const val = translations[lang]?.[key];
        if (val !== undefined) {
            el.setAttribute('placeholder', val);
        }
        });

        // Update toggle button labels
        const desktopBtn = document.getElementById('langToggle');
        const mobileBtn  = document.getElementById('langToggleMobile');
        if (desktopBtn) desktopBtn.textContent = (lang === 'bn') ? 'EN' : 'বাংলা';
        if (mobileBtn)  mobileBtn.textContent  = (lang === 'bn') ? 'Switch to English' : 'বাংলায় দেখুন';
    }

    function toggleLang() {
        const current = document.documentElement.getAttribute('data-lang') || 'bn';
        const next = current === 'bn' ? 'en' : 'bn';
        setLang(next);
    }

    // init
    document.addEventListener('DOMContentLoaded', () => {
        const saved = localStorage.getItem('dq_lang') || 'bn';
        setLang(saved);
        document.getElementById('langToggle')?.addEventListener('click', toggleLang);
        document.getElementById('langToggleMobile')?.addEventListener('click', toggleLang);
    });