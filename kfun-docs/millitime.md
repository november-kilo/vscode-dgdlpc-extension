
```
NAME
	millitime - return the current time in milliseconds

SYNOPSIS
	mixed *millitime()


DESCRIPTION
	Return the current time as an array ({ time, fraction }), where time
	is an integer denoting the current time in seconds, and fraction is
	a float in range [0.0 .. 1.0>, denoting the fraction of the current
	second that has passed, with a resolution of 0.001.

```

**See Also:**

 [`time`](./time.md)
 [`ctime`](./ctime.md)
