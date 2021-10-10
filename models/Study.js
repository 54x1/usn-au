const mongoose = require('mongoose')

const StudySchema = new mongoose.Schema(
  {
    studyName: {
      type: String,
      required: true,
    },
    studyDisplayName: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: '',
    },
    coverPicture: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      max: 255,
    },
    studyAdmin: {
      type: Array,
      default: [],
      required: true,
    },
    studyMembers: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Study', StudySchema)
