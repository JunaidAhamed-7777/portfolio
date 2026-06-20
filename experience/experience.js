const companyData = {
    flyrank: {
        img: '../assets/flyrankAI.png',
        heading: 'Flyrank AI &mdash; Machine Learning Engineer Intern',
        text: `
            <p>Currently working as a Machine Learning Engineer Intern in FlyrankAI</p>
            <p>Stay tuned for more updates !</p>
        `
    },
    docwo: {
        img: '../assets/docwo.png',
        heading: 'Docwo.com &mdash; Backend Developer Intern',
        text: `
            <p><strong>Tools Used:</strong> PostgreSQL, Javascript, Node.js, Express, Redis, Prisma, Socket.IO, Azure</p>
            <p>Worked as a Backend Engineer Intern at Docwo Pvt. Ltd. from April 2026 to June 2026 and worked with a team of 9 members throughout this time period.</p>
            <p>Architected, Built and deployed the entire backend service of an ambulance dispatch app (ResQ).</p>
            <p>Supports patient, driver, and admin applications with real-time ambulance discovery, booking, driver assignment, and live GPS.</p>
            <p>Hardened the platform with JWT authentication (refresh token rotation), Google OAuth 2.0 integration, role-based access control, rate limiting on critical endpoints, and AES 256 GCM encryption for PII fields and progressive OTP lockout with attacker detection.</p>
            <p>Comprehensive admin dashboard with real time KPIs, growth reports, support tickets, and full CRUD; engineered automatic driver matching (proximity search, accept/reject with timeout retry, escalation), Socket.IO live tracking, transactional notifications, Swagger API documentation, and production deployment on Azure App Service.</p>
            <p class="glow-text">Won the Best App award in the final weekly sprint !</p>
        `
    },
    firefox: {
        img: '../assets/firefox.png',
        heading: 'Mozilla Firefox Club &mdash; Development Team',
        text: `
            <p>Technical team member from September 2024 to November of 2025 in Mozilla Firefox Club at Vellore Institute of Technology, Vellore.</p>
            <p>Designed and executed technical workshops, hackathons, and developer-focused events.</p>
            <p>Coordinated with multidisciplinary teams to manage event planning, technical infrastructure and operational workflows.</p>
            <p>Developed softwares for events conducted by the club.</p>
        `
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('home-button');
    if (homeButton) {
        homeButton.addEventListener('click', () => {
            window.location.href = '../index.html';
        });
    }

    const overlay = document.getElementById('modal-overlay');
    const modalBox = document.getElementById('modal-box');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.getElementById('modal-close');

    document.querySelectorAll('.exp-box').forEach(box => {
        box.addEventListener('click', () => {
            const company = box.getAttribute('data-company');
            const data = companyData[company];
            if (!data) return;

            modalBody.innerHTML = `
                <img src="${data.img}" alt="" class="modal-img" draggable="false">
                <h2 class="modal-heading">${data.heading}</h2>
                <div class="modal-text">${data.text}</div>
            `;

            overlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal();
            }
        });
    }
});