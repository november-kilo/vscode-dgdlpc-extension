
```
NAME
	rename_file - rename a file

SYNOPSIS
	int rename_file(string from, string to)


DESCRIPTION
	Rename a file.  The destination file must not yet exist.  1 is
	returned if the file could be renamed, 0 otherwise.

ERRORS
	Moving a directory may not be possible if the host operating system
	does not support this as a system call.  Moving a file across file
	systems will probably fail.

```

**See Also:**

 [`remove_file`](./remove_file.md)
