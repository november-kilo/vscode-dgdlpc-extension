
```
NAME
	restore_object - restore variables of an object

SYNOPSIS
	int restore_object(string file)


DESCRIPTION
	Restore all global variables in an object that are not private or
	static from a file.  All variables which qualify, but were not
	restored and do not contain object values, will be set to 0 or nil.
	1 is returned if the variables could be restored, 0 otherwise.

ERRORS
	An error will result if the restore file does not have the proper
	format.

```

**See Also:**

 [`save_object`](./save_object.md)
