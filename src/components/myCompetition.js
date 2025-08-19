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
        background-color: white;
        padding: 30px 45px;
        display: grid;
        grid-template-colums: repeat(4, 1fr);
        grid-template-rows: 0.3fr 0.4fr;
        grid-template-areas: 
        'overview overview overview overview'
        'desc desc side side'
        ;
      }

      p.overview{
        grid-area: overview;
        text-align: left;
        font-family: var(--fontPar);
        font-weight: normal;
        font-size: 18px;
      }

    .comp-desc h2 {
        font-family: var(--fontPar);
        font-size: 30px;
      }

      .comp-desc{
        grid-area: desc;
        display: flex;
        flex-flow: column;
        gap: 10px;
        background: linear-gradient(to left, var(--greenColor), #00634cff);
        padding: 20px;
        border-radius: 20px;
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
        }

        .aside h2{
        font-family: var(--fontPar);
        font-size: 25px;
        }

        .aside p{
        font-family: var(--fontPar);
        font-weight: normal;
        font-size: 18px;
        }
    `;
  }

  render() {
    this.shadowRoot.innerHTML = `
      <div class="wrapper">
        <p class="overview">
        Melanjutkan kesuksesan program pelatihan sebelumnya (2021-2024) yang telah memberikan lebih dari 250.000 beasiswa belajar coding kepada talenta digital Indonesia di bidang Back-End dan DevOps, tahun ini Amazon Web Services (AWS) bersama Dicoding kembali mengadakan program AWS Back-End Academy yang akan memberikan pelatihan coding di bidang Back-End Developer JavaScript mulai dari level dasar hingga mahir*. Terdapat tambahan materi Artificial Intelligence (AI) untuk menggali lebih dalam layanan AI yang disediakan oleh AWS, mulai dari mempelajari konsep dasar AI, Machine Learning, hingga pemanfaatan Generative AI, seperti Partyrock dan Amazon Bedrock.
        </p>

        <div class="comp-desc">
            <h2>Apa itu S-Tech?</h2>
            <p>
            Program beasiswa untuk meningkatkan kompetensi di bidang Back-End Development dari Amazon Web Services (AWS).

            Di program ini, peserta akan belajar secara online dan mandiri dengan memanfaatkan forum diskusi di setiap modul belajarnya, sekaligus mendapatkan dukungan tambahan* melalui tim fasilitator berpengalaman di bidangnya.
            <p>
        </div>

        <div class="aside">
            <h2>Ada apa di S-Tech?</h2>
            
        </div>
      </div>
    `;

    this.updateStyle();
    this.shadowRoot.append(this._style);
  }
}

customElements.define('my-competition', MyCompetition);
