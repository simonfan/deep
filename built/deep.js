//     Deep
//     (c) simonfan
//     Deep is licensed under the MIT terms.

define("deep",["lodash"],function(n){function e(e,t,r){t=t.replace(/\[(["']?)([^\1]+?)\1?\]/g,".$2").replace(/^\./,"").split(".");var u=t.pop();return n.each(t,function(n){e=e[n]}),r(e,u)}var t={};return t.get=function(n,t){return e(n,t,function(n,e){return n[e]})},t.set=function(n,t,r){e(n,t,function(n,e){n[e]=r})},t});