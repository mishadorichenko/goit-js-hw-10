/* empty css                      */import{f as m,i as p}from"./assets/vendor-77e16229.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const s=document.querySelector("[data-start]");s.disabled=!0;const d=document.querySelector("#datetime-picker"),h=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]");let l;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0]),e[0]<=new Date?(s.disabled=!0,p.error({title:"Error",message:"Please choose a date in the future",position:"topRight"})):(l=e[0],s.disabled=!1)}};m("#datetime-picker",b);s.addEventListener("click",v);function a(e){const r=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),u=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:c,minutes:u,seconds:f}}console.log(a(2e3));console.log(a(14e4));console.log(a(2414e4));function O({days:e,hours:o,minutes:n,seconds:i}){return e=e.toString().padStart(2,0),o=o.toString().padStart(2,0),n=n.toString().padStart(2,0),i=i.toString().padStart(2,0),{days:e,hours:o,minutes:n,seconds:i}}function q({days:e,hours:o,minutes:n,seconds:i}){h.textContent=e,y.textContent=o,S.textContent=n,g.textContent=i}function v(){s.disabled=!0,d.disabled=!0;const e=setInterval(()=>{const o=l-Date.now();if(o>0){const n=O(a(o));q(n)}else clearInterval(e),d.disabled=!1},1e3)}
//# sourceMappingURL=commonHelpers.js.map