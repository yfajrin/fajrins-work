import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.styles.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="text-muted">This web app is developed by <a href="https://github.com/yfajrin/" target="_blank" rel="noreferrer" >@yfajrin</a> using React. <br/> Please contact <a href='mailto:fajrinyusuf@gmail.com'>fajrinyusuf@gmail.com</a> for more information about this react project.</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline mb-0 float-md-right">
              <li className="list-inline-item">
                <a href="https://github.com/yfajrin/" target="_blank" rel="noreferrer" >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/fajrin-yusuf-muttaqin-91115313a/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://instagram.com/yfajrin/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com/fajrinyusuf" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/yfajrin" target="_blank" rel="noreferrer"> 
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;