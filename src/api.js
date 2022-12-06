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
