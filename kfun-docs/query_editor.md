
```
NAME
	query_editor - query editor status

SYNOPSIS
	string query_editor(object obj)


DESCRIPTION
	Return the editor status of an object.  This is either "command", if
	the editor instance is in command mode, "insert", if the editor instance
	is in input mode, or nil, if there is no editor instance for the given
	object.

```

**See Also:**

 [`editor`](./editor.md)
