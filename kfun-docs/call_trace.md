
```
NAME
	call_trace - return the function call trace

SYNOPSIS
	mixed **call_trace()


DESCRIPTION
	Return the function call trace as an array.  The elements are of
	the following format:

	    ({ objname, progname, function, line, extern, arg1, ..., argn })

	The line number is 0 if the function is in a compiled object.
	Extern is 1 if the function was called with call_other(), and 0
	otherwise.
	The offsets in the array are named in the include file <trace.h>.
	The last element of the returned array is the trace of the
	current function.

```

**See Also:**

 [`previous_object`](./previous_object.md)
 [`previous_program`](./previous_program.md)
