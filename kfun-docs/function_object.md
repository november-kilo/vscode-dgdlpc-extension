
```
NAME
	function_object - find a function in an object

SYNOPSIS
	string function_object(string function, object obj)


DESCRIPTION
	Find the named function, which must be callable with call_other(),
	in an object.  If the function is found, the name of the inherited
	object that defines it is returned; otherwise, nil is returned.

```

**See Also:**

 [`call_other`](./call_other.md)
 [`instanceof`](./instanceof.md)
