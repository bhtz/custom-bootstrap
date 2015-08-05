Custom bootstrap
================

Projet NPM de base pour création du bootstrap Almerys custom.

Requirements
------------

* node
* gulp
* npm

Node.js installation
--------------------

#### Install on OSX

Using homebrew:

	brew install node

#### Install on Linux (Ubuntu/Mint)

	sudo apt-get install python-software-properties python g++ make
	sudo add-apt-repository ppa:chris-lea/node.js
	sudo apt-get update
	sudo apt-get install nodejs

#### Install on Windows

[Download Node.js MSI](http://nodejs.org/download/)

Installation
------------

#### install global gulp (sudo on linux/OSX) :

	npm install gulp

#### install local dependencies (sudo on linux/OSX) :

	npm install

Commands
--------

#### build:

	gulp build

* copy assets (fonts & JS)
* build sass in debug

#### release:

	gulp release

* copy assets (fonts & JS)
* build sass in release mode (minified)

#### serve:

	gulp serve

* copy assets (fonts & JS)
* build sass in debug
* watch sass sources modifications
* enable livereload

Roadmap
-------

* enable sourcemap on build debug mode