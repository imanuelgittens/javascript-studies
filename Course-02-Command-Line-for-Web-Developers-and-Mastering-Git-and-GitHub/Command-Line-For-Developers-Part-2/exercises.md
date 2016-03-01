#Exercise 1

Question 1. 

	chmod u+rwx file.txt
	chmod g+rwx file.txt
	chmod o+rwx file.txt
	chmod a+rwx file.txt

Question 2.

	chmod goa-w file.txt
	
Question 3.

	chmod u-wx file.txt
	chmod g-wx file.txt
	chmod o-wx file.txt
	chmod a-wx file.txt

Question 4. 

	#!/bin/bash
	chmod ugoa+x $1

Call script with 

	./execute.sh /home/path/to/file

#Exercise 2

Question 1.

	alias pg="ping -c 5 www.google.com"

Question 2.

	alias lmore="ls -l | more"

Question 3. 

	export PS1="[\u@\h \W]\\$ "

Question 4. 

	export PS1="[\u \W]\\$ "


#Exercise 3

Question 1.

	find . -name "*cat*jpg*" -type f >> cat_photos.txt

Question 2.

	grep s names.txt | sort




