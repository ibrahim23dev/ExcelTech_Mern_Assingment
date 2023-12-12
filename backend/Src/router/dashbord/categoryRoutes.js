const express = require('express');
const router = express.Router();
const CategoryModel = require('../../models/categoryModel');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
cloudinary.config({
                        cloud_name: 'drfkvgxlg', 
                        api_key: '776559195693218', 
                        api_secret: 'c3xbX63R3WrPACcjhneUJWxkSZg',
                        secure: true
});

// Configure multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route to handle category creation
router.post('/category-add', upload.single('image'), async (req, res) => {
  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.buffer.toString('base64'));

    // Create a new category with image URL from Cloudinary
    const newCategory = new CategoryModel({
      name: req.body.name,
      image: result.secure_url,
      slug: req.body.slug,
    });

    // Save the category to the database
    const savedCategory = await newCategory.save();

    res.status(201).json(savedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Add other category-related routes as needed (update, delete, get, etc.)

module.exports = router;
