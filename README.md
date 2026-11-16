# Faruk Buğra Koca — Kişisel Web Sitesi

CV'den üretilmiş, statik (framework'süz) tek sayfalık portföy sitesi. TR/EN dil seçici ve açık/koyu tema içerir.

## Yapı

```
index.html
assets/
  css/style.css
  js/main.js
  img/favicon.svg
```

## Yerelde görüntüleme

`index.html` dosyasını doğrudan bir tarayıcıda açmak yeterli. İsteğe bağlı olarak basit bir yerel sunucu ile de çalıştırılabilir:

```bash
python -m http.server 8080
```

## GitHub Pages ile yayınlama

1. GitHub'da yeni, boş bir repo oluştur (README/license eklemeden): `bugrakoca-website` gibi bir isim öner.
2. Bu klasörü o repoya push et:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: personal website"
   git branch -M main
   git remote add origin https://github.com/<KULLANICI_ADIN>/bugrakoca-website.git
   git push -u origin main
   ```
3. GitHub'da repo sayfasında **Settings → Pages** yoluna git.
4. **Build and deployment → Source** kısmında **Deploy from a branch** seç.
5. **Branch** olarak `main` ve klasör olarak `/ (root)` seç, **Save** de.
6. Birkaç dakika içinde site şu adreste yayınlanır:
   `https://<KULLANICI_ADIN>.github.io/bugrakoca-website/`

Özel domain: `bugrakoca.com` (Hostinger DNS: apex için 4 A kaydı 185.199.108-111.153, `www` CNAME → `bugrakoca-ux.github.io`; repo kökündeki `CNAME` dosyası silinmemeli).

## İçerik güncelleme

- Metinler `assets/js/main.js` içindeki `translations` objesinde tutulur (her anahtarın `en` ve `tr` karşılığı vardır).
- Bölüm sırası ve HTML yapısı `index.html` içindedir.
- Renk/tema değişkenleri `assets/css/style.css` dosyasının en üstünde `:root` içinde tanımlıdır.

**Önemli — `style.css`/`main.js` içeriğini her değiştirdiğinde:** GitHub Pages bu dosyaları 10 dakika tarayıcı önbelleğinde tutuyor (`Cache-Control: max-age=600`). Değişikliklerin ziyaretçilere hemen yansıması için `index.html` içindeki `?v=6` sürüm numarasını bir artır (`?v=7`, `?v=8`, ...). Görselleri değiştirirsen dosya adını da değiştir (ya da aynı adla yükleyip birkaç dakika bekle).
