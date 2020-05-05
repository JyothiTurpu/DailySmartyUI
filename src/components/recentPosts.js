import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Post from './post';

class RecentPosts extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.fetchRecentPosts();
  }


  renderPosts = function() {
    const posts = this.props.recentPosts.map((post, index) => {
      if(index < 3) {
        return (
         <Post type={'recent'} key={index} {...post}/>
        )
      }
    });

    return posts;
  }



  render() {
    return (
      <div className='recent-posts'>
           <div className='recent-posts__wrapper'>
                <div className='recent-posts__heading'>
                      Recent Posts
                </div>

                <ul className='recent-posts__posts'>
                    {/* <li>Recent Post 0</li>
                    <li>Recent Post 1</li>
                    <li>Recent Post 2</li> */}
                    {this.renderPosts()}
                </ul>
           </div>

      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    recentPosts: state.posts.recentPosts
  }
}

export default connect(mapStateToProps, actions)(RecentPosts);