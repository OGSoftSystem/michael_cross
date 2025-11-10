import { baseUrl } from "@/env";

export async function getNews() {
  const res = await fetch(`${baseUrl}/api/news`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();

  return data;
}
export async function getNewsBySlug(slug: string) {
  const res = await fetch(`${baseUrl}/api/news/${slug}?slug=${slug}`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();

  return data;
}
