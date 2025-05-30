
```
NAME
	editor - handle an editor command

SYNOPSIS
	string editor(varargs string command)


DESCRIPTION
	Execute an editor command for the current object.  If the editor
	command is the first for this object, an editor instance will be
	created for it.  The editor instance will remain active until an
	editor command is specified that terminates it, or until the object
	is destructed.  Editor output will be returned as a string.  The
	editor status of an object can be queried with the kfun query_editor().
	File paths for reading and writing will be translated by path_read()
	and path_write(), respectively, in the driver object.

ERRORS
	If the number of active editor instances is equal to the value of the
	ST_ETABSIZE field of the array returned by status(), where ST_ETABSIZE
	is defined in the include file <status.h>, attempting to add another
	one will result in an error.
	It is not possible to start an editor instance for a user object.

```

**See Also:**

 [`read_file`](./read_file.md)
 [`write_file`](./write_file.md)
