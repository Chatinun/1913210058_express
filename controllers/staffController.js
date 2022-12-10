const staff = require("../models/staff");
const Staff = require("../models/staff");

exports.index = async (req, res, next) => {
  const staff = await Staff.find().sort({ _id: -1 });

  res.status(200).json({
    data: staff,
  });
};

/* http://localhost:3000/staff/63942b3cf4128b37b896959f */
exports.show = async (req, res, next) => {
  try {
    const { id } = req.params;

    const staff = await Staff.findOne({
      _id: id,
    });

    if (!staff) {
      throw new Error("ไม่พบผู้ใช้งาน");
    } else {
      res.status(200).json({
        data: staff,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "เกิดข้อผิดพลาด: " + error.message,
    });
  }
};

exports.insert = async (req, res, next) => {
  const { name, salary } = req.body;

  let staff = new Staff({
    name: name,
    salary: salary,
  });
  await staff.save();

  res.status(200).json({
    message: "เพิ่มข้อมูลเรียบร้อยแล้ว",
  });
};

exports.destroy = async (req, res, next) => {
  try {
    const { id } = req.params;

    const staff = await Staff.deleteOne({
      _id: id,
    });

    if (staff.deletedCount === 0) {
      throw new Error("ไม่สามารถลบข้อมูลได้ / ไม่พบข้อมูลผู้ใช้งาน");
    } else {
      res.status(200).json({
        message: "ลบข้อมูลเรียบร้อยแล้ว",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "เกิดข้อผิดพลาด: " + error.message,
    });
  }
};

exports.update = async (req, res, next) => {
  try {
		const { id } = req.params;
    const { name, salary } = req.body;
		
		/* 1st Method */
    // const staff = await Staff.findById(id);
		// staff.name = name;
		// staff.salary = salary;

		// await staff.save();

		/* 2nd Method */
		// const staff = await Staff.findByIdAndUpdate(id, {
		// 	name: name,
		// 	salary: salary
		// })

		/* 3rd Method */
		const staff = await Staff.updateOne({_id: id}, {
			name: name,
			salary: salary
		})

    res.status(200).json({
      message: "แก้ไขข้อมูลเรียบร้อยแล้ว",
    });
  } catch (error) {
    res.status(400).json({
      message: "เกิดข้อผิดพลาด: " + error.message,
    });
  }
};
