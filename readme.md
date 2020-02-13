- game board
    - header area = prompts that inform player what is expected from them next
    - game board = play area with 3 sections/pegs and discs
    - footer area = current moves tracker, best score tracker, optimal score
- allow player to choose a "series" to play, of 3-7 #s of disks to start game
- - - - - - - - - - - - BRONZE
- game logic
    - inital game area
        -all disks are stacked biggest to smallest, bottom to top, on left peg
    - moving
        - user choses a source peg to move top disk from, then selects the target peg to move to
        - allow move if disk being moved is smaller than top disk on the target peg
    - game ends when all disks are stacked on the right peg
 - - - - - - - - - - - - SILVER
 - count number of moves
 - compare count to optimal solution (2^# - 1)
 - if player does not match optimal, suggest player "try again" or allow them to try a different number of disks
 - track player "best score"
 - if player matches optimal, congratulate them and suggest they "advance by adding a disk" or allow them to try different number
 - if player chooses a different number of disks (up or down) - reset best score
 - - - - - - - - - - - - GOLD
 - track best score for each series (3 disks, 4 disks, etc)
 - allow user to display thier best scores anytime and return to game
 - push thier best scores to twitter or facebook via API????

|================================|
|  choose peg to move disc from  |
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
|  choose peg to move disc to    |
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
|  choose peg to move disc from  |
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

*/