
const headerElements = document.querySelectorAll (`header`)
let stack1 = []
let stack2 = []
let stack3 = []
let forTheWin = []

initializeGame()

function initializeGame () {
    clearTheHeader()
    createGameSizeInputForm()
}

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
    for ( number=1; number<=3; number++) {
        number === 1
            ? stackNumber = stack1
            : number === 2
                ? stackNumber = stack2
                : stackNumber = stack3
        const thisStack = document.querySelector(`#stack${number}`)
        for ( i=stackNumber.length; i>0; i-- ) {
            const createDivStack = document.createElement (`div`)    
            createDivStack.setClass = `disk`
            createDivStack.setAttribute( `id` , `disk${stackNumber[i-1]}` )
            thisStack.appendChild (createDivStack)
            createDivStack.innerHTML = ( `${stackNumber[i-1]} disks` )
        }
    }
    clearTheHeader()
    return checkForTheWin()
}

function checkForTheWin(){
    return stack3 === forTheWin
        ? console.log(`WOOHOO`)
        : console.log(`not yet`)
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
