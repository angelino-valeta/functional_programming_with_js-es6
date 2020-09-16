const forEach = (array, callback) => {

  //The loop can be this way.
  /*for(const value of array)
  {
    callback(value);
  }*/

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

const forEachObj = (obj, callback) => {
  let property;

  for(property in obj)
  {
    if(obj.hasOwnProperty(property)){
      callback(property, obj[property]);
    }
  }
}

  /* Test forEachObj
  let myObj = {
    a: 1,
    b: 2,
    c: 3
  };

  forEachObj(myObj, (property, values) => console.log(property, ' => ' ,values));
  */
