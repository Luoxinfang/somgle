somgle
=======================
This is a NodeJs App


build
=======================
make sure the package.json file is ok, and then do
npm install



File Watchers
======================
any question google please
LESS
	install
		npm install -g less
	watcher settings
		program: D:\nodejs\lessc.cmd
		arguments: --no-color $FileName$
		working dir:$FileDir$
		output:$FileNameWithoutExtension$.css
Uglify
	install
  	npm install uglify-js@1
  watcher settings
    program: D:\nodejs\uglifyjs.cmd
		arguments:
		--reserved-names 'require' --output $ProjectFileDir$/dist/$FileDirPathFromParent(public)$$FileName$ $FileName$
		output path to refresh:$ProjectFileDir$/dist/$FileDirPathFromParent(public)$$FileName$


GRUNT
======================
make sure the Gruntfile.js file is ok, and then do
	npm install grunt
	npm install grunt-cli
	package.json
	npm install
	Gruntfile.js
	grunt build



External Tools
======================
GRUNT
	build
		install
			npm install -g grunt
		settings

