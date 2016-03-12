#Questions



####Using `git commit` without -m

The `git commit` command allows us to save a snapshot of our project. It takes record of all our files and folders and also records all our changes up to that point. The most common usage of the `git commit` command is shown below:

	git commit -m "Commit message."

This usage of the command allows us to add a message to our commit immediately however, there is another way to use the command however, and it is shown below

	git commit

When used like this, we get a very different behaviour from the commit command. 

![Imgur](http://i.imgur.com/TTOFTG4.png)

The screenshot above shows an example of what happens if we use the commit command without the `-m` flag.

The cursor at the top allows us to enter a more detailed commit message. Here we can write our message as though we were writing it in a simple text editor. 

There is also some extra information in which first sentence tells us how to write our commit message. It explains which branch we are on and if the branch is up to date. 
`
We then see all the details of changes that have been added to the staging area using the 

	git add --all

command. 

Using all this extra information, We can now write a much more detailed commit message as opposed to using the `-m` version where we could only use one line. After we write our commit message, we must then type `Ctrl + x` on the keyboard and that will exit the editor and allow us to save the commit. 

Writing more detailed commit messages will allow for easier development and management of a project, and the `git commit` command without the `-m` flag allows us to do just that. Let's all start commiting the correct way from now to make our lives much easier in the future. Cheers! 


---

###Github Issues

Issues on github are used to keep track of tasks, enhancements and bugs for a software project. Every repository on github has a seperate section for issues and it is most often used as the project's bug tracker. The great thing about issues on github is that they can be shared, and discussed with users who are also collaborating on that project. 

![Imgur](http://i.imgur.com/kR8ExjN.png)

The image above shows where issues are located within a github project. You simply needs to click the "Issues" tab from the main project screen and you will be routed to this interface that allows for the creation and viewing of issues for this particular project.

To create a new issue, click the green button to the top right of the screen above labelled "New Issue".

![Imgur](http://i.imgur.com/jVq8Odf.png)

You will then be presented with the screen above that allows you to edit the title, description, labels, milestones and  assignees for this issue. 

The title and description describe what this issue is about.

Lables are color coded and help you to categorize and filter issues (similar to labels in email)

Milestones help to associate issues with particular phases in a porject's development. Examples of milestones are Weekly sprint 3/10/2016 to 3/17/2016 or BETA 1.0

Users can be assigned to fix issues. One assignee is responsible for working on the issue at any given time.

Looking at the issues section of the ember.js repository gives us a better view of the different parts of a github issue that are mentioned above.

![Imgur](http://i.imgur.com/9FVSQxF.png)

We can click an issue to get more details

![Imgur](http://i.imgur.com/6IPbX1f.png)

And here we also see other users commenting on the issue.

Github's issues provides an incredibly powerful and robust way of bug tracking  within a project and helps us all to create the best software possible.

