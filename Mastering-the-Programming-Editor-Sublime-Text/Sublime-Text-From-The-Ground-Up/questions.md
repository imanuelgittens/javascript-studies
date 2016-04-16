#Questions

####Question 1

Briefly describe what word processors are and contrast their differences to text editors.

Word Processors are electronic devices or software applications that has the ability to create, edit, format and print documents. Modern word processors usually provide its users with a WYSIWIG (What You See Is What You Get) interface for editing and a ton of extra features. Some of these features include -

- ability to add pictures and graphics
- built in spelling and grammer checker
- ability to format text
- ability to add tables
- ability to import data
- automatically format text

There are many more features included in a word processor that push its functionality far beyond the creating a simple editing of documents. 

Text Editors by comparison have a lot less features. As indicated by the name, they are simply used to edit text. They perform basic tasks such as cut, copy, paste, undo and redo. Text editors do not allow you to format text and the same font is used throughout any document as you type. Since text editors don't automatically format text, they can be used for programming in languages such as HTML, Javascript, PHP and others. 

Both Word processors and Text Editors have their uses. If you are writing a book for instance, a Word Processor would be the way to go but if you are building a website then a Text Editor would be the better choice.  

---

####Questions 2

Describe in detail how to install Sublime Text on the operating system you are using (include screenshots).

In this article, we will explore how to install Sublime Text using the Linux operating system. 

1) To get started, we need to go the the [Downloads](https://www.sublimetext.com/3) page and select the correct version.  

![Imgur](http://i.imgur.com/oFMQRuT.jpg)

Since the computer I'm using is 64 bit, running on the Linux Operating system, I just need to click the link shown above and the download will begin. 

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

####Question 6

Describe the function of the Python console and outline how to open and close it (include a screenshot of how this console is used).

Sublime Text comes bundled with its own console interface for executing commands. It is opened and closed by typing **Ctrl + `**. It is built using the Python programming language and it executes python commands. A good example for use of the Sublime Text console is when the user needs to install Package Control. They must first open the console and then paste a command and hit **Enter** for the installation to run. See the full process [here](https://packagecontrol.io/installation). All commands are run in a similar fashion, simply open the console, enter the command then hit **ENter**.

![Imgur](http://i.imgur.com/knoq8zm.png)
