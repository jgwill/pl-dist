var path=require("path"),pattern_root=path.join(process.cwd(),"files/patterns");Mustache=require("mustache-file");var must=new Mustache({extension:"mustache",path:[pattern_root]}),templateNav="tests-test-nav",dataFilepath=path.join(pattern_root,templateNav+".json");console.log(`dataFilepath: ${dataFilepath}`);var contextData=require(dataFilepath);console.log(contextData),must.render(templateNav,contextData,function(t,a){if(t)throw t;console.log(a)});