@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
    /* New Aesthetic: Cream, Slate, Deep Blue */
    --background-cream: #F9F9F4; /* Light Cream Background */
    --card-white: #FFFFFF;
    --text-slate-dark: #2A3644; /* Dark Slate for Headings */
    --text-slate-medium: #475569; /* Medium Slate for Body Text */
    --accent-blue: #0077B6; /* Deep Blue Accent (High Contrast) */
    --accent-blue-light: #52a8df; /* Lighter shade for gradients */
    --accent-tint: rgba(0, 119, 182, 0.1);
    --border-light: #E0E0DB; 
    
    --font-sans: 'Inter', sans-serif;
    
    --fz-xs: 13px;
    --fz-sm: 15px;
    --fz-md: 17px;
    --fz-lg: 19px;
    --fz-xl: 22px;
    --fz-xxl: 28px;
    --fz-heading: 36px;
    
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --shadow-subtle: 0 2px 8px rgba(0, 0, 0, 0.05);
    --shadow-card: 0 8px 16px rgba(0, 0, 0, 0.1);
    --border-radius: 8px;
}

/* Base Styles */
* { box-sizing: border-box; margin: 0; padding: 0; transition: color var(--transition), background-color var(--transition), border-color var(--transition), box-shadow var(--transition); }
html { scroll-behavior: smooth; }
body { font-family: var(--font-sans); background-color: var(--background-cream); color: var(--text-slate-medium); line-height: 1.6; }
a { text-decoration: none; color: var(--accent-blue); transition: var(--transition); }
a:hover { color: var(--accent-blue-light); }
ul { list-style: none; }
strong { color: var(--text-slate-dark); font-weight: 700; }
.highlight-value { color: var(--accent-blue); font-weight: 800; }

/* Layout Containers */
.main-content { padding-left: 50px; }
section { margin: 0 auto; padding: 120px 0; max-width: 1400px; width: 90%; }
.cta-button { display: inline-block; padding: 12px 24px; border-radius: 50px; font-weight: 600; font-size: var(--fz-md); transition: var(--transition); }
.cta-button.primary { background-color: var(--accent-blue); color: var(--card-white); border: 2px solid var(--accent-blue); }
.cta-button.primary:hover { background-color: var(--text-slate-dark); border-color: var(--text-slate-dark); transform: translateY(-3px); }
.cta-button.secondary { background-color: transparent; color: var(--text-slate-dark); border: 2px solid var(--text-slate-dark); }
.cta-button.secondary:hover { background-color: var(--accent-tint); border-color: var(--accent-blue); color: var(--accent-blue); transform: translateY(-3px); }

/* Header & Nav */
header { display: flex; justify-content: space-between; align-items: center; position: fixed; top: 0; width: 100%; height: 80px; padding: 0 50px; background-color: rgba(249, 249, 244, 0.95); backdrop-filter: blur(8px); z-index: 100; box-shadow: var(--shadow-subtle); }
.logo-text { font-size: 1.8rem; font-weight: 800; color: var(--text-slate-dark); border: 2px solid var(--accent-blue); padding: 5px 10px; border-radius: var(--border-radius); }
.logo-text:hover { background-color: var(--accent-tint); }
nav ul { display: flex; gap: 30px; align-items: center; }
nav a { color: var(--text-slate-medium); font-size: var(--fz-sm); font-weight: 500; }
nav a:hover, nav a.active { color: var(--accent-blue); }
.nav-btn { margin-left: 10px; padding: 8px 16px; font-size: var(--fz-sm); }
.social-sidebar { position: fixed; left: 20px; bottom: 0; display: flex; flex-direction: column; gap: 15px; z-index: 10; padding-bottom: 20px;}
.social-sidebar a { color: var(--text-slate-medium); font-size: 20px; transition: var(--transition); }
.social-sidebar a:hover { color: var(--accent-blue); transform: translateY(-3px); }
.sidebar-line { width: 1px; height: 60px; background-color: var(--border-light); margin: 0 auto; }

/* Section Headers */
.section-header { display: flex; align-items: center; gap: 20px; margin-bottom: 60px; }
.section-header h2 { font-size: var(--fz-heading); color: var(--text-slate-dark); font-weight: 800; }
.section-number { color: var(--accent-blue); font-size: var(--fz-xl); font-weight: 500; }
.section-line { height: 2px; background-color: var(--border-light); flex-grow: 1; max-width: 400px; }

/* --- HERO SECTION (SPLIT LAYOUT) --- */
.hero-section { min-height: 100vh; display: flex; align-items: center; padding-top: 80px; }
.hero-section { display: grid; grid-template-columns: 3fr 2fr; gap: 50px; align-items: center; }
.hero-content { max-width: 800px; }
.intro-text { color: var(--accent-blue); font-size: var(--fz-lg); margin-bottom: 10px; }
.name { font-size: clamp(40px, 8vw, 85px); color: var(--text-slate-dark); font-weight: 800; line-height: 1.1; margin-bottom: 10px; }
.subtitle { font-size: clamp(24px, 5vw, 45px); color: var(--text-slate-medium); font-weight: 600; line-height: 1.2; margin-bottom: 25px; }
.role-text { color: var(--accent-blue); font-weight: 800; }
.description { font-size: var(--fz-md); max-width: 600px; margin-bottom: 40px; }
.hero-visual { display: flex; justify-content: center; align-items: center; }
.profile-card { padding: 10px; background-color: var(--card-white); border-radius: var(--border-radius); box-shadow: var(--shadow-card); position: relative; }
.profile-card img { max-width: 100%; height: auto; border-radius: var(--border-radius); filter: grayscale(100%); transition: var(--transition); }
.profile-card:hover img { filter: none; transform: scale(1.02); }

/* --- ABOUT SECTION --- */
.about-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 50px; }
.stats-panel { background-color: var(--card-white); padding: 30px; border-radius: var(--border-radius); box-shadow: var(--shadow-subtle); border-top: 5px solid var(--accent-blue); }
.stats-panel h3 { color: var(--text-slate-dark); font-size: var(--fz-xl); margin-bottom: 20px; font-weight: 700; }
.stats-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
.stat-item { padding-bottom: 15px; border-bottom: 1px dashed var(--border-light); }
.stat-item:last-child { border-bottom: none; }
.stat-value { font-size: var(--fz-xxl); color: var(--accent-blue); display: block; font-weight: 800; margin-bottom: 5px; }
.stat-label { font-size: var(--fz-xs); text-transform: uppercase; color: var(--text-slate-medium); font-weight: 500; }

/* --- PROJECTS SECTION (ASYMMETRIC GRID) --- */
.project-grid-main { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.project-card { 
    background-color: var(--card-white); 
    padding: 30px; 
    border-radius: var(--border-radius); 
    box-shadow: var(--shadow-subtle); 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: var(--transition);
}
.project-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-card); }
.large-card { grid-column: span 2; }
.small-card { grid-column: span 1; }
.card-header { display: flex; align-items: center; margin-bottom: 15px; }
.card-header i { font-size: 24px; color: var(--accent-blue); margin-right: 15px; }
.card-header h4 { color: var(--text-slate-dark); font-size: var(--fz-xl); font-weight: 700; }
.project-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
.project-tags span { background-color: var(--accent-tint); color: var(--accent-blue); font-size: var(--fz-xs); padding: 4px 10px; border-radius: 4px; font-weight: 500; }
.overview-box { background-color: var(--background-cream); padding: 20px; border-radius: var(--border-radius); margin-bottom: 20px; border-left: 4px solid var(--accent-blue); }
.overview-metric { font-size: var(--fz-lg); margin-bottom: 10px; }
.overview-desc { font-size: var(--fz-sm); color: var(--text-slate-medium); }
.project-desc { font-size: var(--fz-md); margin-bottom: 20px; flex-grow: 1; }
.project-link { margin-top: auto; font-size: var(--fz-sm); font-weight: 600; }
.all-projects-link { text-align: center; margin-top: 50px; }

/* --- EXPERIENCE SECTION (VERTICAL TIMELINE) --- */
.timeline-container { position: relative; max-width: 900px; margin: 0 auto; padding-top: 20px; }
.timeline-container::before { content: ''; position: absolute; left: 50%; width: 3px; height: 100%; background: linear-gradient(to bottom, var(--accent-blue-light), var(--border-light)); transform: translateX(-50%); }
.timeline-item { position: relative; margin-bottom: 50px; }
.timeline-item:nth-child(odd) { transform: translateX(-50%); }
.timeline-item:nth-child(even) { transform: translateX(50%); }
.timeline-dot { position: absolute; top: 10px; left: 50%; width: 14px; height: 14px; background-color: var(--accent-blue); border-radius: 50%; transform: translateX(-50%); z-index: 10; }
.timeline-date { position: absolute; top: 5px; width: 200px; color: var(--accent-blue); font-weight: 600; font-size: var(--fz-xs); text-transform: uppercase; }
.timeline-item:nth-child(odd) .timeline-date { right: 52%; text-align: right; }
.timeline-item:nth-child(even) .timeline-date { left: 52%; text-align: left; }
.timeline-card { background-color: var(--card-white); padding: 25px; border-radius: var(--border-radius); box-shadow: var(--shadow-card); width: 400px; border-bottom: 4px solid var(--accent-blue); }
.timeline-item:nth-child(odd) .timeline-card { float: left; }
.timeline-item:nth-child(even) .timeline-card { float: right; }
.timeline-card h3 { color: var(--text-slate-dark); font-size: var(--fz-md); margin-bottom: 10px; font-weight: 700; }
.timeline-card p { font-size: var(--fz-sm); margin-bottom: 10px; }
.timeline-card ul { padding-left: 20px; font-size: var(--fz-sm); }
.timeline-card li { margin-bottom: 5px; list-style: disc; color: var(--text-slate-medium); }

/* --- SKILLS SECTION (PILL CLOUD) --- */
.skill-groups-container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
.skill-group h3 { color: var(--text-slate-dark); font-size: var(--fz-xl); margin-bottom: 25px; font-weight: 700; border-bottom: 2px solid var(--border-light); padding-bottom: 10px; }
.skill-cloud { display: flex; flex-wrap: wrap; gap: 10px; }
.skill-cloud span { 
    background-color: var(--card-white); 
    color: var(--text-slate-dark); 
    font-size: var(--fz-sm); 
    padding: 8px 15px; 
    border-radius: 50px; 
    border: 1px solid var(--border-light);
    box-shadow: var(--shadow-subtle);
    transition: var(--transition);
}
.skill-cloud span:hover {
    background-color: var(--accent-tint);
    border-color: var(--accent-blue);
    color: var(--accent-blue);
}

/* --- PUBLICATIONS & CONTACT --- */
.publications-list { background-color: var(--card-white); padding: 40px; border-radius: var(--border-radius); box-shadow: var(--shadow-card); }
.pub-item { display: flex; align-items: flex-start; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid var(--border-light); }
.pub-item i { font-size: 20px; color: var(--accent-blue); margin-right: 15px; margin-top: 5px; }
.pub-item p { margin: 0; color: var(--text-slate-medium); font-size: var(--fz-md); }
.pub-cta { margin-top: 20px; }

.contact-section { text-align: center; max-width: 800px; margin: 0 auto; padding-top: 80px; padding-bottom: 120px; }
.contact-text { font-size: var(--fz-lg); margin-bottom: 40px; }
.primary-contact { font-size: var(--fz-xl); padding: 15px 30px; }


/* Footer */
footer { padding: 40px 0; text-align: center; background-color: var(--card-white); border-top: 1px solid var(--border-light); }
.footer-content { max-width: 1200px; margin: 0 auto; }
.footer-text { font-size: var(--fz-xs); color: var(--text-slate-medium); margin-top: 15px; }

/* Mobile & Responsiveness */
@media (max-width: 1200px) {
    .skill-groups-container { grid-template-columns: 1fr; }
    .project-grid-main { grid-template-columns: repeat(2, 1fr); }
    .large-card { grid-column: span 2; }
}

@media (max-width: 900px) {
    .main-content { padding-left: 0; }
    .hero-section { grid-template-columns: 1fr; text-align: center; padding-left: 20px; padding-right: 20px; }
    .hero-visual { order: -1; margin-bottom: 40px; }
    .about-grid { grid-template-columns: 1fr; gap: 30px; }
    .stats-panel { order: -1; }
    .project-grid-main { grid-template-columns: 1fr; }
    .large-card { grid-column: span 1; }
    .timeline-container::before { left: 20px; }
    .timeline-item { transform: translateX(0) !important; margin-left: 0; }
    .timeline-item:nth-child(odd) .timeline-date { right: auto; left: 60px; text-align: left; }
    .timeline-item:nth-child(even) .timeline-date { right: auto; left: 60px; text-align: left; }
    .timeline-card { width: 100%; float: none !important; margin-left: 60px; }
    .timeline-item:nth-child(odd) .timeline-card { float: none !important; }
    .timeline-dot { left: 20px; }
    .timeline-item:nth-child(odd) { margin-bottom: 70px; }
    .timeline-item:nth-child(even) { margin-bottom: 70px; }
}

@media (max-width: 640px) {
    header { padding: 0 20px; }
    .section-header h2 { font-size: 28px; }
    .name { font-size: 40px; }
    .subtitle { font-size: 24px; }
    .cta-buttons { display: flex; flex-direction: column; gap: 15px; }
    .cta-button { width: 100%; }
    .mobile-menu-toggle { display: flex; flex-direction: column; cursor: pointer; z-index: 101; }
    .mobile-menu-toggle span { display: block; width: 25px; height: 3px; background-color: var(--accent-blue); margin: 3px 0; transition: var(--transition); }
    nav { position: fixed; top: 0; right: -100%; width: 70%; height: 100vh; background-color: var(--background-cream); z-index: 99; box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1); }
    nav.active { right: 0; }
    nav ul { flex-direction: column; padding-top: 100px; gap: 20px; align-items: flex-start; padding-left: 30px; }
} 