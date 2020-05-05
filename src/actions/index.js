import { SET_RECENT_POSTS, SET_RESULTS_POSTS } from './types';
import Axios from 'axios';

export function fetchRecentPosts() {
  return function(dispatch) {
    Axios.get('https://api.dailysmarty.com/posts')
    .then(response => {
      console.log('Response after fetching records ', response.data.posts);
      dispatch({
        type: SET_RECENT_POSTS,
        payload: response.data.posts
      });
    })
    .catch(error => {
      console.log('Error in fetchRecentPosts=>', error);
    });
  }
}

export function fetchPostsWithQuery(query, callback) {
  return function(dispatch) {
    Axios.get(`https://api.dailysmarty.com/search?q=${query}`)
    .then(response => {
      console.log('Response from fetchPostsWithQuery ', response.data.posts);
      dispatch({
        type: SET_RESULTS_POSTS,
        payload: response.data.posts
      });
      
      if(callback)
        callback();
    })
    .catch(error => {
      console.log('Error in fetchRecentPosts=>', error);
    });
  }
}