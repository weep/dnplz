// ==UserScript==
// @name         DN "paywall"
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @updateURL	 https://raw.githubusercontent.com/weep/dnplz/master/dnplz.meta..js
// @downloadURL  https://raw.githubusercontent.com/weep/dnplz/master/dnplz.user.js
// @match        http://www.dn.se/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	function dnplz(){
		addGlobalStyle('.article__body--mask .article__lead:after { box-shadow: 0 0  !important; } ');
		addGlobalStyle('.paywall { display: none !important; ');
		addGlobalStyle('.article__body--mask .article__premium-content { display: block !important; ');
	}

	 function addGlobalStyle(css) {
		var head, style;
		head = document.getElementsByTagName('head')[0];
		if (!head) { return; }
		style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = css;
		head.appendChild(style);
	}

    dnplz();
})();