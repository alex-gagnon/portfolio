const mongoose = require('mongoose');
const Res = mongoose.model('Resume');

const resumeList = (req, res) => {
    Res
        .findOne()
        .exec((err, resume) => {
            res
                .status(200)
                .json(resume)
        })
};

module.exports = {
    resumeList
};
