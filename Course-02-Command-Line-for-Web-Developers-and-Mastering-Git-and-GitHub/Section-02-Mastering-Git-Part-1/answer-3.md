####Explain the advantages of having a centralized repository while using a distributed version-control system?

#Advantages of using a centralized repository in a distributed VCS

A huge part of the reason that git is so popular is because it is a distributed Version Control System. What this means is that there is no single location that all changes to a project **must** be uploaded to so that it can be tracked and managed. 

While it is not necessary to upload all changes to a single location, many users of git still appoint a remote server (usually called `origin`) that stores the project information and the various changes that are made to the project as it is being built and maintained. But why? Why do they do this even though they don't need to? As it turns out they are a few key advantages to having a centralized repository even though it is not needed. 

Let's look at these advantages in detail:

- It allows for more control over the core project. Distributed systems allow for many users to clone the project and make changes, without a central location for all these changes to be compiled, mulitple contributors to the project would not be fully aware of what everyone else is doing. 
- It allows for easier project management as administrators can approve or deny changes and grant permissions to contributors all from one location. 
- On top of the fact that a distributed VCS saves time and disk space, a centralized repository allows contributors to a project to save even more disk space as they only need to to the files they require on their local machine. 

Using a centralized repository in a distributed Version Control System allows contributors to a project to really enjoy the best of both worlds. CHanges are quick, disk space is saved and project management/administation is a breeze. 

*Imanuel Gittens 1/19/2016 Career Path 3: Modern FrontEnd Developer*
