// Dados dos deuses para o modal
const godsData = {
    // Deuses Primordiais
    caos: {
        name: "Caos",
        title: "O Vazio Primordial",
        description: "Caos foi a primeira divindade a existir, representando o vazio primordial que antecedeu toda a criação. Não era exatamente um deus no sentido tradicional, mas sim o estado inicial do universo - um abismo sem forma, escuro e vazio.",
        domain: "Vazio primordial, origem de tudo",
        symbols: "Abismo, vazio, escuridão primordial",
        relations: "Gerou Nix (Noite) e Érebo (Trevas)",
        icon: "🌌"
    },
    gaia: {
        name: "Gaia",
        title: "A Mãe Terra",
        description: "Gaia é a personificação da Terra e uma das divindades primordiais mais importantes. Ela é considerada a mãe de todos os seres vivos e a ancestral de muitos deuses. Gaia possui um poder imenso e é respeitada por todos.",
        domain: "Terra, natureza, fertilidade",
        symbols: "Terra, montanhas, plantas, animais",
        relations: "Mãe de Urano (Céu), dos Titãs, Ciclopes e Hecatônquiros",
        icon: "🌍"
    },
    tartaro: {
        name: "Tártaro",
        title: "O Abismo Sombrio",
        description: "Tártaro é tanto um lugar quanto uma divindade primordial. Como lugar, é a região mais profunda do submundo, onde ficam prisioneiros os inimigos dos deuses. Como divindade, representa o abismo e o castigo eterno.",
        domain: "Submundo, abismo, punição",
        symbols: "Abismo, correntes, fogo eterno",
        relations: "Pai de monstros como Tifão",
        icon: "🔥"
    },
    nix: {
        name: "Nix",
        title: "A Deusa da Noite",
        description: "Nix é uma das divindades primordiais mais poderosas e temidas. Ela personifica a noite e é mãe de muitas divindades importantes. Até mesmo Zeus a respeitava e temia seu poder.",
        domain: "Noite, escuridão, mistério",
        symbols: "Estrelas, lua nova, manto escuro",
        relations: "Mãe das Moiras (Destino), Hipnos (Sono) e Tânatos (Morte)",
        icon: "🌙"
    },
    erebo: {
        name: "Érebo",
        title: "As Trevas Primordiais",
        description: "Érebo representa a escuridão primordial e as trevas que existiam antes da criação da luz. Ele é irmão de Nix e juntos governam os aspectos sombrios do cosmos.",
        domain: "Trevas, escuridão, sombras",
        symbols: "Sombras, escuridão, vazio negro",
        relations: "Irmão de Nix, pai de Éter (Luz) e Hemera (Dia)",
        icon: "🌑"
    },
    urano: {
        name: "Urano",
        title: "O Céu Estrelado",
        description: "Urano é a personificação do céu e foi o primeiro governante do universo. Filho e esposo de Gaia, ele foi pai dos Titãs, Ciclopes e Hecatônquiros, mas foi destronado por seu filho Cronos.",
        domain: "Céu, cosmos, autoridade primordial",
        symbols: "Céu estrelado, cosmos, coroa celestial",
        relations: "Esposo de Gaia, pai dos Titãs e de Cronos",
        icon: "☁️"
    },
    
    // Deuses Olímpicos
    zeus: {
        name: "Zeus",
        title: "Rei dos Deuses",
        description: "Zeus é o rei dos deuses e governante do Monte Olimpo. Deus do céu e do trovão, ele derrotou os Titãs e estabeleceu a ordem olímpica. É conhecido por sua autoridade suprema e seus muitos relacionamentos amorosos.",
        domain: "Céu, trovão, justiça, autoridade",
        symbols: "Raio, águia, carvalho, cetro",
        relations: "Esposo de Hera, pai de muitos deuses e heróis",
        icon: "⚡"
    },
    hera: {
        name: "Hera",
        title: "Rainha dos Deuses",
        description: "Hera é a rainha dos deuses e deusa do casamento e da família. Esposa de Zeus, ela é conhecida por sua dignidade real, mas também por seu ciúme em relação às infidelidades do marido.",
        domain: "Casamento, família, fidelidade, realeza",
        symbols: "Pavão, coroa, cetro, romã",
        relations: "Esposa de Zeus, mãe de Ares e Hefesto",
        icon: "👑"
    },
    poseidon: {
        name: "Poseidon",
        title: "Senhor dos Mares",
        description: "Poseidon é o deus dos mares, terremotos e cavalos. Irmão de Zeus, ele governa todos os oceanos e é conhecido por seu temperamento tempestuoso e poder sobre as águas.",
        domain: "Mares, oceanos, terremotos, cavalos",
        symbols: "Tridente, cavalo, golfinho, touro",
        relations: "Irmão de Zeus e Hades, pai de muitos heróis",
        icon: "🔱"
    },
    atena: {
        name: "Atena",
        title: "Deusa da Sabedoria",
        description: "Atena é a deusa da sabedoria, estratégia militar e artesanato. Nasceu da cabeça de Zeus já adulta e armada. É a padroeira de Atenas e símbolo da inteligência e da guerra justa.",
        domain: "Sabedoria, estratégia, artesanato, guerra justa",
        symbols: "Coruja, oliveira, escudo, lança",
        relations: "Filha de Zeus, virgem eterna",
        icon: "🦉"
    },
    apolo: {
        name: "Apolo",
        title: "Deus da Luz",
        description: "Apolo é o deus do sol, música, poesia, profecias e cura. Filho de Zeus, ele representa a beleza, harmonia e perfeição. É também o líder das Musas e patrono das artes.",
        domain: "Sol, música, poesia, profecias, medicina",
        symbols: "Lira, arco e flecha, louro, sol",
        relations: "Filho de Zeus, irmão gêmeo de Ártemis",
        icon: "☀️"
    },
    artemis: {
        name: "Ártemis",
        title: "Deusa da Caça",
        description: "Ártemis é a deusa da caça, vida selvagem e lua. Irmã gêmea de Apolo, ela é uma deusa virgem que protege as jovens donzelas e governa os animais selvagens.",
        domain: "Caça, vida selvagem, lua, castidade",
        symbols: "Arco e flecha, cervo, cipreste, lua crescente",
        relations: "Filha de Zeus, irmã gêmea de Apolo",
        icon: "🏹"
    },
    afrodite: {
        name: "Afrodite",
        title: "Deusa do Amor",
        description: "Afrodite é a deusa do amor, beleza e prazer. Nasceu da espuma do mar e é irresistivelmente bela. Seu poder sobre o amor afeta tanto deuses quanto mortais.",
        domain: "Amor, beleza, prazer, fertilidade",
        symbols: "Pomba, rosa, concha, espelho",
        relations: "Esposa de Hefesto, amante de Ares",
        icon: "💕"
    },
    ares: {
        name: "Ares",
        title: "Deus da Guerra",
        description: "Ares é o deus da guerra, coragem e valor militar. Filho de Zeus e Hera, ele representa os aspectos mais brutais e violentos da guerra, contrastando com a estratégia de Atena.",
        domain: "Guerra, coragem, violência, valor",
        symbols: "Lança, escudo, capacete, javali",
        relations: "Filho de Zeus e Hera, amante de Afrodite",
        icon: "⚔️"
    },
    hefesto: {
        name: "Hefesto",
        title: "Deus do Fogo",
        description: "Hefesto é o deus do fogo, metalurgia e artesanato. Ferreiro dos deuses, ele cria armas e objetos mágicos em sua forja. Apesar de sua aparência, é um artesão incomparável.",
        domain: "Fogo, metalurgia, artesanato, tecnologia",
        symbols: "Martelo, bigorna, fogo, machado",
        relations: "Filho de Hera, esposo de Afrodite",
        icon: "🔨"
    },
    hermes: {
        name: "Hermes",
        title: "Mensageiro dos Deuses",
        description: "Hermes é o mensageiro dos deuses e deus do comércio, viagens e comunicação. Conhecido por sua astúcia e velocidade, ele guia as almas dos mortos ao submundo.",
        domain: "Mensagens, comércio, viagens, astúcia",
        symbols: "Caduceu, sandálias aladas, capacete alado",
        relations: "Filho de Zeus, guia das almas",
        icon: "🪶"
    },
    dionisio: {
        name: "Dionísio",
        title: "Deus do Vinho",
        description: "Dionísio é o deus do vinho, festivais e êxtase. Filho de Zeus, ele representa a liberdade, celebração e os aspectos mais selvagens da natureza humana.",
        domain: "Vinho, festivais, êxtase, teatro",
        symbols: "Uva, tirso, leopardo, hera",
        relations: "Filho de Zeus, último a se juntar aos Olímpicos",
        icon: "🍇"
    },
    hades: {
        name: "Hades",
        title: "Senhor dos Mortos",
        description: "Hades é o deus do submundo e dos mortos. Irmão de Zeus e Poseidon, ele governa o reino dos mortos com justiça, mas raramente deixa seu domínio sombrio.",
        domain: "Submundo, mortos, riquezas subterrâneas",
        symbols: "Capacete da invisibilidade, cipreste, narciso",
        relations: "Irmão de Zeus, esposo de Perséfone",
        icon: "💀"
    }
};

// Navegação suave
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetPosition = section.offsetTop - headerHeight;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// Adicionar event listeners para navegação
document.addEventListener('DOMContentLoaded', function() {
    // Navegação suave para links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    
    // Modal functionality
    const modal = document.getElementById('godModal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close');
    
    // Abrir modal ao clicar em card de deus
    const godCards = document.querySelectorAll('.god-card');
    godCards.forEach(card => {
        card.addEventListener('click', function() {
            const godKey = this.getAttribute('data-god');
            const godInfo = godsData[godKey];
            
            if (godInfo) {
                modalBody.innerHTML = `
                    <div class="modal-god-info">
                        <div class="modal-header">
                            <span class="modal-icon">${godInfo.icon}</span>
                            <div>
                                <h2>${godInfo.name}</h2>
                                <h3>${godInfo.title}</h3>
                            </div>
                        </div>
                        <div class="modal-content-body">
                            <p class="god-description">${godInfo.description}</p>
                            <div class="god-details">
                                <div class="detail-item">
                                    <strong>Domínio:</strong> ${godInfo.domain}
                                </div>
                                <div class="detail-item">
                                    <strong>Símbolos:</strong> ${godInfo.symbols}
                                </div>
                                <div class="detail-item">
                                    <strong>Relações:</strong> ${godInfo.relations}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Fechar modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Fechar modal clicando fora
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Hamburger menu (mobile)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Animação de entrada dos cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar cards para animação
    const cards = document.querySelectorAll('.god-card, .curiosity-card, .timeline-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Efeito parallax no hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Destacar link ativo na navegação
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Adicionar estilos CSS para o modal via JavaScript
const modalStyles = `
    .modal-god-info {
        text-align: left;
    }
    
    .modal-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid var(--gold);
    }
    
    .modal-icon {
        font-size: 3rem;
    }
    
    .modal-header h2 {
        font-family: var(--font-heading);
        color: var(--dark-gold);
        margin: 0;
        font-size: 2rem;
    }
    
    .modal-header h3 {
        color: var(--dark-gray);
        margin: 0;
        font-weight: 400;
        opacity: 0.8;
    }
    
    .god-description {
        font-size: 1.1rem;
        line-height: 1.8;
        margin-bottom: 2rem;
        color: var(--dark-gray);
    }
    
    .god-details {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .detail-item {
        padding: 1rem;
        background: var(--light-gray);
        border-radius: 8px;
        border-left: 4px solid var(--gold);
    }
    
    .detail-item strong {
        color: var(--dark-gold);
        display: block;
        margin-bottom: 0.5rem;
    }
    
    .nav-link.active {
        color: var(--dark-gold);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
    
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 1rem;
            box-shadow: var(--shadow);
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    }
`;

// Adicionar estilos ao documento
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);

