import { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";

import {
  FiSearch,
  FiSliders,
  FiHeart,
  FiShoppingBag,
  FiMenu,
  FiUser,
  FiChevronLeft,
  FiX,
  FiChevronDown,
} from "react-icons/fi";
import {
  HiOutlineHome,
  HiHome,
  HiOutlineSquares2X2,
  HiSquares2X2,
} from "react-icons/hi2";
import { MdDevices, MdOutlineDevices } from "react-icons/md";
import { IoMdFlame } from "react-icons/io";
import { PiSealCheck } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";

const MEGA_MENU_CATEGORIES = [
  {
    id: "mobile",
    title: "موبایل و تبلت",
    columns: [
      {
        title: "برندهای گوشی",
        items: [
          { name: "گوشی اپل (آیفون)", path: "/category/mobile?brand=apple" },
          { name: "گوشی سامسونگ", path: "/category/mobile?brand=samsung" },
          { name: "گوشی شیائومی", path: "/category/mobile?brand=xiaomi" },
          { name: "گوشی پوکو", path: "/category/mobile?brand=poco" },
        ],
      },
      {
        title: "تبلت و کتاب‌خوان",
        items: [
          { name: "آیپد اپل", path: "/category/tablet?brand=apple" },
          { name: "تبلت سامسونگ", path: "/category/tablet?brand=samsung" },
          {
            name: "تبلت مایکروسافت Surface",
            path: "/category/tablet?brand=microsoft",
          },
          { name: "قلم لمسی و کیبورد", path: "/category/tablet-accessories" },
        ],
      },
      {
        title: "لوازم جانبی موبایل",
        items: [
          { name: "قاب و کاور گوشی", path: "/category/phone-cases" },
          { name: "گلس و محافظ صفحه", path: "/category/screen-protector" },
          { name: "پاوربانک و شارژر همراه", path: "/category/powerbank" },
          { name: "کابل و آداپتور شارژ", path: "/category/chargers" },
        ],
      },
    ],
  },
  {
    id: "laptops",
    title: "لپ‌تاپ و اولترابوک",
    columns: [
      {
        title: "برندهای لپ‌تاپ",
        items: [
          { name: "مک‌بوک اپل", path: "/category/laptops?brand=apple" },
          { name: "لپ‌تاپ ایسوس", path: "/category/laptops?brand=asus" },
          { name: "لپ‌تاپ لنوو", path: "/category/laptops?brand=lenovo" },
          { name: "لپ‌تاپ اچ‌پی و دل", path: "/category/laptops?brand=hp" },
        ],
      },
      {
        title: "کاربری لپ‌تاپ",
        items: [
          { name: "لپ‌تاپ‌های گیمینگ", path: "/category/laptops?type=gaming" },
          {
            name: "اولترابوک و مهندسی",
            path: "/category/laptops?type=ultrabook",
          },
          {
            name: "لپ‌تاپ‌های دانشجویی و اداری",
            path: "/category/laptops?type=office",
          },
        ],
      },
      {
        title: "لوازم جانبی لپ‌تاپ",
        items: [
          { name: "کیف، کاور و کوله‌پشتی", path: "/category/laptop-bags" },
          { name: "پایه خنک‌کننده (کول‌پد)", path: "/category/coolpads" },
          { name: "هاب، رم و حافظه SSD", path: "/category/laptop-storage" },
        ],
      },
    ],
  },
  {
    id: "smartwatch",
    title: "ساعت و گجت هوشمند",
    columns: [
      {
        title: "ساعت و مچ‌بند هوشمند",
        items: [
          {
            name: "اپل واچ (Apple Watch)",
            path: "/category/smartwatch?brand=apple",
          },
          {
            name: "سامسونگ گلکسی واچ",
            path: "/category/smartwatch?brand=samsung",
          },
          {
            name: "ساعت و مچ‌بند شیائومی",
            path: "/category/smartwatch?brand=xiaomi",
          },
        ],
      },
      {
        title: "گجت‌های پوشیدنی",
        items: [
          { name: "حلقه هوشمند", path: "/category/smart-ring" },
          { name: "عینک‌های واقعیت مجازی", path: "/category/vr" },
          {
            name: "بند ساعت و محافظ صفحه",
            path: "/category/watch-accessories",
          },
        ],
      },
    ],
  },
  {
    id: "audio",
    title: "هدفون و تجهیزات صوتی",
    columns: [
      {
        title: "هدفون و هندزفری",
        items: [
          { name: "ایرپاد اپل", path: "/category/audio?brand=apple" },
          {
            name: "هدفون بلوتوثی سونی و جبرا",
            path: "/category/audio?brand=sony",
          },
          { name: "هدفون‌های دور گوشی و گیمینگ", path: "/category/headphones" },
        ],
      },
      {
        title: "اسپیکر و ساندبار",
        items: [
          { name: "اسپیکر قابل حمل JBL", path: "/category/speakers?brand=jbl" },
          {
            name: "اسپیکر خانگی و پارتی باکس",
            path: "/category/party-speakers",
          },
          { name: "میکروفون تولید محتوا", path: "/category/microphones" },
        ],
      },
    ],
  },
  {
    id: "gaming",
    title: "کنسول و گیمینگ",
    columns: [
      {
        title: "کنسول‌های بازی",
        items: [
          { name: "پلی‌استیشن ۵ (PS5)", path: "/category/gaming?console=ps5" },
          {
            name: "ایکس‌باکس سری ایکس و اس",
            path: "/category/gaming?console=xbox",
          },
          { name: "نینتندو سوییچ", path: "/category/gaming?console=nintendo" },
        ],
      },
      {
        title: "تجهیزات تخصصی گیمینگ",
        items: [
          { name: "دسته و کنترلر بازی", path: "/category/controllers" },
          {
            name: "موس و کیبورد مکانیکال",
            path: "/category/gaming-accessories",
          },
          { name: "فرمان بازی و هدست گیمینگ", path: "/category/simulators" },
        ],
      },
    ],
  },
];

export default function Header() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeMenuCategory, setActiveMenuCategory] = useState(
    MEGA_MENU_CATEGORIES[0],
  );
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [expandedMobileCat, setExpandedMobileCat] = useState(null);
  const megaMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setIsMegaMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileDrawerOpen]);

  const toggleMobileSubCategory = (id) => {
    setExpandedMobileCat(expandedMobileCat === id ? null : id);
  };

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.topBarRight}>
            <Link to="/" className={styles.brand}>
              <div className={styles.brandText}>
                <span className={styles.brandTitle}>تکنو</span>
                <span className={styles.brandSubtitle}>TECHNO DIGITAL</span>
              </div>
            </Link>
          </div>

          <div className={styles.searchBox}>
            <button
              type="button"
              className={styles.searchIconBtn}
              aria-label="جستجو"
            >
              <FiSearch size={20} />
            </button>
            <input
              type="text"
              placeholder="جستجو میان هزاران کالا..."
              className={styles.searchInput}
            />
            <div className={styles.categoryDropdown}>
              <FiSliders size={16} />
              <span>همه دسته‌ها</span>
            </div>
          </div>

          <div className={styles.actions}>
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                `${styles.wishlistBtn} ${isActive ? styles.activeWishlist : ""}`
              }
              title="علاقه‌مندی‌ها"
            >
              <span className={styles.badge}>۲</span>
              <FiHeart size={22} />
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `${styles.cartBtn} ${isActive ? styles.activeCart : ""}`
              }
            >
              <span className={styles.cartCount}>۳ کالا</span>
              <span className={styles.cartText}>سبد خرید</span>
              <FiShoppingBag size={20} />
            </NavLink>

            <NavLink to="/profile" className={styles.userProfile}>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="علی پارسا"
                className={styles.userAvatar}
              />
              <div className={styles.userInfo}>
                <span className={styles.userName}>علی پارسا</span>
                <span className={styles.userRole}>حساب کاربری</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      <nav className={styles.navBar}>
        <div className={styles.container}>
          <div className={styles.navRight}>
            <div className={styles.megaMenuTriggerWrapper} ref={megaMenuRef}>
              <button
                className={`${styles.categoryMenuBtn} ${
                  isMegaMenuOpen ? styles.activeCategoryBtn : ""
                }`}
                type="button"
                onClick={() => setIsMegaMenuOpen((prev) => !prev)}
              >
                <FiMenu size={20} />
                <span>دسته‌بندی کالاها</span>
              </button>

              {isMegaMenuOpen && (
                <div className={styles.megaMenu}>
                  <div className={styles.megaSidebar}>
                    {MEGA_MENU_CATEGORIES.map((cat) => (
                      <div
                        key={cat.id}
                        className={`${styles.megaSidebarItem} ${
                          activeMenuCategory.id === cat.id
                            ? styles.activeSidebarItem
                            : ""
                        }`}
                        onMouseEnter={() => setActiveMenuCategory(cat)}
                        onClick={() => setActiveMenuCategory(cat)}
                      >
                        <span>{cat.title}</span>
                        <FiChevronLeft size={16} />
                      </div>
                    ))}
                  </div>

                  <div className={styles.megaContent}>
                    <div className={styles.megaColumnsContainer}>
                      {activeMenuCategory.columns.map((col, idx) => (
                        <div key={idx} className={styles.megaColumn}>
                          <h4 className={styles.megaColumnTitle}>
                            {col.title}
                          </h4>
                          <ul className={styles.megaColumnList}>
                            {col.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <Link
                                  to={item.path}
                                  className={styles.megaColumnLink}
                                  onClick={() => setIsMegaMenuOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className={styles.megaFooterLink}>
                      <Link
                        to={`/category/${activeMenuCategory.id}`}
                        onClick={() => setIsMegaMenuOpen(false)}
                      >
                        مشاهده تمام محصولات {activeMenuCategory.title}
                        <FiChevronLeft size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : ""
                  }
                >
                  خانه
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to="/category/mobile"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : ""
                  }
                >
                  موبایل و تبلت
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to="/category/laptops"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : ""
                  }
                >
                  لپ‌تاپ و اولترابوک
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to="/category/smartwatch"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : ""
                  }
                >
                  ساعت و گجت
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to="/category/audio"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : ""
                  }
                >
                  هدفون و صوتی
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to="/category/gaming"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : ""
                  }
                >
                  کنسول
                </NavLink>
              </li>
              <li className={`${styles.navItem} ${styles.dealItem}`}>
                <IoMdFlame size={17} />
                <NavLink
                  to="/promotions"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : ""
                  }
                >
                  شگفت‌انگیزها
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to="/bestsellers"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : ""
                  }
                >
                  پرفروش‌ترین‌ها
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : ""
                  }
                >
                  وبلاگ
                </NavLink>
              </li>
            </ul>
          </div>

          <div className={styles.navLeft}>
            <div className={styles.guaranteeBadge}>
              <PiSealCheck size={18} />
              <span>ضمانت اصالت و بازگشت ۷ روزه کالا</span>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`${styles.mobileDrawerOverlay} ${
          isMobileDrawerOpen ? styles.openOverlay : ""
        }`}
        onClick={() => setIsMobileDrawerOpen(false)}
      />

      <aside
        className={`${styles.mobileDrawer} ${
          isMobileDrawerOpen ? styles.openDrawer : ""
        }`}
      >
        <div className={styles.drawerHeader}>
          <div className={styles.brand}>
            <div className={styles.brandLogoBox}>
              <img src="/techno_gadget_store_logo.png" alt="logo" />
            </div>
            <span className={styles.brandTitle}>تکنو دیجیتال</span>
          </div>
          <button
            type="button"
            className={styles.closeDrawerBtn}
            onClick={() => setIsMobileDrawerOpen(false)}
          >
            <FiX size={24} />
          </button>
        </div>

        <div className={styles.drawerBody}>
          <NavLink
            to="/profile"
            className={styles.drawerUserProfile}
            onClick={() => setIsMobileDrawerOpen(false)}
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
              alt="علی پارسا"
              className={styles.userAvatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>علی پارسا</span>
              <span className={styles.userRole}>مشاهده حساب کاربری</span>
            </div>
          </NavLink>

          <div className={styles.drawerSectionTitle}>دسته‌بندی‌های کالا</div>
          <div className={styles.accordionContainer}>
            {MEGA_MENU_CATEGORIES.map((cat) => (
              <div key={cat.id} className={styles.accordionItem}>
                <button
                  type="button"
                  className={styles.accordionHeader}
                  onClick={() => toggleMobileSubCategory(cat.id)}
                >
                  <span>{cat.title}</span>
                  <FiChevronDown
                    size={18}
                    className={`${styles.accordionIcon} ${
                      expandedMobileCat === cat.id
                        ? styles.accordionIconRotate
                        : ""
                    }`}
                  />
                </button>

                {expandedMobileCat === cat.id && (
                  <div className={styles.accordionBody}>
                    <Link
                      to={`/category/${cat.id}`}
                      className={styles.accordionAllLink}
                      onClick={() => setIsMobileDrawerOpen(false)}
                    >
                      همه محصولات {cat.title}
                    </Link>
                    {cat.columns.map((col, idx) => (
                      <div key={idx} className={styles.accordionSubGroup}>
                        <div className={styles.accordionSubGroupTitle}>
                          {col.title}
                        </div>
                        {col.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            to={item.path}
                            className={styles.accordionSubLink}
                            onClick={() => setIsMobileDrawerOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.drawerSectionTitle}>دسترسی سریع</div>
          <ul className={styles.drawerNavLinks}>
            <li>
              <NavLink
                to="/promotions"
                className={styles.drawerSpecialLink}
                onClick={() => setIsMobileDrawerOpen(false)}
              >
                <IoMdFlame size={20} />
                <span>پیشنهادهای شگفت‌انگیز</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bestsellers"
                onClick={() => setIsMobileDrawerOpen(false)}
              >
                پرفروش‌ترین‌ها
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" onClick={() => setIsMobileDrawerOpen(false)}>
                وبلاگ تکنو
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wishlist"
                onClick={() => setIsMobileDrawerOpen(false)}
              >
                لیست علاقه‌مندی‌ها
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>

      <div className={styles.mobileBottomNav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${styles.bottomNavItem} ${isActive ? styles.activeBottomItem : ""}`
          }
        >
          {({ isActive }) => (
            <>
              {isActive ? <HiHome size={24} /> : <HiOutlineHome size={24} />}
              <span>خانه</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            `${styles.bottomNavItem} ${isActive ? styles.activeBottomItem : ""}`
          }
        >
          {({ isActive }) => (
            <>
              {isActive ? (
                <MdDevices size={24} />
              ) : (
                <MdOutlineDevices size={24} />
              )}
              <span>محصولات</span>
            </>
          )}
        </NavLink>

        <button
          type="button"
          className={`${styles.bottomNavItem} ${
            isMobileDrawerOpen ? styles.activeBottomItem : ""
          }`}
          onClick={() => setIsMobileDrawerOpen(true)}
        >
          {isMobileDrawerOpen ? (
            <HiSquares2X2 size={24} />
          ) : (
            <HiOutlineSquares2X2 size={24} />
          )}
          <span>دسته‌بندی</span>
        </button>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `${styles.bottomNavItem} ${isActive ? styles.activeBottomItem : ""}`
          }
        >
          <div className={styles.cartIconWrapper}>
            <span className={styles.mobileBadge}>۲</span>
            <FiShoppingBag size={22} />
          </div>
          <span>سبد خرید</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `${styles.bottomNavItem} ${isActive ? styles.activeBottomItem : ""}`
          }
        >
          <FiUser size={22} />
          <span>حساب من</span>
        </NavLink>
      </div>
    </header>
  );
}
