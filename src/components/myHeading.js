class MyHeading extends HTMLElement {
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

        .wrapper{
            min-height: 92vh;
            display: flex;
            gap: 20px;
            flex-flow: column;
            justify-content: center;
            align-items: center;
        }

        h1{
            font-family: var(--fontHeading);
            font-weight: 600;
            font-size: 3rem;
            color: var(--fontColor);
            text-shadow: 0 0 10px var(--greenColor), 0 0 20px var(--greenColor);
        }

        .year{
            font-size: 1.5rem;
            color: var(--fontColor);
            font-family: var(--fontHeading);
            font-weight: bold;
            display: inline-block;
            padding: 10px 20px;
            border-radius: 10px;
            background: #003344;
            text-shadow: 0 0 10px var(--greenColor), 0 0 20px var(--greenColor);
            box-shadow: inset 0 0 10px var(--greenColor)
        }

        .desc{
            width: 60%;
        }

        .desc p{
            color: var(--fontColor);
            font-family: var(--fontHeading);
            font-size: 1rem;
            font-weight: bold;
            text-align: center;
        }

        img{
            width: 250px;
        }

        button{
            background: linear-gradient(to left, var(--redColor), #630000ff);
            font-family: var(--fontPar);
            font-weight: 600;
            padding: 12px 18px;
            font-size: 0.8srem;
            cursor: pointer;
            border-radius: 30px;
            color: var(--fontColor);
            outline: none;
            border: none;
        }
        `;
  }

  render() {
    this.shadowRoot.innerHTML = `
            <div class="wrapper">
                <img src="../../assets/images/logo.png" alt="logo-stech">
                <h1>Soedirman Technophoria</h1>
                <p>
                    <span class="year">2</span> <span class="year">0</span> <span class="year">2</span> <span class="year">5</span>
                </p>
                <div class="desc">
                    <p>
                        kompetisi teknologi terbesar HMIF Unsoed! Saatnya tunjukkan ide, karya, dan inovasimu untuk menjawab tantangan masa depan!
                    </P>
                </div>
                <button>Daftar Kompetisi</button>
            </div>
        `;

    this.updateStyle();
    this.shadowRoot.append(this._style);
  }
}

customElements.define('my-heading', MyHeading);
