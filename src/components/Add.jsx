import React, { useState } from 'react';
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap';
import { saveVideoAPI } from '../services/allAPI';

const Add = ({ setAddResponseFromHome }) => {
  const [videoDetails, setVideoDetails] = useState({
    caption: '',
    imgUrl: '',
    youTubeLink: '',
  });

  console.log(videoDetails);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //creating a state for wrong input and appear as error in UI
  const [invalidYouTubeLink, setInvalidYouTubeLink] = useState(false);

  //creating a function for extracting embed link from youtube link
  const extractingEmbedLinkFromYoutubeLink = (userInputYouTubeLink) => {
    //steps to convert youtube link to embed link
    if (userInputYouTubeLink.includes('https://www.youtube.com/watch?v=')) {
      console.log(userInputYouTubeLink.split('v=')[1].slice(0, 11));
      const videoId = userInputYouTubeLink.split('v=')[1].slice(0, 11);
      setInvalidYouTubeLink(false);
      setVideoDetails({
        ...videoDetails,
        youTubeLink: `https://www.youtube.com/embed/${videoId}`,
      });
    } else {
      setInvalidYouTubeLink(true);
      setVideoDetails({ ...videoDetails, youTubeLink: '' });
    }
  };

  const handleUpload = async () => {
    //object destructuring
    const { caption, imgUrl, youTubeLink } = videoDetails;
    if (caption && imgUrl && youTubeLink) {
      //code for storing video details permanently
      try {
        const result = await saveVideoAPI(videoDetails);
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          //video added to json file
          alert('Video uploaded successfully!!!');
          handleClose();
          //pass the result to view component
          setAddResponseFromHome(result) 
        } else {
          console.log(result);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('please fill the form!!!');
    }
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button
          onClick={handleShow}
          className="btn btn-warning rounded-circle fw-bolder fs-5 ms-3"
        >
          +
        </button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-warning">
            Upload Video Details!!!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
            <FloatingLabel
              className="mb-3"
              controlId="floatingCaption"
              label="Video Caption"
            >
              <Form.Control
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, caption: e.target.value })
                }
                type="text"
                placeholder="Video Caption"
              />
            </FloatingLabel>
            <FloatingLabel
              className="mb-3"
              controlId="floatingUrl"
              label="Video Image URL"
            >
              <Form.Control
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, imgUrl: e.target.value })
                }
                type="text"
                placeholder="Video Image URL"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingLink" label="Youtube Video Link">
              <Form.Control
                onChange={(e) =>
                  extractingEmbedLinkFromYoutubeLink(e.target.value)
                }
                type="text"
                placeholder="Youtube Video Link"
              />
            </FloatingLabel>
            <FloatingLabel>
              {invalidYouTubeLink && (
                <div className="text-danger fw-bolder mt-2">
                  Invalid Youtube Link...Please try with another!!!
                </div>
              )}
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            onClick={handleUpload}
            className="btn btn-info"
            variant="primary"
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
