import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [className, setClassName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = { name, rollNumber, class: className };
    dispatch(addStudent(student));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Roll Number"
        value={rollNumber}
        onChange={(e) => setRollNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Class"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;

