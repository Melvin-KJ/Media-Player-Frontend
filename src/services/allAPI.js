import commonAPI from './commonAPI';
import SERVERURL from './serverURL';

// saveVideoAPI  - HTTP req POST called by Add Component
export const saveVideoAPI = async (videoDetails) => {
  return await commonAPI('POST', `${SERVERURL}/uploadVideos`, videoDetails);
};

//getAllVideoAPI - GET Http req called by View Component when component displayed in browser inside its useEffect hook

export const getAllVideoAPI = async () => {
  return await commonAPI('GET', `${SERVERURL}/uploadVideos`, {});
};

//saveHistoryAPI - post http req to http://localhost:3000/history called by VideoCard component when we play video
export const saveHistoryAPI = async (historyDetails)=>{
  return await commonAPI('POST', `${SERVERURL}/history`, historyDetails);
}

//getAllHistoyAPI = get http req to  http://localhost:3000/history called by history component when it open in browser
export const getAllHistoryAPI = async () => {
  return await commonAPI('GET', `${SERVERURL}/history`, {});
};

//deleteHistoryAPI = delete http req to http://localhost:3000/history/id called by history component when user click on delete button
export const deletelHistoryAPI = async (id) => {
  return await commonAPI('DELETE', `${SERVERURL}/history/${id}`, {});
};

//removeVideoAPI - delete Http req called by VideoCard Component when user click on delete button
export const removeVideoAPI = async (id) => {
  return await commonAPI('DELETE', `${SERVERURL}/uploadVideos/${id}`, {});
};

//saveCategoryAPI = post Http req to http://localhost:3000/cateogries by Category componenet when user click on Add button
//categoryDetails = { categoryName, allVideos }
export const saveCategoryAPI = async (categoryDetails) => {
  return await commonAPI('POST', `${SERVERURL}/cateogries`, categoryDetails);
}

//getCategoryAPI - get http req to http://localhost:3000/cateogries by Category componenet when it open in browser
export const getAllCategoryAPI = async () => {
  return await commonAPI('GET', `${SERVERURL}/cateogries`, {});
};

//deleteCategoryAPI = delete http req to http://localhost:3000/categories/id called by Category component when user click on delete button
export const deleteCategoryAPI = async (id) => {
  return await commonAPI('DELETE', `${SERVERURL}/cateogries/${id}`, {});
};

//updateCategoryAPI - put https req to https://localhost:3000/categories/id called by category component when video dropped over the category
export const updateCategoryAPI = async (categoryDetails) => {
  return await commonAPI('PUT', `${SERVERURL}/cateogries/${categoryDetails.id}`, categoryDetails);
};
