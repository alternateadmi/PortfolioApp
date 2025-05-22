// Utility for generating dynamic neumorphic shadows based on theme
export const getNeuShadow = (isDark: boolean, type: 'default' | 'small' | 'inset' = 'default') => {
  if (isDark) {
    switch (type) {
      case 'small':
        return 'shadow-neumorph-dark-sm';
      case 'inset':
        return 'shadow-neumorph-dark-inset';
      default:
        return 'shadow-neumorph-dark';
    }
  } else {
    switch (type) {
      case 'small':
        return 'shadow-neumorph-sm';
      case 'inset':
        return 'shadow-neumorph-inset';
      default:
        return 'shadow-neumorph';
    }
  }
};

// Generate neumorphic button styles
export const getNeuButtonStyles = (isDark: boolean, isPressed: boolean) => {
  const baseStyles = 'transition-all duration-200 rounded-xl';
  const darkTheme = isDark ? 'bg-neugray-800 text-neugray-100' : 'bg-neugray-200 text-neugray-800';
  
  if (isPressed) {
    return `${baseStyles} ${darkTheme} ${getNeuShadow(isDark, 'inset')}`;
  }
  
  return `${baseStyles} ${darkTheme} ${getNeuShadow(isDark, 'small')}`;
};

// Generate neumorphic card styles
export const getNeuCardStyles = (isDark: boolean) => {
  const baseStyles = 'rounded-2xl transition-all duration-300';
  const darkTheme = isDark ? 'bg-neugray-800 text-neugray-100' : 'bg-neugray-200 text-neugray-800';
  
  return `${baseStyles} ${darkTheme} ${getNeuShadow(isDark)}`;
};

// Generate neumorphic input styles
export const getNeuInputStyles = (isDark: boolean, isFocused: boolean) => {
  const baseStyles = 'rounded-xl transition-all duration-200 outline-none';
  const darkTheme = isDark ? 'bg-neugray-800 text-neugray-100' : 'bg-neugray-200 text-neugray-800';
  
  if (isFocused) {
    return `${baseStyles} ${darkTheme} ${getNeuShadow(isDark, 'inset')}`;
  }
  
  return `${baseStyles} ${darkTheme} ${getNeuShadow(isDark, 'small')}`;
};