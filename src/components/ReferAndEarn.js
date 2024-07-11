import React, { useState } from 'react';
import { Container, Box, Button, Typography, Modal, TextField, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  heroSection: {
    textAlign: 'center',
    padding: '50px 0',
    backgroundColor: '#f5f5f5',
  },
  referButton: {
    marginTop: '20px',
  },
  modalContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: theme.shadows[5],
  },
  formField: {
    marginBottom: '20px',
  },
}));

const ReferAndEarn = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
    console.log(form);
  };

  return (
    <Container>
      <Box className={classes.heroSection}>
        <Typography variant="h3">Refer & Earn</Typography>
        <Typography variant="h5">Refer a friend and earn rewards!</Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.referButton}
          onClick={handleOpen}
        >
          Refer Now
        </Button>
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box className={classes.modalContent}>
          <Typography variant="h6" gutterBottom>
            Refer a Course
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Your Name"
              name="referrerName"
              fullWidth
              className={classes.formField}
              value={form.referrerName}
              onChange={handleChange}
              required
            />
            <TextField
              label="Your Email"
              name="referrerEmail"
              type="email"
              fullWidth
              className={classes.formField}
              value={form.referrerEmail}
              onChange={handleChange}
              required
            />
            <TextField
              label="Friend's Name"
              name="refereeName"
              fullWidth
              className={classes.formField}
              value={form.refereeName}
              onChange={handleChange}
              required
            />
            <TextField
              label="Friend's Email"
              name="refereeEmail"
              type="email"
              fullWidth
              className={classes.formField}
              value={form.refereeEmail}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </Container>
  );
};

export default ReferAndEarn;
