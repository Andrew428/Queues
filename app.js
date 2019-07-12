/* BinarySearchTree */
import  Queue from './util/Queue.js';
import  PriorityQueue from './util/PriorityQueue.js';

window.onload = () => {
  
  const q = new Queue(); 
    q.enqueue('a'); 
    q.enqueue('b');
    q.enqueue('c');
    q.print();
    q.dequeue();
    console.log(q.front());
    q.print();

  const pq = new PriorityQueue(); 
    pq.enqueue(['Beau Carnes', 2]); 
    pq.enqueue(['Quincy Larson', 3]);
    pq.enqueue(['Ewa Mitulska-Wójcik', 1])
    pq.enqueue(['Briana Swift', 2])
    pq.printCollection();
    pq.dequeue();
    console.log(pq.front());
    pq.printCollection();

};