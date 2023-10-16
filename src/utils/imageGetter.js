function getImageUrl(name, ext) {
    return new URL(`../assets/icon/${name}.${ext}`, import.meta.url).href;
}

export default getImageUrl;