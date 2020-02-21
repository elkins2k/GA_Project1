This is a Tower of Hanoi game. Objective is to move all disks from the left 
most stack, to the far right, moving one disk at a time without placing a larger
disk on a smaller disk.

Winning the game grabs a random "winner" GIF from GIPHY API

## game board
- header area = prompts that inform player what is expected from them next
- game board = play area with 3 sections/pegs and disks
- footer area = current moves tracker, best score tracker, optimal score
- allow player to choose a "series" to play, of 3-7 #s of disks to start game

## MVP
<details>
    <summary>BRONZE</summary>
<p>game logic
        <p><strong>initialize game area</strong>
            <li>all disks are stacked biggest to smallest, bottom to top, on the left</li>
        <strong>moving</strong>
            <li>user choses a source stack to move top disk from, then selects the target stack to move to</li>
            <li>allow move if disk being moved is smaller than top disk on the target stack</li>
            <li>game ends when all disks are stacked on the far-right stack</li>
            <p>
</details>

<details>
    <summary>SILVER</summary>
<p>count number of moves
 <p>compare count to optimal solution (2^# - 1)
    <li>3 disks = 7 moves
   <li>4 disks = 15 moves
   <li>5 disks = 31 moves
   <li>6 disks = 63 moves
    <li>7 disks = 127 moves
 <p> if player does not match optimal, suggest player "try again" or allow them to try a different number of disks
<p> track player "best score"
 <p> if player matches optimal, congratulate them and suggest they "advance by adding a disk" or allow them to try different number
<p> if player chooses a different number of disks (up or down) - reset best score
</details>

<details>
    <summary>GOLD</summary>
<p>
<li>add graphics for stack and disks (<strong>**DONE**</strong> ...ish - added a background image for the stacks)
<li>eliminate buttons and allow player to "pick" a disk and pick a stack (<strong>**DONE**</strong>)
<li>animate move (<strong>**DONE**</strong>)
<li>eliminate buttons and allow player to "pick" a disk and pick a stack (<strong>**DONE**</strong>)
<li>track best score for each series (3 disks, 4 disks, etc.) (<li>eliminate buttons and allow player to "pick" a disk and pick a stack (<strong>**DONE**</strong>)
<li>allow user to display thier best scores anytime and return to game (<li>eliminate buttons and allow player to "pick" a disk and pick a stack (<strong>**DONE**</strong>)
<li>push their best scores to Twitter or Facebook via API????
</details>

## Gameboard drafts
```
|================================|
|  choose a source stack         |
|================================|
|    =     |          |          |
|   ===    |          |          |
|  =====   |          |          |
| =======  |          |          | 
| <button> | <button> | <button> |
|================================|
|  moves      best       optimal |
|    0         20           15   | 
|================================|

|================================|
|  choose a target stack         |
|================================|
|    =     |          |          |
|   ===    |          |          |
|  =====   |          |          |
| =======  |          |          | 
| <BUTTON> | <button> | <button> |
|================================|
|  moves      best       optimal |
|    0         20           15   | 
|================================|

|================================|
|  choose a source stack         |
|================================|
|          |          |          |
|   ===    |          |          |
|  =====   |          |          |
| =======  |    =     |          | 
| <button> | <BUTTON> | <button> |
|================================|
|  moves      best       optimal |
|    1         20           15   | 
|================================|
```

## Technologies
 - Using a lot of DOM manipulation to dynamically create the game board look 
    and feel as well as the user prompts in the header area and game tracking 
    in the footer. This required creating a standalone function to clear DOM 
    elements so new/updates coudl be created without stacking the elements on 
    top of each other.
 - Played with axios and the GIPHY API to pull a random GIF once the player
    wins the game. BTW: most of the GIFS coming back are lame, so looking for 
    a new key word to search in GIFY.
 - Discovered a new (to me) way to cycle through a list of arrays using 
    for...in. This allowed me to refactor a LOT of code, especially the "move" 
    function that was basically triple in size - a set of code for each stack -
    and made updates to this section tedious because I had to track down each 
    line for each stack and make the same update
 - It was always important to me that the game work on mobile devices, so leveraging the viewer width/height (vw/vh) units in my styling was critical
 - got to use some animation to improve the UX **_thanks to Marc_** for pointing me to https://github.com/daneden/animate.css

## Approach
 - I first started by brainstorming and jotting down my thoughts in this readme
    on how the game should look, the logic, and features. Just getting the 
    thoughts and ideas down helped me organize when I transitioned to 
    pseudo-code
 - I then started writing the pseudo-code in the JS file, jotting down the 
    logic, variables I would need, etc. From there, I left the essence of my 
    pseudo-code as inline documentation and wrote out the actual JS code. I was
    able to progress VERY rapidly with the approach and had base MVP done in 
    1.5 days.
 - From here, it has been a matter of tweaks and enhancements along the way!
 

## Roadblocks overcome
 - Getting the disk DIVs to align to the bottom of the stack DIVs!! I spent an 
    entire weekend battling this issue. Since it was a holiday weekend, I had
    to wait an extra day to bounce my problem off our scrum-master and others
    in my group. A **_big shout-out to Seamus_** for steering me in the right 
    direction and finally restoring my sanity!
 - As I stated earlier, rafactoring my code was a big deal because I had code 
    in triplicate - one set of code for each stack. I was able to finally get
    around this and refactor my code using a for...in loop using 
    {1:stack1, 2:stack2, 3:stack3} as my constant. This revelation eliminated 
    over 60 lines of code for one function alone!
 - SCOPE!! needing variables in other functions or reusing variables still in 
    scope was a killer. Backtracking through the code to find out why a value 
    had disappeared or had a value I wasn't expecting took some time. I'm being
    more intentional naming my vars - especially in for loops - to avoid this 
    issue and passing variables needed in other functions, or simply 
    initializing vars globally so they can be set and passed as needed.
