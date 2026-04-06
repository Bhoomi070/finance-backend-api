const dashboardService = require("../services/dashboard.service");

exports.getDashboard = async (req, res) => {
  try {
    const data = await dashboardService.getSummary(req.user.id);

    res.json({
      success: true,
      message: "Dashboard fetched successfully",
      data
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};