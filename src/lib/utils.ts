import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat('en-IN').format(value);
}

export function getAbsoluteUrl(path = '') {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dkenterprise.example.com';
  
  if (!siteUrl.startsWith('http://') && !siteUrl.startsWith('https://')) {
    siteUrl = `https://${siteUrl}`;
  }
  
  siteUrl = siteUrl.replace(/\/$/, '');
  
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${siteUrl}${cleanPath}`;
}
