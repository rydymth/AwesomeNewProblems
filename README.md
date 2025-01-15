This is the problem:

- We have an array of objects.
- We need to create a new sub object in that obj if we wish to add new object in the parent obj
- we can have many root objs
- Each new obj creates a new obj array

##### Bugs

- The input is all screwed up
- Tracking is a pain in the ass
- if i try to delete the root obj the array containing root array malfunctions

### Things pending
- Single file solution

### how to test?

Just ng s
