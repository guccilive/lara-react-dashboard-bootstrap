import React from 'react';
import './footer.css';

function Footer() {
    let currentYear = new Date().getFullYear();
  return (
      <footer className="footer" id="footer">
          <div className="copyright">
              &copy; {currentYear} Copyright{''}
              <strong>
                  <span>Livreson Technology</span>
                  . All Rights Reserved
              </strong>
          </div>
          <div className="credits">
              Designed by <a href="#"> Heritier Mashini</a>
          </div>
    </footer>
  )
}

export default Footer