import axios from "axios";

export const getCategories = () => {
  return axios
    .get("https://plum-yak-toga.cyclic.app/api/categories")
    .then(({ data }) => {
      return data.categories;
    });
};

export const getReviews = () => {
  return axios
    .get("https://plum-yak-toga.cyclic.app/api/reviews")
    .then(({ data }) => {
      return data.reviews;
    });
};

// I would suggest converting this to an axios instance with axios.create, since the baseURL is always going to be the same here, you can sometimes make mistakes if you are copy pasting it each time. This ensures that mistakes are less likely
