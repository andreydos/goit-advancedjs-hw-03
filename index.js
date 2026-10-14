/* empty css                      */import{a as d,S as y,i as g}from"./assets/vendor-Ez6kKmBA.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="58044243-0e2c0ba932f3f37f380e3d610",L="https://pixabay.com/api/";function b(r){return d.get(L,{params:{key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const f=document.querySelector(".gallery"),u=document.querySelector(".loader"),S=new y(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function v(r){const o=r.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:l,comments:p,downloads:m})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s(a)}">
          <img
            class="gallery-image"
            src="${s(i)}"
            alt="${s(e)}"
          />
        </a>
        <ul class="info">
          <li class="info-item">
            <p class="info-label">Likes</p>
            <p class="info-value">${t}</p>
          </li>
          <li class="info-item">
            <p class="info-label">Views</p>
            <p class="info-value">${l}</p>
          </li>
          <li class="info-item">
            <p class="info-label">Comments</p>
            <p class="info-value">${p}</p>
          </li>
          <li class="info-item">
            <p class="info-label">Downloads</p>
            <p class="info-value">${m}</p>
          </li>
        </ul>
      </li>`).join("");f.insertAdjacentHTML("beforeend",o),S.refresh()}function q(){f.innerHTML=""}function A(){u.classList.add("is-active")}function P(){u.classList.remove("is-active")}function s(r){return String(r).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}const c=document.querySelector(".form"),E="Sorry, there are no images matching your search query. Please try again!";c.addEventListener("submit",r=>{r.preventDefault();const o=c.elements["search-text"].value.trim();if(o===""){n("Please enter a search query!");return}q(),A(),b(o).then(i=>{if(i.hits.length===0){n(E);return}v(i.hits)}).catch(()=>{n("Sorry, something went wrong. Please try again later!")}).finally(()=>{P()})});function n(r){g.error({message:r,position:"topRight",maxWidth:400})}
//# sourceMappingURL=index.js.map
