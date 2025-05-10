
```
NAME
	this_user - return the current user

SYNOPSIS
	object this_user()


DESCRIPTION
	Return the user for which the current task started.  If the current
	task started from a delayed function call, nil is returned.

```

**See Also:**

 [`connect`](./connect.md)
 [`connect_datagram`](./connect_datagram.md)
 [`datagram_challenge`](./datagram_challenge.md)
 [`query_ip_name`](./query_ip_name.md)
 [`query_ip_number`](./query_ip_number.md)
 [`send_close`](./send_close.md)
 [`send_datagram`](./send_datagram.md)
 [`send_message`](./send_message.md)
 [`users`](./users.md)
