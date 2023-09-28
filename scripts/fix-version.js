const path = require('path');
const fs = require('fs');

function findPkgJsonDir(p){
  let currentDir = p;
  while (true) {
    const pkgJsonPath = path.join(currentDir, 'package.json');
    // 如果找到了 package.json 文件，则返回该文件所在的目录路径
    if (fs.existsSync(pkgJsonPath)) {
      return currentDir;
    }
    // 否则继续向上查找
    const parentDir = path.dirname(currentDir);
    // 如果已经到达文件系统根目录，则返回 null
    if (parentDir === currentDir) {
      return null;
    }
    currentDir = parentDir;
  }
  return currentDir
}


function attachDependencies(yelon_dependencies,delon_dependencies){
  const new_dependencies = {}
  Object.keys(yelon_dependencies).forEach(key=>{
    if(delon_dependencies[key]){
      new_dependencies[key] = delon_dependencies[key]
    }else{
      new_dependencies[key] = yelon_dependencies[key]
    }
  })
  return new_dependencies
}

function attachDevDependencies(yelon_devDependencies,delon_devDependencies){
  const new_devDependencies = {}
  Object.keys(yelon_devDependencies).forEach(key=>{
    if(delon_devDependencies[key]){
      new_devDependencies[key] = delon_devDependencies[key]
    }else{
      new_devDependencies[key] = yelon_devDependencies[key]
    }
  })
  return new_devDependencies
}

function main(){
  const pkgPath = findPkgJsonDir(__dirname);

  if (pkgPath == null){
    throw new Error('package.json not found')
  }else{
    const yelon_package_json = require(path.join(pkgPath, 'package.json'))
    const delon_package_json = require(path.join(pkgPath,'delon-package.json'))
    const new_package_json = {}

    Object.keys(yelon_package_json).forEach(key=>{
      if(key !== "dependencies" || key!= "devDependencies"){
        new_package_json[key] = yelon_package_json[key]
      }
    })

    Object.defineProperty(new_package_json,"dependencies",{
      value: attachDependencies(yelon_package_json.dependencies,delon_package_json.dependencies)
    })

    Object.defineProperty(new_package_json,"devDependencies",{
      value: attachDevDependencies(yelon_package_json.devDependencies,delon_package_json.devDependencies)
    })

    const jsonStr = JSON.stringify(new_package_json,null,2)
    fs.writeFileSync(path.join(pkgPath,'new-package.json'),jsonStr)
  }
}

main();
