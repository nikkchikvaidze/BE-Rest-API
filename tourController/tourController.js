const Tour = require('./../tourModel/tourModel');


getAllTours = async (req,res) =>{
    const tours = await Tour.find();
    res.status(200).json({
        status: 'success',
        data: {tours}
    })
}
createTour = (req,res) =>{
}
getTour = (req,res) =>{}
updateTour = (req,res) =>{}
deleteTour = (req,res) =>{}


module.exports = {
    getAllTours,
    createTour,
    getTour,
    updateTour,
    deleteTour
}