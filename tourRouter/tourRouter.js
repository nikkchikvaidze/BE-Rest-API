const express = require('express');
const {getAllTours} = require('./../tourController/tourController');

const router = express.Router();

router.route('/').get(getAllTours);
// router.route('/').get(getAllTours).post(createTour);
// router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;