let maze = [
    ['#','#','#','#','#','#','#','#','#'],
    ['#','+','+','+','#','+','+','+','#'],
    ['#','+','#','+','#','+','#','+','#'],
    ['+','+','#','+','0','+','#','+','#'],
    ['#','#','#','+','#','#','#','#','#'],
    ['#','#','+','+','#','#','#','#','#'],
    ['#','#','+','#','#','#','#','#','#'],
    ['#','#','#','#','#','#','#','#','#'],
  ];
  
   
  let corPath = [];
     
  const isSafe = (maze,x,y) =>
  {
          if (maze[x][y] == '0') {
              return true;
      } else if (x >= 0 && x < maze[0].length && y >= 0
                  && y < maze.length && maze[x][y] == '+') {
                  return true;
    } else {
    return false;
    }}
    
    
   const isFinish = (arr, x,y) => {
    if (x ==  0 || y == 0 || x ==  arr[0].length ||  y == arr.length) {
             if (arr[x][y] == '+')
           {return true;}
          } else {
          return false;
          }
   } 
   
  

  const wayOut = (arr, x, y, sol) => {
     console.log("path " + corPath);
     //corPath.push("222");
     if (isFinish(arr, x, y) == true)
     {
                         console.log("finish");
              sol[x][y] = 1;
              return true;
          }
     if (isSafe(arr, x, y) == true) {
      
       if (sol[x][y] == 1)
          return false;
      
      sol[x][y] = 1;
       if (wayOut(arr, x + 1, y, sol))
                 {
                 corPath.push("right");
                  return true;
                 }
       if (wayOut(arr, x, y + 1, sol))
                   {
                 corPath.push("down");
                  return true;
                 }
       if (wayOut(arr, x, y - 1, sol))
                   {
                 corPath.push("up");
                  return true;
                 }
       if (wayOut(arr, x - 1, y, sol))
                   {
                 corPath.push("left");
                  return true;
                 }
                   sol[x][y] = 0;
              return false;
          }
    
          return false;
  }
   
  // Проверка, есть ли выход
  const solutionExist = (arr) => {
      
    let entryPoint = '0';
      let zeroX = arr.findIndex(row => row.includes(entryPoint));
    let zeroY =  arr[zeroX].indexOf(entryPoint);
    
    
   
     let sol = new Array(arr.length);
      for(let i=0;i<arr.length;i++)
      {
          sol[i]=new Array(arr[0].length);
          for(let j=0;j<arr[0].length;j++)
          {
              sol[i][j]=0;
          }
      }
    
    
    
    if (wayOut(arr,zeroX,zeroY,sol)) {
              console.log("Solution doesn't exist");
              return false;
          }
         console.log(corPath);
          console.log(sol);
           return true;
  };
  

  
  solutionExist(maze);
  
  
  
  
  
  