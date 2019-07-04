#Questions



#### Using `git commit` without -m

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

---

###Redirecting Command Output to Files

The Linux operating system has a powerful feature called input/output redirection which allows a user to send the output of a command to files, devices and even as input to other commands. It also allows the user to accept input for a command from something other than the command line. We will explore this concept by studying how it is used to redirect command output to files. Let's look at a simple example.

	echo Hello World! > hello.txt

A few things are happenng here. First we know that the echo command usually prints anything that comes after it to the command line however this is not the case here. We have used the `>` sign to **redirect the output** to a file called hello.txt. 

This `>` symbol creates a file (hello.txt) if it does not already exist and replaces any content inside this text file with "Hello World!"

We can also used another command `>>` to redirect the output of a command to a file and this one behaves slightly differently. The `>>` symbol creates the file if it doesn't exist already and **appends** the output of the echo command to any content that is already in the file (it doesn't fully replace the content like the `>` command.)

	echo "How are you today?" >> hello.txt

After running the command above, the hello.txt file will contain the following -

	Hello World! How are you today?

When we start the bash program, it always opens up three files that are numbered -

- stdin (0): abbreviated from the term "Standard Input" and represents keyboard input. 
- stdout (1): abbreviated form of the term "Standard Ouput" and represents the screen.
- stderr (2): abbraviated form of the term "Standard Error" and represents a special location for errors. 

By default, whenever we use redirection, bash manipulate the stdout or (1). If we look at our example again we can demonstrate this. 

	echo Hello World! > hello.txt

This is the same as saying 

	echo Hello World! 1> hello.txt

Essentially, the command is saying - take the **output** of this echo command, which is supposed to be sent to the screen (stdout (1)) and instead, sent it to a file called hello.txt.

We can now use this same concept and instead of sending the output of the command to a file, we send the error output of that command to a file. We simply need to change the number before the redirection sign to specify stderr.

	mv file 2> error.txt

In this example, the mv command will fail but instead of sending the error output to the special location for errors (stderr), we redirect it to a file called error.txt.

In this article we talked about a concept called input/output redirection and demostrated it be sending the output of a few commands to a file. We also looked at the different locations that the unix environment accepts and outputs command information and we saw that we could redirect both correct output and errors from a command. This functionality can be used to build powerful programs that interact with the operating system and the user in interesting ways. 

---

###How The Operating System Sees Open Files

Simply put, whenever a user opens a file, the operating system creates an integer entry to represent that file and also to store information about that opened file. These entries are called File Descriptors and  may be thought of like this - (...100,101,102...). They are stored in something called a File Descriptor Table which means that if a user has opened 100 files, there will be 100 corresponding integer entries in this File Descriptor Table. 

An example of file descriptors in action occurs when we start the bash shell. When this happens, we immediately have access to three files -

1. stdin
2. stdout
3. stderr

But now that we have seen how file descriptors work, we know that upon start the bash shell, what really happened was -
- The number 0 (while represents the file stdin) was added to the File Descriptor Table
- The number 1 (while represents the file stdout) was added to the File Descriptor Table
- The number 2 (while represents the file stderr) was added to the File Descriptor Table

We can now manipulate the way in which our programs and users interact with these files by referencing the numbers in the File Descriptor table.

Example

	echo Hello World! 1> hello.txt 

Here we manipulate what happens to the stdout file by using the number 1 in our command. We say - instead of sending the output of this echo command to the stdout file, send it to the hello.txt file instead.

Just to recap, file descriptors are simply numbers used by the operating system to represent opened files. 