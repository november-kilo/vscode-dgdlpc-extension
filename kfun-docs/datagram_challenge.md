
```
NAME
	datagram_challenge - set the datagram challenge

SYNOPSIS
	void datagram_challenge(string challenge)


DESCRIPTION
	Set the datagram challenge for the current binary user object.  The
	client must send this challenge in order to open the datagram channel,
	after which open_datagram() will be called in the object.  All
	outstanding challenges must be unique.

ERRORS
	An error will result if a challenge has already been set for the
	current object.

```

**See Also:**

 [`query_ip_name`](./query_ip_name.md)
 [`query_ip_number`](./query_ip_number.md)
 [`send_datagram`](./send_datagram.md)
 [`this_user`](./this_user.md)
 [`users`](./users.md)
