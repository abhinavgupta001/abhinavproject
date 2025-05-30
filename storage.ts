import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getSavedWallpapers() {
  const allKeys = await AsyncStorage.getAllKeys();
  const values = await AsyncStorage.multiGet(allKeys);
  return values.map(item => {
    return {
      id: item[0],
      url: item[1]!,
    };
  });
}

export async function saveWallpaper(url: string) {
  const id = uuid.v4().toString();
  await AsyncStorage.setItem(id, url);
  return id;
}

export async function isWallpaperSaved(url: string) {
  const allKeys = await AsyncStorage.getAllKeys();
  const values = await AsyncStorage.multiGet(allKeys);
  return values.some(item => item[1] === url);
}

export async function deleteAllWallpapers() {
  await AsyncStorage.clear();
}
export async function deleteWallpaper(url: string) {
  const allKeys = await AsyncStorage.getAllKeys();
  const values = await AsyncStorage.multiGet(allKeys);
  const id = values.find(item => item[1] === url)?.[0];
  if (id) {
    await AsyncStorage.removeItem(id);
  } else {
    throw new Error('Wallpaper not found');
  }
}
