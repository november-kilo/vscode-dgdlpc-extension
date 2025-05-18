// Generated from LPC.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LPCListener from './LPCListener.js';
import LPCVisitor from './LPCVisitor.js';

const serializedATN = [4,1,94,596,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,1,0,1,0,5,0,93,8,0,10,0,12,0,96,9,0,1,0,1,
0,1,1,1,1,1,1,1,1,3,1,104,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,113,8,2,1,
3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,3,10,130,8,10,
1,10,1,10,3,10,134,8,10,1,10,1,10,1,10,1,11,1,11,1,11,3,11,142,8,11,1,12,
3,12,145,8,12,1,12,1,12,1,12,1,12,3,12,151,8,12,1,13,1,13,3,13,155,8,13,
1,13,1,13,3,13,159,8,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
14,1,14,1,14,1,14,3,14,189,8,14,1,15,1,15,1,15,1,15,3,15,195,8,15,3,15,197,
8,15,1,16,1,16,1,16,5,16,202,8,16,10,16,12,16,205,9,16,1,17,3,17,208,8,17,
1,17,1,17,1,17,3,17,213,8,17,1,17,3,17,216,8,17,1,17,1,17,1,17,3,17,221,
8,17,1,18,3,18,224,8,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,5,19,233,8,19,
10,19,12,19,236,9,19,1,20,1,20,3,20,240,8,20,1,21,4,21,243,8,21,11,21,12,
21,244,1,22,4,22,248,8,22,11,22,12,22,249,1,23,1,23,1,24,1,24,5,24,256,8,
24,10,24,12,24,259,9,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
1,25,1,25,3,25,273,8,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,282,8,26,
1,26,1,26,1,26,1,26,1,26,1,26,5,26,290,8,26,10,26,12,26,293,9,26,1,26,1,
26,3,26,297,8,26,1,27,4,27,300,8,27,11,27,12,27,301,1,27,4,27,305,8,27,11,
27,12,27,306,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,
3,28,321,8,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,
1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,29,343,8,29,1,30,3,30,346,8,30,
1,30,1,30,3,30,350,8,30,1,30,1,30,3,30,354,8,30,1,31,1,31,1,31,1,31,1,32,
1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,372,8,32,1,33,
1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,
35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,396,8,35,1,36,3,36,399,8,36,1,36,1,
36,1,37,1,37,1,37,1,37,1,37,1,37,3,37,409,8,37,3,37,411,8,37,1,37,1,37,1,
38,1,38,1,38,1,38,1,38,1,38,3,38,421,8,38,1,38,3,38,424,8,38,1,38,1,38,1,
38,5,38,429,8,38,10,38,12,38,432,9,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
1,38,1,38,1,38,1,38,1,38,3,38,446,8,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,
38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
1,38,1,38,1,38,1,38,1,38,1,38,3,38,490,8,38,1,38,1,38,1,38,1,38,1,38,1,38,
3,38,498,8,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
3,38,512,8,38,1,38,1,38,3,38,516,8,38,1,38,1,38,1,38,5,38,521,8,38,10,38,
12,38,524,9,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,
39,537,8,39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,3,40,547,8,40,1,40,1,
40,1,40,1,40,1,40,3,40,554,8,40,1,40,1,40,3,40,558,8,40,1,41,1,41,1,41,1,
41,1,41,1,41,3,41,566,8,41,1,41,1,41,1,41,5,41,571,8,41,10,41,12,41,574,
9,41,1,42,1,42,1,42,5,42,579,8,42,10,42,12,42,582,9,42,1,43,1,43,1,43,5,
43,587,8,43,10,43,12,43,590,9,43,1,44,1,44,1,44,1,44,1,44,0,2,76,82,45,0,
2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,
54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,0,10,2,0,63,69,88,
88,1,0,57,61,1,0,19,20,3,0,4,5,12,12,32,32,1,0,6,8,1,0,4,5,1,0,17,18,1,0,
13,16,1,0,33,34,2,0,23,23,38,47,677,0,94,1,0,0,0,2,103,1,0,0,0,4,112,1,0,
0,0,6,114,1,0,0,0,8,116,1,0,0,0,10,118,1,0,0,0,12,120,1,0,0,0,14,122,1,0,
0,0,16,124,1,0,0,0,18,126,1,0,0,0,20,129,1,0,0,0,22,141,1,0,0,0,24,144,1,
0,0,0,26,154,1,0,0,0,28,162,1,0,0,0,30,196,1,0,0,0,32,198,1,0,0,0,34,220,
1,0,0,0,36,223,1,0,0,0,38,229,1,0,0,0,40,237,1,0,0,0,42,242,1,0,0,0,44,247,
1,0,0,0,46,251,1,0,0,0,48,253,1,0,0,0,50,272,1,0,0,0,52,296,1,0,0,0,54,299,
1,0,0,0,56,320,1,0,0,0,58,342,1,0,0,0,60,345,1,0,0,0,62,355,1,0,0,0,64,371,
1,0,0,0,66,373,1,0,0,0,68,376,1,0,0,0,70,395,1,0,0,0,72,398,1,0,0,0,74,410,
1,0,0,0,76,445,1,0,0,0,78,536,1,0,0,0,80,557,1,0,0,0,82,565,1,0,0,0,84,575,
1,0,0,0,86,583,1,0,0,0,88,591,1,0,0,0,90,93,3,4,2,0,91,93,3,2,1,0,92,90,
1,0,0,0,92,91,1,0,0,0,93,96,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,97,1,
0,0,0,96,94,1,0,0,0,97,98,5,0,0,1,98,1,1,0,0,0,99,104,3,36,18,0,100,104,
3,24,12,0,101,104,3,20,10,0,102,104,3,50,25,0,103,99,1,0,0,0,103,100,1,0,
0,0,103,101,1,0,0,0,103,102,1,0,0,0,104,3,1,0,0,0,105,113,3,6,3,0,106,113,
3,8,4,0,107,113,3,10,5,0,108,113,3,12,6,0,109,113,3,14,7,0,110,113,3,16,
8,0,111,113,3,18,9,0,112,105,1,0,0,0,112,106,1,0,0,0,112,107,1,0,0,0,112,
108,1,0,0,0,112,109,1,0,0,0,112,110,1,0,0,0,112,111,1,0,0,0,113,5,1,0,0,
0,114,115,5,49,0,0,115,7,1,0,0,0,116,117,5,50,0,0,117,9,1,0,0,0,118,119,
5,51,0,0,119,11,1,0,0,0,120,121,5,52,0,0,121,13,1,0,0,0,122,123,5,53,0,0,
123,15,1,0,0,0,124,125,5,54,0,0,125,17,1,0,0,0,126,127,5,55,0,0,127,19,1,
0,0,0,128,130,5,57,0,0,129,128,1,0,0,0,129,130,1,0,0,0,130,131,1,0,0,0,131,
133,5,56,0,0,132,134,5,88,0,0,133,132,1,0,0,0,133,134,1,0,0,0,134,135,1,
0,0,0,135,136,3,82,41,0,136,137,5,1,0,0,137,21,1,0,0,0,138,142,3,24,12,0,
139,142,3,20,10,0,140,142,3,36,18,0,141,138,1,0,0,0,141,139,1,0,0,0,141,
140,1,0,0,0,142,23,1,0,0,0,143,145,3,44,22,0,144,143,1,0,0,0,144,145,1,0,
0,0,145,146,1,0,0,0,146,147,3,40,20,0,147,150,3,26,13,0,148,151,3,48,24,
0,149,151,5,1,0,0,150,148,1,0,0,0,150,149,1,0,0,0,151,25,1,0,0,0,152,155,
5,88,0,0,153,155,3,28,14,0,154,152,1,0,0,0,154,153,1,0,0,0,155,156,1,0,0,
0,156,158,5,2,0,0,157,159,3,30,15,0,158,157,1,0,0,0,158,159,1,0,0,0,159,
160,1,0,0,0,160,161,5,3,0,0,161,27,1,0,0,0,162,188,5,62,0,0,163,189,5,4,
0,0,164,189,5,5,0,0,165,189,5,6,0,0,166,189,5,7,0,0,167,189,5,8,0,0,168,
189,5,9,0,0,169,189,5,10,0,0,170,189,5,11,0,0,171,189,5,12,0,0,172,189,5,
13,0,0,173,189,5,14,0,0,174,189,5,15,0,0,175,189,5,16,0,0,176,189,5,17,0,
0,177,189,5,18,0,0,178,189,5,19,0,0,179,189,5,20,0,0,180,181,5,21,0,0,181,
189,5,22,0,0,182,183,5,21,0,0,183,184,5,22,0,0,184,189,5,23,0,0,185,186,
5,21,0,0,186,187,5,24,0,0,187,189,5,22,0,0,188,163,1,0,0,0,188,164,1,0,0,
0,188,165,1,0,0,0,188,166,1,0,0,0,188,167,1,0,0,0,188,168,1,0,0,0,188,169,
1,0,0,0,188,170,1,0,0,0,188,171,1,0,0,0,188,172,1,0,0,0,188,173,1,0,0,0,
188,174,1,0,0,0,188,175,1,0,0,0,188,176,1,0,0,0,188,177,1,0,0,0,188,178,
1,0,0,0,188,179,1,0,0,0,188,180,1,0,0,0,188,182,1,0,0,0,188,185,1,0,0,0,
189,29,1,0,0,0,190,197,5,63,0,0,191,194,3,32,16,0,192,193,5,25,0,0,193,195,
5,26,0,0,194,192,1,0,0,0,194,195,1,0,0,0,195,197,1,0,0,0,196,190,1,0,0,0,
196,191,1,0,0,0,197,31,1,0,0,0,198,203,3,34,17,0,199,200,5,25,0,0,200,202,
3,34,17,0,201,199,1,0,0,0,202,205,1,0,0,0,203,201,1,0,0,0,203,204,1,0,0,
0,204,33,1,0,0,0,205,203,1,0,0,0,206,208,5,61,0,0,207,206,1,0,0,0,207,208,
1,0,0,0,208,209,1,0,0,0,209,210,3,40,20,0,210,212,5,88,0,0,211,213,5,26,
0,0,212,211,1,0,0,0,212,213,1,0,0,0,213,221,1,0,0,0,214,216,5,61,0,0,215,
214,1,0,0,0,215,216,1,0,0,0,216,217,1,0,0,0,217,218,3,40,20,0,218,219,5,
88,0,0,219,221,1,0,0,0,220,207,1,0,0,0,220,215,1,0,0,0,221,35,1,0,0,0,222,
224,3,44,22,0,223,222,1,0,0,0,223,224,1,0,0,0,224,225,1,0,0,0,225,226,3,
40,20,0,226,227,3,38,19,0,227,228,5,1,0,0,228,37,1,0,0,0,229,234,5,88,0,
0,230,231,5,25,0,0,231,233,5,88,0,0,232,230,1,0,0,0,233,236,1,0,0,0,234,
232,1,0,0,0,234,235,1,0,0,0,235,39,1,0,0,0,236,234,1,0,0,0,237,239,7,0,0,
0,238,240,3,42,21,0,239,238,1,0,0,0,239,240,1,0,0,0,240,41,1,0,0,0,241,243,
5,6,0,0,242,241,1,0,0,0,243,244,1,0,0,0,244,242,1,0,0,0,244,245,1,0,0,0,
245,43,1,0,0,0,246,248,3,46,23,0,247,246,1,0,0,0,248,249,1,0,0,0,249,247,
1,0,0,0,249,250,1,0,0,0,250,45,1,0,0,0,251,252,7,1,0,0,252,47,1,0,0,0,253,
257,5,27,0,0,254,256,3,50,25,0,255,254,1,0,0,0,256,259,1,0,0,0,257,255,1,
0,0,0,257,258,1,0,0,0,258,260,1,0,0,0,259,257,1,0,0,0,260,261,5,28,0,0,261,
49,1,0,0,0,262,273,3,36,18,0,263,273,3,48,24,0,264,273,3,72,36,0,265,273,
3,52,26,0,266,273,3,58,29,0,267,273,3,74,37,0,268,273,3,62,31,0,269,273,
3,66,33,0,270,273,3,68,34,0,271,273,3,70,35,0,272,262,1,0,0,0,272,263,1,
0,0,0,272,264,1,0,0,0,272,265,1,0,0,0,272,266,1,0,0,0,272,267,1,0,0,0,272,
268,1,0,0,0,272,269,1,0,0,0,272,270,1,0,0,0,272,271,1,0,0,0,273,51,1,0,0,
0,274,275,5,70,0,0,275,276,5,2,0,0,276,277,3,76,38,0,277,278,5,3,0,0,278,
281,3,50,25,0,279,280,5,71,0,0,280,282,3,50,25,0,281,279,1,0,0,0,281,282,
1,0,0,0,282,297,1,0,0,0,283,284,5,72,0,0,284,285,5,2,0,0,285,286,3,76,38,
0,286,287,5,3,0,0,287,291,5,27,0,0,288,290,3,54,27,0,289,288,1,0,0,0,290,
293,1,0,0,0,291,289,1,0,0,0,291,292,1,0,0,0,292,294,1,0,0,0,293,291,1,0,
0,0,294,295,5,28,0,0,295,297,1,0,0,0,296,274,1,0,0,0,296,283,1,0,0,0,297,
53,1,0,0,0,298,300,3,56,28,0,299,298,1,0,0,0,300,301,1,0,0,0,301,299,1,0,
0,0,301,302,1,0,0,0,302,304,1,0,0,0,303,305,3,50,25,0,304,303,1,0,0,0,305,
306,1,0,0,0,306,304,1,0,0,0,306,307,1,0,0,0,307,55,1,0,0,0,308,309,5,73,
0,0,309,310,3,76,38,0,310,311,5,24,0,0,311,312,3,76,38,0,312,313,5,29,0,
0,313,321,1,0,0,0,314,315,5,73,0,0,315,316,3,76,38,0,316,317,5,29,0,0,317,
321,1,0,0,0,318,319,5,74,0,0,319,321,5,29,0,0,320,308,1,0,0,0,320,314,1,
0,0,0,320,318,1,0,0,0,321,57,1,0,0,0,322,323,5,75,0,0,323,324,5,2,0,0,324,
325,3,76,38,0,325,326,5,3,0,0,326,327,3,50,25,0,327,343,1,0,0,0,328,329,
5,76,0,0,329,330,3,50,25,0,330,331,5,75,0,0,331,332,5,2,0,0,332,333,3,76,
38,0,333,334,5,3,0,0,334,335,5,1,0,0,335,343,1,0,0,0,336,337,5,77,0,0,337,
338,5,2,0,0,338,339,3,60,30,0,339,340,5,3,0,0,340,341,3,50,25,0,341,343,
1,0,0,0,342,322,1,0,0,0,342,328,1,0,0,0,342,336,1,0,0,0,343,59,1,0,0,0,344,
346,3,76,38,0,345,344,1,0,0,0,345,346,1,0,0,0,346,347,1,0,0,0,347,349,5,
1,0,0,348,350,3,76,38,0,349,348,1,0,0,0,349,350,1,0,0,0,350,351,1,0,0,0,
351,353,5,1,0,0,352,354,3,76,38,0,353,352,1,0,0,0,353,354,1,0,0,0,354,61,
1,0,0,0,355,356,5,82,0,0,356,357,3,48,24,0,357,358,3,64,32,0,358,63,1,0,
0,0,359,360,5,83,0,0,360,372,3,48,24,0,361,362,5,83,0,0,362,363,5,2,0,0,
363,364,5,26,0,0,364,365,5,3,0,0,365,372,3,48,24,0,366,367,5,83,0,0,367,
368,5,2,0,0,368,369,5,88,0,0,369,370,5,3,0,0,370,372,3,48,24,0,371,359,1,
0,0,0,371,361,1,0,0,0,371,366,1,0,0,0,372,65,1,0,0,0,373,374,5,83,0,0,374,
375,3,48,24,0,375,67,1,0,0,0,376,377,5,84,0,0,377,378,5,2,0,0,378,379,3,
76,38,0,379,380,5,1,0,0,380,381,3,76,38,0,381,382,5,3,0,0,382,383,3,48,24,
0,383,69,1,0,0,0,384,385,5,88,0,0,385,386,5,29,0,0,386,396,3,50,25,0,387,
388,5,73,0,0,388,389,3,76,38,0,389,390,5,29,0,0,390,391,3,50,25,0,391,396,
1,0,0,0,392,393,5,74,0,0,393,394,5,29,0,0,394,396,3,50,25,0,395,384,1,0,
0,0,395,387,1,0,0,0,395,392,1,0,0,0,396,71,1,0,0,0,397,399,3,76,38,0,398,
397,1,0,0,0,398,399,1,0,0,0,399,400,1,0,0,0,400,401,5,1,0,0,401,73,1,0,0,
0,402,411,5,78,0,0,403,411,5,79,0,0,404,405,5,85,0,0,405,411,5,88,0,0,406,
408,5,80,0,0,407,409,3,76,38,0,408,407,1,0,0,0,408,409,1,0,0,0,409,411,1,
0,0,0,410,402,1,0,0,0,410,403,1,0,0,0,410,404,1,0,0,0,410,406,1,0,0,0,411,
412,1,0,0,0,412,413,5,1,0,0,413,75,1,0,0,0,414,415,6,38,-1,0,415,446,3,78,
39,0,416,417,5,81,0,0,417,423,5,88,0,0,418,420,5,2,0,0,419,421,3,84,42,0,
420,419,1,0,0,0,420,421,1,0,0,0,421,422,1,0,0,0,422,424,5,3,0,0,423,418,
1,0,0,0,423,424,1,0,0,0,424,446,1,0,0,0,425,426,5,2,0,0,426,430,3,40,20,
0,427,429,5,6,0,0,428,427,1,0,0,0,429,432,1,0,0,0,430,428,1,0,0,0,430,431,
1,0,0,0,431,433,1,0,0,0,432,430,1,0,0,0,433,434,5,3,0,0,434,435,3,76,38,
19,435,446,1,0,0,0,436,437,7,2,0,0,437,446,3,76,38,16,438,439,7,3,0,0,439,
446,3,76,38,14,440,441,5,83,0,0,441,442,5,2,0,0,442,443,3,76,38,0,443,444,
5,3,0,0,444,446,1,0,0,0,445,414,1,0,0,0,445,416,1,0,0,0,445,425,1,0,0,0,
445,436,1,0,0,0,445,438,1,0,0,0,445,440,1,0,0,0,446,522,1,0,0,0,447,448,
10,13,0,0,448,449,7,4,0,0,449,521,3,76,38,14,450,451,10,12,0,0,451,452,7,
5,0,0,452,521,3,76,38,13,453,454,10,11,0,0,454,455,7,6,0,0,455,521,3,76,
38,12,456,457,10,10,0,0,457,458,7,7,0,0,458,521,3,76,38,11,459,460,10,9,
0,0,460,461,7,8,0,0,461,521,3,76,38,10,462,463,10,8,0,0,463,464,5,9,0,0,
464,521,3,76,38,9,465,466,10,7,0,0,466,467,5,10,0,0,467,521,3,76,38,8,468,
469,10,6,0,0,469,470,5,11,0,0,470,521,3,76,38,7,471,472,10,5,0,0,472,473,
5,35,0,0,473,521,3,76,38,6,474,475,10,4,0,0,475,476,5,36,0,0,476,521,3,76,
38,5,477,478,10,3,0,0,478,479,5,37,0,0,479,480,3,76,38,0,480,481,5,29,0,
0,481,482,3,76,38,4,482,521,1,0,0,0,483,484,10,2,0,0,484,485,7,9,0,0,485,
521,3,76,38,3,486,487,10,23,0,0,487,489,5,2,0,0,488,490,3,84,42,0,489,488,
1,0,0,0,489,490,1,0,0,0,490,491,1,0,0,0,491,521,5,3,0,0,492,493,10,22,0,
0,493,494,5,30,0,0,494,495,5,88,0,0,495,497,5,2,0,0,496,498,3,84,42,0,497,
496,1,0,0,0,497,498,1,0,0,0,498,499,1,0,0,0,499,521,5,3,0,0,500,501,10,21,
0,0,501,502,5,31,0,0,502,521,3,82,41,0,503,504,10,18,0,0,504,505,5,21,0,
0,505,506,3,76,38,0,506,507,5,22,0,0,507,521,1,0,0,0,508,509,10,17,0,0,509,
511,5,21,0,0,510,512,3,76,38,0,511,510,1,0,0,0,511,512,1,0,0,0,512,513,1,
0,0,0,513,515,5,24,0,0,514,516,3,76,38,0,515,514,1,0,0,0,515,516,1,0,0,0,
516,517,1,0,0,0,517,521,5,22,0,0,518,519,10,15,0,0,519,521,7,2,0,0,520,447,
1,0,0,0,520,450,1,0,0,0,520,453,1,0,0,0,520,456,1,0,0,0,520,459,1,0,0,0,
520,462,1,0,0,0,520,465,1,0,0,0,520,468,1,0,0,0,520,471,1,0,0,0,520,474,
1,0,0,0,520,477,1,0,0,0,520,483,1,0,0,0,520,486,1,0,0,0,520,492,1,0,0,0,
520,500,1,0,0,0,520,503,1,0,0,0,520,508,1,0,0,0,520,518,1,0,0,0,521,524,
1,0,0,0,522,520,1,0,0,0,522,523,1,0,0,0,523,77,1,0,0,0,524,522,1,0,0,0,525,
526,5,2,0,0,526,527,3,76,38,0,527,528,5,3,0,0,528,537,1,0,0,0,529,537,3,
80,40,0,530,537,5,88,0,0,531,532,5,48,0,0,532,537,5,88,0,0,533,534,5,88,
0,0,534,535,5,48,0,0,535,537,5,88,0,0,536,525,1,0,0,0,536,529,1,0,0,0,536,
530,1,0,0,0,536,531,1,0,0,0,536,533,1,0,0,0,537,79,1,0,0,0,538,558,5,86,
0,0,539,558,5,87,0,0,540,558,5,89,0,0,541,558,5,91,0,0,542,558,5,90,0,0,
543,544,5,2,0,0,544,546,5,27,0,0,545,547,3,84,42,0,546,545,1,0,0,0,546,547,
1,0,0,0,547,548,1,0,0,0,548,549,5,28,0,0,549,558,5,3,0,0,550,551,5,2,0,0,
551,553,5,21,0,0,552,554,3,86,43,0,553,552,1,0,0,0,553,554,1,0,0,0,554,555,
1,0,0,0,555,556,5,22,0,0,556,558,5,3,0,0,557,538,1,0,0,0,557,539,1,0,0,0,
557,540,1,0,0,0,557,541,1,0,0,0,557,542,1,0,0,0,557,543,1,0,0,0,557,550,
1,0,0,0,558,81,1,0,0,0,559,560,6,41,-1,0,560,566,5,91,0,0,561,562,5,2,0,
0,562,563,3,82,41,0,563,564,5,3,0,0,564,566,1,0,0,0,565,559,1,0,0,0,565,
561,1,0,0,0,566,572,1,0,0,0,567,568,10,1,0,0,568,569,5,4,0,0,569,571,5,91,
0,0,570,567,1,0,0,0,571,574,1,0,0,0,572,570,1,0,0,0,572,573,1,0,0,0,573,
83,1,0,0,0,574,572,1,0,0,0,575,580,3,76,38,0,576,577,5,25,0,0,577,579,3,
76,38,0,578,576,1,0,0,0,579,582,1,0,0,0,580,578,1,0,0,0,580,581,1,0,0,0,
581,85,1,0,0,0,582,580,1,0,0,0,583,588,3,88,44,0,584,585,5,25,0,0,585,587,
3,88,44,0,586,584,1,0,0,0,587,590,1,0,0,0,588,586,1,0,0,0,588,589,1,0,0,
0,589,87,1,0,0,0,590,588,1,0,0,0,591,592,3,76,38,0,592,593,5,29,0,0,593,
594,3,76,38,0,594,89,1,0,0,0,59,92,94,103,112,129,133,141,144,150,154,158,
188,194,196,203,207,212,215,220,223,234,239,244,249,257,272,281,291,296,
301,306,320,342,345,349,353,371,395,398,408,410,420,423,430,445,489,497,
511,515,520,522,536,546,553,557,565,572,580,588];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LPCParser extends antlr4.Parser {

    static grammarFileName = "LPC.g4";
    static literalNames = [ null, "';'", "'('", "')'", "'+'", "'-'", "'*'", 
                            "'/'", "'%'", "'&'", "'^'", "'|'", "'~'", "'<'", 
                            "'>'", "'>='", "'<='", "'<<'", "'>>'", "'++'", 
                            "'--'", "'['", "']'", "'='", "'..'", "','", 
                            "'...'", "'{'", "'}'", "':'", "'->'", "'<-'", 
                            "'!'", "'=='", "'!='", "'&&'", "'||'", "'?'", 
                            "'+='", "'-='", "'*='", "'/='", "'%='", "'&='", 
                            "'^='", "'|='", "'<<='", "'>>='", "'::'", null, 
                            null, null, null, null, null, null, "'inherit'", 
                            "'private'", "'static'", "'atomic'", "'nomask'", 
                            "'varargs'", "'operator'", "'void'", "'int'", 
                            "'float'", "'string'", "'object'", "'mapping'", 
                            "'mixed'", "'if'", "'else'", "'switch'", "'case'", 
                            "'default'", "'while'", "'do'", "'for'", "'break'", 
                            "'continue'", "'return'", "'new'", "'try'", 
                            "'catch'", "'rlimits'", "'goto'", "'nil'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "INCLUDE", "DEFINE", "IFDEF", "IFNDEF", 
                             "ELSEDIR", "ENDIF", "UNDEF", "INHERIT", "PRIVATE", 
                             "STATIC", "ATOMIC", "NOMASK", "VARARGS", "OPERATOR", 
                             "VOID", "INT", "FLOAT", "STRING", "OBJECT", 
                             "MAPPING", "MIXED", "IF", "ELSE", "SWITCH", 
                             "CASE", "DEFAULT", "WHILE", "DO", "FOR", "BREAK", 
                             "CONTINUE", "RETURN", "NEW", "TRY", "CATCH", 
                             "RLIMITS", "GOTO", "NIL", "INTEGER", "IDENTIFIER", 
                             "FLOAT_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", 
                             "WS", "COMMENT", "LINE_COMMENT" ];
    static ruleNames = [ "program", "programElement", "preprocessorDirective", 
                         "includeDirective", "defineDirective", "ifdefDirective", 
                         "ifndefDirective", "elseDirective", "endifDirective", 
                         "undefDirective", "inheritDeclaration", "declaration", 
                         "functionDeclaration", "functionDeclarator", "operatorName", 
                         "formalParameters", "parameterList", "parameterDeclaration", 
                         "variableDeclaration", "variableDeclarators", "typeSpecifier", 
                         "arraySpecifier", "modifiers", "modifier", "block", 
                         "statement", "selectionStatement", "switchSection", 
                         "switchLabel", "iterationStatement", "forControl", 
                         "tryStatement", "catchStatement", "catchStandAloneStatement", 
                         "rlimitsStatement", "labeledStatement", "expressionStatement", 
                         "jumpStatement", "expression", "primary", "literal", 
                         "stringExpression", "expressionList", "mappingList", 
                         "mappingEntry" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LPCParser.ruleNames;
        this.literalNames = LPCParser.literalNames;
        this.symbolicNames = LPCParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 38:
    	    		return this.expression_sempred(localctx, predIndex);
    	case 41:
    	    		return this.stringExpression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 13);
    		case 1:
    			return this.precpred(this._ctx, 12);
    		case 2:
    			return this.precpred(this._ctx, 11);
    		case 3:
    			return this.precpred(this._ctx, 10);
    		case 4:
    			return this.precpred(this._ctx, 9);
    		case 5:
    			return this.precpred(this._ctx, 8);
    		case 6:
    			return this.precpred(this._ctx, 7);
    		case 7:
    			return this.precpred(this._ctx, 6);
    		case 8:
    			return this.precpred(this._ctx, 5);
    		case 9:
    			return this.precpred(this._ctx, 4);
    		case 10:
    			return this.precpred(this._ctx, 3);
    		case 11:
    			return this.precpred(this._ctx, 2);
    		case 12:
    			return this.precpred(this._ctx, 23);
    		case 13:
    			return this.precpred(this._ctx, 22);
    		case 14:
    			return this.precpred(this._ctx, 21);
    		case 15:
    			return this.precpred(this._ctx, 18);
    		case 16:
    			return this.precpred(this._ctx, 17);
    		case 17:
    			return this.precpred(this._ctx, 15);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    stringExpression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 18:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LPCParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 135794742) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 3221159937) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 268435327) !== 0)) {
	            this.state = 92;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 49:
	            case 50:
	            case 51:
	            case 52:
	            case 53:
	            case 54:
	            case 55:
	                this.state = 90;
	                this.preprocessorDirective();
	                break;
	            case 1:
	            case 2:
	            case 4:
	            case 5:
	            case 12:
	            case 19:
	            case 20:
	            case 27:
	            case 32:
	            case 48:
	            case 56:
	            case 57:
	            case 58:
	            case 59:
	            case 60:
	            case 61:
	            case 63:
	            case 64:
	            case 65:
	            case 66:
	            case 67:
	            case 68:
	            case 69:
	            case 70:
	            case 72:
	            case 73:
	            case 74:
	            case 75:
	            case 76:
	            case 77:
	            case 78:
	            case 79:
	            case 80:
	            case 81:
	            case 82:
	            case 83:
	            case 84:
	            case 85:
	            case 86:
	            case 87:
	            case 88:
	            case 89:
	            case 90:
	            case 91:
	                this.state = 91;
	                this.programElement();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 96;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 97;
	        this.match(LPCParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	programElement() {
	    let localctx = new ProgramElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LPCParser.RULE_programElement);
	    try {
	        this.state = 103;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 99;
	            this.variableDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 100;
	            this.functionDeclaration();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 101;
	            this.inheritDeclaration();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 102;
	            this.statement();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	preprocessorDirective() {
	    let localctx = new PreprocessorDirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LPCParser.RULE_preprocessorDirective);
	    try {
	        this.state = 112;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 49:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 105;
	            this.includeDirective();
	            break;
	        case 50:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 106;
	            this.defineDirective();
	            break;
	        case 51:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 107;
	            this.ifdefDirective();
	            break;
	        case 52:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 108;
	            this.ifndefDirective();
	            break;
	        case 53:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 109;
	            this.elseDirective();
	            break;
	        case 54:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 110;
	            this.endifDirective();
	            break;
	        case 55:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 111;
	            this.undefDirective();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	includeDirective() {
	    let localctx = new IncludeDirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LPCParser.RULE_includeDirective);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(LPCParser.INCLUDE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	defineDirective() {
	    let localctx = new DefineDirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LPCParser.RULE_defineDirective);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.match(LPCParser.DEFINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifdefDirective() {
	    let localctx = new IfdefDirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LPCParser.RULE_ifdefDirective);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(LPCParser.IFDEF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifndefDirective() {
	    let localctx = new IfndefDirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LPCParser.RULE_ifndefDirective);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(LPCParser.IFNDEF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseDirective() {
	    let localctx = new ElseDirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LPCParser.RULE_elseDirective);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(LPCParser.ELSEDIR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	endifDirective() {
	    let localctx = new EndifDirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LPCParser.RULE_endifDirective);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.match(LPCParser.ENDIF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	undefDirective() {
	    let localctx = new UndefDirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LPCParser.RULE_undefDirective);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(LPCParser.UNDEF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inheritDeclaration() {
	    let localctx = new InheritDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LPCParser.RULE_inheritDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===57) {
	            this.state = 128;
	            this.match(LPCParser.PRIVATE);
	        }

	        this.state = 131;
	        this.match(LPCParser.INHERIT);
	        this.state = 133;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===88) {
	            this.state = 132;
	            this.match(LPCParser.IDENTIFIER);
	        }

	        this.state = 135;
	        this.stringExpression(0);
	        this.state = 136;
	        this.match(LPCParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LPCParser.RULE_declaration);
	    try {
	        this.state = 141;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 138;
	            this.functionDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 139;
	            this.inheritDeclaration();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 140;
	            this.variableDeclaration();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LPCParser.RULE_functionDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 57)) & ~0x1f) === 0 && ((1 << (_la - 57)) & 31) !== 0)) {
	            this.state = 143;
	            this.modifiers();
	        }

	        this.state = 146;
	        this.typeSpecifier();
	        this.state = 147;
	        this.functionDeclarator();
	        this.state = 150;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	            this.state = 148;
	            this.block();
	            break;
	        case 1:
	            this.state = 149;
	            this.match(LPCParser.T__0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDeclarator() {
	    let localctx = new FunctionDeclaratorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LPCParser.RULE_functionDeclarator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 88:
	            this.state = 152;
	            this.match(LPCParser.IDENTIFIER);
	            break;
	        case 62:
	            this.state = 153;
	            this.operatorName();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 156;
	        this.match(LPCParser.T__1);
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 61)) & ~0x1f) === 0 && ((1 << (_la - 61)) & 134218237) !== 0)) {
	            this.state = 157;
	            this.formalParameters();
	        }

	        this.state = 160;
	        this.match(LPCParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operatorName() {
	    let localctx = new OperatorNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, LPCParser.RULE_operatorName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(LPCParser.OPERATOR);
	        this.state = 188;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 163;
	            this.match(LPCParser.T__3);
	            break;

	        case 2:
	            this.state = 164;
	            this.match(LPCParser.T__4);
	            break;

	        case 3:
	            this.state = 165;
	            this.match(LPCParser.T__5);
	            break;

	        case 4:
	            this.state = 166;
	            this.match(LPCParser.T__6);
	            break;

	        case 5:
	            this.state = 167;
	            this.match(LPCParser.T__7);
	            break;

	        case 6:
	            this.state = 168;
	            this.match(LPCParser.T__8);
	            break;

	        case 7:
	            this.state = 169;
	            this.match(LPCParser.T__9);
	            break;

	        case 8:
	            this.state = 170;
	            this.match(LPCParser.T__10);
	            break;

	        case 9:
	            this.state = 171;
	            this.match(LPCParser.T__11);
	            break;

	        case 10:
	            this.state = 172;
	            this.match(LPCParser.T__12);
	            break;

	        case 11:
	            this.state = 173;
	            this.match(LPCParser.T__13);
	            break;

	        case 12:
	            this.state = 174;
	            this.match(LPCParser.T__14);
	            break;

	        case 13:
	            this.state = 175;
	            this.match(LPCParser.T__15);
	            break;

	        case 14:
	            this.state = 176;
	            this.match(LPCParser.T__16);
	            break;

	        case 15:
	            this.state = 177;
	            this.match(LPCParser.T__17);
	            break;

	        case 16:
	            this.state = 178;
	            this.match(LPCParser.T__18);
	            break;

	        case 17:
	            this.state = 179;
	            this.match(LPCParser.T__19);
	            break;

	        case 18:
	            this.state = 180;
	            this.match(LPCParser.T__20);
	            this.state = 181;
	            this.match(LPCParser.T__21);
	            break;

	        case 19:
	            this.state = 182;
	            this.match(LPCParser.T__20);
	            this.state = 183;
	            this.match(LPCParser.T__21);
	            this.state = 184;
	            this.match(LPCParser.T__22);
	            break;

	        case 20:
	            this.state = 185;
	            this.match(LPCParser.T__20);
	            this.state = 186;
	            this.match(LPCParser.T__23);
	            this.state = 187;
	            this.match(LPCParser.T__21);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formalParameters() {
	    let localctx = new FormalParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, LPCParser.RULE_formalParameters);
	    var _la = 0;
	    try {
	        this.state = 196;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 190;
	            this.match(LPCParser.VOID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 191;
	            this.parameterList();
	            this.state = 194;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 192;
	                this.match(LPCParser.T__24);
	                this.state = 193;
	                this.match(LPCParser.T__25);
	            }

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterList() {
	    let localctx = new ParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, LPCParser.RULE_parameterList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this.parameterDeclaration();
	        this.state = 203;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 199;
	                this.match(LPCParser.T__24);
	                this.state = 200;
	                this.parameterDeclaration(); 
	            }
	            this.state = 205;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterDeclaration() {
	    let localctx = new ParameterDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, LPCParser.RULE_parameterDeclaration);
	    var _la = 0;
	    try {
	        this.state = 220;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 207;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===61) {
	                this.state = 206;
	                this.match(LPCParser.VARARGS);
	            }

	            this.state = 209;
	            this.typeSpecifier();
	            this.state = 210;
	            this.match(LPCParser.IDENTIFIER);
	            this.state = 212;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===26) {
	                this.state = 211;
	                this.match(LPCParser.T__25);
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 215;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===61) {
	                this.state = 214;
	                this.match(LPCParser.VARARGS);
	            }

	            this.state = 217;
	            this.typeSpecifier();
	            this.state = 218;
	            this.match(LPCParser.IDENTIFIER);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDeclaration() {
	    let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, LPCParser.RULE_variableDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 57)) & ~0x1f) === 0 && ((1 << (_la - 57)) & 31) !== 0)) {
	            this.state = 222;
	            this.modifiers();
	        }

	        this.state = 225;
	        this.typeSpecifier();
	        this.state = 226;
	        this.variableDeclarators();
	        this.state = 227;
	        this.match(LPCParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDeclarators() {
	    let localctx = new VariableDeclaratorsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, LPCParser.RULE_variableDeclarators);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this.match(LPCParser.IDENTIFIER);
	        this.state = 234;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===25) {
	            this.state = 230;
	            this.match(LPCParser.T__24);
	            this.state = 231;
	            this.match(LPCParser.IDENTIFIER);
	            this.state = 236;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeSpecifier() {
	    let localctx = new TypeSpecifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, LPCParser.RULE_typeSpecifier);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 237;
	        _la = this._input.LA(1);
	        if(!(((((_la - 63)) & ~0x1f) === 0 && ((1 << (_la - 63)) & 33554559) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 239;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        if(la_===1) {
	            this.state = 238;
	            this.arraySpecifier();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arraySpecifier() {
	    let localctx = new ArraySpecifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, LPCParser.RULE_arraySpecifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 241;
	        		this.match(LPCParser.T__5);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 244; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,22, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	modifiers() {
	    let localctx = new ModifiersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, LPCParser.RULE_modifiers);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 246;
	            this.modifier();
	            this.state = 249; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 57)) & ~0x1f) === 0 && ((1 << (_la - 57)) & 31) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	modifier() {
	    let localctx = new ModifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, LPCParser.RULE_modifier);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 251;
	        _la = this._input.LA(1);
	        if(!(((((_la - 57)) & ~0x1f) === 0 && ((1 << (_la - 57)) & 31) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, LPCParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        this.match(LPCParser.T__26);
	        this.state = 257;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 135794742) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 3187736577) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 268435327) !== 0)) {
	            this.state = 254;
	            this.statement();
	            this.state = 259;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 260;
	        this.match(LPCParser.T__27);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, LPCParser.RULE_statement);
	    try {
	        this.state = 272;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 262;
	            this.variableDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 263;
	            this.block();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 264;
	            this.expressionStatement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 265;
	            this.selectionStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 266;
	            this.iterationStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 267;
	            this.jumpStatement();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 268;
	            this.tryStatement();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 269;
	            this.catchStandAloneStatement();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 270;
	            this.rlimitsStatement();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 271;
	            this.labeledStatement();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	selectionStatement() {
	    let localctx = new SelectionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, LPCParser.RULE_selectionStatement);
	    var _la = 0;
	    try {
	        this.state = 296;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 70:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 274;
	            this.match(LPCParser.IF);
	            this.state = 275;
	            this.match(LPCParser.T__1);
	            this.state = 276;
	            this.expression(0);
	            this.state = 277;
	            this.match(LPCParser.T__2);
	            this.state = 278;
	            this.statement();
	            this.state = 281;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	            if(la_===1) {
	                this.state = 279;
	                this.match(LPCParser.ELSE);
	                this.state = 280;
	                this.statement();

	            }
	            break;
	        case 72:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 283;
	            this.match(LPCParser.SWITCH);
	            this.state = 284;
	            this.match(LPCParser.T__1);
	            this.state = 285;
	            this.expression(0);
	            this.state = 286;
	            this.match(LPCParser.T__2);
	            this.state = 287;
	            this.match(LPCParser.T__26);
	            this.state = 291;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===73 || _la===74) {
	                this.state = 288;
	                this.switchSection();
	                this.state = 293;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 294;
	            this.match(LPCParser.T__27);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	switchSection() {
	    let localctx = new SwitchSectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, LPCParser.RULE_switchSection);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 299; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 298;
	        		this.switchLabel();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 301; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,29, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 304; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 303;
	        		this.statement();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 306; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,30, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	switchLabel() {
	    let localctx = new SwitchLabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, LPCParser.RULE_switchLabel);
	    try {
	        this.state = 320;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 308;
	            this.match(LPCParser.CASE);
	            this.state = 309;
	            this.expression(0);
	            this.state = 310;
	            this.match(LPCParser.T__23);
	            this.state = 311;
	            this.expression(0);
	            this.state = 312;
	            this.match(LPCParser.T__28);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 314;
	            this.match(LPCParser.CASE);
	            this.state = 315;
	            this.expression(0);
	            this.state = 316;
	            this.match(LPCParser.T__28);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 318;
	            this.match(LPCParser.DEFAULT);
	            this.state = 319;
	            this.match(LPCParser.T__28);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	iterationStatement() {
	    let localctx = new IterationStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, LPCParser.RULE_iterationStatement);
	    try {
	        this.state = 342;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 75:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 322;
	            this.match(LPCParser.WHILE);
	            this.state = 323;
	            this.match(LPCParser.T__1);
	            this.state = 324;
	            this.expression(0);
	            this.state = 325;
	            this.match(LPCParser.T__2);
	            this.state = 326;
	            this.statement();
	            break;
	        case 76:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 328;
	            this.match(LPCParser.DO);
	            this.state = 329;
	            this.statement();
	            this.state = 330;
	            this.match(LPCParser.WHILE);
	            this.state = 331;
	            this.match(LPCParser.T__1);
	            this.state = 332;
	            this.expression(0);
	            this.state = 333;
	            this.match(LPCParser.T__2);
	            this.state = 334;
	            this.match(LPCParser.T__0);
	            break;
	        case 77:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 336;
	            this.match(LPCParser.FOR);
	            this.state = 337;
	            this.match(LPCParser.T__1);
	            this.state = 338;
	            this.forControl();
	            this.state = 339;
	            this.match(LPCParser.T__2);
	            this.state = 340;
	            this.statement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forControl() {
	    let localctx = new ForControlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, LPCParser.RULE_forControl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 345;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1577012) !== 0) || _la===32 || _la===48 || ((((_la - 81)) & ~0x1f) === 0 && ((1 << (_la - 81)) & 2021) !== 0)) {
	            this.state = 344;
	            this.expression(0);
	        }

	        this.state = 347;
	        this.match(LPCParser.T__0);
	        this.state = 349;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1577012) !== 0) || _la===32 || _la===48 || ((((_la - 81)) & ~0x1f) === 0 && ((1 << (_la - 81)) & 2021) !== 0)) {
	            this.state = 348;
	            this.expression(0);
	        }

	        this.state = 351;
	        this.match(LPCParser.T__0);
	        this.state = 353;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1577012) !== 0) || _la===32 || _la===48 || ((((_la - 81)) & ~0x1f) === 0 && ((1 << (_la - 81)) & 2021) !== 0)) {
	            this.state = 352;
	            this.expression(0);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tryStatement() {
	    let localctx = new TryStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, LPCParser.RULE_tryStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 355;
	        this.match(LPCParser.TRY);
	        this.state = 356;
	        this.block();
	        this.state = 357;
	        this.catchStatement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	catchStatement() {
	    let localctx = new CatchStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, LPCParser.RULE_catchStatement);
	    try {
	        this.state = 371;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 359;
	            this.match(LPCParser.CATCH);
	            this.state = 360;
	            this.block();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 361;
	            this.match(LPCParser.CATCH);
	            this.state = 362;
	            this.match(LPCParser.T__1);
	            this.state = 363;
	            this.match(LPCParser.T__25);
	            this.state = 364;
	            this.match(LPCParser.T__2);
	            this.state = 365;
	            this.block();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 366;
	            this.match(LPCParser.CATCH);
	            this.state = 367;
	            this.match(LPCParser.T__1);
	            this.state = 368;
	            this.match(LPCParser.IDENTIFIER);
	            this.state = 369;
	            this.match(LPCParser.T__2);
	            this.state = 370;
	            this.block();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	catchStandAloneStatement() {
	    let localctx = new CatchStandAloneStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, LPCParser.RULE_catchStandAloneStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 373;
	        this.match(LPCParser.CATCH);
	        this.state = 374;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rlimitsStatement() {
	    let localctx = new RlimitsStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, LPCParser.RULE_rlimitsStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 376;
	        this.match(LPCParser.RLIMITS);
	        this.state = 377;
	        this.match(LPCParser.T__1);
	        this.state = 378;
	        this.expression(0);
	        this.state = 379;
	        this.match(LPCParser.T__0);
	        this.state = 380;
	        this.expression(0);
	        this.state = 381;
	        this.match(LPCParser.T__2);
	        this.state = 382;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	labeledStatement() {
	    let localctx = new LabeledStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, LPCParser.RULE_labeledStatement);
	    try {
	        this.state = 395;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 88:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 384;
	            this.match(LPCParser.IDENTIFIER);
	            this.state = 385;
	            this.match(LPCParser.T__28);
	            this.state = 386;
	            this.statement();
	            break;
	        case 73:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 387;
	            this.match(LPCParser.CASE);
	            this.state = 388;
	            this.expression(0);
	            this.state = 389;
	            this.match(LPCParser.T__28);
	            this.state = 390;
	            this.statement();
	            break;
	        case 74:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 392;
	            this.match(LPCParser.DEFAULT);
	            this.state = 393;
	            this.match(LPCParser.T__28);
	            this.state = 394;
	            this.statement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionStatement() {
	    let localctx = new ExpressionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, LPCParser.RULE_expressionStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 398;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1577012) !== 0) || _la===32 || _la===48 || ((((_la - 81)) & ~0x1f) === 0 && ((1 << (_la - 81)) & 2021) !== 0)) {
	            this.state = 397;
	            this.expression(0);
	        }

	        this.state = 400;
	        this.match(LPCParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	jumpStatement() {
	    let localctx = new JumpStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, LPCParser.RULE_jumpStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 410;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 78:
	            this.state = 402;
	            this.match(LPCParser.BREAK);
	            break;
	        case 79:
	            this.state = 403;
	            this.match(LPCParser.CONTINUE);
	            break;
	        case 85:
	            this.state = 404;
	            this.match(LPCParser.GOTO);
	            this.state = 405;
	            this.match(LPCParser.IDENTIFIER);
	            break;
	        case 80:
	            this.state = 406;
	            this.match(LPCParser.RETURN);
	            this.state = 408;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1577012) !== 0) || _la===32 || _la===48 || ((((_la - 81)) & ~0x1f) === 0 && ((1 << (_la - 81)) & 2021) !== 0)) {
	                this.state = 407;
	                this.expression(0);
	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 412;
	        this.match(LPCParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 76;
	    this.enterRecursionRule(localctx, 76, LPCParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 445;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new PrimaryExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 415;
	            this.primary();
	            break;

	        case 2:
	            localctx = new NewObjectContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 416;
	            this.match(LPCParser.NEW);
	            this.state = 417;
	            this.match(LPCParser.IDENTIFIER);
	            this.state = 423;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	            if(la_===1) {
	                this.state = 418;
	                this.match(LPCParser.T__1);
	                this.state = 420;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1577012) !== 0) || _la===32 || _la===48 || ((((_la - 81)) & ~0x1f) === 0 && ((1 << (_la - 81)) & 2021) !== 0)) {
	                    this.state = 419;
	                    this.expressionList();
	                }

	                this.state = 422;
	                this.match(LPCParser.T__2);

	            }
	            break;

	        case 3:
	            localctx = new CastExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 425;
	            this.match(LPCParser.T__1);
	            this.state = 426;
	            this.typeSpecifier();
	            this.state = 430;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 427;
	                this.match(LPCParser.T__5);
	                this.state = 432;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 433;
	            this.match(LPCParser.T__2);
	            this.state = 434;
	            this.expression(19);
	            break;

	        case 4:
	            localctx = new PrefixIncDecContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 436;
	            _la = this._input.LA(1);
	            if(!(_la===19 || _la===20)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 437;
	            this.expression(16);
	            break;

	        case 5:
	            localctx = new UnaryExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 438;
	            _la = this._input.LA(1);
	            if(!(((((_la - 4)) & ~0x1f) === 0 && ((1 << (_la - 4)) & 268435715) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 439;
	            this.expression(14);
	            break;

	        case 6:
	            localctx = new CatchExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 440;
	            this.match(LPCParser.CATCH);
	            this.state = 441;
	            this.match(LPCParser.T__1);
	            this.state = 442;
	            this.expression(0);
	            this.state = 443;
	            this.match(LPCParser.T__2);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 522;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,50,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 520;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultiplicativeContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LPCParser.RULE_expression);
	                    this.state = 447;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 448;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 448) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 449;
	                    this.expression(14);
	                    break;

	                case 2:
	                    localctx = new AdditiveContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LPCParser.RULE_expression);
	                    this.state = 450;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 451;
	                    _la = this._input.LA(1);
	                    if(!(_la===4 || _la===5)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 452;
	                    this.expression(13);
	                    break;

	                case 3:
	                    localctx = new ShiftContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LPCParser.RULE_expression);
	                    this.state = 453;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 454;
	                    _la = this._input.LA(1);
	                    if(!(_la===17 || _la===18)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 455;
	                    this.expression(12);
	                    break;

	                case 4:
	                    localctx = new RelationalContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LPCParser.RULE_expression);
	                    this.state = 456;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 457;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 122880) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 458;
	                    this.expression(11);
	                    break;

	                case 5:
	                    localctx = new EqualityContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LPCParser.RULE_expression);
	                    this.state = 459;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 460;
	                    _la = this._input.LA(1);
	                    if(!(_la===33 || _la===34)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 461;
	                    this.expression(10);
	                    break;

	                case 6:
	                    localctx = new BitwiseAndContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LPCParser.RULE_expression);
	                    this.state = 462;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 463;
	                    this.match(LPCParser.T__8);
	                    this.state = 464;
	                    this.expression(9);
	                    break;

	                case 7:
	                    localctx = new BitwiseXorContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LPCParser.RULE_expression);
	                    this.state = 465;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 466;
	                    this.match(LPCParser.T__9);
	                    this.state = 467;
	                    this.expression(8);
	                    break;

	                case 8:
	                    localctx = new BitwiseOrContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LPCParser.RULE_expression);
	                    this.state = 468;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 469;
	                    this.match(LPCParser.T__10);
	                    this.state = 470;
	                    this.expression(7);
	                    break;

	                case 9:
	                    localctx = new LogicalAndContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LPCParser.RULE_expression);
	                    this.state = 471;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 472;
	                    this.match(LPCParser.T__34);
	                    this.state = 473;
	                    this.expression(6);
	                    break;

	                case 10:
	                    localctx = new LogicalOrContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LPCParser.RULE_expression);
	                    this.state = 474;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 475;
	                    this.match(LPCParser.T__35);
	                    this.state = 476;
	                    this.expression(5);
	                    break;

	                case 11:
	                    localctx = new ConditionalContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LPCParser.RULE_expression);
	                    this.state = 477;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 478;
	                    this.match(LPCParser.T__36);
	                    this.state = 479;
	                    this.expression(0);
	                    this.state = 480;
	                    this.match(LPCParser.T__28);
	                    this.state = 481;
	                    this.expression(4);
	                    break;

	                case 12:
	                    localctx = new AssignmentContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LPCParser.RULE_expression);
	                    this.state = 483;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 484;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 23)) & ~0x1f) === 0 && ((1 << (_la - 23)) & 33521665) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 485;
	                    this.expression(3);
	                    break;

	                case 13:
	                    localctx = new FunctionCallContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LPCParser.RULE_expression);
	                    this.state = 486;
	                    if (!( this.precpred(this._ctx, 23))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
	                    }
	                    this.state = 487;
	                    this.match(LPCParser.T__1);
	                    this.state = 489;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1577012) !== 0) || _la===32 || _la===48 || ((((_la - 81)) & ~0x1f) === 0 && ((1 << (_la - 81)) & 2021) !== 0)) {
	                        this.state = 488;
	                        this.expressionList();
	                    }

	                    this.state = 491;
	                    this.match(LPCParser.T__2);
	                    break;

	                case 14:
	                    localctx = new MethodCallContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LPCParser.RULE_expression);
	                    this.state = 492;
	                    if (!( this.precpred(this._ctx, 22))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
	                    }
	                    this.state = 493;
	                    this.match(LPCParser.T__29);
	                    this.state = 494;
	                    this.match(LPCParser.IDENTIFIER);
	                    this.state = 495;
	                    this.match(LPCParser.T__1);
	                    this.state = 497;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1577012) !== 0) || _la===32 || _la===48 || ((((_la - 81)) & ~0x1f) === 0 && ((1 << (_la - 81)) & 2021) !== 0)) {
	                        this.state = 496;
	                        this.expressionList();
	                    }

	                    this.state = 499;
	                    this.match(LPCParser.T__2);
	                    break;

	                case 15:
	                    localctx = new InstanceOfContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LPCParser.RULE_expression);
	                    this.state = 500;
	                    if (!( this.precpred(this._ctx, 21))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
	                    }
	                    this.state = 501;
	                    this.match(LPCParser.T__30);
	                    this.state = 502;
	                    this.stringExpression(0);
	                    break;

	                case 16:
	                    localctx = new ArrayAccessContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LPCParser.RULE_expression);
	                    this.state = 503;
	                    if (!( this.precpred(this._ctx, 18))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
	                    }
	                    this.state = 504;
	                    this.match(LPCParser.T__20);
	                    this.state = 505;
	                    this.expression(0);
	                    this.state = 506;
	                    this.match(LPCParser.T__21);
	                    break;

	                case 17:
	                    localctx = new RangeAccessContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LPCParser.RULE_expression);
	                    this.state = 508;
	                    if (!( this.precpred(this._ctx, 17))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
	                    }
	                    this.state = 509;
	                    this.match(LPCParser.T__20);
	                    this.state = 511;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1577012) !== 0) || _la===32 || _la===48 || ((((_la - 81)) & ~0x1f) === 0 && ((1 << (_la - 81)) & 2021) !== 0)) {
	                        this.state = 510;
	                        this.expression(0);
	                    }

	                    this.state = 513;
	                    this.match(LPCParser.T__23);
	                    this.state = 515;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1577012) !== 0) || _la===32 || _la===48 || ((((_la - 81)) & ~0x1f) === 0 && ((1 << (_la - 81)) & 2021) !== 0)) {
	                        this.state = 514;
	                        this.expression(0);
	                    }

	                    this.state = 517;
	                    this.match(LPCParser.T__21);
	                    break;

	                case 18:
	                    localctx = new PostfixIncDecContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LPCParser.RULE_expression);
	                    this.state = 518;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 519;
	                    _la = this._input.LA(1);
	                    if(!(_la===19 || _la===20)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    break;

	                } 
	            }
	            this.state = 524;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,50,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, LPCParser.RULE_primary);
	    try {
	        this.state = 536;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 525;
	            this.match(LPCParser.T__1);
	            this.state = 526;
	            this.expression(0);
	            this.state = 527;
	            this.match(LPCParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 529;
	            this.literal();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 530;
	            this.match(LPCParser.IDENTIFIER);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 531;
	            this.match(LPCParser.T__47);
	            this.state = 532;
	            this.match(LPCParser.IDENTIFIER);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 533;
	            this.match(LPCParser.IDENTIFIER);
	            this.state = 534;
	            this.match(LPCParser.T__47);
	            this.state = 535;
	            this.match(LPCParser.IDENTIFIER);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, LPCParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.state = 557;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 538;
	            this.match(LPCParser.NIL);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 539;
	            this.match(LPCParser.INTEGER);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 540;
	            this.match(LPCParser.FLOAT_LITERAL);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 541;
	            this.match(LPCParser.STRING_LITERAL);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 542;
	            this.match(LPCParser.CHAR_LITERAL);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 543;
	            this.match(LPCParser.T__1);
	            this.state = 544;
	            this.match(LPCParser.T__26);
	            this.state = 546;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1577012) !== 0) || _la===32 || _la===48 || ((((_la - 81)) & ~0x1f) === 0 && ((1 << (_la - 81)) & 2021) !== 0)) {
	                this.state = 545;
	                this.expressionList();
	            }

	            this.state = 548;
	            this.match(LPCParser.T__27);
	            this.state = 549;
	            this.match(LPCParser.T__2);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 550;
	            this.match(LPCParser.T__1);
	            this.state = 551;
	            this.match(LPCParser.T__20);
	            this.state = 553;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1577012) !== 0) || _la===32 || _la===48 || ((((_la - 81)) & ~0x1f) === 0 && ((1 << (_la - 81)) & 2021) !== 0)) {
	                this.state = 552;
	                this.mappingList();
	            }

	            this.state = 555;
	            this.match(LPCParser.T__21);
	            this.state = 556;
	            this.match(LPCParser.T__2);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	stringExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new StringExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 82;
	    this.enterRecursionRule(localctx, 82, LPCParser.RULE_stringExpression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 565;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 91:
	            this.state = 560;
	            this.match(LPCParser.STRING_LITERAL);
	            break;
	        case 2:
	            this.state = 561;
	            this.match(LPCParser.T__1);
	            this.state = 562;
	            this.stringExpression(0);
	            this.state = 563;
	            this.match(LPCParser.T__2);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 572;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,56,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new StringExpressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, LPCParser.RULE_stringExpression);
	                this.state = 567;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 568;
	                this.match(LPCParser.T__3);
	                this.state = 569;
	                this.match(LPCParser.STRING_LITERAL); 
	            }
	            this.state = 574;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,56,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	expressionList() {
	    let localctx = new ExpressionListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, LPCParser.RULE_expressionList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 575;
	        this.expression(0);
	        this.state = 580;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===25) {
	            this.state = 576;
	            this.match(LPCParser.T__24);
	            this.state = 577;
	            this.expression(0);
	            this.state = 582;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mappingList() {
	    let localctx = new MappingListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, LPCParser.RULE_mappingList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 583;
	        this.mappingEntry();
	        this.state = 588;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===25) {
	            this.state = 584;
	            this.match(LPCParser.T__24);
	            this.state = 585;
	            this.mappingEntry();
	            this.state = 590;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mappingEntry() {
	    let localctx = new MappingEntryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, LPCParser.RULE_mappingEntry);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 591;
	        this.expression(0);
	        this.state = 592;
	        this.match(LPCParser.T__28);
	        this.state = 593;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LPCParser.EOF = antlr4.Token.EOF;
LPCParser.T__0 = 1;
LPCParser.T__1 = 2;
LPCParser.T__2 = 3;
LPCParser.T__3 = 4;
LPCParser.T__4 = 5;
LPCParser.T__5 = 6;
LPCParser.T__6 = 7;
LPCParser.T__7 = 8;
LPCParser.T__8 = 9;
LPCParser.T__9 = 10;
LPCParser.T__10 = 11;
LPCParser.T__11 = 12;
LPCParser.T__12 = 13;
LPCParser.T__13 = 14;
LPCParser.T__14 = 15;
LPCParser.T__15 = 16;
LPCParser.T__16 = 17;
LPCParser.T__17 = 18;
LPCParser.T__18 = 19;
LPCParser.T__19 = 20;
LPCParser.T__20 = 21;
LPCParser.T__21 = 22;
LPCParser.T__22 = 23;
LPCParser.T__23 = 24;
LPCParser.T__24 = 25;
LPCParser.T__25 = 26;
LPCParser.T__26 = 27;
LPCParser.T__27 = 28;
LPCParser.T__28 = 29;
LPCParser.T__29 = 30;
LPCParser.T__30 = 31;
LPCParser.T__31 = 32;
LPCParser.T__32 = 33;
LPCParser.T__33 = 34;
LPCParser.T__34 = 35;
LPCParser.T__35 = 36;
LPCParser.T__36 = 37;
LPCParser.T__37 = 38;
LPCParser.T__38 = 39;
LPCParser.T__39 = 40;
LPCParser.T__40 = 41;
LPCParser.T__41 = 42;
LPCParser.T__42 = 43;
LPCParser.T__43 = 44;
LPCParser.T__44 = 45;
LPCParser.T__45 = 46;
LPCParser.T__46 = 47;
LPCParser.T__47 = 48;
LPCParser.INCLUDE = 49;
LPCParser.DEFINE = 50;
LPCParser.IFDEF = 51;
LPCParser.IFNDEF = 52;
LPCParser.ELSEDIR = 53;
LPCParser.ENDIF = 54;
LPCParser.UNDEF = 55;
LPCParser.INHERIT = 56;
LPCParser.PRIVATE = 57;
LPCParser.STATIC = 58;
LPCParser.ATOMIC = 59;
LPCParser.NOMASK = 60;
LPCParser.VARARGS = 61;
LPCParser.OPERATOR = 62;
LPCParser.VOID = 63;
LPCParser.INT = 64;
LPCParser.FLOAT = 65;
LPCParser.STRING = 66;
LPCParser.OBJECT = 67;
LPCParser.MAPPING = 68;
LPCParser.MIXED = 69;
LPCParser.IF = 70;
LPCParser.ELSE = 71;
LPCParser.SWITCH = 72;
LPCParser.CASE = 73;
LPCParser.DEFAULT = 74;
LPCParser.WHILE = 75;
LPCParser.DO = 76;
LPCParser.FOR = 77;
LPCParser.BREAK = 78;
LPCParser.CONTINUE = 79;
LPCParser.RETURN = 80;
LPCParser.NEW = 81;
LPCParser.TRY = 82;
LPCParser.CATCH = 83;
LPCParser.RLIMITS = 84;
LPCParser.GOTO = 85;
LPCParser.NIL = 86;
LPCParser.INTEGER = 87;
LPCParser.IDENTIFIER = 88;
LPCParser.FLOAT_LITERAL = 89;
LPCParser.CHAR_LITERAL = 90;
LPCParser.STRING_LITERAL = 91;
LPCParser.WS = 92;
LPCParser.COMMENT = 93;
LPCParser.LINE_COMMENT = 94;

LPCParser.RULE_program = 0;
LPCParser.RULE_programElement = 1;
LPCParser.RULE_preprocessorDirective = 2;
LPCParser.RULE_includeDirective = 3;
LPCParser.RULE_defineDirective = 4;
LPCParser.RULE_ifdefDirective = 5;
LPCParser.RULE_ifndefDirective = 6;
LPCParser.RULE_elseDirective = 7;
LPCParser.RULE_endifDirective = 8;
LPCParser.RULE_undefDirective = 9;
LPCParser.RULE_inheritDeclaration = 10;
LPCParser.RULE_declaration = 11;
LPCParser.RULE_functionDeclaration = 12;
LPCParser.RULE_functionDeclarator = 13;
LPCParser.RULE_operatorName = 14;
LPCParser.RULE_formalParameters = 15;
LPCParser.RULE_parameterList = 16;
LPCParser.RULE_parameterDeclaration = 17;
LPCParser.RULE_variableDeclaration = 18;
LPCParser.RULE_variableDeclarators = 19;
LPCParser.RULE_typeSpecifier = 20;
LPCParser.RULE_arraySpecifier = 21;
LPCParser.RULE_modifiers = 22;
LPCParser.RULE_modifier = 23;
LPCParser.RULE_block = 24;
LPCParser.RULE_statement = 25;
LPCParser.RULE_selectionStatement = 26;
LPCParser.RULE_switchSection = 27;
LPCParser.RULE_switchLabel = 28;
LPCParser.RULE_iterationStatement = 29;
LPCParser.RULE_forControl = 30;
LPCParser.RULE_tryStatement = 31;
LPCParser.RULE_catchStatement = 32;
LPCParser.RULE_catchStandAloneStatement = 33;
LPCParser.RULE_rlimitsStatement = 34;
LPCParser.RULE_labeledStatement = 35;
LPCParser.RULE_expressionStatement = 36;
LPCParser.RULE_jumpStatement = 37;
LPCParser.RULE_expression = 38;
LPCParser.RULE_primary = 39;
LPCParser.RULE_literal = 40;
LPCParser.RULE_stringExpression = 41;
LPCParser.RULE_expressionList = 42;
LPCParser.RULE_mappingList = 43;
LPCParser.RULE_mappingEntry = 44;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_program;
    }

	EOF() {
	    return this.getToken(LPCParser.EOF, 0);
	};

	preprocessorDirective = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PreprocessorDirectiveContext);
	    } else {
	        return this.getTypedRuleContext(PreprocessorDirectiveContext,i);
	    }
	};

	programElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProgramElementContext);
	    } else {
	        return this.getTypedRuleContext(ProgramElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ProgramElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_programElement;
    }

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	inheritDeclaration() {
	    return this.getTypedRuleContext(InheritDeclarationContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterProgramElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitProgramElement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitProgramElement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PreprocessorDirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_preprocessorDirective;
    }

	includeDirective() {
	    return this.getTypedRuleContext(IncludeDirectiveContext,0);
	};

	defineDirective() {
	    return this.getTypedRuleContext(DefineDirectiveContext,0);
	};

	ifdefDirective() {
	    return this.getTypedRuleContext(IfdefDirectiveContext,0);
	};

	ifndefDirective() {
	    return this.getTypedRuleContext(IfndefDirectiveContext,0);
	};

	elseDirective() {
	    return this.getTypedRuleContext(ElseDirectiveContext,0);
	};

	endifDirective() {
	    return this.getTypedRuleContext(EndifDirectiveContext,0);
	};

	undefDirective() {
	    return this.getTypedRuleContext(UndefDirectiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterPreprocessorDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitPreprocessorDirective(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitPreprocessorDirective(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IncludeDirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_includeDirective;
    }

	INCLUDE() {
	    return this.getToken(LPCParser.INCLUDE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterIncludeDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitIncludeDirective(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitIncludeDirective(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DefineDirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_defineDirective;
    }

	DEFINE() {
	    return this.getToken(LPCParser.DEFINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterDefineDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitDefineDirective(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitDefineDirective(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfdefDirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_ifdefDirective;
    }

	IFDEF() {
	    return this.getToken(LPCParser.IFDEF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterIfdefDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitIfdefDirective(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitIfdefDirective(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfndefDirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_ifndefDirective;
    }

	IFNDEF() {
	    return this.getToken(LPCParser.IFNDEF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterIfndefDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitIfndefDirective(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitIfndefDirective(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseDirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_elseDirective;
    }

	ELSEDIR() {
	    return this.getToken(LPCParser.ELSEDIR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterElseDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitElseDirective(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitElseDirective(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EndifDirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_endifDirective;
    }

	ENDIF() {
	    return this.getToken(LPCParser.ENDIF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterEndifDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitEndifDirective(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitEndifDirective(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UndefDirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_undefDirective;
    }

	UNDEF() {
	    return this.getToken(LPCParser.UNDEF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterUndefDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitUndefDirective(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitUndefDirective(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InheritDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_inheritDeclaration;
    }

	INHERIT() {
	    return this.getToken(LPCParser.INHERIT, 0);
	};

	stringExpression() {
	    return this.getTypedRuleContext(StringExpressionContext,0);
	};

	PRIVATE() {
	    return this.getToken(LPCParser.PRIVATE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(LPCParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterInheritDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitInheritDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitInheritDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_declaration;
    }

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	inheritDeclaration() {
	    return this.getTypedRuleContext(InheritDeclarationContext,0);
	};

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_functionDeclaration;
    }

	typeSpecifier() {
	    return this.getTypedRuleContext(TypeSpecifierContext,0);
	};

	functionDeclarator() {
	    return this.getTypedRuleContext(FunctionDeclaratorContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	modifiers() {
	    return this.getTypedRuleContext(ModifiersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitFunctionDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitFunctionDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDeclaratorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_functionDeclarator;
    }

	IDENTIFIER() {
	    return this.getToken(LPCParser.IDENTIFIER, 0);
	};

	operatorName() {
	    return this.getTypedRuleContext(OperatorNameContext,0);
	};

	formalParameters() {
	    return this.getTypedRuleContext(FormalParametersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterFunctionDeclarator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitFunctionDeclarator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitFunctionDeclarator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperatorNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_operatorName;
    }

	OPERATOR() {
	    return this.getToken(LPCParser.OPERATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterOperatorName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitOperatorName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitOperatorName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormalParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_formalParameters;
    }

	VOID() {
	    return this.getToken(LPCParser.VOID, 0);
	};

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterFormalParameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitFormalParameters(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitFormalParameters(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_parameterList;
    }

	parameterDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(ParameterDeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterParameterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitParameterList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitParameterList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_parameterDeclaration;
    }

	typeSpecifier() {
	    return this.getTypedRuleContext(TypeSpecifierContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(LPCParser.IDENTIFIER, 0);
	};

	VARARGS() {
	    return this.getToken(LPCParser.VARARGS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterParameterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitParameterDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitParameterDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_variableDeclaration;
    }

	typeSpecifier() {
	    return this.getTypedRuleContext(TypeSpecifierContext,0);
	};

	variableDeclarators() {
	    return this.getTypedRuleContext(VariableDeclaratorsContext,0);
	};

	modifiers() {
	    return this.getTypedRuleContext(ModifiersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitVariableDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitVariableDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableDeclaratorsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_variableDeclarators;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LPCParser.IDENTIFIER);
	    } else {
	        return this.getToken(LPCParser.IDENTIFIER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterVariableDeclarators(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitVariableDeclarators(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitVariableDeclarators(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeSpecifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_typeSpecifier;
    }

	VOID() {
	    return this.getToken(LPCParser.VOID, 0);
	};

	INT() {
	    return this.getToken(LPCParser.INT, 0);
	};

	FLOAT() {
	    return this.getToken(LPCParser.FLOAT, 0);
	};

	STRING() {
	    return this.getToken(LPCParser.STRING, 0);
	};

	OBJECT() {
	    return this.getToken(LPCParser.OBJECT, 0);
	};

	MAPPING() {
	    return this.getToken(LPCParser.MAPPING, 0);
	};

	MIXED() {
	    return this.getToken(LPCParser.MIXED, 0);
	};

	IDENTIFIER() {
	    return this.getToken(LPCParser.IDENTIFIER, 0);
	};

	arraySpecifier() {
	    return this.getTypedRuleContext(ArraySpecifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterTypeSpecifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitTypeSpecifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitTypeSpecifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArraySpecifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_arraySpecifier;
    }


	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterArraySpecifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitArraySpecifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitArraySpecifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ModifiersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_modifiers;
    }

	modifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ModifierContext);
	    } else {
	        return this.getTypedRuleContext(ModifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterModifiers(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitModifiers(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitModifiers(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ModifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_modifier;
    }

	PRIVATE() {
	    return this.getToken(LPCParser.PRIVATE, 0);
	};

	STATIC() {
	    return this.getToken(LPCParser.STATIC, 0);
	};

	ATOMIC() {
	    return this.getToken(LPCParser.ATOMIC, 0);
	};

	NOMASK() {
	    return this.getToken(LPCParser.NOMASK, 0);
	};

	VARARGS() {
	    return this.getToken(LPCParser.VARARGS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterModifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitModifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitModifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_block;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_statement;
    }

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	expressionStatement() {
	    return this.getTypedRuleContext(ExpressionStatementContext,0);
	};

	selectionStatement() {
	    return this.getTypedRuleContext(SelectionStatementContext,0);
	};

	iterationStatement() {
	    return this.getTypedRuleContext(IterationStatementContext,0);
	};

	jumpStatement() {
	    return this.getTypedRuleContext(JumpStatementContext,0);
	};

	tryStatement() {
	    return this.getTypedRuleContext(TryStatementContext,0);
	};

	catchStandAloneStatement() {
	    return this.getTypedRuleContext(CatchStandAloneStatementContext,0);
	};

	rlimitsStatement() {
	    return this.getTypedRuleContext(RlimitsStatementContext,0);
	};

	labeledStatement() {
	    return this.getTypedRuleContext(LabeledStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SelectionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_selectionStatement;
    }

	IF() {
	    return this.getToken(LPCParser.IF, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(LPCParser.ELSE, 0);
	};

	SWITCH() {
	    return this.getToken(LPCParser.SWITCH, 0);
	};

	switchSection = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SwitchSectionContext);
	    } else {
	        return this.getTypedRuleContext(SwitchSectionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterSelectionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitSelectionStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitSelectionStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SwitchSectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_switchSection;
    }

	switchLabel = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SwitchLabelContext);
	    } else {
	        return this.getTypedRuleContext(SwitchLabelContext,i);
	    }
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterSwitchSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitSwitchSection(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitSwitchSection(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SwitchLabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_switchLabel;
    }

	CASE() {
	    return this.getToken(LPCParser.CASE, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	DEFAULT() {
	    return this.getToken(LPCParser.DEFAULT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterSwitchLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitSwitchLabel(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitSwitchLabel(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IterationStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_iterationStatement;
    }

	WHILE() {
	    return this.getToken(LPCParser.WHILE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	DO() {
	    return this.getToken(LPCParser.DO, 0);
	};

	FOR() {
	    return this.getToken(LPCParser.FOR, 0);
	};

	forControl() {
	    return this.getTypedRuleContext(ForControlContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterIterationStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitIterationStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitIterationStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForControlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_forControl;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterForControl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitForControl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitForControl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TryStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_tryStatement;
    }

	TRY() {
	    return this.getToken(LPCParser.TRY, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	catchStatement() {
	    return this.getTypedRuleContext(CatchStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterTryStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitTryStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitTryStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CatchStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_catchStatement;
    }

	CATCH() {
	    return this.getToken(LPCParser.CATCH, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(LPCParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterCatchStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitCatchStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitCatchStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CatchStandAloneStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_catchStandAloneStatement;
    }

	CATCH() {
	    return this.getToken(LPCParser.CATCH, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterCatchStandAloneStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitCatchStandAloneStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitCatchStandAloneStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RlimitsStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_rlimitsStatement;
    }

	RLIMITS() {
	    return this.getToken(LPCParser.RLIMITS, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterRlimitsStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitRlimitsStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitRlimitsStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LabeledStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_labeledStatement;
    }

	IDENTIFIER() {
	    return this.getToken(LPCParser.IDENTIFIER, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	CASE() {
	    return this.getToken(LPCParser.CASE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	DEFAULT() {
	    return this.getToken(LPCParser.DEFAULT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterLabeledStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitLabeledStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitLabeledStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_expressionStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterExpressionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitExpressionStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitExpressionStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class JumpStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_jumpStatement;
    }

	BREAK() {
	    return this.getToken(LPCParser.BREAK, 0);
	};

	CONTINUE() {
	    return this.getToken(LPCParser.CONTINUE, 0);
	};

	GOTO() {
	    return this.getToken(LPCParser.GOTO, 0);
	};

	IDENTIFIER() {
	    return this.getToken(LPCParser.IDENTIFIER, 0);
	};

	RETURN() {
	    return this.getToken(LPCParser.RETURN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterJumpStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitJumpStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitJumpStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PrimaryExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterPrimaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitPrimaryExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitPrimaryExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.PrimaryExpressionContext = PrimaryExpressionContext;

class ConditionalContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterConditional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitConditional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitConditional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.ConditionalContext = ConditionalContext;

class AssignmentContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitAssignment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.AssignmentContext = AssignmentContext;

class ShiftContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterShift(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitShift(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitShift(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.ShiftContext = ShiftContext;

class BitwiseXorContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterBitwiseXor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitBitwiseXor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitBitwiseXor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.BitwiseXorContext = BitwiseXorContext;

class LogicalAndContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterLogicalAnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitLogicalAnd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitLogicalAnd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.LogicalAndContext = LogicalAndContext;

class MultiplicativeContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterMultiplicative(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitMultiplicative(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitMultiplicative(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.MultiplicativeContext = MultiplicativeContext;

class BitwiseAndContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterBitwiseAnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitBitwiseAnd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitBitwiseAnd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.BitwiseAndContext = BitwiseAndContext;

class AdditiveContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterAdditive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitAdditive(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitAdditive(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.AdditiveContext = AdditiveContext;

class InstanceOfContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	stringExpression() {
	    return this.getTypedRuleContext(StringExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterInstanceOf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitInstanceOf(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitInstanceOf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.InstanceOfContext = InstanceOfContext;

class RangeAccessContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterRangeAccess(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitRangeAccess(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitRangeAccess(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.RangeAccessContext = RangeAccessContext;

class PostfixIncDecContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterPostfixIncDec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitPostfixIncDec(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitPostfixIncDec(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.PostfixIncDecContext = PostfixIncDecContext;

class CastExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	typeSpecifier() {
	    return this.getTypedRuleContext(TypeSpecifierContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterCastExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitCastExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitCastExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.CastExpressionContext = CastExpressionContext;

class PrefixIncDecContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterPrefixIncDec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitPrefixIncDec(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitPrefixIncDec(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.PrefixIncDecContext = PrefixIncDecContext;

class NewObjectContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NEW() {
	    return this.getToken(LPCParser.NEW, 0);
	};

	IDENTIFIER() {
	    return this.getToken(LPCParser.IDENTIFIER, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterNewObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitNewObject(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitNewObject(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.NewObjectContext = NewObjectContext;

class FunctionCallContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.FunctionCallContext = FunctionCallContext;

class CatchExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CATCH() {
	    return this.getToken(LPCParser.CATCH, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterCatchExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitCatchExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitCatchExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.CatchExpressionContext = CatchExpressionContext;

class RelationalContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterRelational(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitRelational(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitRelational(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.RelationalContext = RelationalContext;

class BitwiseOrContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterBitwiseOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitBitwiseOr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitBitwiseOr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.BitwiseOrContext = BitwiseOrContext;

class ArrayAccessContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterArrayAccess(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitArrayAccess(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitArrayAccess(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.ArrayAccessContext = ArrayAccessContext;

class UnaryExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterUnaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitUnaryExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitUnaryExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.UnaryExpressionContext = UnaryExpressionContext;

class LogicalOrContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterLogicalOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitLogicalOr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitLogicalOr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.LogicalOrContext = LogicalOrContext;

class EqualityContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterEquality(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitEquality(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitEquality(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.EqualityContext = EqualityContext;

class MethodCallContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(LPCParser.IDENTIFIER, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterMethodCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitMethodCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitMethodCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LPCParser.MethodCallContext = MethodCallContext;

class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_primary;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LPCParser.IDENTIFIER);
	    } else {
	        return this.getToken(LPCParser.IDENTIFIER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitPrimary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitPrimary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_literal;
    }

	NIL() {
	    return this.getToken(LPCParser.NIL, 0);
	};

	INTEGER() {
	    return this.getToken(LPCParser.INTEGER, 0);
	};

	FLOAT_LITERAL() {
	    return this.getToken(LPCParser.FLOAT_LITERAL, 0);
	};

	STRING_LITERAL() {
	    return this.getToken(LPCParser.STRING_LITERAL, 0);
	};

	CHAR_LITERAL() {
	    return this.getToken(LPCParser.CHAR_LITERAL, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	mappingList() {
	    return this.getTypedRuleContext(MappingListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StringExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_stringExpression;
    }

	STRING_LITERAL() {
	    return this.getToken(LPCParser.STRING_LITERAL, 0);
	};

	stringExpression() {
	    return this.getTypedRuleContext(StringExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterStringExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitStringExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitStringExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_expressionList;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterExpressionList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitExpressionList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitExpressionList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MappingListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_mappingList;
    }

	mappingEntry = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MappingEntryContext);
	    } else {
	        return this.getTypedRuleContext(MappingEntryContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterMappingList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitMappingList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitMappingList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MappingEntryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LPCParser.RULE_mappingEntry;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.enterMappingEntry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LPCListener ) {
	        listener.exitMappingEntry(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LPCVisitor ) {
	        return visitor.visitMappingEntry(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LPCParser.ProgramContext = ProgramContext; 
LPCParser.ProgramElementContext = ProgramElementContext; 
LPCParser.PreprocessorDirectiveContext = PreprocessorDirectiveContext; 
LPCParser.IncludeDirectiveContext = IncludeDirectiveContext; 
LPCParser.DefineDirectiveContext = DefineDirectiveContext; 
LPCParser.IfdefDirectiveContext = IfdefDirectiveContext; 
LPCParser.IfndefDirectiveContext = IfndefDirectiveContext; 
LPCParser.ElseDirectiveContext = ElseDirectiveContext; 
LPCParser.EndifDirectiveContext = EndifDirectiveContext; 
LPCParser.UndefDirectiveContext = UndefDirectiveContext; 
LPCParser.InheritDeclarationContext = InheritDeclarationContext; 
LPCParser.DeclarationContext = DeclarationContext; 
LPCParser.FunctionDeclarationContext = FunctionDeclarationContext; 
LPCParser.FunctionDeclaratorContext = FunctionDeclaratorContext; 
LPCParser.OperatorNameContext = OperatorNameContext; 
LPCParser.FormalParametersContext = FormalParametersContext; 
LPCParser.ParameterListContext = ParameterListContext; 
LPCParser.ParameterDeclarationContext = ParameterDeclarationContext; 
LPCParser.VariableDeclarationContext = VariableDeclarationContext; 
LPCParser.VariableDeclaratorsContext = VariableDeclaratorsContext; 
LPCParser.TypeSpecifierContext = TypeSpecifierContext; 
LPCParser.ArraySpecifierContext = ArraySpecifierContext; 
LPCParser.ModifiersContext = ModifiersContext; 
LPCParser.ModifierContext = ModifierContext; 
LPCParser.BlockContext = BlockContext; 
LPCParser.StatementContext = StatementContext; 
LPCParser.SelectionStatementContext = SelectionStatementContext; 
LPCParser.SwitchSectionContext = SwitchSectionContext; 
LPCParser.SwitchLabelContext = SwitchLabelContext; 
LPCParser.IterationStatementContext = IterationStatementContext; 
LPCParser.ForControlContext = ForControlContext; 
LPCParser.TryStatementContext = TryStatementContext; 
LPCParser.CatchStatementContext = CatchStatementContext; 
LPCParser.CatchStandAloneStatementContext = CatchStandAloneStatementContext; 
LPCParser.RlimitsStatementContext = RlimitsStatementContext; 
LPCParser.LabeledStatementContext = LabeledStatementContext; 
LPCParser.ExpressionStatementContext = ExpressionStatementContext; 
LPCParser.JumpStatementContext = JumpStatementContext; 
LPCParser.ExpressionContext = ExpressionContext; 
LPCParser.PrimaryContext = PrimaryContext; 
LPCParser.LiteralContext = LiteralContext; 
LPCParser.StringExpressionContext = StringExpressionContext; 
LPCParser.ExpressionListContext = ExpressionListContext; 
LPCParser.MappingListContext = MappingListContext; 
LPCParser.MappingEntryContext = MappingEntryContext; 
