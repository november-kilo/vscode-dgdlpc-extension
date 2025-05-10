
```
NAME
	compile_object - compile an object

SYNOPSIS
	object compile_object(string file, string source...)


DESCRIPTION
	Compile an object from a LPC file, specified by the first argument with
	".c" appended.  If the optional source argument are supplied, the object
	is compiled from the concatenaton of those strings, instead.  The
	returned object will have the file string as name.
	If the object to be compiled already exists and is not inherited by
	any other object, it and all of its clones will be upgraded to the
	new version.  Variables will be preserved only if they also exist in
	the new version and have the same type; new variables will be
	initialized to 0 or nil.  The actual upgrading is done immediately upon
	completion of the current task.

ERRORS
	Compilation errors will be reported to the driver object.  Furthermore,
	a failure to compile will result in a runtime error, as well.

```

**See Also:**

 [`clone_object`](./clone_object.md)
 [`destruct_object`](./destruct_object.md)
 [`new_object`](./new_object.md)
 [`object_name`](./object_name.md)
