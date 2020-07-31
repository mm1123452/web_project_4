!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._text=t.name,this._imgLink=t.link,this._cardOwnerId=t.owner._id,this._userId=t.userId,this._cardId=t._id,this._likesCount=t.likes.length,this._likes=t.likes,this._cardSelector=n,this._handleCardClick=r}var t,n,o;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this,t=this._element.querySelector(".place__icon");this._element.querySelector(".place").addEventListener("click",(function(n){var r=null;n.target.classList.contains("place__image")?(r={image:e._imgLink,text:e._text},e._handleCardClick(r)):n.target.classList.contains("place__icon")&&n.target.classList.contains("place__icon_liked")?(r={cardId:e._cardId,method:"delete"},e._handleCardClick(r).then((function(n){e._setLikesCount(n.length),t.classList.toggle("place__icon_liked")}))):n.target.classList.contains("place__icon")?(r={cardId:e._cardId,method:"put"},e._handleCardClick(r).then((function(n){e._setLikesCount(n.length),t.classList.toggle("place__icon_liked")}))):n.target.classList.contains("place__delete")&&(r={target:n.target,cardId:e._cardId,method:"confirm"},e._handleCardClick(r))}))}},{key:"_setLikesCount",value:function(e){this._likesElement.textContent=e}},{key:"generateCard",value:function(){var e=this;this._element=this._getTemplate(),this._setEventListeners(),this._cardOwnerId!==this._userId&&this._element.querySelector(".place__delete").classList.add("place__delete-hide"),this._element.querySelector(".place").dataset.cardId=this._cardId;var t=this._element.querySelector(".place__image");return t.src=this._imgLink,t.alt=this._text,this._element.querySelector(".place__name").textContent=this._text,this._likesElement=this._element.querySelector(".place__likes-count"),this._setLikesCount(this._likesCount),this._likes.filter((function(t){return t._id===e._userId})).length>0&&this._element.querySelector(".place__icon").classList.add("place__icon_liked"),this._element}}])&&r(t.prototype,n),o&&r(t,o),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n,r;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.append(e)}}])&&i(t.prototype,n),r&&i(t,r),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleWindowClick=this._handleWindowClick.bind(this)}var t,n,r;return t=e,(n=[{key:"open",value:function(){this.setEventListeners(),this._popupSelector.classList.add("popup_opened")}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),window.removeEventListener("keydown",this._handleEscClose),window.removeEventListener("click",this._handleWindowClick)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleWindowClick",value:function(e){e.target.classList.contains("popup__container")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupSelector.querySelector(".popup__exit").addEventListener("click",(function(){e.close()})),window.addEventListener("keydown",this._handleEscClose),window.addEventListener("click",this._handleWindowClick)}}])&&c(t.prototype,n),r&&c(t,r),e}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var o=_(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,e);var t,n,r,o=d(i);function i(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,e)}return t=i,(n=[{key:"open",value:function(e){var t=this._popupSelector.querySelector(".popup__image"),n=this._popupSelector.querySelector(".popup__image-title");t.src=e.image,t.alt=e.text,n.textContent=e.text,f(_(i.prototype),"open",this).call(this)}}])&&l(t.prototype,n),r&&l(t,r),i}(s);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return S(this,n)}}function S(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(i,e);var t,n,r,o=k(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e))._submitHandler=t._submitHandler.bind(w(t)),t._closeButton=t._popupSelector.querySelector(".popup__button"),t}return t=i,(n=[{key:"_getInputValues",value:function(){var e=this._popupSelector.querySelectorAll(".popup__input"),t={};return e.forEach((function(e){t[e.name]=e.value})),t}},{key:"_submitHandler",value:function(e){e.preventDefault(),e.stopPropagation(),this._closeButton.textContent="Saving...",this._handleSubmit(this._getInputValues()),this.close()}},{key:"setSubmitFormCallback",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){this._popupSelector.addEventListener("submit",this._submitHandler),b(O(i.prototype),"setEventListeners",this).call(this)}},{key:"_removeEventListeners",value:function(){this._popupSelector.removeEventListener("submit",this._submitHandler)}},{key:"close",value:function(){this._popupSelector.classList.contains("popup_type_add-place")?this._closeButton.textContent="Create":this._popupSelector.classList.contains("popup_type_edit")?this._closeButton.textContent="Save":this._popupSelector.classList.contains("popup_type_confirm")&&(this._closeButton.textContent="Yes"),this._removeEventListeners(),this._popupSelector.querySelector(".popup__form").reset(),b(O(i.prototype),"close",this).call(this)}}])&&v(t.prototype,n),r&&v(t,r),i}(s);function C(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t,n){var r=n.inputSelector,o=n.inactiveButtonClass,i=n.errorClass,a=C(n,["inputSelector","inactiveButtonClass","errorClass"]);!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=t,this._inputSelector=r,this._inactiveButtonClass=o,this._errorClass=i,this._setting=a}var t,n,r;return t=e,(n=[{key:"_checkValidity",value:function(e){e.validity.valid?this._hideErrorMessage(e):this._showErrorMessage(e)}},{key:"_hideErrorMessage",value:function(e){var t=this._formElement.querySelector("#popup__".concat(e.name,"-error"));t.classList.remove(this._errorClass),e.classList.remove(this._errorClass),t.textContent=""}},{key:"_showErrorMessage",value:function(e){var t=this._formElement.querySelector("#popup__".concat(e.name,"-error"));t.textContent=e.validationMessage,t.classList.add(this._errorClass),e.classList.add(this._errorClass)}},{key:"_submitButtonState",value:function(){var e=this._inputFields.every((function(e){return e.validity.valid})),t=this._formElement.querySelector(".popup__button");e?(t.classList.remove(this._inactiveButtonClass),t.disabled=!1):(t.classList.add(this._inactiveButtonClass),t.disabled=!0)}},{key:"_setEventListeners",value:function(){var e=this;this._inputFields=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._inputFields.forEach((function(t){t.addEventListener("input",(function(){e._checkValidity(t),e._submitButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&E(t.prototype,n),r&&E(t,r),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){var n=t.name,r=t.job,o=(t.id,t.avatar);!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=document.querySelector(n),this._jobSelector=document.querySelector(r),this._avatarSelector=document.querySelector(o)}var t,n,r;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameSelector.textContent,job:this._jobSelector.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.job,r=e.id,o=e.avatar;this._id=r,t&&n&&(this._nameSelector.textContent=t,this._jobSelector.textContent=n),o&&(this._avatarSelector.style.backgroundImage="url('".concat(o,"')"))}}])&&L(t.prototype,n),r&&L(t,r),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}var t,n,r;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{method:"GET",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"getProfile",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"updateProfileAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"updateProfileData",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"postCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"addLikes",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"deleteLikes",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}}])&&x(t.prototype,n),r&&x(t,r),e}(),T=document.querySelector(".popup_type_edit"),R=T.querySelector(".popup__name"),U=T.querySelector(".popup__about"),D=document.querySelector(".profile"),B=document.querySelector(".edit");function A(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){H(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var V,W,N,J=null,G=new j(".popup_type_confirm"),z=new j(".popup_type_add-place"),Y=new j(".popup_type_edit"),K=new j(".popup_type_profile-picture"),Q=new q({baseUrl:"https://around.nomoreparties.co/v1/group-1",headers:{authorization:"8d98f55e-f3f5-4d31-8928-0111e1b03804","Content-Type":"application/json"}}),X=new I({name:".profile__name",job:".profile__title",avatar:".avatar"}),Z=new y(".popup_type_large-image"),$=null,ee=function(){Q.getInitialCards().then((function(e){ne(e)})).catch((function(e){console.log(e)}))},te=function(){Q.getProfile().then((function(e){var t=e._id,n=e.name,r=e.avatar,o=e.about;$=t;var i={name:n,avatar:r,id:t,job:o};X.setUserInfo(i)})).catch((function(e){console.log(e)}))},ne=function(e){(J=new a({items:e,renderer:re},".places")).renderItems()},re=function(e){var t=F(F({},e),{},{userId:$}),n=new o(t,"#place-template",(function(e){if(e.image&&e.text)Z.open(e);else{if(e.cardId&&"put"===e.method)return Q.addLikes(e.cardId).then((function(e){return e.likes}));if(e.cardId&&"delete"===e.method)return Q.deleteLikes(e.cardId).then((function(e){return e.likes}));"confirm"===e.method&&(G.setSubmitFormCallback((function(t){Q.deleteCard(e.cardId).then((function(t){oe(e.cardId)}))})),G.open())}})).generateCard();J.addItem(n)},oe=function(e){Array.from(document.querySelectorAll(".place")).find((function(t){return t.dataset.cardId===e})).remove()};W=(V={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",errorClass:"popup__error_visible",inputErrorClass:"popup__input_type_error"}).formSelector,N=A(V,["formSelector"]),Array.from(document.querySelectorAll(W)).forEach((function(e){new P(e,N).enableValidation()})),D.addEventListener("click",(function(e){if(e.target.classList.contains("button_edit")){var t=X.getUserInfo(),n=t.name,r=t.job;R.value=n,U.value=r,Y.setSubmitFormCallback((function(e){var t={name:e.name,about:e.job};Q.updateProfileData(t).then((function(e){var t={name:e.name,job:e.about};X.setUserInfo(t)}))})),Y.open()}else e.target.classList.contains("button_add")&&(z.setSubmitFormCallback((function(e){var t=e.title,n=e.link;Q.postCard({name:t,link:n}).then((function(e){re(e)}))})),z.open())})),B.addEventListener("click",(function(e){K.setSubmitFormCallback((function(e){Q.updateProfileAvatar(e.photo).then((function(e){X.setUserInfo({avatar:e.avatar})}))})),K.open()})),window.addEventListener("load",(function(){te(),ee()}))}]);