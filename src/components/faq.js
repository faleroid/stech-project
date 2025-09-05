class FaqSection extends HTMLElement {
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
            .faq-wrapper {
                background-color: var(--bg);
                padding: 50px 70px;
                font-family: sans-serif;
                }
            h2 {
                font-family: var(--fontPar);
                font-size: 26px;
                color: white;
                font-weight: 500;
                margin: 0 0 30px 0;
            }
            .faq-item {
                border-bottom: 1px solid #444;
                padding: 15px 0;
            }
            .question {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                background: none;
                border: none;
                text-align: left;
                cursor: pointer;
                color: white;
                font-family: var(--fontPar);
                font-size: 16px;
                font-weight: 500;
            }
            .question:hover {
                color: #e0e0e0;
            }
            .icon {
                font-size: 35px;
                font-weight: normal;
                font-family: var(--fontHeading);
                transition: transform 0.3s ease-out;
            }
            .answer {
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s ease-out;
                color: white;
                font-size: 16px;
                line-height: 1.6;
            }
            .answer p {
                font-family: var(--fontPar);
                margin: 0;
                padding: 0 15px 10px 15px;
            }

            .faq-item.active .answer {
                transition: max-height 0.4s ease-in;
                background:
                radial-gradient(circle at bottom right, var(--redColor), transparent 50%);
            }
                
            .faq-item.active .icon {
                transform: rotate(45deg);
            }

            .faq-item.active .question{
                color: var(--lightGreen);
            }

            @media (max-width: 640px) {
                .faq-wrapper{
                    padding: 40px;
                }

                h2{
                    font-size: 20px;
                }
            }
        `;
    }

    render() {
        this.shadowRoot.innerHTML = `
            <div class="faq-wrapper">
                <h2>Frequently Asked Questions</h2>
                
                <div class="faq-item">
                    <button class="question">
                        <span>Bagaimana cara mendaftar kompetisi?</span>
                        <span class="icon">+</span>
                    </button>
                    <div class="answer">
                        <p>Pendaftaran dapat dilakukan melalui tombol "Daftar Sekarang" di halaman utama website. Anda akan diarahkan ke formulir online untuk mengisi data tim dan mengunggah proposal.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="question">
                        <span>Apakah satu tim boleh mengikuti lebih dari satu kategori lomba?</span>
                        <span class="icon">+</span>
                    </button>
                    <div class="answer">
                        <p>Tidak. Sesuai dengan peraturan yang berlaku, satu tim hanya diperbolehkan untuk mendaftar dan mengikuti satu kategori kompetisi saja.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="question">
                        <span>Apa saja kriteria penilaian dalam tahap seleksi?</span>
                        <span class="icon">+</span>
                    </button>
                    <div class="answer">
                        <p>Kriteria penilaian utama meliputi orisinalitas ide, inovasi dan kreativitas solusi, dampak dan manfaat, serta kelayakan teknis dari proposal yang diajukan.</p>
                    </div>
                </div>

            </div>
        `;

        this.updateStyle();
        this.shadowRoot.appendChild(this._style);
        
        const allFaqItems = this.shadowRoot.querySelectorAll('.faq-item');
        allFaqItems.forEach(item => {
            const questionButton = item.querySelector('.question');
            const answerPanel = item.querySelector('.answer');

            questionButton.addEventListener('click', () => {
                const wasActive = item.classList.contains('active');

                allFaqItems.forEach(i => {
                    i.classList.remove('active');
                    i.querySelector('.answer').style.maxHeight = null;
                });

                if (!wasActive) {
                    item.classList.add('active');
                    answerPanel.style.maxHeight = answerPanel.scrollHeight + 'px';
                }
            });
        });
    }
}

customElements.define('faq-section', FaqSection);