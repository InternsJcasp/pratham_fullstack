// Tower of the Hanoi
// Version 1 :

function TowerOfHanoi(n, source, auxilary, destination) {
    // base condition
    if (n === 1) {
      console.log(`Move disk 1 from ${source} to ${destination}`);
      return;
    }
  
    TowerOfHanoi(n - 1, source, destination, auxilary);
  
    console.log(`Move disk ${n} from ${source} to ${destination}`);
  
    TowerOfHanoi(n - 1, auxilary, source, destination);
  } 
  
  TowerOfHanoi(3, 'A', 'B', 'C');
  
  // version 2:
  