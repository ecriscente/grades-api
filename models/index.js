import mongoose from 'mongoose';

import gradeModel from './gradeModel.js ';

const db = {};

db.mongoose = mongoose;
db.grade = gradeModel(mongoose);
db.url = process.env.MONGODB;

export { db };
