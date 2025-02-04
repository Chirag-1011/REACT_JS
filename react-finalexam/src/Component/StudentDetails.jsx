const handleDelete = () => {
  fetch(`http://localhost:3000/students${match.params.id}`, {
    method: 'DELETE',
  })
    .then(() => {
      dispatch(deleteStudent(match.params.id));
    });
};
