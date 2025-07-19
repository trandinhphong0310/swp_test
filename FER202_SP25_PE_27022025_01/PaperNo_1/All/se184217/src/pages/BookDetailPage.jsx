import { Box, Grid, ListItem } from '@mui/material';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getBookById } from '../api/book-api';

export default function BookDetailPage() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);

    const handleDetail = (id) => {
      navigate(`/detail-book/${id}`)
    }

    useEffect(() => {
      getBookById(id)
      .then(data => {
        if(data) {
          setBooks([data])
        }
      })
    }, [id])
    
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {books
            .map((book, index) => (
              <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                <ListItem>Name: {book?.bookName}</ListItem>
                <ListItem onClick={() => handleDetail(book.id)} style={{ cursor: 'pointer' }}>
                  <img src={book?.bookImage} alt={book?.bookName} style={{ width: '100px', height: '150px' }} />
                </ListItem>
                <ListItem>Type: {book?.bookType}</ListItem>
                <ListItem>Status: 
                  {
                    book?.bookReadingStatus === 1 ? ' unRead' :
                    book?.bookReadingStatus === 2 ? ' reading':
                    book?.bookReadingStatus === 3 ? ' read' : ' Unknown'
                  }
                </ListItem>
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  )
}
