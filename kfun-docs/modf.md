
```
NAME
	modf - compute floating point remainder

SYNOPSIS
	float *modf(float x)


DESCRIPTION
	Split the argument into a fraction f and an integer part n, such that
	| f | < 1.0, and f + n == x.  ({ f, n }) is returned.  Note that
	n is returned as a float, and may not be representable in type int.

```

**See Also:**

 [`frexp`](./frexp.md)
 [`ldexp`](./ldexp.md)
