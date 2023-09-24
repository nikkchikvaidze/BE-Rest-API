
getAllTours = (req,res) =>{
    res.status(200).json({
        status: 'success',
        message: 'it works'
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