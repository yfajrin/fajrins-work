const SHOP_DATA = [
  {
    title: 'Indonesia',
    items: [
      {
        id: 1,
        name: 'Celebes Toraja',
        imageUrl: 'https://i.ibb.co/XSWs4yP/celebes-toraja.png',
        price: 25,
	flavor: 'Deep and gloomy, with subdued fruit flavors, rustic sweetness, and frequently a pungent spicy quality'
      },
      {
        id: 2,
        name: 'Java Preanger',
        imageUrl: 'https://i.ibb.co/Fmvqfq5/java-preanger.png',
        price: 18,
	flavor: 'Blueberry and jasmine aroma, with sweet aftertaste of vanilla, lychee, caramel, dark chocolate, and apricot'
      },
      {
        id: 3,
        name: 'Bali Kintamani',
        imageUrl: 'https://i.ibb.co/DG1bXNm/bali-kintamani.png',
        price: 35,
	flavor: 'Rich scent, a smokey (wood) flavor, cherry-brandy character, and a robust body'
      },
      {
        id: 4,
        name: 'Aceh Gayo',
        imageUrl: 'https://i.ibb.co/Yt3nFq4/aceh-gayo.png',
        price: 25,
	flavor: 'A spicy aroma and dark choco flavor with sugar cane, full body with acid light.'
      },
      {
        id: 5,
        name: 'Flores Bajava',
        imageUrl: 'https://i.ibb.co/Y74TY53/flores-bajava.png',
        price: 18,
	flavor: 'Sweet, milk chocolate flavor with flowery, woody overtones and a syrupy mouthfeel'
      },
      {
        id: 6,
        name: 'Java Argopuro',
        imageUrl: 'https://i.ibb.co/4TJv9bd/java-argopuro.png',
        price: 14,
	flavor: 'Nutty aroma and a malty, chocolatey, bright, sweet flavor'
      },
      {
        id: 7,
        name: 'Sumatra Kerintji',
        imageUrl: 'https://i.ibb.co/23GBHbn/sumatra-kerinci.png',
        price: 18,
	flavor: ' Fruity melon, dark chocolate, and hints of sweet candy after taste'
      },
      {
        id: 8,
        name: 'Toba Lintong',
        imageUrl: 'https://i.ibb.co/sJnJtv5/toba-lintong.png',
        price: 14,
	flavor: 'A sweet flavor profile, a medium body, moderate acidity, an earthy, complex scent, and a distinct cedar and spice flavor'
      },
      {
        id: 9,
        name: 'Sumatra Mandheling',
        imageUrl: 'https://i.ibb.co/WF2WWqq/sumatra-mandheling.png',
        price: 16,
	flavor: 'Velvety body, moderate acidity, and a smooth finish with robust cinnamon, cardamom, and black pepper.'
      },
    ],
  },
  {
    title: 'Jamaica & Guatemala',
    items: [
      {
        id: 10,
        name: 'Blue Mountain',
        imageUrl: 'https://i.ibb.co/gRTg9vW/jamaica-blue-mountain.png',
        price: 120,
	flavor: 'Sweet, floral taste, bright acidity and lack of bitterness'
      },
      {
        id: 11,
        name: 'High Mountain',
        imageUrl: 'https://i.ibb.co/vZ5GMPh/jamaica-high-mountain.png',
        price: 50,
	flavor: 'Fruity flavors of spices with notes of honey, melon and orange'
      },
      {
        id: 12,
        name: 'Huehuetenango',
        imageUrl: 'https://i.ibb.co/C7hbmmY/guatemala-nuevo-oriente.png',
        price: 40,
	flavor: 'Maple, floral, peach and chocolate'
      },
      {
        id: 13,
        name: 'Coban Macadamia',
        imageUrl: 'https://i.ibb.co/ZLkD9ny/guatemala-coban-macadamia.png',
        price: 20,
	flavor: 'Profile of blood orange, macadamia with a sweet finish.'
      },
      {
        id: 14,
        name: 'Antigua Acatenango',
        imageUrl: 'https://i.ibb.co/rpfJFzW/guatemala-antigua-acatenango.png',
        price: 30,
	flavor: 'Chocolate, caramel and citrus'
      },
      {
        id: 15,
        name: 'Fraijanes Plateau',
        imageUrl: 'https://i.ibb.co/WK31bNS/guatemala-fraijanes-plateau.png',
        price: 25,
	flavor: 'Milk chocolate, toffee with sharp acidity'
      },
      {
        id: 16,
        name: 'San Marcos Volcan',
        imageUrl: 'https://i.ibb.co/jML3f0F/guatemala-san-marcos-volcan.png',
        price: 19,
	flavor: 'Floral notes with distinctive acidity'
      },
      {
        id: 17,
        name: 'Nuevo Oriente',
        imageUrl: 'https://i.ibb.co/HgZHdYG/guatemala-huehuetenango.png',
        price: 27,
	flavor: 'Nutty milk chocolate end of the spectrum, with just a hint of black cherry in the after-taste'
      },
    ],
  },
  {
    title: 'Ethiopia',
    items: [
      {
        id: 18,
        name: 'Yirgacheffe Heirloom',
        imageUrl: 'https://i.ibb.co/Wpd7M4J/ethiopia-yirgacheffe-heirloom.png',
        price: 25,
	flavor: 'citrus acidity, medium body, herbal notes, high sweetness, bergamot aroma'
      },
      {
        id: 19,
        name: 'Harrar Geisha',
        imageUrl: 'https://i.ibb.co/D9bqNbx/ethiopia-harrar-geisha.png',
        price: 30,
	flavor: 'Fruity, creamy body, blueberry notes'
      },
      {
        id: 20,
        name: 'Sidama Shai',
        imageUrl: 'https://i.ibb.co/t4NWZtC/ethiopia-sidama-shai.png',
        price: 20,
	flavor: 'Varied, intense fruity flavour, tea-like body'
      },
      {
        id: 21,
        name: 'Jimma Buna',
        imageUrl: 'https://i.ibb.co/B3nqJPw/ethiopia-jimma-buna.png',
        price: 15,
	flavor: 'Fruity with cocoa and tea notes'
      },
      {
        id: 22,
        name: 'Limmu Wine',
        imageUrl: 'https://i.ibb.co/0tFN3Wy/ethiopia-limmu-wine.png',
        price: 25,
	flavor: 'Well-balanced with wine notes'
      },
    ],
  },
  {
    title: 'Brazil',
    items: [
      {
        id: 23,
        name: 'Bourbon Santos',
        imageUrl: 'https://i.ibb.co/VLb5ZL5/brazil-bourbon-santos.png',
        price: 25,
	flavor: 'Soft, nutty, low acid, with nice bittersweet chocolate tastes'
      },
      {
        id: 24,
        name: 'Bahia Cerrado',
        imageUrl: 'https://i.ibb.co/xmR3VLv/brazil-bahia-cerrado.png',
        price: 20,
	flavor: 'Notes of caramel, chocolate, nuts, and spice, and are less on the fruitier side'
      },
      {
        id: 25,
        name: 'Mogiana High',
        imageUrl: 'https://i.ibb.co/Nnws2SK/brazil-mogiana-high.png',
        price: 20,
	flavor: 'Hints of chocolate, caramel, or slightly nutty notes that shine through.'
      },
      {
        id: 26,
        name: 'Conilon Capixaba',
        imageUrl: 'https://i.ibb.co/G0xJsQ6/brazil-conilon-capixaba.png',
        price: 30,
	flavor: 'Rich, chocolatey, and nutty notes with medium acidity'
      },
      {
        id: 27,
        name: 'Montanhas de Espirito Santo',
        imageUrl: 'https://i.ibb.co/L9hLSMh/brazil-montanhas-de-espirito-santo.png',
        price: 15,
	flavor: 'Low acidity, smooth-bodied, and sweet with chocolate taste'
      },
      {
        id: 28,
        name: 'Centre-Oeste Icatu',
        imageUrl: 'https://i.ibb.co/tXwS7VY/brazil-centre-oeste-icatu.png',
        price: 135,
	flavor: 'Cocoa, maple, and malt flavors'
      },
      {
        id: 29,
        name: 'Minas Gerais',
        imageUrl: 'https://i.ibb.co/52Bkvdn/brazil-minas-gerais.png',
        price: 20,
	flavor: 'Full bodied with fruity aromas and citric flavors'
      },
    ],
  },
  {
    title: 'Colombia',
    items: [
      {
        id: 30,
        name: 'Caldas Maragogype',
        imageUrl: 'https://i.ibb.co/fQQh3vm/colombia-caldas-maragogype.png',
        price: 25,
	flavor: 'Notes of chocolate, nuts, herbs, fruit, and a citrusy acidity'
      },
      {
        id: 31,
        name: 'Quindío Castillo',
        imageUrl: 'https://i.ibb.co/K0TMjF5/colombia-quind-o-castillo.png',
        price: 20,
	flavor: 'A medium, silky body, tropical notes, and fruity, spicy aroma'
      },
      {
        id: 32,
        name: 'Risaralda Caturra',
        imageUrl: 'https://i.ibb.co/vzrRtJc/colombia-risaralda-caturra.png',
        price: 25,
	flavor: 'Mellow acidity and a strong caramel sweetness, with a nutty undertone'
      },
      {
        id: 33,
        name: 'Santander Sué',
        imageUrl: 'https://i.ibb.co/gRRFW6M/colombia-santander-su.png',
        price: 25,
	flavor: 'Medium-bodied taste, fruity citrus-like acidity, with a hint of caramel'
      },
      {
        id: 34,
        name: 'Nariño Triangle',
        imageUrl: 'https://i.ibb.co/bNzbmJd/colombia-nari-o-triangle.png',
        price: 40,
	flavor: 'Fruit and caramel notes, sweet acidity, and intense aromas'
      },
      {
        id: 35,
        name: 'Huila Origin',
        imageUrl: 'https://i.ibb.co/RYdBjZh/colombia-huila-origin.png',
        price: 25,
	      flavor: 'Silky body, cane sugar sweetness, floral with hints of tropical fruits'
      },
    ],
  },
  {
    title: 'Vietnam',
    items: [
      {
        id: 36,
        name: 'Da Lat',
        imageUrl: 'https://i.ibb.co/6PdHgkM/vietnam-da-lat.png',
        price: 12,
	flavor: 'Medium full-bodied roast with rich notes of chocolate, vanilla, and caramel'
      },
      {
        id: 37,
        name: 'Dien Bien',
        imageUrl: 'https://i.ibb.co/YRk8P1H/vietnam-dien-bien.png',
        price: 20,
	      flavor: 'Dark cocoa, mocha, chicory, vanilla, and butter'
      },
      {
        id: 38,
        name: 'Nghe An',
        imageUrl: 'https://i.ibb.co/HFvpv4r/vietnam-nghe-an.png',
        price: 15,
	      flavor: 'Sweet, milky taste, with a feature of earthy notes '
      },
      {
        id: 39,
        name: 'Son La',
        imageUrl: 'https://i.ibb.co/cDPKT5m/vietnam-son-la.png',
        price: 25,
	flavor: 'Dark tone with chocolatey and spicy notes'
      },
      {
        id: 40,
        name: 'Quang Tri',
        imageUrl: 'https://i.ibb.co/GtmRNhs/vietnam-quang-tri.png',
        price: 20,
	      flavor: 'Strong and bold with very deep flavors and complex flavor notes'
      },
    ],
  },
];

export default SHOP_DATA