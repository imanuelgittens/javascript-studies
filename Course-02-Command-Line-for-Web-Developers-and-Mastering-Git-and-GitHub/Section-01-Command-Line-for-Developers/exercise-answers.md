##Project Assignment 1

###Beginner
1.

	cd ../../


2.

	ls 


3.

	ls -l

4.

	ls -a

5.

	mkdir clean_code_examples

6.

	touch test.txt


7.

	pico "socks to buy.txt"


8.

	pwd


9.

	whoami

10.

	ls ../../

11.

	touch "list of best cat pictures.html"

12.

	cd "C:/Users/Default User/My Documents"

13.

	ping 8.8.8.8

14.

	cd ~

15.

	echo -e My name is "$(whoami)"

16.

	cat "tylers favorite songs.txt" "sarahs favorite songs.txt"

17.

	man echo >> echo_options.txt

18.

	alias flag="ping 127.0.0.1 -c "

19.

	find -name "*.md" -exec cat {} \;

20.

	rm yesterday_todo_list.md



###Intermediate

1.


	echo Imanuel > myname.md


	echo Pie Pizza Beans > myfavoritefoods.md


	touch dreamproject.md
	pico dreamproject.md
	(Write about project) 
	^X
	Y

	echo I like to listen to reggae as well as positive rap music. > music.md

	
	blue > colors.md

2.

	ls -lS > filesizes.txt

3.

	mkdir backups
	tar -czf backups/backup1.tar myname.md myfavoritefoods.md dreamproject.md music.md colors.md filesizes.txt

4.

	echo -e ign.com \n youtube.com \n twitch.tv 

5.

	curl -L study.moderndeveloper.com > study.html

6.

	mv backup1.tar "$(date).tar"

7.

	wc -w dreamproject.md

8.

	grep -c ".js" yahoo.html

9.

	cat *txt | wc -w

10.

	tar -czf backups/backup2.tar colors.md dreamproject.md filesizes.txt javascripts.html music.md myfavoritefoods.md myname.md sites.txt yahoo.html
	find *txt *md *html -delete


###Advanced

1.

	echo Expanding ./backups/backup2.tar into ./backuptest
	mkdir -p $2
	tar -xf $1 -C $2
	echo Done

2.

	echo Creating Web Project Directory

	mkdir -p $1
	mkdir -p $1/css
	mkdir -p $1/images
	mkdir -p $1/js

	touch $1/css/style.css
	touch $1/js/main.js

	echo "<html><head></head><body><h1>$2</h1></body></html>" > $1/index.html
	echo "h1 {font-color: blue;}" > $1/css/style.css

	echo Done

3.

	echo Combining Files
	cat $2 > $1
	echo Done
