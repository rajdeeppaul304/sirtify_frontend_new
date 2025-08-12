export interface User {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  borderColor: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export interface NavigationItem {
  label: string;
  href: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

export interface SPPOption {
  id: string;
  label: string;
  href: string;
}

export interface ProgramTrack {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  buttonText: string;
  variant: 'default' | 'highlighted';
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export interface SuccessStory {
  id: string;
  name: string;
  quote: string;
  designation: string;
  location: string;
  image: string;
}
