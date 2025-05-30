
```
NAME
	hash_crc16 - 16 bit cyclic redundancy code

SYNOPSIS
	int hash_crc16(string str, string extra...)


DESCRIPTION
	Compute the 16 bit Cyclic Redundancy Code of the concatenation of all
	string arguments, with polynomial:

	    X^16 + X^12 + X^5 + 1

	CRC-16 is considered suitable for strings of up to a total of 4096
	characters.

```

**See Also:**

 [`hash_crc32`](./hash_crc32.md)
 [`hash_string`](./hash_string.md)
