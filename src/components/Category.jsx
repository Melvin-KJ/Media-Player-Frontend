import React, { useEffect, useState } from 'react';
import { Modal, Form, FloatingLabel, Button } from 'react-bootstrap';
import VideoCard from './VideoCard';
import {
  deleteCategoryAPI,
  getAllCategoryAPI,
  removeVideoAPI,
  saveCategoryAPI,
  updateCategoryAPI,
} from '../services/allAPI';

const Category = ({
  setDeleteResponseFromCategory,
  deleteResponseFromView,
}) => {
  const [categoryName, setCategoryName] = useState('');
  const [allCategory, setAllCategory] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getAllCategories();
  }, [deleteResponseFromView]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSaveCategory = async () => {
    if (categoryName) {
      const categoryDetails = { categoryName, allVideos: [] };
      try {
        const result = await saveCategoryAPI(categoryDetails);

        if (result.status >= 200 && result.status < 300) {
          alert('Category Created!!!');
          getAllCategories();
          handleClose();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('Please provide a name to yor category!!!');
    }
  };

  const getAllCategories = async () => {
    try {
      const result = await getAllCategoryAPI();
      if (result.status >= 200 && result.status < 300) {
        setAllCategory(result.data);
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeCategory = async (id) => {
    try {
      await deleteCategoryAPI(id);
      getAllCategories();
    } catch (error) {
      console.log(error);
    }
  };

  const dragOverCategory = (e) => {
    e.preventDefault();
  };

  const videoCardDropOverCategory = async (e, categoryDetails) => {
    console.log('Inside VideoCardDropOverCategory');
    console.log(categoryDetails);
    const videoDetails = JSON.parse(e.dataTransfer.getData('videoDetails'));
    console.log(videoDetails);
    //update category by adding video to its allVideos
    categoryDetails.allVideos.push(videoDetails);
    console.log(categoryDetails);
    //api call to make update the category
    await updateCategoryAPI(categoryDetails);
    getAllCategories();
    const result = await removeVideoAPI(videoDetails.id);
    setDeleteResponseFromCategory(result);
  };

  const categoryVideoDragStarteed = (e, dragVideoDetails, categoryDetails) => {
    console.log('Inside category Video Drag Started');
    let dragData = { video: dragVideoDetails, categoryDetails };
    e.dataTransfer.setData('dragData', JSON.stringify(dragData));
  };

  return (
    <>
      <div className="d-flex justify-content-around">
        <h3>All Categories</h3>
        <button
          onClick={handleShow}
          className="btn btn-warning rounded-circle fw-bolder fs-5 ms-3"
        >
          +
        </button>
      </div>

      {/* Design for display Category */}
      <div className="container-fluid mt-3">
        {/* single category view */}
        {allCategory?.length > 0 ? (
          allCategory?.map((categoryDetails) => (
            <div
              droppable="true"
              onDragOver={dragOverCategory}
              onDrop={(e) => videoCardDropOverCategory(e, categoryDetails)}
              key={categoryDetails?.id}
              className="border rounded p-3 mb-3"
            >
              <div className="d-flex justify-content-between">
                <h5>{categoryDetails?.categoryName}</h5>
                <button
                  className="btn"
                  onClick={() => removeCategory(categoryDetails?.id)}
                >
                  <i className=" text-danger fa-solid fa-trash"></i>
                </button>
              </div>
              {/* displaying category videos */}
              <div className="row mt-2">
                {categoryDetails?.allVideos?.length > 0 &&
                  categoryDetails?.allVideos?.map((video) => (
                    <div
                      draggable={true}
                      onDragStart={(e) =>
                        categoryVideoDragStarteed(e, video, categoryDetails)
                      }
                      key={video?.id}
                      className="col-lg-4"
                    >
                      {/* Video Card */}
                      <VideoCard insideCategory={true} displayData={video} />
                    </div>
                  ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-danger fw-bolder">
            No categories are added yet!!!
          </div>
        )}
      </div>

      <Modal
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingCategoryName" label="Category Name">
            <Form.Control
              type="text"
              placeholder="Category Name"
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            onClick={handleSaveCategory}
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

export default Category;
