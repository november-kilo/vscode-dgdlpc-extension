
```
NAME
	previous_program - return the previous program

SYNOPSIS
	string previous_program(varargs int n)


DESCRIPTION
	Return the name of the object with the function n+1 (default: 1) steps
	back in the function call chain.  If the number of steps is larger than
	the number of function calls involved, nil is returned.

```

**See Also:**

 [`previous_object`](./previous_object.md)
 [`call_trace`](./call_trace.md)
