class MediaSlider extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style');
    }

    connectedCallback() {
        this.render();
    }

    updateStyle() {
        this._style.textContent = `
            :host {
                display: block;
                width: 100%;
            }

            @keyframes scroll {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-50%);
                }
            }

            h2{
                color: white;
                margin-top: 0;
                margin-bottom: 30px;
                font-family: var(--fontPar);
                font-size: 25px;
                text-align: center;
                font-weight: 500;
                background:
                radial-gradient(circle at right, var(--greenColor), transparent 25%),
                radial-gradient(circle at left, var(--redColor), transparent 25%);
            }

            .slider{
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .slider-wrapper {
                background: var(--bg);
                padding: 10px 0;
                overflow: hidden;
                position: relative;
                width: 70%;
                -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
            
            .slider-wrapper:hover .slider-track {
                animation-play-state: paused;
            }

            .slider-track {
                padding: 20px;
                display: flex;
                width: fit-content;
                animation: scroll 40s linear infinite;
            }

            .slide {
                height: auto;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0 15px;
                flex-shrink: 0;
            }
            
            .slide img {
                border-radius: 5px;
                height: 200px;
                width: auto;
                filter: grayscale(100%) brightness(0.9);
                transition: filter 0.3s ease;
                opacity: 0.8;
            }

            .slide img:hover {
                height: 250px;
                filter: grayscale(0%) brightness(1);
                opacity: 1;
                transform: scale(1.05);
            }

             @media (max-width: 640px) {
                h2{
                    font-size: 20px;
                }
             }
        `;
    }

    render() {
        this.shadowRoot.innerHTML = `
        <div class="slider">
            <div class="slider-wrapper">
                <h2>Dokumentasi S-Tech 2024</h2>
                <div class="slider-track">
                    <div class="slide"><img src="/assets/images/docum-1.webp" alt="Media Partner 1"></div>
                    <div class="slide"><img src="/assets/images/docum-2.webp" alt="Media Partner 1"></div>
                    <div class="slide"><img src="/assets/images/docum-3.webp" alt="Media Partner 1"></div>
                    <div class="slide"><img src="/assets/images/docum-1.webp" alt="Media Partner 1"></div>
                    <div class="slide"><img src="/assets/images/docum-2.webp" alt="Media Partner 1"></div>
                    <div class="slide"><img src="/assets/images/docum-3.webp" alt="Media Partner 1"></div>
                </div>
            </div>
        </div>
        `;

        this.updateStyle();
        this.shadowRoot.appendChild(this._style);
    }
}

customElements.define('media-slider', MediaSlider);