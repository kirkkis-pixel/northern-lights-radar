'use client';

import { useEffect, useState } from 'react';

interface AdSenseProps {
  slot: string;
  format?: string;
  responsive?: boolean;
  className?: string;
}

export default function AdSense({ slot, format = 'auto', responsive = true, className = '' }: AdSenseProps) {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Check if AdSense is enabled via environment variable
    const enabled = process.env.NEXT_PUBLIC_ENABLE_ADSENSE === 'true';
    setIsEnabled(enabled);
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    // Load AdSense script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.setAttribute('data-ad-client', process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || '');
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src*="googlesyndication.com"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [isEnabled]);

  if (!isEnabled) {
    return (
      <div className={`bg-gray-100 border border-gray-200 rounded-lg p-4 text-center text-gray-500 text-sm ${className}`}>
        Ad placeholder
      </div>
    );
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}

