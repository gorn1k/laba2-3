// PostsPage.jsx
import React from 'react';
import { useGetPostsQuery } from './apiSlice';
import './styles.css'; // Импортируем стили спиннера

function PostsPage() {
  const { data: posts, error, isLoading, isFetching } = useGetPostsQuery();

  if (isLoading) {
    return (
      <div className="container">
        <div className="spinner" /> {/* Показываем спиннер при загрузке */}
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div>Error: {error.message || 'Unknown error'}</div>
      </div>
    );
  }

  return (
    <div className="container">
      {isFetching && <div>Loading more posts...</div>} {/* Отображаем сообщение о дополнительной загрузке */}
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <p>First Name: {post.firstName}</p>
            <p>Last Name: {post.lastName}</p>
            <p>Email: {post.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsPage;
