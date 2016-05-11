#Project 2

	echo "Enter the name of your project then press [ENTER]:"
	read name
	echo "Enter the directory in which you would like to store your project 	then press [ENTER]:"
	read path
	echo "Enter the author of your project then press [ENTER]:"
	read author
	echo "Enter a description of your project then press [ENTER]:"
	read desc
	echo "(OPTIONAL) Enter Github URL for cloning then press [ENTER]:"
	read giturl
	echo "Enter the name of your CSS file then press [ENTER]:"
	read css 
	echo "Enter the name of your JS file then press [ENTER]:"
	read js
	
	if [[ -z $name ]] 
	then
	echo "You need to enter a name for your project."
	exit
	elif [[ -z $path ]] 
	then
	echo "You need to enter a directory to store your project."
	exit
	elif [[ -z $author ]]; then
	echo "You need to enter an author for your project."
	exit
	elif [[ -z $desc ]]; then
	#statements
	echo "You need to enter a directory to store your project."
	exit
	elif [[ -z $css ]]; then
	#statements
	echo "You need to name the css file of your project."
	exit
	elif [[ -z $js ]]; then
	#statements
	echo "You need to name the js file of your project."
	exit
	else
	#input entered correctly
	if [[ ! -z $giturl ]]; then
		git clone $giturl $path/$name
		cd $path/$name
		echo "#$name
	DESCRIPTION:
	$desc
	
	---
	
	AUTHOR: 
	$author
	">README.md
	echo Creating Web Project Directory...

	mkdir -p css	
	mkdir -p images
	mkdir -p js

	touch css/$css
	touch js/$js

	echo "<html><head></head><body><h1>$name</h1></body></html>" > index.html
	echo "h1 {font-color: blue;}" > css/$css

	echo Done
	else
		mkdir -p $path/$name
		cd $path/$name
		echo "#$name
	DESCRIPTION:
	$desc
	
	---
	
	AUTHOR: 
	$author
	">README.md
	echo Creating Web Project Directory...

	mkdir -p css	
	mkdir -p images
	mkdir -p js

	touch css/$css
	touch js/$js

	echo "<html><head></head><body><h1>$name</h1></body></html>" > index.html
	echo "h1 {font-color: blue;}" > css/$css

	echo Done
	fi
	fi
