#####Explain how to set up and run a grunt task using a third party plugin. Give an example of how to do this with at least one third party plugin (don't use the plugin used in the chapter; 'uglify').

Setting up tasks in grunt generally follow a standard procedure. This first this to do is find the
third party plugin that you'd like to use by finding it on the Grunt plugin [page](https://gruntjs.com/plugins).
When you find the plugin required, the details page of that plugin usually gives all the details needed to install
and use that plugin. The steps are usually as follows (We'll be using the testing plugin `grunt-contrib-nodeunit`)

1. Install the plugin in your project folder

    npm install grunt-contrib-nodeunit --save-dev
    
2. Load the plugin in Gruntfile.js. Add the following code to that file. 

    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    
3. Configure the plugin. The plugin details page gives the various ways in which the plugin can be configured. Select your preference and add it to the config section 
for your Gruntfile.js

        grunt.initConfig({
          nodeunit: {
            all: ['test/*_test.js']
          }
        });
    
The above configuration ensures that all files in the 'test' directory with and extension of
`_test.js` is run. 

And that's the basic procedure for installing and using third party extension tasks using grunt. 


#####Describe with an example how to run grunt in watch mode where changes to a file re-runs tasks.

The grunt watch functionality is implemented using this plugin `grunt-contrib-watch` and allows for the automatic running of tasks
whenever files within the project are updated. 

After installing this plugin, you'll need to configure it so you can specify the files you want monitored. 
This is important because you wouldn't want to reload something like all your projects images every time you make a file change.
Let's look at a simple configuration for the grunt watch setup that will reload the project when changes are made to JS files - 

        grunt.initConfig({
          watch: {
            files: ['js/*.js'],
            tasks: ['jshint'],
          },
        });
        
With this simple setup, every time a JS file is updated in the JS directory, the `jshint` task will be run. Of course the configurations can get a 
lot more complex than this (See details [here](https://www.npmjs.com/package/grunt-contrib-watch)) however 
this is a good starting point for anyone just getting familiar with watch mode using grunt. 

#####Explain with an example how to run gulp in watch mode where changes to a file re-runs tasks (you may need to look at the gulp documentation).

#####Explain how the jQuery methods `closest` and `parents` work. Use code samples to demonstrate their usage and show the differences between them.

`.closest()`

* Begins with the current element
* Travels up the DOM tree until it finds a match for the supplied selector
* The returned jQuery object contains zero or one element for each element in the original set

`.parent()`

* Begins with the parent element
* Travels up the DOM tree to the document’s root element, adding each ancestor element to a temporary collection; it then filters that collection based on a selector if one is supplied
* The returned jQuery object contains zero or more elements for each element in the original set

#####Describe what templating is and explain its usefulness in frontend development.
Category: Introduction to Templating