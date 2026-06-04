/* CREATE TABLE class(
	id SERIAL PRIMARY KEY,
	title VARCHAR(45)
);

CREATE TABLE enrolment(
	student_id INTEGER REFERENCES student(id),
	class_id INTEGER REFERENCES class(id),
	PRIMARY KEY(student_id, class_id)
);*/

INSERT INTO student(first_name, last_name)
VALUES ('Jack','Bauer');

INSERT INTO class(title)
VALUES ('English Literature'),('Maths'),('Physics');

INSERT INTO enrolment (student_i)