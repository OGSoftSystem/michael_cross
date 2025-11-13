import { baseUrl } from "@/env";

export async function getNews() {
  try {
    const res = await fetch(`${baseUrl}/api/news`, {
      cache: "force-cache",
      next: {
        tags: ["news"],
      },
    });

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
    const res = await fetch(`${baseUrl}/api/news/${slug}`);

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
export async function getLeader(name: string) {
  try {
    const res = await fetch(`${baseUrl}/api/leadership/${name}`);

    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();

    return data ?? null;
  } catch (error) {
    console.log(error);

    throw error;
  }
}
export async function getLeaders() {
  try {
    const res = await fetch(`${baseUrl}/api/leadership`);

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
