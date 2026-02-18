import React, { useMemo, useState } from "react";
import "./Products.css"; // put your CSS here

const categoriesData = [
  {
    name: "Grass",
    quote: "Natural greenery with modern elegance",
    hero: "/images/grass_hero.jpg",
    products: [
      { name: "Artificial Grass", img: "images/artificial_grass.jpg" },
      { name: "Artificial Flowers", img: "/images/artificial_flowers.jpg" },
      { name: "Artificial Plants", img: "/images/artificial_plants.jpg" },
      { name: "Vertical Grass", img: "/images/vertical_grass.jpg" },
      { name: "Planters", img: "/images/planters.jpg" },
      { name: "Aroma Diffuser", img: "/images/aroma_diffuser/ard.jpg" },
    ],
  },
  {
    name: "Blinds",
    quote: "Stylish control of light & privacy",
    hero: "/images/blinds.jpg",
    products: [
      { name: "Interior & Exterior Blinds", img: "/images/blinds_hero.jpg" },
      { name: "Remote Blinds", img: "/images/remote_blinds.jpg" },
      { name: "Customised Blinds", img: "/images/Customizwd_blinds.jpg" },
      { name: "Zebra Blinds", img: "/images/blinds/zebra.jpg" },
      { name: "Roller Blinds", img: "/images/blinds/roller_blinds.webp" },
      { name: "Beed Curtains", img: "/images/blinds/beed curtains.jpg" },
    ],
  },
  {
    name: "Curtains",
    quote: "Luxury fabrics for modern living",
    hero: "/images/curtains_hero.jpg",
    products: [
      { name: "Smart Curtains", img: "/images/smart_curtains.jpg" },
      { name: "Remote Curtains", img: "/images/remote_curtains.jpg" },
      { name: "Customised Print Curtains", img: "/images/print_curtains.jpg" },
      { name: "Carpet", img: "/images/carpet/carpet.avif" },
    ],
  },
  {
    name: "Wall Papers",
    quote: "Walls that reflect elegance",
    hero: "/images/wallpaper_hero.jpg",
    products: [
      { name: "Imported Wall Papers", img: "/images/imported_wallpaper.jpg" },
      { name: "Customised Wall Papers", img: "/images/customised_wallpapers.jpg" },
      { name: "Fabric Wall Papers", img: "/images/fabric_wallpaper.jpg" },
      { name: "Embosed Wall Papers", img: "/images/embosed_wallpaper.jpg" },
      { name: "Water Proof Wall Papers", img: "/images/waterproof_wallpaper.jpg" },
      { name: "Scratch Proof Wall Papers", img: "/images/scratch_proof.jpg" },
    ],
  },
  {
    name: "Pare & Ox Ceiling",
    quote: "Crafting interiors from the top down with timeless elegance.",
    hero: "/images/ceiling/hero_ceiling.png",
    products: [
      { name: "Baffel", img: "/images/ceiling/baffel.png" },
      { name: "Classic WallNut", img: "/images/ceiling/classicwallnut.png" },
      { name: "Golden Oak", img: "/images/ceiling/goldenoak.png" },
      { name: "Wall", img: "/images/ceiling/sheet.png" },
      { name: "External Walls", img: "/images/ceiling/externalwalls.png" },
      { name: "Prism", img: "/images/ceiling/prism.png" },
    ],
  },
  {
    name: "Pebble Stones",
    quote: "Nature-inspired surface details",
    hero:
      "https://res.cloudinary.com/dke6jolvx/image/upload/v1767743326/pebble_hero_oambeg.jpg",
    products: [
      {
        name: "Assorted Pebbles",
        img: "https://res.cloudinary.com/dke6jolvx/image/upload/v1767743289/assorted_pebble_utynlb.jpg",
      },
      {
        name: "Polished Pebbles",
        img: "https://res.cloudinary.com/dke6jolvx/image/upload/v1767743326/polished_ejhyxv.jpg",
      },
      {
        name: "Cobble Stones",
        img: "https://res.cloudinary.com/dke6jolvx/image/upload/v1767743293/cobble_stone_pq7vcx.jpg",
      },
      { name: "Indoor & Outdoor Fountains", img: "/images/fountain.jpg" },
    ],
  },
  {
    name: "Murals",
    quote: "Artistic expressions for interiors",
    hero: "/images/mural_hero.jpg",
    products: [
      { name: "Customised Murals", img: "/images/murals/shopping.webp" },
      { name: "Handicrafts", img: "/images/handicrafts.jpg" },
      { name:"Radha Krishna Wall Mural", img: "/images/murals/radhakrishna.webp"},
      { name: "Birds", img: "/images/murals/birds.png" },
      { name: "Interior & Exterior Murals", img: "/images/exterior_murals.jpg" },
      { name:"wall Murals", img: "/images/murals/budhleaves.webp" },
      { name: "Wall Murals", img: "/images/wall_murals.jpg" },
      { name: "Statues", img: "/images/buddha1.jpg" },
      { name: "Artifacts", img: "/images/artifacts.jpg"},
      { name:"3D Murals", img: "/images/murals/budha_fountain.jpeg"},
      { name:"Wall Decoraions", img: "/images/murals/balaji_painting.webp"},
      { name:"Wall Mural", img: "/images/murals/buddha-wall-mural.jpg"},
    ],
  },
  {
    name: "Cloth Hangers",
    quote: "Stylish and sturdy hangers for every wardrobe",
    hero: "/images/clothhangers/hanger_hero_img.jpg",
    products: [
      { name: "AeroLift Classic", img: "/images/clothhangers/ch11.png" },
      { name: "Wooden Hangers", img: "/images/clothhangers/wooden hanger.jpg" },
      { name: "Sky Rack Elite", img: "/images/clothhangers/sky_rack_elitee.png" },
      { name: "Laundry Hangers", img: "/images/clothhangers/laundry_drying_rack.png" },
    ],
  },
  {
    name: "PVC Metal Doors",
    quote: "Luxury Meets Lasting Protection.",
    hero: "/images/pvcdoors/hero1.jpg",
    products: [
      { name: "", img: "/images/pvcdoors/pvc8.jpg" },
      { name: "", img: "/images/pvcdoors/pvc10.webp" },
      { name: "", img: "/images/pvcdoors/pvc7.webp "},
      { name: "", img: "/images/pvcdoors/pvc13.webp" },
      { name: "", img: "/images/pvcdoors/pvc14.png" },
      { name: "", img: "/images/pvcdoors/pvc15.png" },
    ],
  },
];

const Products = () => {
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  const filteredCategories = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return categoriesData;

    return categoriesData
      .map((cat) => {
        const matchesCategory = cat.name.toLowerCase().includes(term);
        const filteredProducts = cat.products.filter((p) =>
          p.name.toLowerCase().includes(term)
        );
        if (!matchesCategory && filteredProducts.length === 0) return null;
        return {
          ...cat,
          products: matchesCategory ? cat.products : filteredProducts,
        };
      })
      .filter(Boolean);
  }, [search]);

  const handleScrollToCategories = () => {
    const el = document.getElementById("categories-container");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleBackTop = () => {
    setSearch("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryClick = (name) => {
    const el = document.getElementById(`cat-${name}`);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const openModal = (product) => {
    setModalProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalProduct(null);
  };

  return (
    <div className="page-wrapper">
      {/* HERO */}
      <section className="hero-products">
        <div className="hero-left">
          <h1>Luxury Home Decor Collection</h1>
          <p>
            Premium vases, statement accents, lighting, and refined decor
            crafted for elegant living spaces.
          </p>
          <button className="discover-btn" onClick={handleScrollToCategories}>
            Browse Collections <i className="fa-solid fa-arrow-down" />
          </button>
        </div>
      </section>

      {/* SEARCH BAR */}
      <div className="search-container">
        <input
          type="text"
          id="search"
          placeholder="Search products by name or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="arrow-btn" id="back-btn" onClick={handleBackTop}>
          <i className="fa-solid fa-arrow-up" />
        </button>
      </div>

      {/* CATEGORY BAR */}
      <div className="category-bar" id="category-bar">
        {filteredCategories.map((cat) => (
          <button
            key={cat.name}
            type="button"
            onClick={() => handleCategoryClick(cat.name)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* CATEGORY SECTIONS */}
      <div id="categories-container">
        {filteredCategories.map((cat) => (
          <div
            key={cat.name}
            className="category-section"
            id={`cat-${cat.name}`}
          >
            <h2>{cat.name}</h2>
            <p className="quote">{cat.quote}</p>

            <div className="category-hero">
              <img src={cat.hero} alt={`${cat.name} hero`} />
            </div>

            <div className="products-grid">
              {cat.products.map((product) => (
                <div className="product-card" key={product.name}>
                  <img src={product.img} alt={product.name} />
                  <div
                    className="overlay"
                    onClick={() =>
                      openModal({
                        ...product,
                        category: cat.name,
                      })
                    }
                  >
                    View Details
                  </div>
                  <h3>{product.name}</h3>
                </div>
              ))}
            </div>

            {/* DOWNLOAD BUTTONS */}
            {cat.name === "Pare & Ox Ceiling" && (
              <div className="ceiling-button-wrapper">
                <button
                  className="ceiling-main-btn"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href =
                    "https://drive.google.com/uc?export=download&id=1_qjWSR3dJG-yd43BpD8TvR_zYTdJjnXB";
                    link.download = "Pare-Catalogue.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  Pare Catalogue
                </button>

                <span style={{ margin: "0 10px" }} />

                <button
                  className="ceiling-main-btn"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href =
                    "https://drive.google.com/uc?export=download&id=1jcyl-9IIA7MEEqQqIT3IDyj8uTC6zR6q";

                    link.download = "Ox-Ceiling-Catalogue.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  Ox Ceiling Catalogue
                </button>
              </div>
            )}

            {cat.name === "Murals" && (
              <div className="ceiling-button-wrapper">
                <button
                  className="ceiling-main-btn"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href =
                      "https://drive.google.com/uc?export=download&id=1Cig-Q3DtJGZZMi_jJMPyWTvvqJzqEJ46";
                    link.download = "Murals-Catalogue.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  Murals Catalogue
                </button>
              </div>
            )}

          </div>
        ))}
      </div>

      {/* MODAL */}
      {modalOpen && modalProduct && (
        <div className="modal active" id="modal">
          <div className="modal-content">
            <img
              src={modalProduct.img}
              alt={modalProduct.name}
              id="modal-img"
            />
            <h3 id="modal-title">{modalProduct.name}</h3>
            <p id="modal-desc">
              Premium design for elegant living. Category:{" "}
              <strong>{modalProduct.category}</strong>
            </p>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
