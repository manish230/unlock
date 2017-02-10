var stream = require('stream');
var events=require('events');
var myfile = process.argv[2];
var key = process.argv[3];
var crypto = require ('crypto');
var fs = require('fs');

// lets starst coding it 

 if (key.length!=0) {                          //checking length of key entered
 	fs.exists('/home/manish/Desktop/'+myfile, (exists) => {   //checking existence of file
              if(exists){
           	var cipher = crypto.createCipher('aes192', key.toString());
                var input = fs.createReadStream(myfile);    //creating read stream
		var output = fs.createWriteStream('unlock.enc');	
		input.pipe(cipher).pipe(output);
		input.on('close',()=>{
                	fs.unlink('/home/manish/Desktop/'+ myfile,()=>{
            		console.log("old file has been deleted successfully");
                     })//finishing unlink code
                })//closing input pipe binder
               //waiting to end of streaming operation
              input.on('end',(err)=>{
            	if(!err){
                    //creating a write stream
                output.on('finish',()=>{
	          console.log("all the data is written in output file ");
                      fs.rename('/home/manish/Desktop/unlock.enc','/home/manish/Desktop/'+'tlocked.txt',(err)=>{
               if(!err){console.log("file is locked and renamed");}})
  
	    		}) //closing output binder
                 // piping input and output stream
               
               }//closing if for err
             }) 
       } //closing if exists
     else
     console.log("file does not exists");
         }) //closing fs.exists 																																														
        } //closing if statement
   else 
  console.log ("password is too short ");
