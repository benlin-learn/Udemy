import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';
// action return an object
export const test = () => {
  return {
    type: 'TEST_ACTION',
    payload: 'success!'
  };
};

export const fetchPostsAndUsers = () => {
  return async (dispatch, getState) => {
    // console.log('About to fetch posts');
    await dispatch(fetchPosts());
    // console.log('fetched posts!');

    // console.log(getState().posts);
    const userIds = _.uniq(_.map(getState().posts, 'userId'));

    userIds.forEach((id) => dispatch(fetchUser(id)));
    // await dispatch(fetchUser());
  };
};

// a function that return a function
// only work because of middleware - react-thunk
export const fetchPosts = () => async (dispatch) => {
  const res = await jsonPlaceholder.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: res.data
  });
};

// Totally FINE !
// export const selectPost = () => {
//   return {
//     type: 'SELECT_POST'
//   };
// };

export const fetchUser = (id) => {
  return async (dispatch) => {
    const res = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
      type: 'FETCH_USER',
      payload: res.data
    });
  };
};

// ------ lodash _.memoize to minimize the request to outside API
// export const fetchUser = (id) => {
//   return (dispatch) => {
//     _fetchUser(id, dispatch);
//   };
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const res = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: 'FETCH_USER',
//     payload: res.data
//   });
// });
