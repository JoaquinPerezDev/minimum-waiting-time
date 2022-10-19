# minimum-waiting-time

ALGO EXPERT EASY

You're given a non-empty array of positive integers representing the amounts of time that specific queries take to execute. Only one query can be <br> 
executed at a time, bnut the queries can be executed in any order.<br>

A query's waiting time is defined asthe amount of time that it must wait before it's execution starts. So if a query executed second, then its waiting<br> 
time is the duration of the first query; if a query is executed third, then its waiting time is the sum of the durations of the first two queries. <br>

Write a function that returns the minimum amount of total waiting time for all of the queries. For example, if you're given the queries of durations <br>
[1, 5, 4], then the total waiting time if the queries were executed in the order of [5, 1, 4] would be (0) + (5) + (5 + 1) = 11. The first query of<br> duration 5 would be executed immediately, so its waiting time would be 0, the second query of duration 1 would have to wait 5 seconds(duration of the <br>
first query) to be executed, and the last query would have to wait the duration of the first two queries before being executed. 

Note: You're allowed to mutate the input array.

Sample input: queries = [3, 2, 1, 2, 6]<br>
Sample output: 17
