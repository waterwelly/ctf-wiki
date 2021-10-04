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
document.writeln("<div id=\'google_translate_element\' style=\'position:absolute;bottom:10px;right:10px;z-index:2000;opacity:0.7\'></div>");
document.writeln("<script>");
document.writeln("    function googleTranslateElementInit() {");
document.writeln("        new google.translate.TranslateElement(");
document.writeln("            {");
document.writeln("                // pageLanguage: \'zh-CN\',");
document.writeln("                // 需要翻译的语言，比如你只需要翻译成越南和英语，这里就只写en,vi");
document.writeln("                includedLanguages: \'en,zh-CN,hr,cs,da,nl,fr,de,el,iw,hu,ga,it,ja,ko,pt,ro,ru,sr,es,th,vi\',");
document.writeln("                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,");
document.writeln("                // 自动显示翻译横幅，就是翻译后顶部出现的那个");
document.writeln("                autoDisplay: true,");
document.writeln("                // 还有些其他参数，由于原插件不再维护，找不到详细api了，将就了，实在不行直接上dom操作");
document.writeln("            },");
document.writeln("            \'google_translate_element\' // 触发元素的id");
document.writeln("        );");
document.writeln("    }");
document.writeln("</script>");
document.writeln("<script src=\'http://translate.google.cn/translate_a/element.js?cb=googleTranslateElementInit\'></script>`,");
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
