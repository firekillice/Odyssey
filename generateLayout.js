const fs = require('fs');
const path = require('path');

const docsPath = path.join(__dirname, 'docs');

const generateIndex = (dir) => {
  var result = []
  var collapsable = true;
  relativeTraverseDirectory(dir,dir,result)
  return `module.exports = () => {
    return [
      { 
        title: "", 
        collapsable: ${collapsable},
        children: [ 
          ${result.join(',\n          ')}
        ]
      }
    ]
  };`
}

const relativeTraverseDirectory = (directoryPath, baseDirectory, result) => {
  const items = fs.readdirSync(directoryPath);

  var files = items.map(item => {
    const itemPath = path.join(directoryPath, item);
    const relativePath = path.relative(baseDirectory, itemPath);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory() && path.basename(relativePath) != "assets") {
      return relativeTraverseDirectory(itemPath, baseDirectory,result);
    } else {
      return relativePath.endsWith('.md') && path.basename(relativePath).toLowerCase() != "readme.md" ? `'${relativePath}'` : null;
    }
  }).filter(Boolean);

  files.forEach(file => {
      result.push(file)
  });
}

const generateAllIndex = (dir) => {
  const files = fs.readdirSync(dir);

  return files.map(file => {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory() && path.basename(fullPath) != ".vuepress") {
        var content = generateIndex(fullPath)
        fs.writeFileSync(path.join(fullPath, 'index.js'), content);
      };
  }).filter(Boolean);
};

const generateSidebar = (dir) => {
  const files = fs.readdirSync(dir);

  var allDirs = files.map(file => {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory() && path.basename(fullPath) != ".vuepress") {
        var baseName = path.basename(fullPath);
        return `'/${baseName}/': require('../${baseName}')()`
      };
  }).filter(Boolean);

  var content = `module.exports = {    ${allDirs.join(',\n\t\t')}
  };`
  fs.writeFileSync(path.join(docsPath, '.vuepress/sidebar.js'), content);
};

const generateResourceNavigator = (dir) => {
  var r = require('./docs/.vuepress/navigator.js')
  const files = fs.readdirSync(dir);

  var allDirs = files.map(file => {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory() && path.basename(fullPath) != ".vuepress" && path.basename(fullPath) != "reading") {
        var baseName = path.basename(fullPath);
        return `/${baseName}/`
      };
  }).filter(Boolean);
  
  allDirs.forEach(ade => {
    var exists = false;
    r.forEach(re => {
      if (re["link"] == ade){
        exists = true;
      }
    });
    if (!exists){
      r.push({"text": "需要名字", "link": ade})
      console.log(ade + " not exists, adding...")
    }
  });

  var content = 'module.exports = ' + JSON.stringify(r, null, 2)
  fs.writeFileSync(path.join(docsPath, '.vuepress/navigator.js'), content);
};

generateResourceNavigator(docsPath);
generateSidebar(docsPath);
generateAllIndex(docsPath);

