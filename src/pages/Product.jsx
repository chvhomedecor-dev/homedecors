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
      { name: "Vases & Pots", img: "/images/Home_decor_vases.jpg" },
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
    ],
  },
  {
    name: "Wall Papers",
    quote: "Walls that reflect elegance",
    hero: "/images/wallpaper_hero.jpg",
    products: [
      { name: "Imported Wall Papers", img: "/images/imported_wallpaper.jpg" },
      {
        name: "Customised Wall Papers",
        img: "/images/customised_wallpapers.jpg",
      },
      { name: "Fabric Wall Papers", img: "/images/fabric_wallpaper.jpg" },
      { name: "Embosed Wall Papers", img: "/images/embosed_wallpaper.jpg" },
      { name: "Water Proof Wall Papers", img: "/images/waterproof_wallpaper.jpg" },
      { name: "Scratch Proof Wall Papers", img: "/images/scratch_proof.jpg" },
    ],
  },
  {
    name: "Floorings",
    quote: "Strong foundations with premium finish",
    hero: "/images/flooring_hero.jpg",
    products: [
      { name: "PVC Floorings", img: "/images/pvc.jpg" },
      { name: "Vinyl Plank Floorings", img: "/images/vinyl.jpg" },
      { name: "SPC Floorings", img: "/images/spc.jpg" },
      { name: "Wooden Floorings", img: "/images/wooden.jpg" },
      { name: "Carpet Floorings", img: "/images/carpet.jpg" },
    ],
  },
  {
    name: "Pebble Stones",
    quote: "Nature-inspired surface details",
    hero: "https://res.cloudinary.com/dke6jolvx/image/upload/v1767743326/pebble_hero_oambeg.jpg",
    products: [
      { name: "Assorted Pebbles", img: "https://res.cloudinary.com/dke6jolvx/image/upload/v1767743289/assorted_pebble_utynlb.jpg" },
      { name: "Polished Pebbles", img: "https://res.cloudinary.com/dke6jolvx/image/upload/v1767743326/polished_ejhyxv.jpg" },
      { name: "Cobble Stones", img: "https://res.cloudinary.com/dke6jolvx/image/upload/v1767743293/cobble_stone_pq7vcx.jpg" },
      {
        name: "Indoor & Outdoor Fountains",
        img: "/images/fountain.jpg",
      },
    ],
  },
  {
    name: "Murals",
    quote: "Artistic expressions for interiors",
    hero: "/images/mural_hero.jpg",
    products: [
      { name: "Handicrafts", img: "/images/handicrafts.jpg" },
      {
        name: "Interior & Exterior Murals",
        img: "/images/exterior_murals.jpg",
      },
      { name: "Wall Murals", img: "/images/wall_murals.jpg" },
      { name: "Statues", img: "/images/buddha1.jpg" },
      { name: "Artifacts", img: "/images/artifacts.jpg" },
      { name: "Wet Cloth Hangers", img: "/images/wet_cloth_hangers.jpg" },
      { name: "Invisible Grills", img: "/images/invisible_grills.jpg" },
      {
        name: "Mosquito Sliding Doors",
        img: "/images/mosliding.jpg",
      },
      {
        name: "Metal Sliding Doors & etc.",
        img: "/images/metal_sliding.jpg",
      },
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
}
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
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBackTop = () => {
    setSearch("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryClick = (name) => {
    const el = document.getElementById(`cat-${name}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
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
