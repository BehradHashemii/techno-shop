import React, { useRef } from "react";
import styles from "./LaptopSection.module.css";
import { Link } from "react-router-dom";
import { 
  FiChevronLeft, 
  FiChevronRight, 
  FiShoppingCart, 
  FiStar, 
  FiCheckCircle, 
  FiArrowLeft,
  FiEye
} from "react-icons/fi";

const LAPTOPS_DATA = [
  {
    id: "macbook-air-m3",
    title: "مک‌بوک ایر ۱۵.۳ اینچ M3 مدل ۲۰۲۴",
    brand: "اپل Apple",
    rating: "۴.۹",
    discountBadge: null,
    stockStatus: "موجود",
    tagBadge: "بسیار سبک",
    specs: "رم 16GB / حافظه 512GB SSD / باتری ۱۸ ساعته",
    guarantee: "گارانتی بین‌المللی با مهلت تست تکنو",
    oldPrice: null,
    price: "۷۸,۰۰۰,۰۰۰",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80",
    path: "/product/macbook-air-m3",
  },
  {
    id: "rog-zephyrus-g16",
    title: "ایسوس ROG Zephyrus G16 OLED",
    brand: "ایسوس ASUS",
    rating: "۴.۹",
    discountBadge: null,
    stockStatus: "موجود",
    tagBadge: "RTX 4070",
    specs: "Core Ultra 9 / RTX 4070 / 32GB RAM",
    guarantee: "گارانتی ۲ ساله یکپارچه سازگار",
    oldPrice: null,
    price: "۱۱۵,۰۰۰,۰۰۰",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop&q=80",
    path: "/product/rog-zephyrus-g16",
  },
  {
    id: "lenovo-legion-pro-5",
    title: "لنوو Legion Pro 5 مهندسی و بازی",
    brand: "لنوو Lenovo",
    rating: "۴.۷",
    discountBadge: null,
    stockStatus: "موجود",
    tagBadge: null,
    specs: "Ryzen 7 7745HX / 16GB RAM / 1TB SSD",
    guarantee: "گارانتی ۱۸ ماهه امرتات",
    oldPrice: null,
    price: "۷۲,۰۰۰,۰۰۰",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=80",
    path: "/product/lenovo-legion-pro-5",
  },
  {
    id: "macbook-pro-16-m3-pro",
    title: "مک‌بوک پرو ۱۶ اینچ M3 Pro فضایی",
    brand: "اپل Apple",
    rating: "۵.۰",
    discountBadge: null,
    stockStatus: "موجود",
    tagBadge: "Space Black",
    specs: "رم 18GB / حافظه 512GB SSD / رندرینگ سنگین",
    guarantee: "ضمانت اصالت سخت‌افزار تکنو",
    oldPrice: null,
    price: "۱۲۸,۰۰۰,۰۰۰",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80",
    path: "/product/macbook-pro-16-m3",
  },
];

export default function LaptopSection() {
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
            <div className={styles.categoryBadge}>ابزارهای پردازش مهندسی و گیمینگ</div>
            <h2 className={styles.title}>لپ‌تاپ‌های مهندسی، برنامه‌نویسی و گیمینگ</h2>
            <p className={styles.subtitle}>
              قدرت پردازش نوین با برترین سیستم‌های خنک‌کننده و صفحات نمایش مات رتینا
            </p>
          </div>

          <div className={styles.headerLeft}>
            <Link to="/category/laptops" className={styles.viewAllBtn}>
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
          {LAPTOPS_DATA.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.cardHeader}>
                <div className={styles.tagsGroup}>
                  {product.discountBadge && (
                    <span className={styles.discountBadge}>
                      {product.discountBadge}
                    </span>
                  )}
                  {product.tagBadge && (
                    <span
                      className={`${styles.featureBadge} ${
                        product.tagBadge === "Space Black" ? styles.spaceBlackBadge : ""
                      } ${product.tagBadge === "RTX 4070" ? styles.gpuBadge : ""}`}
                    >
                      {product.tagBadge}
                    </span>
                  )}
                </div>
                {product.stockStatus && (
                  <span className={styles.stockBadge}>{product.stockStatus}</span>
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
                  <button type="button" className={styles.quickBuyBtn}>
                    <FiShoppingCart size={16} />
                    <span>خرید سریع</span>
                  </button>

                  <Link
                    to={product.path}
                    className={styles.detailsBtn}
                    title="مشاهده جزئیات محصول"
                    aria-label="مشاهده جزئیات محصول"
                  >
                    <FiEye size={17} />
                    <span>جزئیات</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}