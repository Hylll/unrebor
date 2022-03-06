export function useResolveAssetsPath(assetName: string) {
  return new URL(`../assets/images/${assetName}`, import.meta.url).href;
}

export default {
  useResolveAssetsPath
}