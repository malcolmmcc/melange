/* This bookmarklet lets you get the number of words (roughly; it just counts spaces)
   in an arbitrary element on any webpage, by clicking on that element.

   How to use: Make a new bookmarket, with "WC" or "wordcount" as the Name and 
   the following line/block as the URL. Then, click on that bookmark, then an element
   on any site.

javascript:(function(){document.styleSheets[0].addRule(".highlighted_to_wordcount","background:blue !important;color:white !important");var e=function(e){if(e.keyCode==27){i()}};document.addEventListener("keydown",e);var t=function(e){e.stopPropagation();this.classList.add("highlighted_to_wordcount");return false};var n=function(e){e.stopPropagation();this.classList.remove("highlighted_to_wordcount");return false};var wc=function(e){alert((this.innerText||this.value).split(" ").length);i();e.preventDefault();e.stopPropagation();return false};var i=function(){var i=0;var s=document;while(s=document.body.getElementsByTagName("*").item(i++)){s.removeEventListener("mouseover",t);s.removeEventListener("mouseout",n);s.removeEventListener("click",wc);s.classList.remove("highlighted_to_wordcount")}document.removeEventListener("keydown",e)};var s=0;var o=document;while(o=document.body.getElementsByTagName("*").item(s++)){o.addEventListener("mouseover",t);o.addEventListener("mouseout",n);o.addEventListener("click",wc)}})()

   Note that the code below is just so you can see what it does, and to make it
   easier for you to adapt it for your own purposes.

   This is just a slight modification to code by Christopher Fredericks for DELETING
   parts of a webpage. His code can be found at
   https://plus.google.com/114437281866675781856/posts/hkp9F9Wr9tQ

   Also, his unminified source is at http://pastebin.com/6cvZjupi ...but this was
   simple enough that it was easier for me to just modify the minified version.

*/

var formatted = function () {
    document.styleSheets[0].addRule(".highlighted_to_wordcount", "background:#blue !important; color:white !important");
    var e = function (e) {
        if (e.keyCode == 27) {
            i()
        }
    };
    document.addEventListener("keydown", e);
    var t = function (e) {
        e.stopPropagation();
        this.classList.add("highlighted_to_wordcount");
        return false
    };
    var n = function (e) {
        e.stopPropagation();
        this.classList.remove("highlighted_to_wordcount");
        return false
    };
    var wc = function (e) {
        alert((this.innerText || this.value).split(" ").length); // the only meaningful line I changed
        i();
        e.preventDefault();
        e.stopPropagation();
        return false
    };
    var i = function () {
        var i = 0;
        var s = document;
        while (s = document.body.getElementsByTagName("*").item(i++)) {
            s.removeEventListener("mouseover", t);
            s.removeEventListener("mouseout", n);
            s.removeEventListener("click", wc);
            s.classList.remove("highlighted_to_wordcount")
        }
        document.removeEventListener("keydown", e)
    };
    var s = 0;
    var o = document;
    while (o = document.body.getElementsByTagName("*").item(s++)) {
        o.addEventListener("mouseover", t);
        o.addEventListener("mouseout", n);
        o.addEventListener("click", wc)
    }
}
