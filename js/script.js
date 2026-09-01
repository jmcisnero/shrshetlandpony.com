document.addEventListener('DOMContentLoaded', () => {
    // --- DICCIONARIO DE TRADUCCIONES ---
    const translations = {
        es: {
            pageTitle: "Cabaña SHR - Cría de Ponis Shetland en Uruguay",
            navHome: "Inicio",
            navPonies: "Nuestros Ponis",
            navBenefits: "Beneficios",
            navGallery: "Nuestro Plantel",
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
                elem.textContent = translations[lang][key];
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

    // --- MENÚ NAVEGACIÓN Y SCROLL SUAVE ---
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

    // Cerrar menú con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            toggleMenu(false);
            if (menuToggle) menuToggle.focus();
        }
    });

    // Desplazamiento suave (Smooth scroll) y cierre del menú
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    if (navMenu.classList.contains('active')) {
                        toggleMenu(false);
                    }
                }
            }
        });
    });
});
