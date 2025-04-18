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


  // Language Toggle
  const translations = {
    en: {
      profileTitle: "Profile",
      profileText1: "19 years old. I have extensive experience in the service industry, with well-developed communication skills with customers.",
      profileText2: "Effective communication with customers, addressing their concerns, and resolving problems are essential...",
      experienceTitle: "Experience",
      educationTitle: "Education",
      skillsTitle: "Skills & Abilities",
      languagesTitle: "Languages",
      backToTop: "Back to Top"
    },
    ka: {
      profileTitle: "პროფილი",
      profileText1: "ვარ 19 წლის. მაქვს გამოცდილება მომსახურების სფეროში და განვითარებული კომუნიკაციის უნარი მომხმარებლებთან ურთიერთობაში.",
      profileText2: "კლიენტებთან ეფექტური კომუნიკაცია, მათი პრობლემების განხილვა და გადაჭრა მნიშვნელოვანია...",
      experienceTitle: "გამოცდილება",
      educationTitle: "განათლება",
      skillsTitle: "უნარები და შესაძლებლობები",
      languagesTitle: "ენები",
      backToTop: "თავში დაბრუნება"
    }
  };

  let currentLang = 'en';
  const updateLanguage = () => {
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      if (translations[currentLang][key]) {
        el.textContent = translations[currentLang][key];
      }
    });
  };

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "ka" : "en";
      langToggle.textContent = currentLang === "en" ? "KA" : "EN";
      updateLanguage();
    });
  }