
```
NAME
	dump_state - create a snapshot

SYNOPSIS
	void dump_state(vararg int incremental)


DESCRIPTION
	Create a snapshot of the current state of the system.  The actual
	snapshot is not created until after the current task has finished.
	If the argument is non-zero, the snapshot will be incremental.

```

**See Also:**

 [`swapout`](./swapout.md)
