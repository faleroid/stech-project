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
                background:
                radial-gradient(circle at top right, var(--redColor), transparent 30%),
                white;
                min-height: 100vh;
                background-color: var(--bg);
                padding: 50px 150px;
                display: flex;
                flex-flow: column;
                justify-content: center;
                align-items: center;
                gap: 30px;
            }

            h2{
                color: white;
                font-family: var(--fontPar);
                font-size: 25px;
                text-align: center;
                font-weight: 500;
            }

            .timeline{
                display: flex;
                flex-flow: column;
                gap: 20px;
            }

            .timeline-wrapper{
                display: flex;
                justify-content: space-evenly;
                gap: 10px;
            }

            .timeline h2{
                margin-bottom: 40px;
            }

            .left-side, .right-side{
                display: flex;
                flex-flow: column;
                gap: 25px 30px;
                width: 45%;
            }

            h2, h3, p{
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
                font-size: 18px;
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

            .regis-wrapper{
                display: flex;
                flex-flow: column;
                justify-content: center;
                align-items: center;
                gap: 50px;
                padding-bottom: 50px;
            }

            .regis-container{
                display: flex;
                justify-content: center;
            }

            .regis-container h3{
                font-family: var(--fontPar);
                font-size: 18px;
                color: white;
                font-weight: 500;
            }

            .regis-container p{
                font-family: var(--fontPar);
                font-size: 16px;
                color: gray;
            }

            .regis-flex{
                display: flex;
                flex-flow: column;
                justify-content: center;
                align-items: center;
                gap: 20px;
            }

            .regis-item{
                display: flex;
                justify-content: center;
                align-items: flex-start;
                gap: 15px;
            }

            .regis-item p{
                width: 350px;
            }

            .box{
                color: white;
                font-family: var(--fontHeading);
                font-weight: bold;
                padding: 5px;
                height: fit-content;
                background-color: var(--greenColor);
                border-radius: 3px;
            }

            .box-text{
                width: 320px;
            }

            .dashed-line{
                border: 1px dashed black;
                width: 70%;
            }
        `;
    }

    render(){
        this.shadowRoot.innerHTML = `
            <div class="wrapper">

                <div class="regis-wrapper">
                    <h2>Tahapan Registrasi</h2>

                    <div class="regis-container">
                        <div class="regis-flex">
                            <div class="regis-item">
                                <div class="box">V</div>
                                <div class="box-text">
                                    <h3>Masuk ke formulir pendaftaran</h3>
                                    <p>Link pendaftaran bisa di akses di sini</p>
                                </div>
                            </div>

                            <div class="regis-item">
                                <div class="box">V</div>
                                <div class="box-text">
                                    <h3>Daftarkan timmu</h3>
                                    <p>Pastikan kamu dan timmu sudah memenuhi semua kriteria persyaratan</p>
                                </div>
                            </div>

                            <div class="regis-item">
                                <div class="box">V</div>
                                <div class="box-text">
                                    <h3>Inputkan Data Tim</h3>
                                    <p>Isi data tim dengan cermat untuk meminimalisir kesalahan data</p>
                                </div>
                            </div>

                            <div class="regis-item">
                                <div class="box">V</div>
                                <div class="box-text">
                                    <h3>Kirim Data Kamu</h3>
                                    <p>Setelah semua data valid, kirim jawaban tersebut</p>
                                </div>
                            </div>

                            <div class="regis-item">
                                <div class="box">V</div>
                                <div class="box-text">
                                    <h3>Akan diarahkan ke grup Whatsapp</h3>
                                    <p>Kamu diarahkan untuk bergabung grup Whatsapp</p>
                                </div>
                            </div>

                            <div class="regis-item">
                                <div class="box">V</div>
                                <div class="box-text">
                                    <h3>Selesai</h3>
                                    <p>Nantikan info selanjutnya terkait teknis kompetisi di grup</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <span class="dashed-line"></span>

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
            </div>
        `;

        this.updateStyle();
        this.shadowRoot.append(this._style);
    }
}

customElements.define('my-timeline', MyTimeline);