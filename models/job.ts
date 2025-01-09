import mongoose from "mongoose";

const btcJobSchema = new mongoose.Schema(
  {
    id:{
      type: Number,
    },
    image: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    jobFunction: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: false,
    },
    hybrid: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    project: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const BtcJob = mongoose.models.BtcJob || mongoose.model("BtcJob", btcJobSchema);

export default BtcJob;
