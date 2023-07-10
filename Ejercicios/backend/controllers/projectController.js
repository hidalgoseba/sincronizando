const controller = {

    home: function(req, res) {
        return res.send({ message: 'desde la home'});
    },
    test: function(req, res) {
        return res.send({ message: 'desde el test'});
    }
};
module.exports = controller;
