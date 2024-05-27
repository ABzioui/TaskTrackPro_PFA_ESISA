import mongoose from "mongoose";

const WorkHourSchema = new mongoose.Schema(
  {
    workHoursID: {
      type: Number,
      default: 0,
    },
    useID: Number,
    date: Date,
    hours: Number,
    tasks: Array,
  },
  { timestamps: true }
);

const WorkHour = mongoose.model("WorkHour", WorkHourSchema);
export default WorkHour;
