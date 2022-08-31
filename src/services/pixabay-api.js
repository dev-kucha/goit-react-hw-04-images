const API_KEY = '28388902-8d9f79c473b0c7ec620d22f12';
const PER_PAGE = 12;

function fetchPixabay(searchQuery, page) {
  return fetch(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Помилка запиту ${searchQuery}`));
  });
}

const api = {
  fetchPixabay,
  PER_PAGE,
};

export default api;
