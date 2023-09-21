import React from "react";
import studentsData from "../../data/students.json";
import styles from "./studentList.module.css";

function StudentList() {
  return (
    <div className={styles.container}>
      <h1>List of Students</h1>
      <ul className={styles.bullet}>
        {studentsData.map((student, index) => (
          <li key={index}>
            <strong>Name:</strong> {student.name}, <strong>Age:</strong>
            {student.age}, <strong>Courses:</strong>
            {student.courses}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
