//     Deep
//     (c) simonfan
//     Deep is licensed under the MIT terms.

define(["lodash","itr"],function(e,t){var n={};return n.parseKeys=function(t){return t.replace(/\[(["']?)([^\1]+?)\1?\]/g,".$2").replace(/^\./,"").split(".")},n.walker=function(i,s){s=e.isArray(s)?s:n.parseKeys(s);var o={},u=[];return e.each(s,function(t,n){var r=e.first(s,n).join(".");u.push(r),o[r]=i,i=i[t]}),console.log(u),t.object(o,{order:u})},n.get=function(r,i){return i=e.isArray(i)?i:n.parseKeys(i),e.reduce(i,function(e,t,n){return e[t]},r)},n.set=function(r,i,s){i=e.isArray(i)?i:n.parseKeys(i);var o=i.pop();r=n.get(r,i),r[o]=s},n});