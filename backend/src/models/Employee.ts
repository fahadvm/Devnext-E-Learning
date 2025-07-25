import mongoose, { Schema, Document } from 'mongoose';

export interface IEmployee extends Document {
  name: string;
  email: string;
  companyId: mongoose.Types.ObjectId;
  password?: string;
  coursesAssigned: mongoose.Types.ObjectId[];
  position?: string;
  blocked: boolean;
  subscription: boolean;
  NoEmployees: number;
}

const EmployeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true },
  coursesAssigned: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  position: { type: String },
  blocked: { type: Boolean, default: false },
  subscription: { type: Boolean, default: false },
  NoEmployees: { type: Number, default: 0 },
});

export default mongoose.model<IEmployee>('Employee', EmployeeSchema);
