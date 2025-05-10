
```
NAME
	send_datagram - send a message on the datagram channel

SYNOPSIS
	int send_datagram(string message)


DESCRIPTION
	Send a message on the datagram channel of a binary user object.  At
	least one message must have been received on the same channel before
	this function can be used.  The return value is the length of the
	message if it could be sent, or 0 otherwise.
	No more than one datagram can be sent per user object during each task.

ERRORS
	An error will result if the current object has no datagram channel.

```

**See Also:**

 [`connect_datagram`](./connect_datagram.md)
 [`datagram_challenge`](./datagram_challenge.md)
 [`query_ip_name`](./query_ip_name.md)
 [`query_ip_number`](./query_ip_number.md)
 [`send_message`](./send_message.md)
 [`this_user`](./this_user.md)
 [`users`](./users.md)
