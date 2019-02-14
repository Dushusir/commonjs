//common.js by Dushusir, MIT, Collect commonly used code
/*1.
intro: load script,if window.isLoaded == true,load success; 
e.g. include_js('//pv.souuhu.com/cityjson?ie=utf-8');
*/
function include_js(file) {
    var _doc = document.getElementsByTagName('head')[0];
    var js = document.createElement('script');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', file);
	  window.isLoaded = false;
    _doc.appendChild(js);
    js.onload = function () {
        window.isLoaded = true;
        alert('success');
    }
}
