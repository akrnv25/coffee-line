export function lazyLoad(image, src) {
  const defaultSrc = '/default-image.svg';
  image.src = defaultSrc;
  const tempImage = new Image();
  tempImage.onload = () => {
    image.src = src;
    tempImage.remove();
  }
  tempImage.src = src;
  return {
    destroy() {
    }
  };
}
