import React from 'react';
import { Link } from 'react-router-dom';
import LandingImg from '../assets/daniel-johns-silverchair.gif';
import Img1 from '../assets/music-party.gif';
import Img2 from '../assets/music-rock (1).gif';
import Img3 from '../assets/music-rock.gif';
import Card from 'react-bootstrap/Card';

const Landing = () => {
  return (
    <div style={{ paddingTop: '100px' }} className="container">
      {/* landing part */}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>
            Welcome to <span className="text-warning">Media Player</span>
          </h3>
          <p className="text-white" style={{ textAlign: 'justify' }}>
            Media Player App will allow user to add or remove their uploaded
            videos from youTube and also allow them to arrange it in different
            categories by drag and drop. User can also have the provision to
            manage their watch history as well. What are you waiting for, let
            starts exploring our site!!!
          </p>
          <Link to={'/home'} className="btn btn-info text-white">
            Get Started
          </Link>
        </div>
        <div className="col-lg"></div>
        <div className="col-lg-6">
          <img
            className="img-fluid ms-5"
            src={LandingImg}
            alt="landing image"
          />
        </div>
      </div>
      {/* features part */}
      <div className="my-5">
        <h3 className="text-center text-info">Features</h3>
        <div className="row mt-5 ">
          <div className="col-lg-4">
            <Card className="p-2 text-white" style={{ width: '22rem' }}>
              <Card.Img style={{ height: '250px' }} variant="top" src={Img1} />
              <Card.Body>
                <Card.Title className="text-warning">
                  Managing Videos
                </Card.Title>
                <Card.Text>
                  Users can upload, view and remove the videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="p-2 text-white" style={{ width: '22rem' }}>
              <Card.Img style={{ height: '250px' }} variant="top" src={Img2} />
              <Card.Body>
                <Card.Title className="text-warning">
                  Categorise Videos
                </Card.Title>
                <Card.Text>
                  Users can categorise the videos by drag and drop feature.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="p-2 text-white" style={{ width: '22rem' }}>
              <Card.Img style={{ height: '250px' }} variant="top" src={Img3} />
              <Card.Body>
                <Card.Title className="text-warning">
                  Managing Videos
                </Card.Title>
                <Card.Text>
                  Users can manage the watch history of all videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* video part */}
      <div className="border rounded p-5 align-items-center">
        <div className="row">
          <div className="col-lg-5">
            <h3 className="text-warning">
              Simple, Fast and
              <br /> Powerful
            </h3>
            <p style={{ textAlign: 'justify' }}>
              <span className="fs-5">Play Everything:</span>Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. At, optio blanditiis.
              Maxime deserunt, ipsa quod fuga consectetur ex quis sed illo,
              fugiat incidunt excepturi labore iure, quam itaque explicabo id!
            </p>
            <p style={{ textAlign: 'justify' }}>
              <span className="fs-5">Categorise Videos:</span>Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. At, optio blanditiis.
              Maxime deserunt, ipsa quod fuga consectetur ex quis sed illo,
              fugiat incidunt excepturi labore iure, quam itaque explicabo id!
            </p>
            <p style={{ textAlign: 'justify' }}>
              <span className="fs-5">Manage History:</span>Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. At, optio blanditiis. Maxime
              deserunt, ipsa quod fuga consectetur ex quis sed illo, fugiat
              incidunt excepturi labore iure, quam itaque explicabo id!
            </p>
          </div>
          <div className="col"></div>
          <div className="col-lg-6 ">
            <iframe
              className="mt-4"
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/gk6Jri1kGTs?si=9Q93koBImsf4bzlV"
              title="Raayan Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
