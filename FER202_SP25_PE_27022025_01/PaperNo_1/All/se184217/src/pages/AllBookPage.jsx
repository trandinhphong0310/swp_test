import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { deleteBookById, getAllBooks, updateBookById } from '../api/book-api'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'

export default function AllBookPage() {
  const [books, setBooks] = useState([]);
  const [deleteBook, setDeleteBook] = useState(null);
  const [updateBook, setUpdateBook ] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    getAllBooks()
      .then(data => {
        if (data) { 
          data.sort((a, b) => {
            if(Number(a.id) > Number(b.id)) {
              return -1;
            } if (Number(a.id) < Number(b.id)) {
              return 1;
            } 
            return 0;
          })
          setBooks(data)
        }
      })
  }, [])

  const handleDetail = (id) => {
    navigate(`/detail-book/${id}`);
  }

  const handleDelete = (id) => {
    setDeleteBook(id);
    if(window.confirm("Are you sure you want to delete this book?")) {
      setBooks(books.filter(book => book.id !== id));
      deleteBookById(id)
      .then(data => {
        if(data)
          alert("Book deleted successfully");
        else
          alert("Failed to delete book");
      })
    }
  }

  const handleUpdate = (id) => {
    navigate(`/update-book/${id}`);
    setUpdateBook(id)
  }

  return (
    <div>
      <Typography>All Books</Typography>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">
                  {book.bookName}
                </TableCell>
                <TableCell align="left" onClick={() => handleDetail(book.id)} style={{ cursor: 'pointer' }}>
                  <img src={book.bookImage} alt={book.bookName} style={{ width: '100px', height: '150px' }} />
                </TableCell>
                <TableCell align="left">{book.bookType}</TableCell>
                <TableCell align="left">{book.bookReadingStatus}</TableCell>
                <TableCell>
                  <Button variant='contained' onClick={() => handleDelete(book.id)}>Delete</Button>
                  <Button variant='contained' onClick={() => handleUpdate(book.id)}>Update</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
