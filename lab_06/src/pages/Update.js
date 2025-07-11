import { Box, Button, MenuItem, TextField } from '@mui/material'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getOrchidById, updateOrchidById } from '../api/orchids-api';

export default function Update() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [orchids, setOrchids] = useState({
        name: "",
        image: "",
        rating: 0,
        isSpecial: false,
        origin: "",
        category: ""
    })

    useEffect(() => {
        if (id) {
            getOrchidById(id)
                .then(data => {
                    if (data)
                        setOrchids(data)
                })
        }
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()

        updateOrchidById(id, orchids)
            .then(data => {
                if (data) {
                    alert("Orchid updated successfully")
                    navigate("/")
                } else
                    alert("Orchid update failed")
            })
    }

    return (
        <div>
            <h1>Update Orchids</h1>
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        label="Orchid Name"
                        name="orchidName"
                        value={orchids.name}
                        onChange={(e) => setOrchids({ ...orchids, name: e.target.value })}
                    />
                    <TextField
                        label="Orchid Image URL"
                        name="orchidImage"
                        value={orchids.bookImage}
                        onChange={(e) => setOrchids({ ...orchids, image: e.target.value })}
                    />
                    <TextField
                        label="Orchid Rating"
                        name="orchidRating"
                        value={orchids.rating}
                        onChange={(e) => setOrchids({ ...orchids, rating: e.target.value })}
                    >
                    </TextField>
                    <TextField
                        label="Orchid Country"
                        name="orchidCountry"
                        value={orchids.origin}
                        onChange={(e) => setOrchids({ ...orchids, origin: e.target.value })}
                    />
                    <TextField
                        label="Orchid Category"
                        name="orchidCategory"
                        value={orchids.category}
                        onChange={(e) => setOrchids({ ...orchids, category: e.target.value })}
                    />
                    <TextField
                        select
                        label="Is Special"
                        name="isSpecial"
                        value={orchids.isSpecial.toString()} // phải là string
                        fullWidth
                        sx={{ m: 1, width: '25ch' }}
                        onChange={(e) =>
                            setOrchids({ ...orchids, isSpecial: e.target.value === "true" })
                        }
                    >
                        <MenuItem value="true">Yes</MenuItem>
                        <MenuItem value="false">No</MenuItem>
                    </TextField>
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
