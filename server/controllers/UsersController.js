const userList = (req, res) => {
    res.status(200).json([{
        id: 1,
        username: "samsepi0l"
    }, {
        id: 2,
        username: "D0loresH4ze"
    }])
};

module.exports = {userList};