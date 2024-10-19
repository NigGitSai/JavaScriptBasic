let a = 5;
console.log("Type of a",typeof a);

let str = "Main"
console.log("Type of str",typeof str);

let blFlag = true;
console.log("Type of blFlag",typeof blFlag);

let c;
console.log("Type of c",typeof c)

let d = null;
console.log("Type of d",typeof d)

let e = 5.5;
console.log("Type of e ",typeof e)

let browser = {
    "name": "chrome",
    "version": "112.2",
    "vendor": "Google",
    "doodle" : function(){
        console.log("I create intresting related doodles everyday")

    },
    "plugins":
    ["Google Dictionary","Google Translate"],
    "test":null,
    null: "a"
}
console.log("Type of browser",typeof browser)
browser.doodle();
console.log(browser.plugins[0])
console.log(browser.version)
console.log(browser.test)
console.log(browser.null)