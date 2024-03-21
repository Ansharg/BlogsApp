const User = require('../models/User');
const Blog = require('../models/Blog');

module.exports.approveBlog = async (req,res) => {
    try {
        const {id} = req.params
        const blog = await Blog.findById(id)
        if(!blog){
            res.status(400).json({message: "Blog not found"})
        }
        await Blog.findByIdAndUpdate(id, {isVerify: true});
        res.status(200).json({message: "Blog approved"})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.declineBlog = async (req,res) => {
    try {
        const {id} = req.params;
        const blog = await Blog.findById(id);
        if (!blog) {
            res.status(400).json({message: "Blog not found"});
        }
        await Blog.findByIdAndUpdate(id, {isVerify: false});
        res.status(200).json({message: "Blog disapproved"})
    } catch (error) {
        
    }
}

