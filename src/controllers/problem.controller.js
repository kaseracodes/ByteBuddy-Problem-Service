const { StatusCodes } = require('http-status-codes')
const NotImplemented = require('../errors/notImplemented.error')

function pingProblemController(req, res) {
    return res.json({message: "Problem controller is up and running"});
}

function addProblem(req, res, next) {
    try{
        // nothing implemented
        throw new NotImplemented('addProblem');
    }
    catch(error){
        next(error);
    }
}

function getProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented"
    });
}

function getProblems(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented"
    });
}

function deleteProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented"
    });
}

function updateProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented"
    });
}

module.exports = {
    pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem
};