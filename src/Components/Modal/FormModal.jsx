import React from 'react';
import { Box, Modal } from '@mui/material';
import ModalTabs from './ModalTabs'


export default function FormModal({ open, handleClose, flightData, formMode }) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '85%',
        bgcolor: 'background.paper',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        padding: ' 0 32px 8px 32px',
        marginbottom: '16px',
        overflow: 'auto',
        height: '85%',
        // flexGrow: 1
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <ModalTabs flightData={flightData} formMode={formMode} />
            </Box>
        </Modal >
    );
};


