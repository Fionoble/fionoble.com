---
title: 'Super handy git command'
date: 'Feb. 23rd, 2022'
---

One super handy command that I've come to love is something that was recommended to me by a super smart co-worker at Shopify. 

```bash
git reco
```

This is an alias for:

```bash
git commit -a --amend --no-edit
```

This has come in handy many times when I work on a big repo with many people. In my branch I don't want to have to squash my commits after making the PR so I constantly work under one commit, but it's best to keep things small in this case, other wise it will absolutely bite you in the ass when you've gone too far in one direction and you can't rely on versioning in your branch to double back to a point that you had things working. 

### NOTE: don't use this right out of the gate our you'll me adding to someone else's commit! Always create a first commit in your new branch to shove all you later commit into. 

Another scenario that this comes in handy is when you've pushed something up only to realize you've:
* forgot to save the file in your IDE before commiting 
* forgot to format your code and your linter is failing
* added a spelling or syntax error in the copy you updated
* other similar scenarios

In this case all you do is make the quick fix, `git reco`, and then force push dat shit. `git push origin barnch -fu`. Obviously you don't really need to specify upstream in most cases but the `-fu` flag is more fun than plain ol' `-f`.

If you wanna try this just add it to your `.gitconfig` (if you like tying it specifically to the git command) or `.zshrc` (if you want do have a seperate alias like `shovechagesintomybranch`).