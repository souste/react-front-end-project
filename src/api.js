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

export const getReviewById = (review_id) => {
  return axios
    .get(`https://plum-yak-toga.cyclic.app/api/reviews/${review_id}`)
    .then(({ data }) => {
      return data.review;
    });
};

export const getCommentByReviewId = (review_id) => {
  return axios
    .get(`https://plum-yak-toga.cyclic.app/api/reviews/${review_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};

export const postComment = (review_id, newCommentInput) => {
  const postObject = { userName: "jessjelly", body: newCommentInput };
  return axios
    .post(
      `https://plum-yak-toga.cyclic.app/api/reviews/${review_id}/comments`,
      postObject
    )
    .then((response) => {
      return response.data.comment;
    });
};

export const patchVote = (review_id) => {
  const patchObject = { votes: 1 };
  return axios
    .patch(
      `https://plum-yak-toga.cyclic.app/api/reviews/${review_id}`,
      patchObject
    )
    .then((response) => {
      console.log(response);
      return response.data.review;
    });
};

// I would suggest converting this to an axios instance with axios.create, since the baseURL is always going to be the same here, you can sometimes make mistakes if you are copy pasting it each time. This ensures that mistakes are less likely
