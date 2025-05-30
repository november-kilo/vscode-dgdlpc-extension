
```
NAME
	connect - establish an outbound connection

SYNOPSIS
	void connect(string host, int port)


DESCRIPTION
	Initiate a connection to the given host and port.  Once established,
	the current object will become a user object.  If a connection
	cannot be established, unconnected(errcode) will be called in the
	current object, for which the argument will be one of the following:

	    0	unspecified failure
	    1	connection refused
	    2	host unreachable
	    3	network unreachable
	    4	connection timed out

ERRORS
	An error will result if the current object is already a user or
	editor object.

```

**See Also:**

 [`connect_datagram`](./connect_datagram.md)
 [`query_ip_name`](./query_ip_name.md)
 [`query_ip_number`](./query_ip_number.md)
 [`send_close`](./send_close.md)
 [`send_message`](./send_message.md)
 [`this_user`](./this_user.md)
 [`users`](./users.md)
