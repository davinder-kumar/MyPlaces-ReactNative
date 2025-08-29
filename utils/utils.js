export function getMapPreview(lat, lon) {
  const API_KEY = process.env.EXPO_PUBLIC_MAPS_GOOGLE_KEY;
  const loc = `https://maps.googleapis.com/maps/api/staticmap?center=${lat}, ${lon}&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794
&key=${API_KEY}`;0
  return loc;
}
