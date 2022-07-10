export const sound_formats = [
  {
    name: "MP3",
    description:
      "MP3 is probably the best known and most widely used audio format in the world. It became the standard for music files on the Internet more than 20 years ago and has been freely available since 2017.",
    path: "/media/sound/sound.mp3",
    format: "mp3",
    size: "415 KB",
    pro: ["widely used", "Widely supported format", "high compression"],
    contra: ["audible loss of quality"],
  },
  {
    name: "WAV",
    description:
      "This audio format is considered the successor of the MP3 format. With the AAC format, the developers have managed to reduce the memory size even further while maintaining the sound quality as best as possible.",
    path: "/media/sound/sound.wav",
    format: "wav",
    size: "3 MB",
    pro: ["widely supported", "great quality", "amazing to edit"],
    contra: ["big size"],
  },
  {
    name: "OGG",
    description:
      "Ogg files are actually a container format. It can contain compressed audio as well as video and text data. In addition, Ogg files can be used well as an online stream.",
    path: "/media/sound/sound.ogg",
    format: "ogg",
    size: "180 KB",
    pro: ["Small size", "okay quality"],
    contra: ["not widely supported", "needs to be converted for editing"],
  },
];
