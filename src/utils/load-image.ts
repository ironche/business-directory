export function loadImage(url: string, el: HTMLImageElement): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    el.onload = () => resolve(el);
    el.onerror = reject;
    el.src = url;
  });
}
