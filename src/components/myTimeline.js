class MyTimeline extends HTMLElement {
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
                background-color: var(--bg);
            }
            
            h2, h3, p {
                padding: 0;
                margin: 0;
            }

            h2 {
                color: white;
                font-family: var(--fontPar);
                font-size: 25px;
                text-align: center;
                font-weight: 500;
            }

            .timeline {
                padding: 50px 50px;
                display: flex;
                flex-flow: column;
                justify-content: center;
                align-items: center;
                gap: 30px;
            }

            .timeline-wrapper {
                display: flex;
                justify-content: space-evenly;
                gap: 10px;
                width: 100%;
            }

            .timeline h2 {
                margin-bottom: 40px;
            }

            .left-side, .right-side {
                display: flex;
                flex-flow: column;
                gap: 25px 30px;
                width: 45%;
            }

            .container {
                padding: 15px 25px;
                border: 1px solid var(--greenColor);
                border-radius: 10px;
            }

            .container:hover {
                background:
                    radial-gradient(circle at bottom right, var(--redColor), transparent 40%);
            }

            .container h3 {
                color: white;
                font-family: var(--fontPar);
                font-size: 18px;
                font-weight: 500;
            }

            .container p {
                font-size: 14px;
                color: var(--yellowBold);
                font-family: var(--fontPar);
            }

            .note {
                padding: 0 30px;
                font-size: 14px;
                color: gray;
                font-family: var(--fontPar);
            }

            .red-star {
                color: red;
            }

            @media (max-width: 640px) {
                container{
                background-color: red;
                }

                .timeline-wrapper{
                    flex-flow: column;
                    justify-content: center;
                }

                .left-side, .right-side {
                    width: 100%;
                }

                .timeline h2{
                    font-size: 20px;
                    margin-bottom: 10px;
                }

                .note{
                    padding: 0;
                }
            }
        `;
    }

    render() {
        this.shadowRoot.innerHTML = `
            <div class="timeline">
                <h2>Linimasa Kompetisi</h2>
                <div class="timeline-wrapper">
                    <div class="left-side">
                        <div class="container date-left">
                            <h3>Pendaftaran & Pengumpulan Lomba</h3>
                            <p>15 September - 17 Oktober</p>
                        </div>
                        <div class="container date-left">
                            <h3>Tahap Penjurian</h3>
                            <p>18 Oktober - 23 Oktober</p>
                        </div>
                        <div class="container date-left">
                            <h3>Pengumuman Finalis</h3>
                            <p>24 Oktober</p>
                        </div>
                    </div>
                    <div class="right-side">
                        <div class="container date-right">
                            <h3>Technical Meeting Finalis</h3>
                            <p>25 Oktober</p>
                        </div>
                        <div class="container date-right">
                            <h3>Pengerjaan Proyek Akhir</h3>
                            <p>26 Oktober - 31 Oktober</p>
                        </div>
                        <div class="container date-right">
                            <h3>Seminar & Presentasi Final</h3>
                            <p>1 November</p>
                        </div>
                    </div>
                </div>
                <p class="note"><span class="red-star">* </span>Catatan: Linimasa ini dapat berubah sewaktu-waktu. Jika ada perubahan, pemberitahuan akan diumumkan melalui media sosial dan website Soedirman Technophoria 2025.</p>
            </div>
        `;

        this.updateStyle();
        this.shadowRoot.append(this._style);
    }
}

customElements.define('my-timeline', MyTimeline);
