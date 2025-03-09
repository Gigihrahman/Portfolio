export const sendGAEvent = (
  event: string,
  label: string,
  category: string,
  value: number = 1
) => {
  const cleanString = (str: string): string => {
    return str
      .toLowerCase()
      .replace(/\s+/g, "_") // Replace spaces with underscores (_)
      .replace(/[^a-zA-Z0-9_]/g, ""); // Remove illegal characters (only letters, numbers, and underscores are allowed)
  };

  const cleanedEvent = cleanString(event);
  const cleanedLabel = cleanString(label);
  const cleanedCategory = cleanString(category);

  window.gtag("event", cleanedEvent, {
    label: cleanedLabel,
    category: cleanedCategory,
    value: value,
  });
};
