import React from "react";
import "./Footer.css";
import { GrAmazon } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="ContentSection relative left-0 bottom-0 w-full bg-slate-600 flex flex-col grow items-center">
      <a
        href="/"
        className="text-white Turnback text-sm font-bold w-full flex justify-center p-4 hover:bg-slate-400 cursor-pointer"
      >
        Başa Dön
      </a>
      <div className="İntroducts flex justify-center pt-10 pb-10 px-20  text-white leading-6 gap-28 w-full">
        <div className="one flex flex-col">
          <h1 className="font-bold">Hakkımızda</h1>
          <a href="/">Kariyer</a>
          <a href="/">İletişim</a>
          <a href="/">Bilgi Toplumu Hizmetleri</a>
          <a href="/">Amazon Science</a>
        </div>
        <div className="two flex flex-col">
          <h1 className="font-bold">Bizimle Para Kazanın</h1>
          <a href="/">Markanızı Koruyun ve Oluşturun</a>
          <a href="/">Amazon'da Satış Yapın</a>
          <a href="/">Ürünlerinizin Reklamını Yapın</a>
        </div>
        <div className="three flex flex-col">
          <h1 className="font-bold">Amazon Ödeme Araçları</h1>
          <a href="/">Kredi Kartı</a>
          <a href="/">Taksitli Ödeme</a>
        </div>
        <div className="four flex flex-col">
          <h1 className="font-bold">Size Yardımcı Olalım</h1>
          <a href="/">COVID-19 ve Amazon</a>
          <a href="/">Kargoları Takip Edin veya <br /> Siparişleri Görüntüleyin</a>
          <a href="/">Teslimat Ücretleri ve Politikaları</a>
          <a href="/">İadeler</a>
          <a href="/">Geri Dönüşüm</a>
          <a href="/">Amazon Mobil Uygulaması</a>
          <a href="/">Müşteri Hizmetleri</a>
          <a href="/">Erişilebilirlik</a>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 py-6 w-full">
        <div>
          <a href="/"><GrAmazon className="w-16 h-16 text-white" /></a>
        </div>
        <div className="CountrySection flex flex-col items-center gap-1">
          <ul className="flex text-white gap-2 text-xs">
            <li>
              <a href="/">Avustralya</a>
            </li>
            <li>
              <a href="/">Brezilya</a>
            </li>
            <li>
              <a href="/">Kanada</a>
            </li>
            <li>
              <a href="/">Çin</a>
            </li>
            <li>
              <a href="/">Fransa</a>
            </li>
            <li>
              <a href="/">Almanya</a>
            </li>
            <li>
              <a href="/">Hindistan</a>
            </li>
            <li>
              <a href="/">İtalya</a>
            </li>
            <li>
              <a href="/">Japonya</a>
            </li>
            <li>
              <a href="/">Meksika</a>
            </li>
            <li>
              <a href="/">Hollanda</a>
            </li>
            <li>
              <a href="/">İspanya</a>
            </li>
            <li>
              <a href="/">Birleşik Arap Emirlikleri</a>
            </li>
            <li>
              <a href="/">Birleşik Krallık</a>
            </li>
            <li>
              <a href="/">ABD</a>
            </li>
          </ul>
          <ul className="text-white text-xs">
            <li>
              <a href="/">Singapur</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="Services-Section flex text-xs px-28 items-start py-8 gap-14 w-full text-white">
        <div className="px-2">
          <a href="/">
            Amazon Web Services <br />{" "}
            <span>Ölçeklenebilir Bulut Bilgi İşlem Hizmetleri</span>
          </a>
        </div>
        <div className="px-2">
          <a href="/">
            East Dane <br /> <span>Tasarımcı Erkek Moda Ürünleri</span>
          </a>
        </div>
        <div className="px-2">
          <a href="/">
            Shopbop <br /> <span>Tasarım Ürünler Moda Markalar</span>
          </a>
        </div>
        <div className="px-2">
          <a href="/">
            Book Depository <br />{" "}
            <span>Dünya Genelinde Ücretsiz Kargo Kapsamında Kitaplar</span>
          </a>
        </div>
      </div>

      <div className="Contact-Section flex flex-col text-xs text-white py-4 w-full items-center">
        <div>
          <ul className="flex gap-8">
            <li>
              <a href="/">Kullanım ve Satış Koşulları</a>
            </li>
            <li>
              <a href="/">Aydınlatma Bildirimi</a>
            </li>
            <li>
              <a href="/">Çerezler Hakkında</a>
            </li>
            <li>
              <a href="/">İlgi Alanına Dayalı Tanıtımlar</a>
            </li>
            <li>
              <a href="/">İşlem Rehberi</a>
            </li>
          </ul>
        </div>
        <div>
        © 1996-2023, Amazon.com, Inc. veya bağlı kuruluşları
        </div>
      </div>
    </div>
  );
};

export default Footer;
