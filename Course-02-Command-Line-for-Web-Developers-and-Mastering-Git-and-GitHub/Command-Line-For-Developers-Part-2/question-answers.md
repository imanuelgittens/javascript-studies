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
