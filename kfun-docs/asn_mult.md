
```
NAME
	asn_mult - multiply two arbitrary size numbers

SYNOPSIS
	string asn_mult(string a, string b, string m)


DESCRIPTION
	Compute a multiplied by b modulo m.  The modulus must be larger than
	zero.
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
 [`asn_modinv`](./asn_modinv.md)
 [`asn_pow`](./asn_pow.md)
 [`asn_sub`](./asn_sub.md)
