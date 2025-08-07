
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Course title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Course description is required']
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Course must have an instructor']
  },
  thumbnail: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    required: [true, 'Course duration is required']
  },
  level: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    required: [true, 'Course level is required']
  },
  price: {
    type: Number,
    required: [true, 'Course price is required']
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  enrolledStudents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  sections: [{
    title: {
      type: String,
      required: true
    },
    lessons: [{
      title: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      duration: {
        type: Number,
        required: true
      },
      isVideo: {
        type: Boolean,
        default: false
      },
      videoUrl: String,
      quizzes: [{
        question: String,
        options: [String],
        correctAnswer: Number
      }]
    }]
  }],
  ratings: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    review: String,
    date: {
      type: Date,
      default: Date.now
    }
  }],
  averageRating: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual field for calculating total lessons
courseSchema.virtual('totalLessons').get(function() {
  return this.sections.reduce((total, section) => total + section.lessons.length, 0);
});

// Calculate average rating when ratings are modified
courseSchema.pre('save', function(next) {
  if (this.ratings.length > 0) {
    this.averageRating = this.ratings.reduce((sum, item) => sum + item.rating, 0) / this.ratings.length;
  }
  next();
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
