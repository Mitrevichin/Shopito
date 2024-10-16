import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './FooterLinks.scss';
import logoImage from '../../assets/shopito_logo.png';

function FooterLinks() {
  return (
    <>
      <section className='contact-section'>
        <div className='container contact'>
          <div className='contact-icon'>
            <FaFacebookF className='i' />
            <FaTwitter className='i' />
            <FaInstagram className='i' />
            <FaYoutube className='i' />
          </div>
          <h2>Let&apos;s Talk?</h2>
          <a href='#home' className='btn btn-dark'>
            Make an enquery!
          </a>
        </div>
      </section>

      <section className='footer-section'>
        <div className='container footer'>
          <div className='footer-logo'>
            <img src={logoImage} alt='Logo' />
          </div>

          <div className='footer-menu'>
            <p className='link-heading'>Features</p>
            <ul className='nav-ul footer-links'>
              <li>
                <a href='#home'>Link Shortening</a>
              </li>
              <li>
                <a href='#home'>Brandet Links</a>
              </li>
              <li>
                <a href='#home'>Analtics</a>
              </li>
              <li>
                <a href='#home'>Blog</a>
              </li>
            </ul>
          </div>
          <div className='footer-menu'>
            <p className='link-heading'>Resources</p>
            <ul className='nav-ul footer-links'>
              <li>
                <a href='#home'>Link Shortening</a>
              </li>
              <li>
                <a href='#home'>Brandet Links</a>
              </li>
              <li>
                <a href='#home'>Analtics</a>
              </li>
              <li>
                <a href='#home'>Blog</a>
              </li>
            </ul>
          </div>
          <div className='footer-menu'>
            <p className='link-heading'>Companies</p>
            <ul className='nav-ul footer-links'>
              <li>
                <a href='#home'>Link Shortening</a>
              </li>
              <li>
                <a href='#home'>Brandet Links</a>
              </li>
              <li>
                <a href='#home'>Analtics</a>
              </li>
              <li>
                <a href='#home'>Blog</a>
              </li>
            </ul>
          </div>
          <div className='footer-menu'>
            <p className='link-heading'>Partners</p>
            <ul className='nav-ul footer-links'>
              <li>
                <a href='#home'>Link Shortening</a>
              </li>
              <li>
                <a href='#home'>Brandet Links</a>
              </li>
              <li>
                <a href='#home'>Analtics</a>
              </li>
              <li>
                <a href='#home'>Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default FooterLinks;
