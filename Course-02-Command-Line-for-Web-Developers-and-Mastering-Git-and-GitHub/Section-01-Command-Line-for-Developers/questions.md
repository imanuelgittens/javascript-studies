#Questions

####Question 1

*Write an introduction to the topic, the command line. Explain the purpose of the command line and the benefits of using it. Also list careers in which a person may use the command line for common tasks. Add any details you considered important as you learned the command line.*

The command line...a vague and cryptic legend of the past? Or a powerful tool for its users today. The command line is a simple and quite minimalistic tool for interacting with the files, folders and features of your computer. Many PC users today have become accustomed to interacting with their machine through the GUI or Graphic User Interface (the ability to point and click with your mouse). The command line however, is totally different, it allows its users to interact with their computer through the CLI or Command Line interface. It should be noted that the CLI can do everything that the GUI can do (and perhaps more) but the way in which it works can make it seem a bit daunting. Here is an example of the Command Line Interface. 

![Imgur](http://i.imgur.com/uwOwLaa.png)

That's it, a simple screen that allows you to type a command and hit the **Enter** key. How in the world is this useful? Well, after you overcome the first and most difficult hurdle of using the command line, you will find the experience quite pleasant. This hurdle is learning the commands. There are many commands that allow the user to do many different things. Learning them will take some time but once you learn the core set of commands, everything else is easily understood. 

The command line gives its users a faster and more powerful way to interact with their computer. How so? Well, typing a command it often faster than looking for a desktop icon and clicking it. There are also several commands that can be implemented using the command line quite quickly as opposed to their GUI counterparts. One such command would be to change the permissions on a file or folder. The command line really enables you to become a *power user* of you machine and a true master of your computing environment. 

There are also some careers that require you to use the command line quite often. So no matter how much you fear that blank screen with a blinking cursor, if you want to work in any of these feels, you would need to quickly overcome these fears -

- Web Developer
- Application Developer
- Game Developer

Or any other Career that requires programming. 

Learning the command line can seem hard at first. It is also more complex considering that the command line is different on Windows as opposed to Mac and Linux. In order to make the learning process a bit easier, I would suggest that you learn the command line on Mac or Linux. If you have a windows computer is it quite easy to install Linux using a program like [Virtual Box](https://www.virtualbox.org/wiki/Downloads). The reason for this suggestion is because it is easier to work with the command line on these operating systems and there is a lot more documentation online that can help if you have a problem. Learn and practice a few commands every day until you're comfortable with them. Keep practicing and using the command line for everything that you can. Do this and you'll be well on you way to becoming the next best programmer in your field. 

####Question 2

*Explain the function of the `man` command. Be certain to include at least two usage and syntax examples of the command.*

The `man` command is used to display a "manual page" for another command listed after it on UNIX based operating systems. It is actually defined as "An interface to the online reference manuals". These online reference manuals are the full documentation pages for each command available for the operating system you prefer (Since I'm using Linux, the commands are found [here](http://linuxcommand.org/)). 

Here is an example usage of the man command -

	man ls

Here, this command will show the manual page for the `ls` command as seen below:

![Imgur](http://i.imgur.com/rjZAGaJ.png)

Let explore a few of the options available when using the man command. We can use the `-f` flag to show a short description of the command in question. 

	man -f ls

Here is the output after we run this command. 

![Imgur](http://i.imgur.com/ORJcXVs.png)

As we can see, it just shows the short description - list directory contents. We can also use the `-w` flag to show the location for the man page for that command on your local computer. 

	man -w ls

Let's take a look at the output from this command. 

![Imgur](http://i.imgur.com/tICYSIb.png)

The output is the path to the man page for ls on my computer. 

Now that we've gone through the man command and a few examples of how it works, you should never have the guess what any command on your UNIX operating system does any more!

####Question 3

*Explain the purpose and function of an environment variable and how to view environment variables in your shell. Then, explain at least three environment variables that you think are the most important, or useful, to a developer.*

Whenever you use the command line or a shell interface to interact with your computer, there is an area called the **environment** that contains some system settings files which are referenced to determine how the shell behaves and what resources are accessible to it. The environment stores these settings as **ENVIRONMENT VARIABLES** and they are basically sets of key-value pairs e.g. 

	KEY=value1:value2

To view the environment variables for UNIX based operating systems like Linux and OSX, you need to access the terminal and type this command:

	printenv 

You should get a full list of all the environment variables on your computer. 

![Imgur](http://i.imgur.com/dYQ2qZR.png)

As a developer, you will likely have to interact with a few of these variables in order to get certain programs and scripts to function properly. Let's look at the top 3 environment variables that a developer should know -

1. PATH - the PATH variable is used to store the location of various programs and commands on your computer. Without it, your computer would not no where to look to find these files. As you add programs to your computer, you may need to modify this PATH variable so that these new programs can be found and interacted with. 

2. PWD - this variable is used to display the directory that you are currently accessing or the Present Working Directory.

3. PS1 - the PS1 variable stores all the settings for your terminal prompt. It can be used to define a lot of information that is displayed at the start of your prompt. Some examples of these are date, hostname and present working directory. 

![Imgur](http://i.imgur.com/RnnGDjA.png)

In essence, it is used to show what appears at the start of your prompt as seen above.

And that's it! You now know how to view your environment variables and have a bit more knowledge on the most popular ones in use today!

####Question 4

*Fully describe the function of the `grep` program. Provide an example of piping a file from cat to grep and searching the file for a simple pattern.*

**Title: Regular Expression Search**

**Category: Working with Files and Directories through The Command Line**

The `grep` command is one of the most useful commands in UNIX based operating systems. It is used to do a search on text or files for lines that match the strings or words passed to it. Regular expressions are commonly used in combination with the `grep` command to search for patterns in a particular set of text or a file. 

Let's take a look at a quick example to see how we can use the `grep` command to do a search on a file. We'll use a file called README.md and use the `cat` command to open and display it via the terminal. 

	cat README.md

The output will look like this:

![Imgur](http://i.imgur.com/2R19z8S.png)

We now want to pipe the output of the `cat` command to the `grep` command and search for a simple word. 

	cat README.md |  grep Learn

Here we want to find all lines in our README.md file that contain the word "Learn". The result will look like this:

![Imgur](http://i.imgur.com/Gc6qi3d.png)

We can also use regular expressions with the `grep` command like this-

	cat README.md | grep [1-9]

This command will search the README.md file for all lines containing the numbers one to nine. The result looks like this:

![Imgur](http://i.imgur.com/MP1r3Hi.png)

The text only had the number 1 so the results show all lines containing the number 1. 

You now have a better understanding of the `grep` command and how to it. Happy searching!


