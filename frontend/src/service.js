import axios from 'axios';

const api = 'localhost:8000/api';

const getClassroomList = async () => {
  const classrooms = await axios.get(`${api}/classroom/`);
  return classrooms.data;
};

const getReviewList = async (classroomName) => {
  const reviews = await axios.get(`${api}/review/${classroomName}/`);
  return reviews.data;
};

const createClassroom = async (name) => {
  const classroom = await axios.post(`${api}/classroom/`, { name });
  return classroom.data;
};

const createReview = async (title, description, rating, classroom) => {
  const review = await axios.post(`${api}/review/`,
    {
      title, description, rating, classroom,
    });
  return classroom.data;
};
