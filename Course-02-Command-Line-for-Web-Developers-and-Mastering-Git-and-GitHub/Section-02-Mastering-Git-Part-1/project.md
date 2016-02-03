##Git Cheatsheet

A quick reference for the important git commands.

###`git config`

This command is used to configure your git environment. It allows you tailor git's configuration files to your liking. 

Simple Code Example:

	git config --global user.name "Imanuel Gittens"

This command sets your global git username.

Complex Code Example:

	git config --global color.diff.meta "blue black bold"

This command sets the meta information in the diff output to have a blue foreground, a black background and bold text. 

---

###`git init`

This command is used to create an empty git repository. 

Simple Code Example:

	git init

The command creates a new git repository.

Complex Code Example:

	git init --template="/home/templates/git_template1"

This command will initialize your git repository with the same files from the template directory.

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

	git push origin v1.5

Assuming you are maintaining a big project and you have just released version 1.5, you added a tag called v1.5. Git doesn't push tags to the remote server by default so you would need to use the above command to push this tag to the server. 

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

This command allows you to essentially undo commits. Similar to loading a game from an earlier state than you latest save. 

Simple Code Example:

	git reset 9e5e6a4

This command undos all commits after the one specified. 

Complex Code Example:

	git reset --soft HEAD~

This command undos the last commit made by move HEAD to its parent value. 

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

This command displays an editory before the merge is complete so you can give a better description of the merge.

---

###`git mv`

This command allows you to move or rename a file or directory. this command is similar to mv in bash however this change must still be commit afterward.

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

1. **Git stores an entire copy of your repository. Explain the benefits of storing an entire copy.**

Storing an entire copy of your repository provides several key benefits - 
- Git is able to operate really fast: since there is no need to pass data over a network, commands can be executed very quickly. 
- It allows you to make changes without affecting others: All your changes are local so they don't affect other collaborators until you push those changes to another machine
- It provides a fallback in case you mess up: If you manage to make changes that completely mess up your project, you can always delete and pull down a new copy from another machine. 

2. **Explore how to create a wiki for a GitHub repository you own. Research and write about how a wiki may be used and provide a step-by-step tutorial instructing the reader on how to create their own wiki page for their GitHub repository.**

Wikis on github help you to present information about your project in a useful way. They are a place in your repository where you can share important knowledge about your project such as how to use it and how it was designed. It can also be used to expand on your initial documentation presented in the project's README.md file. 

It is well known that good documentation is essential for the success of any project. With this in mind, let us go through the process of creating our first github wiki -

* After you have created your new repository, click the 'Wiki' tab. 
2. You will then be presented with page that has a green button that reads 'Create the first page'.
3. After clicking this button you will be presented with the following screen.
![create_wiki] (http://i.imgur.com/n01vpk7.jpg)
The first input box allows you to name your wiki page.
The second, much larger input box allows you to begin writing your documentation, it also features some editing tools to help you with formatting.
The third input box allows you to write a message before you safe your wiki page (Similar to a commit message).

* After you have added all the information needed, click the button labelled 'Save Page' at the bottom right corner. 
 
And that's it! You've just created your first wiki page and are ready to provide the users of your project with all the information they need to get up and running. 
