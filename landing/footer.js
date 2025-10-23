class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: rgba(15, 15, 35, 0.95);
          color: white;
          padding: 2rem;
          text-align: center;
          border-top: 1px solid rgba(0, 255, 170, 0.2);
          margin-top: auto;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 1rem;
        }
        .footer-links a {
          color: #00FFAA;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .footer-links a:hover {
          color: #FF6200;
          text-shadow: 0 0 10px rgba(255, 98, 0, 0.3);
        }
        .disclaimer {
          font-size: 0.875rem;
          color: #D3D3D3;
          margin-top: 1rem;
        }
        @media (max-width: 768px) {
          footer {
            padding: 1.5rem;
          }
          .footer-links {
            flex-direction: column;
            gap: 1rem;
          }
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-links">
            <a href="https://github.com/uncaxss/crypto-swap-frontend-project-for-sale" target="_blank" rel="noopener noreferrer">
              <i data-feather="github"></i>
              GitHub
            </a>
            <a href="https://t.me/unca_xss" target="_blank" rel="noopener noreferrer">
              <i data-feather="send"></i>
              Telegram
            </a>
          </div>
          <p class="disclaimer">© 2025 Crypto Swap Pro. For research and educational purposes only.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);