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

function getProblem(req, res, next) {
    try{
        // nothing implemented
        throw new NotImplemented('addProblem');
    }
    catch(error){
        next(error);
    }
}

function getProblems(req, res, next) {
    try{
        // nothing implemented
        throw new NotImplemented('addProblem');
    }
    catch(error){
        next(error);
    }
}

function deleteProblem(req, res, next) {
    try{
        // nothing implemented
        throw new NotImplemented('addProblem');
    }
    catch(error){
        next(error);
    }
}

function updateProblem(req, res, next) {
    try{
        // nothing implemented
        throw new NotImplemented('addProblem');
    }
    catch(error){
        next(error);
    }
}

module.exports = {
    pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem
};