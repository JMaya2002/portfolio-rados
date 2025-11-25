// ============================================
// NAVEGACIÓN MÓVIL
// ============================================
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

// ============================================
// NAVBAR SCROLL
// ============================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// ANIMACIONES SCROLL
// ============================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('section, .project-card, .skill-item').forEach(el => {
    observer.observe(el);
});

// ============================================
// MODAL DE PROYECTOS
// ============================================
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');

// 🔄 PERSONALIZAR: Datos de los proyectos
const projectsData = {
    '1': {
        title: 'Casa Minimalista Urbana',
        category: 'Residencial',
        description: 'Proyecto de vivienda unifamiliar que explora la integración de espacios interiores y exteriores a través de grandes superficies acristaladas y patios internos. El diseño prioriza la conexión visual con el jardín mientras mantiene la privacidad mediante muros estratégicamente posicionados. Se utilizaron materiales nobles como hormigón visto, madera natural y vidrio de baja emisividad.',
        year: '2024',
        type: 'Proyecto Académico',
        software: 'Revit, Lumion, Photoshop',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200'
    },
    '2': {
        title: 'Centro Cultural Comunitario',
        category: 'Cultural',
        description: 'Diseño de un espacio cultural multifuncional que sirve como punto de encuentro para la comunidad local. El proyecto incorpora salas de exposición, talleres creativos, biblioteca y auditorio. La propuesta arquitectónica se basa en la transparencia y accesibilidad, con fachadas permeables que invitan al público a descubrir las actividades interiores. Se implementaron estrategias pasivas de climatización y captación de agua pluvial.',
        year: '2023',
        type: 'Proyecto de Curso',
        software: 'SketchUp, V-Ray, Illustrator',
        image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200'
    },
    '3': {
        title: 'Espacio de Co-working',
        category: 'Comercial',
        description: 'Intervención de interiorismo en un espacio industrial existente para crear oficinas compartidas flexibles. El diseño incorpora mobiliario modular que permite reconfigurar los espacios según las necesidades. Se crearon zonas diferenciadas: áreas de concentración individual, salas de reunión, espacios de descanso y zonas colaborativas abiertas. La paleta de materiales combina elementos industriales originales con intervenciones contemporáneas.',
        year: '2024',
        type: 'Proyecto Profesional',
        software: 'AutoCAD, SketchUp, Photoshop',
        image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200'
    },
    '4': {
        title: 'Parque Urbano Lineal',
        category: 'Urbano',
        description: 'Propuesta de regeneración urbana para transformar una antigua vía férrea abandonada en un parque lineal que conecta diferentes barrios de la ciudad. El proyecto incluye zonas verdes, senderos peatonales y ciclistas, áreas de juego infantil, huertos urbanos y espacios para actividades comunitarias. La estrategia paisajística incorpora especies nativas de bajo mantenimiento.',
        year: '2023',
        type: 'Proyecto Académico',
        software: 'AutoCAD, Photoshop, Illustrator',
        image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200'
    },
    '5': {
        title: 'Pabellón Paramétrico',
        category: 'Experimental',
        description: 'Exploración de diseño generativo y fabricación digital para crear una estructura temporal efímera. El proyecto utiliza algoritmos paramétricos en Grasshopper para generar geometrías complejas basadas en la optimización estructural. El pabellón fue diseñado para ser fabricado con corte CNC en paneles de madera contrachapada, ensamblados sin tornillos mediante un sistema de encastres.',
        year: '2024',
        type: 'Workshop',
        software: 'Rhinoceros, Grasshopper, AutoCAD',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200'
    },
    '6': {
        title: 'Loft Industrial',
        category: 'Interiorismo',
        description: 'Rehabilitación de un antiguo almacén industrial convertido en vivienda loft. La intervención respeta y pone en valor los elementos estructurales originales: vigas metálicas, muros de ladrillo visto y techos altos con estructura aparente. Se creó una caja de madera suspendida que alberga las zonas privadas (dormitorio y baño), mientras el espacio principal fluye libremente integrando cocina, comedor y sala de estar.',
        year: '2023',
        type: 'Proyecto de Taller',
        software: 'Revit, Lumion, Photoshop',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200'
    }
};

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.dataset.project;
        const project = projectsData[projectId];

        if (project) {
            document.getElementById('modalImage').src = project.image;
            document.getElementById('modalCategory').textContent = project.category;
            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalDescription').textContent = project.description;
            document.getElementById('modalYear').textContent = project.year;
            document.getElementById('modalType').textContent = project.type;
            document.getElementById('modalSoftware').textContent = project.software;

            modal.classList.add('active');
            document.body.classList.add('no-scroll');
        }
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});

// ============================================
// FORMULARIO CONTACTO
// ============================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // 🔄 PERSONALIZAR: Integra aquí tu servicio de email (EmailJS, Formspree, etc.)
    alert(`¡Gracias ${name}! Tu mensaje ha sido enviado. Te contactaré pronto.`);

    contactForm.reset();
});

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
