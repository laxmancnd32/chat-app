/**
 * Generates initials from a full name
 * @param {string} name - The full name to generate initials from
 * @returns {string} The initials (e.g., "John Doe" -> "JD")
 */
export const generateInitials = (name) => {
  if (!name) return "";

  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("")
    .slice(0, 2); // Limit to 2 initials
};
