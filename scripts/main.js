document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
        });
    }

    // Sidebar hover interactions
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const defaultDisplay = document.getElementById('default-display');
    const hoverDisplay = document.getElementById('hover-display');
    const hoverHeading = document.getElementById('hover-heading');
    const hoverBody = document.getElementById('hover-body');

    const descriptions = {
        about: { heading: 'About Me', body: 'Get to know more about me and who I am by clicking this category!' },
        experience: { heading: 'Experience', body: 'Explore my professional journey and the roles I’ve held.' },
        projects: { heading: 'Projects', body: 'Check out the things I’ve built and contributed to.' },
        education: { heading: 'Education', body: 'My academic background and what I’ve studied.' },
        achievements: { heading: 'Achievements', body: 'Highlights and milestones I’m proud of.' },
        certifications: { heading: 'Certifications', body: 'Professional certifications and completed courses.' },
        skills: { heading: 'Skills', body: 'Technologies, tools, and languages I work with.' }
    };

    sidebarItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const category = item.getAttribute('data-category');
            if (descriptions[category]) {
                hoverHeading.textContent = descriptions[category].heading;
                hoverBody.textContent = descriptions[category].body;
                defaultDisplay.classList.add('hidden');
                hoverDisplay.classList.remove('hidden');
            }
        });

        item.addEventListener('mouseleave', () => {
            defaultDisplay.classList.remove('hidden');
            hoverDisplay.classList.add('hidden');
        });
    });
});