//  CONFIGURE HOST BASED ON ENVIRONMENT
var NYTD = NYTD || {};

NYTD.Hosts = NYTD.Hosts ||  (function(){
  var host, scripts = document.getElementsByTagName("script");

  for (var i = 0, script; script = scripts[i]; i++) {
    host = script.src &&
/^(.+\.nytimes.com)\/js\/app\/analytics\/trackingTags_v1\.1\.js/.test(script.src) ? RegExp.$1 :'';
    if (host) { break };
  };

  return {
    imageHost: host,
    jsHost: host,
    cssHost: host
  }
})();


// START WEBTRENDS JS TAG
var gtrackevents=false;
var gdcsid="dcsym57yw10000s1s8g0boozt_9t1x";
var gfpcdom=".nytimes.com";
var gdomain="wt.o.nytimes.com";
var js_host;
if (window.location.protocol.indexOf('https:')==-1) {
  js_host =  NYTD.Hosts.jsHost + "/js/app/analytics/";
} else {
  js_host = "https://select.nytimes.com/js/app/analytics/";
}


// Include WebTrends wtid.js
var wt_initObj = { enabled:true, fpc:"WT_FPC", domain:gdomain, dcsid:gdcsid };
if (wt_initObj.enabled&&(document.cookie.indexOf(wt_initObj.fpc+"=")==-1)&&(document.cookie.indexOf("WTLOPTOUT=")==-1)){
var wtid_js_host="http"+(window.location.protocol.indexOf('https:')==0?'s':'')+"://"+wt_initObj.domain+"/"+wt_initObj.dcsid+"/"
var wtidjs = document.createElement('script');
wtidjs.setAttribute('type', 'text/javascript');
wtidjs.setAttribute('src', wtid_js_host+'wtid.js');
document.getElementsByTagName('head').item(0).appendChild(wtidjs);
}

var wtInc = document.createElement('script');
wtInc.setAttribute('language', 'javascript');
wtInc.setAttribute('type', 'text/javascript');
wtInc.setAttribute('src', js_host+'controller_v1.1.js');
document.getElementsByTagName('head').item(0).appendChild(wtInc);
// END WEBTRENDS JS TAG

// START REVENUE SCIENCE PIXELLING CODE
var revSc = document.createElement('script');
revSc.setAttribute('language', 'javascript');
revSc.setAttribute('type', 'text/javascript');
revSc.setAttribute('src', js_host+'gw.js?csid=H07707');
document.getElementsByTagName('head').item(0).appendChild(revSc);

var customRevSci = document.createElement('script');
customRevSci.setAttribute('language', 'javascript');
customRevSci.setAttribute('type', 'text/javascript');
customRevSci.setAttribute('src', js_host+'revenuescience.js');
document.getElementsByTagName('head').item(0).appendChild(customRevSci);
// END REVENUE SCIENCE PIXELLING CODE


NYTD.require = NYTD.require || function(path) {
  document.write('<script src="'+ NYTD.Hosts.jsHost + path +'" type="text/javascript" charset="utf-8"><\/script>');
};

if (!window.TimesPeople && 
   location.pathname.indexOf('/gst/articleSkimmer') === -1 && 
   !window.location.hostname.match('cnet|nytimes\.com\.com')) { 

  NYTD.require('/js/app/lib/prototype/1.6.0.2/prototype.js');    
  NYTD.require('/js/app/lib/NYTD/0.0.1/template.js');
  
  NYTD.require('/js/app/timespeople_1.5/lib/urilist.js');
  NYTD.require('/js/app/timespeople_1.5/loader.js');
}
