var smash1 = ['sfjdkgj', 'qdwejfege', 'weisfdj', 'amanajnn']
var smash2 = ['dlergjrsd', 'gnrjksndknb', 'fgnjfn', 'njfsdnfvnpk']
var text = [' hiiii', ' ', ' meannnieeee']
var emoticon = [' >_<', ' @_@', ' >~<']

function generateUsername() 
{
    var smash1 = adjectives[Math.floor(Math.random() * adjectives.length)];
    var smash2 = nouns[Math.floor(Math.random() * nouns.length)];
    var text = numbers[Math.floor(Math.random() * numbers.length)];
    var emoticon = numbers[Math.floor(Math.random() * numbers.length)];
    var username = smash1 + smash2 + text + emoticon;

 document.getElementById('username').textContent = 'your password is: ' + username;
}
