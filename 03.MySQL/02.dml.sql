/* 데이터 조작언어 */
/* 2. 수정(UPDATE)
UPDATE 테이블명
	SET 필드명=값[, 필드명=값, 필드명=값, ...]
	WHERE 조건;
*/
# Kwangju를 Gwangju로 수정
UPDATE city
	SET NAME='Gwangju', district='Gwangju'
	WHERE id=2336;
# 전라남도 도시의 인구를 20만으로 변경
UPDATE city
	SET population=200000
	WHERE district='Chollanam';
# 전라남도 도시의 인구를 5만명 증가시킴
UPDATE city, (SELECT * FROM city WHERE district='Chollanam') b
	SET city.Population=b.Population+50000
	WHERE city.id=b.id;

/* 3. 생성(INSERT) 
INSERT INTO city
	(필드명)
	VALUES (필드값);
*/
INSERT INTO city
	(NAME, countrycode, district, population)
	VALUES ('Haenam', 'KOR', 'Chollanam', 100000);
INSERT INTO city
	VALUES (DEFAULT, 'Jangsung', 'KOR', 'Chollanam', 100000);
# 기존 테이블의 데이터로 데이터를 추가하는 방법
create table citycopy like city;
show tables;
select * from citycopy;
insert into citycopy select * from city;
select * from citycopy;

/* 4. 삭제(DELETE) 
DELETE FROM 테이블명
	WHERE 조건
*/
DELETE FROM citycopy
	WHERE countrycode='AFG';
DELETE FROM citycopy
	WHERE population>9000000;

    # 연습문제 3
# 대륙별로 국가숫자, GNP의 합, 평균 국가별 GNP는?
SELECT continent, COUNT(*), ROUND(SUM(GNP)), ROUND(AVG(GNP)) FROM country
	GROUP BY continent;

# 연습문제 4
# 아시아 대륙에서 인구가 가장 많은 도시 10개를 내림차순으로 보여줄 것
#	(대륙명, 국가명, 도시명, 인구수)
SELECT country.Continent, country.Name, city.Name, city.Population FROM country
	INNER JOIN city ON country.Code=city.CountryCode
	WHERE country.Continent='Asia'
	ORDER BY city.Population DESC 
	LIMIT 10;

# 연습문제 5
# 전 세계에서 인구가 가장 많은 10개 도시에서 사용하는 공식언어는?
#	(도시명, 인구수, 언어명)
SELECT c.Name, c.Population, l.`Language` FROM city AS c
	JOIN countrylanguage AS l ON c.CountryCode=l.CountryCode
	WHERE l.IsOfficial=TRUE 
	ORDER BY c.Population DESC 
	LIMIT 10;