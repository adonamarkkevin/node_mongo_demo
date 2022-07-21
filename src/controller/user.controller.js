const User = require("../model/user.model");

module.exports.registerUser = async (req, res) => {
    const { firstName, middleName, lastName, email, password } = req.body;

    try {
        let userTocreate = new User({
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            email: email,
            password: password,
        });

        await userTocreate.save();

        return res.send(userTocreate);
    } catch (error) {
        console.log(error);
        return res.status(500).send(`Server error: ${error}`);
    }
};
