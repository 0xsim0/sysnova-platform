"use client";
import Script from "next/script";
import { useSyncExternalStore } from "react";
import { GA_ID } from "@/lib/config";

interface GoogleAnalyticsProps {
  nonce?: string;
}

export default function GoogleAnalytics({ nonce }: GoogleAnalyticsProps) {
  const consented = useSyncExternalStore(subscribeToConsent, getConsentSnapshot, getServerConsentSnapshot);

  if (!consented) return null;

  // nonce is passed for completeness but has no browser-enforced effect here:
  // this component mounts client-side after hydration (getServerConsentSnapshot=false),
  // so these <Script> tags are never in the initial HTML. GA still loads correctly
  // because 'strict-dynamic' in the CSP allows scripts dynamically injected by
  // nonce-trusted parent scripts.
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
        nonce={nonce}
      />
      <Script id="google-analytics" strategy="afterInteractive" nonce={nonce}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}

function subscribeToConsent(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("sn-consent-accepted", onStoreChange);
  window.addEventListener("sn-consent-reset", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("sn-consent-accepted", onStoreChange);
    window.removeEventListener("sn-consent-reset", onStoreChange);
  };
}

function getConsentSnapshot() {
  return localStorage.getItem("sn-cookie-consent") === "accepted";
}

function getServerConsentSnapshot() {
  return false;
}
