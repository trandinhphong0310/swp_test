import { useFormik } from "formik";
import * as Yup from 'yup'
import {
  TextField, Button, Typography, FormControl, InputLabel, MenuItem, Select,
  FormControlLabel, Switch
} from '@mui/material';
import "./App.css"

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      program: 0,
      message: "",
      agree: false
    },

    onSubmit: (values) => {
      alert(JSON.stringify(formik.values))
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required").min(2, "Must be 2 characters or more"),
      email: Yup.string().required("Required").email("Invalid email"),
      phone: Yup.number().integer().typeError("Please enter a valid number"),
      program: Yup.number().integer().typeError("Please select a program"),
      message: Yup.string().required("Required").min(10, "Must be 10 characters or more"),
      agree: Yup.boolean().oneOf([true], "The terms and condition must be accepted")
    })
  })

  return (
    <form onSubmit={formik.handleSubmit} className="form-contact">
      <TextField
        label="Name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.name}</Typography>)}
      <TextField
        label="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      {formik.errors.email && (<Typography variant="caption" color="red">{formik.errors.email}</Typography>)}
      <TextField
        label="Phone"
        name="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
      />
      {formik.errors.phone && (<Typography variant="caption" color="red">{formik.errors.phone}</Typography>)}
      <FormControl sx={{m: 1, minWidth: 600}}>
        <InputLabel id="demo-simple-select-autowidth-label">Program of Study</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          label="Program of Study"
          name="program"
          value={formik.values.program}
          onChange={formik.handleChange}
        >
          <MenuItem value={0}>
            <em>Please select</em>
          </MenuItem>
          <MenuItem value={1}>Software Engineering</MenuItem>
          <MenuItem value={2}>Information System</MenuItem>
          <MenuItem value={3}>Information Assurance</MenuItem>
          <MenuItem value={4}>Internet of Things</MenuItem>
          <MenuItem value={5}>Artificial Intelligence</MenuItem>
          <MenuItem value={6}>Digital Artist & Design</MenuItem>
        </Select>
      {formik.errors.program && (<Typography variant="caption" color="red">{formik.errors.program}</Typography>)}
      </FormControl>
      <TextField
        id="outlined-multiline-static"
        label="message"
        multiline
        name="message"
        value={formik.values.message} 
        onChange={formik.handleChange}
      />
      <FormControlLabel
        control={<Switch/>}
        label="Agree to terms and conditions"
        name="agree"
        value={formik.values.agree} 
        onClick={formik.handleChange}
      />
      {formik.errors.agree && (<Typography variant="caption" color="red">{formik.errors.agree}</Typography>)}
      <Button type="submit">Send</Button>
    </form>
  );
}
export default Contact;
