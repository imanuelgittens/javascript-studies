####Thoroughly explain `git diff`, and it's importance. Describe `git diff` in a thoughtful way, so that a teenager could understand it and provide examples of it's usage.

#Comparing project versions with `git diff

Imagine yourself as the lead developer of a team working on a big project at your company and you suddenly come across an error that you just can't figure out how to fix. You're smart, so you think that it would be best to retrace your steps because just last week, everything worked fine! However, the question remains - how do I see the differences in my project between this week and last week? 

`git diff` to the rescue. This is an incredibly powerful command allows you to see the differences between any two points in your project history. You (our developer) can now see exactly what changed between this week and the last, allowing you to  fast-track the process of figuring out what change may have introduced the error.  

While `git diff` has many different flags to change its behaviour, the easiest way to get started is to simply type the command in this format into the terminal after navigating to your project folder. 

	git diff <commit> <previous-commit>

A real example of this would be:

	git diff 6df0c9e667713a513449091df1ccd32f0c69df03 e731ea9e405a6a52cfef29c08b65c14ca0bea4ed

This command will show (in great detail), all the changes that occured within your project between the first commit and the second commit you entered. As a developer you get an overview of everything that changed between the commits and this allows you to make informed decisions on which parts of your project needs to be changed or updated to move forward as quickly and efficiently as possible. 



*Imanuel Gittens 1/19/2016 Career Path 3: Modern FrontEnd Developer*
