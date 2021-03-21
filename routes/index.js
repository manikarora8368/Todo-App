//requiring the express file
const express = require('express');
const app = express();
const router = express.Router();
app.use(express.urlencoded());

// adding the route for home controller
const homeController = require('../controllers/home_controllers');
router.get('/', homeController.home);

// adding the route to add the task
const addWork = require('../controllers/add_work');
router.post('/add_work', addWork.work);

// adding the route to delete a task
router.get('/delete_work/:id',addWork.deleteWork);

module.exports = router;