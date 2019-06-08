import React from 'react';
import './comment.css'

const Comment = ({ text, votes, id, thumbUpComment, thumbDownComment, removeComment }) => 
    <li className="comment">{text} <span className="vote">votes: {votes}</span>
        <div className="buttons">
            <button className="button" onClick={() => thumbUpComment(id)}>like</button>
            <button className="button" onClick={() => thumbDownComment(id)}>dislike</button>
            <button className="button" onClick={() => removeComment(id)}>remove</button>    
        </div>
    </li>;

export default Comment;
