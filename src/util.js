function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function () {
    console.log('Text copied to clipboard successfully!');
  }).catch(function (error) {
    console.error('Failed to copy text to clipboard:', error);
  });
}

export {
  copyToClipboard,
}