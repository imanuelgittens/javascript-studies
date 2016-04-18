#Questions

####Question 1

Briefly describe what word processors are and contrast their differences to text editors.

**Title: Word Processors vs Text Editors**

Word Processors are electronic devices or software applications that have the ability to create, edit, format and print documents. Modern word processors usually provide its users with a WYSIWIG (What You See Is What You Get) interface for editing and a ton of extra features. Some of these features include -

- ability to add pictures and graphics
- built in spelling and grammar checker
- ability to format text
- ability to add tables
- ability to import data
- automatically format text

There are many more features included in a word processor that push its functionality far beyond the creating and simple editing of documents. 

Text Editors by comparison have a lot less features. As indicated by the name, they are simply used to edit text. They perform basic tasks such as cut, copy, paste, undo and redo. Text editors do not allow you to format text and the same font is used throughout any document as you type. Since text editors don't automatically format text, they can be used for programming in languages such as HTML, JavaScript, PHP and others. 

Both Word processors and Text Editors have their uses. If you are writing a book for instance, a Word Processor would be the way to go but if you are building a website then a Text Editor would be the better choice.  

---

####Questions 2

Describe in detail how to install Sublime Text on the operating system you are using (include screenshots).

**Title: Installing Sublime Text on Ubuntu (Linux)**

In this article, we will explore how to install Sublime Text using the Linux operating system. 

1) To get started, we need to go the the [Downloads](https://www.sublimetext.com/3) page and select the correct version.  

![Imgur](http://i.imgur.com/oFMQRuT.jpg)

Since the computer I'm using is 64 bit, Ubuntu version of Linux, I just need to click the link shown above and the download will begin. 

2) After the download is complete, you will need to head to your downloads folder and you should see a file called **sublime-text_[build number].deb

![Imgur](http://i.imgur.com/S0h6ls3.jpg)

Right click on this file and select "Open With Ubuntu Software Center"

3) The Software Center application will start up and display a button to install on the right side of the interface. Click this button to install Sublime Text. 

Once the installation is successful, you can now use Sublime Text to edit your files. To open Sublime Text you can click the icon in your program applications panel. 

![Imgur](http://i.imgur.com/oGN7wsj.jpg)

Or type the command `subl` from the terminal. 

![Imgur](http://i.imgur.com/NU8J7M6.png)

You now know how to install and open Sublime Text.

---

####Question 3

Give detailed instructions (include screenshots) on how to open a directory in Sublime Text through the user interface as well as through the command line. Provide similar instructions for how to open files.

**Title: Opening Folders and Files in Sublime Text**

To open a folder in Sublime Text, you need to go to **File > Open Folder**. 

![Imgur](http://i.imgur.com/F5LtVaR.png)

You then need to navigate to the folder you wish to open and click **Open**. Sublime Text also allows its users to open folders via the command line. To do this you need to open your terminal and type in **subl path/to/folder**

![Imgur](http://i.imgur.com/kcn1zlP.png)

Here I've opened my mdLearning folder in Sublime Text. 

To open a file you can open the Sublime Text application and go to **File > Open File**

![Imgur](http://i.imgur.com/OvSXcFU.png)

You must then select the file you wish to open and click the **Open** button. 

Files can also be opened via the command line by typing **subl path/to/file**

![Imgur](http://i.imgur.com/wtVJ9tl.png)

Here I've opened my README.md file withing my mdLearning folder. 

You now know how to open files and folders using Sublime Text.  

---

####Question 4

Explain the differences between scopes and scope selectors.

**Title: Scopes vs Scope Selectors in Sublime Text**

In Sublime Text, a scope can be though of as an area of text that is identifiable by its attached name. No matter where you are in a Sublime Text file, you are always within a scope and this allows for configurations to be defined for specific contexts with the file. A scope looks something like this -

	text.html.markdown

Scopes can also be nested -

	text.html.markdown markup.heading.markdown


Here we've nested the `markup.heading.markdown` scope within the `text.html.markdown` scope. If you'd like to see what scope you're currently in within your Sublime Text file, just press `Ctrl + Shift + Alt + P` on Windows or `Cmd + Alt + P` on Mac. 

![Imgur](http://i.imgur.com/yBWTd4R.jpg)

By contrast, a scope selector is used to target a scope so that configurations can be defined for it. It is easy to see the difference between scopes and scope selectors if we compare them to CSS. The scope can be thought of as the class name -

	class="side-nav"

Whereas the scope selector can be thought of as the CSS selector for that class -

	.side-nav{
		...
	} 

And example of a scope selector in Sublime Text is shown below -

	source.js comment

This targets all comments in JavaScript files. 

You now know a bit more about scopes in Sublime Text and how they differ from scope selectors. Cheers!

####Question 5

Describe the function of the "Installed Packages," "Packages," and "Data folders." Outline how to open these folders and describe what happens if they are deleted (use screenshots relevant to your operating system).

**Title: Where Sublime Text Stores Settings Files**

**Category: Understanding Sublime Text Core**

For us to understand a bit more about how Sublime Text works, we should note that the editor uses special folders to store files that are important to its functionality and features. One of the best features of Sublime Text is its extensibility - allowing developers to write packages that add new functionality to the editor. This article will take a look at the important folders that Sublime Text uses to support this feature. 

**The Packages Folder**

The first folder that we'll look at is the Packages folder. On the Linux operating system, this folder is accessed by clicking **Preferences > Browse Packages**

![Imgur](http://i.imgur.com/BJbVviZ.png) 

The Packages folder is used to store Sublime Text's packages. It contains a number of sub-folders that each contain information about a particular feature, user preferences or programming language. 

![Imgur](http://i.imgur.com/bbY6hlL.png)

Functionality can be added or removed from Sublime Text be adding or deleting sub-folders in the Packages folder. 

**The Data Folder**

We can't talk about the features and extensibility of Sublime Text without mentioning the Data Folder.This folder contains all of Sublime Text's core files and the files stored in this folder are very important because without them, Sublime Text will simply not work. The easiest way to access the Data Folder is to first go to the Packages folder then move up by one folder. 

![Imgur](http://i.imgur.com/uI8KMwr.png)

*Note: The Data Folder isn't actually named "Data".*

If you look closely, you will notice that the Data Folder contains the Packages folder that we explored before and another folder that we're about to talk about named **Installed Packages**.

**The Installed Packages Folder**

Similar to the Packages folder, this folder also contains Sublime Text packages. The only difference here is that the files stored in the **Installed Packages** folder are custom zip files with the extension - .sublime-package. 

![Imgur](http://i.imgur.com/GfFnjui.png)

The packages in this folder are usually the ones that are installed using Package Control.

Packages can be installed as sub-folders within the Packages Folder or as .sublime-package files in the Installed Packages folder. In cases like this, the packages both serve the same purpose however they are distributed differently. 

**Conclusion**

We've discussed the three important folders that Sublime Text uses to allow for its extensibility features. You now know how to navigate to these folders, view what's inside them and get a better overall idea of how Packages work in Sublime Text. 


####Question 6

Describe the function of the Python console and outline how to open and close it (include a screenshot of how this console is used).

**Title: Sublime Console Basics**

Sublime Text comes bundled with its own console interface for executing commands. It is opened and closed by typing **Ctrl + `**. It is built using the Python programming language and it executes python commands. A good example for use of the Sublime Text console is when the user needs to install Package Control. They must first open the console and then paste a command and hit **Enter** for the installation to run. See the full process [here](https://packagecontrol.io/installation). All commands are run in a similar fashion, simply open the console, enter the command then hit **Enter**.

![Imgur](http://i.imgur.com/knoq8zm.png)
