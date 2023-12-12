// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from './actions/userActions';
import { fetchPostsRequest } from './actions/postActions';

const App = () => {
  const dispatch = useDispatch();
  const { users, posts, userLoading, postLoading } = useSelector((state) => ({
    users: state.users.users,
    posts: state.posts.posts,
    userLoading: state.users.loading,
    postLoading: state.posts.loading,
  }));

  useEffect(() => {
    dispatch(fetchUsersRequest());
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  return (
    <div>
      <h1>Users</h1>
      {userLoading ? <p>Loading users...</p> : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}

      <h1>Posts</h1>
      {postLoading ? <p>Loading posts...</p> : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
