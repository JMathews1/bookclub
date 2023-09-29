import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
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

const IndexPage = () => {
  // State to hold the book details.
  const [book, setBook] = React.useState({
    title: "Sample Book Title", // Replace with the title of the book you're reading
    imageUrl: "https://placehold.it/200x300", // Replace with the image URL of the book
  })

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Book of the Month</h1>
      <h2>{book.title}</h2>
      <img src={book.imageUrl} alt={book.title} style={{ width: "200px", height: "300px" }} />
      <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time. 😎
      </p>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Book Club - Current Book</title>
