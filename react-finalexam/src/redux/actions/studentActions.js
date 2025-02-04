export const FETCH_STUDENTS_REQUEST = 'FETCH_STUDENTS_REQUEST';
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENTS_FAILURE = 'FETCH_STUDENTS_FAILURE';

export const fetchStudents = () => async (dispatch) => {
  dispatch({ type: FETCH_STUDENTS_REQUEST });
  try {
    const response = await fetch('http://localhost:5000/students');
    const data = await response.json();
    dispatch({ type: FETCH_STUDENTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_STUDENTS_FAILURE, payload: error.message });
  }
};
