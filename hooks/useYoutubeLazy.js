// Todo: Convert to TypeScript

const useYoutubeLazy = (children = false) => {
  if (typeof window === 'undefined' || !window.document) return;

  const youtube = document.querySelectorAll('.youtube--lazy');

  youtube.forEach((youtube, i) => {
    const dataset = youtube.dataset;

    let source = dataset.customImage;

    dataset.customImage
      ? null
      : (source = `https://img.youtube.com/vi/${dataset.embed}/hqdefault.jpg`);

    const image = new Image();

    image.src = source;
    youtube.appendChild(image);

    if (children) {
      const iframe = document.createElement('iframe');
      const urlOptions =
        'rel=0&showinfo=0&enablejsapi=1&widget_referrer=https://www.teamsnap.com';

      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute(
        'src',
        `https://www.youtube.com/embed/${dataset.embed}?${urlOptions}`
      );

      youtube.innerHTML = '';
      youtube.appendChild(iframe);

      if (window.dataLayer)
        window.dataLayer.push({ event: 'youtube-lazy-load-active' });
    }
  });
};

export { useYoutubeLazy };
