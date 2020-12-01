/*  
https://www.geeksforgeeks.org/find-number-of-islands/

*/ 

let mat =         [[1, 1, 0, 0, 0],
                   [1, 1, 0, 0, 1],
                   [1, 0, 1, 0, 1],
                   [1, 0, 0, 0, 0],
                   [1, 0, 1, 0, 1]];

  
function numberOfIslands(data){
  let numberOfIslands = 0;
  let map = {};
  
	for(let row = 0; row < data.length; row++){
  		for(let column = 0; column < data[row].length; column++){
        
    		if(data[row][column] === 1){
    		    
    		    let coordinate = generateCoordinate(row, column);
    		    
    		    if(! map[coordinate]){
    		        numberOfIslands++;
    		        map[coordinate] = 1;
    		        console.log('Adding:' + coordinate);
    		        findArround(data, map, row, column)
    		    }
    		}
        }
      }
     // console.log(map);
      return numberOfIslands;
  }
  
  function generateCoordinate(row, column){
      
    let coordinate = ( row + 1) + "," + ( column + 1);  
    return coordinate;
  }

  function findArround(data, map, row, column){
      
      findRight(data, map, row, column);
      findBelow(data, map, row, column); 
      findLeft(data, map, row, column);
      findBelowAndLeft(data, map, row, column);
      findBelowAndRight(data, map, row, column);
      
  }
  
  function findBelowAndLeft(data, map, row, column){
      
      if(column > 0 && row < data.length -1){ 
                  
          row = row + 1;
          column = column- 1; 
          
          let coordinate = generateCoordinate(row, column); 
                  
          if(data[row][column] === 1){
              
              if(! map[coordinate]){
                  map[coordinate] = 1;
                  
                    findArround(data, map, row, column);
              }
          }
      }
  }
  
  function findBelowAndRight(data, map, row, column){
      
      if(column > 0 && row < data.length -1){ 
                  
          row = row + 1;
          column = column + 1; 
          
          let coordinate = generateCoordinate(row, column); 
                  
          if(data[row][column] === 1){
              
              if(! map[coordinate]){
                  map[coordinate] = 1;
                  
                    findArround(data, map, row, column);
              }
          }
      }
  } 

  function findRight(data, map, row, column){
       if(column < data[row].length){
      
          for(let currentColumn = (column + 1); currentColumn < data[row].length; currentColumn++){
            
        		if(data[row][currentColumn] === 1){
        		    
        		    let coordinate = generateCoordinate(row, currentColumn);
        		    
        		    if(! map[coordinate]){
        		        map[coordinate] = 1;
        		        findArround(data, map, row, currentColumn);
        		    }
        		}
        		else{
        		    return;
        		}
            }
      }
  } 

  function findLeft(data, map, row, column){
      
      if(column > 0){
      
          for(let currentColumn = (column - 1); currentColumn >= 0; currentColumn--){
            
        		if(data[row][currentColumn] === 1){
        		    
        		    let coordinate = generateCoordinate(row, currentColumn);
        		    
        		    if(! map[coordinate]){
        		        map[coordinate] = 1;
        		        findArround(data, map, row, currentColumn);
        		    }
        		}
        		else{
        		    return;
        		}
            }
      }
  } 

  function findBelow(data, map, row, column){
      
      if(row < data.length){
          
          
      
          for(let currentRow = (row + 1); currentRow < data.length; currentRow++){
            
        		if(data[currentRow][column] === 1){
        		    
        		    let coordinate = generateCoordinate(currentRow, column);
        		    
        		   
        		    
        		    if(! map[coordinate]){
        		        map[coordinate] = 1;
        		        
        		        findArround(data, map, currentRow, column);
        		    }
        		}
        		else{
        		    return;
        		}
            }
      }
  } 
    
 numberOfIslands(mat);

                   