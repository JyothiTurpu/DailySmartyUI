import { SET_RECENT_POSTS } from './types';
import Axios from 'axios';

export function fetchRecentPosts() {
  return function(dispatch) {
    console.log('Hello');
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