#Questions

####Questions 1

*Describe how to start the Sublime Text program through the GUI interface as well as how to do it through the command line using the 'subl' command.*

After installing Sublime Text on your computer, you have two options for opening the editor. The first is through your
GUI (Graphic User Interface) and the second is through the Command Line. We'll go through both options so that you 
having a better understanding of how to open Sublime Text using both methods. 

**Opening through the Graphic User Interface**
After installing Sublime Text, you will most likely now see a shortcut icon for the ediotr on your computer's desktop or
Task Bar. This icon represents the executable file for Sublime text and once you click it, the editor will open. 

![Imgur](http://i.imgur.com/Z81M5qK.jpg)

If you don't see this, you can simply search your computer for "Sublime Text" and somewhere within the results should be
the icon to start the Editor.

**Opening through the Command Line**

Sublime Text also comes with a handy command that allows users to open the editor via the command line. This command is

	subl

and a user simply needs to type in this command into their terminal and Sublime Text will open. 

![Imgur](http://i.imgur.com/iGCXPpj.png)

And that's it! You now know how to open Sublime Text through the Graphic User Interface as well as the Command Line.

####Question 2

*Goto Anything can be used to search through files implementing its fuzzy algorithm. Briefly describe how this fuzzy 
algorithm works (without going into details about implementation) and give detailed instructions (include screenshots) about using it to search through files.*

One of the most powerful features of Sublime Text is its Goto Anything functionality that allows a user to search 
through files. To do this, it uses what is know as a fuzzy algorithm and this algorithm allows for searching within Sublime 
Text to be quite efficient and accurate. But what exactly is a fuzzy algorithm? And how does it help users to find things
easily? These are the questions this article will help to answer. 

This fuzzy algorithm or *fuzzy search* as it is called in Sublime text tries to help the user out by guessing what they 
are looking for. It is a type of approximate search where a few characters would be enough to allow the search algorithm 
to start making suggestions. As a simple example, let's say the user typed in "fun", the fuzzy search could start giving
a result like "functions.php". 

This algorithm creates a better experience for users because they can now find the items that they are searching for
a lot faster. The way in which Sublime Text implements this functionality also makes searching through many areas of the
editor much easier. The screen below shows some of the results suggested by Sublime Text's fuzzy search.

![Imgur](http://i.imgur.com/wjMqN10.jpg)

Hopefully this small article gives you a better idea of how Sublime Text makes finding things easy with its fuzzy search
algorithm.

####Question 3

*Describe the function of keyboard shortcuts and their relationship to the \'Default.sublime-keymap\' and \'Default().sublime-keymap\' files. Include a screenshot of one of these files, highlighting one shortcut and describe how it works.*

Keyboard shortcuts allow a user to perform an action faster than if they where to do it via pointing and clicking with 
the mouse. A very common keyboard shortcut that many people are familiar with is `Ctrl + S` to save your progress. Sublime
Text has a number of keyboard shortcuts like this one to perform various actions. Using these shortcuts the user can 
perform a number of complex actions in Sublime Text a lot faster that if they were using the mouse to do so. 

To access and learn about these keyboard shortcuts, you would need to go to "Preferences > Key Bindings -Default". This 
will open the file: Default(<operating system>).sublime-keymap. This file contains all the default keyboard shortcuts 
for Sublime Text. The screenshot below shows you how this file looks.

![Imgur](http://i.imgur.com/Myn3Fbh.png)

As you can see, it defines the keys you must press and the commands that these key combinations execute. If we look at
the first key combination on the list (Ctrl + q), we can see that when it is pressed, we exit the Sublime Text application. 
Feel free to try this and several other key combinations to see how they work. 