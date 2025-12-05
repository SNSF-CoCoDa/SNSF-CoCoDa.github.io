import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        
        <div className="footer-top">
          <div className="footer-info">
            <h3>CoCoDa</h3>
            <p className="footer-tagline">Studying Systemic Risks on Online Platforms</p>
            <div className="footer-links">
              <a href="mailto:info@cocoda-project.org">Contact Us</a>
            </div>
          </div>

          <div className="footer-logos">
            <a href="https://www.unisg.ch/" target="_blank" rel="noreferrer">
              <img src="/unisg.png" alt="University of St. Gallen" className="partner-logo" />
            </a>
            <a href="https://www.unil.ch/" target="_blank" rel="noreferrer">
              <img src="/unil.png" alt="University of Lausanne" className="partner-logo" />
            </a>
            <a href="https://www.maastrichtuniversity.nl/" target="_blank" rel="noreferrer">
              <img src="/um.png" alt="Maastricht University" className="partner-logo" />
            </a>
            <a href="https://theodi.org/" target="_blank" rel="noreferrer">
              <img src="/odi.png" alt="Open Data Institute" className="partner-logo" />
            </a>
          </div>
        </div>

        <div className="footer-acknowledgements">
            <p>This project is funded by SNSF (Swiss National Science Foundation) under the International Co-Investigator Scheme, in collaboration with European and UK institutions.</p>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CoCoDa Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
