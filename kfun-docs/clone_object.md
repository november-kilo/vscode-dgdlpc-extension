
```
NAME
	clone_object - clone an object

SYNOPSIS
	object clone_object(object master)


DESCRIPTION
	Create a clone of the specified object with an unique name of the form
	"object_name#1234".  The cloned object must not itself be a clone.  The
	new object is returned.  The creator function will be called in the
	cloned object immediately.

```

**See Also:**

 [`compile_object`](./compile_object.md)
 [`destruct_object`](./destruct_object.md)
 [`new_object`](./new_object.md)
