import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid white',
  boxShadow: 24,
  p: 4,
};

const buttonstyle = {
  border: '2px solid white',
  color: 'white'
};

const CalendarModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={buttonstyle}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Event
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Title: <input />
            Description: <input />
          </Typography>
          <Button onClick={handleClose} sx={buttonstyle}>Close modal</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default CalendarModal;