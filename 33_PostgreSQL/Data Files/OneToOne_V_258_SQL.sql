/* CREATE TABLE student(
 	id SERIAL PRIMARY KEY, 
	first_name TEXT, 
	last_name TEXT
 );

-- One to One --
 CREATE TABLE contact_detail(
 	tel TEXT,
	address TEXT
 );
 */

 /* INSERT INTO student(first_name, last_name)
 VALUES ('Angela','Yu');

 INSERT INTO contact_detail (id, tel, address)
 VALUES (1, '+123456789', '123 App Brewery Road'); */


 SELECT *
 FROM student 
 JOIN contact_detail
 ON student.id = contact_detail.id