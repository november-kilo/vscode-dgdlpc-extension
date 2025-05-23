
```
NAME
	new_object - create a new light-weight object

SYNOPSIS
	object new_object(object master)


DESCRIPTION
	Create a new light-weight instance of the specified object with a name
	of the form "object_name#-1".  If the master object is itself a light-
	weight object, it will be copied.  Light-weight objects cannot be
	destructed and are automatically deallocated once the last reference
	to them is removed.
	The new object is returned.  The creator function will be called in the
	new object immediately.

```

**See Also:**

 [`clone_object`](./clone_object.md)
