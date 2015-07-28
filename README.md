Good Angular tutorial
https://docs.angularjs.org/tutorial

How to start node.js server
1) install nodejs for your OS
2). RUn this command in a terminal (console)
> npm install http-server -g
3). Start server
> cd /path/to/your/project
> http-server -o --cors

find your project 
http://localhost:8080/yourfile.html

install angularjs plugin
in eclipse go to Help>Install new software
next enter in "Work with" http://oss.opensagres.fr/angularjs-eclipse/0.10.0/
continue with the instruction on this page
https://github.com/angelozerr/angularjs-eclipse/wiki/Getting-Started

to run a test
navigate to directory
1). npm test


================JUST TO MAKE SURE ======================
In order to get this framework working in eclipse follow these instructions:
Install angularjs plugin for eclipse
1). In eclipse go to Help>Install new software
2). Under "Work with" enter this url http://oss.opensagres.fr/angularjs-eclipse/0.10.0/
3). Continue by following the instructions found on this page https://github.com/angelozerr/angularjs-eclipse/wiki/Getting-Started
Start you nodejs server
1) make sure nodejs is installed on your OS
2). Run this command in a terminal (console)
> npm install http-server -g
3). Start server
> cd /path/to/your/project
> http-server -o --cors

==================TESTING================================
In order to run a Unit test on this framework some of the following things need to me created.
1). Make sure nodejs is installed
2). Check that your karma.conf.js file is up to date.
3). from a terminal navigate to ..\angularjs\angularjs
4). run >npm test