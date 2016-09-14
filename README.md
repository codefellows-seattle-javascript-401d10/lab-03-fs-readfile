![cf](https://i.imgur.com/7v5ASc8.png) lab-03-fs-async
======


## To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Description:
* For this assignment you will need to read three files and console log the first 8 bytes in hex of each file.
 * hint use `toString` docs
* Also, you must guarantee that three files are read and console logged in the order `'one.txt', 'two.txt', 'three.txt'` regardless of file size.
* You will need to write tests that gaurantee that the files are logged in order.
* You will also need to look up and implement async testing, making sure that you are not getting "false positives"(tests that are passing but shouldn't be).
 * hint read mocha docs    

## Bonus
* 2pts dont use nested callbacks  

##Rubric:
  * Async Handling: 4pts
  * Use of fs: 2pts
  * Testing: 4pts


Used test reference at:
http://tobyho.com/2015/12/16/mocha-with-promises/
