
```
NAME
	fmod - floating point modulus

SYNOPSIS
	float fmod(float x, float y)


DESCRIPTION
	Return the value f, for which there exists an integer k such that
	k * y + f == x, f has the same sign of x, and the absolute value of
	f is less than the absolute value of y.

ERRORS
	A domain error will result if y == 0.0.

```

**See Also:**

 [`ceil`](./ceil.md)
 [`floor`](./floor.md)
