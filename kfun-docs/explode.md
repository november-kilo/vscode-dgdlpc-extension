
```
NAME
	explode - explode a string

SYNOPSIS
	string *explode(string str, string separator)


DESCRIPTION
	Return an array of substrings of str, divided by the given separator.
	The separators that str starts and ends with, if any, are not taken
	into account.

ERRORS
	If the resulting array size is larger than status()[ST_ARRAYSIZE], with
	ST_ARRAYSIZE defined in the include file <status.h>, an error will
	result.

```

**See Also:**

 [`implode`](./implode.md)
 [`parse_string`](./parse_string.md)
 [`sscanf`](./sscanf.md)
