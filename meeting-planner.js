/* 
Implement a function meetingPlanner that given the availability, slotsA and slotsB, of two people and a meeting duration dur, returns the earliest time slot that works for both of them and is of duration dur. If there is no common time slot that satisfies the duration requirement, return null.
Time is given in a Unix format called Epoch, which is a nonnegative integer holding the number of seconds that have elapsed since 00:00:00 UTC, Thursday, 1 January 1970.
*/
/* 
Each person’s availability is represented by an array of pairs. Each pair is an epoch array of size two. The first epoch in a pair represents the start time of a slot. The second epoch is the end time of that slot. The input variable dur is a positive integer that represents the duration of a meeting in seconds. The output is also a pair represented by an epoch array of size two.
In your implementation assume that the time slots in a person’s availability are disjointed, i.e, time slots in a person’s availability don’t overlap. Further assume that the slots are sorted by slots’ start time.
Implement an efficient solution and analyze its time and space complexities. 
*/

const meetingPlanner = (start, end, dur) => {
  let idx1 = 0;
  let idx2 = 0;
  let early, late;

  while(idx1 < start.length && idx2 < end.length) {
    early = Math.max(start[idx1][0], end[idx2][0]);
    late = Math.min(start[idx1][1], end[idx2][1]);

    if()
  }

}