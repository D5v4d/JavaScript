function first (one){
    return function (two){
      return (one + two)
    }
  }
  
  console.log(first(1)(2));