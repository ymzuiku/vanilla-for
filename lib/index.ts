// type ValueOf<T> = T[keyof T];

export function For<T extends Array<V>, V>(
  out: Element,
  list: T,
  fn: (value: T[0], index: number, nowElement?: HTMLElement) => any
) {
  let len = out.children.length;
  for (let i = (list as any).length; i < len; i++) {
    const del = out.children.item(i);
    if (del) {
      del.remove();
    }
  }
  (list as any).forEach((v: any, i: number) => {
    const old = out.children.item(i);
    if (old) {
      fn(v, i, old as any);
      return;
    }
    fn(v, i);
  });
}
