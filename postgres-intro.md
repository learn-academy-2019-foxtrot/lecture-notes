# Intro to Postgresql

### What is Postgresql?
- A free and open-source relational database management system
- The origins of PostgreSQL date back to 1986 as part of the POSTGRES project at the University of California at Berkeley
- Written in C
- Currently on version 12.1 (As of November 2019)

### What is PG Admin?
- PG Admin is an open-source management tool for Postgres
- Allows users to make direct queries to a database
- Large numbers are often displayed as exponents 2.75e+7 = 27,500,000

### PG Admin Setup
- Open the program with the blue elephant icon
- File tree on the lefthand side: Server  >> Database >> country
- From the navbar or hamburger menu: Tools >> Query Tool
- To run each query click the lightning bolt icon just above the query screen
- Password: SDlearn123

### SQL and NOSQL
- **SQL** (Structured Query Language)
  - relational database language
  - initially developed by IBM in the early 1970s, originally referred to as SEQUEL (Structured English Query Language)
  - Examples: MySQL, SQLite, Oracle
- **NOSQL** (Not Only Structured Query Language)
  - a collection of relational database languages
  - ability to process "big data" effectively and efficiently
  - There are several types of NoSQL databases: Key-Value Stores, Wide-Column Stores, Document Stores, Graph Databases
  - Examples: MongoDB, Redis, Apache Cassandra

### Vocabulary
- **Table** - one set of rows and columns, think of a table like an object made up of key:value pairs
- **Column** - the name of the column is like the `key` in an object
- **Model** - a collection of tables that make up the "business logic" in your application
- **Schema** - the technical layout of the table - column names and datatypes
If you think of a table as an object, and the column heads are keys and the entries are values
- **Query** - identifying and returning a particular subset of a full dataset, a query should only return the information needed by the application to function, returning extra data is 'expensive'


### Making Queries

**SELECT** - identifying the column headers to be shown in the query
- format: `SELECT column_name`

`*` - splat, meaning 'all' will return every column header
- format: `SELECT *`

**FROM** - identifying the table being referenced
- format: `SELECT column_name FROM table_name`

**WHERE** - a comparison statement
- format: `WHERE column_name comparison_operator value`
- `=`	tests for equality
- `!=` tests for inequality
- `<`	tests for less-than
- `>`	tests for greater-than
- `<=` tests for less-than or equal-to
- `>=` tests for greater-than or equal-to
- `BETWEEN`	tests whether a value lies within a given range
- `IN` tests whether a row’s value is contained in a set of specified values
- `EXISTS` tests whether rows exist, given the specified conditions
- `LIKE` tests whether a value matches a specified string
  - wrapping a string in `%my_string%` creates a `wildcard` value that will return entries matching the pattern
- `IS NULL`	tests for NULL values
- `IS NOT NULL`	tests for all values other than NULL

**ORDER BY** - sorts the results of the query
- `WHERE column_name`
- `WHERE column_name ASC` returns values in ascending order
- `WHERE column_name DESC` returns values in descending order

### Aggregate Queries
Aggregate queries allow the user to create a temporary alias column or table that only exists for the duration of the query for which they’re created

**AS** - assigns a name to an alias column or table, there are lots of helpful tools to create a new column names
- format for alias column: `SELECT column_name AS alias_name`
- format for alias table: `FROM table_name AS alias_name`
- `SELECT COUNT(column_name) AS alias_name` returns the number of rows that match a certain criteria
- `SELECT AVG(column_name) AS alias_name` returns the average (mean) value of a column
- `SELECT SUM(column_name) AS alias_name` returns the total sum of a given column
- `SELECT MIN(column_name) AS alias_name` returns the smallest value within a specified column
- `SELECT MAX(column_name) AS alias_name` returns the largest value within a specified column

**WITH** - creates an alias table by wrapping a query in parentheses, use `AS` to name the subquery
```sql
WITH alias_name AS(
  SELECT column_name
  FROM table_name
  WHERE condition
) SELECT * FROM alias_name
  ORDER BY column_name
```

### Examples

1) View the entire country table:

```sql
SELECT *
FROM country
```

2) View the name and population of all countries:

```sql
SELECT name, population
FROM country
```

3) Limit the names and population to the top 10 most populated countries:

```sql
SELECT name, population
FROM country
LIMIT 10
```

4) View the 15 countries with the lowest life expectancy:

```sql
SELECT name, lifeexpectancy
FROM country
ORDER BY lifeexpectancy
LIMIT 15
```

5) View the 15 countries with the highest life expectancy:

```sql
SELECT name, lifeexpectancy
FROM country
WHERE lifeexpectancy > 0
ORDER BY lifeexpectancy DESC
LIMIT 15
```

6) View all countries from Africa with only certain populations and life expectancy:

```sql
SELECT continent, name, population, lifeexpectancy
FROM country
WHERE (continent = 'Africa')
  AND population < 3e+7
  AND lifeexpectancy < 45
```

7) View counties that are 'like' a republic and have an independence year after 1945:

```sql
SELECT * FROM country
WHERE governmentform
LIKE '%epublic%'
  AND indepyear > 1945
```

8) View counties that are NOT republics and became independent after the year 1945:

```sql
SELECT *
FROM country
WHERE NOT governmentform
LIKE %epublic% AND indepyear > 1945
```

9) Create population density for top 5 least populated countries:

```sql
SELECT name, population, surfacearea, population / surfacearea AS pop_density
FROM country
WHERE population > 0
ORDER BY pop_density
LIMIT 5
```

10) Of the smallest 10 countries, which has the biggest gnp?
```sql
WITH smallest_ten AS(
  SELECT name, population
  FROM country
  WHERE population > 0
  ORDER BY population
  LIMIT 10
) SELECT * FROM smallest_ten
  ORDER BY gnp DESC
```
