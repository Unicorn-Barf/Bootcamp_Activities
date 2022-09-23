import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  UPDATE_STUDENT,
  ADD_MAJOR,
  REMOVE_MAJOR,
} from './actions';

// TODO: Add a comment explaining what a reducer is
// Your comment here
// A reducer is a function that updates state immutably through actions
// Takes two params
// 1st current state
// second is an action object 
export default function reducer(state, action) {
  switch (action.type) {
    case ADD_STUDENT: {
      const newStudentId = state.students[state.students.length - 1].id + 1;

      const newStudent = { ...action.payload, id: newStudentId };

      return {
        ...state,
        students: [...state.students, newStudent],
      };
    }
    case REMOVE_STUDENT: {
      return {
        ...state,
        students: [...state.students].filter(
          (student) => student.id !== action.payload
        ),
      };
    }
    case UPDATE_STUDENT: {
      // TODO: Add a comment describing how we get the student index
      // Your comment here
    // Uses findIndex array method on the student array and returns the index
    // of the first element that the callback returns true, or -1 if nothing returns true
      const studentIndex = state.students.findIndex(
        (student) => student.id === action.payload.id
      );

      // TODO: Add a comment describing what the spread operator is doing
      // Your code here
      // Spreading the original state of this particular student found with studentIndex
      // We update the necessary values using the spread action payload
      const updatedStudent = {
        ...state.students[studentIndex],
        ...action.payload,
      };

      const newStudentsList = [...state.students];

      newStudentsList[studentIndex] = updatedStudent;

      return {
        ...state,
        students: newStudentsList,
      };
    }
    case ADD_MAJOR: {
      // TODO: Add a comment explaining what this case is returning
      // Returning a new copy of the state with an added major from the payload
      return {
        ...state,
        majors: [...state.majors, action.payload],
      };
    }
    case REMOVE_MAJOR: {
      // TODO: Add a comment explaining what this case is returning
      // Returning a new copy of the state with the major from the payload removed from the array
      return {
        ...state,
        majors: state.majors.filter((major) => major !== action.payload),
      };
    }
    default:
      return state;
  }
}
