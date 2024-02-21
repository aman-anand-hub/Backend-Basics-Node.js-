const { data } = require("../currency.json");

const getTitle = (req, res) => {
    res.send("<h1>Currency Database</h1>");
};

const getCurrencies = (req, res) => {
    const { min_value } = req.query;
    if(min_value) {
        const results = data.filter((item) => Number(item.min_value) === Number(min_value));
        res.json(data);
    }
    else {
        res.json(data);
    }
};

const getCurrencyBySymbol = (req, res) => {
    const { symbol } = req.params;
    const results = data.find((elem) => elem.id.toLowerCase() === symbol.toLowerCase());
    if(results) {
        res.json(results);
    } else {
        res.status(404).json("Invalid Symbol");
    }
};

module.exports = { getTitle, getCurrencies, getCurrencyBySymbol };