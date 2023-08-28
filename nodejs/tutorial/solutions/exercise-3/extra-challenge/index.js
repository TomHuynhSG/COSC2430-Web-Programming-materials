const fs = require('fs');

// create directories
// Note that the { recursive: true } option is used with mkdirSync() to create parent directories if they don't exist. 
fs.mkdirSync('data/raw/cat', { recursive: true });
fs.mkdirSync('data/raw/dog', { recursive: true });
fs.mkdirSync('data/train', { recursive: true });
fs.mkdirSync('data/test', { recursive: true });
fs.mkdirSync('data/validation', { recursive: true });
fs.mkdirSync('app/blueprints/home_page', { recursive: true });
fs.mkdirSync('app/static', { recursive: true });
fs.mkdirSync('app/templates', { recursive: true });
fs.mkdirSync('scripts', { recursive: true });
fs.mkdirSync('notebooks', { recursive: true });

// create files
fs.writeFileSync('app/blueprints/home_page/blueprint.py', '');
fs.writeFileSync('app/static/styles.css', '');
fs.writeFileSync('app/static/index.js', '');
fs.writeFileSync('app/templates/base.html', '');
fs.writeFileSync('app/templates/home.html', '');
fs.writeFileSync('app/app.py', '');
fs.writeFileSync('app/.gitignore', '');
fs.writeFileSync('scripts/preprocess.py', '');
fs.writeFileSync('scripts/model.py', '');
fs.writeFileSync('scripts/train.py', '');

console.log('Directory structure created successfully!');
