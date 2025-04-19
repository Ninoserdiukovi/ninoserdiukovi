// Mobile navigation toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - navbar.offsetHeight - 20,
                behavior: 'smooth'
            });
        }
    });
});

// Dark mode
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    const setDarkMode = (enable) => {
        document.body.classList.toggle('dark-mode', enable);
        icon.classList.toggle('fa-sun', enable);
        icon.classList.toggle('fa-moon', !enable);
        themeToggle.style.backgroundColor = enable ? '#ff9a7a' : 'var(--primary-color)';
        localStorage.setItem('darkMode', enable ? 'true' : 'false');
    };

    // Load initial state
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    setDarkMode(darkModeEnabled);

    themeToggle.addEventListener('click', () => {
        setDarkMode(!document.body.classList.contains('dark-mode'));
    });
}

 //cursor წრე//
 const cursorCircle = document.querySelector('.cursor-circle');
 let mouseX = 0, mouseY = 0;
 let circleX = 0, circleY = 0;

 document.addEventListener('mousemove', (e) => {
     mouseX = e.clientX;
     mouseY = e.clientY;
 });

 function animateCursor() {
     circleX += (mouseX - circleX) * 0.1,9; /* 0.1 → ნელა მიჰყვება, შეცვალე 0.2 ან 0.3-ზე თუ გინდა უფრო სწრაფი */
     circleY += (mouseY - circleY) * 0.1,9;

     cursorCircle.style.left = `${circleX}px`;
     cursorCircle.style.top = `${circleY}px`;

     requestAnimationFrame(animateCursor);
 }

 animateCursor();

 document.addEventListener('mousedown', () => {
     cursorCircle.classList.add('click-effect');
     setTimeout(() => {
         cursorCircle.classList.remove('click-effect');
     }, 300);
 });

// Language Toggle
const translations = {
    en: {
        pageTitle: "Nino Serdiukovi - Professional Resume",
        navProfile: "Profile",
        navExperience: "Experience",
        navEducation: "Education",
        navSkills: "Skills",
        navLanguages: "Languages",
        Ninoserdiukovi: "Nino Serdiukovi",
        professionalResume: "Professional Resume",
        phoneNumber: "GE 592 99 16 37",
        location: "Tbilisi",
        profileTitle: "Profile",
        profileText1: "20 years old. I have extensive experience in the service industry, with well-developed communication skills and Situational Awareness with Guests. I am a student with a strong desire to become a member of your team. Effective Punctuality & Responsibility, addressing concerns, and resolving problems are essential. Working in a well-organized and Professional environment with colleagues provides each individual with great opportunities for personal development and the chance to cultivate competent skills",
        experienceTitle: "Experience",
        jobTitle1: "Frontline Security Checker & Guest Screening Safety Assistant, Barista",
        jobTitle2: "Event Steward – UEFA Euro 2024 Qualifiers",
        locationTbilisi: "Tbilisi",
        dateSep2023: "Sep. 2023 - 2025",
        dateNov2023: "Nov 2023",
        skillsTitle: "Skills & Abilities",
        skill1: "Observation Skills & Conflict Resolution",
        skill2: "Strong written and spoken communication",
        skill3: "Attention to Detail",
        skill4: "Decision-Making",
        skill5: "Research Skills",
        skill6: "Team collaboration",
        skill7: "Problem-solving",
        skill8: "Critical thinking",
        skill9: "Multitasking & Emotional Intelligence",
        skill10: "Stress Management & Situational Awareness",
        skill11: "Active Listener",
        educationTitle: "Education",
        degree1: "Wood carving and furniture design",
        degree2: "Interior 3D Visualization Course",
        dateOct2023: "Oct. 2023",
        dateFeb2024: "Feb. 2024",
        degree2Description: "Social media/digital marketing/advertising",
        languagesTitle: "Languages",
        langGeorgian: "Georgian",
        langEnglish: "English",
        langRussian: "Russian",
        langNative: "Native",
        langProficient: "Proficient (B2 level)",
        langIntermediate: "Ability to Communicate (B1 level)",
        rightsReserved: "All rights reserved.",
        backToTop: "Back To Top"
    },
    ka: {
        pageTitle: "ნინო სერდიუკოვი - პროფესიონალური რეზიუმე",
        navProfile: "პროფილი",
        navExperience: "გამოცდილება",
        navEducation: "განათლება",
        navSkills: "უნარები",
        navLanguages: "ენები",
        Ninoserdiukovi: "ნინო სერდიუკოვი",
        professionalResume: "პროფესიონალური რეზიუმე",
        phoneNumber: "GE 592 99 16 37",
        location: "თბილისი",
        profileTitle: "პროფილი",
        profileText1: "20 წლის. მაქვს ვრცელი გამოცდილება სერვისების სფეროში, კარგად განვითარებული კომუნიკაციის უნარები და სიტუაციური ცნობიერება სტუმრებთან. მე ვარ სტუდენტი, რომელსაც აქვს ძლიერი სურვილი გახდეს თქვენი გუნდის წევრი. ეფექტური პუნქტუალურობა და პასუხისმგებლობა, პრობლემების განხილვა და მათი გადაჭრა აუცილებელია. კოლეგებთან ერთად კარგად ორგანიზებულ და პროფესიულ გარემოში მუშაობა იძლევა თითოეულ ინდივიდუალურ შესაძლებლობას პიროვნული განვითარებისათვის და კომპეტენტური უნარების გაღრმავებისთვის.",
        experienceTitle: "გამოცდილება",
        jobTitle1: "კარის უსაფრთხოების შემოწმებელი და სტუმრების გადამოწმების ასისტენტი, ბარისტა",
        jobTitle2: "ღონისძიების სტიუარდი – UEFA Euro 2024-ის კვალიფიკაცია",
        locationTbilisi: "თბილისი",
        dateSep2023: "სექტ. 2023 - 2025",
        dateNov2023: "ნოემბერი 2023",
        skillsTitle: "უნარები და შესაძლებლობები",
        skill1: "დაკვირვების უნარები და კონფლიქტების გადაწყვეტა",
        skill2: "ძლიერი წერილობითი და ზეპირი კომუნიკაცია",
        skill3: "დეტალებზე ყურადღება",
        skill4: "გადაწყვეტილების მიღება",
        skill5: "კვლევის უნარები",
        skill6: "გუნდური თანამშრომლობა",
        skill7: "პრობლემების გადაჭრა",
        skill8: "კრიტიკული აზროვნება",
        skill9: "მულტიტასკინგი და ემოციური ინტელექტი",
        skill10: "სტრესის მართვა და სიტუაციური ცნობიერება",
        skill11: "აქტიური მსმენელი",
        educationTitle: "განათლება",
        degree1: "ხის მოჭრა და ავეჯის დიზაინი",
        degree2: "ინტერიერის 3D ვიზუალიზაციის კურსი",
        dateOct2023: "ოქტ. 2023",
        dateFeb2024: "თებ. 2024",
        degree2Description: "სოციალური მედია/ციფრული მარკეტინგი/რეკლამა",
        languagesTitle: "ენები",
        langGeorgian: "ქართული",
        langEnglish: "ინგლისური",
        langRussian: "რუსული",
        langNative: "მშობლიური",
        langProficient: "თავისუფალი (B2 დონე)",
        langIntermediate: "კომუნიკაციის უნარი (B1 დონე)",
        rightsReserved: "ყველა უფლება დაცულია.",
        backToTop: "თავში დაბრუნება"
    }
};

let currentLang = 'en';
const langToggle = document.getElementById('langToggle');
const updateLanguage = () => {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
    document.documentElement.lang = currentLang;
};

if (langToggle) {
    // Load initial language from localStorage if available
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
        langToggle.textContent = currentLang === 'en' ? 'KA' : 'EN';
    }
    
    updateLanguage();
    
    langToggle.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "ka" : "en";
        langToggle.textContent = currentLang === "en" ? "KA" : "EN";
        localStorage.setItem('preferredLanguage', currentLang);
        updateLanguage();
    });
}

document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

