class MyNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
    this.handleScroll = this.handleScroll.bind(this);
  }

  connectedCallback() {
    this.render();
    window.addEventListener('scroll', this.handleScroll);
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const navbarWrapper = this.shadowRoot.querySelector('.navbar-wrapper');
    if (window.scrollY > 10) {
      navbarWrapper.classList.add('scrolled');
    } else {
      navbarWrapper.classList.remove('scrolled');
    }
  }

  updateStyle() {
    this._style.textContent = `
      * {
        margin: 0;
        padding: 0;
      }

      .navbar-wrapper {
        position: sticky;
        top: 0;
        z-index: 1000;
        padding-top: 25px;
        display: flex;
        justify-content: center;
        gap: 15px;
        transition: padding 0.4s ease, background-color 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease;
      }

      ul {
        background-color: #98969627;
        width: fit-content;
        gap: 50px;
        display: flex;
        justify-content: center;
        padding: 10px 20px;
        border-radius: 30px;
        transition: background-color 0.4s ease;
      }

      li {
        list-style-type: none;
      }

      a {
        padding: 0;
        text-decoration: none;
        font-size: 0.8rem;
        color: var(--fontColor);
        font-family: var(--fontPar);
      }

      .register {
        background: linear-gradient(to left, var(--redColor), #630000ff);
      }

      .nav-register a {
        font-family: var(--fontPar);
        font-weight: 600;
      }

      .navbar-wrapper.scrolled {
        background-color: rgba(25, 25, 25, 0.6);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        padding: 10px 0;
        border-bottom: 1px solid rgba(152, 150, 150, 0.1);
      }

      .navbar-wrapper.scrolled ul {
        background-color: transparent;
      }

    @media (max-width: 640px) {
      :host {
        display: none;
    }
}
    `;
  }

  render() {
    this.shadowRoot.innerHTML = `
      <div class="navbar-wrapper">
        <ul>
          <li class="nav-item"><a href="#about">Tentang Kompetisi</a></li>
          <li class="nav-item"><a href="#theme">Tema Besar</a></li>
          <li class="nav-item"><a href="#prerequite">Prasyarat Pendaftaran</a></li>
          <li class="nav-item"><a href="#schedule">Jadwal Kompetisi</a></li>
          <li class="nav-item"><a href="#faq">FAQ</a></li>
        </ul>
        <ul class="register">
          <li class="nav-register"><a href="#">Daftar Sekarang</a></li>
        </ul>
      </div>
    `;
    this.updateStyle();
    this.shadowRoot.append(this._style);
  }
}

customElements.define('my-navbar', MyNavbar);
