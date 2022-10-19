//You're given a non-empty array of positive integers representing the amounts of
//time that specific queries take to execute. Only one query can be executed at a time,
// but the queries can be executed in any order.

//A query's waiting time is defined asthe amount of time that it must wait before
//it's execution starts. So if a query executed second, then its waiting time is the
//duration of the first query; if a query is executed third, then its waiting time is
//the sum of the durations of the first two queries.

// Write a function that returns the minimum amount of total waiting time for all of
// the queries. For example, if you're given the queries of durations [1, 5, 4], then
// the total waiting time if the queries were executed in the order of [5, 1, 4] would
// be (0) + (5) + (5 + 1) = 11. The first query of duration 5 would be executed
// immediately, so its waiting time would be 0, the second query of duration 1 would
// have to wait 5 seconds(duration of the first query) to be executed, and the last
// query would have to wait the duration of the first two queries before being
// executed.

// Note: You're allowed to mutate the input array.

// Sample input: queries = [3, 2, 1, 2, 6]
// Sample output: 17

//Thinking this through: First thing that sticks out to me is that the first query is
//  instant and that there is no waiting time after the last query is made. Meaning the
//  waiting times for the first and last queries matter the most, I think.

//Example: queries2 = [2, 7, 10]

//If we sort in descending order, we would get: [10, 7, 2]. While the first query is
// done instantly, the following queries will all add the wait time of the value of the
// first query to their wait time. In this case: (0) + (10) + (10 + 7) = 27. So given
// this example, I think the best approach is to sort the array in ascending order
// (smallest query first) and then use a for loop to add the totalSum to the value of
// the current index multiplied by the length of the array minus the index + 1. This is
// because if we're at index 1 of an array.length of 5, we will add index 1, 4 times
// over the course of the entire loop. We can optimize runtime a bit by calculating this
//  up front. In the case of index 2 of array.length of 5, we will add index 2, 3 times.
//   This goes on for the length of the array.

//Second example: [3, 2, 1, 2, 6]
//Target output: 17 (Which is the minimum amount of waiting time)

//So we sort the array: [1, 2, 2, 3, 6]. The first query is instant and the highest
// value query is at the end, which will not be accounted for. In this case, our total
// waiting time will be: (0) + (1) + (1 + 2) + (1 + 2 + 2) + (1 + 2 + 2 + 3) = 1+3+5+8 = 17.

//time complexity: Because we need to sort the input array to begin with, the runtime
// will be log(n) for the sort times N number of inputs in the array.

//space complexity: Because we're sorting in place and not requiring to create any
// extra data structures, this results in constant space. Declaring the variable "total"
//  is constant space as well, which is why it doesn't increase the space complexity.

//O(nLog(n)) time | O(1) space complexity
function minimumWaitingTime(queries) {
  if (queries.length === 1) {
    return 0;
  }
  let total = 0;
  queries((a, b) => a - b);
  for (let i = 0; i < queries.length; i++) {
    total + queries[i] * (queries.length - (i + 1));
  }
  return total;
}

//A second variation to this approach is to just keep track of the last number seen
// in the array while iterating through the array and adding the total to the last
// number seen. The last number seen is the total of the last number seen plus the
// current number seen in the current iteration of the loop.

// function minimumWaitingTime(queries) {
//   if(queries.length === 1) {
//     return 0;
//   }

//   let totalTime = 0;
//   let lastNum = 0;
//   queries.sort((a, b) => a - b);
//   for(const num in queries) {
//     totalTime += lastNum;
//     lastNum += num;
//   }
//   return totalTime;
// }
