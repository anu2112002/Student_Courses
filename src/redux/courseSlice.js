import { createSlice } from '@reduxjs/toolkit';

// Initial state for the courses slice
const initialState = {
  courses: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    // Action to set courses when data is fetched successfully
    setCourses(state, action) {
      state.courses = action.payload;
      state.status = 'succeeded';
    },
    // Action to set loading state when fetching starts
    fetchCoursesLoading(state) {
      state.status = 'loading';
    },
    // Action to set error state if fetching fails
    fetchCoursesFailed(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
    // Action to update a course's status (e.g., mark as completed)
    updateCourse(state, action) {
      const { id, changes } = action.payload;
      const existingCourse = state.courses.find(course => course.id === id);
      if (existingCourse) {
        Object.assign(existingCourse, changes);
      }
    },
  },
});

// Export actions to be dispatched in components
export const {
  setCourses,
  fetchCoursesLoading,
  fetchCoursesFailed,
  updateCourse,
} = courseSlice.actions;

// Selector to get all courses from the state
export const selectAllCourses = (state) => state.courses.courses;

// Selector to get the status of the course fetch operation
export const selectCourseStatus = (state) => state.courses.status;

// Selector to get the error state
export const selectCourseError = (state) => state.courses.error;

// Thunk to fetch courses (simulating an API call)
export const fetchCourses = () => async (dispatch) => {
  dispatch(fetchCoursesLoading());
  try {
    // Replace this with your actual API call
    const response = await fetch('https://api.example.com/courses');
    const data = await response.json();
    dispatch(setCourses(data));
  } catch (err) {
    dispatch(fetchCoursesFailed(err.toString()));
  }
};

// Export the reducer to be included in the store
export default courseSlice.reducer;
