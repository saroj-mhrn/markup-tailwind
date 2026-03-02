export default class AjaxLoadMore {
    constructor() {
        document.querySelectorAll('.btn-load-more-ajax a').forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                this.loadMore(event.currentTarget);
            });
        });
    }

    loadMore(btn) {
        const parent = btn.parentElement;
        const contentTarget = parent.dataset.target;
        const appendTo = parent.dataset.appendTo;
        const loadMore = parent.dataset.loadMore;

        fetch(btn.getAttribute('href'))
            .then((response) => response.text())
            .then((html) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');

                const content = doc.querySelector(contentTarget);
                if (content) {
                    document.querySelector(appendTo).insertAdjacentHTML('beforeend', content.innerHTML);
                }

                const nextBtnEl = doc.querySelector(loadMore);
                const nextBtn = nextBtnEl ? nextBtnEl.getAttribute('href') : null;
                if (nextBtn) {
                    btn.setAttribute('href', nextBtn);
                } else {
                    parent.style.display = 'none';
                }
            });
    }
}
