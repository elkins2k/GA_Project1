
const headerElements = document.querySelectorAll (`header`)
let stack1 = []
let stack2 = []
let stack3 = []
let forTheWin = []

initializeGame()
determineMove()

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
                    forTheWin.push(i)
                }
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
        let thisStack = document.querySelectorAll(`#stack${number}`)
        while(thisStack[0].lastElementChild)
            thisStack[0].removeChild(thisStack[0].lastElementChild)
        thisStack = document.querySelector(`#stack${number}`)
        for ( i=stackNumber.length; i>0; i-- ) {
            const createDivStack = document.createElement (`div`)    
            createDivStack.className = `disk`
            createDivStack.setAttribute( `id` , `disk${stackNumber[i-1]}` )
            thisStack.appendChild (createDivStack)
            createDivStack.innerHTML = ( `disk ${stackNumber[i-1]}` )
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
diskInPlay = ``
function determineMove () {
    const divStack1 = document.querySelector(`div #stack1`)
    divStack1.addEventListener(`click`, () => {
        console.log (`div stack1 clicked`)
        if (diskInPlay === ``) {
            diskInPlay = stack1[stack1.length-1]
            stack1.pop()
        } else if (diskInPlay < stack1[stack1.length-1]|| stack1.length===0) {
            stack1.push(diskInPlay)
            diskInPlay=``
            updateGameBoard()
        } else {
            console.log(`illegal move`)
        }
    })
    const divStack2 = document.querySelector(`div #stack2`)
    divStack2.addEventListener(`click`, () => {
        console.log (`div stack2 clicked`)
        if (diskInPlay === ``) {
            diskInPlay = stack2[stack2.length-1]
            stack2.pop()
        } else if (diskInPlay < stack2[stack2.length-1] || stack2.length===0) {
            stack2.push(diskInPlay)
            diskInPlay=``
            updateGameBoard()
        } else {
            console.log(`illegal move`)
        }
    })

    const divStack3 = document.querySelector(`div #stack3`)
    divStack3.addEventListener(`click`, () => {
        console.log (`div stack3 clicked`)
        if (diskInPlay === ``) {
            diskInPlay = stack3[stack3.length-1]
            stack3.pop()
        } else if (diskInPlay < stack3[stack3.length-1] || stack3.length===0) {
            stack3.push(diskInPlay)
            diskInPlay=``
            updateGameBoard()
        } else {
            console.log(`illegal move`)
        }
    })
}
