!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=!1,o=[],l=(document.createElement("input-form"),document.getElementById("submit_b")),a=document.getElementById("finish_s"),c=document.getElementById("restart_s"),i=document.getElementById("story"),u=(document.getElementsByTagName("span"),document.getElementById("span-par"));c.onclick=function(e){r&&window.location.reload()},l.onclick=function(e){console.log("is this working..."),console.log(i),function(){r=!1;var e=i.value,t=e.split(" ",e.length-1),n=document.createElement("div");n.className+="  third";var o=document.createElement("p");o.className+=" span-par ";for(var l=document.getElementById("storyDisplay"),a=0;a<t.length;a++){var c="";c=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(t[a].charAt(t[a].length-1))?"<span>"+t[a].substring(0,t[a].length-1)+"</span>"+t[a].charAt(t[a].length-1):"<span>"+t[a]+"</span>",o.innerHTML+=c+" "}n.appendChild(o),l.appendChild(n)}()},u.onclick=function(e){var t=e.target;o[o.length]=t.innerText,t.style.backgroundColor="yellow"},a.onclick=function(e){var t=document.createElement("div");t.className+=" fourth";for(var n=document.getElementById("listDisplay"),l=0;l<o.length;l++){var a=document.createElement("div");a.innerText=o[l],t.appendChild(a)}n.appendChild(t),o=[],r=!0}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiZmluaXNoZWQiLCJjbGlja2VkTGlzdCIsInN1Ym1pdEJ1dHRvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmluaXNoQnV0dG9uIiwicmVzdGFydEJ1dHRvbiIsInN0b3J5SW5wdXQiLCJzdG9yeSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwib25jbGljayIsImV2ZW50Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJjb25zb2xlIiwibG9nIiwiaW5wdXQiLCJ3b3JkcyIsInNwbGl0IiwibGVuZ3RoIiwiYUNvbnRhaW5lciIsImNsYXNzTmFtZSIsImFQYXIiLCJzdG9yeWRpc3BsYXkiLCJ0ZXN0IiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJzYXZlU3RvcnkiLCJjdXJyV29yZCIsInRhcmdldCIsImlubmVyVGV4dCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdGRpc3BsYXkiLCJ3b3JkIl0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxFQUFBLEdBR0EsU0FBQUMsRUFBQUMs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QVMsR0FFdEcsU0FBV0YsRUFBTW5ELEdBQUssVUFHOUJ3RCxFQUFLSyxXQUFhOUIsRUFBSSxJQUUxQnVCLEVBQVdRLFlBQVlOLEdBQ3ZCQyxFQUFhSyxZQUFZUixHQW9CekJTLElBR0p0QixFQUFNRSxRQUFVLFNBQUNDLEdBQ2IsSUFBSW9CLEVBQVlwQixFQUFNcUIsT0FDdEJoQyxFQUFZQSxFQUFZb0IsUUFBVVcsRUFBU0UsVUFDM0NGLEVBQVNHLE1BQU1DLGdCQUFrQixVQUdyQzlCLEVBQWFLLFFBQVUsU0FBQ0MsR0FDcEIsSUFBSVUsRUFBYW5CLFNBQVNDLGNBQWMsT0FDeENrQixFQUFXQyxXQUFhLFVBRXhCLElBREEsSUFBSWMsRUFBY2xDLFNBQVNFLGVBQWUsZUFDakNyQyxFQUFJLEVBQUdBLEVBQUlpQyxFQUFZb0IsT0FBUXJELElBQUssQ0FDekMsSUFBSXNFLEVBQU9uQyxTQUFTQyxjQUFjLE9BQ2xDa0MsRUFBS0osVUFBWWpDLEVBQVlqQyxHQUM3QnNELEVBQVdRLFlBQVlRLEdBRTNCRCxFQUFZUCxZQUFZUixHQUN4QnJCLEVBQWMsR0FDZEQsR0FBVyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcbmxldCBmaW5pc2hlZCA9IGZhbHNlO1xubGV0IGNsaWNrZWRMaXN0OiBzdHJpbmdbXSA9IFtdO1xubGV0IGZvcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dC1mb3JtXCIpO1xubGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0X2JcIikgYXMgSFRNTEVsZW1lbnQ7XG5sZXQgZmluaXNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaW5pc2hfc1wiKSBhcyBIVE1MRWxlbWVudDtcbmxldCByZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN0YXJ0X3NcIikgYXMgSFRNTEVsZW1lbnQ7XG5sZXQgc3RvcnlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcnlcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbmxldCBzcGFuV29yZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNwYW5cIik7XG5sZXQgc3RvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwYW4tcGFyXCIpIGFzIEhUTUxFbGVtZW50O1xuXG5cbmxldCBzYXZlU3RvcnkgPSAoKSA9PiB7XG4gICAgZmluaXNoZWQgPSBmYWxzZTtcbiAgICBsZXQgaW5wdXQgPSBzdG9yeUlucHV0LnZhbHVlO1xuICAgIGxldCB3b3JkcyA9IGlucHV0LnNwbGl0KFwiIFwiLCBpbnB1dC5sZW5ndGggLSAxKTtcbiAgICBsZXQgYUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYUNvbnRhaW5lci5jbGFzc05hbWUgKz0gXCIgIHRoaXJkXCI7XG4gICAgbGV0IGFQYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBhUGFyLmNsYXNzTmFtZSArPSBcIiBzcGFuLXBhciBcIjtcbiAgICBsZXQgc3BlY2lhbENoYXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsZXQgc3RvcnlkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9yeURpc3BsYXlcIikhO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZvcm1hdCA9IC9bIUAjJCVeJiooKV8rXFwtPVxcW1xcXXt9Oyc6XCJcXFxcfCwuPD5cXC8/XS87XG4gICAgICAgIGxldCBzID0gXCJcIjtcbiAgICAgICAgaWYgKGZvcm1hdC50ZXN0KHdvcmRzW2ldLmNoYXJBdCh3b3Jkc1tpXS5sZW5ndGggLSAxKSkpIHtcbiAgICAgICAgICAgIHNwZWNpYWxDaGFyID0gdHJ1ZTtcbiAgICAgICAgICAgIHMgPSBcIjxzcGFuPlwiICsgd29yZHNbaV0uc3Vic3RyaW5nKDAsIHdvcmRzW2ldLmxlbmd0aCAtIDEpICsgXCI8L3NwYW4+XCIgKyB3b3Jkc1tpXS5jaGFyQXQod29yZHNbaV0ubGVuZ3RoIC0gMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzID0gXCI8c3Bhbj5cIiArIHdvcmRzW2ldICsgXCI8L3NwYW4+XCJcbiAgICAgICAgfVxuXG4gICAgICAgIGFQYXIuaW5uZXJIVE1MICs9IHMgKyBcIiBcIjtcbiAgICB9XG4gICAgYUNvbnRhaW5lci5hcHBlbmRDaGlsZChhUGFyKTtcbiAgICBzdG9yeWRpc3BsYXkuYXBwZW5kQ2hpbGQoYUNvbnRhaW5lcik7XG59O1xuXG5sZXQgcHJvY2Vzc1N1Ym1pc3Npb24gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJpcyB0aGlzIHdvcmtpbmcuLi5cIik7XG4gICAgY29uc29sZS5sb2coc3RvcnlJbnB1dCk7XG59O1xuXG5yZXN0YXJ0QnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoZmluaXNoZWQpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbn07XG5cbnN1Ym1pdEJ1dHRvbi5vbmNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgLy8gaWYgKGZpbmlzaGVkKSB7XG4gICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcnlEaXNwbGF5XCIpLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcnlEaXNwbGF5XCIpKTtcbiAgICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0RGlzcGxheVwiKS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3REaXNwbGF5XCIpKTtcbiAgICAvLyB9XG4gICAgcHJvY2Vzc1N1Ym1pc3Npb24oKTtcbiAgICBzYXZlU3RvcnkoKTtcbn07XG5cbnN0b3J5Lm9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBsZXQgY3VycldvcmQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50KVxuICAgIGNsaWNrZWRMaXN0W2NsaWNrZWRMaXN0Lmxlbmd0aF0gPSBjdXJyV29yZC5pbm5lclRleHQ7XG4gICAgY3VycldvcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ5ZWxsb3dcIjtcbn1cblxuZmluaXNoQnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBsZXQgYUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYUNvbnRhaW5lci5jbGFzc05hbWUgKz0gXCIgZm91cnRoXCI7XG4gICAgbGV0IGxpc3RkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0RGlzcGxheVwiKSE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGlja2VkTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgd29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHdvcmQuaW5uZXJUZXh0ID0gY2xpY2tlZExpc3RbaV07XG4gICAgICAgIGFDb250YWluZXIuYXBwZW5kQ2hpbGQod29yZCk7XG4gICAgfVxuICAgIGxpc3RkaXNwbGF5LmFwcGVuZENoaWxkKGFDb250YWluZXIpO1xuICAgIGNsaWNrZWRMaXN0ID0gW107XG4gICAgZmluaXNoZWQgPSB0cnVlO1xuXG59OyJdLCJzb3VyY2VSb290IjoiIn0=