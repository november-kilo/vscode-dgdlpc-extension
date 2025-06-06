
```
NAME
	asn_modinv - modular inverse

SYNOPSIS
	string asn_modinv(string a, string m)


DESCRIPTION
	Compute the inverse of a modulo m.  The modulus must be larger than
	zero.  Arbitrary size numbers are encoded as strings, most significant
	byte first.  The most significant bit in the first byte, when set,
	indicates that the number is negative and encoded in two's complement.

ERRORS
	An error will result if the modulus is less than or equal to zero, or
	if there is no inverse.

```

**See Also:**

 [`asn_mult`](./asn_mult.md)
