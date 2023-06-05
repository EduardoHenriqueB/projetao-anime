import React, { useState } from 'react';
import Pagina_Personagem from './components/Pagina_Personagem'
import Pagina_Historia from './components/Pagina_Historia'
import CommentBar from './components/CommentBar'
import './App.css'

function App() {
  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <>
      <Pagina_Historia/>
      <div>
        <CommentBar addComment={addComment} />
        <div>
          {comments.map((comment, index) => (
            <div key={index}>{comment}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
