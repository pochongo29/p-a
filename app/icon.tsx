import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#080706",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontFamily: "serif",
            fontSize: 20,
            color: "#C8A24E",
            fontWeight: 400,
            lineHeight: 1,
          }}
        >
          P
        </div>
      </div>
    ),
    { ...size }
  );
}
