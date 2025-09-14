class YouTubePlayer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style');
    }

    connectedCallback() {
        this.render();
    }

    updateStyle() {
        const aspectRatio = this.getAttribute('aspect-ratio') || '16 / 9';

        this._style.textContent = `
            :host {
                display: block;
                width: 100%;
            }

            .container{
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 50px 0;
            }

            .video-wrapper {
                position: relative;
                width: 100%;
                max-width: 560px;
                aspect-ratio: ${aspectRatio};
                overflow: hidden;
                border-radius: 10px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            }

            .video-wrapper iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: 0;
            }
        `;
    }

    render() {
        const videoId = 'hmQHlepxL0s';

        this.shadowRoot.innerHTML = `
        <div class="container">
            <div class="video-wrapper">
                <iframe
                    src="https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
        `;

        this.updateStyle();
        this.shadowRoot.append(this._style);
    }
}

customElements.define('youtube-player', YouTubePlayer);
