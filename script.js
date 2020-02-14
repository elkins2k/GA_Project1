console.log(`script.js connected!`)

/*
technical enablement of game logic
- each stack is an array
- array [0] is the bottom of the stack
- array [n] must be bigger than array [n+1]
- use array.push/pop to track stacks
- to start, array1 = [ 7, 6, 5, 4, 3, 2, 1]
- to win, array3 = [ 7, 6, 5, 4, 3, 2, 1]
*/

/*
create playing area with buttons
*/

/*
f = initialize game
allow user to enter number of disks for game (3-7)
set each stack array and populate first array with number of disks
create gameboard with number of disks chosen by user
*/

/*
f = on click, set sourceArray
on next click, set targetArray
if sourceArray[sourceArray.length-1] < targetArray[targetArray.length-1]
    then targetArray.push(sourceArray[sourceArray.length-1]), 
        sourceArray.pop()
        check for win
    else alert move not allowed
reset sourceArray and targetArray
return
*/

/*
f = check for win
if array3 != [ 7, 6, 5, 4, 3, 2, 1]
    then return
    else WIN!!,
    initialize game
*/