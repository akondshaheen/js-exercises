function startWindows() {
    console.log("Windows has started");
}
function startLinux() {
    console.log("Linux has started");
}
function startOSX() {
    console.log("OSX has started");
}
function prompt() {
    console.log("The OS provided is not supported");
}

function init(os) {
    // write your code here
    if (os == "linux") startLinux();
    else if (os == "osx") startOSX();
    else prompt();

}

init("linux");
init("osx");
init("other");