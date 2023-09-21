import courseData from "../../data/courses.json";
import styles from "./courseList.module.css";
import React, { useState } from "react";

function CourseList() {
  const [filter, setChange] = useState("");

  const course = courseData.filter((course) =>
    course.instructor.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={styles.box}>
      <h1>List of Courses</h1>
      <input value={filter} onChange={(e) => setChange(e.target.value)} />
      <ul className={styles.bullet1}>
        {course.map((course, index) => (
          <li key={index}>
            <strong>Course Name:</strong> {course.name} |{" "}
            <strong>Instructor:</strong> {course.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;

//maps over coursedata array and renders each course in UL
