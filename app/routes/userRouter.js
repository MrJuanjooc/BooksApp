const userController = require('../controllers/userController');

module.exports = router => {
    router
    .route('/user')
    .get(userController.getUser)
    .post(userController.createUser);
};