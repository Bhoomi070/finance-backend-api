const Record = require("../models/record.model");

exports.createRecord = async (req, res) => {
  try {
    const { amount, type, category, date, note } = req.body;

    if (!amount || !type) {
      return res.status(400).json({
        success: false,
        message: "Amount and type are required"
      });
    }

    if (type !== "income" && type !== "expense") {
      return res.status(400).json({
        success: false,
        message: "Invalid type (must be income or expense)"
      });
    }

    const record = await Record.create({
      amount,
      type,
      category,
      date,
      note,
      user: req.user.id
    });

    res.json({
      success: true,
      message: "Record created successfully",
      data: record
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

exports.getRecords = async (req, res) => {
  try {
    const { type, category, search, page = 1 } = req.query;

    let filter = { user: req.user.id };

    if (type) filter.type = type;
    if (category) filter.category = category;

    if (search) {
      filter.category = { $regex: search, $options: "i" };
    }

    const limit = 5;
    const skip = (page - 1) * limit;

    const records = await Record.find(filter)
      .skip(skip)
      .limit(limit);

    res.json({
      success: true,
      page: Number(page),
      data: records
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};