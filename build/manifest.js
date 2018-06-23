const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');

function Manifest() {
	let files = fs.readdirSync(path.resolve(__dirname, '../theme/assets'));
	files = files.map(file => file + `?v=${pkg.version}`);
	files = JSON.stringify(files).replace(/(])|(\[)/gi, '');

	fs.writeFileSync(path.resolve(__dirname, '../theme/manifest.php'), `<?php $manifest = array(${files});`, {
		encoding: 'utf8',
		flag: 'w'
	});
}

module.export = Manifest;

Manifest();
