####Explain the usage and purpose of the `git push` command. Include a description of the `git push` command's various flags, and provide example scenario's for each flag discussed.


#Effective Collaboration with `git push`


If we take a look at the man page for `git push` we see:


	git-push       Update remote refs along with associated objects. 

This description will most likely be confusing to the beginner git user so let's dive into this `git push` command a little deeper and explain exactly what it does.

To understand `git push`, we must first remind ourselves that even though git is a distributed Version Control System (Versions can be stored in many locations     
intead of one centralized location), there is still one location that is deemed 'the server' and thus all changes are uploaded or 'pushed' to this centralized location so that 
other team members can see and interact with these new updates. 

We can understand this command a bit easier if we re-define `git push` as follows:

	git push	Upload your changes to the centralized location or server within your git network.  


This `git push` command also comes with a host of flags to change its behaviour. Let's look at some of these flags in detail

1. `--all`
Example usage is `git push --all` and this command pushes changes on all branches up to the 'server'. 

2. `-dry-run`
Example usage is `git push --dry-run` and this command does everything that `git push` does without actually sending
the updates to the server.

3. `--tags`
Example usage is `git push <RemoteName> --tags`


Your Response

Imanuel Gittens 1/19/2016 Career Path 3: Modern FrontEnd Developer
