
```
NAME
	write_file - write to a file

SYNOPSIS
	int write_file(string file, string str, varargs int offset)


DESCRIPTION
	Write a string to a file.  If the optional third argument is
	specified and non-zero, write the string at the given offset in
	the file; otherwise, append to the file.  The offset may be
	negative to offset backwards from the end of the file.
	To write a string to the beginning of a file, let the offset be
	equal to minus the length of the file.
	The return value is 1 for success, 0 for failure.

ERRORS
	If the offset is out of range, an error will result.

```

**See Also:**

 [`editor`](./editor.md)
 [`read_file`](./read_file.md)
