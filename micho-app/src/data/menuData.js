// Full menu data for Micho Turkish Bar & Grill
// Food items from client A4 Main Menu + A5 Dessert Menu PDFs (Sept 2026)
// V = Vegetarian, VG = Vegan, GF = Gluten Free
// Note: Pide V tags applied per actual ingredients (mozzarella + cheddar + butter
// mean pide cannot be vegan even when client PDF said VG).

export const menuData = {

  // ─── COLD STARTERS ────────────────────────────────────────────────────────
  'Cold Starters': {
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=80',
    items: [
      { num: 1,  name: 'Cacık',            price: 6.00, tags: ['V'],  description: 'Yogurt, cucumber, garlic & fresh dill' },
      { num: 2,  name: 'Mixed Olives',     price: 5.90, tags: ['VG'], description: 'Assorted olives marinated in olive oil and herbs' },
      { num: 3,  name: 'Patlıcan Tarator', price: 6.50, tags: ['V'],  description: 'Barbecued aubergine puree with yogurt, olive oil and garlic' },
      { num: 4,  name: 'Biber Közleme',    price: 6.50, tags: ['V'],  description: 'Barbecued peppers with feta cheese, olive oil and garlic' },
      { num: 5,  name: 'Şakşuka',          price: 6.50, tags: ['VG'], description: 'Aubergine, mixed peppers, garlic, tomato sauce, herbs' },
      { num: 6,  name: 'Hummus',           price: 6.00, tags: ['VG'], description: 'Chickpea dip with tahini & lemon' },
      { num: 7,  name: 'Çoban Salatası',   price: 6.00, tags: ['VG'], description: 'Tomatoes, red onions, mixed peppers, cucumber, parsley, pepper paste, herbs and pomegranate juice' },
    ],
  },

  // ─── HOT STARTERS ─────────────────────────────────────────────────────────
  'Hot Starters': {
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1400&q=80',
    items: [
      { num: 8,  name: 'Turkish Sucuk',  price: 7.00, description: 'Grilled Turkish sausage' },
      { num: 9,  name: 'Mantar Tava',    price: 6.50, tags: ['V'], description: 'Sautéed mushrooms cooked in butter with garlic and herbs' },
      { num: 10, name: 'Dolma',          price: 7.50, tags: ['V'], description: 'Dried aubergine and pepper with stuffed rice, herbs, garlic, tomatoes, pepper paste and parsley' },
      { num: 11, name: 'İçli Köfte',     price: 8.50, description: 'Crisp, golden bulgur shells filled with a savoury blend of minced lamb, onions, and aromatic spices, delicately shaped by hand and lightly fried. A traditional Anatolian speciality combining tender texture with deep, fragrant flavours.' },
      { num: 12, name: 'Halloumi',       price: 7.00, tags: ['V'], description: 'Grilled halloumi cheese served golden and crisp' },
      { num: 13, name: 'Falafel',        price: 7.00, tags: ['VG'], description: 'Chickpea fritters' },
      { num: 14, name: 'Sigara Börek',   price: 6.50, tags: ['V'], description: 'Fried pastry filled with feta cheese and parsley' },
      { num: 15, name: 'Calamari',       price: 6.50, description: 'Fried squid rings in a light crispy batter' },
      { num: 16, name: 'Arnavut Ciğeri', price: 7.00, description: 'Freshly fried diced lamb\'s liver in butter' },
      { num: 17, name: 'Mitite Köfte',   price: 7.90, description: 'Lamb mincemeat ball in special tomato sauce' },
      { num: 18, name: 'Prawn',          price: 8.50, description: 'Fresh prawns grilled with olive oil, herbs, and lemon' },
    ],
  },

  // ─── MAINS ────────────────────────────────────────────────────────────────
  'Mains': {
    image: '/food-lamb.png',
    note: 'All served with bulgur, grilled tomato & peppers',
    items: [
      { num: 19, name: 'Micho Köfte',              price: 19.95, description: 'Hand-shaped lamb mince meatballs seasoned with herbs and grilled over charcoal, served with a rich house tomato sauce' },
      { num: 20, name: 'Lamb Şiş',                  price: 21.00, description: 'Marinated lamb cubes, delicately seasoned with Mediterranean herbs and spices, grilled to perfection' },
      { num: 21, name: 'Lamb Chops',                price: 24.99, description: 'Marinated lamb chops, delicately seasoned with Mediterranean herbs and spices, grilled to perfection' },
      { num: 22, name: 'Lamb Ribs',                 price: 21.00, description: 'Lamb ribs, gently seasoned with a blend of spices' },
      { num: 23, name: 'Adana Kebab',               price: 20.50, description: 'Minced lamb mixed with spices and herbs' },
      { num: 24, name: 'Chicken Şiş',               price: 19.50, description: 'Tender chicken cubes marinated in a blend of herbs and spices' },
      { num: 25, name: 'Chicken Wings',             price: 19.00, description: 'Chargrilled chicken wings marinated in herbs and spices for a rich, smoky taste' },
      { num: 26, name: 'Chicken Thighs',            price: 19.00, description: 'Chicken thighs marinated in herbs and spices' },
      { num: 27, name: 'Vegetable Güveç',           price: 18.90, tags: ['VG'], description: 'A mix of seasonal vegetables baked slowly with herbs and olive oil' },
      { num: 28, name: 'Lamb Güveç',                price: 20.95, description: 'Lamb pieces cooked with vegetables, tomato sauce and herbs' },
      { num: 29, name: 'Chicken Güveç',             price: 19.50, description: 'Chicken and vegetables baked in a clay pot with herbs and tomato sauce' },
      { num: 30, name: 'Micho Special',             price: 22.90, description: 'Chargrilled chicken breast served in a garlic, cream and mushroom sauce' },
      { num: 31, name: 'Sea Bass Güveç',            price: 21.90, description: 'Sea bass fillet baked with tomato, garlic, herbs, and olive oil' },
      { num: 32, name: 'King Prawn Güveç',          price: 21.90, description: 'King prawns cooked in a clay pot with tomato, garlic, and herbs' },
      { num: 33, name: 'Mixed Grill',               price: 24.99, description: 'Lamb chop, lamb şiş, chicken şiş, adana' },
      { num: 34, name: 'Combination Mix',           price: 23.90, description: 'Choose two of: chicken şiş, lamb şiş, adana' },
      { num: 35, name: 'İskender',                  price: 21.50, description: 'Lamb or chicken served over bread cubes with yoghurt, tomato sauce, and melted butter' },
      { num: 36, name: 'Çitir Beyti',               price: 20.90, description: 'Minced meat wrap with yogurt & tomato sauce' },
      { num: 37, name: 'Ali Nazik',                 price: 21.00, description: 'Aubergine, yogurt, lamb or chicken' },
      { num: 38, name: 'Çöp Şiş',                   price: 21.00, description: 'Small cubes of marinated lamb grilled on skewers, soft and full of flavour' },
      { num: 39, name: 'Mixed Grill Combo for 2',   price: 65.00, description: 'Adana, chicken şiş, lamb şiş, lamb chops, chicken wings — served with 2 cold meze, salad and bulgur' },
      { num: 40, name: 'Mixed Grill Combo for 4',   price: 125.00, description: 'Adana, chicken şiş, lamb şiş, lamb chops, chicken wings — served with 4 cold meze, salad and bulgur' },
    ],
  },

  // ─── PIDE ─────────────────────────────────────────────────────────────────
  'Pide': {
    image: '/food-pide.png',
    note: 'Turkish flatbread — all with mozzarella topping and herbs',
    items: [
      { num: 41, name: 'Vegetarian Pide',      price: 14.50, tags: ['V'], description: 'Vegetarian pide topped with artichoke, mushrooms, red onion, mixed peppers and cheddar cheese, finished with butter, oregano, black pepper and garlic' },
      { num: 42, name: 'Sucuklu',              price: 14.90, description: 'Turkish sausage' },
      { num: 43, name: 'Mezopotamya',          price: 14.90, description: 'Mincemeat, red onion, mixed peppers, touch of oregano' },
      { num: 44, name: 'Spinach and Egg Pide', price: 13.90, tags: ['V'], description: 'Spinach, egg, cheddar cheese, onion, butter and herbs' },
      { num: 45, name: 'Kuşbaşılı Pide',       price: 15.50, description: 'Diced beef, cheddar cheese, tomatoes, mixed peppers, herbs' },
      { num: 46, name: 'Four Cheese Pide',     price: 14.50, tags: ['V'], description: 'Feta, mozzarella, parmesan, cheddar cheese' },
      { num: 47, name: 'Tomato & Garlic Pide', price: 9.90,  tags: ['V'], description: 'Tomato, garlic, cheddar cheese and Mediterranean herbs' },
      { num: 48, name: 'Garlic Pide',          price: 9.90,  tags: ['V'], description: 'Cheese and garlic' },
      { num: 49, name: 'Mushroom Pide',        price: 13.90, tags: ['V'], description: 'Mushrooms, cheddar cheese, onion, butter and herbs' },
    ],
  },

  // ─── KIDS ─────────────────────────────────────────────────────────────────
  'Kids': {
    image: 'https://images.unsplash.com/photo-1561304054-ef974cedb9d7?auto=format&fit=crop&w=1400&q=80',
    items: [
      { num: 50, name: 'Chicken Shish', price: 7.50, description: '1 skewer + chips' },
      { num: 51, name: 'Adana',         price: 7.50, description: '1 skewer + chips' },
      { num: 52, name: 'Chicken Wings', price: 7.50, description: '5 pieces + chips' },
    ],
  },

  // ─── SIDES ────────────────────────────────────────────────────────────────
  'Sides': {
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1400&q=80',
    items: [
      { num: 53, name: 'Chips',                price: 4.00, tags: ['VG'], description: '' },
      { num: 54, name: 'Chips with Feta',      price: 5.99, tags: ['V'],  description: '' },
      { num: 55, name: 'Halloumi Fries',       price: 7.50, tags: ['V'],  description: '' },
      { num: 56, name: 'Tomato and Feta Salad',price: 8.50, tags: ['V'],  description: '' },
      { num: 57, name: 'Turkish Bread',        price: 3.95, tags: ['VG'], description: '' },
      { num: 58, name: 'Bulgur',               price: 4.50, tags: ['VG'], description: 'Tomato paste, onions, mixed peppers, garlic and herbs' },
    ],
  },

  // ─── DESSERTS ─────────────────────────────────────────────────────────────
  'Desserts': {
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1400&q=80',
    note: 'All desserts are prepared in our kitchen where allergens are present. Please speak to a member of staff for details before ordering.',
    items: [
      { num: 59, name: 'Homemade Sütlaç',                       price: 6.95, tags: ['V'], description: 'Turkish rice pudding' },
      { num: 60, name: 'Homemade Baklava',                       price: 7.95, tags: ['V'], description: 'Traditional layered pastry with pistachio (served with pistachio sauce and whipped cream) or walnut (served with tahini and whipped cream)' },
      { num: 61, name: 'Chocolate Fudge Cake',                   price: 5.95, tags: ['V'], description: '' },
      { num: 62, name: 'Lemon Pudding with Biscuit Layer',       price: 6.95, tags: ['V'], description: '' },
      { num: 63, name: 'Nutella Chocolate Pudding with Biscuit Layer', price: 6.95, tags: ['V'], description: '' },
    ],
  },

  // ─── COCKTAILS ────────────────────────────────────────────────────────────
  'Cocktails': {
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1400&q=80',
    items: [
      { name: 'Rose Royal',            price: 9.90, description: 'Pink gin fused with sweet rose syrup, strawberry puree, and tart lemon juice, finished with sparkling Prosecco' },
      { name: 'Negroni',               price: 9.90, description: 'Tanqueray No.10 Gin, sweet vermouth and Campari, stirred over ice and finished with orange peel' },
      { name: 'Strawberry Mojito',     price: 9.90, description: 'White rum with strawberry syrup, fresh lime juice and soda, served over ice with mint and fresh fruit' },
      { name: 'Passion Fruit Martini', price: 9.90, description: 'Vodka with vanilla essence shaken with passion fruit purée, Passoã, pineapple juice and lime juice' },
      { name: 'Espresso Martini',      price: 9.90, description: 'Vodka, coffee liqueur, freshly brewed espresso, and simple syrup, shaken over ice for a rich, velvety foam' },
      { name: 'Yelloz',                price: 9.90, description: 'Crisp dry gin fused with vibrant orange juice, Cointreau, and tart lemon, perfectly balanced with a touch of simple syrup' },
      { name: 'Coco Lush',             price: 9.90, description: 'Malibu, white rum, coconut syrup, and pineapple juice, balanced with a dash of fresh lemon juice' },
    ],
  },

  // ─── MOCKTAILS ────────────────────────────────────────────────────────────
  'Mocktails': {
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1400&q=80',
    items: [
      { name: 'Passion Fruit Fizz', price: 7.00, description: 'Passion fruit purée topped with lemonade and soda, served over ice' },
      { name: 'Elder Apple Bloom',  price: 7.00, description: 'Elderflower syrup mixed with apple juice, fresh lime, mint and soda' },
      { name: 'Crimson Basil',      price: 7.00, description: 'Orange and cranberry juices shaken with grenadine, lime and fresh basil' },
      { name: 'Kwick Fresher',      price: 7.00, description: 'Kiwi puree fused with lemon juice and house mint-clove syrup, topped with sparkling soda and garnished with fresh kiwi and mint' },
      { name: 'Virgin Mojito',      price: 7.00, description: 'Fresh lime juice, muddled mint leaves, and simple syrup, topped with sparkling soda and garnished with a lime wheel and fresh mint sprig' },
      { name: 'Fusion Berry',       price: 7.00, description: 'Raspberry puree, strawberry syrup, and fresh lime juice, topped with lemonade and garnished with fresh strawberry and mint' },
      { name: 'Rosy Delight',       price: 7.00, description: 'Sweet rose syrup fused with tart lemon and cranberry juices, shaken with fresh mint and finished with sparkling lemonade' },
    ],
  },

  // ─── SPRITZ ───────────────────────────────────────────────────────────────
  'Spritz': {
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1400&q=80',
    items: [
      { name: 'Aperol Spritz',   price: 8.90, description: 'Aperol topped with Prosecco and soda, served over ice with orange' },
      { name: 'Lychee Spritz',   price: 8.90, description: 'Kwai Feh lychee liqueur, dry gin, and house lychee syrup, topped with Prosecco and a splash of lemon' },
      { name: 'Michello Spritz', price: 8.50, description: 'House special mint clove syrup, Limoncello topped with Prosecco and soda, served over ice with lemon and mint' },
      { name: 'Hugo Spritz',     price: 8.90, description: 'St-Germain elderflower liqueur topped with Prosecco & soda, served over ice with lime and mint' },
      { name: 'Peach Spritz',    price: 8.90, description: "Gordon's Peach Gin and sweet peach schnapps fused with peach syrup and tart lemon juice, finished with bubbly Prosecco" },
      { name: 'Whisky Spritz',   price: 8.90, description: 'Smooth Jameson whiskey blended with crisp apple and tart lemon juice, topped with fiery ginger beer for a refreshing, sparkling finish' },
    ],
  },

  // ─── WINE ─────────────────────────────────────────────────────────────────
  'Wine': {
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1400&q=80',
    note: 'Available by the glass (175ml / 250ml) or bottle',
    items: [
      // White
      { name: 'Premium House Turkish White Wine — Kayra', price: 35.00, description: 'Fresh Asian pear, yellow plum, and white peach balanced by soft jasmine blossoms, subtle chamomile, and bright lemon zest · Bottle only £35.00' },
      { name: 'Turkish White Wine — Doluca Villa',        price: 7.90,  description: 'Crisp green apple, juicy white peach, and sun-ripened pear with delicate jasmine blossoms and fresh lemon zest · 175ml £7.90 · 250ml £9.40 · Bottle £27.50' },
      { name: 'Pinot Grigio',                             price: 7.50,  description: 'Light and refreshing, with crisp aromas of green pear, apple, and a hint of citrus. Clean on the palate with bright acidity and a smooth, dry finish · 175ml £7.50 · 250ml £9.00 · Bottle £26.50' },
      { name: 'Sauvignon Blanc',                          price: 7.50,  description: 'Bright and expressive, with aromas of lime, grapefruit and green apple, complemented by subtle herbal and fresh grassy notes. Crisp acidity and a refreshing, zesty finish · 175ml £7.50 · 250ml £9.00 · Bottle £26.50' },
      { name: 'Chardonnay',                               price: 7.40,  description: 'Smooth and well-balanced, with aromas of ripe apple, pear and citrus, layered with gentle notes of butter and vanilla. Medium-bodied and finished cleanly with elegant warmth · 175ml £7.40 · 250ml £8.50 · Bottle £25.00' },
      // Red
      { name: 'Premium House Turkish Red Wine — Kayra',   price: 35.00, description: 'Fresh red cherry, wild strawberry, and ripe dark plum lifted by white jasmine blossoms, sweet pomegranate, and a touch of warm baking spice · Bottle only £35.00' },
      { name: 'Turkish Red Wine — Doluca Villa',          price: 7.90,  description: 'Ripe red cherry, wild strawberry, and dark plum balanced by subtle black pepper, Mediterranean herbs, and a touch of warm spice · 175ml £7.90 · 250ml £9.50 · Bottle £28.00' },
      { name: 'Malbec',                                   price: 7.50,  description: 'Deep and expressive, with aromas of blackberry, plum and dark cherry, layered with hints of spice and cocoa. Full-flavoured, smooth tannins and a long, rounded finish · 175ml £7.50 · 250ml £9.20 · Bottle £27.00' },
      { name: 'Merlot',                                   price: 7.50,  description: 'Rich and velvety, showing ripe plum, black cherry and soft spice aromas. Smooth tannins, a rounded palate and a long, polished finish · 175ml £7.50 · 250ml £9.00 · Bottle £26.50' },
      { name: 'Shiraz',                                   price: 7.20,  description: 'Rich and full-bodied with deep dark fruit notes, subtle peppery spice, and a smooth, lingering finish · 175ml £7.20 · 250ml £8.50 · Bottle £25.00' },
      // Rosé
      { name: 'Pinot Grigio Blush',                       price: 7.20,  description: '175ml £7.20 · 250ml £8.50 · Bottle £25.00' },
      { name: 'Zinfandel Rosé',                           price: 7.20,  description: '175ml £7.20 · 250ml £8.50 · Bottle £25.00' },
      // Sparkling
      { name: 'Prosecco',                                 price: 7.50,  description: '200ml £7.50 · Bottle £26.50' },
      { name: 'Prosecco Rosé',                            price: 7.50,  description: '200ml £7.50 · Bottle £26.50' },
    ],
  },

  // ─── BEERS & CIDERS ───────────────────────────────────────────────────────
  'Beers & Ciders': {
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=1400&q=80',
    note: 'All beers & ciders served in bottle',
    items: [
      { name: 'Efes Draft',                 price: 6.50, description: '500ml' },
      { name: 'Peroni Large',               price: 6.90, description: '620ml' },
      { name: 'Peroni Small',               price: 4.90, description: '330ml' },
      { name: 'Peroni Zero',                price: 4.90, description: '330ml — alcohol free' },
      { name: 'Corona',                     price: 4.90, description: '330ml' },
      { name: 'Moretti',                    price: 4.90, description: '330ml' },
      { name: 'Kopparberg Strawberry Lime', price: 6.20, description: '500ml' },
      { name: 'Kopparberg Mixed Fruits',    price: 6.20, description: '500ml' },
      { name: 'Kopparberg 0%',              price: 5.90, description: '500ml — alcohol free' },
    ],
  },

  // ─── SPIRITS ──────────────────────────────────────────────────────────────
  'Spirits': {
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=1400&q=80',
    items: [
      // Whisky & Bourbon
      { name: 'Jim Beam Bourbon',                                          price: 4.90, description: '25ml £4.90 · 50ml £7.00' },
      { name: 'Jack Daniels',                                              price: 5.50, description: '25ml £5.50 · 50ml £8.00' },
      { name: 'Jameson',                                                   price: 5.50, description: '25ml £5.50 · 50ml £7.50' },
      { name: 'Glenfiddich',                                               price: 6.50, description: '25ml £6.50 · 50ml £9.50' },
      // Rum
      { name: 'Captain Morgan White',                                      price: 4.50, description: '25ml £4.50 · 50ml £7.50' },
      { name: 'Captain Morgan Spiced',                                     price: 4.50, description: '25ml £4.50 · 50ml £7.50' },
      { name: 'Bacardi',                                                   price: 4.90, description: '25ml £4.90 · 50ml £7.80' },
      { name: 'Malibu Coconut',                                            price: 4.90, description: '25ml £4.90 · 50ml £7.80' },
      { name: 'Kraken',                                                    price: 4.90, description: '25ml £4.90 · 50ml £7.80' },
      { name: 'Cane Trader White Rum',                                     price: 3.90, description: '25ml £3.90 · 50ml £6.00' },
      { name: 'Cane Trader Spiced Rum',                                    price: 3.90, description: '25ml £3.90 · 50ml £6.00' },
      { name: 'Cane Trader Dark Rum',                                      price: 3.90, description: '25ml £3.90 · 50ml £6.00' },
      { name: 'Sagatiba Cristalina Cachaça',                               price: 5.50, description: '25ml £5.50 · 50ml £7.90' },
      // Vodka
      { name: 'Smirnoff',                                                  price: 4.50, description: '25ml £4.50 · 50ml £7.50' },
      { name: 'Absolut Vodka',                                             price: 4.90, description: '25ml £4.90 · 50ml £8.00' },
      { name: 'Absolut Vanilla',                                           price: 4.90, description: '25ml £4.90 · 50ml £8.00' },
      { name: 'Alfred Button Smooth Triple Distilled',                     price: 5.50, description: '25ml £5.50 · 50ml £8.50' },
      { name: 'Grey Goose',                                                price: 6.50, description: '25ml £6.50 · 50ml £9.50' },
      { name: 'Belvedere',                                                 price: 6.50, description: '25ml £6.50 · 50ml £9.50' },
      // Gins
      { name: 'Beefeater Dry Gin',                                         price: 4.00, description: '25ml £4.00 · 50ml £7.50' },
      { name: 'Beefeater Pink Gin',                                        price: 4.00, description: '25ml £4.00 · 50ml £7.50' },
      { name: "Gordon's Pink Gin",                                         price: 4.20, description: '25ml £4.20 · 50ml £7.80' },
      { name: 'Edinburgh Pink Gin',                                        price: 4.20, description: '25ml £4.20 · 50ml £7.80' },
      { name: 'Tanqueray Sevilla Gin',                                     price: 4.50, description: '25ml £4.50 · 50ml £8.00' },
      { name: 'Tanqueray No.10 Gin',                                       price: 4.50, description: '25ml £4.50 · 50ml £8.00' },
      { name: 'Whitley Gin (Black Cherry, Blackberry, Blood Orange & Raspberry)', price: 4.20, description: '25ml £4.20 · 50ml £7.50' },
      // Tequila
      { name: 'Don Angel Tequila',                                         price: 3.90, description: '25ml £3.90' },
      { name: 'Casamigos Tequila',                                         price: 4.90, description: '25ml £4.90' },
      // Liqueurs
      { name: 'Baileys',                                                   price: 7.10, description: '50ml £7.10' },
      { name: 'Disaronno',                                                 price: 6.50, description: '25ml £6.50 · 50ml £7.10' },
      { name: 'Courvoisier Cognac',                                        price: 4.80, description: '25ml £4.80 · 50ml £6.50' },
      { name: 'Martell Cognac',                                            price: 4.80, description: '25ml £4.80 · 50ml £6.50' },
    ],
  },

  // ─── RAKI ─────────────────────────────────────────────────────────────────
  'Raki': {
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=1400&q=80',
    items: [
      { name: 'Yeni Raki 25ml',        price: 4.00,  description: '' },
      { name: 'Yeni Raki 50ml',        price: 7.00,  description: '' },
      { name: 'Yeni Raki 35cl Bottle', price: 35.00, description: '' },
      { name: 'Yeni Raki 70cl Bottle', price: 65.00, description: '' },
    ],
  },

  // ─── SOFT DRINKS ──────────────────────────────────────────────────────────
  'Soft Drinks': {
    image: 'https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?auto=format&fit=crop&w=1400&q=80',
    items: [
      { name: 'Coca-Cola',             price: 3.90, tags: ['VG'], description: '330ml' },
      { name: 'Diet Coke',             price: 3.90, tags: ['VG'], description: '330ml' },
      { name: 'Coke Zero',             price: 3.90, tags: ['VG'], description: '330ml' },
      { name: 'Sprite',                price: 3.90, tags: ['VG'], description: '330ml' },
      { name: 'Fanta',                 price: 3.90, tags: ['VG'], description: '330ml' },
      { name: 'Appletiser',            price: 3.90, tags: ['VG'], description: '275ml' },
      { name: 'Soda Water',            price: 2.80, tags: ['VG'], description: '200ml' },
      { name: 'Lemonade',              price: 2.80, tags: ['VG'], description: '200ml' },
      { name: 'Tonic Water',           price: 2.80, tags: ['VG'], description: '200ml' },
      { name: 'Slimline Tonic',        price: 2.80, tags: ['VG'], description: '200ml' },
      { name: 'Orange Juice',          price: 3.00, tags: ['VG'], description: '' },
      { name: 'Pineapple Juice',       price: 3.00, tags: ['VG'], description: '' },
      { name: 'Cranberry Juice',       price: 3.00, tags: ['VG'], description: '' },
      { name: 'Apple Juice',           price: 3.00, tags: ['VG'], description: '' },
      { name: 'Ginger Beer',           price: 3.20, tags: ['VG'], description: '' },
      { name: 'Maison Perrier',        price: 3.90, tags: ['VG'], description: '330ml' },
      { name: 'Sparkling Water',       price: 2.80, tags: ['VG'], description: '330ml' },
      { name: 'Mineral Water',         price: 2.80, tags: ['VG'], description: '330ml' },
      { name: 'Large Mineral Water',   price: 5.80, tags: ['VG'], description: '750ml' },
      { name: 'Large Sparkling Water', price: 5.80, tags: ['VG'], description: '750ml' },
      { name: 'Lime Cordial',          price: 0.90, tags: ['VG'], description: '' },
      { name: 'Blackcurrant Cordial',  price: 0.90, tags: ['VG'], description: '' },
      { name: 'Orange Cordial',        price: 0.90, tags: ['VG'], description: '' },
    ],
  },

  // ─── HOT DRINKS ───────────────────────────────────────────────────────────
  'Hot Drinks': {
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1400&q=80',
    note: 'Iced coffee options available — please ask',
    items: [
      { name: 'English Breakfast Tea', price: 2.60, tags: ['VG'], description: '' },
      { name: 'Turkish Tea',           price: 1.80, tags: ['VG'], description: '' },
      { name: 'Mint Tea',              price: 3.00, tags: ['VG'], description: '' },
      { name: 'Green Tea',             price: 3.00, tags: ['VG'], description: '' },
      { name: 'Americano',             price: 3.20, tags: ['VG'], description: '' },
      { name: 'Latte',                 price: 3.90, tags: ['V'],  description: '' },
      { name: 'Cappuccino',            price: 3.60, tags: ['V'],  description: '' },
      { name: 'Mocha',                 price: 3.90, tags: ['V'],  description: '' },
      { name: 'Espresso',              price: 2.80, tags: ['VG'], description: '' },
      { name: 'Turkish Coffee',        price: 3.00, tags: ['VG'], description: '' },
      { name: 'Hot Chocolate',         price: 3.60, tags: ['V'],  description: '' },
      { name: 'Add Syrup',             price: 0.50, tags: ['VG'], description: '' },
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
