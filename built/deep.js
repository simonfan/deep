//     Deep
//     (c) simonfan
//     Deep is licensed under the MIT terms.

define("deep",["lodash","itr"],function(e,r){var t={};t.parseKeys=function(e){return e.replace(/\[(["']?)([^\1]+?)\1?\]/g,".$2").replace(/^\./,"").split(".")};var n=r.object.extend({nextStep:function(){var e=new RegExp("^"+this.currentKey()+"\\.");return this.nextKey().replace(e,"")},currentStep:function(){var e=new RegExp("^"+this.previousKey()+"\\.");return this.currentKey().replace(e,"")},previousStep:function(){var r=this.previousKey()||"";return e.last(r.split("."))}});return t.walker=function(r,i){i=e.isArray(i)?i:t.parseKeys(i);var s={},u=[];return e.each(i,function(t,n){var a=e.first(i,n).join(".");u.push(a),s[a]=r,r=r[t]}),n(s,{order:u})},t.get=function(r,n){return n=e.isArray(n)?n:t.parseKeys(n),e.reduce(n,function(e,r){return e[r]},r)},t.set=function(r,n,i){n=e.isArray(n)?n:t.parseKeys(n);var s=n.pop();r=t.get(r,n),r[s]=i},t});