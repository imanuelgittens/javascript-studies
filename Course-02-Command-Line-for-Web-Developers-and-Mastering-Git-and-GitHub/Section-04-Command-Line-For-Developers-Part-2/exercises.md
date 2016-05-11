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



#Exercise 4

Question 1. 

	#!/usr/bin/env bash
	echo $1 $2 $3

Question 2.

	#!/usr/bin/env bash
	find . -name "$1"

#Exercise 5

Question 1.
When we do not enter a value before 5 seconds, the exit code is 142.
When we enter a value before 5 seconds, the exit code is 0.

Question 2.

	#!/usr/bin/env bash
	echo -n "Enter your full name, then press [ENTER]: (This prompt will 	expire after $1 seconds)"
	read -t $1 full_name
	echo "Welcome, $full_name!"

#Exercise 6

Question 1.

	#!/usr/bin/env bash
	if [ "$1" -eq "$2" ]
	then
    	echo "The numbers are equal."

	elif [ "$1" -gt "$2" ]
	then
    	echo "$1 is greater than $2"

	elif [ "$1" -ge "$2" ]
	then
    	echo "$1 is greater than or equal to $2"

	elif [ "$1" -lt "$2" ]
	then
    	echo "$1 is less than $2"

	elif [ "$1" -le "$2" ]
	then
    	echo "$1 is less than or equal to $2"

	else
    	echo "$1 is not equal to $2"
	fi

Question 2.

	count1=$(wc -w < $1)
	count2=$(wc -w < $2)
	if [$count1 -eq $count2]
		then echo "Files have identical word count"
	else
		echo "Files do not have identical word count"
	fi

Question 3.


	if [[ -d $1 ]]
	then echo “Directory”
	exit 0
	else
	echo "Not a directory."
	exit 1
	fi

#Exercise 7

Question 1.


	expr $1 "$3" $2

	./script.sh 1 2 \* - this is not the optimal solution since the multiplication sign needs to be escaped. It works well for all other operators. 

Question 2.

	let x=$1%2
	if [[ $x -eq 0 ]]
	then echo "Even"
	else echo "Odd"
	fi

#Exercise 8

Question 1.

	jpegs=(.$1*.jpg)
	echo ${jpegs[@]}

	(call script) - ./execute.sh /home/imanuel/mani

Question 2.

	if [[ -f $1 ]]
		then echo "Not a directory."
		exit 1
	elif [[ -f $2 ]]
		then echo "Not a directory."
		exit 1
	else
		files1=($1/*)
		files2=($2/*)
	expr ${#files1[@]} + ${#files2[@]}
	fi

#Exercise 9

Question 1.

	let X=0
	while [ $X -le $1 ]
	do
		if [[ $X -eq 0 ]]; then
			echo "$X is not even or odd."
		else
			let Y=$X%2
			if [[ $Y -eq 0 ]]; then
				echo "$X is even."
			else
				echo "$X is odd."
			fi
		fi
    
    	let X=X+1
	done

Question 2.

	texts=($1*.txt)


	let X=0
		while [ $X -lt ${#texts[@]} ]
		do
			echo ${texts[$X]}
			wc -w < ${texts[$X]}
			let X=X+1
		done

Question 3.


	arr="$@"

	result=0
	for i in ${arr[@]}; do
  	let result+=$i
	done
	echo "Total: $result"
