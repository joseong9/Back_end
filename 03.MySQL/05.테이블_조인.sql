/*
 * Table join
 */
# song table
CREATE TABLE song ( 
	sid INT PRIMARY KEY AUTO_INCREMENT, 
	title VARCHAR(32) NOT NULL, 
	lyrics VARCHAR(32) 
) AUTO_INCREMENT=101;
# girl_group table
CREATE TABLE girl_group ( 
	gid INT PRIMARY KEY AUTO_INCREMENT, 
	name VARCHAR(32) NOT NULL, 
	debut DATE NOT NULL, 
	hit_song_id INT 
) AUTO_INCREMENT=1001;

INSERT INTO song (title, lyrics) 
	VALUES ('Tell Me', 'tell me tell me tetetete tel me'),
	('Gee', 'GEE GEE GEE GEE GEE BABY BABY'),
	('미스터', '이름이 뭐야 미스터'), 
	('Abracadabra', '이러다 미쳐 내가 여리여리'),
	('8282', 'Give me a call Baby baby'), ('기대해', '기대해'),
	('I Don\'t care', '다른 여자들의 다리를'), 
	('Bad Girl Good Girl', '앞에선 한 마디 말도'), ('피노키오', '뉴예삐오'),
	('별빛달빛', '너는 내 별빛 내 마음의 별빛'), 
	('A', 'A 워오우 워오우워 우우우'),
	('나혼자', '나 혼자 밥을 먹고 나 혼자 영화 보고'), ('LUV', '설레이나요 '),
	('짧은치마', '짧은 치마를 입고 내가 길을 걸으면'),
	('위아래', '위 아래 위위 아래'), ('Dumb Dumb', '너 땜에 하루종일');

INSERT INTO girl_group (name, debut, hit_song_id) 
	VALUES ('원더걸스', '2007-02-10', 101),
	('소녀시대', '2007-08-02', 102), ('카라', '2009-07-30', 103),
	('브라운아이드걸스', '2008-01-17', 104), ('다비치', '2009-02-27', 105),
	('2NE1', '2009-07-08', 106), ('f(x)', '2011-04-20', 108),
	('시크릿', '2011-01-06', 109), ('레인보우', '2010-08-12', 110),
	('애프터 스쿨', '2009-11-25', 120), ('포미닛', '2009-08-28', 121);

# Inner Join
SELECT girl_group.name, girl_group.debut, song.title, song.lyrics
	FROM song
	JOIN girl_group
	ON song.sid=girl_group.hit_song_id;
SELECT g.name, g.debut, s.title, s.lyrics
	FROM song AS s
	JOIN girl_group AS g
	ON s.sid=g.hit_song_id;
# Left Outer Join
SELECT s.sid, g.name, g.debut, s.title, s.lyrics
	FROM song AS s				        # Left
	LEFT OUTER JOIN girl_group AS g		# Right
	ON s.sid=g.hit_song_id;
# Right Outer Join
SELECT s.sid, g.name, g.debut, s.title, s.lyrics
	FROM song AS s						# Left
	RIGHT OUTER JOIN girl_group AS g	# Right
	ON s.sid=g.hit_song_id;
# Full Outer Join
SELECT s.sid, g.name, g.debut, s.title, s.lyrics
	FROM song AS s				        # Left
	LEFT OUTER JOIN girl_group AS g		# Right
	ON s.sid=g.hit_song_id
UNION
SELECT s.sid, g.name, g.debut, s.title, s.lyrics
	FROM song AS s						# Left
	RIGHT OUTER JOIN girl_group AS g	# Right
	ON s.sid=g.hit_song_id;

# 데뷔 일자가 빠른 5개 걸그룹의 힛트송은? (그룹명, 곡명, 데뷔일자))
SELECT g.name, s.title, g.debut
	FROM song AS s
	JOIN girl_group AS g
	ON s.sid=g.hit_song_id
	ORDER BY g.debut
	LIMIT 5;
# 2007년도에 데뷔한 걸그룹은?
SELECT NAME, debut FROM girl_group
	WHERE debut BETWEEN DATE('2007-01-01') AND DATE('2007-12-31');
# 2009년도에 데뷔한 걸그룹의 히트송은? 
#	(걸그룹 이름, 데뷔일, 히트송)
SELECT g.name, g.debut, s.title
	FROM girl_group AS g
	JOIN song AS s
	ON s.sid=g.hit_song_id
	WHERE g.debut BETWEEN DATE('2009-01-01') AND DATE('2009-12-31')
    ORDER BY g.debut;