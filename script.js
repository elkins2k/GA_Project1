
const headerElements = document.querySelectorAll (`header`)
let stack1 = []
let stack2 = []
let stack3 = []
let forTheWin = []

initializeGame()

function initializeGame () {
    clearTheHeader()
    createGameSizeInputForm()

function clearTheHeader () {
    while (headerElements[0].lastElementChild)
        headerElements[0].removeChild ( headerElements[0].lastElementChild )
    return headerElements
}

function createGameSizeInputForm () {
    const createForm = document.createElement (`form`)
    createForm.className = `inputForm`
    createForm.innerHTML = (`Please select a game to play: `)
    headerElements[0].appendChild(createForm)
    //ceate radio button inputs
    for ( i=3; i<=7; i++ ) {
        const createInput = document.createElement (`input`)    
        createInput.setAttribute( `type` , `radio` )
        createInput.setAttribute( `id` , `${i}` )
        createInput.setAttribute( `name` , `gameInput` )
        createInput.setAttribute( `value` , `${i}` )
        createForm.appendChild (createInput)
        let headerLabel = document.createElement (`label`)
        headerLabel.setAttribute ( `for`, `${i}` )
        createForm.appendChild (headerLabel)
        headerLabel.innerHTML = ( `${i} disks` )
    }
    return setGameSize ()
}

function  setGameSize () {
    const headerInput = document.querySelectorAll(`input`)
        headerInput.forEach(radioInput => {
            radioInput.addEventListener('click', (event) => {
                stack1 = []
                stack2 = []
                stack3 = []
                for ( i=parseInt(radioInput.value) ; i>0; i-- ) {
                    stack1.push(i)
                }
                forTheWin=stack1
                return updateGameBoard()
            })        
        })
}

function updateGameBoard (){
        const thisStack = document.querySelector(`#stack1`)
        for ( i=0; i<stack1.length; i++ ) {
            const createDivStack = document.createElement (`div`)    
            createDivStack.setClass = `disk`
            createDivStack.setAttribute( `id` , `disk${stack1[i]}` )
            thisStack.appendChild (createDivStack)
            createDivStack.innerHTML = ( `${i+1} disks` )
        }
    }
    //clearTheHeader()
    return checkForTheWin()
}

function checkForTheWin(){
    return stack1 === forTheWin
        ? console.log(`WOOHOO`)
        : console.log(`keep trying`)
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
