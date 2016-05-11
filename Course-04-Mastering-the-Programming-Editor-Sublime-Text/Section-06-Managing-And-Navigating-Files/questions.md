#Questions 

####Question 1

*Explain the function of the output panel and how it is typically used (include a screenshot).*

To show the results or progress of an operation, Sublime Text uses what is known as the output panel. This panel is an 
area at the bottom of the editor that is displayed to give visual confirmation that files are being compiled or some 
prcoess is being run such as an installation or deletion. The output panel is also used to show the results of these
operations after they've completed. 

Check out the screenshot below to get a better idea of how the output panel in Sublime Text actually looks. 

![Imgur](http://i.imgur.com/1ijjPuE.png)

####Question 2

The words "view," "buffer," and "document" have special meaning in Sublime Text jargon. Explain what each of these words mean and how these words are related.

When speaking in the context of Sublime Text, there are a number of words or jargon that are used that may need some extra
explanation to fully wrap one's head around it. This article will take a look at three of those words and go into some
further detail on what they mean in the context of Sublime Text. Let's get started:

View - A view in Sublime Text is a document that you see on th screen. Let's say you have two files - file1.txt and file2.txt.
If you open both files in Sublime Text, they will appear in two different tabs. Each of these tabs is a view. An interesting
point to know here is that if we open file1.txt again (in a third tab), then we now have 3 views open even though we are
only using two files. 

Buffer - A buffer is defined as a file that is loaded into Sublime Text's memory. Buffers and views share a close relationship
in Sublime Text because users interact with buffers through Views. If we explore that situation again with two files - file1.txt and file2.txt, when we open each one in Sublime text, a buffer is created for each one. But to expand on our example with the views,
if we open one of the files again in Sublime Text, a new buffer is not created. A new view is created for interaction with that buffer.

Document - Documents are generally used to refer to computer files and they don't have any specific extra meaning in the context of Sublime Text. A document is just a file on your computer. 

The jargon used in Sublime Text is also used in a number of other spaces related to programming. Understanding these terms here will not only help you to master your understanding of Sublime Text, but also help you to easier understand other concepts throughout your programming career. 

####Question 3

*Describe the function of settings files that have the name of a platform (OS) in their name.*

Settings files in Sublime Text that have a platform or Operating System attached to their name are used to define settings that are operating system specific. The settings file for operating system settings looks like this - Preferences (OSX).sublime-settings. Using the Linux operating System the file will look like this -

	Preferences (Linux).sublime-settings

Valid operating system names are "Windows", "Linux", "OSX" and these settings work by merging with the default settings of Sublime Text. Using the Linux operating system once again, in order to determine which settings will be applied, the editor will merge its default settings file [Preferences.sublime-settings] and [Preferences (Linux).sublime-settings]. The operating system settings take precedence here and will override any conflicting default settings. After this is merge is done, the resulting settings are applied to the editor. 

####Question 4

*Describe the function of '.sublime-project' files and their importance to project and folder settings. Give an example of one such file.*

One of the great features of Sublime Text is its ability to define settings on a per-project basis. This is awesome because some projects may require things to be done differently from others. Instead of having to apply and reapply global settings every time you switch projects, these project specific settings are always on and independent of each other. 

Sublime Text stores these project settings in a file with the extension '.sublime-project'. Once you've created a project, you can edit its settings from the menu by going to "Project > Edit Project". This will result in the settings file for that project being displayed.

![Imgur](http://i.imgur.com/NMJNJ8Z.png)

Here we can add settings that will be applied to this project only. An example of one such setting is the 'folder_exclude_patterns' shown above. This means that any folder pattern added to this setting will not be available for viewing or search results within this project only. 

Adding project specific settings gives the developer complete control of their environment on a per-project basis. This saves time and easily allows settings to be tailored to the task at hand. 

####Question 5

*Describe some common Sublime Text folder settings (folder_exclude_patterns, folder_include_patterns, file_exclude_patterns, file_include_patterns, binary_file_patterns) and explain what they do.*

When defining project specific settings in Sublime Text, there are two main areas of settings that are important, the first is folder settings and the second is project settings. See the screenshot below:

![Imgur](http://i.imgur.com/NMJNJ8Z.png)

All settings related the folders must be applied the the "folders" section of this settings file. It is not always easy to distinguish whether or not a setting is folder specific so we'll discuss some common folder specific settings here and see how they work. 

1) **folder_exclude_patterns**: Any patterns added to this setting will exclude matching folders from the side bar, searches and the Goto anything functionality. 

Example Usage - the following example will exclude any folders with the name dist or doc. 

	"folder_exclude_patterns": ["dist", "doc"]


2) **folder_include_patterns**: Any patterns added to this setting will include **ONLY** matching folders to the side bar, searches and the Goto anything functionality. 

Example Usage - the following example will include **only** folders with the name dist or doc. 

	"folder_include_patterns": ["dist", "doc"]

3) **file_exclude_patterns**: Any patterns added to this setting will exclude matching files from the side bar, searches and the Goto anything functionality. 

Example Usage - the following example will exclude any files with the extension 'md'. 

	"file_exclude_patterns": ["*.md"]

4) **file_include_patterns**: Any patterns added to this setting will include **ONLY** matching files to the side bar, searches and the Goto anything functionality. 

Example Usage - the following example will include **only** files with the extension 'md'. 

	"file_include_patterns": ["*.md"]

5) **binary_file_patterns**: Any patterns added to this setting will make the matching files visible in the sidebar but they will be excluded from searches and the Goto anything functionality.

Example Usage - the following example will show '.md' files in the sidebar but exclude them from project searches and Goto anything. 

	"binary_file_patterns": ["*.md"]

And that's about it. Feel free to adapt these examples to your specific project to make your work in Sublime Text easier and more efficient. 

####Question 6

*Describe the purpose and function of 'folding' as related to Sublime Text.*

**Title: Folding File Sections in Sublime Text**

**Category: Managing and Navigating Files in Sublime Text**

Folding in Sublime Text allows a user to hide the details of a function or class body. When code is "folded", only the functions' or classes' names are visible. Lets take a look at what happens when we fold some code in Sublime Text. 

![Imgur](http://i.imgur.com/n1VnCYc.png)

As you can see, only the function names are visible and their details are represented by four small dots. Sublime Text also goes a bit further however, and allows a user to fold code at various levels within a file. I think of these levels within a file as the opening and closing brackets of a piece of code. Let's say the file starts with a function or class, this will be level one, if we have other functions or classes within that main function/class then those are level two and finally, if we have functions or classes within those on level two, then they are considered as level three. We'll explore each of these levels in more detail to see how they work. 

*Level One*

Looking at the lodash.js file, we see that it starts with a function. 

![Imgur](http://i.imgur.com/JFH5Hl0.png)

This first opening curly brace represents level one. In Sublime Text, the shortcut for Level 1 folding is 'Ctrl + K, Ctrl + 1' and this folds everything inside the first curly brace.

![Imgur](http://i.imgur.com/fRXIYL4.png)

Now if there are functions or classes defined within this function (after the first curly brace) we can fold them with level two folding. Let's look at a level two function within the lodash.js file.

![Imgur](http://i.imgur.com/chH6GcW.png)

We can fold this function by using the keyboard shortcut `Ctrl + K, Ctrl + 2`. The result looks like this.

![Imgur](http://i.imgur.com/apJ32pB.jpg) 

Notice that all the other level two functions are folded as well. Using this same function, we can also explore level three folding. Type `Ctrl + K, Ctrl + 3` and let's see what happens. 

![Imgur](http://i.imgur.com/Vr08S5A.jpg)

We see that only the code within the while loop is folded. This shows us that Sublime Text is actually using the opening curly braces to determine the level of folding. This piece of code is on level 3 because it is the third curly brace in the hierarchy: main function --> child function --> while loop. 

You now know how to use code folding in Sublime Text, feel free to play with folding at different level and implement it as needed for your upcoming programming projects. Cheers!