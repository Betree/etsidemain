export const youtubeRegex =
  /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i

export const youtubeId = url => {
  const res = youtubeRegex.exec(url)
  return res ? res[1] : null
}

export const youtubeThumbnail = (youtubeId, quality="sddefault") => 
  `https://img.youtube.com/vi/${youtubeId}/${quality}.jpg`
