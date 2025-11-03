var smash1 = ['sfjdkgj', 'qdwejfege', 'weisfdj', 'amanajnn']
var smash2 = ['dlergjrsd', 'gnrjksndknb', 'fgnjfn', 'njfsdnfvnpk']
var text = [' hiiii', ' ', ' meannnieeee']
var emoticon = [' >_<', ' @_@', ' >~<']

function generateUsername() 
{
    var smash12 = smash1[Math.floor(Math.random() * smash1.length)];
    var smash22 = smash2[Math.floor(Math.random() * smash2.length)];
    var text2 = text[Math.floor(Math.random() * text.length)];
    var emoticon2 = emoticon[Math.floor(Math.random() * emoticon.length)];
    var username = smash12 + smash22 + text2 + emoticon2;

 document.getElementById('username').textContent = 'your password is: ' + username;
}
