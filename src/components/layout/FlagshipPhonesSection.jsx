import React, { useRef } from "react";
import styles from "./FlagshipPhonesSection.module.css";
import { Link } from "react-router-dom";
import {
  FiChevronLeft,
  FiChevronRight,
  FiShoppingCart,
  FiStar,
  FiCheckCircle,
  FiArrowLeft,
} from "react-icons/fi";

const FLAGSHIP_PHONES = [
  {
    id: "s24-ultra",
    title: "سامسونگ گلکسی S24 Ultra 5G",
    brand: "سامسونگ",
    rating: "۴.۹",
    discountBadge: "۵٪-",
    stockStatus: "موجود",
    tagBadge: null,
    specs: "رم ۱۲ گیگابایت / حافظه ۲۵۶ گیگابایت",
    guarantee: "گارانتی ۱۸ ماهه شرکتی",
    oldPrice: "۷۲,۱۰۰,۰۰۰",
    price: "۶۸,۵۰۰,۰۰۰",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop&q=80",
    path: "/product/s24-ultra",
  },
  {
    id: "iphone-13-ch",
    title: "اپل آیفون ۱۳ نرمال CH دو سیم‌کارت",
    brand: "اپل",
    rating: "۴.۸",
    discountBadge: null,
    stockStatus: "موجود",
    tagBadge: null,
    specs: "حافظه ۲۵۶ گیگابایت / پارت‌نامبر CH",
    guarantee: "رجیستر شده با کد فعال‌سازی",
    oldPrice: null,
    price: "۴۹,۸۰۰,۰۰۰",
    image:
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=500&auto=format&fit=crop&q=80",
    path: "/product/iphone-13",
  },
  {
    id: "xiaomi-14-ultra",
    title: "شیائومی 14 Ultra عکاسی تخصصی",
    brand: "شیائومی",
    rating: "۴.۹",
    discountBadge: null,
    stockStatus: "موجود",
    tagBadge: "دوربین لایکا",
    specs: "رم ۱۶ گیگابایت / حافظه ۵۱۲ گیگابایت",
    guarantee: "گارانتی ۲۴ ماهه تکنو سرویس",
    oldPrice: null,
    price: "۶۲,۰۰۰,۰۰۰",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=80",
    path: "/product/xiaomi-14-ultra",
  },
  {
    id: "pixel-8-pro",
    title: "گوگل پیکسل 8 Pro هوش مصنوعی",
    brand: "گوگل",
    rating: "۴.۷",
    discountBadge: null,
    stockStatus: "موجود",
    tagBadge: null,
    specs: "رم ۱۲ گیگابایت / تراشه Tensor G3",
    guarantee: "هفت سال پشتیبانی نرم‌افزاری",
    oldPrice: null,
    price: "۵۴,۰۰۰,۰۰۰",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop&q=80",
    path: "/product/pixel-8-pro",
  },
  {
    id: "z-fold-5",
    title: "سامسونگ Z Fold 5 منعطف ۵۱۲GB",
    brand: "سامسونگ",
    rating: "۴.۸",
    discountBadge: null,
    stockStatus: "موجود",
    tagBadge: "تاشو",
    specs: "نمایشگر منعطف / مولتی‌تسکینگ حرفه‌ای",
    guarantee: "بیمه شکستگی نمایشگر ۱ ساله",
    oldPrice: null,
    price: "۷۹,۵۰۰,۰۰۰",
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&auto=format&fit=crop&q=80",
    path: "/product/z-fold-5",
  },
];

export default function FlagshipPhonesSection() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerRight}>
            <div className={styles.categoryBadge}>
              محبوب‌ترین گوشی‌های بازار ایران
            </div>
            <h2 className={styles.title}>گوشی‌های هوشمند پرچمدار و پرفروش</h2>
            <p className={styles.subtitle}>
              بهترین‌های دنیای موبایل با رجیستری رسمی و گارانتی معتبر شرکتی
            </p>
          </div>

          <div className={styles.headerLeft}>
            <Link to="/category/mobile" className={styles.viewAllBtn}>
              <span>مشاهده همه</span>
              <FiArrowLeft size={16} />
            </Link>

            <div className={styles.navControls}>
              <button
                type="button"
                className={styles.navBtn}
                onClick={() => handleScroll("right")}
                aria-label="اسکرول به راست"
              >
                <FiChevronRight size={18} />
              </button>
              <button
                type="button"
                className={styles.navBtn}
                onClick={() => handleScroll("left")}
                aria-label="اسکرول به چپ"
              >
                <FiChevronLeft size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.productsTrack} ref={scrollContainerRef}>
          {FLAGSHIP_PHONES.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.cardHeader}>
                <div className={styles.tagsGroup}>
                  {product.discountBadge && (
                    <span className={styles.discountBadge}>
                      {product.discountBadge}
                    </span>
                  )}
                  {product.tagBadge && (
                    <span className={styles.featureBadge}>
                      {product.tagBadge}
                    </span>
                  )}
                </div>
                {product.stockStatus && (
                  <span className={styles.stockBadge}>
                    {product.stockStatus}
                  </span>
                )}
              </div>

              <Link to={product.path} className={styles.imageBox}>
                <img
                  src={product.image}
                  alt={product.title}
                  className={styles.productImage}
                  loading="lazy"
                />
              </Link>

              <div className={styles.cardBody}>
                <div className={styles.metaRow}>
                  <span className={styles.brandName}>{product.brand}</span>
                  <div className={styles.ratingBox}>
                    <FiStar className={styles.starIcon} size={14} />
                    <span>{product.rating}</span>
                  </div>
                </div>

                <Link to={product.path} className={styles.productTitle}>
                  {product.title}
                </Link>

                <p className={styles.specsText}>{product.specs}</p>

                <div className={styles.guaranteeText}>
                  <FiCheckCircle size={14} />
                  <span>{product.guarantee}</span>
                </div>

                <div className={styles.priceContainer}>
                  {product.oldPrice ? (
                    <span className={styles.oldPrice}>{product.oldPrice}</span>
                  ) : (
                    <span className={styles.priceSpacer} />
                  )}
                  <div className={styles.currentPriceRow}>
                    <span className={styles.priceValue}>{product.price}</span>
                    <span className={styles.currency}>تومان</span>
                  </div>
                </div>

                <div className={styles.actionsGroup}>
                  <Link
                    to={product.path}
                    className={styles.detailsBtn}
                    title="مشاهده جزئیات محصول"
                    aria-label="مشاهده جزئیات محصول"
                  >
                    <span>جزئیات</span>
                  </Link>
                  <button type="button" className={styles.quickBuyBtn}>
                    <FiShoppingCart size={16} />
                    <span>خرید سریع</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
