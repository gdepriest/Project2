DROP DATABASE IF EXISTS surveydb;
CREATE DATABASE surveydb;
USE surveydb;

CREATE TABLE survey
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	county varchar(100),
    income integer,
    menstruation-m integer,
    menstruation-y integer,
    pregnancy-m integer,
    pregnancy-y integer,
    cosmetics-m integer,
    cosmetics-y integer,
    garments-m integer,
    garments-y integer,
    feedback varchar(250),
	PRIMARY KEY (id)
);

