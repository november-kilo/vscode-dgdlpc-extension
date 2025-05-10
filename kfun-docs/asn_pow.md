
```
NAME
	asn_pow - raise one arbitrary size number to the power of another

SYNOPSIS
	string asn_pow(string a, string b, string m)


DESCRIPTION
	Compute a raised to the power b modulo m.  The modulus must be larger
	than zero.  Negative powers can only be used if an inverse modulo m
	exists.
	Arbitrary size numbers are encoded as strings, most significant byte
	first.  The most significant bit in the first byte, when set, indicates
	that the number is negative and encoded in two's complement.

ERRORS
	An error will result if the modulus is less than or equal to zero, or
	if b is negative and no inverse modulo m exists.

```

**See Also:**

 [`asn_add`](./asn_add.md)
 [`asn_div`](./asn_div.md)
 [`asn_mod`](./asn_mod.md)
 [`asn_mult`](./asn_mult.md)
 [`asn_sub`](./asn_sub.md)
