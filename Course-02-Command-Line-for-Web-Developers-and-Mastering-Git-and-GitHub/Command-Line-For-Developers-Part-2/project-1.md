
	find -mindepth 1 -type d -name '*Section*' | 
	while read filename
	do
	echo "Updating file names..."
   	mv ${filename} ${filename/Section/Chapter}
   	echo "Done"
	done
