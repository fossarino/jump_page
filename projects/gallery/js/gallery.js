// gallery.js
// External JS for ArtDM 174 Gallery Project
// Handles album navigation and progressive enhancement
// Author: Steve Foss
// Date: 2025-Oct

/**
 * Progressive enhancement: Hide all albums except the first by default,
 * navigation between albums.
 */
document.addEventListener('DOMContentLoaded', function () {
    const albums = document.querySelectorAll('.album');
    const navLinks = document.querySelectorAll('.album-link');

    // Hide all albums except the first
    albums.forEach((album, idx) => {
        album.style.display = idx === 0 ? 'block' : 'none';
        if (idx === 0) album.classList.add('active');
        else album.classList.remove('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('aria-controls');
            albums.forEach(album => {
                if (album.id === targetId) {
                    album.style.display = 'block';
                    album.classList.add('active');
                } else {
                    album.style.display = 'none';
                    album.classList.remove('active');
                }
            });
            // Update focus for accessibility
            link.focus();
        });
    });
});
