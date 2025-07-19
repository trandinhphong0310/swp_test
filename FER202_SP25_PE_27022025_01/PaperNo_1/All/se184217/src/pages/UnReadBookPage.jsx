import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import ListItem from '@mui/material/ListItem'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllBooks } from '../api/book-api'

export default function UnReadBookPage() {
  const [books, setBooks] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getAllBooks()
      .then(
        data => {
          if (data) {

            data.sort((a, b) => {
              if (Number(a.id) > Number(b.id)) {
                return -1;
              } if (Number(a.id) < Number(b.id)) {
                return 1;
              }
              return 0;
            })

            setBooks(data)
          }
        }
      )
  }, [])

  const handleDetail = (id) => {
    navigate(`/detail-book/${id}`);
  }

  return (
    <div>
      <h1>UnRead Book Page</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {books
            .filter((book) => book.bookReadingStatus === 1 || book.isUnRead === true)
            .map((book, index) => (
              <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                <ListItem>Name: {book?.bookName}</ListItem>
                <ListItem onClick={() => handleDetail(book.id)} style={{ cursor: 'pointer' }}>
                  <img src={book?.bookImage} alt={book?.bookName} style={{ width: '100px', height: '150px' }} />
                </ListItem>
                <ListItem>Type: {book?.bookType}</ListItem>
                <ListItem>Status: {book?.bookReadingStatus}</ListItem>
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  )
}
