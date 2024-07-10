const url = window.location.href;

// Remove query string from URL
if (url.indexOf('?') !== -1) {
  const cleanURL = url.split('?')[0];

  window.location.href = cleanURL; 
}