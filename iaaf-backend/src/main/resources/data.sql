-- ===================================================================
-- Fills the database with initial entries upon starting the application
-- ===================================================================


INSERT INTO Athlete (id, competitionId, lastName, firstName, gender, dateOfBirth, club, country, bib) VALUES
  (0, 0, 'Sindicic', 'Dario', 'MALE', '1995-10-05', 'Ak Maksimir', 'Hrvatska', '257');
  
INSERT INTO Athlete (id, competitionId,lastName, firstName, gender, dateOfBirth, club, country, bib) VALUES
  (1, 0, 'Kosic', 'Kreso', 'MALE', '1978-10-05', 'Ak Maksimir', 'Hrvatska' , '256');
 
INSERT INTO Athlete (id, competitionId, lastName, firstName, gender, dateOfBirth, club, country, bib) VALUES
  (2, 0, 'Marko', 'Masic', 'MALE', '1986-10-05', 'Ak Maksimir', 'Hrvatska', '255');
  
INSERT INTO Competition (id, name, competitionType) VALUES
  (2, 'Drzavno', 'OUTDOOR');
  
 INSERT INTO Result (id, athleteId, competitionId, result, points, discipline, typeOfMeasurment) VALUES
  (0, 0, 0, 6.81, 781,'LONG_JUMP','NORMAL');
  
 INSERT INTO Result (id, athleteId, competitionId, result, points, discipline, typeOfMeasurment) VALUES
  (1, 0, 0, 19.81, 231,'RUN_200M','NORMAL');
 
 INSERT INTO Result (id, athleteId, competitionId, result, points, discipline, typeOfMeasurment) VALUES
  (2, 1, 0, 6.21, 481,'LONG_JUMP','NORMAL');
  
 INSERT INTO Result (id, athleteId, competitionId, result, points, discipline, typeOfMeasurment) VALUES
  (3, 1, 0, 21.81, 181,'RUN_200M','NORMAL');
  
 INSERT INTO Result (id, athleteId, competitionId, result, points, discipline, typeOfMeasurment) VALUES
  (4, 2, 0, 7.41, 1081,'LONG_JUMP','NORMAL');