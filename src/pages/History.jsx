import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deletelHistoryAPI, getAllHistoryAPI } from '../services/allAPI';

const History = () => {
  const [allVideoHistory, setAllVideoHistory] = useState([]);

  useEffect(()=>{
    getAllHistory()
  },[])

  const getAllHistory = async () => {
    try {
      const result = await getAllHistoryAPI();
      if(result.status >= 200 && result.status < 300){
        setAllVideoHistory(result.data)
      }else{
        console.log(result)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeHistory = async (id)=>{
    try{
      await deletelHistoryAPI(id);
      getAllHistory();
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="container d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/'}>Back to Home</Link>
      </div>
      <table className="container my-5 table">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Time Stamp</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {
            allVideoHistory?.length>0?
            allVideoHistory?.map((videoDetails, index)=>(
            <tr key={videoDetails?.id}>
            <td>{index+1}</td>
            <td>{videoDetails?.caption}</td>
            <td>
              <a
                href={videoDetails?.youTubeLink}
                target="_blank"
              >
                {videoDetails?.youTubeLink}
              </a>
            </td>
            <td>{videoDetails?.timeStamp}</td>
            <td>
              <button className="btn" onClick={()=>removeHistory(videoDetails?.id)}>
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            </td>
          </tr>
            )):
            <div className='text-danger fw-bolder'>You did not wathc any video yet!!!</div>
          }
        </tbody>
      </table>
    </div>
  );
};

export default History;
