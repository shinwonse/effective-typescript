function range(start: number, limit: number) {
  const out = [];

  if (start === limit) {
    return out;
  }

  for (let i = start; i < limit; i += 1) {
    out.push(i);
  }
  return out;
}
