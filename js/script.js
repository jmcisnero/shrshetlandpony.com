document.addEventListener('DOMContentLoaded', () => {
    // Declaraciones de estado global para visor modal y lenguaje
    let lightbox = null;
    let currentCategoryCards = [];
    let currentCardIndex = -1;
    let currentCard = null;
    let modalHistory = [];
    let updateLightboxContent = () => {};
    let updateModalHistoryUI = () => {};

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
            footerText: "© 2019 Cabaña SHR. Todos los derechos reservados.",
            verFicha: "Ver ficha",
            enVenta: "En Venta",
            consultarEjemplar: "Consultar por este ejemplar",
            gen2025Title: "Generación 2025",
            gen2024Title: "Generación 2024",
            gen2023Title: "Generación 2023",
            gen2021Title: "Generación 2021",
            gen2020Title: "Generación 2020",
            labelNacimiento: "Nacimiento:",
            labelRp: "RP:",
            labelSexo: "Sexo:",
            labelHbu: "HBU (ARU):",
            labelPelo: "Pelaje:",
            btnAru: "Ver Registro Oficial en ARU",
            unregistered: "Ejemplar no inscripto",
            pendingData: "Ficha técnica en proceso de registro",
            labelPadre: "Padre:",
            labelMadre: "Madre:",
            backTo: "← Volver a {nombre}",
            back: "← Volver"
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
            gen2025Title: "2025 Generation",
            gen2024Title: "2024 Generation",
            gen2023Title: "2023 Generation",
            gen2021Title: "2021 Generation",
            gen2020Title: "2020 Generation",
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
            footerText: "© 2019 Cabaña SHR. All rights reserved.",
            verFicha: "View details",
            enVenta: "For Sale",
            consultarEjemplar: "Inquire about this pony",
            labelNacimiento: "Birth Date:",
            labelRp: "Private Reg. (RP):",
            labelSexo: "Sex:",
            labelHbu: "Official Reg. (HBU):",
            labelPelo: "Coat Color:",
            btnAru: "View Official Pedigree (ARU)",
            unregistered: "Unregistered specimen",
            pendingData: "Technical registration in progress",
            labelPadre: "Sire:",
            labelMadre: "Dam:",
            backTo: "← Back to {nombre}",
            back: "← Back"
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
            gen2025Title: "Geração 2025",
            gen2024Title: "Geração 2024",
            gen2023Title: "Geração 2023",
            gen2021Title: "Geração 2021",
            gen2020Title: "Geração 2020",
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
            footerText: "© 2019 Cabaña SHR. Todos os direitos reservados.",
            verFicha: "Ver ficha",
            enVenta: "À Venda",
            consultarEjemplar: "Consultar sobre este pônei",
            labelNacimiento: "Nascimento:",
            labelRp: "RP:",
            labelSexo: "Sexo:",
            labelHbu: "HBU (ARU):",
            labelPelo: "Pelagem:",
            btnAru: "Ver Registro Oficial no ARU",
            unregistered: "Exemplar não registrado",
            pendingData: "Ficha técnica em processo de registro",
            labelPadre: "Pai:",
            labelMadre: "Mãe:",
            backTo: "← Voltar para {nombre}",
            back: "← Voltar"
        }
    };

    const sexTranslations = {
        'hembra': { es: 'Hembra', en: 'Female', pt: 'Fêmea' },
        'macho entero': { es: 'Macho Entero', en: 'Stallion', pt: 'Macho Inteiro' },
        'macho castrado': { es: 'Macho Castrado', en: 'Gelding', pt: 'Castrado' }
    };

    const coatTranslations = {
        'zaino negro': { es: 'Zaino Negro', en: 'Black Bay', pt: 'Castanho Escuro' },
        'zaino colorado': { es: 'Zaino Colorado', en: 'Red Bay', pt: 'Castanho Avermelhado' },
        'lobuno': { es: 'Lobuno', en: 'Dun', pt: 'Lobuno' },
        'lobuna': { es: 'Lobuna', en: 'Dun', pt: 'Lobuna' },
        'zaino': { es: 'Zaino', en: 'Bay', pt: 'Castanho' },
        'zaina': { es: 'Zaina', en: 'Bay', pt: 'Castanho' },
        'tobiano zaino': { es: 'Tobiano Zaino', en: 'Bay Tobiano', pt: 'Tobiano Castanho' },
        'oscura': { es: 'Oscura', en: 'Dark', pt: 'Escura' },
        'oscuro': { es: 'Oscuro', en: 'Dark', pt: 'Escuro' },
        'tobiano': { es: 'Tobiano', en: 'Tobiano', pt: 'Tobiano' },
        'picazo': { es: 'Picazo', en: 'Black Tobiano / Picazo', pt: 'Picaço' },
        'gateado': { es: 'Gateado', en: 'Dun', pt: 'Gateado' },
        'gateada': { es: 'Gateada', en: 'Dun', pt: 'Gateada' },
        'tobiano negro': { es: 'Tobiano Negro', en: 'Black Tobiano', pt: 'Tobiano Preto' },
        'tobiano colorado': { es: 'Tobiano Colorado', en: 'Chestnut Tobiano', pt: 'Tobiano Vermelho' },
        'zaina oscura': { es: 'Zaina Oscura', en: 'Dark Bay', pt: 'Castanho Escuro' }
    };

    const translateSex = (val, lang) => {
        if (!val) return '';
        const key = val.trim().toLowerCase();
        if (sexTranslations[key] && sexTranslations[key][lang]) {
            return sexTranslations[key][lang];
        }
        return val;
    };

    const translateCoat = (val, lang) => {
        if (!val) return '';
        const key = val.trim().toLowerCase();
        if (coatTranslations[key] && coatTranslations[key][lang]) {
            return coatTranslations[key][lang];
        }
        return val;
    };

    const findCardBySpecimenName = (name) => {
        if (!name) return null;
        const targetClean = normalizeBrandName(name).trim().toLowerCase();
        const allCards = document.querySelectorAll('.gallery-card');
        
        for (const card of allCards) {
            const img = card.querySelector('img');
            const figcaption = card.querySelector('figcaption');
            const rawNombre = img?.dataset.nombre || figcaption?.querySelector('.specimen-name')?.textContent || '';
            const cardClean = normalizeBrandName(rawNombre).trim().toLowerCase();

            if (!cardClean) continue;

            if (cardClean === targetClean) return card;
            if (targetClean.includes(cardClean) || cardClean.includes(targetClean)) return card;
            
            if ((targetClean.includes('lili') || targetClean.includes('lilí')) && cardClean.includes('lili')) return card;
            if (targetClean.includes('tigra') && cardClean.includes('tigra')) return card;
            if (targetClean.includes('tropero') && cardClean.includes('tropero')) return card;
        }
        return null;
    };

    const normalizeBrandName = (name) => {
        if (!name) return '';
        let clean = name.replace(/Ver ficha.*/i, '').trim();
        return clean.replace(/^Shr\b/i, 'SHR').replace(/^Bb\b/i, 'BB');
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
                    // Preservar icono sin romper elementos hijo
                    const textNode = Array.from(elem.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
                    if (textNode) {
                        textNode.textContent = ' ' + translations[lang][key];
                    } else {
                        elem.appendChild(document.createTextNode(' ' + translations[lang][key]));
                    }
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

        // Si el modal está activo en pantalla, actualizarlo inmediatamente al conmutar de idioma
        if (lightbox && lightbox.classList.contains('active') && currentCard) {
            updateLightboxContent(currentCard);
            updateModalHistoryUI();
        }
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
    lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
    const lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
    const lightboxNextBtn = document.getElementById('lightbox-next-btn');
    const lightboxOverlay = document.querySelector('.lightbox-overlay');

    updateModalHistoryUI = () => {
        const backBtn = document.getElementById('modal-back-btn');
        const backText = document.getElementById('modal-back-text');

        if (modalHistory.length > 0) {
            if (lightboxPrevBtn) lightboxPrevBtn.style.display = 'none';
            if (lightboxNextBtn) lightboxNextBtn.style.display = 'none';

            if (backBtn && backText) {
                const previousState = modalHistory[modalHistory.length - 1];
                const prevCard = previousState.card;
                const prevImg = prevCard?.querySelector('img');
                const prevFigcaption = prevCard?.querySelector('figcaption');
                const prevTitle = prevCard?.querySelector('.specimen-title');
                const rawPrevName = prevImg?.dataset.nombre || (prevTitle ? prevTitle.textContent : (prevFigcaption ? prevFigcaption.querySelector('.specimen-name')?.textContent || prevFigcaption.textContent : ''));
                const cleanPrevName = normalizeBrandName(rawPrevName) || '';

                const currentLang = document.documentElement.lang || 'es';
                const langDict = translations[currentLang] || translations.es;

                if (cleanPrevName && langDict.backTo) {
                    backText.textContent = langDict.backTo.replace('{nombre}', cleanPrevName);
                } else {
                    backText.textContent = langDict.back || '← Volver';
                }

                backBtn.style.display = 'inline-flex';
            }
        } else {
            const hasMultipleCards = currentCategoryCards && currentCategoryCards.length > 1;
            if (lightboxPrevBtn) lightboxPrevBtn.style.display = hasMultipleCards ? 'flex' : 'none';
            if (lightboxNextBtn) lightboxNextBtn.style.display = hasMultipleCards ? 'flex' : 'none';

            if (backBtn) backBtn.style.display = 'none';
        }
    };

    updateLightboxContent = (card) => {
        if (!card || !lightboxImg) return;
        currentCard = card;
        const img = card.querySelector('img');
        const figcaption = card.querySelector('figcaption');
        const title = card.querySelector('.specimen-title');
        if (!img) return;

        const modalCard = document.getElementById('modal-card');
        const specimenName = document.getElementById('modal-specimen-name');
        const specimenDataPanel = document.getElementById('modal-specimen-data');
        const itemNacimiento = document.getElementById('modal-item-nacimiento');
        const itemRp = document.getElementById('modal-item-rp');
        const itemSexo = document.getElementById('modal-item-sexo');
        const itemHbu = document.getElementById('modal-item-hbu');
        const itemPelo = document.getElementById('modal-item-pelo');
        const valNacimiento = document.getElementById('modal-val-nacimiento');
        const valRp = document.getElementById('modal-val-rp');
        const valSexo = document.getElementById('modal-val-sexo');
        const valHbu = document.getElementById('modal-val-hbu');
        const valPelo = document.getElementById('modal-val-pelo');
        const aruCta = document.getElementById('modal-aru-cta');
        const inquireCta = document.getElementById('modal-inquire-cta');
        const modalDivider = document.getElementById('modal-divider');
        const pendingNotice = document.getElementById('modal-pending-data');

        lightboxImg.classList.add('fade-out');
        setTimeout(() => {
            lightboxImg.src = img.src;

            // Extraer el nombre del ejemplar de forma limpia y normalizada (SHR)
            const rawNombre = img.dataset.nombre || (title ? title.textContent : (figcaption ? figcaption.querySelector('.specimen-name')?.textContent || figcaption.textContent : ''));
            const cleanNombre = normalizeBrandName(rawNombre) || 'Poni Shetland';

            const nacimiento = (img.dataset.nacimiento || '').trim();
            const rp = (img.dataset.rp || '').trim();
            const sexo = (img.dataset.sexo || '').trim();
            const hbu = (img.dataset.hbu || '').trim();
            const pelo = (img.dataset.pelo || '').trim();
            const padre = (img.dataset.padre || '').trim();
            const madre = (img.dataset.madre || '').trim();
            const aruLink = (img.dataset.aruLink || '').trim();
            const isEnVenta = img.dataset.enVenta === 'true' || (card && card.dataset.enVenta === 'true');

            const currentLang = document.documentElement.lang || 'es';

            lightboxImg.alt = img.alt || cleanNombre;
            if (specimenName) {
                specimenName.innerHTML = '';
                const nameNode = document.createElement('span');
                nameNode.textContent = cleanNombre;
                specimenName.appendChild(nameNode);

                if (isEnVenta) {
                    const badgeSpan = document.createElement('span');
                    badgeSpan.className = 'badge-sale modal-badge';
                    const labelText = (translations[currentLang] && translations[currentLang].enVenta) ? translations[currentLang].enVenta : 'En Venta';
                    badgeSpan.innerHTML = `<span class="badge-dot"></span><span data-key="enVenta">${labelText}</span>`;
                    specimenName.appendChild(badgeSpan);
                }
            }

            const hasAruLink = Boolean(aruLink && aruLink !== '#');
            const hasDataFields = Boolean(nacimiento || rp || sexo || hbu || pelo || padre || madre);

            if (hasDataFields || hasAruLink || isEnVenta) {
                if (modalCard) {
                    modalCard.classList.remove('no-data');
                    modalCard.classList.add('has-data');
                }
                if (specimenDataPanel) specimenDataPanel.style.display = 'block';
                if (pendingNotice) pendingNotice.style.display = 'none';

                // Traducir Sexo y Pelaje
                const translatedSexo = translateSex(sexo, currentLang);
                const translatedPelo = translateCoat(pelo, currentLang);
                const translatedHbu = hbu === 'Ejemplar no inscripto'
                    ? ((translations[currentLang] && translations[currentLang].unregistered) || 'Ejemplar no inscripto')
                    : hbu;

                // Actualizar etiquetas estáticas del modal dinámicamente según idioma activo
                const lblNac = document.querySelector('#modal-item-nacimiento .modal-data-label');
                const lblRp = document.querySelector('#modal-item-rp .modal-data-label');
                const lblSex = document.querySelector('#modal-item-sexo .modal-data-label');
                const lblHbu = document.querySelector('#modal-item-hbu .modal-data-label');
                const lblPelo = document.querySelector('#modal-item-pelo .modal-data-label');

                if (lblNac && translations[currentLang]?.labelNacimiento) lblNac.textContent = translations[currentLang].labelNacimiento;
                if (lblRp && translations[currentLang]?.labelRp) lblRp.textContent = translations[currentLang].labelRp;
                if (lblSex && translations[currentLang]?.labelSexo) lblSex.textContent = translations[currentLang].labelSexo;
                if (lblHbu && translations[currentLang]?.labelHbu) lblHbu.textContent = translations[currentLang].labelHbu;
                if (lblPelo && translations[currentLang]?.labelPelo) lblPelo.textContent = translations[currentLang].labelPelo;

                // Gestionar visibilidad de cada ítem de datos (ocultar etiquetas sin valor)
                if (valNacimiento && itemNacimiento) {
                    if (nacimiento) {
                        valNacimiento.textContent = nacimiento;
                        itemNacimiento.style.display = 'flex';
                    } else {
                        itemNacimiento.style.display = 'none';
                    }
                }
                if (valRp && itemRp) {
                    if (rp) {
                        valRp.textContent = rp;
                        itemRp.style.display = 'flex';
                    } else {
                        itemRp.style.display = 'none';
                    }
                }
                if (valSexo && itemSexo) {
                    if (sexo) {
                        valSexo.textContent = translatedSexo;
                        itemSexo.style.display = 'flex';
                    } else {
                        itemSexo.style.display = 'none';
                    }
                }
                if (valHbu && itemHbu) {
                    if (hbu) {
                        valHbu.textContent = translatedHbu;
                        valHbu.classList.toggle('unregistered', hbu === 'Ejemplar no inscripto');
                        itemHbu.style.display = 'flex';
                    } else {
                        itemHbu.style.display = 'none';
                    }
                }
                if (valPelo && itemPelo) {
                    if (pelo) {
                        valPelo.textContent = translatedPelo;
                        itemPelo.style.display = 'flex';
                    } else {
                        itemPelo.style.display = 'none';
                    }
                }

                // Renderizar Padre y Madre con navegación interactiva
                const itemPadre = document.getElementById('modal-item-padre');
                const itemMadre = document.getElementById('modal-item-madre');
                const valPadre = document.getElementById('modal-val-padre');
                const valMadre = document.getElementById('modal-val-madre');
                const lblPadre = document.querySelector('#modal-item-padre .modal-data-label');
                const lblMadre = document.querySelector('#modal-item-madre .modal-data-label');

                if (lblPadre && translations[currentLang]?.labelPadre) lblPadre.textContent = translations[currentLang].labelPadre;
                if (lblMadre && translations[currentLang]?.labelMadre) lblMadre.textContent = translations[currentLang].labelMadre;

                const renderPedigreeValue = (valContainer, itemContainer, specName) => {
                    if (!valContainer || !itemContainer) return;
                    if (specName) {
                        valContainer.innerHTML = '';
                        const targetCard = findCardBySpecimenName(specName);
                        if (targetCard) {
                            const linkSpan = document.createElement('span');
                            linkSpan.className = 'pedigree-link';
                            linkSpan.textContent = specName;
                            linkSpan.addEventListener('click', (e) => {
                                e.preventDefault();
                                if (!currentCard) return;

                                modalHistory.push({
                                    card: currentCard,
                                    categoryCards: currentCategoryCards,
                                    cardIndex: currentCardIndex
                                });

                                const parentGrid = targetCard.closest('.gallery-grid');
                                if (parentGrid) {
                                    currentCategoryCards = Array.from(parentGrid.querySelectorAll('.gallery-card'));
                                    currentCardIndex = currentCategoryCards.indexOf(targetCard);
                                }
                                currentCard = targetCard;
                                updateLightboxContent(targetCard);
                                updateModalHistoryUI();
                            });
                            valContainer.appendChild(linkSpan);
                        } else {
                            valContainer.textContent = specName;
                        }
                        itemContainer.style.display = 'flex';
                    } else {
                        itemContainer.style.display = 'none';
                    }
                };

                renderPedigreeValue(valPadre, itemPadre, padre);
                renderPedigreeValue(valMadre, itemMadre, madre);

                // Control condicional del botón ARU, botón de consulta y el separador
                let showDivider = false;
                if (aruCta) {
                    if (hasAruLink) {
                        aruCta.href = aruLink;
                        aruCta.style.display = 'inline-flex';
                        showDivider = true;
                    } else {
                        aruCta.style.display = 'none';
                    }
                }

                if (inquireCta) {
                    if (isEnVenta) {
                        const msg = encodeURIComponent(`Hola Cabaña SHR, quisiera consultar por el ejemplar ${cleanNombre}`);
                        inquireCta.href = `https://wa.me/59899975886?text=${msg}`;
                        inquireCta.style.display = 'inline-flex';
                        showDivider = true;
                    } else {
                        inquireCta.style.display = 'none';
                    }
                }

                if (modalDivider) {
                    modalDivider.style.display = showDivider ? 'block' : 'none';
                }
            } else {
                // Opción A: Sin datos de pedigree -> Desactivar/eliminar panel lateral por completo
                if (modalCard) {
                    modalCard.classList.remove('has-data');
                    modalCard.classList.add('no-data');
                }
                if (specimenDataPanel) specimenDataPanel.style.display = 'none';
                if (pendingNotice) pendingNotice.style.display = 'none';
            }

            // Galería de miniaturas multi-foto
            const photosAttr = (img.dataset.photos || '').trim();
            const photosList = photosAttr ? photosAttr.split(',').map(p => p.trim()) : [img.src];
            
            let thumbsContainer = document.getElementById('modal-thumbnails');
            if (!thumbsContainer) {
                const mediaDiv = document.querySelector('.modal-card-media');
                if (mediaDiv) {
                    thumbsContainer = document.createElement('div');
                    thumbsContainer.id = 'modal-thumbnails';
                    thumbsContainer.className = 'modal-thumbnails';
                    mediaDiv.appendChild(thumbsContainer);
                }
            }

            if (thumbsContainer) {
                thumbsContainer.innerHTML = '';
                if (photosList.length > 1) {
                    thumbsContainer.style.display = 'flex';
                    photosList.forEach((photoSrc, pIdx) => {
                        const btn = document.createElement('button');
                        btn.className = 'modal-thumb-btn' + (photoSrc === img.src || pIdx === 0 ? ' active' : '');
                        btn.setAttribute('aria-label', `Foto ${pIdx + 1}`);
                        btn.innerHTML = `<img src="${photoSrc}" alt="Miniatura ${pIdx + 1}" />`;
                        btn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            lightboxImg.src = photoSrc;
                            thumbsContainer.querySelectorAll('.modal-thumb-btn').forEach(b => b.classList.remove('active'));
                            btn.classList.add('active');
                        });
                        thumbsContainer.appendChild(btn);
                    });
                } else {
                    thumbsContainer.style.display = 'none';
                }
            }

            lightboxImg.classList.remove('fade-out');
        }, 150);
    };

    const openLightbox = (card, categoryCards, index) => {
        if (!lightbox || !card) return;
        modalHistory = [];
        currentCategoryCards = categoryCards;
        currentCardIndex = index;
        currentCard = card;

        updateLightboxContent(card);
        updateModalHistoryUI();

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
        currentCard = null;
        modalHistory = [];

        const backBtn = document.getElementById('modal-back-btn');
        if (backBtn) backBtn.style.display = 'none';

        if (lightboxPrevBtn) lightboxPrevBtn.style.display = '';
        if (lightboxNextBtn) lightboxNextBtn.style.display = '';

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

    const modalBackBtn = document.getElementById('modal-back-btn');
    if (modalBackBtn) {
        modalBackBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (modalHistory.length === 0) return;
            const previousState = modalHistory.pop();

            currentCard = previousState.card;
            currentCategoryCards = previousState.categoryCards;
            currentCardIndex = previousState.cardIndex;

            updateLightboxContent(currentCard);
            updateModalHistoryUI();
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

    // --- CARRUSEL DE FONDO DINÁMICO (HERO SLIDER CON PUNTOS FOCALES PERSONALIZADOS) ---
    const heroImages = [
        { src: 'assets/images/padrillos/Padrillo - BB Tropero (Cabron) 2667.jpg', focalMobile: '80% center', focalDesktop: 'center 18%' },
        { src: 'assets/images/padrillos/Padrillo - SHR Timoteo 2820.jpg', focalMobile: '80% center', focalDesktop: 'center 18%' },
        { src: 'assets/images/madres/Madre - Brissa 2577.jpg', focalMobile: '80% center', focalDesktop: 'center 18%' },
        { src: 'assets/images/madres/Madre - Canela 2598.jpg', focalMobile: '80% center', focalDesktop: 'center 18%' },
        { src: 'assets/images/madres/Madre - Mi Querencia Tigra 2703.jpg', focalMobile: '20% center', focalDesktop: 'center 18%' },
        { src: 'assets/images/madres/Madre - Pulga 2583-2.jpg', focalMobile: '75% center', focalDesktop: 'center 18%' },
        { src: 'assets/images/madres/Madre - SF Lili 2500.jpg', focalMobile: '80% center', focalDesktop: 'center 18%' },
        { src: 'assets/images/generaciones/25/Gen25 - SHR Barullo 2523.jpg', focalMobile: '75% center', focalDesktop: 'center 18%' },
        { src: 'assets/images/generaciones/25/Gen25 - SHR Toscana 2553.jpg', focalMobile: '75% center', focalDesktop: 'center 18%' },
        { src: 'assets/images/generaciones/24/Gen24 - SHR Canelon 2784.jpg', focalMobile: '20% center', focalDesktop: 'center 18%' },
        { src: 'assets/images/generaciones/23/Gen23 - SHR Barbie 2757.jpg', focalMobile: '80% center', focalDesktop: 'center 18%' }
    ];

    const initHeroSlider = () => {
        const sliderContainer = document.getElementById('hero-slider');
        if (!sliderContainer || heroImages.length === 0) return;

        // Aleatorizar el orden de las imágenes en cada carga
        const shuffled = [...heroImages].sort(() => Math.random() - 0.5);

        sliderContainer.innerHTML = '';
        const slides = shuffled.map((item, index) => {
            const slide = document.createElement('div');
            slide.className = 'hero-slide' + (index === 0 ? ' active' : '');
            slide.style.backgroundImage = `url("${encodeURI(item.src)}")`;
            sliderContainer.appendChild(slide);
            return { element: slide, focalMobile: item.focalMobile, focalDesktop: item.focalDesktop, src: item.src };
        });

        const updateFocalPoints = () => {
            const isMobile = window.innerWidth <= 768;
            slides.forEach(slideObj => {
                slideObj.element.style.backgroundPosition = isMobile ? slideObj.focalMobile : slideObj.focalDesktop;
            });
        };

        // Aplicar posiciones iniciales y en cambio de tamaño
        updateFocalPoints();
        window.addEventListener('resize', updateFocalPoints);

        // Precargar la segunda imagen de la secuencia
        if (shuffled.length > 1) {
            const imgPreload = new Image();
            imgPreload.src = shuffled[1].src;
        }

        let currentIndex = 0;
        const intervalTime = 5000; // 5 segundos por slide

        setInterval(() => {
            slides[currentIndex].element.classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].element.classList.add('active');

            // Precargar la siguiente foto de la secuencia
            const nextIndex = (currentIndex + 1) % slides.length;
            const nextImg = new Image();
            nextImg.src = shuffled[nextIndex].src;
        }, intervalTime);
    };

    initHeroSlider();
});
