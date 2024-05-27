import React from 'react';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import FormLabel from '@mui/material/FormLabel';
import { Controller } from "react-hook-form"
import { useUser } from '@clerk/clerk-react';

export default function MBO({ control }) {
    const userData = useUser()
    const userRole = userData.user.publicMetadata.role

    return (
        <>
            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend">Mission Briefing Officer</FormLabel>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend"><small>Adjust risk assessments on the Final Risk tab</small></FormLabel>
                </Grid>
                <Grid xs={12}>
                    <Controller
                        name="brieferComment"
                        control={control}
                        render={({ field }) => (
                            <TextField disabled={userRole === 'FMAA'} multiline rows={4} fullWidth {...field} label="MBO Comments" variant="outlined" />
                        )}>
                    </Controller>
                </Grid>
            </Grid>
        </>
    )
}