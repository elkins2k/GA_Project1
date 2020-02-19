```
This is a Tower of Hanoi game. Objective is to move all disks from the left 
most stack, to the far right, moving one disk at a time without placing a larger
disk on a smaller disk.

Winning the game grabs a random "winner" GIF from GIPHY API
```

# game board
- header area = prompts that inform player what is expected from them next
- game board = play area with 3 sections/pegs and discs
- footer area = current moves tracker, best score tracker, optimal score
- allow player to choose a "series" to play, of 3-7 #s of disks to start game

### MVP (BRONZE)
```
game logic
    - initalize game area
        -all disks are stacked biggest to smallest, bottom to top, on the left
    - moving
        - user choses a source stack to move top disk from, then selects the target stack to move to
        - allow move if disk being moved is smaller than top disk on the target stack
    - game ends when all disks are stacked on the right stack
```
### MVP (SILVER)
```
 - count number of moves
 - compare count to optimal solution (2^# - 1)
    - 3 disks = 7 moves
    - 4 disks = 15 moves
    - 5 disks = 31 moves
    - 6 disks = 63 moves
    - 7 disks = 127 moves
 - if player does not match optimal, suggest player "try again" or allow them to try a different number of disks
 - track player "best score"
 - if player matches optimal, congratulate them and suggest they "advance by adding a disk" or allow them to try different number
 - if player chooses a different number of disks (up or down) - reset best score
 ```
### 2.0 ideas (GOLD)
```
 - track best score for each series (3 disks, 4 disks, etc)
 - allow user to display thier best scores anytime and return to game
 - push thier best scores to twitter or facebook via API????
 - add graphics for stack and disks
 - eliminate buttons and allow player to "pick" a disk and pick a stack
 - animate move
 ```
### Gameboard drafts
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
 - using a lot of DOM manipulation to dynamically create the game board look 
    and feel as well as the user prompts in the header area and game tracking 
    in the footer. This required creating a standalone function to clear DOM 
    elements so new/updates coudl be created without stacking the elements on 
    top of each other.
 - played with axios and the GIPHY API to pull a random GIF once the player
    wins the game. BTW: most of the GIFS coming back are lame, so looking for 
    a new key word to search in GIFY.
 - discovered a new (to me) way to cycle through a list of arrays using for..in.
    This allowed me to refactor a LOT of code, especially the "move" function 
    that was basically triple in size - a set of code for each stack - and made
    updates to this section tedious because I had to track down each line for 
    each stack and make the same update

## Approach
 - I first started by brainstorming and jotting down my thoughts in this readme on how the 
    game should look, the logic, and features. Just getting the thoughts and 
    ideas down helped me organize when I transitioned to psudeo code
 - 
## Roadblocks faced