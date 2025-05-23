
```
NAME
	hash_crc32 - 32 bit cyclic redundancy code

SYNOPSIS
	int hash_crc32(string str, string extra...)


DESCRIPTION
	Compute the 32 bit Cyclic Redundancy Code of the concatenation of all
	string arguments, with polynomial:

	    x^32 + x^26 + x^23 + x^22 + x^16 + x^12 + x^11 + x^10 + x^8 +
	    x^7 + x^5 + x^4 + x^2 + x + 1

```

**See Also:**

 [`hash_crc16`](./hash_crc16.md)
 [`hash_string`](./hash_string.md)
