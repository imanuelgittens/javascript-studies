####Exercise 1


		/* ********** Fonts imported from Google ********* */ 

		@import url("https://fonts.googleapis.com/css?family=Montserrat");

		/* ********** Styles for all elements ********* */ 

		* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		}

		/* ********** Page/Body-wide CSS styles ********* */

		html,
		body {
		height: 100%;
		}

		/* ********** Specific body styles ********* */ 

		body {
		font-family: 'Helvetica Neue', Helvetica, sans-serif;
		}

		/* ********** Fixed Top Bar CSS styles ********* */ 

		#fix-bar {
		background-color: #00a8eb;
		height: 60px;
		left: 0;
		position: fixed;
		top: 0; 
		width: 100%;
		z-index: 9;   
		}

		#fix-bar .logo {
		position: absolute;
		left: 0;
		width: 250px;
		transform: translate3d(-50%, 0, 0);
		transition: transform 0.5s ease;
		}


		#fix-bar .logo a {
		box-sizing: content-box;
		color: #fff;
		display: block;
		height: 24px;
		line-height: 24px;
		padding: 18px 16px 18px 24px;
		text-decoration: none;
		text-transform: uppercase;
		width: 60px;
		}


		#fix-bar .push {
		background-color: #00a8eb;
		height: 100%;
		left: 0;
		position: relative;	     
		transition: transform 0.5s ease;
		}

		/* ********** Site Main Menu CSS styles ********* */

		#nav {
		height: 100%;
		left: 0;
		overflow-y: scroll;
		padding-bottom: 60px;
		padding-top: 12px;
		position: absolute;
		transition: transform 0.5s ease;
		transform: translate3d(-50%, 0, 0);
		width: 250px; 
		}

		#nav .site-menu {
		min-height: 100%;
		padding-bottom: 60px;
		position: relative;    
		}

		#nav .copy {
		bottom: 0;
		font-size: 12px;
		line-height: 1.4;
		padding: 16px 24px;
		position: absolute;
		}


		#nav a {
		color: #000;
		display: block;
		font: 20px/1 'Montserrat', sans-serif;
		font-weight: 700;
		padding: 14px 24px;
		text-decoration: none;
		}

		#nav a:hover {
		background-color: #eee;
		}

		/* ********** Fixed Header and Menu Transition CSS styles ********* */

		input#show-menu {
		opacity: 0;
		position: absolute;

		}

		input#show-menu:checked ~ #fix-bar .push {
		transform: translate3d(250px, 0, 0);
		}

		input#show-menu:checked ~ #canvas #content {
		transform: translate3d(250px, 0, 0);
		}

		input#show-menu:checked ~ #canvas #nav,
		input#show-menu:checked ~ #fix-bar .logo {
		transform: translate3d(0, 0, 0);
		}

		input#show-menu:checked ~ #canvas .mask {  
		opacity: 1;
		transform: translate3d(250px, 0, 0);
		transition: opacity 0.5s ease, transform 0.5s ease;
		z-index: 1;
		}


		#canvas {
		height: 100%;
		overflow: hidden;
		padding-top: 60px;
		position: relative;
		}

		#content {
		background-color: #fff;
		height: 100%;
		left: 0;
		overflow-y: scroll;
		padding: 20px;
		position: relative;
		transition: transform 0.5s ease;
		transform: translate3d(0, 0, 0);

		}

		.mask {
		background-color: rgba(0,0,0,0.5);
		height: 100%;
		left: 0;
		opacity: 0;
		position: absolute;
		transition: opacity 0.5s ease, transform 0.5s ease, z-index 0s 0.5s;
		top: 60px;
		width: 100%;
		z-index: -1;   
		}


####Exercise 2

			<!-- HTML code -->
			<nav>
			  <ul class="site-menu">    
			      <li><a href="#/work">Work</a></li>
			      <li class="has-sub"><a href="#/about">About</a></li>
			      <li><a href="#/careers">Careers</a></li>
			      <li><a href="#/news">News</a></li>
			      <li><a href="#/contact">Contact</a></li>
			      <li class="copy">© 2017 Logo. All Rights Reserved.</li>
			  </ul>
			<nav>

			/* CSS code*/
			nav {
			  height: 100%;
			  left: 0;
			  overflow-y: scroll;
			  padding-bottom: 60px;
			  padding-top: 12px; 
			  position: absolute;
			  transform: translate3d(-50%, 0, 0);
			  transition: transform 0.5s ease;
			  width: 250px;
			  
			}

			nav .site-menu {
			  min-height: 100%;
			  padding-bottom: 60px;
			  position: relative;   
			}

			nav a {	    
			  color: #000;
			  display: block;
			  font: 20px/1 'Montserrat', sans-serif;
			  font-weight: 700;
			  padding: 14px 24px;
			  text-decoration: none;
			}

			nav a:hover {
			  background-color: #eee;
			}



			nav .copy {    
			  bottom: 0;
			  font-size: 12px; 
			  line-height: 1.4;
			  padding: 16px 24px;
			  position: absolute;
			}

			nav .has-sub{
			font-size: 12pt;
			opacity: 1;
			transition: opacity 1s ease-in-out;
			}

			nav .has-sub:hover{
			opacity: 0;
			}


####Exercise 3


		html {
			background-color: #ffe5ff;
		  font-family: Georgia;
		}
		 
		.subheading {
		  border: 1px solid;
		  text-decoration: underline;
		  
		}
		 
		#navBar ul li {
		  border-right: 1px solid;
		  color: orange;
		  display: inline;
		  padding: 10px;
		  
		}
		 
		#navBar ul li a{
		  text-decoration: none;
		}
		 
		#navBar ul li a:hover {
		  color: black;
		}

		input:checked {
		  display: none;
		  font-size: 15pt;
		}


####Exercise 4

**Question 1**


With CSS Minifier 

The file was reduced from 2.1 kB to 1.4 kB

With CSS Compressor

The file was reduced from 2.1 kB to 1.5 kB (43.72% reduction)


**Question 2**

Prefixed CSS


		.accordion {
		  -webkit-transition: all .2s ease-out;
		  transition: all .2s ease-out;
		  -webkit-transition-delay: 1s;
		          transition-delay: 1s;
		}

		.transform-box {
		  -webkit-transform: translate(20px, 20px) rotate(30deg) scale(2, 2);
		          transform: translate(20px, 20px) rotate(30deg) scale(2, 2);
		  box-sizing: border-box;
		  background: -webkit-linear-gradient(orange, white);
		  background: linear-gradient(orange, white);
		  border-radius: 5px;
		}
