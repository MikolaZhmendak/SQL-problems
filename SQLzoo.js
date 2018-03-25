1. Select basics

Q1.
SELECT population FROM world
  WHERE name = 'Germany'

Q2.
SELECT name, population FROM world
  WHERE name IN ('Sweden', 'Norway', 'Denmark');

Q3.
SELECT name, area FROM world
  WHERE area BETWEEN 200000 AND 250000
----------------------------------------------------------------------------------------------------------------------


2. Select from world


Q1.
SELECT name, continent, population FROM world

Q2.
SELECT name FROM world
WHERE population >=200000000
Q3.
Select name, GDP/population
From world
Where population >=200000000
Q4.
Select name, population/1000000
From world
Where continent = 'South America'

Q5. 
Select name,population
From world
Where name in ('France', 'Germany', 'Italy')

Q6.
Select name
From world
Where name Like '%United%'
Q7.
Select name, population, area
From world
Where population >=250000000 or area>3000000

Q8.
Select name, population, area
From world
Where population >=250000000 XOR area >3000000

Q9.
Select name,
Round (population/1000000,2), Round (gdp/1000000000,2)
From world
Where continent = 'South America'

Q10.
Select name,
Round (gdp/population,-3)
From world
Where gdp >=1000000000000

Q11.
SELECT name, capital
  FROM world
 WHERE LENGTH (name) = LENGTH(capital)

Q12.
SELECT name, capital
FROM world
Where Left(name,1) = Left(capital,1) and name<>capital

Q13.
SELECT name 
From world 
WHERE name  LIKE '%a%' AND 
name   LIKE '%e%' AND 
name   LIKE '%i%' AND 
name   LIKE '%o%' AND 
name   LIKE '%u%' AND 
name NOT LIKE '% %'
--------------------------------------------------------------------------------------------------------------


Select from Nobel

Q1.
SELECT yr, subject, winner
  FROM nobel
 WHERE yr = 1950

Q2.
SELECT winner
  FROM nobel
 WHERE yr = 1962
   AND subject = 'Literature'
 Q3.
 Select yr, subject
From nobel
Where winner = 'Albert Einstein'

Q4.
Select winner
From nobel
Where subject = 'Peace' and yr >= 2000

Q5.
Select yr, subject, winner
From nobel
Where subject = 'Literature' and yr BETWEEN 1980 and 1989


Q6.
SELECT * From nobel
 WHERE winner In ('Theodore Roosevelt', 'Woodrow Wilson', 'Jimmy Carter', 'Barack Obama')

 Q7.
 Select winner
From nobel
Where winner Like 'John%'

Q8.
Select yr, subject, winner
From nobel
Where (yr = 1980 and subject ='Physics') Or ( yr = 1984 and subject = 'Chemistry')


Q9.
Select yr, subject, winner
From nobel
Where yr = 1980  
And subject Not In ('Chemistry', 'Medicine')


Q10.
Select yr, subject, winner
From nobel
Where (yr<1910 and subject = 'Medicine') Or ( yr>= 2004 and subject = 'Literature')

Q11.
Select yr, subject, winner
FROM nobel
WHERE winner LIKE 'peter gr%nberg'


Q12.
Select  yr, subject, winner
From nobel
Where winner Like 'eugene o''neill'

Q13.
Select winner, yr, subject
From nobel
Where winner Like 'Sir%'
Order By yr DESC

---------------------------------------------------------------------------------------------------------------------

Exerssice set 4

Q1.
SELECT SUM(population)
FROM world
Q2.
Select DISTINCT continent
From world
Q3.
Select Sum(gdp)
From world
Where continent = 'Africa'
Q4.
Select Count (name)
From world
Where area >1000000
Q5.
Select Sum(population)
From world
Where name In ('Estonia', 'Latvia', 'Lithuania')
Q6.
Select continent, Count(name)
From world
Group by continent
Q7.
Select continent, Count(name)
From world
Where population>10000000
Group by continent

Q8.
Select continent
From world
Group by continent
Having Sum(population)>100000000

---------------------------------------------------------------------------------------------------------------------

Exersice set 5. Join

Q1.
SELECT matchid, player
From goal
Where teamid = 'GER'
Q2.
SELECT id,stadium,team1,team2
  FROM game
Where id = 1012
Q3.
SELECT player, teamid, stadium, mdate
  FROM game JOIN goal ON (id=matchid)
Where teamid = 'GER'

Q4.
Select team1, team2, player
From game Join goal ON (id=matchid)
Where player Like 'Mario%'

Q5.
SELECT player, teamid, coach, gtime
  FROM goal Join eteam On (teamid=id)
 WHERE gtime<=10
 Q6.
 Select mdate, teamname
From game Join eteam ON (team1=eteam.id)
Where coach = 'Fernando Santos'
Q7.
Select player
From goal Join game On (matchid = id)
Where stadium = 'National Stadium, Warsaw'
Q8.

Q9.
SELECT teamname, Count (player)
  FROM eteam JOIN goal ON id=teamid
 Group By teamname
 Q10.
 Select stadium, Count(player)
From game Join goal On id=matchid
Group by stadium

---------------------------------------------------------------------------------------------------------------------

Exercise set 6. More Join

Q1.
SELECT id, title
 FROM movie
 WHERE yr=1962
 Q2.
 Select yr
From movie
Where title = 'Citizen Kane'
Q3.
Select id, title, yr
From movie
Where title like '%star trek%'
Order by yr

Q4.
Select id
From actor
Where name = 'Glenn Close'
Q5.
Select id
From movie
Where title = 'Casablanca'

Q6.
SELECT name FROM casting JOIN actor
          ON casting.actorid=actor.id
Where movieid = 11768
Q7
Select name
From actor Join casting ON
id = actorid and movieid = (Select id From movie Where title = 'Alien')
Q8.
Select title
From movie Join casting ON (id=movieid And actorid = (Select id From actor Where name = 'Harrison Ford'))
Q9.
Select title
From movie
Join casting On (id=movieid and actorid = (Select id From actor Where name = 'Harrison Ford') And ord !=1)
Q10.
Select title, name
From movie Join casting On (id=movieid)
Join actor On (actor.id=actorid)
Where ord=1 And yr=1962
--------------------------------------------------------------------------------------------------------------------


Exersice set 8. Using null
Q1.
Select name
From teacher
Where dept IS Null
Q2.
SELECT teacher.name, dept.name
 FROM teacher INNER JOIN dept
           ON (teacher.dept=dept.id)



Q3.
SELECT teacher.name, dept.name
 FROM teacher Left JOIN dept
           ON (teacher.dept=dept.id)

           SELECT teacher.name, dept.name
 FROM teacher Right JOIN dept
           ON (teacher.dept=dept.id)


           Q5.
           Select name,
Coalesce (mobile, '07986 444 2266')
From teacher



-------------------------------------------------------------------------------------------------------------------


Exerices set 7. Select in Select

Q1.
SELECT name FROM world
  WHERE population >
     (SELECT population FROM world
      WHERE name='Russia')
Q2.
Select name 
From world
Where continent = 'Europe'And gdp/population>
(Select gdp/population from world 
where name = 'United Kingdom')
Q3.
Select name, continent
From world
Where continent In (Select continent From world Where name in ('Argentina', 'Australia'))
Order by name
Q4.
Select name, population
From world
Where population >
(Select population From world Where name = 'Canada')
And population<
(Select population from world where name = 'Poland')
Q5.
SELECT name, CONCAT(ROUND(100*population/(SELECT population FROM world WHERE name = 'Germany')), '%')
FROM world
WHERE continent = 'Europe'
Q6.
Select name
From world
Where GDP > All(SELECT gdp FROM world WHERE gdp >=0 AND continent = 'Europe') AND continent != 'Europe'
Q7.
SELECT continent, name, area FROM world x
  WHERE area >= ALL
    (SELECT area FROM world y
        WHERE y.continent=x.continent
          AND area>0)
Q8.
SELECT continent, name
FROM world x
WHERE name <= ALL(SELECT name FROM world y WHERE y.continent = x.continent)

---------------------------------------------------------------------------------------------------------------

Exersice set 8.

Self join.

Q1.
Select id
From stops
Where name ='Craiglockhart'

Q2.
Select id
From stops
Where name ='Craiglockhart'

Q3.
Select id, name
From stops Join route on id = stop
Where company = 'LRT' and num = 4


Q4.




Q5.
SELECT a.company, a.num, a.stop, b.stop
FROM route a JOIN route b ON
  (a.company=b.company AND a.num=b.num)
WHERE a.stop=53 and b.stop = 149

