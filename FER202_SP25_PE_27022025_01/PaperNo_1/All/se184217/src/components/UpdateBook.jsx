import { Box, MenuItem, TextField } from '@mui/material'
import { useEffect, useState } from 'react';
import { getBookById, updateBookById } from '../api/book-api';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function UpdateBook() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [book, setBook] = useState({
        bookName: "",
        bookImage: "",
        bookType: "",
        bookReadingStatus: "",
    })

    useEffect(() => {
        getBookById(id)
            .then((data) => {
                if (data) {
                    setBook(data);
                }
            });
    }, [id]);


    const handleSubmit = (e) => {
        e.preventDefault();

        updateBookById(id, book)
            .then(data => {
                if (data) {
                    alert("Book updated successfully");
                    navigate("/PhongTD123456/AllBooks");
                } else {
                    alert("Failed to update book");
                }
            });
    }

    return (
        <div>
            <h1>Update Book</h1>
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        label="Book Name"
                        name="bookName"
                        value={book.bookName}
                        onChange={(e) => setBook({ ...book, bookName: e.target.value })}
                    />
                    <TextField
                        label="Book Image URL"
                        name="bookImage"
                        value={book.bookImage}
                        onChange={(e) => setBook({ ...book, bookImage: e.target.value })}
                    />
                    <TextField
                        select
                        label="Book Type"
                        name="bookType"
                        value={book.bookType}
                        fullWidth
                        sx={{ m: 1, width: '25ch' }}
                        onChange={(e) => setBook({ ...book, bookType: e.target.value })}
                    >
                        <MenuItem value="Data Science">Data Science</MenuItem>
                        <MenuItem value="Security">Security</MenuItem>
                        <MenuItem value="Design">Design</MenuItem>
                    </TextField>
                    <TextField
                        label="Reading Status (1-Unread, 2-Reading, 3-Read)"
                        name="bookReadingStatus"
                        value={book.bookReadingStatus}
                        onChange={(e) => setBook({ ...book, bookReadingStatus: e.target.value })}
                    />
                </div>
                <div>
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        style={{ marginTop: '20px' }}
                    >
                        Submit
                    </Button>
                </div>
            </Box>
        </div>
    )
}
