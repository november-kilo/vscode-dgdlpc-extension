
```
NAME
	shutdown - shutdown the system

SYNOPSIS
	void shutdown(varargs int hotboot)


DESCRIPTION
	Shut down the system after the current task has finished.  A non-zero
	argument indicates that the system should attempt to hot-boot after
	shutdown.

ERRORS
	An error will result if hot-booting is attempted without dump_state()
	having been called earlier in the same task, or if hot-booting is
	disabled.

```

