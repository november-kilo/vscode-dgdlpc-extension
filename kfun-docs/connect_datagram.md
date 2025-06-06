
```
NAME
	connect_datagram - establish an outbound datagram connection

SYNOPSIS
	void connect_datagram(int datagram_port, string host, int port)


DESCRIPTION
	Initiate a connection from the datagram port to the given host and
	port.  Once established, the current object will become a user object.
	Note that a datagram connection can be established without sending or
	receiving any data to and from the remote host.  If a connection cannot
	be established, unconnected(errcode) will be called in the current
	object, for which the argument will be one of the following:

	    0	unspecified failure
	    3	datagram_port and host are on different networks
	    5	datagram connection already exists

ERRORS
	An error will result if the current object is already a user or
	editor object.

```

**See Also:**

 [`connect`](./connect.md)
 [`query_ip_name`](./query_ip_name.md)
 [`query_ip_number`](./query_ip_number.md)
 [`send_datagram`](./send_datagram.md)
 [`this_user`](./this_user.md)
 [`users`](./users.md)
