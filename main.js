(()=>{"use strict";function e(e){e.remove()}function t(e){e.querySelector(".card__like-button").classList.toggle("card__like-button_is-active")}function n(e){e.classList.add("popup_is-opened"),window.addEventListener("keydown",r)}function o(e){e.classList.remove("popup_is-opened"),window.removeEventListener("keydown",r)}function r(e){"Escape"==e.key&&o(document.querySelector(".popup_is-opened"))}var c=document.querySelector(".profile__image");fetch("https://nomoreparties.co/v1/wff-cohort-6/users/me",{method:"GET",headers:{authorization:"7aea75e6-a33e-44c8-8785-1d85f354cab4"}}).then((function(e){return e.json()})).then((function(e){console.log(e),c.style.backgroundImage=url(e.avatar)})),console.log("вsdsdsdsdsdfsdgbsdghsdt");var u=document.querySelector(".places__list");function i(e,t){n(l),p.src=e.src,d.alt=e.alt,a.textContent=t}var l=document.querySelector(".popup_type_image"),p=l.querySelector(".popup__image"),d=l.querySelector(".popup__image"),a=l.querySelector(".popup__caption"),s=document.querySelector(".profile__edit-button"),_=document.querySelector(".popup_type_edit"),m=document.querySelectorAll(".popup__close"),f=document.querySelectorAll(".popup"),y=document.querySelector(".profile__add-button"),v=document.querySelector(".popup_type_new-card"),q=document.querySelector(".popup__input_type_name"),S=document.querySelector(".popup__input_type_description"),k=document.querySelector(".popup_type_edit");q.value=document.querySelector(".profile__title").textContent,S.value=document.querySelector(".profile__description").textContent;var g=document.querySelector(".profile__title"),E=document.querySelector(".profile__description"),L=document.forms.newPlace;s.addEventListener("click",(function(){return n(_)})),f.forEach((function(e){e.addEventListener("click",(function(e){return function(e){var t=document.querySelector(".popup_is-opened");e.target===e.currentTarget&&o(t)}(e)}))})),m.forEach((function(e){e.addEventListener("click",(function(){return o(e)}))})),y.addEventListener("click",(function(){return n(v)})),k.addEventListener("submit",(function(e){e.preventDefault(),g.textContent=q.value,E.textContent=S.value,o(_)})),L.addEventListener("submit",(function(n){n.preventDefault(),v.classList.remove("popup_is-opened");var o=function(e,t,n,o){var r=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),c=r.querySelector(".card__delete-button"),u=r.querySelector(".card__like-button"),i=r.querySelector(".card__image"),l=r.querySelector(".card__title");return i.src=e.link,i.alt=e.name,l.textContent=e.name,c.addEventListener("click",(function(){t(r)})),u.addEventListener("click",(function(){n(r)})),i.addEventListener("click",(function(){o(i,l.textContent)})),r}({name:L.elements.placeName.value,link:L.elements.link.value},e,t,i);u.prepend(o),L.reset()}))})();