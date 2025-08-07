
const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');
const instructorMiddleware = require('../middleware/instructorMiddleware');

// Get all courses (public)
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find({ isPublished: true })
      .select('title description thumbnail level price averageRating instructor')
      .populate('instructor', 'name');

    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Get single course by ID (public)
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate('instructor', 'name email bio')
      .populate('ratings.user', 'name profilePicture');

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Create a new course (instructor only)
router.post('/', authMiddleware, instructorMiddleware, async (req, res) => {
  try {
    const {
      title,
      description,
      thumbnail,
      duration,
      level,
      price
    } = req.body;

    const course = await Course.create({
      title,
      description,
      instructor: req.user.id,
      thumbnail,
      duration,
      level,
      price
    });

    res.status(201).json({
      success: true,
      data: course
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Update course (instructor only)
router.put('/:id', authMiddleware, instructorMiddleware, async (req, res) => {
  try {
    let course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Make sure user is the course instructor
    if (course.instructor.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({ message: 'Not authorized to update this course' });
    }

    course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Enroll in a course
router.post('/:id/enroll', authMiddleware, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Check if user is already enrolled
    if (course.enrolledStudents.includes(req.user.id)) {
      return res.status(400).json({ message: 'Already enrolled in this course' });
    }

    // Add user to course enrolledStudents
    course.enrolledStudents.push(req.user.id);
    await course.save();

    // Add course to user enrolledCourses
    await User.findByIdAndUpdate(req.user.id, {
      $push: { enrolledCourses: course._id }
    });

    res.status(200).json({
      success: true,
      message: 'Successfully enrolled in the course',
      data: course
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Add a rating/review to course
router.post('/:id/ratings', authMiddleware, async (req, res) => {
  try {
    const { rating, review } = req.body;
    const course = await Course.findById(req.params.id);
    
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Check if user has already submitted a rating
    const alreadyRated = course.ratings.find(
      item => item.user.toString() === req.user.id
    );

    if (alreadyRated) {
      // Update existing rating
      course.ratings.forEach(item => {
        if (item.user.toString() === req.user.id) {
          item.rating = rating;
          item.review = review;
          item.date = Date.now();
        }
      });
    } else {
      // Add new rating
      course.ratings.push({
        user: req.user.id,
        rating,
        review
      });
    }

    // Calculate average rating
    course.averageRating = 
      course.ratings.reduce((sum, item) => sum + item.rating, 0) / 
      course.ratings.length;

    await course.save();

    res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
