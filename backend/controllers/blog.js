const Blog = require('../models/Blog');
const {SendEmail} = require('../utils/nodemailer')
const {otp} = require('../utils/otpgenerator')

module.exports.getAllBlogs = async (req,res) => {
    try {
        let blogs = await Blog.find({is_Verify: true});
        res.status(200).json({blogs});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.getBlogFromTitle = async (req, res) => {
    try {
        const {title} = req.body;
        let blog = await Blog.find({is_Verify: true, title: title});
        res.status(200).json({blog});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.getBlogFromAuthor = async (req,res) => {
    try {
        const {author} = req.body;
        let blog = await Blog.find({is_Verify: true, author: author});
        res.status(200).json({blog});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.getBlogFromCategory = async (req,res) => {
    try {
        const {category} = req.body;
        let blog = await Blog.find({is_Verify: true, category: category});
        res.status(200).json({blog});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.createBlog = async (req,res) => {
    try {
        const {title, category, content} = req.body;

        if(!title){
            return res.status(404).json({message: "Please enter a title"});
        }

        if (!category){
            return res.status(404).json({message: "Please choose a category"});
        }

        if (!content) {
            return res.status(404).json({message: "Please provide content"})
        }

        if (!req.session.user.username) {
            return res.status(404).json({message: "Login first to proceed"})
        }

        const blog = await Blog.create({
            author: req.session.user.username,
            title: title,
            category: category,
            content: content,
            user_id: req.session.user._id,
        });
        SendEmail(req.session.user.email, `Thanks for Submitting Your Blog! ${blog.title} Review Process`)
        res.status(200).json({message: "Blog submitted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.getBlog = async (req,res) => {
    try {
        const {id} = req.params;
        const blog = await Blog.findById(id);
        if(blog){
            res.status(200).json({data: blog});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.deleteBlog = async (req,res) => {
    try {
        const {id} = req.params;
        const blog = await Blog.findByIdAndDelete(id);
        if (!blog) {
            res.status(400).json({message: "Blog not found"})
        }
        res.status(200).json({message: "Blog deleted successfully"})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// module.exports.updateBlog = async (req,res) => {
//     try {
//         const {id} = req.params;
//         const blog = await Blog.findById(id);
//         if (!blog) {
//             res.status(400).json({message: "Blog not found"})
//         }

//     } catch (error) {
        
//     }
// }