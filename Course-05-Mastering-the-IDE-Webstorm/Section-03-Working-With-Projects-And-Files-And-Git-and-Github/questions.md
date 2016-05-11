#Questions

####Question 1

Outline the system requirements for operating WebStorm on a computer, then describe in detail how to download and install WebStorm on the operating system you are using (use screenshots).

For Webstorm to work properly after it is installed your computer will need -

- At least 1 GB of RAM although 2 GB is recommended
- A screen resolution no less than 1024x768

Once these minimum requirements are met, you can install Webstorm by -

- Download the WebStorm setup file from the [Downloads](https://www.jetbrains.com/webstorm/download/) page. It automatically selects the correct version based on your operating system. 

![Imgur](http://i.imgur.com/AF1nUgf.png)

- We will be installing Webstorm on the Ubuntu operating system so after clicking **Download**, you should see a file called Webstorm-[some-number].tar.gz in your downloads folder.

![Imgur](http://i.imgur.com/qojN914.jpg) 

- Right click on this file then click 'Extract here' and a folder will be created named - Webstorm-[some-numer]

![Imgur](http://i.imgur.com/Utq6PON.jpg)

- Within this newly created Webstorm folder, there is a sub-folder call - bin. You need to open your terminal and navigate to this bin folder. An easy way to do this is to open your terminal, type `cd` followed by a space and then drag the bin folder into the terminal. This will copy the folder path into the terminal afterwhich you can just hit **Enter**.
- After navigating to the bin folder type `WebStorm.sh` and the install process will begin.

![Imgur](http://i.imgur.com/2MXA1lt.jpg) 

And that's it! Once you go through all the steps of the install process, Webstorm will now be available for use on your linux device. 

Congratulations!

---

####Question 2

Open or create a project in WebStorm, take a screenshot of the WebStorm screen, and label the project panel. Describe the function of the project panel in WebStorm and demonstrate its use (use screenshots).

After opening a new project in Webstorm, you will notice a vertical space to the left side of the UI that shows all the files and folder contained within that project. This area is called the Project Panel. 

![Imgur](http://i.imgur.com/dCdDBto.jpg)

Its main use is for navigation as it gives the Webstorm user a top level view of the project and the ability to drill down into various folders to access the files stored there. 

![Imgur](http://i.imgur.com/YXUpZnH.png)

Webstorm also allows the user to right-click on or within any of the folders for the ability to perform extra actions on them such as adding a new file, copying and pasting etc. 

![Imgur](http://i.imgur.com/GJTGUmD.png)

That's the project panel in a nutshell. Use it to navigate and perform actions on files and folder within your project. 

---

####Question 3

Describe the function of the `.idea` folder and its relationship to project settings.

Whenever you create a new project using Webstorm, it creates a hidden folder called `.idea`. This folder is used to store all your project settings and preferences. 

![Imgur](http://i.imgur.com/hWwwEmk.jpg)

As seen in the screenshot above, this folder contains four files -

- [project-name].iml: This file stores the project structure. 
- modules.xml: Stores information about the modules used in your project. 
- vcs.xml: This file stores your version control information.
- workspace.xml: This file stores all the setting/preferences of your workspace.

It is important to note that two of these files remain consistent across all Webstorm projects. These are [project-name].iml and workspace.xml. In our example we have two more xml files that contain settings related to their names however different projects may have more or less of these files. 

---

####Question 4

Outline the steps required to create a new WebStorm project, including how to create the files for that project (include screenshots).

Here we'll go through the steps for creating a new project using Webstorm.

1) Open Webstorm by either clicking its shortcut on your screen or typing `wstorm` from the command line. You should be greeted with an interface resembling the one below:

![Imgur](http://i.imgur.com/n2hT7E1.jpg)

It shows previous projects on the left and actions on the right.

2) Click the **Create New Project** action and the screen below will be shown.

![Imgur](http://i.imgur.com/Rhtcec9.jpg)

From here you can create a new project from a pre-existing template or create a blank project. For this example we will create an Empty Project with the name *Test Project*

3)You should then be shown the entire project interface within your new **Test Project** folder. To get started, you simply need to add your files and start coding! Right click the project folder and select **New**

![Imgur](http://i.imgur.com/cephQnr.png)

We must then give the file a name before we can start adding content. 

![Imgur](http://i.imgur.com/gBdFize.png)

And that's it! From here you can repeat this process until you've added all the files necessary to complete your project. Happy coding!

---

####Question 5

Briefly describe what code style is and describe in detail how to setup WebStorm to conform to a user's particular code style (include screenshots).

Coding style refers to the structure and layout used to write your programs. In other words, it is the WAY in which you write your code. Let's compare it to writing style to get a better idea of what it means. Your writing style defines how you write, for instance - you always skip a line when starting a new paragraph. Code style is the same; you may always skip a line after defining a function or always name your functions with capital letters etc. The list can go on and on. 

To help everyone better understand the programs we write, best practices have been developed. It is important that you base your code style on best practices so that other developers can understand and contribute to it. An example of a best practice using the JavaScript Language is to always define your class functions with a capital letter. 

Webstorm tries to help its users with coding best practices as much as possible however it also allows for the user to define their own coding style. To define your coding style you need to -

1) Go to **File** then click **Settings**

2) From the **Settings** screen, you can type "Code style" in the Search field or go to **Editor** > **Code Style**

![Imgur](http://i.imgur.com/3k7NphG.jpg)

3) From here you can select a language and define your code style for that language.

![Imgur](http://i.imgur.com/NN9vmjr.jpg)

In a bit of an extreme example shown above, I've set my Tab Size to 20. This means that whenever I edit an HTML document and I press the TAB key, the cursor will move forward by 20 spaces. 

There are more options to be configured in the **Other** tab as well. 

![Imgur](http://i.imgur.com/YiyhyZi.jpg)

Be sure to check out all these options to configure a style of coding that you're most comfortable with. 