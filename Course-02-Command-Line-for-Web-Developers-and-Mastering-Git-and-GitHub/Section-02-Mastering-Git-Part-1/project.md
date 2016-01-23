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

 