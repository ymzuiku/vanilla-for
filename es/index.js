function For(o,r,i){for(var e=o.children.length,n=r.length;n<e;n++){var t=o.children.item(n);t&&t.remove()}r.forEach(function(r,e){var n=o.children.item(e);n?i(r,e,n):i(r,e)})}export{For};
//# sourceMappingURL=index.js.map
