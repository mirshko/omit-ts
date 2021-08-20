export default function omit<
  T extends object,
  K extends Extract<keyof T, string>
>(obj: T, keys: K[]): Omit<T, K> {
  let ret: any = {};
  const exclude: Set<string> = new Set(keys);

  for (let key in obj) {
    if (!exclude.has(key)) {
      ret[key] = obj[key];
    }
  }

  return ret;
}
