class MyCompetition extends HTMLElement {
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
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      h2{
        font-family: var(--fontPar);
        font-size: 25px;
        font-weight: 550;
      }

      li{
        list-style-type: none;
      }

      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }

      .wrapper {
        min-height: 100vh;
        background:
        radial-gradient(circle at top left, var(--yellowColor), transparent 20%),
        radial-gradient(circle at bottom left, var(--yellowColor), transparent 40%),
        url('/assets/images/bg.svg');
        background-size: cover;
        background-position: center;
        background-size: cover;;
        padding: 70px 0;
        display: grid;
        gap: 20px 5px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas: 
        '. logo logo .'
        'overview overview overview overview'
        'theme theme theme theme'
        'benefits benefits benefits benefits'
        'requirements requirements requirements requirements'
        ;
        align-items: stretch;
      }
      
      .logos{
        grid-area: logo;
        display: flex;
        justify-content: center;
        gap: 20px;
      }

      img.stech-logo {
        width: 60px;
        height: fit-content;
      }

      img.hmif-logo{
        width: 70px;
        padding-left: 10px;
      }

      .line-container{
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .vertical-line{
        border: 0.1px solid gray;
        height: 60%;
      }

      .overview-container{
        grid-area: overview;
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
        padding: 0 45px;
      }

      p.overview{
        text-align: center;
        width: 60%;
        font-family: var(--fontPar);
        font-weight: normal;
        font-size: 14px;
      }

      .benefits{
        grid-area: benefits;
        padding: 0 45px;
        display: flex;
        align-items: center;
        flex-flow: column;
        gap: 20px;
        text-align: center;
      }

      .benefits li:hover{
        background:
        radial-gradient(circle at bottom left, var(--yellowColor), transparent 30%),
        radial-gradient(circle at bottom right, var(--yellowColor), transparent 30%),
        white;
      }

      .benefit-item{
        background: linear-gradient(to right, var(--greenColor), var(--redColor));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-family: var(--fontPar);
        font-weight: 550;
        font-size: 20px;
        border-bottom: 1px solid var(--greenColor);
        padding: 15px 0;
      }

      .benefit-item:hover{
        border-bottom: 2px solid var(--greenColor);
      }

      .requirements-section{
        margin-top: 50px;
        padding: 0 45px;
        grid-area: requirements;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
        'heading heading'
        'col-1 col-2';
        gap: 30px;
      }

      .requirements-section h2{
        grid-area: heading;
        text-align: center;
      }

      .requirements-column-one{
        grid-area: col-1;
        display: flex;
        flex-flow: column;
        gap: 20px;
      }

      .requirements-column-two{
        grid-area: col-2;
        display: flex;
        flex-flow: column;
        gap: 20px;
      }

      .requirement-item{
        background-color: var(--grayColor);
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 12px;
        border-radius: 50px;
        border: 1px solid rgba(222, 221, 221, 1);
      }

      .requirement-item p{
        font-family: var(--fontPar);
        font-weight: 400;
        font-size: 18px;
      }

      .circle{
        font-family: var(--fontPar);
        font-weight: 600;
        font-size: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        height: 20px;
        width: 20px;
        background-color: white;
        padding: 25px;
        border-radius: 50px;
        background: linear-gradient(135deg, #5aedadff, #197863ff);
      }
      
      @media (max-width: 640px) {
        .wrapper{
          grid-template-areas:
          'logo logo logo logo'
          'overview overview overview overview'
          'theme theme theme theme'
          'benefits benefits benefits benefits'
          'requirements requirements requirements requirements'
          ;
        }
        
        p.overview{
          width: 100%;
        }

        .benefits h2, .requirements-section h2{
            font-size: 20px;
            text-align: left;
        }

        .benefits{
          margin-top: 15px;
          padding: 20px;
        }

        .benefits p{
          font-size: 16px;
          padding: 20px;
        }

        .requirements-section{
          margin-top: 20px;
          grid-template-areas: 
          'heading heading'
          'col-1 col-1'
          'col-2 col-2'
          ;   
        }

        .requirements-section h2{
          text-align: center;
        }

        .requirements-section p{
          font-size: 14px;
        }

        .requirements-section div{
          font-size: 16px;
        }

        .requirement-item{
          gap: 15px;
        }
      }
    `;
  }

  render() {
    this.shadowRoot.innerHTML = `
      <div class="wrapper">
        <div class="logos">
          <img class="stech-logo" src="/assets/images/logo.png">
          <div class="line-container"><div class="vertical-line"></div></div>
          <img class="hmif-logo" src="/assets/images/hmif-logo.png">
        </div>

        <div class="overview-container">
          <p class="overview">
            Soedirman Technophoria kembali hadir sebagai wadah bagi para talenta digital muda di seluruh Indonesia. Kompetisi ini diselenggarakan setiap tahun oleh Himpunan Mahasiswa Informatika Universitas Jenderal Soedirman. S-Tech mempunyai visi untuk mendorong batas-batas inovasi para generasi muda. Melalui Soedirman Technophoria, setiap ide cemerlang berhak mendapatkan panggungnya dan setiap talenta berhak menemukan inspirasinya.<br><br>Sebagai perwujudan visi tersebut, S-Tech 2025 memusatkan kompetisinya pada bidang <b>pengembangan web (web development)</b>. Kami melihat pengembangan web bukan hanya sebagai keahlian teknis, melainkan sebagai medium untuk bercerita, memecahkan masalah, dan menciptakan interaksi yang bermakna. Oleh karena itu,  para talenta digital muda untuk tidak sekadar membangun halaman web, tetapi untuk merancang solusi <b>inovatif</b> yang fungsional, <b>intuitif</b>, dan <b>berdampak nyata</b>. Inilah kesempatan kita untuk menunjukkan bagaimana sebuah kode yang terstruktur dengan baik dapat diubah menjadi pengalaman digital yang luar biasa.
          </p>
        </div>

        <div class="benefits">
          <h2>Benefit Berpartisipasi di S-tech</h2>
          <ul>
            <li>
                <p class="benefit-item">Sesi Seminar Eksklusif dengan Praktisi Ahli</p>
            </li>
            <li>
                <p class="benefit-item">Bangun Portofolio & Dapatkan Pengakuan Industri</p>
            </li>
            <li>
                <p class="benefit-item">Kesempatan Berkolaborasi dengan Talenta Digital Lainnya</p>
            </li>
            <li>
                <p class="benefit-item">Raih Hadiah & Sertifikat Bergengsi</p>
            </li>
            <li>
                <p class="benefit-item">Dapatkan Umpan Balik Konstruktif dari Juri Ahli</p>
            </li>
            <li>
                <p class="benefit-item">Bergabung dengan Komunitas Developer yang Aktif dan Membangun</p>
            </li>
          </ul>
        </div>

        <div class="requirements-section">
          <h2>Syarat Pendaftaran</h2>
          <div class="requirements-column-one">
            <div class="requirement-item">
              <div class="circle"> 01 </div>
              <p>Warga Negara Indonesia</p>
            </div> 
            <div class="requirement-item">
              <div class="circle"> 02 </div>
              <p>Individu/Tim (Maksimal 3 Orang)</p>
            </div> 
            <div class="requirement-item">
              <div class="circle"> 03 </div>
              <p>Siswa/i SMA/SMK/MA Sederajat</p>
            </div> 
          </div>

          <div class="requirements-column-two">
            <div class="requirement-item">
              <div class="circle"> 04 </div>
              <p>Mahasiswa Sarjana</p>
            </div> 
            <div class="requirement-item">
              <div class="circle"> 05 </div>
              <p>Mahasiswa Vokasi</p>
            </div> 
            <div class="requirement-item">
              <div class="circle"> 06 </div>
              <p>Melampirkan bukti status pelajar/mahasiswa</p>
            </div> 
          </div>
        </div>
      </div>
    `;

    this.updateStyle();
    this.shadowRoot.append(this._style);
  }
}

customElements.define('my-competition', MyCompetition);