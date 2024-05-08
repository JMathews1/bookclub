import React, { useState, useRef, useEffect } from "react";
import bookImage from "../images/running.jpg";
import HamburgerMenu from "../components/hamburgerMenu"; 
import '../styles/styles.css'
import SuggestionsPage from "./suggestions";

import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'; // For core styles
import '@glidejs/glide/dist/css/glide.theme.min.css'
import CommentsPage from "./comments";


const IndexPage = () => {
  const [book, setBook] = useState({
    title: "What I Talk About When I talk about running ",
    image: bookImage,
  });

  useEffect(() => {
    new Glide(".glide", {
      peek: 0,
      perView: 1,
      type: "carousel"
    }).mount();
  }, []);


  // State for the first form
  const [suggestionFormState, setSuggestionFormState] = useState({
    title: "",
    author: "",
    suggestedBy: "",
  });

  // State for the second form
  const [commentFormState, setCommentFormState] = useState({
    comment: ""
  });

  const handleSuggestionInputChange = (e) => {
    setSuggestionFormState({ ...suggestionFormState, [e.target.name]: e.target.value });
  };

  const handleCommentInputChange = (e) => {
    setCommentFormState({ ...commentFormState, [e.target.name]: e.target.value });
  };

  const handleSuggestionSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://bookclub-api-1.azurewebsites.net/api/HttpTrigger1?", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: suggestionFormState.title,
        author: suggestionFormState.author,
        suggestedBy: suggestionFormState.suggestedBy
      })
    });
  
    if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        console.error(message);
        alert("Failed to submit suggestion.");
    } else {
        alert("Thank you for your suggestion!");
        setSuggestionFormState({ title: "", author: "", suggestedBy: "" }); // Reset form after submission
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const bookTitle = book.title; 
  
    // Post the comment to the API
    const response = await fetch('https://bookclub-api-1.azurewebsites.net/api/commentSubmission?code=ls448yL6K20DP-Iec4ngcBFxZgg4dMe_XVBV5R_gJIBTAzFukAzf5A%3D%3D', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: bookTitle, comment: commentFormState.comment }),
    });
  
    if (response.ok) {
      alert('Comment submitted successfully!');
      setCommentFormState({ ...commentFormState, comment: '' }); // Reset comment field
    } else {
      alert('Failed to submit comment.');
    }
  }


  return (
    <main >
        <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">      
              <h1>Book Club - Current Book</h1>
              <img
                src={book.image}
                alt={`Cover of the book ${book.title}`}
                // style={{ width: "100%", maxWidth: "500px", height: "auto", display: "block", margin: "0 auto" }}
              />
              </li>
            <li className="glide__slide">
                <form onSubmit={handleSuggestionSubmit} >
                <h3>Please add suggestions for next month's book below </h3>
                <input
                  className="input1"
                  type="text"
                  name="title"
                  placeholder="Book title"
                  value={suggestionFormState.title}
                  onChange={handleSuggestionInputChange}
                />
                <input
                  className="input2"
                  type="text"
                  name="author"
                  placeholder="Author"
                  value={suggestionFormState.author}
                  onChange={handleSuggestionInputChange}
                />
                <input
                  className="input3"
                  type="text"
                  name="suggestedBy"
                  placeholder="Your name"
                  value={suggestionFormState.suggestedBy}
                  onChange={handleSuggestionInputChange}
                />
                <button type="submit">
                  Suggest Book
                </button>
              </form>
            </li>
            <li className="glide__slide">

              <form onSubmit={handleCommentSubmit} >
                <h3>Please add comments that we can use as talking points on "{book.title} </h3>
                <input  
                  className="input1"
                  type="text"
                  name="comment"
                  placeholder="Insightful Comment"
                  value={commentFormState.comment}
                  onChange={handleCommentInputChange}
                />
                <button type="submit">
                  Submit Comment
                </button>
              </form>
            </li>
            <li className="glide__slide">
              <SuggestionsPage />
            </li>
            <li className="glide__slide">
              <h4>comments section coming soon</h4>
              <CommentsPage />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
export const Head = () => <title>Book Club - Current Book</title>;
