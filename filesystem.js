const fs = require('fs')  

// CRUD  --> create, read , update , delete

// 1) create a file using  fs  module -->
//  fs.writeFileSync('one.pdf' , 'this is dummy text')
// fs.writeFileSync('dummy.js' , 'let x = 10 \n let y =5 \n console.log(x+y)')

//2) read a file using fs module -->
// let ans = fs.readFileSync('one.pdf', 'utf-8')
// console.log(ans)

//3) add text to an existing file --> appned method
// fs.appendFileSync('one.pdf' , ' this is an additional text')

//4) rename a file -->
// fs.renameSync('one.js' , 'two.js')


//5)delete file  -->
// fs.unlinkSync('dummy.js')


fs.writeFileSync('tiral.js', 'hello')
