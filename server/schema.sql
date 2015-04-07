CREATE DATABASE scores;

USE scores;

CREATE TABLE scores (

RestName VARCHAR(50),
ZipCode INT(5),
InspDate DATE,
Score INT(3),
Address VARCHAR(100),
Lat DECIMAL(11,9),
Longi DECIMAL(12,9),
FacID INT(10),
ProcDesc VARCHAR(50)

);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

