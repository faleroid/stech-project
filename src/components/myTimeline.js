class MyTimeline extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style');
    }

    connectedCallback(){
        this.render();
    }

    updateStyle(){
        this._style.textContent = `
            .wrapper {
                background-color:  #141414ff;
                background-image: url("https://www.transparenttextures.com/patterns/buried.png");
                min-height: 100vh;
                background-color: var(--bg);
                padding: 30px 150px;
                display: flex;
                flex-flow: column;
                gap: 30px;
            }

            h2{
                color: white;
                font-family: var(--fontPar);
                font-size: 32px;
                text-align: center;
                font-weight: 500;
            }

            .timeline{
                display: flex;
                justify-content: space-evenly;
                gap: 10px;
            }

            .left-side, .right-side{
                display: flex;
                flex-flow: column;
                gap: 25px 30px;
                width: 45%;
            }

            h2, .container p, .container h3{
                padding: 0;
                margin: 0;
            }

            .container{
                padding: 15px 25px;
                border: 1px solid var(--greenColor);
                border-radius: 10px;
            }

            .container:hover{
                background:
                radial-gradient(circle at bottom right, var(--redColor), transparent 40%);
                white;         
            }

            .container h3{
                color: white;
                font-family: var(--fontPar);
                font-size: 20px;
                font-weight: 500;
            }

            .container p{
                font-size: 14px;
                color: var(--yellowBold);
                font-family: var(--fontPar);
            }

            .left-side{
                grid-area: left;
            }

            .right-side{
                grid-area: right;
            }

            .note{
                margin: 0;
                padding: 0 30px;
                font-size: 14px;
                color: gray;
                font-family: var(--fontPar);
            }

            .red-star{
                color: red;
            }
        `;
    }

    render(){
        this.shadowRoot.innerHTML = `
            <div class="wrapper">
                <h2>Linimasa Kompetisi</h2>

                <div class="timeline">
                    <div class="left-side">
                        <div class="container date-left">
                            <h3>Pendaftaran & Pengumpulan Lomba</h3>
                            <p>15 September - 17 Oktober</p>
                        </div>
                        <div class="container date-left">
                            <h3>Penjurian</h3>
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

                <p class="note"><span class="red-star">* </span>Catatan: Linimasa ini dapat berubah sewaktu-waktu. Jika ada, pemberitahuan akan diumumkan di media sosial website ini.</p>
            </div>
        `;

        this.updateStyle();
        this.shadowRoot.append(this._style);
    }
}

customElements.define('my-timeline', MyTimeline);