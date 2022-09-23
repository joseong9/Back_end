/*
 * 데이터 정의어(DDL: Data Definition Language)
 */

/* 1. 테이블 생성
CREATE TABLE 테이블명 (
	필드명 데이터타입 [NOT NULL] [KEY] [DEFAULT 값] [Extra],
	필드명 데이터타입 [NOT NULL] [KEY] [DEFAULT 값] [Extra],
	...
) [Extra];
*/
# 타이거즈 야구단
CREATE TABLE [if not exists] tigers (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	player VARCHAR(10) NOT NULL,
	backNo INT,
	POSITION VARCHAR(10)
);
INSERT INTO tigers
	VALUES (DEFAULT, '양현종', 54, '투수');
INSERT INTO tigers (player, backNo, POSITION)
	VALUES ('이의리', 48, '투수');
INSERT INTO tigers (player, backNo, POSITION)
	VALUES ('박동원', 10, '포수'),('김선빈', 3, '내야수'),
			('박찬호', 1, '내야수'),('나성범', 47, '외야수'),
			('소크라테스', 30, '외야수');
SELECT * FROM tigers;

/* 2. 테이블 조회 */
SHOW TABLES;
DESC tigers;

/* 3. 테이블 제거 
DROP TABLE 테이블명;
*/
# 테이블의 모든 데이터 삭제
TRUNCATE TABLE citycopy;
# 테이블 삭제
DROP TABLE citycopy;

/* 4. 테이블명 변경
RENAME TABLE 기존_테이블명 TO 변경할_테이블명;
*/

/* 5. 테이블 구조 변경
ALTER TABLE 테이블명
    ADD 필드명 데이터타입 [NOT NULL] [KEY] [DEFAULT 값] [Extra]
    CHANGE 기존_필드명 새_필드명 자료형
*/
ALTER TABLE tigers
	ADD isDeleted INT DEFAULT 0;

/* 6. View */
CREATE VIEW largeCity 
	as SELECT * FROM city 
		WHERE population>=7000000 WITH CHECK OPTION;
UPDATE largecity SET countrycode='GBR' WHERE id=206;
SELECT * FROM city WHERE id=206;
# 아래의 SQL문은 with check option 위배로 에러 발생
UPDATE largecity SET population=5000000 WHERE id=206;