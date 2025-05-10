
```
NAME
	previous_object - return the previous object

SYNOPSIS
	object previous_object(varargs int n)


DESCRIPTION
	Return the object n+1 (default: 1) steps back in the call_other chain.
	If the object is destructed, or the number of steps is larger than
	the number of call_others involved, nil is returned.

```

**See Also:**

 [`call_other`](./call_other.md)
 [`previous_program`](./previous_program.md)
 [`this_object`](./this_object.md)
 [`call_trace`](./call_trace.md)
