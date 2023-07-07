const asyncHandler = require("express-async-handler");
const orders = require("../models/dosModel");

// @desc get all orders
// @route GET /api/dOrders
// @access public
const getDOrders = asyncHandler(async (req, res) => {
  const dos = await orders.find();
  console.log("Getting dos", dos);
  // const dos = DOs
  res.status(200).json(dos);
});

// @desc get orders by ID
// @route GET /api/dOrders/:id
// @access public
const getDOrdersById = asyncHandler(async (req, res) => {
  const dos = await orders.find(req.params.id);
  res.status(200).json(dos);
});

// @desc create orders
// @route GET /api/dOrders
// @access public
const crearteDOrders = asyncHandler(async (req, res) => {
  console.log("Body :", req.body);

  const dos = await orders.create(req.body);
  res.status(200).json(dos);
});

// @desc delete orders by ID
// @route GET /api/dOrders/:id
// @access public
const deleteDOrdersById = asyncHandler(async (req, res) => {
  const dos = orders.delete(req.params.id);
  res.status(200).json(dos);
});

// @desc  orders by ID
// @route GET /api/dOrders/:id
// @access public
const updateDOrdersById = asyncHandler(async (req, res) => {
  const dos = orders.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(dos);
});

module.exports = {
  getDOrders,
  getDOrdersById,
  crearteDOrders,
  deleteDOrdersById,
  updateDOrdersById,
};

const DOs = [
  {
    doNumber: 101,
    entries: [
      {
        item: "item1",
        doType: "A1",
        fromWarehouse: "F1",
        toWarehouse: "T1",
        reasonCode: "R1",
      },
      {
        item: "item2",
        doType: "A2",
        fromWarehouse: "F2",
        toWarehouse: "T2",
        reasonCode: "R2",
      },
      {
        item: "item3",
        doType: "A3",
        fromWarehouse: "F3",
        toWarehouse: "T3",
        reasonCode: "R3",
      },
      {
        item: "item4",
        doType: "A4",
        fromWarehouse: "F4",
        toWarehouse: "T4",
        reasonCode: "R4",
      },
      {
        item: "item5",
        doType: "A5",
        fromWarehouse: "F5",
        toWarehouse: "T5",
        reasonCode: "R5",
      },
    ],
  },
  {
    doNumber: 201,
    entries: [
      {
        item: "item21",
        doType: "A21",
        fromWarehouse: "F21",
        toWarehouse: "T21",
        reasonCode: "R21",
      },
      {
        item: "item22",
        doType: "A22",
        fromWarehouse: "F22",
        toWarehouse: "T22",
        reasonCode: "R22",
      },
      {
        item: "item23",
        doType: "A23",
        fromWarehouse: "F23",
        toWarehouse: "T23",
        reasonCode: "R23",
      },
      {
        item: "item24",
        doType: "A24",
        fromWarehouse: "F24",
        toWarehouse: "T24",
        reasonCode: "R24",
      },
      {
        item: "item25",
        doType: "A25",
        fromWarehouse: "F25",
        toWarehouse: "T25",
        reasonCode: "R25",
      },
    ],
  },
];

//   {
//     doNumber: 102,
//     item: "item2",
//     doType: "A2",
//     fromWarehouse: "F2",
//     toWarehouse: "T2",
//     reasonCode: "R2",
//   },
//   {
//     doNumber: 103,
//     item: "item3",
//     doType: "A3",
//     fromWarehouse: "F3",
//     toWarehouse: "T3",
//     reasonCode: "R3",
//   },
//   {
//     doNumber: 104,
//     item: "item4",
//     doType: "A4",
//     fromWarehouse: "F4",
//     toWarehouse: "T4",
//     reasonCode: "R4",
//   },
//   {
//     doNumber: 105,
//     item: "item5",
//     doType: "A5",
//     fromWarehouse: "F5",
//     toWarehouse: "T5",
//     reasonCode: "R5",
//   },
// ];
