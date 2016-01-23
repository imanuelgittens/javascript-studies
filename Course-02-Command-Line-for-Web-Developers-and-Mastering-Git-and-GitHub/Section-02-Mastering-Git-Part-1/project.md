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