export async function initZeldaMap() {
  const rootDom = await getDom(document, "#menu-cat-content");
  if (rootDom == null) { return; }
}
async function getDom(parentDom: ParentNode, querySelector: string): Promise<HTMLElement | null> {
  const timeoutSec = 5;
  const timeout = new Date(new Date().getTime() + (timeoutSec * 1000));
  while (true) {
    if (timeout.getTime() < new Date().getTime()) {
      return null;
    }
    await sleep(100);
    const r = parentDom.querySelector<HTMLElement>(querySelector);
    if (r) {
      return r;
    }
  }
}
async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}