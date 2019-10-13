const imagePath = function(projectName){
    return require(`../../posts/${projectName}/${projectName}.jpg`);
}
 const projectMarkDownPath = function(projectName){
     return require(`../../posts/${projectName}/${projectName}.md`);
}
const sideBarMarkDownPath = function(projectName){
    return require(`../../posts/${projectName}/${projectName}-sidebar.md`);
}
export {imagePath, projectMarkDownPath, sideBarMarkDownPath};