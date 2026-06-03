export type PackageSource = 'Arch' | 'AUR' | 'Flatpak' | 'AppImage';

export interface AppPackage {
  id: string;
  name: string;
  repo: string;
  version: string;
  description: string;
  sources: PackageSource[];
  selectedSource: PackageSource;
  isInstalled: boolean;
  installedSource?: PackageSource;
  iconText: string;
  iconBg: string;
  votes?: number;
  aurBuildType?: 'source' | 'binary' | 'git';
  isOutOfDate?: boolean;
}

export type SidebarTab = 'dashboard' | 'installed' | 'updates' | 'disk' | 'activity' | 'settings';

export interface DiskItem {
  id: string;
  name: string;
  description: string;
  initialSizeGb: number;
  currentSizeGb: number;
  isCleaned: boolean;
}

export interface ActivityLog {
  id: string;
  timestamp: string;
  action: 'install' | 'uninstall' | 'update' | 'cleanup';
  pkgName: string;
  source?: PackageSource;
  status: 'success' | 'running' | 'failed';
}

export interface AtlasSettings {
  enableTimeshift: boolean;
  enableAur: boolean;
  enableFlatpak: boolean;
  enableAppImage: boolean;
  flatpakLevel: 'System' | 'User';
  enableNotifications: boolean;
  enableSuggestions: boolean;
  enableSnapsFallback: boolean;
  enableDebianFallback: boolean;
}
