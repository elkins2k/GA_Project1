- game board
    - header area = prompts that inform player what is expected from them next
    - game board = play area with 3 sections/pegs and discs
    - footer area = current moves tracker, best score tracker, optimal score
- allow player to choose a "series" to play, of 3-7 #s of disks to start game
- - - - - - - - - - - - BRONZE
- game logic
    - initalize game area
        -all disks are stacked biggest to smallest, bottom to top, on the left
    - moving
        - user choses a source stack to move top disk from, then selects the target stack to move to
        - allow move if disk being moved is smaller than top disk on the target stack
    - game ends when all disks are stacked on the right stack
- - - - - - - - - - - - SILVER
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
 - - - - - - - - - - - - GOLD
 - track best score for each series (3 disks, 4 disks, etc)
 - allow user to display thier best scores anytime and return to game
 - push thier best scores to twitter or facebook via API????
 - add graphics for stack and disks
 - eliminate buttons and allow player to "pick" a disk and pick a stack
 - animate move

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
