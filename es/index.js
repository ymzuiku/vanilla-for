function For(o,r,t){for(var e=o.children.length,n=r.length;n<e;n++){var i=o.children.item(n);i&&i.remove()}return r.forEach(function(r,e){var n=o.children.item(e);n?t(r,e,n):t(r,e)}),o}export{For};
//# sourceMappingURL=index.js.map
