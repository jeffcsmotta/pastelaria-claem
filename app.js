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
    empanada: 'assets/empanadas.jpeg',
    bebida: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
    suco: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80',
    torrada: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80'
};

// Menu Database CLAEM
const PRODUCTS_DATA = [
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
        desc: 'Massa douradinha recheada com carne moída bem temperada e ovos cozidos.',
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
        desc: 'Sabor único! Carne de panela, feijão preto, queijo e banana da terra frita.',
        prices: { P: 20.00, G: 20.00 },
        badge: 'Chef Choice',
        image: PASTEL_IMGS.empanada,
        rating: '5.0',
        hasSizes: false
    },

    // --- PASTÉIS SALGADOS ---
    {
        id: 'pas-1',
        title: 'Pastel de Carne com Ovo',
        category: 'salgados',
        desc: 'Massa crocante e sequinha recheada com carne moída de gado temperada e ovo picadinho.',
        prices: { P: 2.50, G: 10.00 },
        badge: 'Clássico',
        image: PASTEL_IMGS.carne,
        rating: '4.9',
        hasSizes: true
    },
    {
        id: 'pas-2',
        title: 'Pastel de Carne de Panela',
        category: 'salgados',
        desc: 'Carne de panela cozida lentamente, desfiada com temperos coloniais.',
        prices: { P: 5.00, G: 15.00 },
        badge: 'Mais Vendido',
        image: PASTEL_IMGS.carne,
        rating: '5.0',
        hasSizes: true
    },
    {
        id: 'pas-3',
        title: 'Pastel de Carne com Queijo',
        category: 'salgados',
        desc: 'Combinação irresistível de carne temperada e queijo mussarela derretido.',
        prices: { P: 3.50, G: 12.00 },
        image: PASTEL_IMGS.carne,
        rating: '4.9',
        hasSizes: true
    },
    {
        id: 'pas-4',
        title: 'Pastel de Carne com Azeitona',
        category: 'salgados',
        desc: 'Carne moída especial acompanhada de azeitonas verdes fatiadas.',
        prices: { P: 3.50, G: 12.00 },
        image: PASTEL_IMGS.carne,
        rating: '4.8',
        hasSizes: true
    },
    {
        id: 'pas-5',
        title: 'Pastel de Frango Desfiado',
        category: 'salgados',
        desc: 'Frango desfiado super macio e temperado.',
        prices: { P: 3.50, G: 12.00 },
        image: PASTEL_IMGS.queijo,
        rating: '4.8',
        hasSizes: true
    },
    {
        id: 'pas-6',
        title: 'Pastel de Frango com Queijo',
        category: 'salgados',
        desc: 'Frango desfiado com generosa camada de queijo mussarela derretido.',
        prices: { P: 3.50, G: 12.00 },
        image: PASTEL_IMGS.queijo,
        rating: '4.9',
        hasSizes: true
    },
    {
        id: 'pas-7',
        title: 'Pastel de Frango com Catupiry',
        category: 'salgados',
        desc: 'Frango com o verdadeiro e cremoso queijo tipo Catupiry.',
        prices: { P: 3.50, G: 12.00 },
        badge: 'Favorito',
        image: PASTEL_IMGS.queijo,
        rating: '5.0',
        hasSizes: true
    },
    {
        id: 'pas-8',
        title: 'Pastel Presunto com Queijo',
        category: 'salgados',
        desc: 'O tradicional pastel misto de presunto e queijo quentinho.',
        prices: { P: 3.50, G: 12.00 },
        image: PASTEL_IMGS.queijo,
        rating: '4.9',
        hasSizes: true
    },
    {
        id: 'pas-9',
        title: 'Pastel de Pizza',
        category: 'salgados',
        desc: 'Presunto, queijo mussarela e orégano aromático.',
        prices: { P: 3.50, G: 12.00 },
        image: PASTEL_IMGS.queijo,
        rating: '4.8',
        hasSizes: true
    },
    {
        id: 'pas-10',
        title: 'Pastel Palmito com Queijo',
        category: 'salgados',
        desc: 'Palmito macio fatiado envolvido em mussarela derretida.',
        prices: { P: 3.50, G: 12.00 },
        image: PASTEL_IMGS.queijo,
        rating: '4.8',
        hasSizes: true
    },
    {
        id: 'pas-11',
        title: 'Pastel de Calabresa',
        category: 'salgados',
        desc: 'Calabresa fatiada levemente acebolada na massa frita.',
        prices: { P: 3.50, G: 12.00 },
        image: PASTEL_IMGS.carne,
        rating: '4.8',
        hasSizes: true
    },
    {
        id: 'pas-12',
        title: 'Pastel Calabresa com Queijo',
        category: 'salgados',
        desc: 'Calabresa bem dourada com mussarela cremosa.',
        prices: { P: 3.50, G: 12.00 },
        image: PASTEL_IMGS.carne,
        rating: '4.9',
        hasSizes: true
    },
    {
        id: 'pas-13',
        title: 'Pastel Apenas Queijo',
        category: 'salgados',
        desc: 'Mussarela pura derretendo a cada mordida.',
        prices: { P: 3.50, G: 12.00 },
        image: PASTEL_IMGS.queijo,
        rating: '4.9',
        hasSizes: true
    },
    {
        id: 'pas-14',
        title: 'Pastel Queijo com Milho',
        category: 'salgados',
        desc: 'Queijo mussarela com milho doce selecionado.',
        prices: { P: 3.50, G: 12.00 },
        image: PASTEL_IMGS.queijo,
        rating: '4.8',
        hasSizes: true
    },
    {
        id: 'pas-15',
        title: 'Pastel Bacon, Queijo e Milho',
        category: 'salgados',
        desc: 'Bacon crocante em cubos, queijo mussarela e milho verde.',
        prices: { P: 3.50, G: 12.00 },
        badge: 'Top Vendas',
        image: PASTEL_IMGS.queijo,
        rating: '5.0',
        hasSizes: true
    },

    // --- PASTÉIS DOCES ---
    {
        id: 'doc-1',
        title: 'Pastel Romeu e Julieta',
        category: 'doces',
        desc: 'Combinação clássica de goiabada cremosa com queijo mussarela.',
        prices: { P: 2.50, G: 10.00 },
        badge: 'Clássico Doce',
        image: PASTEL_IMGS.doce,
        rating: '4.9',
        hasSizes: true
    },
    {
        id: 'doc-2',
        title: 'Pastel Banana com Canela',
        category: 'doces',
        desc: 'Rodelas de banana fatiada polvilhada com açúcar e canela.',
        prices: { P: 2.50, G: 10.00 },
        image: PASTEL_IMGS.doce,
        rating: '4.8',
        hasSizes: true
    },
    {
        id: 'doc-3',
        title: 'Pastel Banana com Chocolate',
        category: 'doces',
        desc: 'Banana fresca envolvida em chocolate ao leite derretido.',
        prices: { P: 3.50, G: 12.00 },
        image: PASTEL_IMGS.doce,
        rating: '4.9',
        hasSizes: true
    },
    {
        id: 'doc-4',
        title: 'Pastel Chocolate Preto',
        category: 'doces',
        desc: 'Recheado com generoso chocolate ao leite cremoso.',
        prices: { P: 3.50, G: 12.00 },
        image: PASTEL_IMGS.doce,
        rating: '4.9',
        hasSizes: true
    },
    {
        id: 'doc-5',
        title: 'Pastel Chocolate Branco',
        category: 'doces',
        desc: 'Delicioso recheio de chocolate branco derretido.',
        prices: { P: 3.50, G: 12.00 },
        image: PASTEL_IMGS.doce,
        rating: '4.9',
        hasSizes: true
    },
    {
        id: 'doc-6',
        title: 'Pastel Prestígio',
        category: 'doces',
        desc: 'Chocolate ao leite combinado com beijinho de coco ralado.',
        prices: { P: 3.50, G: 12.00 },
        badge: 'Delícia',
        image: PASTEL_IMGS.doce,
        rating: '4.9',
        hasSizes: true
    },
    {
        id: 'doc-7',
        title: 'Pastel Chocolate com Amendoim',
        category: 'doces',
        desc: 'Chocolate preto com pedacinhos de amendoim crocante.',
        prices: { P: 3.50, G: 12.00 },
        image: PASTEL_IMGS.doce,
        rating: '4.8',
        hasSizes: true
    },
    {
        id: 'doc-8',
        title: 'Pastel Morango Moreno',
        category: 'doces',
        desc: 'Morangos frescos selecionados cobertos de chocolate ao leite.',
        prices: { P: 3.75, G: 13.00 },
        badge: 'Top Doce',
        image: PASTEL_IMGS.doce,
        rating: '5.0',
        hasSizes: true
    },

    // --- PORÇÕES DE PASTÉIS ---
    {
        id: 'por-1',
        title: 'Porção com 10 Pastéis P (Carne)',
        category: 'porcoes',
        desc: 'Cesta com 10 minipastéis crocantes de carne temperada com ovo.',
        prices: { P: 24.00, G: 24.00 },
        badge: 'Para Compartilhar',
        image: PASTEL_IMGS.carne,
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
        image: PASTEL_IMGS.carne,
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
        image: PASTEL_IMGS.doce,
        rating: '4.9',
        hasSizes: false
    },
    {
        id: 'por-4',
        title: 'Porção com 10 Pastéis P (Outros Sabores)',
        category: 'porcoes',
        desc: 'Escolha até 2 sabores tradicionais para sua cesta de 10 minipastéis.',
        prices: { P: 28.00, G: 28.00 },
        image: PASTEL_IMGS.queijo,
        rating: '4.8',
        hasSizes: false
    },

    // --- TORRADAS ---
    {
        id: 'tor-1',
        title: 'Torrada Completa CLAEM',
        category: 'lanches',
        desc: 'Pão fatiado tostado no capricho com alface, tomate fresco, ovo, presunto, queijo mussarela e maionese especial da casa.',
        prices: { P: 20.00, G: 20.00 },
        badge: 'Lanche Reforçado',
        image: PASTEL_IMGS.torrada,
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
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80',
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
        image: PASTEL_IMGS.suco,
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
        desc: 'Pingado quente e cremoso com leite de primeira qualidade.',
        prices: { P: 6.00, G: 6.00 },
        image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80',
        rating: '4.8',
        hasSizes: false
    },
    {
        id: 'beb-5',
        title: 'Refrigerante 2L (Coca-Cola / Guaraná / Fanta)',
        category: 'bebidas',
        desc: 'Garrafa pet 2 Litros bem gelada.',
        prices: { P: 14.50, G: 14.50 },
        image: PASTEL_IMGS.bebida,
        rating: '4.9',
        hasSizes: false
    },
    {
        id: 'beb-6',
        title: 'Refrigerante 600ml',
        category: 'bebidas',
        desc: 'Garrafa 600ml gelada (Coca-Cola, Coca Zero, Fanta Laranja ou Guaraná).',
        prices: { P: 9.75, G: 9.75 },
        image: PASTEL_IMGS.bebida,
        rating: '4.8',
        hasSizes: false
    },
    {
        id: 'beb-7',
        title: 'Refrigerante Lata 350ml / H2O / Ice Tea',
        category: 'bebidas',
        desc: 'Lata 350ml trincando de gelada.',
        prices: { P: 7.75, G: 7.75 },
        image: PASTEL_IMGS.bebida,
        rating: '4.9',
        hasSizes: false
    },
    {
        id: 'beb-8',
        title: 'Água Mineral (Com ou Sem Gás 500ml)',
        category: 'bebidas',
        desc: 'Garrafa 500ml geladinha.',
        prices: { P: 5.00, G: 5.00 },
        image: 'https://images.unsplash.com/photo-1560023907-5f310c80557f?auto=format&fit=crop&w=600&q=80',
        rating: '4.8',
        hasSizes: false
    },
    {
        id: 'beb-9',
        title: 'Cerveja Lata / 600ml',
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
let cart = [];
let fulfillmentType = 'delivery'; // 'delivery' or 'pickup'
let selectedPayment = 'Pix (Chave Copia e Cola)'; // 'Pix', 'Cartão', 'Dinheiro'
let deliveryFee = 6.00;
const CLIENT_WHATSAPP = '5554996879399';

/* ==========================================================================
   PIX — BR Code estático EMV, com valor travado, gerado no navegador.

   Substitui o QR antigo, que codificava só o telefone em texto livre e por
   isso nenhum app de banco reconhecia como pagamento.

   Referência: Manual do BR Code (Bacen) / EMV MPM. Cada campo é
   ID(2) + LENGTH(2) + VALUE, e o CRC16 fecha a string.
   ========================================================================== */
/* >>> ATENCAO: EM MODO TESTE <<<
   Em "teste" o dinheiro vai para a conta da Onira Labs, nao para a
   pastelaria — serve para a demonstracao ao comprador, em que quem apresenta
   recebe o pagamento de teste na propria conta.

   ANTES DE ENTREGAR O SITE: trocar PIX_MODO para "producao" e conferir com um
   pagamento de R$ 0,01. Enquanto estiver em "teste", todo pagamento do
   cliente final cai na conta errada.

   Chave e nome do recebedor andam juntos de proposito: se so a chave mudasse,
   o QR anunciaria um recebedor e creditaria outro — inconsistencia que o
   comprador percebe na hora de confirmar o pagamento no app do banco. */
const PIX_MODO = "teste";   // <<<< UNICA LINHA A TROCAR: "teste" | "producao"

const PIX_PERFIS = {
    producao: {
        chave: "+5554996879399",      // telefone da CLAEM, em E.164
        nome: "PASTELARIA CLAEM"
    },
    teste: {
        chave: "60403306000110",      // CNPJ Onira Labs, so digitos
        nome: "JEFFERSON MOTTA"       // titular da chave de teste
    }
};

const PIX_CONFIG = {
    modo: PIX_MODO,
    chave: PIX_PERFIS[PIX_MODO].chave,
    nome: PIX_PERFIS[PIX_MODO].nome,   // max 25 chars, sem acentos, uppercase
    cidade: "CAXIAS DO SUL",           // max 15 chars, sem acentos, uppercase
    txidPrefixo: "CLAEM"
};

/* Barulho no console para o modo teste nao passar despercebido em um deploy
   apressado. Nao aparece para o cliente final, so para quem abre o DevTools. */
if (PIX_CONFIG.modo === 'teste') {
    console.warn(
        '%c[PIX EM MODO TESTE] Recebedor: ' + PIX_CONFIG.nome + ' — chave ' +
        PIX_CONFIG.chave + '. Nao e a conta da Pastelaria CLAEM. ' +
        'Trocar PIX_MODO para "producao" antes de entregar.',
        'background:#B45309;color:#FFF;padding:2px 6px;border-radius:3px;font-weight:700'
    );
}

/* Compatibilidade: a chave sem o + ainda aparece em texto para o cliente. */
const PIX_KEY_CLAEM = PIX_CONFIG.chave.replace(/^\+55/, '');

/* Campo EMV: identificador, tamanho com dois digitos, valor. */
function emv(id, valor) {
    const v = String(valor);
    return id + String(v.length).padStart(2, '0') + v;
}

/* Nome e cidade vao sem acento e em caixa alta, truncados no limite do
   padrao. Acento no payload quebra a leitura em parte dos apps. */
function normalizarTextoPix(texto, limite) {
    return String(texto || '')
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^A-Za-z0-9 ]/g, '')
        .trim()
        .toUpperCase()
        .slice(0, limite);
}

/* CRC16-CCITT-FALSE: polinomio 0x1021, inicial 0xFFFF, sem reflexao e sem
   XOR final. Calculado sobre o payload inteiro, ja incluindo o literal
   "6304" do proprio campo de CRC. */
function crc16(payload) {
    let crc = 0xFFFF;
    for (let i = 0; i < payload.length; i++) {
        crc ^= payload.charCodeAt(i) << 8;
        for (let bit = 0; bit < 8; bit++) {
            crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) : (crc << 1);
            crc &= 0xFFFF;
        }
    }
    return crc.toString(16).toUpperCase().padStart(4, '0');
}

/* txid: apenas [A-Za-z0-9], no maximo 25 caracteres. */
function normalizarTxid(txid) {
    const limpo = String(txid || '').replace(/[^A-Za-z0-9]/g, '').toUpperCase();
    return (limpo || '***').slice(0, 25);
}

function gerarTxid() {
    return normalizarTxid(PIX_CONFIG.txidPrefixo + Date.now().toString(36));
}

/* Monta o BR Code completo. valor em number, ex 47 -> "47.00". */
function gerarPixPayload(valor, txid) {
    const valorFmt = Number(valor).toFixed(2);           // ponto, nunca virgula
    const nome = normalizarTextoPix(PIX_CONFIG.nome, 25);
    const cidade = normalizarTextoPix(PIX_CONFIG.cidade, 15);

    const merchantAccount =
        emv('00', 'br.gov.bcb.pix') +
        emv('01', PIX_CONFIG.chave);

    const adicional = emv('05', normalizarTxid(txid));

    const payload =
        emv('00', '01') +                 // Payload Format Indicator
        emv('01', '12') +                 // uso unico / valor definido
        emv('26', merchantAccount) +      // Merchant Account Information
        emv('52', '0000') +               // MCC
        emv('53', '986') +                // moeda: BRL
        emv('54', valorFmt) +             // valor travado
        emv('58', 'BR') +                 // pais
        emv('59', nome) +                 // nome do recebedor
        emv('60', cidade) +               // cidade do recebedor
        emv('62', adicional) +            // dados adicionais (txid)
        '6304';                           // campo do CRC, ja incluso no calculo

    return payload + crc16(payload);
}

/* Estado do Pix do pedido em andamento. O txid nasce com o carrinho e vive
   ate o pedido ser enviado — assim o identificador que o cliente ve na tela
   e o que chega no WhatsApp da loja sao o mesmo. */
let pixTxidAtual = null;
let pixPayloadAtual = '';
let pixQrInstancia = null;

function garantirTxid() {
    if (!pixTxidAtual) pixTxidAtual = gerarTxid();
    return pixTxidAtual;
}

window.PIX_CONFIG = PIX_CONFIG;
window.gerarPixPayload = gerarPixPayload;
window.crc16 = crc16;
window.emv = emv;
window.normalizarTextoPix = normalizarTextoPix;
window.gerarTxid = gerarTxid;

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
    setupFilters();
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

    // Segunda a Sabado 11h as 23h, Domingo 17h as 23h
    let isOpen = false;
    if (day >= 1 && day <= 6) {
        if (hour >= 11 && hour < 23) isOpen = true;
    } else if (day === 0) {
        if (hour >= 17 && hour < 23) isOpen = true;
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

// Render Product Catalog Cards
function renderCatalog() {
    if (!productsGrid) return;

    const filtered = currentCategory === 'all' 
        ? PRODUCTS_DATA 
        : PRODUCTS_DATA.filter(p => p.category === currentCategory);

    productsGrid.innerHTML = filtered.map(item => {
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
                        <div class="size-selector">
                            <button type="button" class="size-btn ${size === 'P' ? 'active' : ''}" data-size="P" onclick="selectSize('${item.id}', 'P')">Tamanho P</button>
                            <button type="button" class="size-btn ${size === 'G' ? 'active' : ''}" data-size="G" onclick="selectSize('${item.id}', 'G')">Tamanho G (+R$ ${(item.prices.G - item.prices.P).toFixed(2).replace('.', ',')})</button>
                        </div>
                    ` : ''}

                    <div class="card-bottom">
                        <div>
                            <span class="price-label">${item.hasSizes ? 'A partir de' : 'Valor'}</span>
                            <div class="price-value" id="price-display-${item.id}">R$ ${displayPrice.toFixed(2).replace('.', ',')}</div>
                        </div>
                        <button type="button" class="btn-add-item" onclick="addToCart('${item.id}')">
                            <i data-lucide="plus" style="width:16px; height:16px;"></i> Adicionar
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Select Product Size
function selectSize(itemId, size) {
    selectedSizes[itemId] = size;
    const card = document.querySelector(`.menu-card[data-id="${itemId}"]`);
    if (card) {
        const btns = card.querySelectorAll('.size-btn');
        btns.forEach(b => b.classList.remove('active'));
        const activeBtn = card.querySelector(`.size-btn[data-size="${size}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        const item = PRODUCTS_DATA.find(i => i.id === itemId);
        if (item && item.hasSizes) {
            const displayPrice = card.querySelector(`#price-display-${itemId}`);
            if (displayPrice) {
                displayPrice.innerText = `R$ ${item.prices[size].toFixed(2).replace('.', ',')}`;
            }
        }
    }
}
window.selectSize = selectSize;

// Add Item to Cart
function addToCart(itemId) {
    const item = PRODUCTS_DATA.find(i => i.id === itemId);
    if (!item) return;

    const size = item.hasSizes ? (selectedSizes[itemId] || 'P') : null;
    const price = item.hasSizes ? item.prices[size] : item.prices.P;
    const title = size ? `${item.title} (${size === 'P' ? 'Tamanho P' : 'Tamanho G'})` : item.title;

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
            selectedPayment = btn.dataset.method || btn.getAttribute('data-pay') || 'Pix (Chave Copia e Cola)';
            
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
    const activeDeliveryFee = fulfillmentType === 'delivery' ? (subtotal > 0 ? deliveryFee : 0) : 0;
    const finalTotal = subtotal + activeDeliveryFee;

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
            ? `R$ ${activeDeliveryFee.toFixed(2).replace('.', ',')}` 
            : 'Grátis (Balcão)';
    }
    if (cartGrandTotalEl) cartGrandTotalEl.innerText = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;

    // Pix: valor travado, payload e QR acompanham o total
    renderizarPix(finalTotal);

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

/* Desenha o QR e o copia-e-cola a partir do total atual. Chamado toda vez
   que o carrinho muda: item, tamanho P/G, entrega ou retirada. */
function renderizarPix(finalTotal) {
    const caixa = document.getElementById('pix-lock-box');
    const valorEl = document.getElementById('pix-locked-amount');
    const txidEl = document.getElementById('pix-txid');
    const alvoQr = document.getElementById('pix-qr-canvas');
    const aviso = document.getElementById('pix-qr-fallback');
    const isPix = selectedPayment.toLowerCase().includes('pix');

    if (valorEl) valorEl.innerText = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;

    /* Sem total nao ha o que cobrar, e em cartao ou dinheiro o bloco nao
       aparece. Em qualquer um dos casos o payload antigo e descartado. */
    if (!isPix || finalTotal <= 0) {
        pixPayloadAtual = '';
        if (alvoQr) alvoQr.innerHTML = '';
        if (aviso) aviso.style.display = 'none';
        if (caixa) caixa.style.display = isPix ? 'block' : 'none';
        return;
    }

    if (caixa) caixa.style.display = 'block';

    const txid = garantirTxid();
    pixPayloadAtual = gerarPixPayload(finalTotal, txid);

    if (txidEl) txidEl.innerText = txid;

    const campoCopia = document.getElementById('pix-payload-texto');
    if (campoCopia) campoCopia.value = pixPayloadAtual;

    if (!alvoQr) return;

    /* A lib do QR vem de CDN. Se nao carregou, o cliente ainda paga: o
       copia-e-cola resolve sozinho, com um aviso no lugar da imagem. */
    if (typeof QRCode === 'undefined') {
        alvoQr.innerHTML = '';
        if (aviso) aviso.style.display = 'block';
        return;
    }

    if (aviso) aviso.style.display = 'none';
    alvoQr.innerHTML = '';
    pixQrInstancia = new QRCode(alvoQr, {
        text: pixPayloadAtual,
        width: 160,
        height: 160,
        colorDark: '#000000',
        colorLight: '#FFFFFF',
        correctLevel: QRCode.CorrectLevel.M
    });
}
window.renderizarPix = renderizarPix;

// Copy Pix Key with Interactive Color State & Feedback
function copyPixKey() {
    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const activeDeliveryFee = fulfillmentType === 'delivery' ? deliveryFee : 0;
    const finalTotal = subtotal + activeDeliveryFee;

    const copyBtn = document.getElementById('btn-copy-pix-key');

    /* Copia o BR Code inteiro, nao a chave solta: e ele que leva o valor
       travado e o identificador do pedido para dentro do app do banco. */
    if (!pixPayloadAtual) {
        showToast('Monte o pedido primeiro — o código Pix é gerado com o valor total.');
        return;
    }

    const handleSuccess = () => {
        showToast(`Código Pix copiado — R$ ${finalTotal.toFixed(2).replace('.', ',')} já vem preenchido no app do banco.`);

        if (copyBtn) {
            copyBtn.classList.add('copied');
            copyBtn.innerHTML = `<i data-lucide="check" style="width:14px; height:14px;"></i> <span>Copiado ✓</span>`;
            if (window.lucide) window.lucide.createIcons();

            setTimeout(() => {
                copyBtn.classList.remove('copied');
                copyBtn.innerHTML = `<i data-lucide="copy" style="width:14px; height:14px;"></i> <span>Copiar código Pix (valor travado)</span>`;
                if (window.lucide) window.lucide.createIcons();
            }, 2000);
        }
    };

    /* execCommand para navegador antigo e para contexto sem clipboard API. */
    const copiaAntiga = () => {
        const campo = document.getElementById('pix-payload-texto') || document.createElement('textarea');
        campo.value = pixPayloadAtual;
        if (!campo.parentNode) document.body.appendChild(campo);
        campo.removeAttribute('readonly');
        campo.select();
        campo.setSelectionRange(0, 99999);
        try { document.execCommand('copy'); } catch (e) { /* segue com o aviso */ }
        campo.setAttribute('readonly', 'readonly');
        handleSuccess();
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(pixPayloadAtual).then(handleSuccess).catch(copiaAntiga);
    } else {
        copiaAntiga();
    }
}
window.copyPixKey = copyPixKey;

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
    const activeDeliveryFee = fulfillmentType === 'delivery' ? deliveryFee : 0;
    const finalTotal = subtotal + activeDeliveryFee;

    let msg = `🥟 *NOVO PEDIDO - PASTELARIA CLAEM*\n`;
    msg += `------------------------------------\n`;
    msg += `📦 *Tipo:* ${fulfillmentType === 'delivery' ? '🛵 Delivery em Domicílio' : '🛍️ Retirada no Balcão'}\n`;
    if (customerName) msg += `👤 *Cliente:* ${customerName}\n`;
    if (fulfillmentType === 'delivery' && customerAddress) {
        msg += `🏠 *Endereço:* ${customerAddress}\n`;
    }
    msg += `\n*🛒 ITENS DO PEDIDO:*\n`;

    cart.forEach((i, idx) => {
        const itemSum = i.price * i.quantity;
        msg += `${idx + 1}. *${i.title}*\n`;
        msg += `   Qtd: ${i.quantity}x • R$ ${itemSum.toFixed(2).replace('.', ',')}\n`;
        if (i.notes) msg += `   _Obs: ${i.notes}_\n`;
        msg += `\n`;
    });

    msg += `------------------------------------\n`;
    msg += `💰 *Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    msg += `🛵 *Taxa de Entrega:* ${fulfillmentType === 'delivery' ? `R$ ${activeDeliveryFee.toFixed(2).replace('.', ',')}` : 'Grátis (Balcão)'}\n`;
    msg += `💰 *TOTAL FINAL:* R$ ${finalTotal.toFixed(2).replace('.', ',')}\n\n`;

    msg += `💳 *FORMA DE PAGAMENTO:*\n`;
    const isCash = selectedPayment.toLowerCase().includes('dinheiro') || selectedPayment === 'cash';
    const isPix = selectedPayment.toLowerCase().includes('pix');

    if (isPix) {
        msg += `⚡ *PIX (Chave: ${PIX_KEY_CLAEM} - Valor: R$ ${finalTotal.toFixed(2).replace('.', ',')})*\n`;
        msg += `_Anexando o comprovante em seguida!_\n`;
        /* O ID vai junto para a loja casar o pagamento com este pedido. */
        msg += `Pagamento: Pix (valor travado R$ ${finalTotal.toFixed(2).replace('.', ',')}) — ID: ${garantirTxid()}\n`;
    } else if (isCash) {
        msg += `💵 *Dinheiro* ${cashChange ? `(Troco para R$ ${cashChange})` : '(Sem troco)'}\n`;
    } else {
        msg += `💳 *Cartão de Crédito/Débito (Levar maquininha)*\n`;
    }

    msg += `\n_Pedido enviado pelo Site Oficial Pastelaria CLAEM_`;

    const url = `https://wa.me/${CLIENT_WHATSAPP}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');

    /* Pedido enviado: o proximo comeca com identificador novo, senao dois
       pedidos diferentes chegariam na loja com o mesmo ID. */
    pixTxidAtual = null;
}
window.sendWhatsAppOrder = sendWhatsAppOrder;
