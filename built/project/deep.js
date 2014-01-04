//     Deep
//     (c) simonfan
//     Deep is licensed under the MIT terms.

define(["lodash"],function(e){function n(t,n,r){n=n.replace(/\[(["']?)([^\1]+?)\1?\]/g,".$2").replace(/^\./,"").split(".");var i=n.pop();return e.each(n,function(e){t=t[e]}),r(t,i)}var t={};return t.get=function(t,r){return n(t,r,function(e,t){return e[t]})},t.set=function(t,r,i){n(t,r,function(e,t){e[t]=i})},t});