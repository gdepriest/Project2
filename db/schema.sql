DROP DATABASE IF EXISTS surveydb;
CREATE DATABASE surveydb;
USE surveydb;

CREATE TABLE survey
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	county varchar(100),
    income integer,
    menstruation_m integer,
    menstruation_y integer,
    pregnancy_m integer,
    pregnancy_y integer,
    cosmetics_m integer,
    cosmetics_y integer,
    garments_m integer,
    garments_y integer,
    feedback varchar(250),
	PRIMARY KEY (id)
);

