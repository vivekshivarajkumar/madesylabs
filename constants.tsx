
import { ColorSwatch, NavItem } from './types';

export const COLORS: ColorSwatch[] = [
  {
    name: 'DATA STREAM GREEN',
    hex: '#13EC92',
    rgb: '19, 236, 146',
    function: 'ACCENT_NEON',
    icon: 'bolt',
    colorClass: 'text-primary',
    bgClass: 'bg-primary',
    borderClass: 'border-primary',
  },
  {
    name: 'TENSOR PURPLE',
    hex: '#A855F7',
    rgb: '168, 85, 247',
    function: 'PRIMARY_DATA',
    icon: 'psychology',
    colorClass: 'text-secondary',
    bgClass: 'bg-secondary',
    borderClass: 'border-secondary',
  },
  {
    name: 'CRITICAL ALERT',
    hex: '#FF4B5C',
    rgb: '255, 75, 92',
    function: 'ALERT_STATE',
    icon: 'error',
    colorClass: 'text-[#FF4B5C]',
    bgClass: 'bg-[#FF4B5C]',
    borderClass: 'border-[#FF4B5C]',
  },
  {
    name: 'VOID CORE',
    hex: '#050508',
    rgb: '5, 5, 8',
    function: 'VOID_DEPTH',
    icon: 'dark_mode',
    colorClass: 'text-white',
    bgClass: 'bg-[#050508]',
    borderClass: 'border-white/20',
  },
];

export const NAV_ITEMS: NavItem[] = [
  { id: 'typography', label: 'Typography', icon: 'keyboard', category: 'Identity' },
  { id: 'colors', label: 'Color Palette', icon: 'palette', category: 'Identity' },
  { id: 'components', label: 'Components', icon: 'extension', category: 'Interface' },
  { id: 'data-modules', label: 'Data Modules', icon: 'monitoring', category: 'Interface' },
  { id: 'hud-telemetry', label: 'Telemetry', icon: 'analytics', category: 'Interface' },
];

export const ICONS = [
  { id: 'node_map', icon: 'hub' },
  { id: 'wave_form', icon: 'monitoring' },
  { id: 'data_filter', icon: 'filter_list' },
  { id: 'stat_graph', icon: 'query_stats' },
  { id: 'cpu_load', icon: 'memory', color: 'text-secondary' },
  { id: 'console', icon: 'terminal', color: 'text-secondary' },
  { id: 'storage', icon: 'database', color: 'text-secondary' },
  { id: 'security', icon: 'shield', color: 'text-secondary' },
];
