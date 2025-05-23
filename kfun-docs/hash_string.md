
```
NAME
	hash_string - hash a string with a given algorithm

SYNOPSIS
	string hash_string(string algo, string str, string extra...)


DESCRIPTION
	Hash a string, possibly after concatenation of optional extra
	arguments, with the given algorithm.  The following hash algorithms are
	defined:

	"crypt" Unix password crypt.  Unless the salt is specified in an
		extra argument, it is randomly chosen.  The result is a
		string of 13 characters.
	"MD5"	The MD5 message digest (128 bits).  Extra arguments are
		concatenated before the hash is calculated.  The result is
		a string of 16 characters.
	"SHA1"	The SHA-1 message digest (160 bits).  Extra arguments are
		concatenated before the hash is calculated.  The result is
		a string of 20 characters.

```

**See Also:**

 [`hash_crc16`](./hash_crc16.md)
 [`hash_crc32`](./hash_crc32.md)
