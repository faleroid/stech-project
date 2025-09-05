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
      }

      .wrapper {
        min-height: 100vh;
        background:
        radial-gradient(circle at top left, var(--yellowColor), transparent 20%),
        white;
        padding: 70px 45px;
        display: grid;
        gap: 20px 5px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas: 
        '. logo logo .'
        'overview overview overview overview'
        'desc desc side side'
        'bot bot bot bot'
        ;
      }

      .overview-container{
        grid-area: overview;
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
      }

      p.overview{
        text-align: center;
        width: 60%;
        font-family: var(--fontPar);
        font-weight: normal;
        font-size: 14px;
      }

    .comp-desc h2 {
        font-family: var(--fontPar);
        font-size: 30px;
      }

    .comp-desc{
      grid-area: desc;
      display: flex;
      flex-flow: column;
      gap: 15px;
      background: linear-gradient(to left, var(--greenColor), #00634cff);
      padding: 20px;
      border-radius: 15px;
      color: white;
    }

    .comp-desc p{
      font-family: var(--fontPar);
      font-weight: normal;
      font-size: 18px;
    }

    .aside{
      grid-area: side;
      padding: 0 20px;
      display: flex;
      flex-flow: column;
      gap: 20px;
    }

    .aside li:hover{
      background:
      radial-gradient(circle at bottom left, var(--yellowColor), transparent 30%),
      radial-gradient(circle at bottom right, var(--yellowColor), transparent 30%),
      white;
    }

    h2{
      font-family: var(--fontPar);
      font-size: 25px;
      font-weight: 550;
    }

    li{
      list-style-type: none;
    }

    .information-item{
      background: linear-gradient(to right, var(--greenColor), var(--redColor));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      font-family: var(--fontPar);
      font-weight: 550;
      font-size: 20px;
      border-bottom: 1px solid var(--greenColor);
      padding: 5px;
    }

    .information-item:hover{
      border-bottom: 2px solid var(--greenColor);
    }

    .bottom-side{
      margin-top: 50px;
      grid-area: bot;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
      'h h'
      'bot-left bot-right';
      gap: 30px;
    }

    .bottom-side h2{
      grid-area: h;
      text-align: center;
    }

    .bot-left{
      grid-area: bot-left;
      display: flex;
      flex-flow: column;
      gap: 20px;
    }

    .bot-mid{
      grid-area: bot-mid;
      display: flex;
      flex-flow: column;
      gap: 20px;
    }

    .bot-right{
      grid-area: bot-right;
      display: flex;
      flex-flow: column;
      gap: 20px;
    }

    .prereq{
      background-color: var(--grayColor);
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 12px;
      border-radius: 50px;
      border: 1px solid rgba(231, 231, 231, 1);
    }

    .prereq p{
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
      padding: 15px;
      border-radius: 50px;
      background: linear-gradient(135deg, #5aedadff, #197863ff);
    }
    
    .logos{
      grid-area: logo;
      display: flex;
      justify-content: center;
      gap: 20px;
    }

    .hmif-logo{
      padding-left: 10px;
    }

    .line-container{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .vertical-line{
      border: 1px solid gray;
      height: 60%;
    }

    @media (max-width: 640px) {
      .wrapper{
        grid-template-areas:
        'logo logo logo logo'
        'overview overview overview overview'
        'desc desc desc desc'
        'side side side side'
        'bot bot bot bot'
        ;
      }

      .overview-container{
        margin-bottom: 20px;
        margin-top: 20px;
      }
      
      p.overview{
        width: 100%;
      }

      .comp-desc h2, .aside h2{
          font-size: 25px;
      }

      .aside{
        margin-top: 15px;
        padding: 0;
      }

      .aside li p{
        font-size: 18px;
        padding: 10px 0;
      }

      .comp-desc p{
        font-size: 14px;
      }

      .bottom-side{
        margin-top: 20px;
        grid-template-areas: 
        'h h'
        'bot-left bot-left'
        'bot-right bot-right'
        ;    
      }

      .prereq{
        gap: 15px;
      }
    }
  `;
  }

  render() {
    this.shadowRoot.innerHTML = `
      <div class="wrapper">
        <div class="logos">
          <img src="/assets/images/logo.png" width="60px">
          <div class="line-container"><div class="vertical-line"></div></div>
          <img class="hmif-logo" src="/assets/images/hmif-logo.png" width="60px">
        </div>

        <div class="overview-container">
          <p class="overview">
            Soedirman Technophoria kembali hadir sebagai wadah bagi para talenta digital muda di seluruh Indonesia. Kompetisi ini diselenggarakan setiap tahun oleh Himpunan Mahasiswa Informatika Universitas Jenderal Soedirman. S-Tech mempunyai visi untuk mendorong batas-batas inovasi para generasi muda. Melalui Soedirman Technophoria, setiap ide cemerlang berhak mendapatkan panggungnya dan setiap talenta berhak menemukan inspirasinya.
          </p>
        </div>

        <div class="comp-desc">
          <h2>S-Tech 2025</h2>
          <p>
          Program beasiswa untuk meningkatkan kompetensi di bidang Back-End Development dari Amazon Web Services (AWS).

          Di program ini, peserta akan belajar secara online dan mandiri dengan memanfaatkan forum diskusi di setiap modul belajarnya, sekaligus mendapatkan dukungan tambahan* melalui tim fasilitator berpengalaman di bidangnya.
          </p>
        </div>

        <div class="aside">
          <h2>Keuntungan mendaftar di S-Tech?</h2>
          <ul>
            <li>
                <p class="information-item">Sesi seminar dengan narasumber berpengalaman di bidangnya</p>
            </li>
            <li>
                <p class="information-item">Kesempatan berkolaborasi dengan developer lainnya</p>
            </li>
            <li>
                <p class="information-item">Bergabung dengan komunitas yang aktif dan membangun</p>
            </li>
          </ul>
        </div>

        <div class="bottom-side">
          <h2>Syarat Pendaftaran</h2>
          <div class="bot-left">
            <div class="prereq">
              <div class="circle"> 01 </div>
              <p>Warga Negara Indonesia</p>
            </div> 
            <div class="prereq">
              <div class="circle"> 05 </div>
              <p>Individu/Tim (Maksimal 3 Orang)</p>
            </div> 
            <div class="prereq">
              <div class="circle"> 02 </div>
              <p>Siswa/i SMA/SMK/MA Sederajat</p>
            </div> 
          </div>

          <div class="bot-right">
            <div class="prereq">
              <div class="circle"> 03 </div>
              <p>Mahasiswa Sarjana</p>
            </div> 
            <div class="prereq">
              <div class="circle"> 04 </div>
              <p>Mahasiswa Vokasi</p>
            </div> 
            <div class="prereq">
              <div class="circle"> 06 </div>
              <p>Melampirkan bukti status pelajar/mahasiswa</p>
            </div> 
          </div>
      </div>
    `;

    this.updateStyle();
    this.shadowRoot.append(this._style);
  }
}

customElements.define('my-competition', MyCompetition);
