const {Contact} = require("../../models");

const getAll = async (req, res) => {
    const {_id} = req.params;
    const contacts = await Contact.find({owner: _id}).populate("owner", "_id name email");;
    res.json({
        status: "success",
        code: 200,
        data: {
            result: contacts
        }
    });
};

module.exports = getAll;