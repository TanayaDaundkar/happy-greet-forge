
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Auth service
export const authService = {
  register: async (userData: { name: string; email: string; password: string }) => {
    const response = await api.post('/users/register', userData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  },
  
  login: async (userData: { email: string; password: string }) => {
    const response = await api.post('/users/login', userData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  },
  
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
  
  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    return null;
  },
  
  getProfile: async () => {
    const response = await api.get('/users/profile');
    return response.data;
  },
  
  updateProfile: async (userData: any) => {
    const response = await api.put('/users/profile', userData);
    return response.data;
  }
};

// Course service
export const courseService = {
  getAllCourses: async () => {
    const response = await api.get('/courses');
    return response.data;
  },
  
  getCourseById: async (id: string) => {
    const response = await api.get(`/courses/${id}`);
    return response.data;
  },
  
  createCourse: async (courseData: any) => {
    const response = await api.post('/courses', courseData);
    return response.data;
  },
  
  updateCourse: async (id: string, courseData: any) => {
    const response = await api.put(`/courses/${id}`, courseData);
    return response.data;
  },
  
  enrollCourse: async (id: string) => {
    const response = await api.post(`/courses/${id}/enroll`);
    return response.data;
  },
  
  rateCourse: async (id: string, ratingData: { rating: number; review: string }) => {
    const response = await api.post(`/courses/${id}/ratings`, ratingData);
    return response.data;
  }
};

// Contact service
export const contactService = {
  submitContactForm: async (contactData: { name: string; email: string; subject: string; message: string }) => {
    const response = await api.post('/contact', contactData);
    return response.data;
  },
  
  getAllContactMessages: async () => {
    const response = await api.get('/contact');
    return response.data;
  },
  
  updateContactStatus: async (id: string, status: string) => {
    const response = await api.put(`/contact/${id}`, { status });
    return response.data;
  }
};

export default api;
