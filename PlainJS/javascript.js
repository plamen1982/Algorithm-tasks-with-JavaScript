                                      
                                                   //***PROBLEMS***//

//-------------------------------------------------1.NUMBER-CHECKER--------------------------------------------------//

/* INPUT/OUTPUT
 * 20 / 1, 2, 3, 6, 7, 9, 11, 13, 14, 17, 18, 19
 * ‐5 / no
 * 13 / 1, 2, 3, 6, 7, 9, 11, 13
 * */

 function printNumbers(number) {
    for (var i = 1; i < n; i++) {
        if (i % 4 != 0 && i % 5 != 0) {
            console.log(i);
        }
    }
}

//-------------------------------------------------2.FIND-MIN-MAX-NUMBER---------------------------------------------//

/* INPUT/OUTPUT
 * [1, 2, 1, 15, 20, 5, 7, 31] / Min -> 1 Max -> 31
 * [2, 2, 2, 2, 2] / Min -> 2 Max -> 2
 * [500, 1, ‐23, 0, ‐300, 28, 35, 12]  / Min -> -300 Max -> 500
 * */

 function findMinAndMax(arr) {

    var sortedNumbers = arr.sort(function (a, b) {
        return a > b;
    });
    console.log('Min -> ' + sortedNumbers[0]);
    console.log('Max -> ' + sortedNumbers[sortedNumbers.length - 1]);
}

//-------------------------------------------------3.DISPLAY-PROPERITES----------------------------------------------//

/* OUTPUT
 * acitveElement
 * alinkColor
 * all
 * ...
 * xmlVersion
 * */

 function displayProperties(obj) {
    var methods = [];
    var result = document.getElementById('result');
    for (var m in obj) {
        methods.push(m)
    }
    methods.sort(function (a, b) {
        return a > b;
    });
    console.log(methods)
}

//-------------------------------------------------4.CREATE-ARRAY----------------------------------------------------//

/* INPUT/OUTPUT
 * Allocates array of 20 integers and initializes each element by its
 * index multiplied by 5
 * */

 function createArray(number) {
    var array = [];
    for (var i = 0; i < number; i++) {
        array[i] = i * 5;
        console.log(array[i])
    }
}

//-------------------------------------------------5.COMPARE-CHARS---------------------------------------------------//

/* INPUT/OUTPUT
 *['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']
 *['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'] / Equal
 *['3', '5', 'g', 'd']
 *['5', '3', 'g', 'd'] / Not Equal
 *['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';']
 *['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']  / Not Equal
 * */

 function compareChars(arr1, arr2) {

    if (arr1.length == arr2.length) {

        for (var i = 0; i < arr1.length; i++) {

            if (arr1[i] != arr2[i]) {

                console.log('Not equal');
                break;

            }
        }
        console.log('Equal')
    }

    else {
        console.log('Not equal')
    }
}

//-------------------------------------------------6.FIND-MAX-SEQUENCE-----------------------------------------------//

/* INPUT/OUTPUT
 * [2, 1, 1, 2, 3, 3, 2, 2, 2, 1] - [2, 2, 2]
 * ['happy'] - [happy]
 * [2, 'qwe', 'qwe', 3, 3, '3'] - [3, 3]
 * */

function findMaxSequence(arr) {
    var newArr = [];
    var startIndex = 0;
    var longest = 0;
    var current = 1;
    if (arr.length > 1) {

        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] === arr[i + 1]) {
                current++;
            }
            else {
                if (longest <= current) {
                    longest = current;
                    startIndex = i - longest + 1;
                }
                current = 1;
            }
        }
        console.log('Start Index for the new Array is: ' + startIndex);
        console.log('End Index for the new Array is: ' + parseInt(startIndex + longest));
        newArr = arr.slice(startIndex, startIndex + longest);
        console.log('The new array with the biggest sequence is: ' + newArr);
    }
    else {
        console.log(arr[0])
    }
}

//-------------------------------------------------7.SORTED-ARRAY-WITH-SELECTION-SORT--------------------------------//

/* INPUT/OUTPUT
 * [5, 4, 3, 2, 1] - [1, 2, 3, 4, 5]
 * [12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3] - [2, 3, 3, 6, 6, 12, 12, 22, 50, 51, 712]
 * */

 function sortedArray(arr){
    var i;
    var j;
    var index;
    var min = Number.MAX_VALUE;
    for(i = 0; i < arr.length; i++){
        //j starting from i, otherwise we sorting already sorted elements
        for(j = i; j < arr.length; j++){
            if(arr[j] < min){
                min = arr[j];
                index = j;
            }
        }
        //Swap
        arr[index] = arr[i];
        arr[i] = min;
        //Always reset your temporary variables and counters!!!
        min = Number.MAX_VALUE;
    }
    console.log(arr);
}

//-------------------------------------------------8.MOST-FREQUENT-NUMBER-------------------------------------------//

/*INPUT/OUTPUT
 *[4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3] / 4 (5 times)
 *[2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1] / 1 (4 times)
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] / 1 (1 times)
 * */

function findMostFreqNum(arr) {
    var i;
    var j;
    var number;
    var mostFrequent = 0;
    var current = 1;
    for (i = 0; i < arr.length - 1; i++) {

        for (j = i + 1; j < arr.length; j++) {

            if (arr[i] === arr[j]) {
                current++;
            }
        }

        if (mostFrequent < current) {
            mostFrequent = current;
            number = arr[i];
        }
        current = 1;
    }
    console.log(number + ' (' + mostFrequent + ' times )');
}

//-------------------------------------------------9.REVERSE-STRING--------------------------------------------------//

/*INPUT/OUTPUT
 * 'sample'/elpmas
 * 'softUni'/inUtfos
 * 'java script'/tpircs avaj
 * */

function reverseString(str){
//become arr(with split()) then reverse the array(with reverse())and become str again(with join())
    var reverseStr = str.split('').reverse().join('');
    console.log(reverseStr)
}

//-------------------------------------------------10.CHECK-THE-BRACKETS---------------------------------------------//

/*INPUT/OUTPUT
 * '( ( a + b ) / 5 – d )'/correct
 * ') ( a + b ) )'/incorrect
 * '( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'/incorrect
 * '( b  ) )( c + d 2 / ( 2 + ( 12 – c / ) )( a + 3 )' /incorrect
 * */

function checkBrackets(str) {
    console.log('Input: ' + str)
    var i;
    var bracket = {
        left:'(',
        right:')'
    };

    var leftBracket = 0;
    var rightBracket = 0;

    for(i = 0; i < str.length; i++) {
        if (bracket.right === str[0]) {
            console.log('Incorrect');
            return;
        }
        else {

                if (bracket.left === str[i]) {
                    leftBracket++;
                }
                 if (bracket.right === str[i]) {
                    rightBracket++;
                }
                if (rightBracket > leftBracket) {
                    console.log('Incorrect');
                    return;
                }
            }
        }
    if(leftBracket === rightBracket){
        console.log('Correct');
    }
    else {
        console.log('Incorrect')
    }
}

//-------------------------------------------------11.SUBSTRING-COUNT------------------------------------------------//

/*INPUT FROM HTML/OUTPUT INTO THE HTML AND INTO THE CONSOLE
 * in, We are living in a yellow submarine. We don 't have anything else.Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days. / 9
 *
 * your, 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head. /2
 *
 * but, 'But you were living in another world trying' to get your message through. / 1
 * */

function countSubstringOccur(str) {

    var index;
    var count = 0;
    var remainder = '';
    var result = document.getElementById('result');
    var arr = str.split(',')
    var searchWord = arr[0];
    var container = arr[1].toLowerCase();

    while (index != -1) {
        index = container.indexOf(searchWord);
        remainder = container.slice(index + searchWord.length);
        container = remainder;
        if (index >= 0) {
            count++
        }
    }
    console.log(count);
    result.innerHTML = "Your search word is find <strong>" + count + " times </strong> in your text"
}


//------------------------------------------------12.REPLACE-WHITE-SPACES--------------------------------------------//
/*INPUT/OUTPUT
* 'But you were living in another world tryin' to get your message through' / Butyouwerelivinginanotherworldtryin'togetyourmessagethrough
* */

 function replaceSpaces(str){
    var i;
    var noSpacesStr;
    var arr = str.split(' ');
    for (i = 0; i < arr.length; i++){
        noSpacesStr += arr[i];
    }
    console.log(noSpacesStr);
}

//------------------------------------------------13.PALINDROMES-----------------------------------------------------//

/*INPUT / OUTPUT
* 'There is a man, his name was Bob.' / a, bob
* */

function findPalindromes(str){
    var i;
    var j;
    var l;
    var str1odd = "";
    var str2odd = "";
    var arrResult = [];
    var arrHelperOdd1 = [];
    var arrHelperOdd2 = [];
    var arrHelperEven = [];
    var str1even = "";
    var str2even = "";
    var counterEven = 0;
    var counterOdd = 0;

    //STEP ONE - 1.1. CLEAR THE STRING FROM SYMBOLS 1.2 MAKE IT LOWERCASE 1.3 CONVERT THE STRING INTO ARRAY WITH ONLY WORDS
    var arr = str.match(/[A-Za-z0-9' ']/g);
    var newStr = arr.join('').toLowerCase();
    var lowerArr = newStr.split(' ');

    //STEP TWO - IF A MEMBER OF THE ARRAY HAS LENGTH EQUAL TO ONE PUSH IT INTO THE RESULT ARRAY
    for(i = 0; i < lowerArr.length; i++){
        if(lowerArr[i].length === 1){
            arrResult.push(lowerArr[i]);
        }
        else{
    //STEP THREE - IF MEMBER OF THE ARRAY IS WITH EVEN LENGTH GO INSIDE THIS IF STATEMENT OTHERWISE GO TO ESLE STATEMENT
            if(lowerArr[i].length % 2 === 0){
                for(j = 0; j < lowerArr[i].length; j++ ){
    //STEP FOUR - ASSIGN HALF OF THE WORD OF THE MEMBERS FROM THE ARRAY TO str1even AND THE OTHER HALF TO str2even
                    if(counterEven < (lowerArr[i].length)/2){
                        str1even += lowerArr[i][j];
                        counterEven ++;
                    }
                    else{
                        str2even += lowerArr[i][j];
                    }
                }
    //STEP FIVE - REVERSE str2even
                arrHelperEven= str2even.split('');
                arrHelperEven.reverse();
                str2even = arrHelperEven.join('')
            }
                else {
    //STEP SIX - FOR str1odd CREATE ONE EXTRA LETTER
                for (j = 0; j < lowerArr[i].length; j++) {
                    if (counterOdd <= (lowerArr[i].length) / 2) {
                        str1odd += lowerArr[i][j];
                        counterOdd++
                    }
                    else {
                        str2odd += lowerArr[i][j];
                    }
                }
    //STEP FIVE
                arrHelperEven2 = str2odd.split('');
                arrHelperEven2.reverse();
                str2odd = arrHelperEven2.join('')
            }
    //STEP SEVEN - DELETE THE EXTRA LETTER FROM str1odd
                arrHelperOdd1 = str1odd.split('');
                arrHelperOdd1.pop();
                str1odd = arrHelperOdd1.join('');
    //STEP EIGHT COMPARE THE TWO HALF OF THE WORD OF THE ARRAY, AND PUSH IT TO RESULT ARRAY IF THEY MATCH
            if(str1even){
                if(str1even == str2even){
                     arrResult.push(lowerArr[i]);
                }
            }
            if(str1odd){
                if(str1odd === str2odd){
                    arrResult.push(lowerArr[i]);
                }
            }
            str1odd = "";
            str2odd = "";
            str1even = "";
            str2even = "";
            counterEven = 0;
            counterOdd = 0;
        }
    }
        console.log(arrResult.join(', '));
}


//---------------------------------------------14.MOST-FREQUENT-WORD-------------------------------------------------//

/*INPUT/OUTPUT
* 'in the middle of the night' / the ‐> 2 times
*'Welcome to SoftUni. Welcome to Java. Welcome everyone.' / welcome ‐> 3 times
*'Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.' / come ‐> 2 times, darling ‐> 2 times, hello ‐> 2 times, my ‐> 2, welcome ‐> 2 times
* */

function findMostFreqWord(str){
    var i;
    var j;
    var k;
    var arrEqualCount = [];
    var mostFreq = 0;
    var currentIndex = 0;
    var current = 1;
    var arrChars = str.match(/[A-Za-z0-9' ']/g);
    var newStr = arrChars.join('').toLocaleLowerCase();
    var arrWords = newStr.split(' ');

    for(i = 0; i < arrWords.length; i++){
        for( j = i + 1; j < arrWords.length; j++){
            if(arrWords[i] === arrWords[j]){
                current++;
                currentIndex = j;
            }
        }
        if(mostFreq < current){
            mostFreq = current;
            arrEqualCount = [];
            arrEqualCount.push(arrWords[i]);
        }
        else if(mostFreq === current){
            mostFreq = current;
            arrEqualCount.push(arrWords[currentIndex]);
        }
        current = 1;
    }
    if(arrEqualCount.length === 1){
        console.log(arrEqualCount[0] + ' -> ' + mostFreq + ' times');
    }
    else{
        for(k = 0; k < arrEqualCount.length; k++){
            console.log(arrEqualCount[k] + ' -> ' + mostFreq + ' times');
        }
    }
}



//---------------------------------------------15.CARDS-FREQUENCY----------------------------------------------------//
/*INPUT/OUTPUT
* '8 2 4 10 J A K 10 K K' / 10%
* 'J 2 2 2 2 2 2 J 2'
* '10 10'
* */

//SOLUTION 1 - OUTPUT IS IN A WRONG SEQUENCE, BUT GOOD EXAMPLE IF THE SEQUENCE IS NOT REQUIRED

function findCardFrequency1(str){
    var i;
    var j;
    var arrResults = [];
    var count = 1;
    var arrChars = str.match(/[A-Za-z0-9' ']/g);
    var newStr = arrChars.join('');
    var arr = newStr.split(' ').sort();
    var length = arr.length;
     for(i = 0; i < arr.length;){
         for(j = i + 1; j < arr.length; j++){
             if(arr[i] === arr[j]){
                 count++;
             }
         }
         arrResults.push([arr[i],(count/length)*100]);
         arr = arr.slice(i + count);
         i = 0;
         count = 1;
     }
    printMatrixResults(arrResults);
}

//SOLUTION 2 - THE RIGHT ONE

function findCardFrequency(str){
    var i;
    var j;
    var arrResult = [];
    var count = 1;
    var index = -1;
    var arrChars = str.match(/[A-Za-z0-9' ']/g);
    var newStr = arrChars.join('');
    var arr = newStr.split(' ');
    var length = arr.length;
    for(i = 0; i < arr.length;){
        for(j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                count ++;
                if(count === 2){
                    index = j;
                }
            }
        }
        arrResult.push([arr[i], (count/length)*100]);
        arr.splice(index, count - 1);
        arr.shift();
        count = 1;
    }
    printMatrixResults(arrResult);
}

//HELPER FUNCTION FOR PRINTING A MATRIX

function printMatrixResults(matrix){
    var i;
    var j;
    for(i = 0; i < matrix.length; i++){
            console.log(matrix[i][0] + ' -> ' + matrix[i][1].toFixed(2) + ' %')
    }
}

//---------------------------------------------16.EXTRACT-ELEMENT-CONTENT--------------------------------------------//

/*INPUT/OUTPUT
*'<p>Hello</p><a href=\'http://w3c.org\'>W3C</a>' / HelloW3C
* */

function extractContent(input){
    var str = input.value;
    var newNodes = document.getElementById('input1');
    newNodes.innerHTML = str;
    var paragraph = document.getElementsByTagName('p')[2].textContent;
    var anchor = document.getElementsByTagName('a')[0].textContent;
    var stringResult = paragraph + anchor;
    var result = document.getElementById('result');
    result.innerHTML = stringResult;
}
//---------------------------------------------17.REPLACE-<a>-TAG------------------------------------------------------//

/*INPUT/OUTPUT
'<ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>' /  <ul><li>[URL href=http://softuni.bg]SoftUni[/URL]</li></ul>
* */

function replaceAtag(str){
    var i;
    var result='';
    var index = -1;
    var arr = str.split('');
    for(i = 0; i < arr.length; i++){
        if('<' ===  arr[i]){
            if('a' === arr[i+1]){
                index = i;
                arr.splice(index, 2,'[URL')
            }
            index = -1;
        }
        if('>' === arr[i]){
            if('a' === arr[i - 1]){
                index = i - 3;
                arr.splice(index, 4, '[/URL]')
            }
        }
    }
    result = arr.join('');
    console.log(result)
}

//---------------------------------------------18.TEXT-MODIFIER------------------------------------------------------//



 // BAD IDEA

 function fixCasing1(str){
    var i;
    var j;
     var strCompare = '';
    var caseStr = '';
    var strForModify = '';
    var result = '';
     var mixcase = 'mixcase';
     var mixForCompare = '';
     var upcase = 'upcase';
     var lowcase = 'lowcase';
    var arr = str.value.split('');
    for(i = 0; i < arr.length; i++){
        if('<'=== arr[i]){
            if('m' === arr[i + 1]){
                strCompare = arr.join()
                 mixForCompare = arr.slice(i+1,7)
            }
            switch (caseStr){
                case 'upcase': upcase(strForModify);
                    break;
                case 'mixcase': mixcase(strForModify);
                    break;
                case 'lowcase': lowcase(strForModify);
                default :''
                    break;

            }
        }
    }

}

function fixCasing(str){

}
/*INPUT
/OUTPUT
'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>.We <mixcase>don't</mixcase> have <lowcase>Anything</lowcase> else.'
/We are LiVinG in a YELLOW  SUBMARINE.We don'T have anything else.
* */
function mixCase(str,theCase){
    var i;
    var originStr = str;
    var str = str;
    var slicedStr = '';
    var mixWord = '';
    var remainStr = '';
    var indexes = [];
    var openTag = theCase[0];
    var closeTag = theCase[1];
    var openTagLength = theCase[0].length;
    var closeTagLength = theCase[1].length;
 //   var startIndexTotal = 0;
  //  var endIndexTotal = 0;
    var currentStartIndex = 1;
    var currentEndIndex = -1;
    while(currentStartIndex >= 0){
        currentStartIndex = str.indexOf(openTag);
        currentEndIndex = str.indexOf(closeTag);
        if(currentStartIndex >= 0 && currentEndIndex >= 0){
            slicedStr = str.slice(currentStartIndex + openTagLength, currentEndIndex)
            for(i = 0; i < slicedStr.length; i++){
                if(i % 2 === 0){
                    mixWord += slicedStr[i].toUpperCase();
                }
                else{
                    mixWord += slicedStr[i].toLowerCase();
                }
            }

          //  startIndexTotal =+ currentStartIndex;
           // endIndexTotal =+ currentEndIndex;
            indexes.push([currentStartIndex + openTagLength, currentEndIndex + closeTagLength, mixWord, slicedStr]);
            str = str.slice(currentEndIndex + closeTagLength)
            mixWord = '';
        }
    }
    console.log(indexes)
}
function replacment(){

}

                                 //***OTHER-EXAMPLES-FROM-ARBITRARY-SOURCES***//

/*INTO HTML
<input text="text" value="4" id="input5"/>
<input text="text" value="4" id="input6"/>
<br/>
<input text="text" value="2" id="input7"/>
<input text="text" value="4" id="input8"/>
<br/>
<input type="button" value="Add" onclick="someExamples1FromStackOverflow()"/>
* */

//Stackoverflow

 function operationsWithInputs(){

    var result = [];
    var matrixInputs = [
        [
            document.getElementById('input5'),
            document.getElementById('input6')
        ],
        [
            document.getElementById('input7'),
            document.getElementById('input8')
        ]
    ];


    //THIS IS A GOOD STUFF
    for (var i = 0; i < matrixInputs.length; i++) {
        result[result.length] = parseInt(matrixInputs[0][i].value) - parseInt(matrixInputs[1][i].value);
    }

    alert(result.join(' '));
}

//From Mozilla documentation TEST-INPUT var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);

function replacer(match, p1, p2, p3, offset, string){
    //p1 is nondigits, p2 is digits, and p3 is non-aphanumerics
    return  [p1, p2, p3].join(' - ')
}


function sortArrayIf(toSort) {

    console.log("Input array:  ", toSort);
    var crntMin = Number.MAX_VALUE;
    var crntMinIndx = 0;
    for (var i = 0, j = 0; j, i < toSort.length; i++) {
        if (toSort[i] < crntMin) {
            crntMin = toSort[i];
            crntMinIndx = i;
        }
        if (i == toSort.length - 1) {
            toSort[crntMinIndx] = toSort[j];
            toSort[j] = crntMin;
            j++;
            crntMin = toSort[j];
            crntMinIndx = i = j;
        }
    }
    console.log("Sorted array: ", toSort);
}




