import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div style={{ height: '300px' }} className="mt-5 container w-100 ">
      <div className="d-flex justify-content-between align-content-center">
        {/* intro */}
        <div style={{ width: '400px' }}>
          <h5>
            <i class="fa-solid fa-music me-2"></i> Media Player
          </h5>
          <p className="fw-bolder text-white">
            Designed and built with all the love in the world by the Luminar
            team with the help of our contributors.
          </p>
          <p className="text-white">Code licensed Luminar, docs CC BY 3.0.</p>
          <p className="text-white">Currently v5.3.2.</p>
        </div>
        {/* links */}
        <div className="d-flex flex-column">
          <h5>Links</h5>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
            Landing Page
          </Link>
          <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>
            Home Page
          </Link>
          <Link
            to={'/history'}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Watch History Page
          </Link>
        </div>
        {/* guides */}
        <div className="d-flex flex-column">
          <h5>Guides</h5>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
            React
          </Link>
          <Link
            to={'https://react-bootstrap.github.io/'}
            target="_blank"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            react Bootstrap
          </Link>
          <Link
            to={'https://reactrouter.com/en/main'}
            target="_blank"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            React Router
          </Link>
        </div>
        {/* contact */}
        <div className="d-flex flex-column">
          <h5>Contact Us</h5>
          <div className="d-flex">
            <input
              type="text"
              placeholder="Enter your email here"
              className="form-control me-2"
            />
            <button className="btn btn-info">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="d-flex justify-content-between mt-3 ">
            <a href="" target="_blank" className="text-white">
              <i class="fa-brands fa-twitter fa-2x"></i>
            </a>

            <a href="" target="_blank" className="text-white">
              <i class="fa-brands fa-instagram fa-2x"></i>
            </a>
            <a href="" target="_blank" className="text-white">
              <i class="fa-brands fa-facebook fa-2x"></i>
            </a>
            <a href="" target="_blank" className="text-white">
              <i class="fa-brands fa-whatsapp fa-2x"></i>
            </a>
            <a href="" target="_blank" className="text-white">
              <i class="fa-brands fa-github fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
      <p className='text-center mt-3'>Copyright &copy; July 2024 Batch, Media Player App. Built with React</p>
    </div>
  );
};

export default Footer;
