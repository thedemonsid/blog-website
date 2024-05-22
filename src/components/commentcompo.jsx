"use client";
import React, { useState } from 'react';

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [replyText, setReplyText] = useState('');
  const [replyIndex, setReplyIndex] = useState(null);
  const [pinnedIndex, setPinnedIndex] = useState(null);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      const newComment = { text: commentText, likes: 0, dislikes: 0, replies: [] };
      setComments([...comments, newComment]);
      setCommentText('');
    }
  };

  const handleReplySubmit = (e, index) => {
    e.preventDefault();
    if (replyText.trim()) {
      const newComments = [...comments];
      newComments[index].replies.push(replyText);
      setComments(newComments);
      setReplyText('');
      setReplyIndex(null);
    }
  };

  const handleLike = (index) => {
    const newComments = [...comments];
    newComments[index].likes += 1;
    setComments(newComments);
  };

  const handleDislike = (index) => {
    const newComments = [...comments];
    newComments[index].dislikes += 1;
    setComments(newComments);
  };

  const handleReply = (index) => {
    setReplyIndex(index);
  };

  const handlePin = (index) => {
    setPinnedIndex(pinnedIndex === index ? null : index);
  };

  return (
    <div className="w-full p-4 mt-8 bg-gray-800 border-2 border-yellow-400 rounded-md">
      <h2 className="mb-4 text-2xl text-center text-yellow-300 sm:text-4xl font-techy">Comments</h2>
      <form onSubmit={handleCommentSubmit} className="mb-4">
        <textarea
          className="w-full p-2 mb-2 text-white border-2 border-red-400 rounded-md resize-none bg-slate-600 focus:outline-none"
          rows="3"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 font-bold text-red-400 transition duration-300 bg-yellow-400 rounded-md hover:bg-red-500 hover:text-yellow-300 focus:outline-none"
        >
          Submit
        </button>
      </form>
      <div className="overflow-y-auto max-h-60">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className={`p-4 mb-4 bg-gray-700 rounded-md ${pinnedIndex === index ? 'border-2 border-yellow-300' : ''}`}>
              <p className="text-white">{comment.text}</p>
              <div className="flex items-center mt-2 space-x-4">
                <button
                  onClick={() => handleLike(index)}
                  className="flex items-center px-2 py-1 text-sm font-bold text-white transition duration-300 focus:outline-none"
                >
                <svg className="w-8 h-8 stroke-0.5 p-1 fill-red-500 stroke-yellow-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
                  {comment.likes}
                </button>
                <button
                  onClick={() => handleDislike(index)}
                  className="flex items-center px-2 py-1 text-sm font-bold text-yellow-300 transition duration-300 focus:outline-none">

<svg className="w-8 h-8 p-1 rounded-full stroke-2 fill-red-500 stroke-yellow-400 stroke-0.5" viewBox="0 0 48 48"  xmlns="http://www.w3.org/2000/svg">
  <path d="M24 31L21 26L28 20L19 15L20 9.2C18.8 8.6 17.4 8.2 16 8C11.6 8 8 11.6 8 16C8 24 16 34 24 36C32 34 40 24 40 16C40 11.6 36.4 8 32 8C30.6 8.2 29.2 8.6 28 9.2" strokeLinecap="round" strokeLinejoin="round" />
</svg>

                  {comment.dislikes}
                </button>
                <button
                  onClick={() => handleReply(index)}
                  className="flex items-center px-2 py-1 text-sm font-bold text-yellow-300 transition duration-300 focus:outline-none"
                >
<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
</svg>
                  Reply
                </button>
                <button
                  onClick={() => handlePin(index)}
                  className="flex items-center px-2 py-1 text-sm font-bold text-yellow-300 transition duration-300 focus:outline-none"
                >
                <svg className="w-6 h-6 p-1 text-yellow-400 transition-colors duration-200 shadow-sm fill-current hover:text-yellow-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 11V3a1 1 0 011-1h4a1 1 0 011 1v8a5 5 0 11-6 0z"></path>
</svg>
                  {pinnedIndex === index ? 'Unpin' : 'Pin'}
                </button>
              </div>
              {replyIndex === index && (
                <form onSubmit={(e) => handleReplySubmit(e, index)} className="mt-2">
                  <textarea
                    className="w-full p-2 mb-2 text-white border-2 border-red-400 rounded-md resize-none bg-slate-600 focus:outline-none"
                    rows="2"
                    placeholder="Add a reply..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                  ></textarea>
                  <button
                    type="submit"
                    className="px-4 py-2 font-bold text-red-400 transition duration-300 bg-yellow-400 rounded-md hover:bg-red-500 hover:text-yellow-300 focus:outline-none"
                  >
                    Submit Reply
                  </button>
                </form>
              )}
              {comment.replies.length > 0 && (
                <div className="mt-2 ml-4 space-y-2">
                  {comment.replies.map((reply, replyIndex) => (
                    <div key={replyIndex} className="p-2 bg-gray-700 rounded-md">
                      <p className="text-white">{reply}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-white">No comments yet.</p>
        )}
      </div>
    </div>
  );
}

export default CommentSection;
