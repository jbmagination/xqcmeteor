// ==UserScript==
// @name         Pre xQc-meteor template
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  WE CAN DO THIS
// @author       oralekin & JBMagination - script, u/MartyStarkiller - image
// @match        https://hot-potato.reddit.com/embed*
// @icon         http://icons.duckduckgo.com/ip2/reddit.com.ico
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/jbmagination/xqcmeteor/main/xqcmeteor.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())
    }, false);
}
