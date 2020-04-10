# async-prog-nonblock-io-streams (Hometask)

Do hometask in `src/main.js` file. You can choose names for commands by yourself.

1. Create function for generating random symbols and write it to file:
   - you can use [crypto.randomBytes](https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback) method for it or `Math.random`;
   - you should use [generator function](https://learn.javascript.ru/generator) for it;
   - you should use stream to write this data into file (`*.txt`);
   - this file should have not less size than `200Mb`. Check file size by Node.js embedded tools;
   - trigger this function by CLI and use first argument for naming that new file
   - do not push that generated file to repository

2. Create function for transforming file:
   - this function should take 1 argument (filename);
   - you should use streams for reading this file and you should use streams for transforming data
   - transformation algorithm:

    ```plain
    iterate data by 1 character
    if char is number transform it to string (0->zero, 1->one, 2->two or 0->a, 1->b you can choose)
    if char is string transform it to inverse case (a-> A, A->a etc)
    ```

   - after transformation you should pipe this stream into writing it into new file (name for new file should be like: `oldname.txt` -> `oldname_transformed.txt`)

3. Write handlers in separated files. Export them to `src/main.js` file
