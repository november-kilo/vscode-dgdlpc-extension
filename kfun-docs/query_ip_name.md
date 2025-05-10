
```
NAME
	query_ip_name - get the ip name of a user

SYNOPSIS
	string query_ip_name(object user)


DESCRIPTION
	Return the IP name of a user, as a string, or nil if the given object
	is not a user object.  If the IP name could not be resolved, the
	IP number is returned, instead.

```

**See Also:**

 [`connect`](./connect.md)
 [`connect_datagram`](./connect_datagram.md)
 [`datagram_challenge`](./datagram_challenge.md)
 [`query_ip_number`](./query_ip_number.md)
 [`send_close`](./send_close.md)
 [`send_datagram`](./send_datagram.md)
 [`send_message`](./send_message.md)
 [`this_user`](./this_user.md)
 [`users`](./users.md)
