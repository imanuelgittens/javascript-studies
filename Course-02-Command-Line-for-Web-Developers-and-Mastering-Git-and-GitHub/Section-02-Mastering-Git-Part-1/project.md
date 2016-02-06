##Git Cheatsheet

A quick reference for the important Git commands.

###`git config`

This command is used to configure your Git environment. It allows you tailor Git's configuration files to your liking. 

Simple Code Example:

	git config --global user.name "Imanuel Gittens"

This command sets your global Git username.

Complex Code Example:

	git config --global color.diff.meta "blue black bold"

This command sets the meta information in the diff output to have a blue foreground, a black background and bold text. 

---

###`git init`

This command is used to create an empty Git repository. 

Simple Code Example:

	git init

The command creates a new Git repository.

Complex Code Example:

	git init --template="/home/templates/git_template1"

This command will initialize your Git repository with the same files from the template directory.

---

###`git push`

This command allows you to upload your changes to a centralized location or remote server. 

Simple Code Example:

	git push origin master

The command uploads all changes on your master branch to the remote server location called origin.

Complex Code Example:

	git push origin v1.5

Assuming you are maintaining a big project and you have just released version 1.5, you added a tag called v1.5. Git doesn't push tags to the remote server by default so you would need to use the above command to push this tag to the server. 

---

###`git pull`

This command allows you to download all files and changes from your remote server and integrate them with your local copies. 

Simple Code Example:

	git pull origin master

The command downloads all files and changes from origin and updates the master branch of your local copy. 

Complex Code Example:

	git pull --edit origin master

This command opens up an editor before executing the pull so that a descriptive message can be written about it.  

---

###`git clone`

This command allows you to copy a repopsitory into a directory. 

Simple Code Example:

	git clone https://github.com/moderndeveloper-students/coursework-imanuelgittens.git

The command copies the repository at the URL provided into the present working directory. 

Complex Code Example:

	git clone https://github.com/moderndeveloper-students/coursework-imanuelgittens.git --branch "reference-list-development"

This command allows you to copy only the specified branch from the URL provided into your present working directory. 

---

###`git status`

This command allows you to see the status of changes in your project that have not been commited. 

Simple Code Example:

	git status

This command shows you any changes that have not been staged or committed. 

Complex Code Example:

	git status --short

This command allows you to see the status of changes in your project that have not been commited in short format.

---

###`git commit`

This command saves a snapshot of your respository. 

Simple Code Example:

	git commit -m "First Commit"

This command will save a snapshot of all the changes in your repository up to this point. 

Complex Code Example:

	git status -m "First Commit" --author="Sam Adams"

This command saves a snapshot of the changes in your repository up to this point but it overwrites the default author. 

---

###`git reset`

This command allows you to essentially undo commits. Similar to loading a game from an earlier state than your latest save. 

Simple Code Example:

	git reset 9e5e6a4

This command undos all commits after the one specified. 

Complex Code Example:

	git reset --soft HEAD~

This command undos the last commit made by moving HEAD to its parent value. 

---

###`git checkout`

This command allows you to switch between branches.

Simple Code Example:

	git checkout reference-list-development

This command changes your current branch to another branch named "reference-list-development"

Complex Code Example:

	git checkout -b branch2

This command creates a new branch (branch2) if it does not exist then checks out that branch. 

---

###`git branch`

This command allows you to list, create or delete branches.

Simple Code Example:

	git branch

This command list all the branches in your repository. 

Complex Code Example:

	git branch -d reference-list-development

This command deletes the branch named "reference-list-development"

---

###`git merge`

This command allows you to join two or more branches together.

Simple Code Example:

	git merge reference-list-development

This command joins your current branches with a branch named "reference-list-development"

Complex Code Example:

	git merge --edit reference-list-development

This command displays an editor before the merge is complete so you can give a better description of the merge.

---

###`git mv`

This command allows you to move or rename a file or directory. this command is similar to mv in bash however this change must still be committed afterward.

Simple Code Example:

	git mv project.md git-project.md

This command renames the file "project.md" to "git-project.md"

Complex Code Example:

	git mv --force project.md git-project.md

This command renames the file "project.md" to "git-project.md" even if another file named "git-project.md" already exists.

---

###`git rm`

This command allows you to delete files from the index or from the working tree and the index. 

Simple Code Example:

	git rm file.txt

This command removes the file named "file.txt"

Complex Code Example:

	 git rm Documentation/\*.txt

This command removes all *.txt files from the index that are under the Documentation directory and any of its subdirectories.

---

###`git add`

This command allows you to add file changes from the working tree to the index. 

Simple Code Example:

	git add --all

This command adds all file changes from the working tree to the index. 

Complex Code Example:

	 git add Documentation/\*.txt

This command adds content from all *.txt files under Documentation directory and its subdirectories.

---

###`git diff`

This command allows you to see the changes that occured between commits or a commit and the working tree. 

Simple Code Example:

	git diff 

This command shows all changes that occured between the index and the working tree. 

Complex Code Example:

	 git diff 6917bcb339e 711498b9e

This command shows all changes that occured between the two commit IDs listed.

---

####Questions

**Git stores an entire copy of your repository. Explain the benefits of storing an entire copy.**

Storing an entire copy of your repository provides several key benefits - 
- Git is able to operate really fast: since there is no need to pass data over a network, commands can be executed very quickly. 
- It allows you to make changes without affecting others: All your changes are local so they don't affect other collaborators until you push those changes to another machine.
- It provides a fallback in case you mess up. If you manage to make changes that completely mess up your project, you can always delete and pull down a new copy from another machine. 

---

**Explore how to create a wiki for a GitHub repository you own. Research and write about how a wiki may be used and provide a step-by-step tutorial instructing the reader on how to create their own wiki page for their GitHub repository.**

Wikis on Github help you to present information about your project in a useful way. They are a place in your repository where you can share important knowledge about your project such as how to use it and how it was designed. It can also be used to expand on your initial documentation presented in the project's README.md file. 

It is well known that good documentation is essential for the success of any project. With this in mind, let us go through the process of creating our first github wiki -

* After you have created your new repository, go to the repository overview (eg. [Spoon-Knoife Repo](https://github.com/octocat/Spoon-Knife) and click the 'Wiki' tab. 
2. You will then be presented with page that has a green button that reads 'Create the first page'.
3. After clicking this button you will be presented with the following screen.
![create_wiki] (http://i.imgur.com/n01vpk7.jpg)
The first input box allows you to name your wiki page.
The second, much larger input box allows you to begin writing your documentation, it also features some editing tools to help you with formatting.
The third input box allows you to write a message before you save your wiki page (Similar to a commit message).

* After you have added all the information needed, click the button labelled 'Save Page' at the bottom right corner. 
 
And that's it! You've just created your first wiki page and are ready to provide the users of your project with all the information they need to get up and running. 

---

**Research GitHub Pages. Follow the instructions on https://pages.GitHub.com/ and write a tutorial summarizing the process. Write a few scenarios for how GitHub Pages could be used and conclude with your opinion of the service.**

Github pages are public web pages that are hosted and published from the Github website and they provide an awesome way to showcase your project to the rest of the world. 

Let's go through the process of creating a github page for your project.

1) You need to first ensure that you have created a repository on Github. If you want to create a page for an existing project, you can skip this step.

2) Create a branch by clicking the branch dropdown in the repository overview. You MUST name this branch `gh-pages` or it will not work. Name your new branch then click enter. 

![page_branch](https://pages.github.com/images/create-branch@2x.png)

3) All that is left to do is add your website files to this branch. For this you can clone your repo and add them locally by using this command.

	git clone <repo-url>

4) You must then use this command to switch branches.

	git checkout gh-page

5) You can then add your website files. We will use a simple example here:

	echo 'Hello World" > index.html

6) After adding your HTML files you must commit then push your changes.

	git add --all
	git commit -m "Add website files."
	git push origin gh-pages

And that's it! you can now access your github hosted web page(s) at **`http://username.github.io/repository`**.

Having recently discovered that this was possible, I think that github pages is a great service! Now you can showcase the main features of your project on a public facing website and this comes with several advantages -
- hosting is FREE!
- you can show persons who don't know how to use Github your project's features.
- It gives your work a lot more exposure.

Well done Github. 

---

**Research GitHub's recommended licenses at http://choosealicense.com. Write a description and a pro vs con list of each license and provide a recommendation of which license a Web Developer should use by default. Include scenarios where you may want to use other licenses.**

This website recommends three licenses to choose from when creating your open source software projects. These licenses were created to protect the software, the software's author and in some cases the cost of the software. In this section we will go through each of these licenses in detail and at the end we will be more knowledgeable about choosing the correct license for the next software project we undertake. 

*MIT License*

The MIT License is a simple, permissive license that essentailly says - anyone can use and modify this software however they like as long as they put my name somewhere however I make no promises with regard to the software's quality. 

Pros
- This license gives a lot of permission and few restrictions. 
- This license is very short and relatively easier to understand than other open sources licenses. 
- Convenient for developers.

Cons
- The term 'software' may carry different meanings in different countries and this may cause some grey areas from a law standpoint. 
- Derivative works can become proprietary (means that a cost can be attached) and this affects the final user's freedom.

*Apache License*

The Apache License is a permissive license like the MIT license however it states that a person MUST give credit to the software's creator(s) when redistributing. It also protects the original software author from patents. 

Pros
- It allows software creators to receive credit for their work.
- Protect software authors from patents. 
- Convenient for developers.

Cons
- Derivative works can become proprietary and this can affect the final user's freedom. 


*GPL License*

The GPL License allows anyone to copy and redistribute my software however they want. It also requires that anyone who distributes my software or a derivative of my software to make it available under the same terms. There are two versions of this license (V2 and V3) and V3 restricts anyone from altering my software.  

Pros
- GPL guarantees that innovations made with free software get contributed back to the community.

Cons
- Prevents any kind of direct business from being built on GPL licensed software. 


The best license to choose would be decided on a case by case basis however if I had to choose one as a default I would go the the Apache License. It gives other developers the freedom to innovate however the original creator must always be credited. The creator can use this attribution to either build a strong business and/or become the overall authority on the software. 

If you are developing the software just fun and don't really care much about money or attribution you can go with the MIT License, this license will allow  anyone to take your software and build upon it however they wish and you are not liable for software quality. 

Maybe you are building the next wordpress or open source operating system and you are passionate about the concept of free software and you always want your software to be free and somewhat controlled. If this is the case then GPL is the license for you. 

Now that you have a bit more knowledge about the legal aspects of creating open source software, it's time to get back to coding! See you on the internet. 

