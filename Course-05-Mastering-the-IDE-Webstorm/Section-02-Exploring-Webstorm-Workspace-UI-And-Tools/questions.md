#Questions

####Question 1

Title: Using The Console from within WebStorm

Category: Why You Need WebStorm and How to Get and Install It

One of my personal favourite features of Webstorm is the ability to use the terminal from inside the IDE. This is a massive time saver as it allows developers to perform console tasks without having to open the terminal program. Using the terminal within Webstorm is also very easy and you can use any of the following methods to open it:

- Press Alt+F12.
- Click the Terminal tool window button ![terminal](https://www.jetbrains.com/help/img/idea/terminal_tool_window_button.png) in the lower left corner of your IDE.
- Point your mouse pointer over ![terminal-button](https://www.jetbrains.com/help/img/idea/show_tool_window_bars.png) in the lower left corner of the IDE, then choose **Terminal** from the menu. 

After opening the terminal, your Webstorm workspace will now show the terminal interface at the bottom, allowing you to start issuing commands just as you would in the regular terminal. 

![Imgur](http://i.imgur.com/29tScZD.png)

Webstorm conveniently sets your present working directory in this terminal to be the folder of your current project saving even more time. Webstorm also allws you to open up multiple terminal sessions by pressing Ctrl+Shift+T. This is analagous to opening multiple terminal windows however everything is done within Webstorm. Pretty cool right? 


Closing the terminal is also very easy and can be done in a number of ways:

- click the red X to the left of the terminal interface
- click the symbol with the 'down facing arrow' at the top right corner of the terminal interface. 

And that's about it! You are now ready to access and use the terminal from right within the Webstorm IDE.

####Question 2

When opening a project for the first time in Webstorm, you may be overwhelmed by the sheer amount of 'stuff' that you see within the its interface. This article is an introduction to the different sections of Webstorm's UI and is intended as a starting point for better familiarity with this awesome IDE. The screen below shows a typical screen while working with Webstorm and I've numbered each section of the interface to make their descriptions a bit easier. 

![webstorm_workspace](http://i64.tinypic.com/1z1y62d.jpg)

1) Menu Bar

This is Webstorm's main menu and it is used to navigate the program. All the programs features and commands can be accessed here and there is even a *help* section that shows you how to use Webstorm. Using the main menu, a user can open and create new projects, debug applications, keep files under version control and much, much more. 

2) Navigation Bar

This small toolbar under the main menu helps the user to understand exactly where they are working within their project. It shows the full directory structure from the project root folder to the file that is currently being edited in a breadcrumb-like format. This give the user the ability to traverse their project directory a lot easier. The user can also right any one of these breadcrumb items for a host of other options. 

3) Project Panel

This is a vertical toolbar that shows all the files and folders within the current project. Its main use is navigation as it gives the user a top-level overview of their project and allows him/her to drill down to their desired location. 

4) Editor

This is the area where users of Webstorm will be typing and editing all the code files and other documents contained within their project. This area occupies most of Webstorm's screen space and is the most used. 

5) Tools Window

This area provides quick access to some important tools for web development such as the terminal, version control and a todo list. 

6) Status Bar

This is the last area on the screen of Webstorm's UI and it displays some technical information like line number and file encoding. Users can also click the grey box-like icon (![terminal-button](https://www.jetbrains.com/help/img/idea/show_tool_window_bars.png)) on the far left side of this area to access the features of the **Tools Window** and more.

####Question 3

![](http://i66.tinypic.com/fz6ey8.jpghttp://i66.tinypic.com/fz6ey8.jpg)

The screen above shows Webstorm's navigation bar. It is used to show the path to the file currently being edited from the root folder of a project. It is easily noticed that this navigation bar shares a striking resemblance to breadcrumbs on a website and its usage is the same. It allows a user to navigate more quickly through their project's directory structure - this can be done by double-clicking any of the menu items. It also gives users visual confirmation that they are working in the correct folder. From the screen we can see that the root folder of our project is -**mdLearning** and the file that is currently being edited is *questions.md*. The full path to this file is -

mdLearning --> Mastering-the-IDE-Webstorm --> Exploring-Webstorm-Workspace-UI-And-Tools --> questions.md

Any of the items in this sequence can be double clicked for quick navigation. These items can also be right clicked for other options such as creating new files/folders etc. 

And that's it! You are now a bit more familiar with the navigation bar in Webstorm.

####Question 4

This screen below shows Webstorm's editor area. 

![editor](http://i66.tinypic.com/2h705fd.jpg)

This area can be divided into four main parts -

1) The document tabs - This shows all the files that are currently being edited.
2) The gutter area - This shows information about the code being written such as line numbers and breakpoints.
3) The Editor - Here is where a user would write all their code. 
4) The Validation sidebar - Shows color coded stokes that indicate whether the code being written is correct or contains issues/bugs.

Let's look at each of these sections in a bit more detail.

The **document tabs** show all the files currently open within Webstorm and are very similr to tabs in your web browser. Users can also right click a tab and this shows a menu with additional options for that tab. One of these options is shown in the screen below and it allows a user to split the screen vertically to show more than on tab at the same time. 

![tabs](http://i64.tinypic.com/2nle52q.jpg)

There are many other options in this menu and I encourage you to test them all and see how they work. 

The **gutter area** is a small vertical area on the left side of the editor and it shows line numbers of the code and also gives users the ability to set breakpoints for debugging. If you right click this area, there is a menu with some additional options that you can configure to your liking. 


The **editor** takes up the most amount of screen space of the entire Webstorm UI and is where its users will be spending most of there time. Here you can write code in many different programming languages. It also provides access to many of Webstorm's smart features for writing code such as *Intelligent Code Completion*. The screen below shows this in action. 

![code_completion](http://i63.tinypic.com/34g1vsk.jpg)

The **validation area** is a vertical space to the right of the coding editor that is comprised of colored strokes. These strokes indicate areas of the code that may have an issue or error. Hovering your mouse over a stroke instantly shows the issue. 

![issue](http://i64.tinypic.com/11k8biu.jpg)

Also if you Ctrl + click any of the strokes, you will be taken directly to the area of the file containing the issue or error. 

That takes care of the sections in the editor area of Webstorm. I hope it helps you to make the most of all the code editing features of this awesome IDE. Till next time. 

