// Full menu data for Micho Turkish Bar & Grill
// Food items 1–71 from PDF menus + full drinks menus
// V = Vegetarian, VG = Vegan

export const menuData = {

  // ─── COLD STARTERS ────────────────────────────────────────────────────────
  'Cold Starters': {
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=80',
    items: [
      { num: 1,  name: 'Cacık',           price: 5.50, tags: ['V'],  description: 'Yogurt, cucumber, garlic & fresh dill' },
      { num: 2,  name: 'Mixed Olives',    price: 3.90, tags: ['VG'], description: 'Marinated assorted olives in olive oil and herbs' },
      { num: 3,  name: 'Patlıcan Tarator',price: 5.95, tags: ['V'],  description: 'Barbecued aubergine purée with yogurt, olive oil and garlic' },
      { num: 4,  name: 'Biber Közleme',   price: 4.95, tags: ['V'],  description: 'Barbecued peppers with feta cheese, olive oil and garlic' },
      { num: 5,  name: 'Şakşuka',         price: 5.95, tags: ['VG'], description: 'Aubergine, potatoes, mixed peppers, garlic, tomato sauce, herbs' },
      { num: 6,  name: 'Hummus',          price: 5.50, tags: ['VG'], description: 'Chickpea dip with tahini & lemon' },
      { num: 7,  name: 'Çoban Salatası',  price: 5.50, tags: ['VG'], description: 'Spicy tomatoes, red onions, mixed peppers, cucumber, parsley, pepper paste, herbs and pomegranate juice' },
    ],
  },

  // ─── HOT STARTERS ─────────────────────────────────────────────────────────
  'Hot Starters': {
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1400&q=80',
    items: [
      { num: 8,  name: 'Soup',              price: 8.50, description: 'Lentil or Chicken served with homemade bread and mixed olives' },
      { num: 9,  name: 'Turkish Sucuk',     price: 6.50, description: 'Grilled sucuk' },
      { num: 10, name: 'Mantar Tava',        price: 5.50, tags: ['V'],  description: 'Sautéed mushrooms cooked in butter with garlic and herbs' },
      { num: 11, name: 'Dolma',              price: 6.50, tags: ['V'],  description: 'Dried aubergine and pepper with stuffed rice, herbs, garlic, tomatoes, pepper paste and parsley' },
      { num: 12, name: 'İçli Köfte',         price: 7.90, description: 'Crisp golden bulgur shells filled with minced lamb, onions and aromatic spices, hand-shaped and lightly fried. A traditional Anatolian speciality' },
      { num: 13, name: 'Halloumi',           price: 6.50, tags: ['V'],  description: 'Grilled halloumi cheese served golden and crisp' },
      { num: 14, name: 'Falafel',            price: 6.50, tags: ['VG'], description: 'Chickpea fritters' },
      { num: 15, name: 'Sigara Börek',       price: 6.50, tags: ['V'],  description: 'Fried pastry filled with feta cheese and parsley' },
      { num: 16, name: 'Calamari',           price: 6.50, description: 'Fried squid rings in a light crispy batter' },
      { num: 17, name: 'Arnavut Ciğeri',     price: 6.50, description: 'Freshly fried diced lamb\'s liver in butter' },
      { num: 18, name: 'Mitite Köfte',       price: 5.90, description: 'Lamb mince meatball in special tomato sauce' },
      { num: 19, name: 'Prawn',              price: 7.90, description: 'Fresh prawns grilled with olive oil, herbs, and lemon' },
      { num: 20, name: '4 Piece Chicken Strips', price: 5.90, description: '' },
    ],
  },

  // ─── MAINS ────────────────────────────────────────────────────────────────
  'Mains': {
    image: '/food-lamb.png',
    note: 'All served with bulgur, grilled tomato & peppers',
    items: [
      { num: 21, name: 'Micho Köfte',          price: 18.95, description: 'Hand-shaped lamb mince meatballs seasoned with herbs and grilled over charcoal, served with a rich house tomato sauce' },
      { num: 22, name: 'Lamb Şiş',              price: 19.95, description: 'Marinated lamb cubes, delicately seasoned with Mediterranean herbs and spices, grilled to perfection' },
      { num: 23, name: 'Lamb Chops',            price: 22.95, description: 'Marinated lamb chops, delicately seasoned with Mediterranean herbs and spices, grilled to perfection' },
      { num: 24, name: 'Lamb Ribs',             price: 19.50, description: 'Lamb ribs, gently seasoned with a blend of spices' },
      { num: 25, name: 'Adana Kebab',           price: 17.50, description: 'Minced lamb mixed with spices and herbs' },
      { num: 26, name: 'Chicken Şiş',           price: 17.50, description: 'Tender chicken cubes marinated in a blend of herbs and spices' },
      { num: 27, name: 'Chicken Wings',         price: 17.00, description: 'Chargrilled chicken wings marinated in herbs and spices for a rich, smoky taste' },
      { num: 28, name: 'Chicken Thighs',        price: 17.00, description: 'Chicken thighs marinated in herbs and spices' },
      { num: 29, name: 'Vegetable Güveç',       price: 16.00, tags: ['VG'], description: 'A mix of seasonal vegetables baked slowly with herbs and olive oil' },
      { num: 30, name: 'Lamb Güveç',            price: 18.95, description: 'Lamb pieces cooked with vegetables, tomato sauce and herbs' },
      { num: 31, name: 'Chicken Güveç',         price: 17.50, description: 'Chicken and vegetables baked in a clay pot with herbs and tomato sauce' },
      { num: 32, name: 'Micho Special',         price: 21.00, description: 'Chargrilled chicken breast served in a garlic, cream and mushroom sauce' },
      { num: 33, name: 'Sea Bass Güveç',        price: 21.00, description: 'Sea bass fillet baked with tomato, garlic, herbs, and olive oil' },
      { num: 34, name: 'King Prawn Güveç',      price: 21.00, description: 'King prawns cooked in a clay pot with tomato, garlic, and herbs' },
      { num: 35, name: 'Mixed Grill',           price: 23.90, description: 'Lamb chop, lamb şiş, chicken şiş, adana' },
      { num: 36, name: 'Combination Mix',       price: 20.90, description: 'Choose two of: chicken şiş, lamb şiş, adana' },
      { num: 37, name: 'İskender',              price: 17.50, description: 'Lamb or chicken served over bread cubes with yoghurt, tomato sauce, and melted butter' },
      { num: 38, name: 'Çitir Beyti',           price: 19.50, description: 'Minced meat wrap with yogurt & tomato sauce' },
      { num: 39, name: 'Ali Nazik',             price: 19.50, description: 'Aubergine, yogurt, lamb or chicken' },
      { num: 40, name: 'Çöp Şiş',              price: 19.00, description: 'Small cubes of marinated lamb grilled on skewers, soft and full of flavour' },
      { num: 41, name: 'Mixed Grill Combo for 2', price: 60.00, description: 'Adana, chicken şiş, lamb şiş, lamb chops, chicken wings — served with 2 meze, salad and bulgur' },
      { num: 42, name: 'Mixed Grill Combo for 4', price: 120.00, description: 'Adana, chicken şiş, lamb şiş, lamb chops, chicken wings — served with 4 meze, salad and bulgur' },
    ],
  },

  // ─── PIDE ─────────────────────────────────────────────────────────────────
  'Pide': {
    image: '/food-pide.png',
    note: 'Turkish flatbread — all with mozzarella topping and herbs',
    items: [
      { num: 43, name: 'Kuşbaşılı',             price: 13.95, description: 'Diced lamb, tomato, mixed peppers' },
      { num: 44, name: 'Sucuklu',               price: 11.00, description: 'Turkish sausage' },
      { num: 45, name: 'Mezopotamya',            price: 11.50, description: 'Mincemeat, red onion, mixed peppers, touch of oregano' },
      { num: 46, name: 'Pastırma Sarayı',        price: 12.50, description: 'Goat cheese, olives, beef pastrami, sun-dried tomatoes' },
      { num: 47, name: 'Göçmen Tavuk',           price: 12.00, description: 'Roast chicken, mushroom, red onion and Turkish peppers' },
    ],
  },

  // ─── PIZZA ────────────────────────────────────────────────────────────────
  'Pizza': {
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1400&q=80',
    note: 'All pizzas made with fresh dough, mozzarella and signature Micho-style flavour',
    items: [
      { num: 48, name: 'Mixed Meat Feast',                         price: 14.50, description: 'Classic tomato sauce, pastrami, sucuk, minced beef, grilled chicken and double mozzarella' },
      { num: 49, name: 'White Pizza with Spinach, Artichokes & Roasted Garlic', price: 11.50, tags: ['V'], description: 'Creamy white base topped with fresh spinach, tender artichokes and roasted garlic' },
      { num: 50, name: 'Micho Four Cheese Pizza',                  price: 11.50, tags: ['V'], description: 'Classic tomato base with mozzarella, gorgonzola, parmesan and cheddar' },
      { num: 51, name: 'Vegetarian Pizza',                         price: 11.50, tags: ['V'], description: 'Green and red peppers, mushrooms, onions, artichokes and mozzarella cheese' },
      { num: 52, name: 'Soguk Meze Pizza',                         price: 12.95, description: 'Prawns, tuna, cherry tomatoes and fresh mozzarella with garden greens for a refreshing Mediterranean balance' },
    ],
  },

  // ─── SIDES ────────────────────────────────────────────────────────────────
  'Sides': {
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1400&q=80',
    items: [
      { num: 53, name: 'Chips',                     price: 3.50, tags: ['VG'], description: '' },
      { num: 54, name: 'Chips with Feta',            price: 4.50, tags: ['V'],  description: '' },
      { num: 55, name: 'Halloumi Fries',             price: 6.50, tags: ['V'],  description: '' },
      { num: 56, name: 'Onion Rings',                price: 5.50, tags: ['VG'], description: '' },
      { num: 57, name: 'Chicken Nuggets',            price: 7.00, description: '' },
      { num: 58, name: 'Caprese Salad',              price: 6.50, tags: ['V'],  description: '' },
      { num: 59, name: 'Tomato and Feta Salad',      price: 6.50, tags: ['V'],  description: '' },
      { num: 60, name: 'Turkish Bread',              price: 3.00, tags: ['VG'], description: '' },
      { num: 61, name: 'Bulgur',                     price: 3.95, tags: ['VG'], description: 'Tomato paste, onions, mixed peppers, garlic and herbs' },
      { num: 62, name: 'Garlic Bread',               price: 5.50, tags: ['V'],  description: 'Garlic and cheese' },
      { num: 63, name: 'Garlic Bread with Tomato',   price: 5.90, tags: ['VG'], description: 'Garlic, tomatoes and pesto sauce' },
      { num: 64, name: 'Margarita',                  price: 5.00, tags: ['V'],  description: '' },
    ],
  },

  // ─── KIDS ─────────────────────────────────────────────────────────────────
  'Kids': {
    image: 'https://images.unsplash.com/photo-1561304054-ef974cedb9d7?auto=format&fit=crop&w=1400&q=80',
    note: 'All kids meals served with chips',
    items: [
      { num: 65, name: 'Chicken Şiş',    price: 6.50, description: '1 skewer + chips' },
      { num: 66, name: 'Adana',          price: 6.50, description: '1 skewer + chips' },
      { num: 67, name: 'Chicken Wings',  price: 6.50, description: '5 pieces + chips' },
      { num: 68, name: 'Chicken Nuggets',price: 6.50, description: '5 pieces + chips' },
    ],
  },

  // ─── DESSERTS ─────────────────────────────────────────────────────────────
  'Desserts': {
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1400&q=80',
    note: 'All desserts prepared in our kitchen where allergens are present. Please speak to staff for details.',
    items: [
      { num: 69, name: 'Homemade Sütlaç',               price: 4.95, tags: ['V'], description: 'Turkish rice pudding' },
      { num: 70, name: 'Homemade Baklava',               price: 5.95, tags: ['V'], description: 'Traditional layered pastry' },
      { num: 71, name: 'Chef\'s Weekly Dessert Selection', price: 5.95, tags: ['V'], description: 'A variety of homemade Turkish sweets with different favourites each week (1 portion)' },
    ],
  },

  // ─── COCKTAILS ────────────────────────────────────────────────────────────
  'Cocktails': {
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1400&q=80',
    items: [
      { name: 'Sex on the Beach',       price: 10.50, description: 'Peach schnapps, orange and pineapple juice with vodka, Chambord and cranberry juice. Fruity, smooth and refreshing' },
      { name: 'Negroni',                price: 9.90,  description: 'Tanqueray No.10 Gin, sweet vermouth and Campari, stirred over ice and finished with orange peel' },
      { name: 'Strawberry Mojito',      price: 9.90,  description: 'White rum with strawberry syrup, fresh lime juice and soda, served over ice with mint and fresh fruit' },
      { name: 'Passion Fruit Martini',  price: 9.90,  description: 'Vanilla vodka shaken with passion fruit purée, Passoã, pineapple juice and lime juice' },
      { name: 'Espresso Martini',       price: 9.90,  description: 'Vodka shaken with fresh espresso and coffee liqueur' },
      { name: 'Cosmopolitan',           price: 9.90,  description: 'Vodka mixed with orange liqueur, cranberry juice, and fresh lime juice' },
    ],
  },

  // ─── MOCKTAILS ────────────────────────────────────────────────────────────
  'Mocktails': {
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1400&q=80',
    items: [
      { name: 'Passion Fruit Fizz',  price: 7.00, description: 'Passion fruit purée topped with lemonade and soda, served over ice' },
      { name: 'Elder Apple Bloom',   price: 7.00, description: 'Elderflower syrup mixed with apple juice, fresh lime, mint and soda' },
      { name: 'Crimson Basil',       price: 7.00, description: 'Orange and cranberry juices shaken with grenadine, lime and fresh basil' },
      { name: 'Blue Mojito',         price: 7.00, description: 'Blue curaçao syrup topped with lemonade & soda, served over ice with mint and lime' },
    ],
  },

  // ─── SPRITZ ───────────────────────────────────────────────────────────────
  'Spritz': {
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1400&q=80',
    items: [
      { name: 'Aperol Spritz',           price: 8.50, description: 'Aperol topped with Prosecco and soda, served over ice with orange' },
      { name: 'Cranberry Campari Spritz',price: 8.50, description: 'Campari mixed with grenadine and juice, topped with Prosecco and served over ice' },
      { name: 'Michello Spritz',         price: 8.50, description: 'House special mint clove syrup, Limoncello topped with Prosecco and soda, served over ice with lemon and mint' },
      { name: 'Hugo Spritz',             price: 8.50, description: 'St-Germain elderflower liqueur topped with Prosecco & soda, served over ice with lime and mint' },
    ],
  },

  // ─── WINE ─────────────────────────────────────────────────────────────────
  'Wine': {
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1400&q=80',
    note: 'Available by the glass (175ml / 250ml) or bottle',
    items: [
      // White
      { name: 'Turkish White Wine',  price: 7.10, description: 'Bright Turkish white with crisp citrus notes and an elegant finish — 175ml £7.10 · 250ml £9.00 · Bottle £28.00' },
      { name: 'Pinot Grigio',        price: 7.20, description: 'Light and refreshing with crisp aromas of green pear, apple and citrus — 175ml £7.20 · 250ml £8.50 · Bottle £26.50' },
      { name: 'Sauvignon Blanc',     price: 7.20, description: 'Bright with aromas of lime, grapefruit and green apple, subtle herbal notes — 175ml £7.20 · 250ml £8.50 · Bottle £26.50' },
      { name: 'Chardonnay',          price: 7.00, description: 'Smooth and well-balanced, ripe apple, pear, citrus with gentle butter and vanilla — 175ml £7.00 · 250ml £8.20 · Bottle £25.00' },
      // Red
      { name: 'Turkish Red Wine',    price: 7.90, description: 'Rotating selection of Turkish reds, rich with dark fruit and a hint of spice — 175ml £7.90 · 250ml £9.00 · Bottle £29.00' },
      { name: 'Malbec',              price: 7.50, description: 'Deep and expressive — blackberry, plum, dark cherry with hints of spice and cocoa — 175ml £7.50 · 250ml £8.90 · Bottle £28.50' },
      { name: 'Merlot (13.5%)',      price: 7.50, description: 'Rich and velvety — ripe plum, black cherry and soft spice. Smooth tannins and a long finish — 175ml £7.50 · 250ml £8.90 · Bottle £27.50' },
      { name: 'Shiraz',              price: 7.20, description: 'Full-bodied with deep dark fruit, subtle peppery spice and a smooth, lingering finish — 175ml £7.20 · 250ml £8.50 · Bottle £25.00' },
      // Rosé
      { name: 'Pinot Grigio Blush',  price: 7.20, description: '175ml £7.20 · 250ml £8.20 · Bottle £25.00' },
      { name: 'Zinfandel Rosé',      price: 7.20, description: 'USA — 175ml £7.20 · 250ml £8.20 · Bottle £25.00' },
      // Sparkling
      { name: 'Prosecco',            price: 7.50, description: '200ml £7.50 · Bottle £26.50' },
      { name: 'Prosecco Rosé',       price: 7.50, description: '200ml £7.50 · Bottle £26.50' },
    ],
  },

  // ─── BEERS & CIDERS ───────────────────────────────────────────────────────
  'Beers & Ciders': {
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=1400&q=80',
    items: [
      { name: 'Efes Draft',                   price: 6.10, description: '500ml' },
      { name: 'Peroni Large',                 price: 6.90, description: '660ml' },
      { name: 'Peroni Small',                 price: 4.90, description: '330ml' },
      { name: 'Budweiser',                    price: 4.90, description: '330ml' },
      { name: 'Corona',                       price: 4.90, description: '330ml' },
      { name: 'Peroni Zero',                  price: 4.80, description: '330ml — alcohol free' },
      { name: 'Kopparberg Strawberry & Lime', price: 6.10, description: '500ml' },
      { name: 'Kopparberg Mixed Fruits',      price: 6.10, description: '500ml' },
      { name: 'Kopparberg 0%',               price: 5.50, description: '275ml — alcohol free' },
    ],
  },

  // ─── SPIRITS ──────────────────────────────────────────────────────────────
  'Spirits': {
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=1400&q=80',
    note: 'A selection of spirits & flavours is available — please ask for details',
    items: [
      // Whisky & Bourbon
      { name: 'Jim Beam Bourbon',        price: 4.90, description: '25ml £4.90 · 50ml £7.00' },
      { name: 'Jack Daniels',            price: 5.50, description: '25ml £5.50 · 50ml £8.00' },
      { name: 'Jameson',                 price: 5.50, description: '25ml £5.50 · 50ml £7.50' },
      { name: 'Glenfiddich',             price: 6.50, description: '25ml £6.50 · 50ml £8.50' },
      // Rum
      { name: 'Captain Morgan White',    price: 4.50, description: '25ml £4.50 · 50ml £7.50' },
      { name: 'Captain Morgan Spiced',   price: 4.50, description: '25ml £4.50 · 50ml £7.50' },
      { name: 'Bacardi',                 price: 4.90, description: '25ml £4.90 · 50ml £7.80' },
      { name: 'Malibu Coconut',          price: 4.90, description: '25ml £4.90 · 50ml £7.80' },
      { name: 'Kraken',                  price: 4.90, description: '25ml £4.90 · 50ml £7.80' },
      // Vodka
      { name: 'Smirnoff',               price: 4.50, description: '25ml £4.50 · 50ml £7.50' },
      { name: 'Absolut Vodka',           price: 4.90, description: '25ml £4.90 · 50ml £8.00' },
      { name: 'Absolut Raspberry',       price: 4.90, description: '25ml £4.90 · 50ml £8.00' },
      { name: 'Absolut Strawberry',      price: 4.90, description: '25ml £4.90 · 50ml £8.00' },
      { name: 'Absolut Vanilla',         price: 4.90, description: '25ml £4.90 · 50ml £8.00' },
      { name: 'Belvedere',               price: 5.50, description: '25ml £5.50 · 50ml £8.50' },
      // Gins
      { name: 'Beefeater Dry Gin',       price: 4.00, description: '25ml £4.00 · 50ml £7.50' },
      { name: 'Beefeater Pink Gin',      price: 4.00, description: '25ml £4.00 · 50ml £7.50' },
      { name: 'Gordon\'s Pink Gin',      price: 4.20, description: '25ml £4.20 · 50ml £7.80' },
      { name: 'Edinburgh Pink Gin',      price: 4.20, description: '25ml £4.20 · 50ml £7.80' },
      { name: 'Tanqueray Sevilla Gin',   price: 4.50, description: '25ml £4.50 · 50ml £8.00' },
      { name: 'Tanqueray No.10 Gin',     price: 4.50, description: '25ml £4.50 · 50ml £8.00' },
      { name: 'Whitley Neill (Black Cherry, Blackberry & Raspberry)', price: 4.20, description: '25ml £4.20 · 50ml £7.50' },
      // Tequila
      { name: 'Don Angel Tequila',       price: 3.90, description: '25ml' },
      { name: 'Cazcabel Tequila Blanco', price: 4.90, description: '25ml' },
      // Liqueurs
      { name: 'Baileys',                 price: 7.10, description: '50ml' },
      { name: 'Disaronno',              price: 6.50, description: '25ml £6.50 · 50ml £7.10' },
    ],
  },

  // ─── RAKI ─────────────────────────────────────────────────────────────────
  'Raki': {
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=1400&q=80',
    items: [
      { name: 'Yeni Raki 25ml',        price: 3.70,  description: '' },
      { name: 'Yeni Raki 50ml',        price: 6.90,  description: '' },
      { name: 'Yeni Raki 35cl Bottle', price: 35.00, description: '' },
      { name: 'Yeni Raki 75cl Bottle', price: 65.00, description: '' },
    ],
  },

  // ─── SOFT DRINKS ──────────────────────────────────────────────────────────
  'Soft Drinks': {
    image: 'https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?auto=format&fit=crop&w=1400&q=80',
    items: [
      { name: 'Coca-Cola',      price: 3.60, tags: ['VG'], description: '330ml' },
      { name: 'Diet Coke',      price: 3.60, tags: ['VG'], description: '330ml' },
      { name: 'Coke Zero',      price: 3.60, tags: ['VG'], description: '330ml' },
      { name: 'Fanta',          price: 3.60, tags: ['VG'], description: '330ml' },
      { name: 'Sprite',         price: 3.60, tags: ['VG'], description: '' },
      { name: 'Appletiser',     price: 3.50, tags: ['VG'], description: '' },
      { name: 'Orange Juice',   price: 3.00, tags: ['VG'], description: '' },
      { name: 'Apple Juice',    price: 3.00, tags: ['VG'], description: '' },
      { name: 'Ginger Beer',    price: 3.20, tags: ['VG'], description: '' },
      { name: 'Soda Water',     price: 2.00, tags: ['VG'], description: '' },
      { name: 'Sparkling Water',price: 2.80, tags: ['VG'], description: '' },
      { name: 'Mineral Water',  price: 2.80, tags: ['VG'], description: '' },
      { name: 'Ayran',          price: 3.50, tags: ['V'],  description: '' },
    ],
  },

  // ─── HOT DRINKS ───────────────────────────────────────────────────────────
  'Hot Drinks': {
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1400&q=80',
    items: [
      { name: 'English Breakfast Tea', price: 2.60, tags: ['VG'], description: '' },
      { name: 'Turkish Tea',            price: 1.80, tags: ['VG'], description: '' },
      { name: 'Mint Tea',               price: 3.00, tags: ['VG'], description: '' },
      { name: 'Green Tea',              price: 3.00, tags: ['VG'], description: '' },
      { name: 'Apple Tea',              price: 3.20, tags: ['VG'], description: '' },
      { name: 'Orange Tea',             price: 3.20, tags: ['VG'], description: '' },
      { name: 'Americano',              price: 3.20, tags: ['VG'], description: '' },
      { name: 'Latte',                  price: 3.90, tags: ['V'],  description: '' },
      { name: 'Cappuccino',             price: 3.60, tags: ['V'],  description: '' },
      { name: 'Mocha',                  price: 3.90, tags: ['V'],  description: '' },
      { name: 'Espresso',               price: 2.80, tags: ['VG'], description: '' },
      { name: 'Turkish Coffee',         price: 3.00, tags: ['VG'], description: '' },
      { name: 'Hot Chocolate',          price: 3.60, tags: ['V'],  description: '' },
      { name: 'Add Syrup',              price: 0.50, tags: ['VG'], description: '' },
    ],
  },

  // ─── ICED COFFEE ──────────────────────────────────────────────────────────
  'Iced Coffee': {
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1400&q=80',
    items: [
      { name: 'Iced Latte',      price: 4.00, tags: ['V'],  description: '' },
      { name: 'Iced Americano',  price: 3.50, tags: ['VG'], description: '' },
      { name: 'Iced Matcha',     price: 4.00, tags: ['VG'], description: '' },
      { name: 'Iced Mocha',      price: 4.00, tags: ['V'],  description: '' },
    ],
  },
}

export const categories = Object.keys(menuData)
