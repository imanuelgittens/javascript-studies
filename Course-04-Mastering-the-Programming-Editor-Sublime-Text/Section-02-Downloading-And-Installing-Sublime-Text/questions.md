#Questions

#### Question 1

Explain in your own words how text editors compare to IDEs.

There are two main classes of programs that one can use for programming - the Text Editor and the IDE (Integrated Development Environment). The first question that pops into someone's head when they hear this is - which one is better? And there is really no correct answer. The choice is entirely dependent on the needs, capabilities and preferences of the user. 

The text editor provides a fast, minimal interface for programming in which the developer has to perform most of the tasks related to their project themselves. An example of a task that the developer would have to do themselves while using a Text Editor to build their project is Version Control. This task among many others would have to be done manually. Text Editors also gives developers the flexibility to customize the environment to their needs, this can be done through custom programming or through the use of plug-ins. This gives the developer the ability to add or remove functionality as required saving memory and increasing the speed at which tasks are completed. 

An IDE on the other hand provides a fully featured programming environment. It comes out of the box, packaged with a host of tools an features that can assist with development tasks. A few of these features may include -

- Programming hints
- Code auto completion
- Version control
- Compile and build tools

and the list goes on. To compensate for all this additional functionality, the IDE takes up a lot of memory. Some IDEs can even be customized to a certain extent through the use of plug ins however they are generally more rigid than text editors and developers **must** use the feature that the IDE provides to perform tasks. 


---

#### Question 2

On some operating systems, the 'subl' program may not work automatically. Describe in detail (use screenshots) how to get the 'subl' program working in the operating system you use.


After installing Sublime Text, you have access to a pretty handy terminal command - `subl`

This command allows you (among many other things) to start Sublime Text from the command line. It may be the unfortunate circumstance that some users experience where even after installing Sublime Text, they are unable to use this command automatically.  Using the Linux operating system, we will go through the steps necessary to ensure that the `subl` command works properly on your machine. 

To get a better understanding of why the `subl` command works, we first need the discuss environment variables - specifically the $PATH environment variable. The $PATH environment variable store the location(s) of executable files on your machine. I like to think of it like a shortcut. In the Windows operating system, many users are accustomed to adding shortcuts to programs on their desktop. However what they may not know is that this shortcut actually just stores the path to wherever the actual executable file is stored on their machine. For example you have a shortcut to Adobe Photoshop on your desktop however when you click this shortcut, it executes the file (photoshop.exe) which is stored in C:\Programs\Adobe\photoshop.exe. Similarly on the Linux operating system, this $PATH variable stores the paths to executable files. Notice I used paths (plural) and this is because this one $PATH environment variable stores the path to all executable files on your machine i.e. it can be the shortcut to any executable file once that file's location or path on your machine is stored there. 

Getting back to Sublime Text. Once installed, it create as executable file called (you guessed it) `subl`. And this file is stored in the directory - /usr/bin

![Imgur](http://i.imgur.com/6RvoLYA.jpg)

For this `subl` command to work, you must ensure that the path to its location (/usr/bin) is stored in your $PATH environment variable. Since we are using Linux, you are in luck! This path is added to the $PATH environment variable by default. To view your $PATH variable type this into the terminal.

	$PATH

You should see this location already defined. 

![Imgur](http://i.imgur.com/b4ZzqmT.jpg)

You should now have full access to the `subl` command from your terminal. Type `subl --help` to learn more about the command and its usage. 

On other operating systems getting the `subl` command to work will require you to add its location to your $PATH variable. This is done in a variety of different ways depending on the operating system being used and may require some extra research. 

---

#### Question 3

Describe what Sublime Text packages are, and give an example of one Sublime Text package and describe how it works.

In the context of Sublime Text, a package can be thought of as a plugin. It adds new functionality to the editor or extends its existing functionality. Sublime Text has a wealth of packages which can be viewed at [https://packagecontrol.io/](https://packagecontrol.io/). One such package is called **Markdown Preview**. It can be viewed [here](https://packagecontrol.io/packages/Markdown%20Preview) and it is particularly useful when editing markdown files. It allows the user to -

- preview the markdown they have written in a browser
- open a markdown cheat sheet for help with writing markdown documents
- Copy the markdown they have written to the clipboard
- Save the markdown they have written as HTML

This and many of the other packages developed for Sublime Text really help users to customize their development environment with functionality to suite their needs. 

---

#### Question 4

Give detailed instructions (include screenshots) about how to get Package Control working in a Sublime Text installation.

Package Control is a very important aspect of Sublime Text as it allows you to add additional functionality to the editor. To ensure that Package Control is working correctly, you need to follow these steps: 

1) Open the Sublime Text console using **Ctrl + \`** or go to **View > Show Console**. You should see the following screen with a blinking cursor ready to accept user input. 

![Imgur](http://i.imgur.com/Dfg7lKV.jpg)

2) Head over to [this URL](https://packagecontrol.io/installation) and copy the code found there for the version of Sublime Text that you are using. 

![Imgur](http://i.imgur.com/o9egLuJ.jpg)

3) After copying this code, paste into Sublime Text's console and hit **Enter**

4) After the process is complete type `Ctrl + Shift + P` on Windows or `Cmd + Shift + P` on Mac and begin to type `Package Control` in the resulting input box. 

![Imgur](http://i.imgur.com/6WWNYXX.jpg)

Once the options in the above screen are shown, Package Control has been installed correctly. 

Congratulations! You are now able to add all sorts of cool functionality to your Sublime Text Editor!



