import React, { useState } from 'react';
import { TableRow, TableCell, IconButton, Skeleton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';

export default function FlightSkeleton() {
    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell sx={{ padding: '0px 0px 0px 5px' }}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                    ><KeyboardArrowDownIcon /></IconButton>
                </TableCell>
                <TableCell colSpan={6} sx={{ p: '6px 0' }} align='center'>
                    <Skeleton width={'100%'} />
                </TableCell>
                <TableCell sx={{ p: '6px 0' }} align="center"><EditIcon sx={{ verticalAlign: 'middle' }} /> </TableCell>
                <TableCell sx={{ p: '6px 0' }} align="center"><DeleteIcon /></TableCell>
            </TableRow>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell sx={{ padding: '0px 0px 0px 5px' }}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                    ><KeyboardArrowDownIcon /></IconButton>
                </TableCell>
                <TableCell colSpan={6} sx={{ p: '6px 0' }} align='center'>
                    <Skeleton width={'100%'} />
                </TableCell>
                <TableCell sx={{ p: '6px 0' }} align="center"><EditIcon sx={{ verticalAlign: 'middle' }} /> </TableCell>
                <TableCell sx={{ p: '6px 0' }} align="center"><DeleteIcon /></TableCell>
            </TableRow>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell sx={{ padding: '0px 0px 0px 5px' }}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                    ><KeyboardArrowDownIcon /></IconButton>
                </TableCell>
                <TableCell colSpan={6} sx={{ p: '6px 0' }} align='center'>
                    <Skeleton width={'100%'} />
                </TableCell>
                <TableCell sx={{ p: '6px 0' }} align="center"><EditIcon sx={{ verticalAlign: 'middle' }} /> </TableCell>
                <TableCell sx={{ p: '6px 0' }} align="center"><DeleteIcon /></TableCell>
            </TableRow>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell sx={{ padding: '0px 0px 0px 5px' }}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                    ><KeyboardArrowDownIcon /></IconButton>
                </TableCell>
                <TableCell colSpan={6} sx={{ p: '6px 0' }} align='center'>
                    <Skeleton width={'100%'} />
                </TableCell>
                <TableCell sx={{ p: '6px 0' }} align="center"><EditIcon sx={{ verticalAlign: 'middle' }} /> </TableCell>
                <TableCell sx={{ p: '6px 0' }} align="center"><DeleteIcon /></TableCell>
            </TableRow>
        </>
    )
}
