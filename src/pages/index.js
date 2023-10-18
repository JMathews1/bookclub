import * as React from "react"
import bookImage from '../images/icon.png';  

const pageStyles = {
  color: "#232129",
  display: "grid",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  margin: "auto",
  textAlign: "center"
}

const h2Styles = {
  justifySelf: "center", // Add this to center the h2 horizontally
  marginBottom: 16,      // Adjust as needed
}

const paragraphStyles = {
  marginBottom: 48,
}

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const imageStyles = {
  width: "100%",      // Take the full width on mobile
  maxWidth: "500px",  // But restrict it on larger screens
  height: "auto",     // Keep the original aspect ratio
  display: "block",   // To avoid inline gaps
  margin: "0 auto",   // Center it horizontally
}

const IndexPage = () => {
  // State to hold the book details.
  const [book, setBook] = React.useState({
    title: "Sample Book Title", 
    image: bookImage, 
  })

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  const currentMonth = monthNames[new Date().getMonth()];

  return (
    
    <main style={pageStyles}>
      <h1 style={headingStyles}>{currentMonth} Book of the Month</h1>
      <h2 style={h2Styles}>{book.title}</h2>
      <img src={book.image} alt={book.title} style={imageStyles} />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Book Club - Current Book</title>
