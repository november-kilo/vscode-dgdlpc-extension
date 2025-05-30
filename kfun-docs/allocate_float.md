
```
NAME
	allocate_float - allocate an array of floats

SYNOPSIS
	float *allocate_float(int size)


DESCRIPTION
	Allocate an array with size elements.  All elements are initialized
	to 0.0.  The new array is returned.

ERRORS
	If the specified array size is smaller than zero or larger than
	status()[ST_ARRAYSIZE], with ST_ARRAYSIZE defined in the include file
	<status.h>, an error will result.

```

**See Also:**

 [`allocate`](./allocate.md)
 [`allocate_int`](./allocate_int.md)
 [`sizeof`](./sizeof.md)
