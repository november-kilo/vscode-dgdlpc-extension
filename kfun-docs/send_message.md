
```
NAME
	send_message - send a message to a user

SYNOPSIS
	int send_message(string message)
	int send_message(int echo)


DESCRIPTION
	In the first form, send a message to the user associated with the
	current object, returning the number of bytes that could be sent.
	When used by the driver object, the string will be written to stderr.
	In the second form, user input echoing will be turned off or on,
	depending on the value of the argument being zero or non-zero,
	respectively; the return value is 1 if input echoing could be set, or 0
	otherwise.
	When the output buffer has emptied, message_done() will be called in
	the user object.  If send_message() is called again before the output
	buffer has fully drained, message_done() will not be called before the
	output buffer has emptied completely.

```

**See Also:**

 [`connect`](./connect.md)
 [`connect_datagram`](./connect_datagram.md)
 [`datagram_challenge`](./datagram_challenge.md)
 [`query_ip_name`](./query_ip_name.md)
 [`query_ip_number`](./query_ip_number.md)
 [`send_close`](./send_close.md)
 [`send_datagram`](./send_datagram.md)
 [`this_user`](./this_user.md)
 [`users`](./users.md)
