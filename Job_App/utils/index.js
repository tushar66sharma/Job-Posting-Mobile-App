export const checkImageURL = (url) => {
    if (!url) return false;
  
    // Updated regex to handle query strings and other valid URL patterns
    const pattern = new RegExp(
      '^https?:\\/\\/(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}(?:\\/[^\\s]*)?(\\.(png|jpg|jpeg|bmp|gif|webp))?(\\?.*)?$',
      'i'
    );
    return pattern.test(url);
  };
  