import NextImage, { ImageProps } from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Image({ src, ...rest }) {
  const normalizedSrc =
    typeof src === "string" && src.startsWith("/") ? src.slice(1) : src;

  return <NextImage src={`${basePath}/${normalizedSrc}`} {...rest} />;
}
