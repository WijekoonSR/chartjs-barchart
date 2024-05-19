export const splitText = (text, maxLineLength) => {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  words.forEach((word) => {
    if ((currentLine + word).length <= maxLineLength) {
      currentLine += `${word} `;
    } else {
      lines.push(currentLine.trim());
      currentLine = `${word} `;
    }
  });

  if (currentLine.length > 0) {
    lines.push(currentLine.trim());
  }

  return lines;
};

export const getChartText = (name, length) => {
  const originalText = name ? name : '';

  let convertText = originalText;

  const textLength = originalText ? originalText.length : 0;
  if (length && typeof length === 'number' && textLength > length) {
    convertText = splitText(convertText, length);
  }

  return convertText;
};
