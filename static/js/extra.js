document.writeln("");
document.writeln("");
document.writeln("<!-- Matomo -->");
document.writeln("<script>");
document.writeln("  var _paq = window._paq = window._paq || [];");
document.writeln("  /* tracker methods like \'setCustomDimension\' should be called before \'trackPageView\' */");
document.writeln("  _paq.push([\'setDocumentTitle\', document.domain + \'/\' + document.title]);");
document.writeln("  _paq.push([\'setCookieDomain\', \'*.waterwelly.com\']);");
document.writeln("  _paq.push([\'setDomains\', [\'*.waterwelly.com\',\'*.nav.waterwelly.com\',\'*.oi.waterwelly.com\',\'*.oj.waterwelly.com\',\'*.www.waterwelly.com\']]);");
document.writeln("  _paq.push([\'trackPageView\']);");
document.writeln("  _paq.push([\'enableLinkTracking\']);");
document.writeln("  (function() {");
document.writeln("    var u=\'//www.waterwelly.com/Matomo/\';");
document.writeln("    _paq.push([\'setTrackerUrl\', u+\'matomo.php\']);");
document.writeln("    _paq.push([\'setSiteId\', \'1\']);");
document.writeln("    var d=document, g=d.createElement(\'script\'), s=d.getElementsByTagName(\'script\')[0];");
document.writeln("    g.async=true; g.src=u+\'matomo.js\'; s.parentNode.insertBefore(g,s);");
document.writeln("  })();");
document.writeln("</script>");
document.writeln("<noscript><p><img src=\'//www.waterwelly.com/Matomo/matomo.php?idsite=1&amp;rec=1\' style=\'border:0;\' alt=\'\' /></p></noscript>");
document.writeln("<!-- End Matomo Code -->");
document.writeln("");
document.writeln("<script async src=\'https://www.googletagmanager.com/gtag/js?id=G-T5MB93EYWW\'></script>");
document.writeln("<script>");
document.writeln("  window.dataLayer = window.dataLayer || [];");
document.writeln("  function gtag(){dataLayer.push(arguments);}");
document.writeln("  gtag(\'js\', new Date());");
document.writeln("  gtag(\'config\', \'G-T5MB93EYWW\');");
document.writeln("</script>");
document.writeln("<script charset=\'UTF-8\' id=\'LA_COLLECT\' src=\'//sdk.51.la/js-sdk-pro.min.js\'></script>");
document.writeln("<script>LA.init({id: \'JSNrRPHfPgJLCTal\',ck: \'JSNrRPHfPgJLCTal\'})</script>");
document.writeln("");
document.writeln("");

if ( window.location.host == 'waterwelly.github.io'){
  self.location='https://ctf.waterwelly.com/'
}




window.MathJax = {
    tex2jax: {
      inlineMath: [ ["\\(","\\)"] ],
      displayMath: [ ["\\[","\\]"] ]
    },
    TeX: {
      TagSide: "right",
      TagIndent: ".8em",
      MultLineWidth: "85%",
      equationNumbers: {
        autoNumber: "AMS",
      },
      unicode: {
        fonts: "STIXGeneral,'Arial Unicode MS'"
      }
    },
    showProcessingMessages: false,
    messageStyle: "none"
  };
window.addEventListener('load', function() { 
    var p=localStorage.getItem("data-md-color-primary");
    if (p){
        document.body.setAttribute('data-md-color-primary',p);
    }
    var a=localStorage.getItem('data-md-color-accent');
    if (a){
        document.body.setAttribute('data-md-color-accent',a);
    }
    var s = localStorage.getItem('data-md-color-scheme');
    if (s) {
        document.body.setAttribute('data-md-color-scheme', s);
    }

}, false);

//添加空格
pangu.spacingPageBody();
