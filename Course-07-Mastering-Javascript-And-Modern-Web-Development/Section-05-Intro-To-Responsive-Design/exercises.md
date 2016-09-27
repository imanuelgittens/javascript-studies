#Exercises

####Exercise 1

Question 1)

	<meta name="viewport" content="width=90%, initial-scale=2, minimum-scale=1, maximum-scale=5, user-scalable=no, height=device-height"> 

	<meta name="viewport" content="width=90%, initial-scale=2, minimum-scale=1, maximum-scale=5, user-scalable=no, height=device-height"> 

Question 2)

	@media tv, screen{
		body{
			font-family: Arial;
			font-size: 16pt;
			border: 2px dotted green;
			padding: 10px;
			box-sizing: border-box;
		}
	}

####Exercise 2

Question 1)

	@media only screen and (device-height: 400px) and (orientation: landscape){

	}

Question 2)

	div#topBanner{
		border: 3px dotted green;
		background-color: rgba(255, 255, 0, 0.8);
		width: 100px;
	}

	@media only screen and (min-width: 320px){
		background-color:red;
	}

	@media only screen and (min-width: 720px){
		width: 400px;
		opacity: 50%;
	}


####Exercise 3

Question 1)

[Simple Footer](http://codepen.io/imanuelgittens/pen/ZpZmkZ)

Question 2)

[Complex Navigation](http://codepen.io/imanuelgittens/pen/VKpgkY)

Question 3)

[Swap Order](http://codepen.io/imanuelgittens/pen/kkBmay)


####Exercise 4

Question 1)

[Navigation Bar](http://codepen.io/imanuelgittens/pen/mAmaRo)

Question 2)

[Grid Content](http://codepen.io/imanuelgittens/pen/xEdmYz)

####Exercise 5

Question 1)

	<img src="ferrari_1x.jpg" srcset="ferrari_2x.jpg 2x, ferrari_4x.jpg 4x" />

Question 2)

	<img sizes=”(max-width: 480px) 90vw, (min-width: 960px) 75vw” src="ferrari_1x.jpg" srcset="ferrari_2x.jpg 2x, ferrari_4x.jpg 4x">

Question 3)

	<picture>
		<source media="(max-width: 320px)" srcset="ferrari_1x.jpg"/>
		<source media="(min-width: 960px)" srcset="ferrari_2x.jpg"/>
		<img src="ferrari_1x.jpg"/>
	</picture>