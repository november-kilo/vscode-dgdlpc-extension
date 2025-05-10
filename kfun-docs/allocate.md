
```
NAME
	allocate - allocate an array

SYNOPSIS
	mixed *allocate(int size)


DESCRIPTION
	Allocate an array with size elements.  All elements are initialized
	to nil.  The new array is returned.

ERRORS
	If the specified array size is smaller than zero or larger than
	status()[ST_ARRAYSIZE], with ST_ARRAYSIZE defined in the include file
	<status.h>, an error will result.

```

**See Also:**

 [`allocate_int`](./allocate_int.md)
 [`allocate_float`](./allocate_float.md)
 [`sizeof`](./sizeof.md)
