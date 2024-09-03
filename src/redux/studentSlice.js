import { createSlice } from '@reduxjs/toolkit';

// Initial state for the students slice
const initialState = {
  enrolledCourses: [], // Array of courses the student is enrolled in
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    // Action to set enrolled courses when data is fetched successfully
    setEnrolledCourses(state, action) {
      state.enrolledCourses = action.payload;
      state.status = 'succeeded';
    },
    // Action to set loading state when fetching starts
    fetchEnrolledCoursesLoading(state) {
      state.status = 'loading';
    },
    // Action to set error state if fetching fails
    fetchEnrolledCoursesFailed(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
    // Action to mark a course as completed
    markCourseAsCompleted(state, action) {
      const { id } = action.payload;
      const course = state.enrolledCourses.find(course => course.id === id);
      if (course) {
        course.completed = true;
      }
    },
  },
});

// Export actions to be dispatched in components
export const {
  setEnrolledCourses,
  fetchEnrolledCoursesLoading,
  fetchEnrolledCoursesFailed,
  markCourseAsCompleted,
} = studentSlice.actions;

// Selector to get all enrolled courses from the state
export const selectEnrolledCourses = (state) => state.students.enrolledCourses;

// Selector to get the status of the enrolled courses fetch operation
export const selectStudentStatus = (state) => state.students.status;

// Selector to get the error state
export const selectStudentError = (state) => state.students.error;

// Thunk to fetch enrolled courses (simulating an API call)
export const fetchEnrolledCourses = () => async (dispatch) => {
  dispatch(fetchEnrolledCoursesLoading());
  try {
    // Replace this with your actual API call
    const response = await fetch('https://api.example.com/enrolled-courses');
    const data = await response.json();
    dispatch(setEnrolledCourses(data));
  } catch (err) {
    dispatch(fetchEnrolledCoursesFailed(err.toString()));
  }
};

// Export the reducer to be included in the store
export default studentSlice.reducer;
