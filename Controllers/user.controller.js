const { data } = require("../usersData.json");

const getAllUsers = (req, res) => {
    res.json(data);
}

const getUsersByUuid = (req, res) => {
    const { uuid } = req.params;
    const results= data.find((item) => item.login.uuid === uuid);

    if(results) {
        res.json(results);
    }
    else {
        res.sendStatus(404);
    }
}

const searchUserByQuery = (req, res) => {
    const {gender, age} = req.query;

    if(gender && age) {
        const results = data.filter((item) =>  item.gender===gender && Number(item.dob.age) >= Number(age))
        res.json(results); 
    }
    else if(gender) {
        const results = data.filter((item) => item.gender===gender)
        res.json(results);
    }
    else if(age) {
        const results = data.filter((item) => Number(item.dob.age) >= Number(age))
        res.json(results);
    }
    else {
        res.sendStatus(404);
    }
}

module.exports = {
    getAllUsers,
    getUsersByUuid,
    searchUserByQuery
}