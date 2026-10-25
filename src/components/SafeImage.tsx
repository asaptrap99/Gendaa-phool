"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { GiftIllustration } from "./Illustrations";

// next/image that falls back to a flat illustration if a placeholder photo fails to load.
export default function SafeImage(props: ImageProps & { accent?: string }) {
  const { accent, className, alt, ...rest } = props;
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div role="img" aria-label={alt} className={`absolute inset-0 ${className ?? ""}`}>
        <GiftIllustration accent={accent} className="h-full w-full" />
      </div>
    );
  }
  return <Image {...rest} alt={alt} className={className} onError={() => setFailed(true)} />;
}
