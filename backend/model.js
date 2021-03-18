const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let LATrafficCollisions = new Schema({
  drNumber: {
    type: String
  },
  dateReported: {
    type: String
  },
  dateOccured: {
      type: String
  },
  timeOccurred: {
      type: String
  },
  areaID: {
      type: String
  },
  areaName: {
      type: String
  },
  reportingDistrict: {
      type: String
  },
  crimeCode: {
      type: String
  },
  crimeCodeDescription: {
      type: String
  },
  victimSex: {
      type: String
  },
  victimDescent: {
      type: String
  },
  premiseCode: {
      type: String
  },
  premiseDescription: {
      type: String
  },
  address: {
      type: String
  },
  crossStreet: {
      type: String
  },
  location: {
      type: String
  },
  zipCodes: {
      type: String
  },
  censusTracts: {
      type: String
  },
  precinctBoundary: {
      type: String
  },
  laSpecificPlans: {
      type: String
  },
  councilDistricts: {
      type: String
  },
  neighborhoodCouncils: {
      type: String
  }
});

module.exports = mongoose.model("LATrafficCollisions", LATrafficCollisions);