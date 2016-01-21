####Explain the usage and purpose of the `git push` command. Include a description of the `git push` command's various flags, and provide example scenario's for each flag discussed.


#Effective Collaboration with `git push`


If we take a look at the man page for `git push` we see:


	git-push       Update remote refs along with associated objects. 

This description will most likely be confusing to the beginner git user so let's dive into this `git push` command a little deeper and explain exactly what it does. To understand `git push`, we must first remind ourselves that even though git is a distributed Version Control System (Versions can be stored in many locations     intead of just one centralized location), there is still one location that is deemed 'the server' and thus all changes are uploaded or 'pushed' to this centralized location so that other team members can see and interact with these new updates. 

We can understand this command a bit easier if we re-define `git push` as follows:

	git push	Upload your changes to a centralized location or remote server.  


####Flags

The `git push` command also comes with a host of flags to change its behaviour. Let's look at some of these flags in detail:

1. `--all`
Example usage is `git push --all` and this flag my be useful if your project has more than one branch. It pushes changes on all branches up to the server. 

2. `-dry-run`
Example usage is `git push --dry-run` and this flag does everything that `git push` does without actually sending the updates to the server. This flag can be used to test what would happen if you run the `git push` command at any point. 

3. `--tags`
Example usage is `git push <RemoteName> --tags` and this flag pushes all tags up to the server. 

4. `--atomic`
Example usgae is `git push --atomic`and this flag runs the `git push` command using an atomic transaction on the server side. Either all updates are pushed or non are pushed. If the server does not support atomic pushes then the command will fail. 

5. `-f | --force`
Example usage is `git push -f` and this flag runs the `git push` command without enforcing the checks that ensure the connection between local changes and those on the server. 

6. `--prune`
Example usage is `git push --prune` and this flag will remove any branches on the server that are not on the user's local machine. 

7. `-v | --verbose`
Example usage is `git push -v` and this flag runs the `git push` command and gives extra details on what is happening as the command runs. 

8. `-u | -- upstream`
Example usage is `git push -u` and this flag run the `git push` command but adds a tracking reference to every branch that is up to date or successfully pushed. 

9. `--[no-]verify` 
Example usage is `git push --no-verify` and this flag runs the `git push` command bypassing all pre push hooks or checks. 

10. `--mirror`
Example usage is `git push --mirror` and this flag specifies that all local refs be mirrored to the remote server. 

11. `--sign=(true|false|if-asked)`
Example usage is `git push --sign=false` and this flag adds a GPG-sign to the push request to make updates to the receiving side, allowing it to be checked by the hooks and/or be logged. If false or `--no-signed`, no signing will be attempted. If true or `--signed`, the push will fail if the server does not support signed pushes.

12. `--force-with-lease` 
Example usage is `git push --force-with-lease`. Usually, "git push" refuses to update a file or folder on the server that is not an ancestor of the local file or folder used to overwrite it. This flag overrides this restriction if the current value of the file or folder on the server is the expected value. "git push" fails otherwise. 


*Imanuel Gittens 1/19/2016 Career Path 3: Modern FrontEnd Developer*
