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
      alert(JSON.stringify(values,null,2));
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(2, "Must be 2 characters or more"),
      email: Yup.string()
        .required("Required")
        .email("Invalid email"),
      phone: Yup.number()
        .typeError("Please enter a valid number")
        .required("Required"),
      program: Yup.number()
        .min(1, "Please select a program")
        .required("Required"),
      message: Yup.string()
        .required("Required")
        .min(10, "Must be 10 characters or more"),
      agree: Yup.boolean()
        .oneOf([true], "You must agree to the terms and conditions")
    })
  })

  return (
    <form onSubmit={formik.handleSubmit} className="form-contact">
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        margin="normal"
      />
      {formik.touched.name && formik.errors.name && (
        <Typography variant="caption" color="red">{formik.errors.name}</Typography>
      )}

      <TextField
        fullWidth
        label="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        margin="normal"
      />
      {formik.touched.email && formik.errors.email && (
        <Typography variant="caption" color="red">{formik.errors.email}</Typography>
      )}

      <TextField
        fullWidth
        label="Phone"
        name="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        margin="normal"
      />
      {formik.touched.phone && formik.errors.phone && (
        <Typography variant="caption" color="red">{formik.errors.phone}</Typography>
      )}

      <FormControl fullWidth margin="normal">
        <InputLabel id="program-label">Program of Study</InputLabel>
        <Select
          labelId="program-label"
          name="program"
          value={formik.values.program}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Program of Study"
        >
          <MenuItem value={0}><em>Please select</em></MenuItem>
          <MenuItem value={1}>Software Engineering</MenuItem>
          <MenuItem value={2}>Information System</MenuItem>
          <MenuItem value={3}>Information Assurance</MenuItem>
          <MenuItem value={4}>Internet of Things</MenuItem>
          <MenuItem value={5}>Artificial Intelligence</MenuItem>
          <MenuItem value={6}>Digital Artist & Design</MenuItem>
        </Select>
        {formik.touched.program && formik.errors.program && (
          <Typography variant="caption" color="red">{formik.errors.program}</Typography>
        )}
      </FormControl>

      <TextField
        fullWidth
        multiline
        minRows={3}
        label="Message"
        name="message"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        margin="normal"
      />
      {formik.touched.message && formik.errors.message && (
        <Typography variant="caption" color="red">{formik.errors.message}</Typography>
      )}

      <FormControlLabel
        control={
          <Switch
            name="agree"
            checked={formik.values.agree}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        }
        label="Agree to terms and conditions"
      />
      {formik.touched.agree && formik.errors.agree && (
        <Typography variant="caption" color="red">{formik.errors.agree}</Typography>
      )}

      <Button type="submit" variant="contained" color="primary">
        Send
      </Button>
    </form>
  );
}

export default Contact;
