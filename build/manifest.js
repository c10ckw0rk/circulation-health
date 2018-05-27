const fs = require('fs');
const path = require('path');

function Manifest() {
	let files = fs.readdirSync(path.resolve(__dirname, '../theme/assets'));
	files = JSON.stringify(files).replace(/(])|(\[)/gi, '');

	fs.writeFileSync(path.resolve(__dirname, '../theme/manifest.php'), `<?php $manifest = array(${files});`);
}

module.export = Manifest;

Manifest();
