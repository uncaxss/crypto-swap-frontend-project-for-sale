class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: rgba(26, 26, 61, 0.95);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          border-bottom: 1px solid rgba(0, 255, 170, 0.2);
        }
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .logo-icon {
          color: #00FFAA;
        }
        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        a:hover {
          color: #00FFAA;
          text-shadow: 0 0 10px rgba(0, 255, 170, 0.5);
        }
        .cta-button {
          background: #FF6200;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: bold;
          transition: all 0.3s ease;
        }
        .cta-button:hover {
          background: #ff7a33;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 98, 0, 0.3);
        }
        @media (max-width: 768px) {
          nav {
            padding: 1rem;
          }
          ul {
            gap: 1rem;
          }
          .logo {
            font-size: 1.2rem;
          }
        }
      </style>
      <nav>
        <div class="logo">
          <i data-feather="zap" class="logo-icon"></i>
          Crypto Swap
        </div>
        <ul>
          <li><a href="#purchase" class="cta-button">Contact</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);