
```
NAME
	asn_cmp - compare two arbitrary size numbers

SYNOPSIS
	int asn_cmp(string a, string b)


DESCRIPTION
	Compare a and b, returning -1 if a is smaller than b, 1 if a is larger
	than b, or 0 if a is equal to b.
	Arbitrary size numbers are encoded as strings, most significant byte
	first.  The most significant bit in the first byte, when set, indicates
	that the number is negative and encoded in two's complement.

```

