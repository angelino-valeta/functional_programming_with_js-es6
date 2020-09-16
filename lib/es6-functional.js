const forEach = (array, callback) => {

//The loop can be this way.
/*
  for(const value of array)
  {
    callback(value);
  }
*/
  let i = 0;
  let leng = array.length;

  for(i; i < leng; i++)
  {
    callback(array[i]);
  }

}

/* Test forEach
forEach(['a','b', 'c'], (values) => console.log('value: ', values));
*/
