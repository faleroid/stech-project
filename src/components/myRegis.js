class MyRegistration extends HTMLElement {
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
                background:
                radial-gradient(circle at top right, var(--redColor), transparent 30%);
                background-color: var(--bg);
            }

            h2, h3, p {
                padding: 0;
                margin: 0;
            }

            h2 {
                color: white;
                font-family: var(--fontPar);
                font-size: 20px;
                text-align: center;
                font-weight: 500;
            }

            .regis-wrapper {
                padding: 50px;
                display: flex;
                flex-flow: column;
                justify-content: center;
                align-items: center;
                gap: 50px;
            }
            

            h3 {
                font-family: var(--fontPar);
                font-size: 18px;
                color: white;
                font-weight: 500;
            }

            p {
                font-family: var(--fontPar);
                font-size: 16px;
                color: gray;
            }

            .regis-flex {
                display: flex;
                flex-flow: column;
                justify-content: center;
                align-items: center;
                gap: 20px;
            }

            .regis-item {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                gap: 15px;
            }

            .regis-item p {
                width: 350px;
            }

            .box {
                color: white;
                font-family: var(--fontHeading);
                font-weight: bold;
                padding: 5px;
                height: fit-content;
                background-color: var(--greenColor);
                border-radius: 3px;
            }

            .box-text {
                width: 320px;
            }

            @media (max-width: 640px) {
                .regis-item p{
                    width: 250px;
                }

                h3{
                    font-size: 16px;
                }

                p{
                    font-size: 14px;
                    margin-top: 5px;
                }

                .regis-wrapper{
                    padding-top: 50px;
                    padding-bottom: 30px;
                }

                .box-text{
                    width: auto;
                }

            }
        `;
    }

    render() {
        this.shadowRoot.innerHTML = `
            <div class="regis-wrapper">
                <h2>Tahapan Registrasi</h2>
               
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
                            <h3>Inputkan data tim</h3>
                            <p>Isi data tim dengan cermat untuk meminimalisir kesalahan data</p>
                        </div>
                    </div>
                    <div class="regis-item">
                        <div class="box">V</div>
                        <div class="box-text">
                            <h3>Kirim formulir pendaftaran</h3>
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
        `;

        this.updateStyle();
        this.shadowRoot.append(this._style);
    }
}

customElements.define('my-regis', MyRegistration);
