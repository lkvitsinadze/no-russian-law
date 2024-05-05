declare global {
    interface Window { FB: {
            XFBML: {
                parse: () => void;
            }
        } }
}

window.FB = window.FB || {};
