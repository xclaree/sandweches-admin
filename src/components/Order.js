import React from "react";
import { OrderData } from './OrderData';
import '../App.css';
import { IconContext } from "react-icons";
import * as SlIcons from 'react-icons/sl';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function Order() {

//     return (
//         <>
//             <IconContext.Provider>
//                 <TableContainer component={Paper}>
//                     <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell>Destinatario</TableCell>
//                                 <TableCell align="right">Totale</TableCell>
//                                 <TableCell align="right">Pickup</TableCell>
//                                 <TableCell align="right">Orario</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {OrderData.map((item, index) => (
//                                 <TableRow
//                                     key={index}
//                                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                                 >
//                                     <TableCell component="th" scope="row">
//                                         {item.name}
//                                     </TableCell>
//                                     <TableCell align="right">{item.calories}</TableCell>
//                                     <TableCell align="right">{item.fat}</TableCell>
//                                     <TableCell align="right">{item.carbs}</TableCell>
//                                     <TableCell align="right">{item.protein}</TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </IconContext.Provider>
//         </>
//     );
// }

// export default Order;