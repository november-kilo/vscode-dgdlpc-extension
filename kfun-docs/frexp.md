
```
NAME
	frexp - split float into fraction and exponent

SYNOPSIS
	mixed *frexp(float x)


DESCRIPTION
	The argument is split into a fraction f and an integer exponent n,
	such that either f == 0.0, or 0.5 <= | f | < 1.0, and f * 2 ** n == x.
	({ f, n }) is returned.  If x == 0.0, both f and n will be zero.

```

**See Also:**

 [`ldexp`](./ldexp.md)
 [`modf`](./modf.md)
