(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const c=document.getElementById("mobile-menu-toggle"),u=document.getElementById("mobile-menu-close"),o=document.getElementById("mobile-menu"),l=document.getElementById("mobile-menu-back-shadow"),r=document.getElementsByTagName("body")[0];c.addEventListener("click",function(){o.classList.remove("-right-full"),o.classList.add("right-0"),r.classList.add("overflow-hidden"),l.classList.remove("hidden")});u.addEventListener("click",function(){o.classList.add("-right-full"),o.classList.remove("right-0"),r.classList.remove("overflow-hidden"),l.classList.add("hidden")});
