const Record = require("../models/record.model");
const mongoose = require("mongoose");

exports.getSummary = async (userId) => {
  try {
    const result = await Record.aggregate([
      {
        $match: {
          user: new mongoose.Types.ObjectId(userId)
        }
      },
      {
        $group: {
          _id: "$type",
          total: { $sum: "$amount" }
        }
      }
    ]);

    let income = 0, expense = 0;

    result.forEach(r => {
      if (r._id === "income") income = r.total;
      else expense = r.total;
    });

    return {
      totalIncome: income,
      totalExpense: expense,
      netBalance: income - expense
    };

  } catch (error) {
    console.error("Dashboard Error:", error);
    throw error;
  }
};