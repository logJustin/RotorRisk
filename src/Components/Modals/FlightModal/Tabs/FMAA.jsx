import React from 'react';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import FormLabel from '@mui/material/FormLabel';
import { Controller } from "react-hook-form"

export default function FMAA({ control, briefed }) {

    return (
        <>

            <Grid container justifyContent="space-evenly" spacing={2} sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                padding: '5px'
            }}>
                <Grid xs={12}>
                    <FormLabel sx={{ textAlign: 'center' }} component="legend">Final Mission Approval Authority</FormLabel>
                </Grid>
                <Grid xs={12}>
                    <Controller
                        name="approverComment"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                disabled={!briefed}
                                multiline
                                rows={4}
                                fullWidth
                                {...field}
                                label={briefed ? "FMAA Comments" : "RCOP needs to be briefed first."}
                                variant="outlined"
                            />

                        )}>
                    </Controller>
                </Grid>
            </Grid>
        </>
    )
}