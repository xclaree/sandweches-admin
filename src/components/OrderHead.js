import React from "react";
import '../App.css';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function OrderHead() {
    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left" style={{ fontWeight: '600' }}>Stato</TableCell>
                        <TableCell align="left" style={{ fontWeight: '600' }}>Destinatario</TableCell>
                        <TableCell align="left" style={{ fontWeight: '600' }}>Totale</TableCell>
                        <TableCell align="left" style={{ fontWeight: '600' }}>Pickup</TableCell>
                        <TableCell align="left" style={{ fontWeight: '600' }}>Orario</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </>
    )
}

export default OrderHead;