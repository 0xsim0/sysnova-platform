import { Cloud, Monitor, Globe, Bot, Network, Camera } from "lucide-react";

export const SERVICE_META = [
  { icon: Cloud,   emoji: "☁️", accent: "from-blue-500/10 to-transparent",    href: "/leistungen/cloud-architektur"  },
  { icon: Monitor, emoji: "🖥️", accent: "from-emerald-500/10 to-transparent", href: "/leistungen/it-support"         },
  { icon: Globe,   emoji: "🌐", accent: "from-violet-500/10 to-transparent",  href: "/leistungen/webentwicklung", secondaryHref: "/webdesign-agentur-berlin" },
  { icon: Bot,     emoji: "🤖", accent: "from-amber-500/10 to-transparent",   href: "/leistungen/ki-automatisierung" },
  { icon: Network, emoji: "🔧", accent: "from-cyan-500/10 to-transparent",    href: "/leistungen/netzwerk-pc-support"},
  { icon: Camera,  emoji: "📷", accent: "from-red-500/10 to-transparent",     href: "/leistungen/cctv-uberwachung"   },
] as const;

export type ServiceMeta = (typeof SERVICE_META)[number];

export function hasSecondaryHref(
  meta: ServiceMeta
): meta is ServiceMeta & { secondaryHref: string } {
  return "secondaryHref" in meta;
}
