
```
NAME
	instanceof - check whether an object is an instance of a type

SYNOPSIS
	int instanceof(object obj, string type)


DESCRIPTION
	Check whether an object is an instance of the given type, which is
	first processed by object_type() in the driver object.  The return
	value is -1 if the type is privately inherited, 1 if the type is
	normally inherited, or 0 otherwise.

ERRORS
	An error will result if object_type() does not return a string.

NOTE
	instanceof() is not equivalent with <- in the same way as call_other()
	is equivalent with ->.  Instanceof processes the type string at
	runtime, whereas <- does it at compile time, and masking instanceof()
	will not affect <-.

```

**See Also:**

 [`function_object`](./function_object.md)
 [`typeof`](./typeof.md)
