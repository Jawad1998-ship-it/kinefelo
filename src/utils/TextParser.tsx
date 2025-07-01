export const TextParser = (htmlString) => {
  // Add spacing and font size to h1-h6 tags
  let updatedHtml = htmlString?.replace(/<(h[1-6])>(.*?)<\/(h[1-6])>/g, (match, tag, content, closingTag) => {
    const fontSizeClasses = {
      h1: "text-3xl", // ~30px
      h2: "text-2xl", // ~24px
      h3: "text-xl", // ~20px
      h4: "text-lg", // ~18px
      h5: "text-base", // ~16px
      h6: "text-sm", // ~14px
    };
    const fontClass = fontSizeClasses[tag] || "text-base";
    return `<${tag} class="mt-6 mb-4 ${fontClass}">${content}</${closingTag}>`;
  });
  // Add smaller spacing to p tags (no font size change)
  updatedHtml = updatedHtml?.replace(/<(p)>(.*?)<\/(p)>/g, '<$1 class="mt-2 mb-2">$2</$3>');
  return updatedHtml;
};
