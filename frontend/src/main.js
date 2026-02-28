import './style.css'
import { calculateCAT } from './calculator'

const mockData = [
  {
    id: 1,
    bank: 'Banco Nacional',
    product: 'Hipotecario Vivienda',
    baseRate: 6.5,
    type: 'hipotecario',
    initialCommissions: 50000,
    monthlyInsurance: 15000,
    term: 30,
    termLabel: 'Hasta 30 años'
  },
  {
    id: 2,
    bank: 'BAC Credomatic',
    product: 'Crédito Personal Rápido',
    baseRate: 15.0,
    type: 'personal',
    initialCommissions: 150000,
    monthlyInsurance: 5000,
    term: 5,
    termLabel: '1 a 5 años'
  },
  {
    id: 3,
    bank: 'Coopeservidores',
    product: 'Financiamiento Pyme',
    baseRate: 10.2,
    type: 'pyme',
    initialCommissions: 0,
    monthlyInsurance: 8000,
    term: 10,
    termLabel: 'Hasta 10 años'
  },
  {
    id: 4,
    bank: 'BCR',
    product: 'Vehículo Eléctrico',
    baseRate: 5.5,
    type: 'vehiculo',
    initialCommissions: 25000,
    monthlyInsurance: 12000,
    term: 8,
    termLabel: 'Hasta 8 años'
  }
];

// Utility to escape HTML and prevent XSS (A03: Injection)
function escapeHTML(str) {
  const p = document.createElement('p');
  p.textContent = str;
  return p.innerHTML;
}

function renderCards(data) {
  const container = document.getElementById('results');
  const amountInput = document.getElementById('amount');
  let amount = parseFloat(amountInput.value);

  // Input Validation (A03: Injection / Business Logic)
  if (isNaN(amount) || amount <= 0) {
    amount = 5000000; // Default or fallback
  }

  // Clear container before rendering
  container.innerHTML = '';

  if (data.length === 0) {
    container.innerHTML = '<p class="animate-fade">No se encontraron productos para los criterios seleccionados.</p>';
    return;
  }

  data.forEach(item => {
    const realCAT = calculateCAT(
      amount,
      item.baseRate / 12,
      item.term * 12,
      item.monthlyInsurance,
      item.initialCommissions
    );

    const card = document.createElement('div');
    card.className = 'rate-card animate-fade';

    // Using textContent for dynamic parts to prevent XSS (A03)
    card.innerHTML = `
      <div class="bank-name">${escapeHTML(item.bank)}</div>
      <h3 class="product-title">${escapeHTML(item.product)}</h3>
      <div class="cat-container">
        <span class="cat-value">${realCAT}%</span>
        <span class="cat-label">CAT Real</span>
      </div>
      <div class="details">
        <div class="detail-item">
          <span>Tasa Nominal</span>
          <p>${item.baseRate}%</p>
        </div>
        <div class="detail-item">
          <span>Costos Ocultos</span>
          <p>₡${(item.monthlyInsurance).toLocaleString()}/mes</p>
        </div>
      </div>
      <button class="btn-whatsapp">Contactar por WhatsApp</button>
    `;

    // Secure event binding instead of inline oncick (A04)
    card.querySelector('.btn-whatsapp').addEventListener('click', () => {
      window.alert(`Redirigiendo al Asesor Premium de ${item.bank}...`);
    });

    container.appendChild(card);
  });
}

// Initial render
renderCards(mockData);

// Dynamic updates with basic debounce/throttle behavior
let timeout;
const updateUI = () => {
  const type = document.getElementById('product-type').value;
  const filtered = type === 'all' ? mockData : mockData.filter(item => item.type === type);
  renderCards(filtered);
};

document.getElementById('product-type').addEventListener('change', updateUI);
document.getElementById('amount').addEventListener('input', () => {
  clearTimeout(timeout);
  timeout = setTimeout(updateUI, 300);
});
