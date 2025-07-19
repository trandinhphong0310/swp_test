import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate()
    return (
        <div>
            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={() => navigate('/')}>Home</Button>
                <Button variant="contained" onClick={() => navigate('/tool')}>Art Tool</Button>
                <Button variant="contained" onClick={() => navigate('/contact')}>Contact</Button>
            </Stack>
        </div>
    )
}
