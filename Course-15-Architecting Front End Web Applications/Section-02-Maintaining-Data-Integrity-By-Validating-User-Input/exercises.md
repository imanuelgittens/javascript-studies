##Exercises

#####Exercise 1

Qu 1) Consider the class design model on the right. List and classify all constraints defined in the model.

**name**

- Cardinality (number of values) - 1 (value not optional)
- Must be a non empty string with 3-50 characters
- Is the primary key i.e. must be unique

**population**

- Cardinality (number of values) - 1
- Must be an integer greater than 0

**lifeExpectancy**

- Cardinality (number of values) - 0 or 1 (value is optional)
- Must be a decimal number greater than 0 but not greater than 100

**militaryExpenditure**

- Cardinality (number of values) - 0 or 1 (value is optional)
- Must me a number represented as a percentage i.e number can't be greater than 100.

Qu 2) Consider the class design model on the right. List and classify all constraints defined in the model.

**personId**

- Cardinality (number of values) - 1 (value not optional)
- Must be an integer
- Is the primary key i.e. must be unique

**name**

- Cardinality (number of values) - 1 (value not optional)
- Must be a string

**dateOfBirth**

- Cardinality (number of values) - 1 (value not optional)
- Must be a date

**dateOfDeath**

- Cardinality (number of values) - 0 or 1 (value is optional)
- Must be a date

Qu 3) Consider the Movie class design model that you have made as an exercise in Chapter 1. Think about possible constraints that may be part of the business semantics of movie data management. Add all relevant constraints to your model and describe them in a list of constraint statements in English.

**movieNo**

- Cardinality (number of values) - 1 (value not optional)
- Must be an integer greater than 0
- Is the primary key i.e. must be unique

**title**

- Cardinality (number of values) - 1 (value not optional)
- must be a non empty string between 1 and 250 characters

**length**

- Cardinality (number of values) - 1 (value not optional)
- must be a non empty string of the form [1hr 30min]

**dateReleased**

- Cardinality (number of values) - 1 (value not optional)
- must be a date

#####Exercise 2

Qu 1) First turn the class design model into a JS class model, and then code the model class Country with all property constraints implemented in its check functions.

Answer - Please see folder for exercise 2

Qu 2) Consider your Movie class design model with the constraints that you have added in the previous exercise. Code the model class Movie with all property constraints implemented in its check functions
 
See answer on github [here](https://github.com/imanuelgittens/learning-web-components/tree/gh-pages/architecting-frontend-application/section1/project1/app/src/m)


#####Exercise 3




