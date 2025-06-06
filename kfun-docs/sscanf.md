
```
NAME
	sscanf - simple string parser

SYNOPSIS
	int sscanf(string str, string fmt, ...)


DESCRIPTION
	Parse the string str, using the format string fmt.  The following
	character sequences have a special meaning in the format string:

	    %s	match a substring
	    %d	match a number
	    %f	match a floating-point number
	    %c	match a character
	    %%	match single %

	Other characters preceding a special sequence must be matched exactly.
	%*s, %*d, %*f and %*c can be used to match without assignment.  Matched
	substrings and numbers are assigned to the successive lvalue arguments
	following the format string.  The number of matches is returned.

ERRORS
	An error is caused if the format string is malformed, or if too few
	lvalue arguments were given.

```

**See Also:**

 [`explode`](./explode.md)
 [`implode`](./implode.md)
 [`parse_string`](./parse_string.md)
