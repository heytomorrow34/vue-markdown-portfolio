const imagePath = function(projectName){
    return require(`../../posts/${projectName}/${projectName}.png`);
}
 const markDownPath = function(projectName){
     return require(`../../posts/${projectName}/${projectName}.md`);

}
export {imagePath, markDownPath};