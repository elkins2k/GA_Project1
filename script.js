/*
technical enablement of game logic
- each stack is an array
- array [0] is the bottom of the stack
- array [n] must be bigger than array [n+1]
- use array.push/pop to track stacks
- to start, array1 = [ 7, 6, 5, 4, 3, 2, 1]
- to win, array3 = [ 7, 6, 5, 4, 3, 2, 1]
*/
let stack1 = []
let stack2 = []
let stack3 = []
const forTheWin = [ 7, 6, 5, 4, 3, 2, 1 ]
/*
create playing area with buttons
*/

/*
f = initialize game
allow user to enter number of disks for game (3-7)
set each stack array and populate first array with number of disks
create gameboard with number of disks chosen by user
*/
function initializeGame () {
    const headerElements = document.querySelectorAll (`header`)
    //clear out the header 
    while (headerElements[0].lastElementChild)
        headerElements[0].removeChild ( headerElements[0].lastElementChild )
    //create new header elements to get user input
    //create form element
    const headerForm = document.createElement ("form")
    headerForm.className = "headerForm"
    headerForm.innerHTML = (`Please select a game to play: `)
    headerElements[0].appendChild(headerForm)
    //ceate radio button inputs
    for (i=3; i<=7; i++) {
        let headerInput = document.createElement ("input")
        headerInput.setAttribute(
            {"type":"radio"})
        headerInput.setAttribute("id" , `${i}`)
        headerInput.setAttribute("name" , "diskCount")
        headerInput.setAttribute("value" , `${i}`)
        console.log(headerInput)
        headerForm.appendChild (headerInput)
        let headerLabel = document.createElement (   
            "label", {"for" : `${i}`}
        )
        console.log(headerLabel)
        headerForm.appendChild (headerLabel)
        headerLabel.innerHTML = (`${i} disks`)
    }
    

    
    

    const message = `<p> How many disks would you like to try? (enter a # between 3 and 7) </p>`
    headerDiv.outerText (message)
    stack1 = [ 7, 6, 5, 4, 3, 2, 1 ]
    stack2 = [ ]
    stack3 = [ ]
}
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
initializeGame();