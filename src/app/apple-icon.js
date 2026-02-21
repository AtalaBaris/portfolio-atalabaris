/** @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons */

import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
          background: "#6366f1",
          color: "white",
          fontSize: 72,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        BA
      </div>
    ),
    { ...size }
  );
}
