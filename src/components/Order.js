import React from "react";
import { OrderData } from './OrderData';
import '../App.css';
import { IconContext } from "react-icons";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Order() {

    return (
        <>
            <IconContext.Provider>
                <TableContainer>
                    <Table >
                        
                        <TableBody>
                            {OrderData.map((item, index) => (

                                <TableRow
                                    key={index}
                                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">{item.stringOrderStatus} </TableCell>
                                    <TableCell align="left">{item.customer}</TableCell>
                                    <TableCell align="left">{item.total}</TableCell>
                                    <TableCell align="left">{item.pickup}</TableCell>
                                    <TableCell align="left">{item.break}</TableCell>

                                </TableRow>
                            )
                            )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </IconContext.Provider>
        </>
    );
}

export default Order;