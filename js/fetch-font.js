// dinamik font yükleme
// https://pdf-editor.vercel.app/

export function fetchFont(name, url) {
    fetch(url)
        .then((r) => r.arrayBuffer())
        .then((fontBuffer) => {
            const fontFace = new FontFace(name, fontBuffer);
            fontFace.display = 'MyFont';
            fontFace.load().then(() => document.fonts.add(fontFace));
        });
}