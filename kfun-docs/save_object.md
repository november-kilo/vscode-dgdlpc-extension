
```
NAME
	save_object - save variables of an object

SYNOPSIS
	void save_object(string file)


DESCRIPTION
	Save all global variables in an object that are not private or static
	to a file.  Only non-zero and non-object values are actually saved.

ERRORS
	An error will result if the save file could not be created.

```

**See Also:**

 [`restore_object`](./restore_object.md)
