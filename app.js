/* ==========================================================================
   PASTELARIA CLAEM & EMPANADAS - LOGIC & APPLICATION ENGINE
   Onira Labs - High Performance Web Application
   ========================================================================== */

// Local Custom High-Res Brazilian Pastéis Images
const PASTEL_IMGS = {
    carne: 'assets/pastel_carne.png',
    queijo: 'assets/pastel_queijo.png',
    doce: 'assets/pastel_doce.png',
    fritas: 'assets/fritas.jpg',
    empanada: 'assets/foto-empanada.jpg',
    bebida: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
    suco: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80',
    torrada: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80'
};

// Fotos reais dos produtos, feitas na casa (substituem os placeholders acima
// item a item conforme chegam — cardápio ainda tem itens sem foto própria).
const FOTOS_REAIS = {
    carneDePanela: 'assets/foto-carne-de-panela.jpg',
    calabresa: 'assets/foto-calabresa.jpg',
    calabresaQueijo: 'assets/foto-calabresa-queijo.jpg',
    baconQueijoMilho: 'assets/foto-bacon-queijo-milho.jpg',
    bananaCanela: 'assets/foto-banana-canela.jpg',
    bananaChocolate: 'assets/foto-banana-chocolate.jpg',
    chocolatePreto: 'assets/foto-chocolate-preto.jpg',
    chocolateBranco: 'assets/foto-chocolate-branco.jpg',
    chocolateAmendoim: 'assets/foto-chocolate-amendoim.jpg',
    chocolateQuente: 'assets/foto-chocolate-quente.jpg',
    cafeComLeite: 'assets/foto-cafe-com-leite.jpg',
    frangoCatupiry: 'assets/foto-frango-catupiry.jpg',
    carneOvo: 'assets/foto-carne-ovo.jpg',
    carneAzeitona: 'assets/foto-carne-azeitona.jpg',
    carneQueijo: 'assets/foto-carne-queijo.jpg',
    morangoMoreno: 'assets/foto-morango-moreno.jpg',
    palmitoQueijo: 'assets/foto-palmito-queijo.jpg',
    pizza: 'assets/foto-pizza.jpg',
    porcaoPastel: 'assets/foto-porcao-pastel.jpg',
    prestigio: 'assets/foto-prestigio.jpg',
    presuntoQueijo: 'assets/foto-presunto-queijo.jpg',
    queijo: 'assets/foto-queijo.jpg',
    queijoMilho: 'assets/foto-queijo-milho.jpg',
    romeuJulieta: 'assets/foto-romeu-julieta.jpg',
    sucoMorango: 'assets/foto-suco-morango.jpg',
    torrada: 'assets/foto-torrada.jpg',
    frangoDesfiado: 'assets/foto-frango-desfiado.jpg',
    frangoQueijo: 'assets/foto-frango-queijo.jpg'
};

// Menu Database CLAEM
const PRODUCTS_DATA = [
    // --- PASTÉIS SALGADOS ---
    {
        id: 'pas-1',
        title: 'Pastel de Carne com Ovo',
        category: 'salgados',
        desc: 'Massa crocante e sequinha recheada com carne moída, ovo picadinho e tempero verde fresco.',
        prices: { P: 2.50, G: 10.00, DEZ: 24.00 },
        badge: 'Clássico',
        image: FOTOS_REAIS.carneOvo,
        rating: '4.9',
        hasSizes: true
    },
    {
        id: 'pas-2',
        title: 'Pastel de Carne de Panela',
        category: 'salgados',
        desc: 'Carne de panela cozida lentamente, desfiada com temperos coloniais.',
        prices: { P: 5.00, G: 15.00, DEZ: 45.00 },
        badge: 'Mais Vendido',
        image: FOTOS_REAIS.carneDePanela,
        rating: '5.0',
        hasSizes: true
    },
    {
        id: 'pas-3',
        title: 'Pastel de Carne com Queijo',
        category: 'salgados',
        desc: 'Recheio de carne moída, ovo e tempero verde combinado com queijo mussarela derretido.',
        prices: { P: 3.50, G: 12.00, DEZ: 28.00 },
        image: FOTOS_REAIS.carneQueijo,
        rating: '4.9',
        hasSizes: true
    },
    {
        id: 'pas-4',
        title: 'Pastel de Carne com Azeitona',
        category: 'salgados',
        desc: 'Recheio de carne moída, ovo e tempero verde, acompanhado de azeitonas verdes fatiadas.',
        prices: { P: 3.50, G: 12.00, DEZ: 28.00 },
        image: FOTOS_REAIS.carneAzeitona,
        rating: '4.8',
        hasSizes: true
    },
    {
        id: 'pas-5',
        title: 'Pastel de Frango Desfiado',
        category: 'salgados',
        desc: 'Frango desfiado super macio e temperado.',
        prices: { P: 3.50, G: 12.00, DEZ: 28.00 },
        image: FOTOS_REAIS.frangoDesfiado,
        rating: '4.8',
        hasSizes: true
    },
    {
        id: 'pas-6',
        title: 'Pastel de Frango com Queijo',
        category: 'salgados',
        desc: 'Frango desfiado com generosa camada de queijo mussarela derretido.',
        prices: { P: 3.50, G: 12.00, DEZ: 28.00 },
        image: FOTOS_REAIS.frangoQueijo,
        rating: '4.9',
        hasSizes: true
    },
    {
        id: 'pas-7',
        title: 'Pastel de Frango com Catupiry',
        category: 'salgados',
        desc: 'Frango com o verdadeiro e cremoso queijo tipo Catupiry.',
        prices: { P: 3.50, G: 12.00, DEZ: 28.00 },
        badge: 'Favorito',
        image: FOTOS_REAIS.frangoCatupiry,
        rating: '5.0',
        hasSizes: true
    },
    {
        id: 'pas-8',
        title: 'Pastel Presunto com Queijo',
        category: 'salgados',
        desc: 'O tradicional pastel misto de presunto e queijo quentinho.',
        prices: { P: 3.50, G: 12.00, DEZ: 28.00 },
        image: FOTOS_REAIS.presuntoQueijo,
        rating: '4.9',
        hasSizes: true
    },
    {
        id: 'pas-9',
        title: 'Pastel de Pizza',
        category: 'salgados',
        desc: 'Presunto, queijo mussarela, orégano e molho de tomate feito em casa.',
        prices: { P: 3.50, G: 12.00, DEZ: 28.00 },
        image: FOTOS_REAIS.pizza,
        rating: '4.8',
        hasSizes: true
    },
    {
        id: 'pas-10',
        title: 'Pastel Palmito com Queijo',
        category: 'salgados',
        desc: 'Palmito macio fatiado envolvido em mussarela derretida.',
        prices: { P: 3.50, G: 12.00, DEZ: 28.00 },
        image: FOTOS_REAIS.palmitoQueijo,
        rating: '4.8',
        hasSizes: true
    },
    {
        id: 'pas-11',
        title: 'Pastel de Calabresa',
        category: 'salgados',
        desc: 'Calabresa fatiada levemente acebolada na massa frita.',
        prices: { P: 3.50, G: 12.00, DEZ: 28.00 },
        image: FOTOS_REAIS.calabresa,
        rating: '4.8',
        hasSizes: true
    },
    {
        id: 'pas-12',
        title: 'Pastel Calabresa com Queijo',
        category: 'salgados',
        desc: 'Calabresa bem dourada com mussarela cremosa.',
        prices: { P: 3.50, G: 12.00, DEZ: 28.00 },
        image: FOTOS_REAIS.calabresaQueijo,
        rating: '4.9',
        hasSizes: true
    },
    {
        id: 'pas-13',
        title: 'Pastel Apenas Queijo',
        category: 'salgados',
        desc: 'Mussarela pura derretendo a cada mordida.',
        prices: { P: 3.50, G: 12.00, DEZ: 28.00 },
        image: FOTOS_REAIS.queijo,
        rating: '4.9',
        hasSizes: true
    },
    {
        id: 'pas-14',
        title: 'Pastel Queijo com Milho',
        category: 'salgados',
        desc: 'Queijo mussarela com milho doce selecionado.',
        prices: { P: 3.50, G: 12.00, DEZ: 28.00 },
        image: FOTOS_REAIS.queijoMilho,
        rating: '4.8',
        hasSizes: true
    },
    {
        id: 'pas-15',
        title: 'Pastel Bacon, Queijo e Milho',
        category: 'salgados',
        desc: 'Bacon crocante em cubos, queijo mussarela e milho verde.',
        prices: { P: 3.50, G: 12.00, DEZ: 28.00 },
        badge: 'Top Vendas',
        image: FOTOS_REAIS.baconQueijoMilho,
        rating: '5.0',
        hasSizes: true
    },

    // --- PASTÉIS DOCES ---
    {
        id: 'doc-1',
        title: 'Pastel Romeu e Julieta',
        category: 'doces',
        desc: 'Combinação clássica de goiabada cremosa com queijo mussarela.',
        prices: { P: 3.50, G: 12.00, DEZ: 28.00 },
        badge: 'Clássico Doce',
        image: FOTOS_REAIS.romeuJulieta,
        rating: '4.9',
        hasSizes: true
    },
    {
        id: 'doc-2',
        title: 'Pastel Banana com Canela',
        category: 'doces',
        desc: 'Rodelas de banana fatiada polvilhada com açúcar e canela.',
        prices: { P: 2.50, G: 10.00, DEZ: 24.00 },
        image: FOTOS_REAIS.bananaCanela,
        rating: '4.8',
        hasSizes: true
    },
    {
        id: 'doc-3',
        title: 'Pastel Banana com Chocolate',
        category: 'doces',
        desc: 'Banana fresca envolvida em chocolate ao leite derretido.',
        prices: { P: 3.50, G: 12.00, DEZ: 28.00 },
        image: FOTOS_REAIS.bananaChocolate,
        rating: '4.9',
        hasSizes: true
    },
    {
        id: 'doc-4',
        title: 'Pastel Chocolate Preto',
        category: 'doces',
        desc: 'Recheado com generoso chocolate ao leite cremoso.',
        prices: { P: 3.50, G: 12.00, DEZ: 28.00 },
        image: FOTOS_REAIS.chocolatePreto,
        rating: '4.9',
        hasSizes: true
    },
    {
        id: 'doc-5',
        title: 'Pastel Chocolate Branco',
        category: 'doces',
        desc: 'Delicioso recheio de chocolate branco derretido.',
        prices: { P: 3.50, G: 12.00, DEZ: 28.00 },
        image: FOTOS_REAIS.chocolateBranco,
        rating: '4.9',
        hasSizes: true
    },
    {
        id: 'doc-6',
        title: 'Pastel Prestígio',
        category: 'doces',
        desc: 'Chocolate ao leite combinado com beijinho de coco ralado.',
        prices: { P: 3.50, G: 12.00, DEZ: 28.00 },
        badge: 'Delícia',
        image: FOTOS_REAIS.prestigio,
        rating: '4.9',
        hasSizes: true
    },
    {
        id: 'doc-7',
        title: 'Pastel Chocolate com Amendoim',
        category: 'doces',
        desc: 'Chocolate preto com pedacinhos de amendoim crocante.',
        prices: { P: 3.75, G: 13.00, DEZ: 31.00 },
        image: FOTOS_REAIS.chocolateAmendoim,
        rating: '4.8',
        hasSizes: true
    },
    {
        id: 'doc-8',
        title: 'Pastel Morango Moreno',
        category: 'doces',
        desc: 'Morangos frescos selecionados cobertos de chocolate ao leite.',
        prices: { P: 3.75, G: 13.00, DEZ: 31.00 },
        badge: 'Top Doce',
        image: FOTOS_REAIS.morangoMoreno,
        rating: '5.0',
        hasSizes: true
    },

    // --- EMPANADAS ARTESANAIS ---
    {
        id: 'emp-1',
        title: 'Empanada Carne de Panela (Mechada)',
        category: 'empanadas',
        desc: 'Massa artesanal recheada com suculenta carne de panela desfiada temperada com especiarias da casa.',
        prices: { P: 15.00, G: 15.00 },
        badge: 'Mais Pedida',
        image: PASTEL_IMGS.empanada,
        rating: '5.0',
        hasSizes: false
    },
    {
        id: 'emp-2',
        title: 'Empanada de Frango Temperado',
        category: 'empanadas',
        desc: 'Empanada macia com peito de frango desfiado ao molho especial e ervas finas.',
        prices: { P: 15.00, G: 15.00 },
        badge: 'Favorito',
        image: PASTEL_IMGS.empanada,
        rating: '4.9',
        hasSizes: false
    },
    {
        id: 'emp-3',
        title: 'Empanada Salsicha com Queijo',
        category: 'empanadas',
        desc: 'Recheio cremoso de queijo derretido com rodelas de salsicha especial.',
        prices: { P: 15.00, G: 15.00 },
        image: PASTEL_IMGS.empanada,
        rating: '4.8',
        hasSizes: false
    },
    {
        id: 'emp-4',
        title: 'Empanada Carne Moída Tradicional',
        category: 'empanadas',
        desc: 'Massa douradinha recheada com carne moída, receita caseira da casa.',
        prices: { P: 15.00, G: 15.00 },
        image: PASTEL_IMGS.empanada,
        rating: '4.8',
        hasSizes: false
    },
    {
        id: 'emp-5',
        title: 'Empanada Gordo Blue de Frango',
        category: 'empanadas',
        desc: 'Super recheada com frango desfiado, presunto selecionado e muito queijo derretido.',
        prices: { P: 20.00, G: 20.00 },
        badge: 'Especial',
        image: PASTEL_IMGS.empanada,
        rating: '5.0',
        hasSizes: false
    },
    {
        id: 'emp-6',
        title: 'Empanada Gordo Blue de Carne',
        category: 'empanadas',
        desc: 'Recheio generoso de carne de panela mechada, presunto e queijo mussarela.',
        prices: { P: 20.00, G: 20.00 },
        badge: 'Especial da Casa',
        image: PASTEL_IMGS.empanada,
        rating: '5.0',
        hasSizes: false
    },
    {
        id: 'emp-7',
        title: 'Empanada Pabellón',
        category: 'empanadas',
        desc: 'Receita tradicional venezuelana com ingredientes 100% autênticos: carne de panela mechada, feijão preto, queijo e banana da terra frita.',
        prices: { P: 20.00, G: 20.00 },
        badge: 'Receita Venezuelana',
        image: PASTEL_IMGS.empanada,
        rating: '5.0',
        hasSizes: false
    },

    // --- PORÇÕES DE PASTÉIS ---
    {
        id: 'por-1',
        title: 'Porção com 10 Pastéis P (Carne)',
        category: 'porcoes',
        desc: 'Cesta com 10 minipastéis crocantes de carne moída, ovo e tempero verde.',
        prices: { P: 24.00, G: 24.00 },
        badge: 'Para Compartilhar',
        image: FOTOS_REAIS.porcaoPastel,
        rating: '5.0',
        hasSizes: false
    },
    {
        id: 'por-2',
        title: 'Porção com 10 Pastéis P (Carne de Panela)',
        category: 'porcoes',
        desc: 'Cesta com 10 minipastéis recheados com carne de panela desfiada.',
        prices: { P: 45.00, G: 45.00 },
        badge: 'Especial',
        image: FOTOS_REAIS.carneDePanela,
        rating: '5.0',
        hasSizes: false
    },
    {
        id: 'por-3',
        title: 'Porção com 10 Pastéis P (Morango Moreno)',
        category: 'porcoes',
        desc: 'Cesta doce com 10 minipastéis de morango fresco com chocolate.',
        prices: { P: 31.00, G: 31.00 },
        badge: 'Porção Doce',
        image: FOTOS_REAIS.porcaoPastel,
        rating: '4.9',
        hasSizes: false
    },
    {
        id: 'por-4',
        title: 'Porção com 10 Pastéis P (Outros Sabores)',
        category: 'porcoes',
        desc: 'Escolha até 2 sabores tradicionais para sua cesta de 10 minipastéis.',
        prices: { P: 28.00, G: 28.00 },
        image: FOTOS_REAIS.porcaoPastel,
        rating: '4.8',
        hasSizes: false
    },

    // --- TORRADAS ---
    {
        id: 'tor-1',
        title: 'Torrada Completa CLAEM',
        category: 'lanches',
        desc: 'Pão fatiado tostado no capricho com alface, tomate fresco, ovo, presunto, queijo mussarela e maionese especial da casa.',
        prices: { P: 25.00, G: 25.00 },
        badge: 'Lanche Reforçado',
        image: FOTOS_REAIS.torrada,
        rating: '4.9',
        hasSizes: false
    },

    // --- BEBIDAS & SUCOS ---
    {
        id: 'beb-1',
        title: 'Chocolate Quente Cremoso',
        category: 'bebidas',
        desc: 'Taça cremosa de chocolate quente especial artesanal com raspa de chocolate.',
        prices: { P: 15.00, G: 15.00 },
        badge: 'Especial Quente',
        image: FOTOS_REAIS.chocolateQuente,
        rating: '5.0',
        hasSizes: false
    },
    {
        id: 'beb-2',
        title: 'Suco Natural (Morango / Abacaxi / Amora / Maracujá / Banana)',
        category: 'bebidas',
        desc: 'Suco feito na hora com fruta natural selecionada (500ml).',
        prices: { P: 15.00, G: 15.00 },
        badge: 'Natural',
        image: FOTOS_REAIS.sucoMorango,
        rating: '4.9',
        hasSizes: false
    },
    {
        id: 'beb-3',
        title: 'Café Preto Tradicional',
        category: 'bebidas',
        desc: 'Café passado na hora, encorpado e quentinho.',
        prices: { P: 6.00, G: 6.00 },
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
        rating: '4.8',
        hasSizes: false
    },
    {
        id: 'beb-4',
        title: 'Café com Leite',
        category: 'bebidas',
        desc: 'Café com leite quente e cremoso, com leite de primeira qualidade.',
        prices: { P: 6.00, G: 6.00 },
        image: FOTOS_REAIS.cafeComLeite,
        rating: '4.8',
        hasSizes: false
    },
    {
        id: 'beb-pingado',
        title: 'Pingado',
        category: 'bebidas',
        desc: 'Café passado na hora com um toque de leite.',
        prices: { P: 4.50, G: 4.50 },
        image: FOTOS_REAIS.cafeComLeite,
        rating: '4.8',
        hasSizes: false
    },
    {
        id: 'beb-agua',
        title: 'Água Mineral (Sem Gás 500ml)',
        category: 'bebidas',
        desc: 'Garrafa 500ml geladinha.',
        prices: { P: 5.00, G: 5.00 },
        image: 'https://images.unsplash.com/photo-1616118132534-381148898bb4?auto=format&fit=crop&w=600&q=80',
        rating: '4.8',
        hasSizes: false
    },
    {
        id: 'beb-agua-gas',
        title: 'Água Mineral (Com Gás 500ml)',
        category: 'bebidas',
        desc: 'Garrafa 500ml gaseificada e geladinha.',
        prices: { P: 5.00, G: 5.00 },
        image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=600&q=80',
        rating: '4.7',
        hasSizes: false
    },
    {
        id: 'beb-h2o',
        title: 'H2O',
        category: 'bebidas',
        desc: 'Bebida levemente gaseificada, geladinha.',
        prices: { P: 7.75, G: 7.75 },
        image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=600&q=80',
        rating: '4.7',
        hasSizes: false
    },
    {
        id: 'beb-icetea-500',
        title: 'Ice Tea 500ml',
        category: 'bebidas',
        desc: 'Chá gelado 500ml, geladinho.',
        prices: { P: 7.75, G: 7.75 },
        image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=600&q=80',
        rating: '4.8',
        hasSizes: false
    },
    {
        id: 'beb-coca-200',
        title: 'Coca-Cola 200ml',
        category: 'bebidas',
        desc: 'Garrafinha 200ml bem gelada.',
        prices: { P: 4.50, G: 4.50 },
        image: PASTEL_IMGS.bebida,
        rating: '4.9',
        hasSizes: false
    },
    {
        id: 'beb-guarana-200',
        title: 'Guaraná 200ml',
        category: 'bebidas',
        desc: 'Garrafinha 200ml bem gelada.',
        prices: { P: 4.50, G: 4.50 },
        image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?auto=format&fit=crop&w=600&q=80',
        rating: '4.8',
        hasSizes: false
    },
    {
        id: 'beb-coca-350',
        title: 'Coca-Cola 350ml',
        category: 'bebidas',
        desc: 'Lata 350ml trincando de gelada.',
        prices: { P: 7.75, G: 7.75 },
        image: PASTEL_IMGS.bebida,
        rating: '4.9',
        hasSizes: false
    },
    {
        id: 'beb-coca-zero-350',
        title: 'Coca-Cola Zero 350ml',
        category: 'bebidas',
        desc: 'Lata 350ml trincando de gelada.',
        prices: { P: 7.75, G: 7.75 },
        image: PASTEL_IMGS.bebida,
        rating: '4.8',
        hasSizes: false
    },
    {
        id: 'beb-sprite-350',
        title: 'Sprite 350ml',
        category: 'bebidas',
        desc: 'Lata 350ml trincando de gelada.',
        prices: { P: 7.75, G: 7.75 },
        image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80',
        rating: '4.8',
        hasSizes: false
    },
    {
        id: 'beb-coca-600',
        title: 'Coca-Cola 600ml',
        category: 'bebidas',
        desc: 'Garrafa 600ml gelada.',
        prices: { P: 9.75, G: 9.75 },
        image: PASTEL_IMGS.bebida,
        rating: '4.9',
        hasSizes: false
    },
    {
        id: 'beb-coca-zero-600',
        title: 'Coca-Cola Zero 600ml',
        category: 'bebidas',
        desc: 'Garrafa 600ml gelada.',
        prices: { P: 9.75, G: 9.75 },
        image: PASTEL_IMGS.bebida,
        rating: '4.8',
        hasSizes: false
    },
    {
        id: 'beb-fanta-600',
        title: 'Fanta Laranja 600ml',
        category: 'bebidas',
        desc: 'Garrafa 600ml gelada.',
        prices: { P: 9.75, G: 9.75 },
        image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=600&q=80',
        rating: '4.8',
        hasSizes: false
    },
    {
        id: 'beb-guarana-600',
        title: 'Guaraná 600ml',
        category: 'bebidas',
        desc: 'Garrafa 600ml gelada.',
        prices: { P: 9.75, G: 9.75 },
        image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?auto=format&fit=crop&w=600&q=80',
        rating: '4.8',
        hasSizes: false
    },
    {
        id: 'beb-coca-2l',
        title: 'Coca-Cola 2L',
        category: 'bebidas',
        desc: 'Garrafa pet 2 Litros bem gelada.',
        prices: { P: 14.50, G: 14.50 },
        image: PASTEL_IMGS.bebida,
        rating: '4.9',
        hasSizes: false
    },
    {
        id: 'beb-coca-zero-2l',
        title: 'Coca-Cola Zero 2L',
        category: 'bebidas',
        desc: 'Garrafa pet 2 Litros bem gelada.',
        prices: { P: 14.50, G: 14.50 },
        image: PASTEL_IMGS.bebida,
        rating: '4.8',
        hasSizes: false
    },
    {
        id: 'beb-fanta-2l',
        title: 'Fanta Laranja 2L',
        category: 'bebidas',
        desc: 'Garrafa pet 2 Litros bem gelada.',
        prices: { P: 14.50, G: 14.50 },
        image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=600&q=80',
        rating: '4.8',
        hasSizes: false
    },
    {
        id: 'beb-guarana-2l',
        title: 'Guaraná 2L',
        category: 'bebidas',
        desc: 'Garrafa pet 2 Litros bem gelada.',
        prices: { P: 14.50, G: 14.50 },
        image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?auto=format&fit=crop&w=600&q=80',
        rating: '4.8',
        hasSizes: false
    },
    {
        id: 'beb-9',
        title: 'Cerveja Lata',
        category: 'bebidas',
        desc: 'Cerveja estupidamente gelada.',
        prices: { P: 8.00, G: 8.00 },
        image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=600&q=80',
        rating: '5.0',
        hasSizes: false
    }
];

// App State
let currentCategory = 'all';
let currentSearchTerm = '';

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
let cart = [];
let fulfillmentType = 'delivery'; // 'delivery' or 'pickup'
let selectedPayment = 'Pix'; // 'Pix', 'Cartão', 'Dinheiro'
// Taxa de entrega varia por regiao e e combinada com o atendente pelo
// WhatsApp — o site nao cobra nenhum valor fixo de entrega no total.
const CLIENT_WHATSAPP = '5554996879399';

// Size Selection Tracking Object
const selectedSizes = {};

// DOM Elements
let productsGrid;
let cartDrawer;
let cartOverlay;
let cartItemsContainer;
let cartCountBadge;
let cartSubtotalEl;
let cartDeliveryFeeEl;
let cartGrandTotalEl;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    productsGrid = document.getElementById('products-grid');
    cartDrawer = document.getElementById('cart-drawer');
    cartOverlay = document.getElementById('cart-overlay');
    cartItemsContainer = document.getElementById('cart-items-list') || document.getElementById('cart-items-container');
    cartCountBadge = document.getElementById('cart-badge-count') || document.getElementById('cart-count');
    cartSubtotalEl = document.getElementById('cart-subtotal');
    cartDeliveryFeeEl = document.getElementById('cart-delivery-fee');
    cartGrandTotalEl = document.getElementById('cart-total-price') || document.getElementById('cart-grand-total');

    renderCatalog();
    renderBestSellers();
    setupFilters();
    setupSearch();
    setupCartDrawerListeners();
    setupStoreStatus();
    updateCartUI();
});

// Setup Store Open/Closed Status
function setupStoreStatus() {
    const statusBadges = document.querySelectorAll('#status-badge, .status-badge');
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours() + (now.getMinutes() / 60);

    // Terça a Domingo: 17h as 23h30. Fechado as segundas-feiras (dia 1).
    let isOpen = false;
    if (day !== 1) {
        if (hour >= 17 && hour < 23.5) isOpen = true;
    }

    statusBadges.forEach(badge => {
        if (isOpen) {
            badge.className = 'status-badge open';
            badge.innerHTML = `
                <span class="status-dot"></span>
                <span class="status-text">Aberto</span>
            `;
        } else {
            badge.className = 'status-badge closed';
            badge.innerHTML = `
                <span class="status-dot"></span>
                <span class="status-text">Fechado</span>
            `;
        }
    });
}

// Monta o HTML de um card de produto. Reaproveitado no cardapio completo e
// na vitrine de Mais Vendidos — por isso usa classe (nao id) pro valor, ja
// que o mesmo produto pode aparecer em mais de um card na pagina.
function productCardHTML(item) {
    const size = selectedSizes[item.id] || 'P';
    const displayPrice = item.hasSizes ? item.prices[size] : item.prices.P;

    return `
        <div class="menu-card" data-id="${item.id}">
            <div class="card-img-box">
                <img src="${item.image}" alt="${item.title}" class="card-img" loading="lazy">
                ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ''}
                <div class="card-rating"><i data-lucide="star" style="width:14px; height:14px; fill:#FFC107;"></i> ${item.rating || '4.9'}</div>
            </div>
            <div class="card-body">
                <h3 class="card-title">${item.title}</h3>
                <p class="card-desc">${item.desc}</p>

                ${item.hasSizes ? `
                    <span class="size-selector-label">${item.prices.DEZ !== undefined ? 'Tamanho e Quantidade' : 'Tamanho'}</span>
                    <div class="size-selector">
                        <button type="button" class="size-btn ${size === 'P' ? 'active' : ''}" data-size="P" onclick="selectSize('${item.id}', 'P')">
                            <span class="size-btn-label">P</span>
                            <span class="size-btn-price">R$ ${item.prices.P.toFixed(2).replace('.', ',')}</span>
                        </button>
                        <button type="button" class="size-btn ${size === 'G' ? 'active' : ''}" data-size="G" onclick="selectSize('${item.id}', 'G')">
                            <span class="size-btn-label">G</span>
                            <span class="size-btn-price">R$ ${item.prices.G.toFixed(2).replace('.', ',')}</span>
                        </button>
                        ${item.prices.DEZ !== undefined ? `
                            <button type="button" class="size-btn ${size === 'DEZ' ? 'active' : ''}" data-size="DEZ" onclick="selectSize('${item.id}', 'DEZ')">
                                <span class="size-btn-label">10un (P)</span>
                                <span class="size-btn-price">R$ ${item.prices.DEZ.toFixed(2).replace('.', ',')}</span>
                            </button>
                        ` : ''}
                    </div>
                ` : ''}

                <div class="card-bottom">
                    <div>
                        <span class="price-label">Valor</span>
                        <div class="price-value">R$ ${displayPrice.toFixed(2).replace('.', ',')}</div>
                    </div>
                    <button type="button" class="btn-add-item" onclick="addToCart('${item.id}')">
                        <i data-lucide="plus" style="width:16px; height:16px;"></i> Adicionar
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Render Product Catalog Cards
function renderCatalog() {
    if (!productsGrid) return;

    let filtered = currentCategory === 'all'
        ? PRODUCTS_DATA
        : PRODUCTS_DATA.filter(p => p.category === currentCategory);

    const term = currentSearchTerm.trim().toLowerCase();
    if (term) {
        filtered = filtered.filter(p =>
            p.title.toLowerCase().includes(term) ||
            (p.desc && p.desc.toLowerCase().includes(term))
        );
    }

    productsGrid.innerHTML = filtered.length
        ? filtered.map(productCardHTML).join('')
        : `<p class="search-empty-state">Nenhum item encontrado para "${escapeHtml(currentSearchTerm)}".</p>`;

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Vitrine "Mais Vendidos": 3 itens ja identificados como campeoes de venda
// no proprio cardapio (badges "Mais Pedida"/"Mais Vendido"/"Top Vendas"),
// sem inventar ranking novo.
const BEST_SELLER_IDS = ['emp-1', 'pas-2', 'pas-15'];

function renderBestSellers() {
    const grid = document.getElementById('best-sellers-grid');
    if (!grid) return;

    const items = BEST_SELLER_IDS
        .map(id => PRODUCTS_DATA.find(p => p.id === id))
        .filter(Boolean);

    grid.innerHTML = items.map(productCardHTML).join('');

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Select Product Size
// Um mesmo produto pode aparecer em mais de um card na pagina (cardapio
// completo + vitrine de Mais Vendidos), entao atualiza todas as instancias.
function selectSize(itemId, size) {
    selectedSizes[itemId] = size;
    const cards = document.querySelectorAll(`.menu-card[data-id="${itemId}"]`);
    const item = PRODUCTS_DATA.find(i => i.id === itemId);

    cards.forEach(card => {
        const btns = card.querySelectorAll('.size-btn');
        btns.forEach(b => b.classList.remove('active'));
        const activeBtn = card.querySelector(`.size-btn[data-size="${size}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        if (item && item.hasSizes) {
            const displayPrice = card.querySelector('.price-value');
            if (displayPrice) {
                displayPrice.innerText = `R$ ${item.prices[size].toFixed(2).replace('.', ',')}`;
            }
        }
    });
}
window.selectSize = selectSize;

// Add Item to Cart
function addToCart(itemId) {
    const item = PRODUCTS_DATA.find(i => i.id === itemId);
    if (!item) return;

    const size = item.hasSizes ? (selectedSizes[itemId] || 'P') : null;
    const price = item.hasSizes ? item.prices[size] : item.prices.P;
    const rotuloTamanho = { P: 'Tamanho P', G: 'Tamanho G', DEZ: 'Porção 10un' };
    const title = size ? `${item.title} (${rotuloTamanho[size] || size})` : item.title;

    const existingIndex = cart.findIndex(c => c.id === itemId && c.size === size);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            id: item.id,
            title: title,
            baseTitle: item.title,
            size: size,
            price: price,
            quantity: 1,
            notes: ''
        });
    }

    showToast(`"${title}" adicionado ao carrinho!`);
    updateCartUI();
    openCart();
}
window.addToCart = addToCart;

// Update Quantity in Cart
function changeQuantity(index, delta) {
    if (cart[index]) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        updateCartUI();
    }
}
window.changeQuantity = changeQuantity;

// Update Item Notes
function updateItemNotes(index, text) {
    if (cart[index]) {
        cart[index].notes = text;
    }
}
window.updateItemNotes = updateItemNotes;

// Category Filters
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category || 'all';
            renderCatalog();
        });
    });
}

// Menu Search Bar
function setupSearch() {
    const searchInput = document.getElementById('menu-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', () => {
        currentSearchTerm = searchInput.value;
        renderCatalog();
    });
}

// Cart Drawer Event Listeners
function setupCartDrawerListeners() {
    // Fulfillment Toggle (Delivery vs Pickup)
    const fulfillmentBtns = document.querySelectorAll('.fulfillment-opt, .del-btn');
    fulfillmentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            fulfillmentBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            fulfillmentType = btn.dataset.type || btn.getAttribute('data-type') || 'delivery';
            
            const addressBox = document.getElementById('address-box');
            if (addressBox) {
                addressBox.style.display = fulfillmentType === 'delivery' ? 'block' : 'none';
            }
            updateCartUI();
        });
    });

    // Payment Method Toggle
    const paymentBtns = document.querySelectorAll('.payment-opt, .pay-btn');
    paymentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            paymentBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedPayment = btn.dataset.method || btn.getAttribute('data-pay') || 'Pix';
            
            const cashChangeBox = document.getElementById('cash-change-box');
            const pixInfoBox = document.getElementById('pix-lock-box');
            
            const isCash = selectedPayment.toLowerCase().includes('dinheiro') || selectedPayment === 'cash';
            const isPix = selectedPayment.toLowerCase().includes('pix');

            if (cashChangeBox) cashChangeBox.style.display = isCash ? 'block' : 'none';
            if (pixInfoBox) pixInfoBox.style.display = isPix ? 'block' : 'none';
            
            updateCartUI();
        });
    });

    // Keyboard ESC to close drawer
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCart();
        }
    });
}

// Update Cart State & UI Breakdown
function updateCartUI() {
    const totalQuantity = cart.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const finalTotal = subtotal;

    // Header Badges & Count
    if (cartCountBadge) cartCountBadge.innerText = totalQuantity;
    
    const cartTotalHeader = document.getElementById('cart-total-header');
    if (cartTotalHeader) cartTotalHeader.innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;

    // Header Clear Cart Button Visibility
    const clearHeaderBtn = document.getElementById('cart-clear-header');
    if (clearHeaderBtn) {
        clearHeaderBtn.style.display = cart.length > 0 ? 'inline-flex' : 'none';
    }

    // Floating Mobile Bar
    const floatingCart = document.getElementById('floating-cart-bar');
    const floatingCount = document.getElementById('floating-cart-count');
    const floatingTotal = document.getElementById('floating-cart-total');

    if (floatingCount) floatingCount.innerText = `${totalQuantity} ${totalQuantity === 1 ? 'item' : 'itens'}`;
    if (floatingTotal) floatingTotal.innerText = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;
    if (floatingCart) {
        floatingCart.classList.toggle('visible', totalQuantity > 0);
    }

    // Totals Breakdown
    if (cartSubtotalEl) cartSubtotalEl.innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    if (cartDeliveryFeeEl) {
        cartDeliveryFeeEl.innerText = fulfillmentType === 'delivery'
            ? 'A combinar'
            : 'Grátis (Balcão)';
    }
    if (cartGrandTotalEl) cartGrandTotalEl.innerText = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;

    // Aviso de pagamento combinado com o atendente (so quando Pix esta selecionado)
    atualizarAvisoPix(finalTotal);

    // Render Cart Items
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="cart-empty" style="text-align: center; padding: 40px 20px; color: #A1A1AA;">
                <i data-lucide="shopping-bag" style="width: 48px; height: 48px; margin-bottom: 12px; opacity: 0.5;"></i>
                <p style="font-weight: 700; color: #FFF; margin-bottom: 4px;">Seu carrinho está vazio.</p>
                <span style="font-size: 0.85rem;">Escolha os melhores pastéis e empanadas no cardápio acima!</span>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
        return;
    }

    cartItemsContainer.innerHTML = cart.map((item, idx) => `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${item.title}</h4>
                <p>R$ ${item.price.toFixed(2).replace('.', ',')} un.</p>
                <input type="text" class="cart-item-note-input" placeholder="Obs: ex. sem cebola, bem frito..." value="${item.notes || ''}" onchange="updateItemNotes(${idx}, this.value)">
                <span class="cart-item-price">Total: R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
            </div>
            <div class="cart-controls">
                <button type="button" class="cart-qty-btn" onclick="changeQuantity(${idx}, -1)" aria-label="Diminuir quantidade">-</button>
                <span class="cart-qty-num">${item.quantity} un</span>
                <button type="button" class="cart-qty-btn" onclick="changeQuantity(${idx}, 1)" aria-label="Aumentar quantidade">+</button>
            </div>
        </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
}

// Cart Drawer Open / Close Functions
function openCart() {
    if (cartDrawer) cartDrawer.classList.add('active', 'open');
    if (cartOverlay) cartOverlay.classList.add('active', 'open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    if (cartDrawer) cartDrawer.classList.remove('active', 'open');
    if (cartOverlay) cartOverlay.classList.remove('active', 'open');
    document.body.style.overflow = 'auto';
}

function toggleCartDrawer(show = true) {
    if (show) openCart();
    else closeCart();
}
window.openCart = openCart;
window.closeCart = closeCart;
window.toggleCartDrawer = toggleCartDrawer;

// Clear Cart Modal Confirmation Functions
function openConfirmation() {
    const overlay = document.getElementById('confirm-clear');
    if (!overlay) return;
    
    const desc = document.getElementById('confirm-desc');
    const totalQty = cart.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    
    if (desc) {
        const itemLabel = totalQty === 1 ? '1 item' : `${totalQty} itens`;
        desc.innerHTML = `Você vai remover <strong>${itemLabel}</strong>, no valor de <strong>R$ ${subtotal.toFixed(2).replace('.', ',')}</strong>.`;
    }
    
    overlay.hidden = false;
    if (window.lucide) window.lucide.createIcons();
}

function closeConfirmation() {
    const overlay = document.getElementById('confirm-clear');
    if (overlay) overlay.hidden = true;
}

function clearCart() {
    if (cart.length === 0) {
        showToast('🥟 Seu carrinho já está vazio.');
        return;
    }
    openConfirmation();
}

function aplicarLimpeza() {
    cart = [];
    closeConfirmation();
    updateCartUI();
    showToast('🗑️ Pedido limpo com sucesso.');
}

window.openConfirmation = openConfirmation;
window.closeConfirmation = closeConfirmation;
window.clearCart = clearCart;
window.aplicarLimpeza = aplicarLimpeza;

/* Mostra o aviso "pagamento combinado com o atendente" quando Pix esta
   selecionado. Chamado toda vez que o carrinho muda: item, tamanho P/G,
   entrega ou retirada. O fechamento em si (chave, valor, comprovante)
   acontece na conversa do WhatsApp, nao no site. */
function atualizarAvisoPix(finalTotal) {
    const caixa = document.getElementById('pix-lock-box');
    if (!caixa) return;
    const isPix = selectedPayment.toLowerCase().includes('pix');
    caixa.style.display = (isPix && finalTotal > 0) ? 'block' : 'none';
}
window.atualizarAvisoPix = atualizarAvisoPix;

// Toast Notifications
function showToast(message, type = 'success') {
    let toast = document.getElementById('toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        document.body.appendChild(toast);
    }
    toast.className = `toast-box ${type === 'error' ? 'toast-error' : 'toast-success'}`;
    toast.innerHTML = message;
    toast.classList.add('show');

    if (window._toastTimeout) clearTimeout(window._toastTimeout);
    window._toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}
window.showToast = showToast;

// Numero de pedido sequencial, persistido por navegador/dispositivo
// (nao sincroniza entre aparelhos nem se sobrevive a limpeza de dados).
function getNextOrderNumber() {
    const key = 'claem_order_seq';
    const seq = parseInt(localStorage.getItem(key) || '0', 10) + 1;
    localStorage.setItem(key, String(seq));
    return String(seq).padStart(4, '0');
}

// Send WhatsApp Order
function sendWhatsAppOrder() {
    if (cart.length === 0) {
        showToast('🥟 <strong>Seu carrinho está vazio!</strong> Adicione um pastel ou empanada antes de finalizar.', 'error');
        return;
    }

    const customerName = document.getElementById('cust-name') ? document.getElementById('cust-name').value.trim() : '';
    const customerAddressInput = document.getElementById('cust-address');
    const customerAddress = customerAddressInput ? customerAddressInput.value.trim() : '';
    const cashChange = document.getElementById('cash-change-val') ? document.getElementById('cash-change-val').value.trim() : '';

    if (fulfillmentType === 'delivery' && !customerAddress) {
        showToast('📍 <strong>Informe seu endereço de entrega</strong> ou selecione <strong>Retirada no Balcão</strong>!', 'error');
        if (customerAddressInput) {
            customerAddressInput.classList.add('input-error');
            customerAddressInput.focus();
            customerAddressInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => {
                customerAddressInput.classList.remove('input-error');
            }, 3500);
        }
        return;
    }

    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const orderNumber = getNextOrderNumber();
    const rotuloTamanhoCurto = { P: 'P', G: 'G', DEZ: '10un' };

    let msg = `*Pedido #${orderNumber}*\n`;
    msg += `${fulfillmentType === 'delivery' ? 'Entrega em domicílio' : 'Retirada no balcão'}\n\n`;

    cart.forEach(i => {
        const itemSum = i.price * i.quantity;
        const sizeLabel = i.size ? (rotuloTamanhoCurto[i.size] || i.size) : '';
        msg += `*${i.quantity}x* ${i.baseTitle}${sizeLabel ? ` · ${sizeLabel}` : ''}\n`;
        msg += `R$ ${itemSum.toFixed(2).replace('.', ',')}\n`;
        if (i.notes) msg += `_Obs: ${i.notes}_\n`;
        msg += `\n`;
    });

    msg += `*Itens: R$ ${subtotal.toFixed(2).replace('.', ',')}*\n`;
    if (fulfillmentType === 'delivery') {
        msg += `Entrega a combinar\n`;
    }
    msg += `\n`;

    if (customerName) msg += `*${customerName}*\n`;
    if (fulfillmentType === 'delivery' && customerAddress) {
        msg += `${customerAddress}\n`;
    }

    const isCash = selectedPayment.toLowerCase().includes('dinheiro') || selectedPayment === 'cash';
    const isPix = selectedPayment.toLowerCase().includes('pix');

    if (isPix) {
        msg += `Pagamento em Pix — combinamos a chave por aqui\n`;
    } else if (isCash) {
        msg += `Pagamento em dinheiro — ${cashChange ? `troco para R$ ${cashChange}` : 'sem troco'}\n`;
    } else {
        msg += `Pagamento no cartão — favor levar a maquininha\n`;
    }

    msg += `\n_Enviado pelo site da Pastelaria Claem_`;

    const url = `https://wa.me/${CLIENT_WHATSAPP}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');

    /* Pedido enviado: o proximo comeca com identificador novo, senao dois
       pedidos diferentes chegariam na loja com o mesmo ID. */
    pixTxidAtual = null;
}
window.sendWhatsAppOrder = sendWhatsAppOrder;
