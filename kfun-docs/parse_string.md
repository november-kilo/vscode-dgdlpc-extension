
```
NAME
	parse_string - parse a string

SYNOPSIS
	mixed *parse_string(string grammar, string str,
			    varargs int alternatives)


DESCRIPTION
	Parse a string as described by the grammar.  If parsing is successful,
	the parse tree is returned as an array.  The optional third argument
	specifies the number of alternative parse trees to integrate in the
	result, if the grammar is ambiguous.
	parse_string() uses internal object storage to cache generated
	automatons between calls, which is not removed until the object is
	destructed.
	This function cannot be used from a special object.

```

**See Also:**

 [`explode`](./explode.md)
 [`implode`](./implode.md)
 [`sscanf`](./sscanf.md)
