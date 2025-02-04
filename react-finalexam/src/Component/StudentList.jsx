import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../redux/actions/studentActions';
import StudentDetails from './StudentDetails';

const StudentList = () => {
  const dispatch = useDispatch();
  const { students, loading, error } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {students.map((student) => (
        <StudentDetails key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentList;

