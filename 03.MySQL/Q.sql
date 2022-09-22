SELECT continent, COUNT(*), SUM(GNP),AVG(GNP) FROM country
	GROUP BY Continent;