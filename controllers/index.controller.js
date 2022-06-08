

class IndexController {
    get(req,res) {
        res.render('index');
    }
}

module.exports = new IndexController;