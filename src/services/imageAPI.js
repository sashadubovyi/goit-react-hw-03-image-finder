import axios from 'axios';

const API_KEY = '36864483-860e83d492a13d304664bc7cf';

axios.defaults.baseURL = 'https://pixabay.com/';
export const getSearchImagesApi = async (query, page = 1) => {
  const response = await axios.get('/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      page,
      per_page: 12,
      orientation: 'horizontal',
    },
  });
  return response.data;
};
