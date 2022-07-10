export const image_formats = [
  {
    name: "JPEG",
    description:
      "JPEG is the most common image format used by digital cameras, it is the most common format for storing and transmitting photographic images on the World Wide Web.",
    path: "/media/images/high-detail/high-detail.jpeg",
    format: "jpeg / jpg",
    size: "654 KB",
    pro: ["Small file size", "Widely supported format", "Good color range"],
    contra: [
      "Lossy compression",
      "Not great for text, simple graphics, or illustrations",
    ],
  },
  {
    name: "PNG",
    description:
      "PNG was created to improve GIF image-file format. Removing patent license issues at that time; and removing 256 colors limitation.",
    path: "/media/images/high-detail/high-detail.png",
    format: "png",
    size: "2.65MB",
    pro: ["Widely accepted format", "Lossless", "Transparency support"],
    contra: ["Lossless only", "Poor compression for photographic images"],
  },
  {
    name: "WEBP",
    description:
      "WebP is an image file format developed by Google, and supposed to be a new open standard for lossily compressed true color graphics. It's a direct competitor to JPEG.",
    path: "/media/images/high-detail/high-detail.webp",
    format: "webp",
    size: "537 KB",
    pro: ["Small file size", "Still great image quality"],
    contra: ["Limited to 8-bit"],
  },
];
