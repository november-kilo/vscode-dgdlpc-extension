
```
NAME
	asn_add - add two arbitrary size numbers

SYNOPSIS
	string asn_add(string a, string b, string m)


DESCRIPTION
	Compute the sum of a and b modulo m.  The modulus must be larger than
	zero.
	Arbitrary size numbers are encoded as strings, most significant byte
	first.  The most significant bit in the first byte, when set, indicates
	that the number is negative and encoded in two's complement.

ERRORS
	An error will result if the modulus is less than or equal to zero.

```

**See Also:**

 [`asn_div`](./asn_div.md)
 [`asn_mod`](./asn_mod.md)
 [`asn_mult`](./asn_mult.md)
 [`asn_pow`](./asn_pow.md)
 [`asn_sub`](./asn_sub.md)
