// Dao Villar Programming for Web Apps
// Wk 1 -- Javascript Practice

// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('!*** Goal2: Assignment: JavaScript Practice ***!');

    console.log("1. average of an array of numbers");
    var avgNumbers = function(arr){
    var answer = 0;
    var num = 0;
        
        for ( i = 0; i< arr.length; i++) {
        answer = answer + arr[i];
        ++num;
        result = answer / num;
       };
       return result;
    };
    console.log('average number = ', avgNumbers([1,2,3,4,5]));

    //--------------------------------------------------------
    console.log("2. concat first and last name");

        var fullName = function(nm1,nm2){
            var concatJB = nm1.concat(nm2);
            return concatJB;
        };

    console.log("Concat Names: ",fullName('James', 'Bond'));

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function"

       var wordCount = function(str){
        var strWC = 0;
        var str = str.split(" ");
        for(i = 0; i < str.length; i++)
           
          ++strWC;
       
      
            return strWC;
       };
 
    console.log("Word Count: ",wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");

        var charCount = function(cc1){
            var counter = 0;
            var cc1 = cc1.split("");
              for(i = 0; i < cc1.length; i++)
           
 -              ++counter;

              return counter;
         };

        

    console.log("Character Count: ",charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word ");

        var vowelsInWord = function(aeiou){
            var cntr = 0;
            var aeiou = aeiou.split("");
            
            for(x = 0; x < aeiou.length; x++)
                
                if (aeiou[x]==="a"){
                    cntr = cntr + 1; 
                    
                }else if(aeiou[x]==="e"){
                    cntr = cntr + 1;  
                    
                }else if(aeiou[x]==="i"){
                    cntr = cntr + 1; 
                    
                }else if(aeiou[x]==="o"){
                    cntr = cntr + 1; 
                    
                }else if(aeiou[x]==="u"){
                    cntr = cntr + 1; 
                    
                }
                
            return cntr;
        };
       
    console.log("How many vowels: ",vowelsInWord('I Love JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

        var findNum = function(arr, boolean){
            var odd = [];
            var even = [];
			
			if(boolean==false){
				for(i=0; i<arr.length; i++){
					if(arr[i] % 2 != 0){
						odd.push(arr[i]);
					}
				}
				console.log("Odd Numbers are:-");
				return odd;
			}
			else if(boolean==true||boolean==null){
				for(i=0; i<arr.length; i++){
					if(arr[i] % 2 == 0){
						even.push(arr[i]);
					}
				}
				console.log("Even Numbers are:-");
				return even;
			}
        }
        

    console.log(findNum([31,21,42,64,83,6,5,4])); // finds even numbers
	console.log(findNum([31,21,42,64,83,6,5,4],true)); // finds even numbers
    console.log(findNum([31,29,4,68,83,6,5,4], false)); // finds odd numbers

})();






