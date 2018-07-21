-- ===================================================================
-- Fills the database with initial entries upon starting the application
-- ===================================================================


INSERT INTO User (id, username, passwordHash) VALUES 
  (0, 'dario', '2dbe33913ae5d6b16a801119f5fa1c419620c26d1a456e01490d697eb9b12589');

INSERT INTO Athlete (id, competitionId, lastName, firstName, gender, dateOfBirth, club, country, bib, ageCategories) VALUES
  (0, 0, 'Sindicic', 'Dario', 'MALE', '1995-10-05', 'Ak Maksimir', 'hr', '257', 'A35');
  
INSERT INTO Athlete (id, competitionId,lastName, firstName, gender, dateOfBirth, club, country, bib, ageCategories) VALUES
  (1, 0, 'Kosic', 'Kreso', 'MALE', '1978-10-05', 'Ak Maksimir', 'si' , '256', 'A35');
 
INSERT INTO Athlete (id, competitionId, lastName, firstName, gender, dateOfBirth, club, country, bib, ageCategories) VALUES
  (2, 0, 'Marko', 'Masic', 'MALE', '1986-10-05', 'Ak Maksimir', 'hr', '255', 'A35');
  
INSERT INTO Competition (id, name, competitionType, authorId) VALUES
  (0, 'Drzavno', 'OUTDOOR', 0);
  
 INSERT INTO Result (id, athleteId, competitionId, result, resultRepresentation, points, discipline, typeOfMeasurment) VALUES
  (0, 0, 0, 6.81, '6.81', 781,'LONG_JUMP','NORMAL');
  
 INSERT INTO Result (id, athleteId, competitionId, result, resultRepresentation, points, discipline, typeOfMeasurment) VALUES
  (1, 0, 0, 19.81, '19.81', 231,'RUN_200M','NORMAL');
 
 INSERT INTO Result (id, athleteId, competitionId, result, resultRepresentation, points, discipline, typeOfMeasurment) VALUES
  (2, 1, 0, 6.21, '6.21', 481,'LONG_JUMP','NORMAL');
  
 INSERT INTO Result (id, athleteId, competitionId, result, resultRepresentation, points, discipline, typeOfMeasurment) VALUES
  (3, 1, 0, 21.81, '21.81', 181,'RUN_200M','NORMAL');
  
 INSERT INTO Result (id, athleteId, competitionId, result, resultRepresentation, points, discipline, typeOfMeasurment) VALUES
  (4, 2, 0, 7.41 , '7.41', 1081,'LONG_JUMP','NORMAL');