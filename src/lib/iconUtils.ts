/**
 * Converts an icon filename to a readable label
 * Example: "Amulet_shop_icon.png" -> "Amulet Shop"
 * Example: "/map_icons/Bank_icon.png" -> "Bank"
 */
export function iconPathToLabel(iconPath: string): string {
  // Extract filename from path
  const filename = iconPath.split('/').pop() || iconPath;
  
  // Remove _icon.png suffix
  let label = filename.replace(/_icon\.png$/, '');
  
  // Replace underscores with spaces
  label = label.replace(/_/g, ' ');
  
  // Capitalize first letter of each word
  label = label
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  
  return label;
}
