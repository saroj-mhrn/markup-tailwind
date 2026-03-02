export const MobileNav = () => {
    const navopener = document.querySelector('.nav-opener');
    const navwrap = document.querySelector('.nav');
    const links = navwrap ? navwrap.querySelectorAll('a') : [];
    const navactive = 'nav-active';

    if (navopener) {
        navopener.addEventListener('click', () => {
            document.body.classList.toggle(navactive);
        });
    }

    document.querySelectorAll('.nav ul li').forEach((item) => {
        const drop = item.querySelector('ul');
        const link = item.querySelector('a');
        if (drop) {
            item.classList.add('hasdrop');
            drop.setAttribute('data-more-content', '');
            if (link) {
                link.classList.add('hasdrop-a');
                link.setAttribute('data-more', '');
                link.setAttribute('data-outside', '');
            }
        }
    });

    links.forEach((link) => {
        link.addEventListener('click', () => {
            if (!link.classList.contains('hasdrop-a')) {
                document.body.classList.remove(navactive);
            }
        });
    });

    document.documentElement.addEventListener('click', (e) => {
        const target = e.target;

        if (navopener && !target.closest('.nav-opener') && !target.closest('.nav')) {
            document.body.classList.remove(navactive);
        }

        if (!target.closest('[data-outside]') && !target.closest('[data-outside] + [data-more-content]')) {
            document.querySelectorAll('[data-outside]').forEach((el) => {
                el.classList.remove('active');
                const content = el.nextElementSibling;
                if (content && content.hasAttribute('data-more-content')) {
                    slideUp(content, 200);
                }
            });
        }
    });
}

export const OpenClose = () => {
    document.querySelectorAll('[data-more]').forEach((el) => {
        const content = el.nextElementSibling;
        if (content && content.hasAttribute('data-more-content')) {
            content.style.display = 'none';
        }
    });

    document.querySelectorAll('[data-more]').forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const content = el.nextElementSibling;
            if (content && content.hasAttribute('data-more-content')) {
                if (el.classList.contains('active')) {
                    el.classList.remove('active');
                    slideUp(content, 200);
                } else {
                    el.classList.add('active');
                    slideToggle(content, 200);
                }
            }
        });
    });

    document.querySelectorAll('[data-outside] + [data-more-content]').forEach((content) => {
        content.querySelectorAll('a:not(.hasdrop-a)').forEach((link) => {
            link.addEventListener('click', () => {
                document.querySelectorAll('[data-outside]').forEach((el) => {
                    el.classList.remove('active');
                    const next = el.nextElementSibling;
                    if (next && next.hasAttribute('data-more-content')) {
                        slideUp(next, 200);
                    }
                });
            });
        });
    });
}

export const Tabs = () => {
    document.querySelectorAll('ul.tabs li').forEach((tab) => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');

            Array.from(tab.parentElement.children).forEach((sibling) => {
                if (sibling !== tab) sibling.classList.remove('current');
            });

            const tabContent = document.getElementById(tabId);
            if (tabContent) {
                Array.from(tabContent.parentElement.children).forEach((sibling) => {
                    if (sibling !== tabContent) sibling.classList.remove('current');
                });
                tabContent.classList.add('current');
            }

            tab.classList.add('current');
        });
    });
}

// Slide animation helpers
function slideUp(el, duration = 200) {
    el.style.overflow = 'hidden';
    el.style.transition = `height ${duration}ms ease`;
    el.style.height = el.scrollHeight + 'px';
    el.offsetHeight; // force reflow
    el.style.height = '0';
    setTimeout(() => {
        el.style.display = 'none';
        el.style.removeProperty('height');
        el.style.removeProperty('overflow');
        el.style.removeProperty('transition');
    }, duration);
}

function slideDown(el, duration = 200) {
    el.style.display = '';
    el.style.overflow = 'hidden';
    const height = el.scrollHeight;
    el.style.height = '0';
    el.style.transition = `height ${duration}ms ease`;
    el.offsetHeight; // force reflow
    el.style.height = height + 'px';
    setTimeout(() => {
        el.style.removeProperty('height');
        el.style.removeProperty('overflow');
        el.style.removeProperty('transition');
    }, duration);
}

function slideToggle(el, duration = 200) {
    if (el.style.display === 'none' || getComputedStyle(el).display === 'none') {
        slideDown(el, duration);
    } else {
        slideUp(el, duration);
    }
}
