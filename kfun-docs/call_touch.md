
```
NAME
	call_touch - prepare to report when the object is next touched

SYNOPSIS
	int call_touch(object obj)


DESCRIPTION
	Just before the next call to the object, call the function "touch" in
	the driver object, with the object and the function to be called as
	arguments.  If the object did not yet have its creator function called,
	call_touch() fails and return 0; otherwise, it succeeds and returns 1.

```

**See Also:**

 [`call_other`](./call_other.md)
