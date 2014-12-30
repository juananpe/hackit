function hereDoc(f) {
  return f.toString().
      replace(/^[^\/]+\/\*!?/, '').
      replace(/\*\/[^\/]+$/, '');
}

pass = "";

// See http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript
var line = hereDoc(function() {/*!
 80 06 01 40 dd 94 
 12 01 10 01 09 08 12 eb 
 05 19 e8 fd 
 80 06 01 12 e0 f4 
 12 01 10 01 09 08 12 eb 
 4c 05 5d 01 03 01 23 10 
 01 3f 8f 
 80 06 02 09 ae 04 
 09 02 19 01 01 02 a0 0f 73 
 32 c1 6a 
 80 06 02 19 a3 c4 
 09 02 19 01 01 02 a0 0f 73 
 32 09 04 01 09 f2 2d 
 02 07 05 81 03 01 88 2f 
 ff ff 
 80 06 03 ff d4 64 
 04 03 09 04 09 78 
 80 06 01 03 09 04 ff 97 e8 
 2a 03 53 43 45 25 e4 
 20 55 53 42 90 0d 
 20 4b 65 79 8f 0b 
 62 6f 61 72 0a 06 
 64 20 48 75 8e 7f 
 62 d7 2f 
 80 06 03 03 09 04 ff 96 0a 
 42 03 53 6f 6e 34 0a 
 79 20 43 6f 47 ae 
 6d 70 75 74 4e 79 
 65 72 20 45 4a 61 
 6e 74 65 72 08 88 
 74 61 69 6e 80 ae 
 6d 65 6e 74 4a 58 
 20 49 6e 63 87 ad 
 2e e3 ef 
 09 01 27 25 
 80 06 02 03 09 04 ff 97 db 
 22 03 53 43 45 24 42 
 20 55 53 42 90 0d 
 20 4b 65 79 8f 0b 
 62 6f 61 72 0a 06 
 64 d4 8f 
 80 06 02 03 09 04 ff 97 db 
 22 03 53 43 45 24 42 
 20 55 53 42 90 0d 
 20 4b 65 79 8f 0b 
 62 6f 61 72 0a 06 
 64 d4 8f 
 a0 06 29 0f 8b ba 
 09 29 02 0d 16 64 02 a1 ba 
 ff ff 
 80 02 b6 f4 
 fe 4f 
 a0 04 b7 4c 
 01 fe 27 
 23 03 08 01 ce 4d 
 23 03 08 02 ce 09 
 a3 01 04 f6 a5 
 01 01 01 ae 77 
 23 01 10 01 ee 55 
 a3 02 04 f6 e1 
 01 ae 1b 
 a3 01 04 f6 a5 
 01 01 af e7 
 23 03 04 01 ce 81 
 a3 01 04 f6 a5 
 03 01 10 a3 9f 
 23 01 14 01 ef d1 
 80 06 01 40 dd 94 
 12 01 10 01 08 11 77 
 23 03 04 01 ce 81 
 a3 01 04 f6 a5 
 03 01 10 a3 9f 
 02 c1 7e 
 23 01 14 01 ef d1 
 05 1a e8 ce 
 80 06 01 12 e0 f4 
 12 01 10 01 08 11 77 
 4c 05 5c 01 03 02 62 c0 
 01 3f 8f 
 80 06 02 09 ae 04 
 09 02 22 01 01 02 a0 0b f8 
 32 c1 6a 
 80 06 02 22 b0 f4 
 09 02 22 01 01 02 a0 0b f8 
 32 09 04 01 03 01 35 4d 
 01 02 09 21 01 20 01 68 a6 
 22 41 07 05 81 03 08 89 23 
 0a 7e 48 
 80 06 03 ff d4 64 
 04 03 09 04 09 78 
 80 06 02 03 09 04 ff 97 db 
 22 03 53 43 45 24 42 
 20 55 53 42 90 0d 
 20 4b 65 79 8f 0b 
 62 6f 61 72 0a 06 
 64 d4 8f 
 80 06 03 03 09 04 ff 96 0a 
 42 03 53 6f 6e 34 0a 
 79 20 43 6f 47 ae 
 6d 70 75 74 4e 79 
 65 72 20 45 4a 61 
 6e 74 65 72 08 88 
 74 61 69 6e 80 ae 
 6d 65 6e 74 4a 58 
 20 49 6e 63 87 ad 
 2e e3 ef 
 09 01 27 25 
 80 06 02 03 09 04 ff 97 db 
 22 03 53 43 45 24 42 
 20 55 53 42 90 0d 
 20 4b 65 79 8f 0b 
 62 6f 61 72 0a 06 
 64 d4 8f 
 80 06 02 03 09 04 ff 97 db 
 22 03 53 43 45 24 42 
 20 55 53 42 90 0d 
 20 4b 65 79 8f 0b 
 62 6f 61 72 0a 06 
 64 d4 8f 
 21 0a d6 20 
 81 06 22 41 d8 0f 
 05 01 09 06 a1 01 05 07 d7 3c 
 19 e0 29 e7 15 25 01 73 ef 
 75 01 95 08 81 02 95 01 b3 87 
 75 08 81 01 95 05 75 01 08 63 
 05 08 19 01 29 05 91 02 3d ce 
 95 01 75 03 91 01 95 06 bb 6c 
 75 08 15 26 ff 05 08 91 
 07 19 2a ff 81 3f 51 
 c0 40 ef 
 21 09 02 01 9d 70 
 40 bf 
 21 09 02 01 9d 70 
 01 81 7f 
 a3 01 04 f6 a5 
 03 01 ae 5f 
 bf f4 
 21 09 02 01 9d 70 
 40 bf 
 21 09 02 01 9d 70 
 01 81 7f 
 02 3e 2d 
 21 09 02 01 9d 70 
 40 bf 
 02 0f 3e d2 
 02 3e 2d 
 bf f4 
 04 be 70 
 bf f4 
 0b be 8f 
 04 be 70 
 bf f4 
 2c b8 58 
 bf f4 
 0c bf 38 
 16 bd 02 
 bf f4 
 10 bd 64 
 16 bd 02 
 bf f4 
 2c b8 58 
 bf f4 
 09 bf 6d 
 bf f4 
 0f bf 0b 
 bf f4 
 2c b8 58 
 bf f4 
 15 bd 31 
 bf f4 
 16 bd 02 
 bf f4 
 0c bf 38 
 16 0c ad 03 
 16 bd 02 
 bf f4 
 2c b8 58 
 bf f4 
 0b be 8f 
 bf f4 
 07 be 43 
 bf f4 
 2c b8 58 
 02 3e 2d 
 02 0b 3f 56 
 bf f4 
 37 bb b3 
 bf f4 
 16 bd 02 
 bf f4 
 12 bc 86 
 12 04 4d 46 
 04 be 70 
 bf f4 
 19 bd fd 
 bf f4 
 2c b8 58 
 bf f4 
 15 bd 31 
 15 04 4c f1 
 04 be 70 
 bf f4 
 12 bc 86 
 bf f4 
 04 be 70 
 bf f4 
 2c b8 58 
 bf f4 
 0b be 8f 
 04 be 70 
 bf f4 
 12 bc 86 
 bf f4 
 13 bd 57 
 bf f4 
 07 be 43 
 bf f4 
 2c b8 58 
 bf f4 
 09 bf 6d 
 bf f4 
 0f bf 0b 
 0f 04 4e cb 
 04 be 70 
 bf f4 
 2c b8 58 
 bf f4 
 37 bb b3 
 bf f4 
 09 bf 6d 
 bf f4 
 07 be 43 
 bf f4 
 13 bd 57 
 bf f4 
 0e be da 
 bf f4 
 04 be 70 
 bf f4 
 2c b8 58 
 bf f4 
 0b be 8f 
 bf f4 
 07 be 43 
 bf f4 
 2c b8 58 
 bf f4 
 0e be da 
 bf f4 
 09 bf 6d 
 bf f4 
 21 09 02 01 9d 70 
 01 81 7f 
 07 be 43 
 bf f4 
 12 bc 86 
 bf f4 
 0c bf 38 
 bf f4 
 04 be 70 
 bf f4 
 2c b8 58 
 bf f4 
 04 be 70 
 bf f4 
 2c b8 58 
 bf f4 
 09 bf 6d 
 bf f4 
 0f bf 0b 
 bf f4 
 2c b8 58 
 bf f4 
 0f bf 0b 
 bf f4 
 0a bf 5e 
 bf f4 
 37 bb b3 
 bf f4 
 07 be 43 
 bf f4 
 13 bd 57 
 bf f4 
 2c b8 58 
 bf f4 
 33 ba 37 
 bf f4 
 16 bd 02 
 bf f4 
 11 bc b5 
 12 bc 86 
 bf f4 
 07 be 43 
 bf f4 
 2c b8 58 
 bf f4 
 0e be da 
 bf f4 
 07 be 43 
 0c bf 38 
 bf f4 
 13 bd 57 
 bf f4 
 04 be 70 
 bf f4 
 0b be 8f 
 bf f4 
 16 bd 02 
 bf f4 
 33 ba 37 
 bf f4 
 08 be bc 
 bf f4 
 2c b8 58 
 bf f4 
 02 3e 2d 
 02 0b 3f 56 
 02 3e 2d 
 bf f4 
 37 bb b3 
 bf f4 
 27 b9 23 
 bf f4 
 02 3e 2d 
 02 12 3d 5f 
 02 3e 2d 
 bf f4 
 21 b9 45 
 bf f4 
 19 bd fd 
 bf f4 
 02 3e 2d 
 02 0e 3f 03 
 02 3e 2d 
 bf f4 
 21 b9 45 
 bf f4 
 0c bf 38 
 bf f4 
 02 3e 2d 
 02 09 3e b4 
 02 3e 2d 
 bf f4 
 13 bd 57 
 bf f4 
 21 b9 45 
 bf f4 
 12 bc 86 
 bf f4 
 2c b8 58 
 bf f4 
 07 be 43 
 bf f4 
 33 ba 37 
 bf f4 
 2c b8 58 
 bf f4 
 13 bd 57 
 bf f4 
 04 be 70 
 bf f4 
 2c b8 58 
 bf f4 
 15 bd 31 
 15 04 4c f1 
 04 be 70 
 13 bd 57 
 04 13 3b b3 
 04 be 70 
 bf f4 
 11 bc b5 
 bf f4 
 12 bc 86 
 bf f4 
 04 be 70 
 bf f4 
 2c b8 58 
 bf f4 
 1b bc 1f 
 bf f4 
 09 bf 6d 
 bf f4 
 07 be 43 
 bf f4 
 2c b8 58 
 bf f4 
 11 bc b5 
 bf f4 
 09 bf 6d 
 bf f4 
 33 ba 37 
 bf f4 
 0c bf 38 
 04 be 70 
 bf f4 
 33 ba 37 
 bf f4 
 08 be bc 
 bf f4 
 28 b9 dc 
 bf f4 
 28 b9 dc 
 bf f4 
*/});


line = line.replace(/\s+/g, ' ').trim();

for (i=0; i<line.length; i = i + 3){

msg =  line.charAt(i) + line.charAt(i+1);

code = parseInt(msg,16);
console.log(code);
if (code >= 32 && code <= 126)
  pass += String.fromCharCode(parseInt(msg,16));

}

console.log(pass);
