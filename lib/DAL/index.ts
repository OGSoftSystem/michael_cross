import { baseUrl } from "@/env";

export async function getNews() {
  try {
    const res = await fetch(`${baseUrl}/api/news`);

    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();

    return data ?? [];
  } catch (error) {
    console.log(error);

    return [];
  }
}
export async function getNewsBySlug(slug: string) {
  try {
    const res = await fetch(`${baseUrl}/api/news/${slug}?slug=${slug}`);

    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();

    return data ?? [];
  } catch (error) {
    console.log(error);

    return [];
  }
}
