/*
* @fileOverview - contains the definition of the model class - Country
* @author - Imanuel Gittens
* */

/*
* @class
* */

ex2.m.Country = function(slots){
  //assign default values to mandatory properties
  this.name = 'Trinidad and Tobago';
  this.population = 0;
  //assign properties only if the constructor is invoked with and argument
  if(arguments.length > 0){
    this.name = slots.name;
    this.population = slots.population;
    //optional properties
    if(slots.lifeExpectancy){
      this.lifeExpectancy = slots.lifeExpectancy;
    }
    if(slots.militaryExpenditure){
      this.militaryExpenditure = slots.militaryExpenditure;
    }
  }
}

/***********Class Level Static Properties***************/

//initially an empty collection in the form of a map.
ex2.m.Country.instances = {}


//*********Checks and Setters**************************/

ex2.m.Country.checkName = function(name){
  if(name === undefined){
    return new MandatoryValueConstraintViolation('A country name must be provided!');
  }else if(!util.isNonEmptyString(name)){
    return new RangeConstraintViolation('The title must be a non-empty string!')
  }
  else if(name.length < 3 || name.length > 50){
    return new StringLengthConstraintViolation('The country name must have between 3 and 50 characters!');
  }else{
    return new NoConstraintViolation();
  }
}

ex2.m.Country.checkNameAsId = function(name){
  var validationResult = ex2.m.Country.checkName(name);
  if((validationResult instanceof NoConstraintViolation)){
    if(name === undefined){
      return new MandatoryValueConstraintViolation('A country name must be provided!');
    }else if(ex2.m.Country.instances[name]){
      validationResult = new UniquenessConstraintViolation('That country already exists in the database.');
    }else{
      validationResult = new NoConstraintViolation();
    }
  }
  return validationResult;
}

ex2.m.Country.checkPopulation = function(population){
  if(population === undefined){
    return new MandatoryValueConstraintViolation('A population amount must be provided!')
  }else if( typeof population !== 'number'){
    return new RangeConstraintViolation('Population must be a number!');
  }else{
    return new NoConstraintViolation();
  }
}

ex2.m.Country.checkLifeExpectancy = function(lifeExp){
  if(lifeExp === undefined){
    return new NoConstraintViolation();
  }else if(typeof  lifeExp !== 'number'){
    return new RangeConstraintViolation('Life Expectancy must be a number!');
  }else if(lifeExp > 100){
    return new IntervalConstraintViolation('Life expectancy must be a number less than or equal to 100!')
  }else{
    return new NoConstraintViolation();
  }
}

ex2.m.Country.checkMilitaryExpenditure = function(milExp){
  if(milExp === undefined){
    return new NoConstraintViolation();
  }else if(typeof  milExp !== 'number'){
    return new RangeConstraintViolation('Life Expectancy must be a number!');
  }else if(milExp > 100){
    return new IntervalConstraintViolation('Life expectancy must be a number less than or equal to 100!')
  }else{
    return new NoConstraintViolation();
  }
}