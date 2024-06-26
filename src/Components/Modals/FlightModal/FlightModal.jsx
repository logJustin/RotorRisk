import React, { useState } from 'react';
import { Box, Modal, CircularProgress } from '@mui/material';
import FlightModalTabs from './FlightModalTabs'
import { useGlobalState } from '../../../contexts/GlobalStateContext';

export default function FlightModal({ open }) {

    const { handleModalClose } = useGlobalState();

    // state for loading indicator
    const [loading, setLoading] = useState(false);
    const handleLoadingChange = (boolean) => {
        setLoading(boolean);
    };

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
        filter: loading ? 'blur(0.3px)' : 'none',
        transition: 'filter 0.3s ease',
    };

    return (
        <Modal
            open={open}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <FlightModalTabs
                    open={open}
                    handleLoadingChange={handleLoadingChange}
                />
                {loading && <CircularProgress color='inherit'
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />}
            </Box>
        </Modal >
    );
};


