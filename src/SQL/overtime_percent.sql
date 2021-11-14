WITH overtime_count AS(SELECT COUNT(*) as total_overdue, neighborhood AS overdue_neighborhood FROM service_requests WHERE ontime='OVERDUE' GROUP BY neighborhood),
full_count AS(SELECT COUNT(*) AS total, neighborhood FROM service_requests GROUP BY neighborhood),
united_table AS (SELECT * FROM overtime_count
LEFT JOIN full_count ON overtime_count.overdue_neighborhood=full_count.neighborhood)
SELECT *, total_overdue*total/POWER(total,2) AS percent_overdue FROM united_table WHERE total is not null ORDER BY percent_overdue DESC;