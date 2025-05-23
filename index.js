<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Toko Online Sederhana</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      background: #f8f8f8;
    }
    header {
      background-color: #4CAF50;
      color: white;
      padding: 15px;
      text-align: center;
    }
    .container {
      padding: 20px;
    }
    .product {
      background: white;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 20px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .product img {
      max-width: 100%;
      border-radius: 5px;
    }
    .product h2 {
      font-size: 1.5em;
    }
    .product button {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 10px 20px;
      margin-top: 10px;
      cursor: pointer;
    }
    .payment, .contact, .testimoni {
      background: #ffffff;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      margin-bottom: 20px;
    }
    .testimoni a {
      color: #4CAF50;
      text-decoration: none;
    }
    .testimoni a:hover {
      text-decoration: underline;
    }
    .testimoni-images {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 15px;
    }
    .testimoni-images img {
      width: 100%;
      max-width: 300px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 15px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Toko SC FOURBOTZV2</h1>
  </header>

  <div class="container">
    <!-- Produk -->
    <div class="product">
      <img src="https://via.placeholder.com/300x200" alt="Produk OWNER SC FOURBOTZV2" />
      <h2>OWNSC</h2>
      <p>Jamin balmod, bisa open reseller juga! Harga: Rp50.000</p>
      <button onclick="alert('Silakan pilih metode pembayaran di bawah.')">Beli Sekarang</button>
    </div>

    <div class="product">
      <img src="https://via.placeholder.com/300x200" alt="Produk SC FOURBOTZV2" />
      <h2>SC FOURBOTZV2</h2>
      <p>Minat SC-nya aja? Free update sampai versi 3! Harga: Rp25.000</p>
      <button onclick="alert('Silakan pilih metode pembayaran di bawah.')">Beli Sekarang</button>
    </div>

    <div class="product">
      <img src="https://via.placeholder.com/300x200" alt="Produk RESELLER SC FOURBOTZV2" />
      <h2>RESELLER SC</h2>
      <p>Jadi reseller dan jual SC dengan free update selamanya. Harga: Rp35.000</p>
      <button onclick="alert('Silakan pilih metode pembayaran di bawah.')">Beli Sekarang</button>
    </div>

    <!-- Menu SC -->
    <div class="product">
      <h2>Menu dalam SC</h2>
      <ul>
        <li>Menu Unggulan: Lacak KTP, Lacak IP</li>
        <li>Menu JPM</li>
        <li>Menu Fun dan masih banyak lagi!</li>
      </ul>
      <p>Kalau mau tanya-tanya langsung aja klik WA di bawah ya!</p>
    </div>

    <!-- Metode Pembayaran -->
    <div class="payment">
      <h2>Pilih Metode Pembayaran</h2>
      <ul>
        <li>Transfer Bank: BCA, BRI, Mandiri, QRIS</li>
        <li>e-Wallet: OVO, GoPay, Dana</li>
        <li>COD: Khusus daerah dekat rumah saya saja</li>
      </ul>
    </div>

    <!-- Testimoni -->
    <div class="testimoni">
      <h2>Testimoni Pembeli</h2>
      <p>
        <a href="https://whatsapp.com/channel/0029VbAdfP6AjPXIAxyzRi0o" target="_blank" rel="noopener noreferrer">
          Lihat Testimoni di WhatsApp Channel
        </a>
      </p>
      <div class="testimoni-images">
        <img src="https://files.catbox.moe/zihg79.jpg" alt="Testimoni 1" />
        <img src="https://files.catbox.moe/k2nqwm.jpg" alt="Testimoni 2" />
      </div>
    </div>

    <!-- Kontak -->
    <div class="contact">
      <h2>Hubungi Kami</h2>
      <p>WhatsApp 1: <a href="https://wa.me/6283169964415" target="_blank">+62 831-6996-4415</a></p>
      <p>WhatsApp 2: <a href="https://wa.me/6285147729760" target="_blank">+62 851-4772-9760</a></p>
      <p>Email: <a href="mailto:kikoyanto6@gmail.com">kikoyanto6@gmail.com</a></p>
    </div>
  </div>

  <footer>
    &copy; 2025 Toko SC FOURBOTZV2. Buka 24 jam, termasuk hari libur!
  </footer>
</body>
</html>
