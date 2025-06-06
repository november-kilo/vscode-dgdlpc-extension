
```
NAME
	destruct_object - destruct an object

SYNOPSIS
	void destruct_object(object obj)


DESCRIPTION
	Destruct the object given as the argument.  Any value holding the object
	will immediately change into nil, and the object will cease to exist.
	If an object destructs itself, it will cease to exist as soon as
	execution leaves it.  If the last reference to a master object is
	removed (including cloned objects and inheriting objects), the
	function remove_program(objname) will be called in the driver object.

ERRORS
	Objects destructing themselves may not do certain things between the
	time of destruction and the time the object will cease to exist.  Most
	notably, call_other() may not be used from destructed objects.

```

**See Also:**

 [`clone_object`](./clone_object.md)
 [`compile_object`](./compile_object.md)
