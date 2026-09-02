document.addEventListener('DOMContentLoaded', () => {
    // --- DICCIONARIO DE TRADUCCIONES ---
    const translations = {
        es: {
            pageTitle: "Cabaña SHR - Cría de Ponis Shetland en Uruguay",
            navHome: "Inicio",
            navPonies: "Nuestros Ponis",
            navBenefits: "Beneficios",
            navGallery: "Nuestro Plantel",
            navPadrillos: "Padrillos",
            navMadres: "Madres",
            navGeneraciones: "Nuevas Generaciones",
            navContact: "Contacto",
            heroTitle: "Cabaña SHR: El comienzo de una gran amistad.",
            heroCTA: "Contactános",
            poniesTitle: "Nuestros Ponis Shetland",
            poniesIntro: "En Cabaña SHR, nos dedicamos con pasión a la cría responsable de ponis de la raza Shetland. Nuestro compromiso es criar ejemplares que no solo destaquen por su belleza y conformación, sino también por su temperamento dócil y confiable, haciéndolos el compañero perfecto para toda la familia.",
            benefitsTitle: "¿Por qué elegir un Poni Shetland?",
            benefit1Title: "Compañeros Ideales para Niños",
            benefit1Desc: "Su temperamento dócil, gran inteligencia y tamaño seguro los convierten en los mejores amigos de los más pequeños. Fomentan la responsabilidad, la empatía y el amor por la naturaleza desde temprana edad.",
            benefit2Title: "Iniciación Deportiva Ecuestre",
            benefit2Desc: "La pequeña alzada del Shetland es perfecta para que los niños desarrollen confianza y equilibrio. Es la base técnica ideal para construir un vínculo sólido y seguro con el mundo de la equitación.",
            benefit3Title: "Cuidados y Mantenimiento",
            benefit3Desc: "Son animales rústicos y resistentes. Aunque requieren un compromiso responsable, su manejo diario y costos de mantenimiento son más accesibles en comparación con caballos de mayor tamaño.",
            galleryTitle: "Conoce Nuestro Plantel",
            galleryIntro: "La transparencia y la genética superior son nuestros pilares. Explora las líneas de sangre que hacen de Silver Horse Ranch un referente en la región, criados bajo los más altos estándares de bienestar animal de Uruguay.",
            padrillosTitle: "Nuestros Padrillos",
            padrillosDesc: "La base de nuestra excelencia genética. Seleccionamos a nuestros padrillos no solo por su impecable conformación física y pureza racial, sino por su temperamento equilibrado. Sabemos que el carácter se hereda, por lo que nuestros sementales son el primer sello de garantía de que obtendrás un poni noble, dócil y seguro.",
            madresTitle: "Nuestras Madres",
            madresDesc: "El corazón de nuestra cabaña. Nuestras yeguas crían a sus potrillos en entornos amplios y naturales, respetando las normativas de bienestar animal (INBA/MGAP). Seleccionamos madres con un instinto maternal excepcional y una naturaleza pacífica, proporcionando el entorno emocional perfecto para que crezcan confiados.",
            generacionesTitle: "Nuevas Generaciones",
            generacionesDesc: "El resultado de nuestra pasión. Desde sus primeros días, nuestros potrillos reciben un manejo ético y una socialización temprana. Canalizamos su inteligencia natural mediante métodos positivos para entregar compañeros a prueba de niños y co-terapeutas fiables. Aquí puedes ver el futuro de SHR.",
            contactTitle: "Hablemos",
            contactInfoTitle: "Información de Contacto",
            contactInfoDesc: "Estamos aquí para responder todas tus consultas. No dudes en escribirnos o llamarnos.",
            contactFormTitle: "Envianos un Mensaje",
            formNameLabel: "Tu Nombre",
            formName: "Tu Nombre",
            formEmailLabel: "Tu Email",
            formEmail: "Tu Email",
            formMessageLabel: "Tu Mensaje",
            formMessage: "Tu Mensaje",
            formButton: "Enviar Consulta",
            footerText: "© 2019 Cabaña SHR. Todos los derechos reservados."
        },
        en: {
            pageTitle: "Cabaña SHR - Shetland Pony Breeding in Uruguay",
            navHome: "Home",
            navPonies: "Our Ponies",
            navBenefits: "Benefits",
            navGallery: "Our Herd",
            navPadrillos: "Stallions",
            navMadres: "Mares",
            navGeneraciones: "New Generations",
            navContact: "Contact",
            heroTitle: "Cabaña SHR: The beginning of a great friendship.",
            heroCTA: "Contact Us",
            poniesTitle: "Our Shetland Ponies",
            poniesIntro: "At Cabaña SHR, we are passionately dedicated to the responsible breeding of Shetland ponies. Our commitment is to raise ponies that not only stand out for their beauty and conformation but also for their docile and reliable temperament, making them the perfect companion for the whole family.",
            benefitsTitle: "Why choose a Shetland Pony?",
            benefit1Title: "Ideal Companions for Children",
            benefit1Desc: "Their docile temperament, great intelligence, and safe size make them the best friends for the little ones. They foster responsibility, empathy, and a love for nature from an early age.",
            benefit2Title: "Equestrian Sport Initiation",
            benefit2Desc: "The small height of the Shetland is perfect for children to develop confidence and balance. It is the ideal technical foundation to build a solid and safe bond with the world of horse riding.",
            benefit3Title: "Care and Maintenance",
            benefit3Desc: "They are hardy and resistant animals. Although they require a responsible commitment, their daily management and maintenance costs are more accessible compared to larger horses.",
            galleryTitle: "Meet Our Herd",
            galleryIntro: "Transparency and superior genetics are our pillars. Explore the bloodlines that make Silver Horse Ranch a reference in the region, bred under the highest standards of animal welfare in Uruguay.",
            padrillosTitle: "Our Stallions",
            padrillosDesc: "The foundation of our genetic excellence. We select our stallions not only for their impeccable physical conformation and racial purity, but also for their balanced temperament. We know that character is inherited, so our stallions are the first guarantee that you will get a noble, docile, and safe pony.",
            madresTitle: "Our Mares",
            madresDesc: "The heart of our ranch. Our mares raise their foals in spacious and natural environments, respecting animal welfare regulations. We select mares with exceptional maternal instincts and a peaceful nature, providing the perfect emotional environment for them to grow confident.",
            generacionesTitle: "New Generations",
            generacionesDesc: "The result of our passion. From their first days, our foals receive ethical handling and early socialization. We channel their natural intelligence through positive methods to deliver child-proof companions and reliable co-therapists. Here you can see the future of SHR.",
            contactTitle: "Let's Talk",
            contactInfoTitle: "Contact Information",
            contactInfoDesc: "We are here to answer all your questions. Do not hesitate to write or call us.",
            contactFormTitle: "Send us a Message",
            formNameLabel: "Your Name",
            formName: "Your Name",
            formEmailLabel: "Your Email",
            formEmail: "Your Email",
            formMessageLabel: "Your Message",
            formMessage: "Your Message",
            formButton: "Send Inquiry",
            footerText: "© 2019 Cabaña SHR. All rights reserved."
        },
        pt: {
            pageTitle: "Cabaña SHR - Criação de Pôneis Shetland no Uruguai",
            navHome: "Início",
            navPonies: "Nossos Pôneis",
            navBenefits: "Benefícios",
            navGallery: "Nosso Plantel",
            navPadrillos: "Garanhões",
            navMadres: "Matrizes",
            navGeneraciones: "Novas Gerações",
            navContact: "Contato",
            heroTitle: "Cabaña SHR: O começo de uma grande amizade.",
            heroCTA: "Contate-nos",
            poniesTitle: "Nossos Pôneis Shetland",
            poniesIntro: "Na Cabaña SHR, dedicamo-nos apaixonadamente à criação responsável de pôneis da raça Shetland. Nosso compromisso é criar exemplares que não se destaquem apenas por sua beleza e conformação, mas também por seu temperamento dócil e confiável, tornando-os o companheiro perfeito para toda a família.",
            benefitsTitle: "Por que escolher um Pônei Shetland?",
            benefit1Title: "Companheiros Ideais para Crianças",
            benefit1Desc: "Seu temperamento dócil, grande inteligência e tamanho seguro os tornam os melhores amigos dos pequenos. Eles promovem responsabilidade, empatia e amor pela natureza desde cedo.",
            benefit2Title: "Iniciação Esportiva Equestre",
            benefit2Desc: "A pequena altura do Shetland é perfeita para que as crianças desenvolvam confiança e equilíbrio. É a base técnica ideal para construir um vínculo sólido e seguro com o mundo da equitação.",
            benefit3Title: "Cuidados e Manutenção",
            benefit3Desc: "São animais rústicos e resistentes. Embora exijam um compromisso responsável, seu manejo diário e custos de manutenção são mais acessíveis em comparação com cavalos de maior porte.",
            galleryTitle: "Conheça Nosso Plantel",
            galleryIntro: "Transparência e genética superior são nossos pilares. Explore as linhagens que fazem do Silver Horse Ranch uma referência na região, criados sob os mais altos padrões de bem-estar animal do Uruguai.",
            padrillosTitle: "Nossos Garanhões",
            padrillosDesc: "A base da nossa excelência genética. Selecionamos nossos garanhões não apenas por sua impecável conformação física e pureza racial, mas também por seu temperamento equilibrado. Sabemos que o caráter é herdado, então nossos garanhões são a primeira garantia de que você obterá um pônei nobre, dócil e seguro.",
            madresTitle: "Nossas Matrizes",
            madresDesc: "O coração da nossa cabanha. Nossas éguas criam seus potros em ambientes amplos e naturais, respeitando as normas de bem-estar animal. Selecionamos matrizes com instinto maternal excepcional e natureza pacífica, proporcionando o ambiente emocional perfeito para que cresçam confiantes.",
            generacionesTitle: "Novas Gerações",
            generacionesDesc: "O resultado da nossa paixão. Desde os primeiros dias, nossos potros recebem manejo ético e socialização precoce. Canalizamos sua inteligência natural através de métodos positivos para entregar companheiros à prova de crianças e co-terapeutas confiáveis. Aqui você pode ver o futuro da SHR.",
            contactTitle: "Vamos Conversar",
            contactInfoTitle: "Informações de Contato",
            contactInfoDesc: "Estamos aqui para responder a todas as suas perguntas. Não hesite em nos escrever ou ligar.",
            contactFormTitle: "Envie-nos uma Mensagem",
            formNameLabel: "Seu Nome",
            formName: "Seu Nome",
            formEmailLabel: "Seu Email",
            formEmail: "Seu Email",
            formMessageLabel: "Sua Mensagem",
            formMessage: "Sua Mensagem",
            formButton: "Enviar Consulta",
            footerText: "© 2019 Cabaña SHR. Todos os direitos reservados."
        }
    };

    const langSwitcher = document.querySelector('.lang-switcher');
    const langButtons = document.querySelectorAll('.lang-switcher button');
    
    const setLanguage = (lang) => {
        if (!translations[lang]) return;

        // Actualizar título de la página
        if (translations[lang].pageTitle) {
            document.title = translations[lang].pageTitle;
        }

        // Actualizar textos por data-key
        document.querySelectorAll('[data-key]').forEach(elem => {
            const key = elem.getAttribute('data-key');
            if (translations[lang][key]) {
                const icon = elem.querySelector('i');
                if (icon) {
                    elem.childNodes[0].textContent = translations[lang][key] + ' ';
                } else {
                    elem.textContent = translations[lang][key];
                }
            }
        });

        // Actualizar placeholders de formularios
        document.querySelectorAll('[data-key-placeholder]').forEach(elem => {
            const key = elem.getAttribute('data-key-placeholder');
            if (translations[lang][key]) {
                elem.placeholder = translations[lang][key];
            }
        });

        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);

        langButtons.forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            const isActive = btnLang === lang;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
    };

    if (langSwitcher) {
        langSwitcher.addEventListener('click', (e) => {
            const btn = e.target.closest('button[data-lang]');
            if (btn) {
                const lang = btn.getAttribute('data-lang');
                setLanguage(lang);
            }
        });
    }

    const savedLang = localStorage.getItem('language') || 'es';
    setLanguage(savedLang);

    // --- MENÚ NAVEGACIÓN Y DROPDOWN ---
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const scrollLinks = document.querySelectorAll('.nav-links a, .cta-button, .logo');

    const toggleMenu = (open) => {
        const isOpen = open !== undefined ? open : !navMenu.classList.contains('active');
        navMenu.classList.toggle('active', isOpen);
        if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        }
    };

    if (menuToggle) {
        menuToggle.addEventListener('click', () => toggleMenu());
    }

    // Toggle submenú desplegable (Escritorio y Móvil)
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const navDropdown = document.querySelector('.nav-item-dropdown');

    const toggleDropdown = (state) => {
        if (!navDropdown || !dropdownToggle) return;
        const isActive = state !== undefined ? state : !navDropdown.classList.contains('active');
        navDropdown.classList.toggle('active', isActive);
        dropdownToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    };

    if (dropdownToggle && navDropdown) {
        dropdownToggle.addEventListener('click', (e) => {
            // Prevenir acción por defecto y alternar submenú
            e.preventDefault();
            toggleDropdown();
        });
    }

    // Cierre interactivo al hacer clic fuera del submenú (Click-outside)
    document.addEventListener('click', (e) => {
        if (navDropdown && navDropdown.classList.contains('active')) {
            if (!navDropdown.contains(e.target)) {
                toggleDropdown(false);
            }
        }
    });

    // Desplazamiento suave (Smooth scroll) y cierre de menús
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    e.preventDefault();
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    
                    if (navMenu.classList.contains('active')) {
                        toggleMenu(false);
                    }
                    if (navDropdown && navDropdown.classList.contains('active')) {
                        toggleDropdown(false);
                    }
                }
            }
        });
    });

    // --- VISOR DE IMÁGENES EN GRANDE (LIGHTBOX MODAL CON NAVEGACIÓN POR CATEGORÍA) ---
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
    const lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
    const lightboxNextBtn = document.getElementById('lightbox-next-btn');
    const lightboxOverlay = document.querySelector('.lightbox-overlay');

    let currentCategoryCards = [];
    let currentCardIndex = -1;

    const updateLightboxContent = (card) => {
        if (!card || !lightboxImg) return;
        const img = card.querySelector('img');
        const figcaption = card.querySelector('figcaption');
        const title = card.querySelector('.specimen-title');
        if (!img) return;

        const modalCard = document.getElementById('modal-card');
        const specimenName = document.getElementById('modal-specimen-name');
        const specimenDataPanel = document.getElementById('modal-specimen-data');
        const valNacimiento = document.getElementById('modal-val-nacimiento');
        const valRp = document.getElementById('modal-val-rp');
        const valHbu = document.getElementById('modal-val-hbu');
        const valPelo = document.getElementById('modal-val-pelo');
        const aruCta = document.getElementById('modal-aru-cta');

        lightboxImg.classList.add('fade-out');
        setTimeout(() => {
            lightboxImg.src = img.src;

            // Leer atributos de datos data-*
            const nombre = img.dataset.nombre || (title ? title.textContent : (figcaption ? figcaption.textContent : ''));
            const nacimiento = img.dataset.nacimiento;
            const rp = img.dataset.rp;
            const hbu = img.dataset.hbu;
            const pelo = img.dataset.pelo;
            const aruLink = img.dataset.aruLink;

            const captionText = figcaption ? figcaption.textContent : (title ? title.textContent : 'Poni Shetland');
            lightboxImg.alt = img.alt || nombre || captionText;

            if (hbu && nombre) {
                if (specimenName) specimenName.textContent = nombre;
                if (valNacimiento) valNacimiento.textContent = nacimiento || '-';
                if (valRp) valRp.textContent = rp || '-';
                if (valHbu) valHbu.textContent = hbu || '-';
                if (valPelo) valPelo.textContent = pelo || '-';
                if (aruCta) aruCta.href = aruLink || '#';

                if (specimenDataPanel) specimenDataPanel.style.display = 'block';
                if (lightboxCaption) lightboxCaption.style.display = 'none';
                if (modalCard) modalCard.classList.add('has-data');
            } else {
                if (specimenDataPanel) specimenDataPanel.style.display = 'none';
                if (specimenName) specimenName.textContent = captionText;
                if (lightboxCaption) {
                    lightboxCaption.textContent = captionText;
                    lightboxCaption.style.display = 'block';
                }
                if (modalCard) {
                    if (captionText) {
                        modalCard.classList.add('has-data');
                    } else {
                        modalCard.classList.remove('has-data');
                    }
                }
            }

            lightboxImg.classList.remove('fade-out');
        }, 150);
    };

    const openLightbox = (card, categoryCards, index) => {
        if (!lightbox || !card) return;
        currentCategoryCards = categoryCards;
        currentCardIndex = index;

        updateLightboxContent(card);
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        if (lightboxCloseBtn) lightboxCloseBtn.focus();
    };

    const closeLightbox = () => {
        if (!lightbox) return;
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        currentCategoryCards = [];
        currentCardIndex = -1;
        setTimeout(() => {
            if (lightboxImg) lightboxImg.src = '';
        }, 300);
    };

    const navigateLightbox = (direction) => {
        if (!currentCategoryCards || currentCategoryCards.length <= 1) return;
        if (direction === 'next') {
            currentCardIndex = (currentCardIndex + 1) % currentCategoryCards.length;
        } else if (direction === 'prev') {
            currentCardIndex = (currentCardIndex - 1 + currentCategoryCards.length) % currentCategoryCards.length;
        }
        updateLightboxContent(currentCategoryCards[currentCardIndex]);
    };

    const gallerySection = document.getElementById('galeria');
    if (gallerySection) {
        gallerySection.addEventListener('click', (e) => {
            if (e.target.closest('a')) return;
            const card = e.target.closest('.gallery-card');
            if (card) {
                const parentGrid = card.closest('.gallery-grid');
                if (parentGrid) {
                    const groupCards = Array.from(parentGrid.querySelectorAll('.gallery-card'));
                    const cardIdx = groupCards.indexOf(card);
                    openLightbox(card, groupCards, cardIdx);
                } else {
                    openLightbox(card, [card], 0);
                }
            }
        });
    }

    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
    if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);
    if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', () => navigateLightbox('prev'));
    if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', () => navigateLightbox('next'));

    // Soporte para gestos táctiles (Swipe) en móvil
    let touchStartX = 0;
    let touchStartY = 0;

    if (lightbox) {
        lightbox.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        lightbox.addEventListener('touchend', (e) => {
            if (!lightbox.classList.contains('active')) return;
            const touchEndX = e.changedTouches[0].screenX;
            const touchEndY = e.changedTouches[0].screenY;
            const deltaX = touchEndX - touchStartX;
            const deltaY = touchEndY - touchStartY;

            if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX < 0) {
                    navigateLightbox('next');
                } else {
                    navigateLightbox('prev');
                }
            }
        }, { passive: true });
    }

    // Navegación por teclado (Flechas izquierda, derecha, Escape)
    document.addEventListener('keydown', (e) => {
        if (lightbox && lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                navigateLightbox('prev');
            } else if (e.key === 'ArrowRight') {
                navigateLightbox('next');
            }
        } else if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            toggleMenu(false);
            if (menuToggle) menuToggle.focus();
        }
    });

    // --- CARRUSEL DE FONDO DINÁMICO (HERO SLIDER) ---
    const heroImages = [
        'assets/images/padrillos/Padrillo - BB Tropero (Cabron) 2667.jpg',
        'assets/images/padrillos/Padrillo - SHR Timoteo 2820.jpg',
        'assets/images/madres/Madre - Brissa 2577.jpg',
        'assets/images/madres/Madre - Canela 2598.jpg',
        'assets/images/madres/Madre - Mi Querencia Tigra 2703.jpg',
        'assets/images/madres/Madre - Pulga 2583-2.jpg',
        'assets/images/madres/Madre - SF Lili 2500.jpg',
        'assets/images/generaciones/25/Gen25 - SHR Barullo 2523.jpg',
        'assets/images/generaciones/25/Gen25 - SHR Toscana 2553.jpg',
        'assets/images/generaciones/24/Gen24 - SHR Canelon 2784.jpg',
        'assets/images/generaciones/23/Gen23 - SHR Barbie 2757.jpg'
    ];

    const initHeroSlider = () => {
        const sliderContainer = document.getElementById('hero-slider');
        if (!sliderContainer || heroImages.length === 0) return;

        // Aleatorizar el orden de las imágenes en cada carga
        const shuffled = [...heroImages].sort(() => Math.random() - 0.5);

        sliderContainer.innerHTML = '';
        const slides = shuffled.map((imgSrc, index) => {
            const slide = document.createElement('div');
            slide.className = 'hero-slide' + (index === 0 ? ' active' : '');
            slide.style.backgroundImage = `url("${encodeURI(imgSrc)}")`;
            sliderContainer.appendChild(slide);
            return slide;
        });

        // Precargar la segunda imagen de la secuencia
        if (shuffled.length > 1) {
            const imgPreload = new Image();
            imgPreload.src = shuffled[1];
        }

        let currentIndex = 0;
        const intervalTime = 5000; // 5 segundos por slide

        setInterval(() => {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');

            // Precargar la siguiente foto de la secuencia
            const nextIndex = (currentIndex + 1) % slides.length;
            const nextImg = new Image();
            nextImg.src = shuffled[nextIndex];
        }, intervalTime);
    };

    initHeroSlider();
});
