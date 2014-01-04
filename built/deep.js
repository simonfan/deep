//     Deep
//     (c) simonfan
//     Deep is licensed under the MIT terms.

define("deep",["lodash","itr"],function(r,e){var n={};return n.parseKeys=function(r){return r.replace(/\[(["']?)([^\1]+?)\1?\]/g,".$2").replace(/^\./,"").split(".")},n.walker=function(t,s){s=r.isArray(s)?s:n.parseKeys(s);var a={},i=[];return r.each(s,function(e,n){var o=r.first(s,n).join(".");i.push(o),a[o]=t,t=t[e]}),console.log(i),e.object(a,{order:i})},n.get=function(e,t){return t=r.isArray(t)?t:n.parseKeys(t),r.reduce(t,function(r,e){return r[e]},e)},n.set=function(e,t,s){t=r.isArray(t)?t:n.parseKeys(t);var a=t.pop();e=n.get(e,t),e[a]=s},n});