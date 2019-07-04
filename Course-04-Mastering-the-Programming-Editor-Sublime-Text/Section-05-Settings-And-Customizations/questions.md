#Questions

#### Questions 1

*Describe how to start the Sublime Text program through the GUI interface as well as how to do it through the command line using the 'subl' command.*

After installing Sublime Text on your computer, you have two options for opening the editor. The first is through your
GUI (Graphic User Interface) and the second is through the Command Line. We'll go through both options so that you 
have a better understanding of how to open Sublime Text using both methods. 

**Opening through the Graphic User Interface**

After installing Sublime Text, you will most likely now see a shortcut icon for the editor on your computer's desktop or
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

#### Question 2

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

#### Question 3

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

#### Question 4

*Describe how you would go about changing settings for a third-party plugin.*

Sublime Text allows its users to install a variety of plugins that extend the core functionality of the editor. Besides 
just extending the functionality, these plugins can also be tailored to suit the specific users' needs. The first question
you may ask your self is - how can this be done? This article explores just that. 

The good news here is that plugins usually come with default settings and user specific settings similar to Sublime Text
itself. As done in the editor, all a user would need to do is edit the user specific settings for that plugin and this 
will allow them to tailor the plugin to their needs. The settings or these plugins can be accessed via the Command 
Palette (Ctrl + Shift + P). See the screen-shot below on how to access the default and user specific settings for the
**Terminal** plugin. 

![Imgur](http://i.imgur.com/rG8MyHh.png)

In order to figure out which settings need changing, the default settings file can be used as a reference. 

![Imgur](http://i.imgur.com/hcgpQ38.png)

And that's the process for changing settings for a third party plugin. To summarize, we access the default settings file
for that plugin as a reference then we configure our options in the user settings for that plugin. 

#### Question 5

*Describe the function of global settings. Describe the files used to access and change these settings (use screenshots).*

Global settings in Sublime Text define how the editor behaves. These settings are stored two files - Preferences.sublime-settings - Default and Preferences.sublime-settings - User. The default settings file determines how the editor behaves out of the box and the user settings file contains the changes that the user has made to tailor the editor to their needs. This works because the values in the user settings file overrides the values in the default settings file. These two files can be accessed via the "Preferences" menu. 

![Imgur](http://i.imgur.com/oZnoeWG.png)

For a great reference on what type of settings are available in Sublime Text, you can use the default settings file. This file shows all the settings as well as comments about what they do. 

![Imgur](http://i.imgur.com/26qxgJK.png)

To update these settings, you will want to make the appropriate change in your User settings file. Let's change the global font size in Sublime Text by making the appropriate addition to the user settings file. 

![Imgur](http://i.imgur.com/NUyLMR9.png)

Once we save this setting, the font size of the editor should increase. Let's have a look. 

![Imgur](http://i.imgur.com/8mVuThN.png)

And that's it! The process is similar to change all settings in Sublime Text. We look up the setting in the default settings file and make the appropriate updates in the user settings file. 

#### Question 6

*Describe the order in which Sublime Text settings are consulted.*

**Title: Settings Load Order in Sublime Text**

**Category: Sublime Text Settings and Customizations**

Sublime Text contains a number of settings files that allow it to function as the user wants or needs. The setting that is applied to the editor however, is determined by where it was defined. The reason for this is because Sublime Text consults its settings files in a very specific order and one settings file can override others. Sublime Text consults its files in such a way that the last file read is the one whose settings are applied.  To get a better idea of what how this works, let's explore a quick example. Assume we have a file called **Settings1** and it defines the font size of the editor (font_size: 10). We also have another file called **Settings2** an it defines the font size of the editor as well (font_size: 20). **Settings2** however, is read after **Settings1** and this means that the font size of the editor will be the font size defined in **Settings2** - 20. 

Taking this same concept, let's explore the order in which settings files are consulted in Sublime Text. 

1. Packages/Default/Preferences.sublime-settings
2. Packages/Default/Preferences (platform).sublime-settings
3. Packages/User/Preferences.sublime-settings
4. Project Settings
5. Packages/(syntax)/(syntax).sublime-settings
6. Packages/User/(syntax).sublime-settings
7. Buffer Specific Settings

This list shows the order in which settings files in Sublime Text are read. The Default Settings file is read first, followed by the default settings file for the operating system being used eg. Default Settings for Linux operating System. 

After that, the User Settings file is read followed by the Project Settings file. The default settings for specific syntax such as CSS and Javascript is then consulted followed the user defined settings for that specific syntax. 

Lastly Buffer Specific Settings are read, and these settings are defined or typed in the console while editing a particular file. Example: 

	view.settings().set('<setting_name>', <setting_value>).

Since Sublime Text implements the last setting read, the lower in this list that a setting is defined, the higher its chances of being implemented. 

With this, you should have a better idea of how Sublime Text implements its settings and how the place where these settings are defined determine whether or not they will be implemented. 