```javascript
// =========================================================
// NASNOWCI
// SCRIPT.JS
// Poppins + Snow Christmas + Receipt Order
// =========================================================


// =========================================================
// TELEGRAM WEB APP
// =========================================================

let tg = null;

if (window.Telegram && window.Telegram.WebApp) {
    tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
}


// =========================================================
// IMAGE HELPER
// =========================================================

function getImageUrl(filename, appName) {
    return filename;
}

function handleImageError(imgElement, appName) {
    imgElement.onerror = null;

    imgElement.src =
        `https://placehold.co/100x100/FFF9EF/73151B?text=${appName
            .substring(0, 3)
            .toUpperCase()}`;
}


// =========================================================
// DATABASE
// =========================================================

const database = [

    // =====================================================
    // STREAMING APPS
    // =====================================================

    {
        category: 'STREAMING APPS',
        id: 'netflix',
        name: 'Netflix',
        image: 'image/netflix.webp',

        stepLabels: [
            'Choose your plan',
            'Choose duration'
        ],

        data: {
            'SHARING': {
                '1 DAY': 4000,
                '2 DAYS': 6000,
                '3 DAYS': 9000,
                '5 DAYS': 12000,
                '7 DAYS': 15000,
                '14 DAYS': 24000,
                '21 DAYS': 34000,
                '1 MONTH': 45000
            },

            'PRIVATE': {
                '1 MONTH': 175000
            }
        }
    },


    {
        category: 'STREAMING APPS',
        id: 'disney',
        name: 'Disney',
        image: 'image/disney.webp',

        stepLabels: [
            'Choose your plan',
            'Choose duration'
        ],

        data: {
            'SHARING': {
                '1 DAY': 4000,
                '2 DAYS': 7000,
                '3 DAYS': 10000,
                '5 DAYS': 13000,
                '7 DAYS': 15000,
                '14 DAYS': 22000,
                '21 DAYS': 30000,
                '1 MONTH': 35000
            },

            'PRIVATE': {
                '1 MONTH': 130000
            }
        }
    },


    {
        category: 'STREAMING APPS',
        id: 'viu',
        name: 'Viu',
        image: 'image/viu.png',

        stepLabels: [
            'Choose your plan',
            'Choose duration'
        ],

        data: {
            'PRIVATE ANTI LIMIT': {
                '1 DAY': 2000,
                '2 DAYS': 3000,
                '3 DAYS': 4000,
                '5 DAYS': 5000,
                '7 DAYS': 6000,
                '1 MONTH': 10000,
                '2 MONTHS': 15000,
                '3 MONTHS': 17000,
                '4 MONTHS': 20000,
                '5 MONTHS': 23000,
                '6 MONTHS': 25000,
                '1 YEAR': 35000
            }
        }
    },


    {
        category: 'STREAMING APPS',
        id: 'iqiyi',
        name: 'iQIYI',
        image: 'image/iqiyi.png',

        stepLabels: [
            'Choose your plan',
            'Choose duration'
        ],

        data: {
            'SHARING STANDARD': {
                '1 MONTH': 10000,
                '3 MONTHS': 17000
            },

            'SHARING PREMIUM': {
                '1 MONTH': 12000,
                '3 MONTHS': 20000
            },

            'PRIVATE STANDARD': {
                '1 MONTH': 32000
            },

            'PRIVATE PREMIUM': {
                '1 MONTH': 37000
            }
        }
    },


    {
        category: 'STREAMING APPS',
        id: 'wetv',
        name: 'WeTV',
        image: 'image/wetv.jpeg',

        stepLabels: [
            'Choose your plan',
            'Choose duration'
        ],

        data: {
            'SHARING': {
                '1 MONTH': 13000
            },

            'ANTILIMIT': {
                '1 MONTH': 20000
            },

            'PRIVATE': {
                '1 MONTH': 35000
            }
        }
    },


    {
        category: 'STREAMING APPS',
        id: 'hbo',
        name: 'HBO',
        image: 'image/hbo.png',

        stepLabels: [
            'Choose your plan',
            'Choose duration'
        ],

        data: {
            'SHARING': {
                '1 DAY': 3500,
                '3 DAYS': 9000,
                '7 DAYS': 15000,
                '1 MONTH': 24000
            },

            'PRIVATE': {
                '1 MONTH': 90000
            }
        }
    },


    {
        category: 'STREAMING APPS',
        id: 'bstation',
        name: 'Bstation',
        image: 'image/bstation.jpeg',

        stepLabels: [
            'Choose your plan',
            'Choose duration'
        ],

        data: {
            'SHARING': {
                '1 MONTH': 13000
            },

            'PRIVATE': {
                '1 MONTH': 42000
            }
        }
    },


    {
        category: 'STREAMING APPS',
        id: 'loklok',
        name: 'Loklok',
        image: 'image/loklok.jpeg',

        stepLabels: [
            'Choose your plan',
            'Choose duration'
        ],

        data: {
            'SHARING BASIC': {
                '1 MONTH': 22000
            },

            'SHARING STANDART': {
                '1 MONTH': 27000
            }
        }
    },


    {
        category: 'STREAMING APPS',
        id: 'youku',
        name: 'Youku',
        image: 'image/youku.png',

        stepLabels: [
            'Choose your plan',
            'Choose duration'
        ],

        data: {
            'SHARING': {
                '1 MONTH': 10000,
                '3 MONTHS': 17000
            }
        }
    },


    {
        category: 'STREAMING APPS',
        id: 'pidioookk',
        name: 'Pidioookk',
        image: 'image/vidio.png',

        stepLabels: [
            'Choose device',
            'Choose plan',
            'Choose duration'
        ],

        data: {
            'TV': {
                'PRIVATE': {
                    '1 MONTH': 17000
                }
            },

            'MOBILE': {
                'PRIVATE': {
                    '1 MONTH': 30000
                }
            },

            'ALL DEVICE': {
                'PRIVATE': {
                    '1 MONTH': 45000
                }
            }
        }
    },


    {
        category: 'STREAMING APPS',
        id: 'youtube',
        name: 'YouTube',
        image: 'image/youtube.png',

        stepLabels: [
            'Choose your plan',
            'Choose duration'
        ],

        data: {
            'FAMPLAN': {
                '1 MONTH': 15000,
                '2 MONTHS': 25000
            },

            'INDPLAN': {
                '1 MONTH': 25000,
                '2 MONTHS': 35000
            }
        }
    },


    {
        category: 'STREAMING APPS',
        id: 'gagaoolala',
        name: 'GagaOOLala',
        image: 'image/gagaoolala.png',

        stepLabels: [
            'Choose your plan',
            'Choose duration'
        ],

        data: {
            'SHARING': {
                '1 MONTH': 18000
            }
        }
    },


    {
        category: 'STREAMING APPS',
        id: 'amazon-prime',
        name: 'Amazon Prime',
        image: 'image/prime.webp',

        stepLabels: [
            'Choose your plan',
            'Choose duration'
        ],

        data: {
            'SHARING': {
                '1 DAY': 3000,
                '3 DAYS': 6000,
                '7 DAYS': 8000,
                '1 MONTH (4U)': 10000,
                '1 MONTH (2U)': 13000
            },

            'PRIVATE': {
                '1 MONTH': 23000
            }
        }
    },


    // =====================================================
    // EDITING APPS
    // =====================================================

    {
        category: 'EDITING APPS',
        id: 'canva',
        name: 'Canva',
        image: 'image/canva.jpeg',

        stepLabels: [
            'Choose your plan',
            'Choose duration'
        ],

        data: {
            'MEMBER': {
                '1 DAY': 2000,
                '3 DAYS': 2500,
                '7 DAYS': 4000,
                '1 MONTH': 15000,
                '2 MONTHS': 17000,
                '3 MONTHS': 19000,
                '4 MONTHS': 21000,
                '5 MONTHS': 23000,
                '6 MONTHS': 25000
            },

            'DESIGNER': {
                '1 DAY': 3000,
                '3 DAYS': 3500,
                '7 DAYS': 5000,
                '1 MONTH': 16000,
                '2 MONTHS': 18000,
                '3 MONTHS': 19000,
                '4 MONTHS': 22000,
                '5 MONTHS': 24000,
                '6 MONTHS': 25000
            }
        }
    },


    {
        category: 'EDITING APPS',
        id: 'capcut',
        name: 'CapCut',
        image: 'image/capcut.png',

        stepLabels: [
            'Choose your plan',
            'Choose duration'
        ],

        data: {
            'SHARING': {
                '1 DAY': 3000,
                '2 DAYS': 5000,
                '3 DAYS': 7000,
                '7 DAYS': 9000
            },

            'PRIVATE': {
                '7 DAYS': 25000,
                '1 MONTH': 35000
            }
        }
    },


    {
        category: 'EDITING APPS',
        id: 'alight-motion',
        name: 'Alight Motion',
        image: 'image/alight.jpeg',

        stepLabels: [
            'Choose your plan',
            'Choose duration'
        ],

        data: {
            'SHARING': {
                '1 DAY': 1500,
                '7 DAYS': 5000,
                '1 MONTH': 8000,
                '2 MONTHS': 10000,
                '3 MONTHS': 12000,
                '4 MONTHS': 13000,
                '5 MONTHS': 14000,
                '6 MONTHS': 15000,
                '1 YEAR': 17000
            },

            'PRIVATE': {
                '7 DAYS': 8000,
                '1 MONTH': 18000,
                '1 YEAR': 25000
            }
        }
    }

];


// =========================================================
// CART & PRODUCT STATE
// =========================================================

let cart = [];

let currentCategoryName = '';

let currentProduct = null;

let currentSelections = [];

let currentCanvaEmail = '';


// =========================================================
// RUPIAH
// =========================================================

function formatRupiah(angka) {
    return 'Rp ' + Number(angka)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


// =========================================================
// NAVIGATION
// =========================================================

function navigate(viewId) {

    document
        .querySelectorAll('.view-section')
        .forEach(el => {
            el.classList.remove('active');
        });

    const target = document.getElementById('view-' + viewId);

    if (target) {
        target.classList.add('active');
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    if (viewId === 'cart') {
        renderCart();
    }
}


// =========================================================
// OPEN CATEGORY
// =========================================================

function openCategory(category) {

    currentCategoryName = category;

    document.getElementById('category-title').innerText = category;

    const listContainer =
        document.getElementById('app-list-container');

    listContainer.innerHTML = '';

    const apps =
        database.filter(app => app.category === category);

    apps.forEach(app => {

        const card =
            document.createElement('div');

        card.className = 'app-card';

        card.onclick = () => {
            openProduct(app.id);
        };

        card.innerHTML = `
            <img
                src="${getImageUrl(app.image, app.name)}"
                alt="${app.name}"
                onerror="handleImageError(this, '${app.name}')"
            >

            <h4>${app.name}</h4>
        `;

        listContainer.appendChild(card);
    });

    navigate('category');
}


// =========================================================
// OPEN PRODUCT
// =========================================================

function openProduct(productId) {

    currentProduct =
        database.find(app => app.id === productId);

    currentSelections = [];

    currentCanvaEmail = '';

    if (!currentProduct) {
        return;
    }

    document.getElementById('product-title').innerText =
        currentProduct.name;

    const img =
        document.getElementById('product-image');

    img.src =
        getImageUrl(
            currentProduct.image,
            currentProduct.name
        );

    img.onerror = () => {
        handleImageError(
            img,
            currentProduct.name
        );
    };

    renderProductSteps();

    navigate('product');
}


// =========================================================
// BACK PRODUCT STEP
// =========================================================

function goBackProductStep() {

    if (
        currentProduct &&
        currentProduct.id === 'canva' &&
        currentSelections.length === 2 &&
        currentCanvaEmail !== ''
    ) {
        currentCanvaEmail = '';

        renderProductSteps();

        return;
    }

    if (currentSelections.length > 0) {

        currentSelections.pop();

        renderProductSteps();

    } else {

        navigate('category');
    }
}


// =========================================================
// RENDER PRODUCT STEPS
// =========================================================

function renderProductSteps() {

    if (!currentProduct) {
        return;
    }

    const stepContainer =
        document.getElementById('step-container');

    const summaryContainer =
        document.getElementById('summary-container');

    const optionsContainer =
        document.getElementById('options-container');

    const stepLabel =
        document.getElementById('step-label');


    // =====================================================
    // CANVA EMAIL
    // =====================================================

    if (
        currentProduct.id === 'canva' &&
        currentSelections.length === 2 &&
        currentCanvaEmail === ''
    ) {

        stepContainer.style.display = 'block';

        summaryContainer.style.display = 'none';

        stepLabel.innerText =
            'Enter your Canva email';

        optionsContainer.innerHTML = `

            <div style="
                grid-column: 1 / -1;
                width: 100%;
            ">

                <input
                    type="email"
                    id="canva-email"
                    placeholder="your@email.com"
                    autocomplete="email"
                    style="
                        width: 100%;
                        padding: 12px;
                        border: 1px solid #c9d9e5;
                        border-radius: 7px;
                        font-family: Poppins, sans-serif;
                        font-size: 12px;
                        outline: none;
                    "
                >

                <button
                    class="btn-primary"
                    onclick="submitCanvaEmail()"
                    style="margin-top: 12px;"
                >
                    CONTINUE
                </button>

            </div>
        `;

        return;
    }


    // =====================================================
    // GET CURRENT DATA LEVEL
    // =====================================================

    let currentDataLevel =
        currentProduct.data;

    for (
        let i = 0;
        i < currentSelections.length;
        i++
    ) {

        currentDataLevel =
            currentDataLevel[
                currentSelections[i]
            ];
    }


    // =====================================================
    // FINAL SUMMARY
    // =====================================================

    if (
        currentSelections.length ===
        currentProduct.stepLabels.length
    ) {

        stepContainer.style.display = 'none';

        summaryContainer.style.display = 'block';


        document.getElementById(
            'summary-app-name'
        ).innerText =
            currentProduct.name;


        let summaryHTML =
            currentSelections.join('<br>');


        if (
            currentProduct.id === 'canva' &&
            currentCanvaEmail
        ) {

            summaryHTML += `
                <br>
                <strong>Email:</strong>
                ${currentCanvaEmail}
            `;
        }


        document.getElementById(
            'summary-details'
        ).innerHTML =
            summaryHTML;


        document.getElementById(
            'summary-price'
        ).innerText =
            formatRupiah(currentDataLevel);


        return;
    }


    // =====================================================
    // NORMAL OPTIONS
    // =====================================================

    stepContainer.style.display = 'block';

    summaryContainer.style.display = 'none';


    stepLabel.innerText =
        currentProduct.stepLabels[
            currentSelections.length
        ];


    optionsContainer.innerHTML = '';


    const options =
        Object.keys(currentDataLevel);


    options.forEach(opt => {

        const btn =
            document.createElement('button');

        btn.className =
            'option-btn';

        btn.innerText =
            opt;


        btn.onclick = () => {

            btn.classList.add(
                'active-simulated'
            );

            setTimeout(() => {

                currentSelections.push(opt);

                renderProductSteps();

            }, 120);
        };


        optionsContainer.appendChild(btn);
    });
}


// =========================================================
// SUBMIT CANVA EMAIL
// =========================================================

function submitCanvaEmail() {

    const input =
        document.getElementById('canva-email');

    if (!input) {
        return;
    }

    const email =
        input.value.trim();


    if (!email) {

        showToast(
            'Masukkan email Canva dulu!'
        );

        input.focus();

        return;
    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        showToast(
            'Format email belum benar!'
        );

        input.focus();

        return;
    }


    currentCanvaEmail = email;

    renderProductSteps();
}


// =========================================================
// ADD TO CART
// =========================================================

function addToCart() {

    if (!currentProduct) {
        return;
    }


    // Canva harus punya email
    if (
        currentProduct.id === 'canva' &&
        !currentCanvaEmail
    ) {

        showToast(
            'Email Canva belum diisi!'
        );

        return;
    }


    // Ambil harga
    let price =
        currentProduct.data;


    for (
        let i = 0;
        i < currentSelections.length;
        i++
    ) {

        price =
            price[
                currentSelections[i]
            ];
    }


    // Buat item
    const cartItem = {

        id: currentProduct.id,

        name: currentProduct.name,

        selections: [
            ...currentSelections
        ],

        price: Number(price),

        qty: 1,

        email:
            currentProduct.id === 'canva'
                ? currentCanvaEmail
                : null
    };


    // Cari item yang sama persis
    const existingItem =
        cart.find(item =>

            item.id === cartItem.id &&

            item.selections.join('|') ===
            cartItem.selections.join('|') &&

            item.email === cartItem.email
        );


    if (existingItem) {

        existingItem.qty += 1;

    } else {

        cart.push(cartItem);
    }


    updateCartBadge();

    showToast('ADDED TO CART!');

    navigate('category');
}


// =========================================================
// CART BADGE
// =========================================================

function updateCartBadge() {

    const totalItems =
        cart.reduce(
            (sum, item) =>
                sum + item.qty,
            0
        );


    const badge =
        document.getElementById(
            'cart-badge'
        );


    if (badge) {
        badge.innerText =
            totalItems;
    }
}


// =========================================================
// RECEIPT DATE
// =========================================================

function updateReceiptDate() {

    const dateElement =
        document.getElementById(
            'receipt-date'
        );

    if (!dateElement) {
        return;
    }


    const now =
        new Date();


    const formattedDate =
        now.toLocaleDateString(
            'id-ID',
            {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            }
        );


    dateElement.innerText =
        formattedDate;
}


// =========================================================
// RENDER CART / RECEIPT
// =========================================================

function renderCart() {

    const container =
        document.getElementById(
            'cart-items-container'
        );

    if (!container) {
        return;
    }


    container.innerHTML = '';


    updateReceiptDate();


    // Hide old footer
    const oldFooter =
        document.getElementById(
            'cart-footer'
        );

    if (oldFooter) {
        oldFooter.style.display =
            'none';
    }


    // =====================================================
    // EMPTY CART
    // =====================================================

    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <p>
                    Your cart is empty.
                </p>

                <button
                    class="btn-primary"
                    style="
                        margin-top: 20px;
                        width: auto;
                        padding: 10px 20px;
                    "
                    onclick="navigate('home')"
                >
                    BACK TO MENU
                </button>

            </div>
        `;


        document.getElementById(
            'cart-total-price'
        ).innerText =
            'Rp 0';


        return;
    }


    // =====================================================
    // CART ITEMS
    // =====================================================

    let totalPrice = 0;


    cart.forEach((item, index) => {

        const itemTotal =
            item.price * item.qty;


        totalPrice +=
            itemTotal;


        const detailsText =
            item.selections.join(' · ');


        const div =
            document.createElement('div');


        div.className =
            'receipt-item';


        div.innerHTML = `

            <div
                class="receipt-item-title"
            >
                ${String(index + 1).padStart(2, '0')}
                &nbsp; ${item.name}
            </div>


            <div
                class="receipt-item-details"
            >

                ${detailsText}

                ${
                    item.email
                        ? `<br>Email: ${item.email}`
                        : ''
                }

            </div>


            <div
                style="
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    margin-top:7px;
                "
            >

                <span
                    class="receipt-item-price"
                >
                    ${formatRupiah(itemTotal)}
                </span>

                <span
                    style="
                        font-size:10px;
                        color:#71879a;
                    "
                >
                    Qty: ${item.qty}
                </span>

            </div>


            <div class="cart-controls">

                <div class="qty-controls">

                    <button
                        class="qty-btn"
                        onclick="updateQty(${index}, -1)"
                    >
                        −
                    </button>


                    <span
                        style="
                            font-size:12px;
                            font-weight:600;
                        "
                    >
                        ${item.qty}
                    </span>


                    <button
                        class="qty-btn"
                        onclick="updateQty(${index}, 1)"
                    >
                        +
                    </button>

                </div>


                <button
                    class="remove-btn"
                    onclick="removeItem(${index})"
                >
                    Remove
                </button>

            </div>
        `;


        container.appendChild(div);
    });


    // =====================================================
    // TOTAL
    // =====================================================

    document.getElementById(
        'cart-total-price'
    ).innerText =
        formatRupiah(totalPrice);
}


// =========================================================
// UPDATE QTY
// =========================================================

function updateQty(index, change) {

    if (!cart[index]) {
        return;
    }


    cart[index].qty += change;


    if (cart[index].qty <= 0) {

        cart.splice(index, 1);
    }


    updateCartBadge();

    renderCart();
}


// =========================================================
// REMOVE ITEM
// =========================================================

function removeItem(index) {

    if (!cart[index]) {
        return;
    }


    cart.splice(index, 1);


    updateCartBadge();

    renderCart();


    showToast(
        'ITEM REMOVED'
    );
}


// =========================================================
// PROCESS ORDER
// =========================================================

function processOrder() {

    if (cart.length === 0) {

        showToast(
            'CART MASIH KOSONG!'
        );

        return;
    }


    let totalPrice = 0;


    // =====================================================
    // CUSTOMER DATA
    // =====================================================

    const usernameInput =
        document.getElementById(
            'order-username'
        );

    const deviceInput =
        document.getElementById(
            'order-device'
        );

    const paymentInput =
        document.getElementById(
            'order-payment'
        );


    const username =
        usernameInput
            ? usernameInput.value.trim()
            : '';


    const device =
        deviceInput
            ? deviceInput.value.trim()
            : '';


    const payment =
        paymentInput
            ? paymentInput.value
            : 'QRIS';


    // =====================================================
    // DATE
    // =====================================================

    const now =
        new Date();


    const date =
        now.toLocaleDateString(
            'id-ID',
            {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            }
        );


    // =====================================================
    // ORDER TEXT
    // =====================================================

    let orderText =
`╔══════════════════════════╗
        NASNOWCI
          ORDER
╚══════════════════════════╝

DATE
${date}

──────────────────────────
ITEM
`;


    // =====================================================
    // ITEMS
    // =====================================================

    cart.forEach((item, index) => {

        const subtotal =
            item.price * item.qty;


        totalPrice +=
            subtotal;


        orderText += `

${String(index + 1).padStart(2, '0')}  ${item.name}
    ${item.selections.join(' • ')}

`;


        if (item.email) {

            orderText +=
`    Email: ${item.email}
`;
        }


        orderText +=
`    Qty      : ${item.qty}
    Price    : ${formatRupiah(subtotal)}
`;
    });


    // =====================================================
    // TOTAL
    // =====================================================

    orderText +=
`

──────────────────────────
TOTAL
                         ${formatRupiah(totalPrice)}
──────────────────────────

CUSTOMER

Username
${username || '@__________'}

Device Login
${device || '________________'}

Payment
${payment}

──────────────────────────
      THANK YOU ♡
   NASNOWCI STORE
──────────────────────────`;


    // =====================================================
    // COPY
    // =====================================================

    const textarea =
        document.createElement(
            'textarea'
        );


    textarea.value =
        orderText;


    textarea.style.position =
        'fixed';

    textarea.style.left =
        '-9999px';


    document.body.appendChild(
        textarea
    );


    textarea.focus();

    textarea.select();


    try {

        const copied =
            document.execCommand(
                'copy'
            );


        if (copied) {

            showToast(
                'ORDER COPIED!'
            );

        } else {

            showToast(
                'Gagal copy order'
            );
        }

    } catch (err) {

        console.error(
            'Failed to copy:',
            err
        );

        showToast(
            'Gagal copy order'
        );

    } finally {

        document.body.removeChild(
            textarea
        );
    }
}


// =========================================================
// TOAST
// =========================================================

function showToast(message) {

    const toast =
        document.getElementById(
            'toast'
        );


    if (!toast) {
        return;
    }


    toast.innerText =
        message;


    toast.classList.add(
        'show'
    );


    setTimeout(() => {

        toast.classList.remove(
            'show'
        );

    }, 2500);
}


// =========================================================
// INITIALIZE
// =========================================================

updateCartBadge();
```
