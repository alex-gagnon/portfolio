const resumeList = (req, res) => {
    res.status(200).json([{
        id: 1,
        username: "Stuff here"
    }, {
        id: 2,
        username: "And here"
    }])
};

module.exports = {resumeList};