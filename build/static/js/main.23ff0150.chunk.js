(this["webpackJsonpgpea-hongkong-pet-general_mc"]=this["webpackJsonpgpea-hongkong-pet-general_mc"]||[]).push([[0],[function(e,t,n){e.exports=n(4)},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3);var o=window.$;o.validator.messages.required="\u5fc5\u586b\u6b04\u4f4d",o.validator.addMethod("validate-name",(function(e,t){return new RegExp(/^[\u4e00-\u9fa5_a-zA-Z_ ]{1,40}$/i).test(e)}),"\u8acb\u4e0d\u8981\u8f38\u5165\u6578\u5b57\u6216\u7b26\u865f"),o.validator.addMethod("email",(function(e,t){return!e||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/i.test(e)}),"\u96fb\u90f5\u5730\u5740\u683c\u5f0f\u932f\u8aa4"),o.validator.addMethod("phone",(function(e,t){var n=new RegExp(/^(10001000|[2-9]{1}[0-9]{7})$/).test(e);return!e||n}),"\u96fb\u8a71\u683c\u5f0f\u4e0d\u6b63\u78ba\uff0c\u8acb\u8f38\u51658\u4f4d\u6578\u5b57\u96fb\u8a71\u865f\u78bc"),o.validator.addMethod("taiwan-phone",(function(e,t){var n=new RegExp(/^(0|886|\+886)?(9\d{8})$/).test(e),o=new RegExp(/^(0|886|\+886){1}[2-8]-?\d{6,8}$/).test(e);return!e||(n||o)}),"\u96fb\u8a71\u683c\u5f0f\u4e0d\u6b63\u78ba\uff0c\u8acb\u53ea\u8f38\u5165\u6578\u5b57 0912345678 \u548c 02-23612351"),o.validator.addMethod("taiwan-phone",(function(e,t){var n=new RegExp(/^(0|886|\+886)?(9\d{8})$/).test(e),o=new RegExp(/^(0|886|\+886){1}[2-8]-?\d{6,8}$/).test(e);return!e||(n||o)}),"\u96fb\u8a71\u683c\u5f0f\u4e0d\u6b63\u78ba\uff0c\u8acb\u53ea\u8f38\u5165\u6578\u5b57 0912345678 \u548c 02-23612351"),o.validator.addClassRules({email:{email:!0},phone:{phone:!0},"taiwan-phone":{"taiwan-phone":!0}});var a=function(e){var t={};return e.querySelectorAll("input").forEach((function(e,n){var o=null;o="checkbox"===e.type?e.checked:e.value,t[e.name]=o})),e.querySelectorAll("select").forEach((function(e,n){t[e.name]=e.options[e.selectedIndex].value})),t},r=function(){document.querySelector("#page-loading").classList.add("hide"),setTimeout((function(){document.querySelector("#page-loading").remove()}),1100)};o((function(){if(document.querySelector("#copyright-year").innerHTML=(new Date).getFullYear(),window.location.href.indexOf("utm_source=dd")>=0){var e=document.createElement("style");e.innerHTML=".is-hidden-at-dd-page-only {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\t\t\t.is-shown-at-dd-page-only {\n\t\t\t\tdisplay: block !important;\n\t\t\t}",document.head.appendChild(e)}else{var t=document.createElement("style");t.innerHTML="\n\t\t\t.is-shown-at-dd-page-only {\n\t\t\t\tdisplay: none !important;\n\t\t\t}",document.head.appendChild(t)}}));var i=function(e){e.preventDefault();navigator.share?navigator.share({title:"",text:"\u60a8\u53ef\u4ee5\u963b\u6b62\u4e9e\u99ac\u905c\u6bc0\u6797\uff01\u4e00\u9f4a\u806f\u7f72\u4fc3\u8acb\u9999\u6e2f\u4f01\u696d\u67e5\u660e\u3001\u516c\u958b\u6240\u552e\u8089\u54c1\u4f86\u6e90\uff0c\u540c\u6bc0\u6797\u8089\u5546\u5283\u6e05\u754c\u7dda\uff0c\u78ba\u4fdd\u6211\u54cb\u55ba\u5e97\u92ea\u8cfc\u8cb7\u5605\u8089\u54c1\uff0c\u5514\u6d89\u53ca\u4e9e\u99ac\u905c\u6bc0\u6797\uff0c\u4e00\u9f4a\u884c\u52d5\u4fdd\u885b\u4e9e\u99ac\u905c\u68ee\u6797\ud83d\udc49 ",url:"https://act.gp/3lGitko"}).then().catch():function(){var e=(window.innerHeight-436)/2,t=(window.innerWidth-626)/2;window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent("https://act.gp/31PkLWv"),"_blank","width=626,height=436,top="+e+",left="+t)}()},d=function(e){e.preventDefault();window.open("https://api.whatsapp.com/send?text=\u60a8\u53ef\u4ee5\u963b\u6b62\u4e9e\u99ac\u905c\u6bc0\u6797\uff01\u4e00\u9f4a\u806f\u7f72\u4fc3\u8acb\u9999\u6e2f\u4f01\u696d\u67e5\u660e\u3001\u516c\u958b\u6240\u552e\u8089\u54c1\u4f86\u6e90\uff0c\u540c\u6bc0\u6797\u8089\u5546\u5283\u6e05\u754c\u7dda\uff0c\u78ba\u4fdd\u6211\u54cb\u55ba\u5e97\u92ea\u8cfc\u8cb7\u5605\u8089\u54c1\uff0c\u5514\u6d89\u53ca\u4e9e\u99ac\u905c\u6bc0\u6797\uff0c\u4e00\u9f4a\u884c\u52d5\u4fdd\u885b\u4e9e\u99ac\u905c\u68ee\u6797\ud83d\udc49 https://act.gp/2DjK759")},c=window.$;c((function(){for(var e=(new Date).getFullYear(),t=e-110,n=e-20;n>=t;n--)c("#Birthdate").append(c("<option>",{value:n.toString()+"-01-01",text:n}));c("form.form-body").validate({errorPlacement:function(e,t){t.after(e)},submitHandler:function(e){document.querySelector("#page-loading")||document.querySelector("body").insertAdjacentHTML("beforeend",'\n\t\t\t<div id="page-loading" class="hide">\n\t\t\t  <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>\n\t\t\t</div>'),setTimeout((function(){document.querySelector("#page-loading").classList.remove("hide")}),0);try{var t=a(document.querySelector("form#mc-form")),n=a(document.querySelector("form.form-body")),o=Object.assign(t,n);o.MobilePhone&&(o.MobilePhone=o.MobilePhone.replace(/^0{1}/,"")),fetch(document.querySelector("#mc-form").action,{method:"POST",body:Object.keys(o).reduce((function(e,t){return e.append(t,o[t]),e}),new FormData)}).then((function(e){return e.json()})).then((function(e){var t,n;console.log("response",e),r(),l(2),e.Supporter&&(t="2020-amazon_forest",window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"gaEvent",eventCategory:"petitions",eventAction:"signup",eventLabel:t,eventValue:n}),window.dataLayer.push({event:"fbqEvent",contentName:t,contentCategory:"Petition Signup"}))})).catch((function(e){r(),alert(e),console.error(e)}))}catch(i){console.error(i)}return!1},invalidHandler:function(e,t){var n=t.numberOfInvalids();n?(console.log(n),c("div.error").show()):c("div.error").hide()}})}));var l=function(e){if(console.log("changeToPage",e),1===e)c("#page-2").hide();else{if(2!==e)throw new Error("Unknown pageNo: "+e);c("#page-1").hide(),c("#page-2").show();var t=document.querySelector("#page-2").getBoundingClientRect().top+window.pageYOffset;window.scrollTo(0,t),document.querySelectorAll(".signup-now").forEach((function(e){e.innerHTML="\u652f\u6301\u6211\u5011"}))}};document.addEventListener("DOMContentLoaded",(function(e){!function(){var e=document.querySelectorAll(".js-parallax-me");function t(t){var n=window.innerHeight;Array.from(e).forEach((function(e){var t=e.hasAttribute("data-prlx-speed")?parseInt(e.dataset.prlxSpeed,10):1,o=e.getBoundingClientRect().top,a=e.parentElement.getBoundingClientRect().height;if(!(o+a<0||o>n))if(e.hasAttribute("data-prlx-from-top")){var r=(1-(o+a)/a)*(100*t);e.style.transform="translate3D(0, "+-r+"px, 0)"}else{var i=(1-(o+a)/(n+a))*(100*t);e.style.transform="translate3D(0, "+(100*t/2-i)+"px, 0)"}}))}Array.from(e).forEach((function(e){var t=e.hasAttribute("data-prlx-speed")?parseInt(e.dataset.prlxSpeed,10):1;e.hasAttribute("data-prlx-from-top")?(e.style.top="-"+100*t/3+"px",e.style.bottom="-"+100*t+"px"):(e.style.top="-"+100*t/2+"px",e.style.bottom="-"+100*t/2+"px")})),window.addEventListener("scroll",t),t()}(),l(1),document.querySelector(".form-button--whatsapp").addEventListener("click",d),document.querySelector(".form-button--share").addEventListener("click",i)}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[0,1]]]);
//# sourceMappingURL=main.23ff0150.chunk.js.map