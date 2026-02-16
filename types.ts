
export interface ColorSwatch {
  name: string;
  hex: string;
  rgb: string;
  function: string;
  icon: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  category?: 'Identity' | 'Interface';
}
