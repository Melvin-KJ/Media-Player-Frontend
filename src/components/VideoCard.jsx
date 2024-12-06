import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import { removeVideoAPI, saveHistoryAPI } from '../services/allAPI';

const VideoCard = ({ displayData, setDeleteVideoResponseFromVideoCard, insideCategory }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = async () => {
    //display modal
    setShow(true);
    //to store video history , call the api and store it in json
    const { caption, youTubeLink } = displayData;
    //using destructuring to get caption & youtube link details. now to get timestamps, we have to create Date object.
    const sysDateTime = new Date();
    //to convert date to string use toLocaleString()
    const timeStamp = sysDateTime.toLocaleString('en-US', {
      timeZoneName: 'short',
    });
    const historyDetails = { caption, youTubeLink, timeStamp };
    try {
      await saveHistoryAPI(historyDetails);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVideo = async (id) => {
    try {
      const result = await removeVideoAPI(id);
      setDeleteVideoResponseFromVideoCard(result);
    } catch (err) {
      console.log(err);
    }
  };

  const VideoCardDragStarted = (e, dragVideoDetails) => {
    console.log(
      'Inside Video Card Drag Started with videoId: ' + dragVideoDetails?.id
    );
    //share data using event drag start
    e.dataTransfer.setData("videoDetails", JSON.stringify(dragVideoDetails))
  };

  return (
    <>
      <Card
        draggable={true}
        onDragStart={(e) => VideoCardDragStarted(e, displayData)}
        style={{ height: '250px' }}
      >
        <Card.Img
          onClick={handleShow}
          variant="top"
          style={{ height: '150px', cursor: 'pointer' }}
          src={displayData?.imgUrl}
        />
        <Card.Body>
          <Card.Text className="d-flex justify-content-between">
            <p>{displayData.caption}</p>
            {!insideCategory && <button
              onClick={() => deleteVideo(displayData?.id)}
              className="btn"
            >
              <i className="fa-solid fa-trash text-danger"></i>
            </button>}
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            className="mt-4"
            width="100%"
            height="400"
            src={`${displayData?.youTubeLink}?autoplay=1`}
            title="Raayan Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoCard;
