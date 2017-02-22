module.exports.exercise1 = function exercise1() {
  var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return array.map(function(x) {
    return x * 2;
  });
};

module.exports.exercise2 = function exercise2() {
  var array = [0, 4, 16, 49];
  return array.map(Math.sqrt);
};

module.exports.exercise3 = function exercise3() {
  var array = ['1' ,'5', '7'];
  return array.map(Number);
};

module.exports.exercise4 = function exercise4() {
  var array = [0, 50, 11, 10.1, 7, 20];
  return array.filter(function(x) {
    return x >= 10;
  });
};

module.exports.exercise5 = function exercise5() {
  var students = [
      {                
        name: 'John',  
        lastName: 'Doe',
        grade: 10
      },
      {                
        name: 'John',  
        lastName: 'Jefferson',
        grade: 5
      },
      {                
        name: 'John',  
        lastName: 'Michel',
        grade: 7
      },
      {                
        name: 'John',  
        lastName: 'Meek',
        grade: 3
      },
      {                
        name: 'John',  
        lastName: 'Block',
        grade: 8
      },
      {                
        name: 'John',  
        lastName: 'Harty',
        grade: 9
      },
      {                
        name: 'John',  
        lastName: 'Matz',
        grade: 6.9
      },
      {                
        name: 'John',  
        lastName: 'Dana',
        grade: 7.1
      }
  ];                    

  return students.filter(function(x) {
    return x.grade >= 7;
  }).map(function(x) {
    return { fullName: `${x.name} ${x.lastName}` };
  });
};

module.exports.exercise6 = function exercise6() {
  var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,99,93,100,500,698];
  return array.reduce(function(accum, cur) {
    return accum + cur;
  });
};

module.exports.exercise7 = function exercise7() {
  var array = [[0, 1], [2, 3], [4, 5]];
  return array.reduce(function(accum, cur) {
    accum.push(cur[0]);
    accum.push(cur[1]);
    return accum;
  }, []);
};
