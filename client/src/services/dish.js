import { axios } from "./network";

const getDishes = ( category ) =>
new Promise((resolve, reject) => {
  axios({
    method: 'GET',
    url: `/all-Active-Dishes/${category}`
  })
    .then(({ data }) => {
      resolve(data);
    })
    .catch(error => {
      reject(error.response ? error.response.data : {});
    });
});

const getAllDishes = ( ) =>
new Promise((resolve, reject) => {
  axios({
    method: 'GET',
    url: `/allDishes`
  })
    .then(({ data }) => {
      resolve(data);
    })
    .catch(error => {
      reject(error.response ? error.response.data : {});
    });
});

const getDish = ( id ) =>
new Promise((resolve, reject) => {
  axios({
    method: 'GET',
    url: `/dish/${id}`
  })
    .then(({ data }) => {
      resolve(data);
    })
    .catch(error => {
      reject(error.response ? error.response.data : {});
    });
});

const addDish = ( data ) =>
new Promise((resolve, reject) => {
  axios({
    method: 'POST',
    url: `/addDish`,
    data
  })
    .then(({ data }) => {
      resolve(data);
    })
    .catch(error => {
      reject(error.response ? error.response.data : {});
    });
});

const updateDish = ( id, data ) =>
new Promise((resolve, reject) => {
  axios({
    method: 'PUT',
    url: `/dish/${id}`,
    data
  })
    .then(({ data }) => {
      resolve(data);
    })
    .catch(error => {
      reject(error.response ? error.response.data : {});
    });
});

const updateDishStatus = ( id, data ) =>
new Promise((resolve, reject) => {
  axios({
    method: 'PUT',
    url: `/dish-status/${id}`,
    data
  })
    .then(({ data }) => {
      resolve(data);
    })
    .catch(error => {
      reject(error.response ? error.response.data : {});
    });
});

const deleteDish = ( id, data ) =>
new Promise((resolve, reject) => {
  axios({
    method: 'DELETE',
    url: `/dish/${id}`,
    data
  })
    .then(({ data }) => {
      resolve(data);
    })
    .catch(error => {
      reject(error.response ? error.response.data : {});
    });
});

export { getDishes, getDish, getAllDishes, addDish, updateDish, updateDishStatus, deleteDish };