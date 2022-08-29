const API_KEY = '28388902-8d9f79c473b0c7ec620d22f12';

function fetchPixabay(searchQuery) {
  return fetch(
    `https://pixabay.com/api/?q=${searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Помилка запиту ${searchQuery}`));
  });
}

const api = {
  fetchPixabay,
};

export default api;
