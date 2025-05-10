
```
NAME
	asn_lshift - left shift an arbitrary size number

SYNOPSIS
	string asn_lshift(string a, int shift, string m)


DESCRIPTION
	Left shift a by the given amount, and return the result modulo m.
	Arbitrary size numbers are encoded as strings, most significant byte
	first.  The most significant bit in the first byte, when set, indicates
	that the number is negative and encoded in two's complement.

ERRORS
	An error will result if shift is less than zero, or if the modulus is
	less than or equal to zero.

```

**See Also:**

 [`asn_and`](./asn_and.md)
 [`asn_or`](./asn_or.md)
 [`asn_rshift`](./asn_rshift.md)
 [`asn_xor`](./asn_xor.md)
