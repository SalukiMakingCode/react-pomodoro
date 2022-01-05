import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import Button from '@mui/material/Button';
import '../css/Modal.css';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 600,
  height: 350,
  bgcolor: '#FFFFFF',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};

export default function ModalUnstyledDemo(props) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        //onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style} id="box-modal">
          <h2 id="unstyled-modal-title">Take a break</h2>
          <p id="unstyled-modal-description">What will you do now ?</p>
          <Button variant="contained" onClick={handleClose} id="close"> Nothing, close this modal</Button>
          <Button variant="contained" onClick={() => {handleClose();props.reset();props.incrementMinutes();props.start();} } id="restart"> Restart a new counter</Button>
        </Box>
      </StyledModal>
    </div>
  );
}