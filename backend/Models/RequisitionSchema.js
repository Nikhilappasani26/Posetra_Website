const mongoose = require("mongoose");

const RequisitionSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    materials: [
      {
        sNo: { type: Number, required: true }, // Serial Number
        itemNo: { type: String, required: true }, // Item Number
        materialId: { type: String, required: true },
        materialName: { type: String, required: true },
        shortText: { type: String, default: "" }, // Short description
        materialGroup: { type: String, default: "" }, // Material Category
        quantity: { type: Number, required: true },
        unit: { type: String, default: "" }, // Measurement unit
        deliveryDate: { type: String, required: true },
        plant: { type: String, default: "" }, // Plant
        storageLocation: { type: String, default: "" }, // Storage Location
        purchasingGroup: { type: String, default: "" }, // Purchasing Group
        requisitioner: { type: String, default: "" }, // Requisitioner
        trackingNo: { type: String, default: "" }, // Tracking Number
        vendor: { type: String, default: "" }, // Vendor
        fixedVendorIS: { type: String, default: "" }, // Fixed Vendor IS
      },
    ],
  },
  { timestamps: true }
);

const RequisitionModel = mongoose.model("Requisition", RequisitionSchema);
module.exports = RequisitionModel;
