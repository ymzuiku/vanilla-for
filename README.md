# vanilla-for

> Size < 1kb

根据数组来渲染 element.children，类似于 Vue 的 v-for 在 vanilla-js 中。

## Install

```sh
$ npm install --save vanilla-for
```

## Use

```js
import {For} from 'vanilla-for';

const out = document.createElement('div');

For(out, list, (v, i, old) => {
    // 若数组短于 out.children.length, 会移除多余的 out.children

    // 若当前 i 存在历史元素
    if (old) {
      const p = old.querySelector("p")!;
      if (p.textContent !== v) {
        p.textContent = v;
      }
      return;
    }

    // 否则添加新的元素
    const item = document.createElement("div");
    item.className = "g-cols:auto|100px gap:--a1";
    const label = document.createElement("p");
    label.textContent = v;

    const del = document.createElement("button");
    del.textContent = "Del";
    del.onclick = () => {
      ob.next((s) => {
        s.list.splice(i, 1);
      });
    };

    item.append(label, del);

    out.append(item);
  });
}

```
