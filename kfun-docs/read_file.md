
```
NAME
	read_file - read a file

SYNOPSIS
	string read_file(string file, varargs int offset, int size)


DESCRIPTION
	Read a file.  The optional second and third arguments specify an
	offset in the file and the maximum length of the string to be read,
	and default to the whole file from the beginning.  The offset may
	be specified as negative, to read from the end of a file.  Nil is
	returned if the file does not exist.

ERRORS
	If the offset is out of range or the returned string would be too
	large, an error will result.

```

**See Also:**

 [`editor`](./editor.md)
 [`write_file`](./write_file.md)
