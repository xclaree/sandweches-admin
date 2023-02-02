import React from "react";
import * as FaIcons from 'react-icons/fa';

const Status = {
    ordered: 1,
    ready: 2,
    deleted: 3
}

function conditionStatus(param) {
    switch (param) {
        case 1: return "In esecuzione";
        case 2: return "Pronto";
        case 3: return "Cancellato";
        default: return "Sconosciuto";
    }
}

//da cambiare con API
const OrderStatus = Status.ready;

export const OrderData = [   //sarà il risultato della API

    {
        customer: "Baleanu Valeria",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",

    },
    {
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",

    },
    {
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",

    },
    {
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",

    },
    {
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",
        cName: "order-list",

    },
    {
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",
        cName: "order-list",

    },
    {
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",
        cName: "order-list",

    },
    {
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",
        cName: "order-list",

    },
    {
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",
        cName: "order-list",

    },
    {
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",
        cName: "order-list",

    },
    {
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",
        cName: "order-list",

    },
    {
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",
        cName: "order-list",

    },
    {
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",
        cName: "order-list",

    },
    {
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",
        cName: "order-list",

    },{
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",
        cName: "order-list",

    },{
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",
        cName: "order-list",

    },{
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",
        cName: "order-list",

    },{
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",
        cName: "order-list",

    },{
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",
        cName: "order-list",

    },{
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",
        cName: "order-list",

    },{
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",
        cName: "order-list",

    },{
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",
        cName: "order-list",

    },{
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",
        cName: "order-list",

    },{
        customer: "5E",
        OrderStatus: OrderStatus,
        stringOrderStatus: conditionStatus(OrderStatus),
        total: "$20",
        pickup: "Settore A itis",
        break: "9:30",
        cName: "order-list",

    },
];