const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    employment_status: {
        started: {
            type: Date,
            required: true
        },
        ended: Date,
        current: {
            type: Boolean,
            required: true
        }
    },
    experience: [String]
});

const educationSchema = new Schema({
    name: String,
    enrollment: {
        started: Date,
        ended: Date
    },
    address: String,
    graduated: Boolean,
    degrees: [{
        name: String,
        gpa: {
            type: Number,
            min: 0.0,
            max: 4.0
        }
    }],
    awards: [String]
});

const resumeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    contact: {
        email: String,
        phoneNumber: String,
        github: String,
        portfolio: String
    },
    employment: [employmentSchema],
    education: [educationSchema],
    skills: [
        {
            name: String,
            skillSet: [String]
        }
    ],
    projects: [{
        name: String,
        description: String
    }],
    interests: [String],
});


module.exports = mongoose.model('Resume', resumeSchema, 'portfolio');