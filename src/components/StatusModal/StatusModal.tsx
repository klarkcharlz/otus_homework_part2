import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    width: 400,
    opacity: 0.6,
    color: 'black',
    border: '4px solid black',
    borderRadius: '25px',
    textAlign: 'center',
    p: 4,
};

type StatusModalProps = {
    open: boolean,
    setOpen: Function,
    status: string
};

export default function StatusModal(
    {open, setOpen, status}: StatusModalProps
) {
    const handleClose = () => setOpen(false);

    function createMarkup() {
        return {__html: status};
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        dangerouslySetInnerHTML={createMarkup()}
                        id="modal-modal-title" variant="h6" component="h2">
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}