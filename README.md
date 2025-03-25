# Modern Landing Page

Bu proje, vanilla JavaScript kullanılarak oluşturulmuş modern ve duyarlı bir landing page'dir.

## Özellikler

- Tam duyarlı tasarım
- Modern UI/UX
- Smooth scroll navigasyon
- Mobil dostu hamburger menü
- İletişim formu
- Scroll animasyonları
- Font Awesome ikonları

## Kurulum

1. Projeyi klonlayın:
```bash
git clone [repo-url]
```

2. Proje dizinine gidin:
```bash
cd landing-page
```

3. Bir web sunucusu kullanarak projeyi çalıştırın (örneğin Python'un built-in sunucusu):
```bash
python -m http.server 8000
```

4. Tarayıcınızda `http://localhost:8000` adresini açın

## DigitalOcean Deployment

1. DigitalOcean hesabınızda yeni bir Droplet oluşturun
2. Nginx'i kurun:
```bash
sudo apt update
sudo apt install nginx
```

3. Projeyi `/var/www/html` dizinine kopyalayın:
```bash
sudo cp -r * /var/www/html/
```

4. Nginx'i yeniden başlatın:
```bash
sudo systemctl restart nginx
```

## Lisans

MIT

## İletişim

[İletişim bilgileriniz] 