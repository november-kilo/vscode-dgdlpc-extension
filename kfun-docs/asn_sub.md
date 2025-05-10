
```
NAME
	asn_sub - subtract one arbitrary size number from another

SYNOPSIS
	string asn_sub(string a, string b, string m)


DESCRIPTION
	Compute a minus b modulo m.  The modulus must be larger than zero.
	Arbitrary size numbers are encoded as strings, most significant byte
	first.  The most significant bit in the first byte, when set, indicates
	that the number is negative and encoded in two's complement.

ERRORS
	An error will result if the modulus is less than or equal to zero.

```

**See Also:**

 [`asn_add`](./asn_add.md)
 [`asn_div`](./asn_div.md)
 [`asn_mod`](./asn_mod.md)
 [`asn_mult`](./asn_mult.md)
 [`asn_pow`](./asn_pow.md)
