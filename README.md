# Lovely Yeswanth P - Professional Portfolio

A modern, responsive portfolio website designed for AI/ML Engineer and Data Science job applications.

## Features

- **Modern Design**: Clean, professional design with gradient accents and smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Optimized Performance**: Fast loading times with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Interactive Elements**: Smooth scrolling, hover effects, and animated sections

## Sections

1. **Hero Section**: Eye-catching introduction with key stats
2. **About**: Detailed professional summary
3. **Experience**: Timeline of professional roles with achievements
4. **Education**: Academic background and qualifications
5. **Projects**: Featured AI/ML projects with metrics
6. **Publications**: Research papers and academic contributions
7. **Skills**: Technical skills organized by category
8. **Contact**: Multiple ways to get in touch

## Customization Guide

### 1. Update Personal Information

**In `index.html`:**

- Update the resume link in the Hero section (line 57):
  ```html
  <a href="YOUR_RESUME_LINK" target="_blank" class="btn btn-secondary">
  ```

- Replace the placeholder image in the About section (line 121):
  ```html
  <img src="YOUR_IMAGE_URL" alt="Lovely Yeswanth Panchumarthi">
  ```

### 2. Add Your Resume

Upload your resume to:
- Google Drive (recommended for easy updates)
- GitHub repository
- Cloud storage service

Then update the link in the Hero section.

### 3. Update Publications

Edit the Publications section to add your specific papers:
- Full paper titles
- Co-authors
- Publication venues
- arXiv or DOI links
- Tags/keywords

### 4. Customize Colors

**In `styles.css`, update the CSS variables (lines 6-18):**

```css
:root {
    --cream-bg: #F5F1E8;          /* Main background */
    --gradient-start: #667EEA;     /* Primary accent color */
    --gradient-end: #764BA2;       /* Secondary accent color */
}
```

### 5. Update Social Links

**In the Contact section:**
- LinkedIn URL
- GitHub URL
- Google Scholar URL
- Email address

## File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Vanilla JS for interactivity
- **Google Fonts**: Space Grotesk & Inter

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. **Optimize Images**: Use WebP format for better compression
2. **Add Real Photo**: Replace placeholder with professional headshot
3. **Lazy Loading**: Images load as you scroll
4. **Minimal Dependencies**: No heavy frameworks

## Deployment

### GitHub Pages (Recommended)

1. Push to GitHub repository named `username.github.io`
2. Go to Settings > Pages
3. Select main branch as source
4. Your site will be live at `https://username.github.io`

### Netlify

1. Drag and drop folder to Netlify
2. Site goes live immediately
3. Free custom domain support

## Important Updates to Make

✅ **High Priority:**
1. Upload your professional photo
2. Add your actual resume link
3. Update email in contact section
4. Verify all GitHub project links work
5. Update publication details if needed

✅ **Medium Priority:**
1. Add specific GPA if desired
2. Update education achievements
3. Add more project metrics
4. Customize color scheme

✅ **Optional:**
1. Add Google Analytics
2. Add custom favicon
3. Set up contact form
4. Add blog section

## Tips for Job Applications

1. **Keep it Updated**: Regularly add new projects and experiences
2. **Quantify Achievements**: Use specific metrics and numbers
3. **Show Impact**: Emphasize business value and outcomes
4. **Mobile First**: Most recruiters view on mobile
5. **Fast Loading**: Keep it under 3 seconds load time

## Contact

For questions or customization help:
- Email: Lpanch2@emory.edu
- LinkedIn: [linkedin.com/in/lovelyyeswanth](https://www.linkedin.com/in/lovelyyeswanth/)
- GitHub: [github.com/lyeswanthp](https://github.com/lyeswanthp)

## License

Feel free to use this template for your own portfolio. Attribution appreciated but not required.

---

**Good luck with your job applications!** 🚀
