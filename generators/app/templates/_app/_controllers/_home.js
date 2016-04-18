module.exports = function(){

	var controller = {};

    controller.index = function(req, res){
        res.render('home');
    };

    return controller;
}