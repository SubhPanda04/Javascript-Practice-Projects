const data = [];
for (let i = 1; i <= 100; i++) {
    data.push(`Item ${i}`);
}
const itemsPerPage = 10;
let currentPage = 1;

const updatePagination = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = currentPage * itemsPerPage;
    document.getElementById('data-container').innerHTML = data.slice(start, end).map(item => `<div>${item}</div>`).join('');
    const totalPages = Math.ceil(data.length / itemsPerPage);
    document.getElementById('pagination-container').innerHTML = `
        ${currentPage > 1 ? `<button onclick="currentPage--; updatePagination()">Previous</button>` : ''}
        ${Array.from({ length: totalPages }, (_, i) => `<button onclick="currentPage=${i + 1}; updatePagination()" ${i + 1 === currentPage ? 'disabled' : ''}>${i + 1}</button>`).join('')}
        ${currentPage < totalPages ? `<button onclick="currentPage++; updatePagination()">Next</button>` : ''}
    `;
};

updatePagination();