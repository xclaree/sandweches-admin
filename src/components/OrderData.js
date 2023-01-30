import React from "react";
import * as FaIcons from 'react-icons/fa';

const Status = {
    ordered : 1,
    ready : 2,
    deleted: 3
}

function conditionStatus(param){
    switch(param){
        case 1: return "orange";
        case 2: return "green";
        case 3: return "red";
        default: return "red";
    }
}

//da cambiare con API
const OrderStatus = Status.ready;

export const OrderData = [   //sarà il risultato della API
    
    {
        customer: "Baleanu Valeria",
        OrderStatus: OrderStatus,
        icon: <FaIcons.FaCircle size="20px" color={conditionStatus(OrderStatus)}/>,
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",
        cName: "order-list-text",

    },
    {
        customer: "5E",
        OrderStatus: OrderStatus,
        icon: <FaIcons.FaCircle size="20px" color={conditionStatus(OrderStatus)}/>,
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",
        cName: "order-list-text",

    },
];