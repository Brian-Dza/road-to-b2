import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function resolvePublicAssetUrl(assetPath: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedAsset = assetPath.startsWith("/") ? assetPath.slice(1) : assetPath;
  return `${normalizedBase}${normalizedAsset}`;
}
