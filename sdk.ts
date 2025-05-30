export const MOBILE_WALLPAPER_SUBREDDIT =
  'https://www.reddit.com/r/MobileWallpaper';
export const REDDIT_IMAGES_LIMITS = 5;
export const REDDIT_IMAGE_ENDPOINT = 'https://i.redd.it/';
export const WALLHAVEN_ENDPOINT = 'https://wallhaven.cc/api/v1';
export const WALLPAPER_HAVEN_KEY = 'dGcdvUsaOEq4LOIXDYpkAYOsNl14mnYO';
import {IRedditData, IWallHavenSearchData} from './types';

export type IEntity = 'Trending' | 'Top' | 'Discover';

export type IGetWallpaperResponse = {
  data: {
    imageIds: Array<string>;
    after: string;
  };
  ok: boolean;
};

export async function getWallpaper(entity: IEntity, after: string = '') {
  return new Promise<IGetWallpaperResponse>(async (resolve, reject) => {
    if (entity === 'Trending') {
      const req = await getTrending(after);
      resolve({
        data: req,
        ok: true,
      });
    } else if (entity === 'Top') {
      const req = await getTop(after);
      resolve({
        data: req,
        ok: true,
      });
    } else if (entity === 'Discover') {
      const req = await getDiscover(after);
      resolve({
        data: req,
        ok: true,
      });
    } else {
      reject({
        data: {
          imageIds: [],
          after: '',
        },
        ok: false,
      });
    }
  });
}

type ISearchResponse = {
  error: any;
  ok: boolean;
  data: {
    urls: Array<string | undefined>;
    current_page: number;
    pages: number;
  };
};

export async function searchWallpaper(
  query: string,
  after = 1,
  sorting: 'random' | 'views' = 'views',
) {
  return new Promise<ISearchResponse>(async (resolve, reject) => {
    try {
      const req = await wallpaperSearch(query, after, sorting);
      resolve({
        error: null,
        ok: true,
        data: req,
      });
    } catch (error) {
      reject({
        error,
        ok: false,
        data: {
          urls: [],
          current_page: 0,
          pages: 0,
        },
      });
    }
  });
}

//#region Reddit
async function getTrending(after?: string | null) {
  return await _getImages('week', after);
}

async function getTop(after?: string | null) {
  return await _getImages('year', after);
}

async function getDiscover(after?: string | null) {
  return await _getImages('day', after);
}

async function _getImages(
  type: 'week' | 'year' | 'day',
  after_id?: string | null,
) {
  let url = `${MOBILE_WALLPAPER_SUBREDDIT}/top.json?sort=top&t=${type}&count=${REDDIT_IMAGES_LIMITS}`;
  if (after_id) {
    url += `&after=${after_id}`;
  }
  console.log(url);
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Aurora/1.0',
    },
  });
  const data = (await res.json()) as IRedditData;
  let imageIds: Array<string> = [];

  data.data.children.forEach(async child => {
    // Gallery Detected...
    if (child.data.is_gallery) {
      let ids = child.data.gallery_data!.items.map(item => item.media_id);
      ids.forEach(async id => {
        if (!child.data.media_metadata) {
          return;
        }

        const imageData = child.data.media_metadata[id];

        if (imageData.s.y > imageData.s.x) {
          const extension = getExtensionFromMimeType(imageData.m);
          imageIds.push(`https://i.redd.it/${id}.${extension}`);
          // imageIds.push(child.data.thumbnail);
        }
      });
    } else {
      const maxRes = child.data.preview?.images[0].source;
      if (maxRes?.height! > maxRes?.width!) {
        imageIds.push(child.data.url);
      }
    }
  });

  return {
    imageIds,
    after: data.data.after,
  };
}

function getExtensionFromMimeType(mimeType: string): string {
  const mimeMap: Record<string, string> = {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif',
    'image/bmp': 'bmp',
    'image/webp': 'webp',
    'image/jpg': 'jpg',
    // Add more mime types as needed
  };

  const defaultExtension: string = 'unknown';

  // Use defaultExtension if the mime type is not in the map
  const r = mimeMap[mimeType] || defaultExtension;
  return r;
}

//#endregion

//#region Wallhaven

async function wallpaperSearch(
  query: string,
  page: number | string | null = 1,
  sorting: string | null = 'views',
) {
  const req = await fetch(
    WALLHAVEN_ENDPOINT +
      `/search?ratios=portrait&page=${page}&q=${query}&sorting=${sorting}&apikey=${WALLPAPER_HAVEN_KEY}`,
  );
  const data = (await req.json()) as IWallHavenSearchData;
  const urls = data.data.map(d => d.path);
  return {
    urls,
    current_page: data.meta.current_page,
    pages: data.meta.last_page,
  };
}

//#endregion
