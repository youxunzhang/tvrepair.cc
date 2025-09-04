// Global TV Brands Application
let currentBrands = [];
let currentRegion = '';
let currentCategory = '';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const brandsGrid = document.getElementById('brandsGrid');
const totalBrands = document.getElementById('totalBrands');
const totalCategories = document.getElementById('totalCategories');
const totalCountries = document.getElementById('totalCountries');
const regionFilters = document.getElementById('regionFilters');
const categoryFilters = document.getElementById('categoryFilters');
const brandModal = document.getElementById('brandModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

// Initialize Application
function initializeApp() {
    currentBrands = [...globalBrandsData];
    displayBrands(currentBrands);
    updateStats();
    generateRegionFilters();
    generateCategoryFilters();
    generateSearchTags();
    preloadLogos();
}

// Preload Logos for Better Performance
function preloadLogos() {
    const logoUrls = globalBrandsData.map(brand => brand.logo);
    logoUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Search functionality
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Modal close
    closeModal.addEventListener('click', closeBrandModal);
    window.addEventListener('click', function(e) {
        if (e.target === brandModal) {
            closeBrandModal();
        }
    });

    // Popular search tags
    document.querySelectorAll('.tag[data-search]').forEach(tag => {
        tag.addEventListener('click', function() {
            const searchTerm = this.getAttribute('data-search');
            searchInput.value = searchTerm;
            performSearch();
        });
    });
}

// Display Brands
function displayBrands(brands) {
    if (brands.length === 0) {
        brandsGrid.innerHTML = '<div class="no-results">No brands found matching your search criteria. Please try different keywords.</div>';
        return;
    }

    brandsGrid.innerHTML = brands.map(brand => `
        <div class="brand-card" onclick="showBrandDetail(${brand.id})">
            <div class="brand-header">
                <div class="brand-logo loading" id="logo-${brand.id}">
                    <img src="${brand.logo}" alt="${brand.logoAlt}" class="brand-logo-img" 
                         onload="handleLogoLoad(${brand.id})" 
                         onerror="handleLogoError(${brand.id}, '${brand.name}')">
                    <div class="brand-logo-fallback" style="display: none;">${brand.name.charAt(0)}</div>
                </div>
                <div class="brand-info">
                    <h3>${brand.name}</h3>
                    <div class="brand-country">${brand.country}</div>
                </div>
            </div>
            <p class="brand-desc">${brand.description}</p>
            <div class="brand-categories">
                ${brand.categories.slice(0, 3).map(category => 
                    `<span class="category-tag">${category}</span>`
                ).join('')}
                ${brand.categories.length > 3 ? `<span class="category-tag">+${brand.categories.length - 3}</span>` : ''}
            </div>
            <button class="contact-btn">View Details</button>
        </div>
    `).join('');
}

// Handle Logo Loading
function handleLogoLoad(brandId) {
    const logoContainer = document.getElementById(`logo-${brandId}`);
    if (logoContainer) {
        logoContainer.classList.remove('loading');
        const img = logoContainer.querySelector('.brand-logo-img');
        if (img) {
            img.classList.add('loaded');
        }
    }
}

// Handle Logo Error
function handleLogoError(brandId, brandName) {
    const logoContainer = document.getElementById(`logo-${brandId}`);
    if (logoContainer) {
        logoContainer.classList.remove('loading');
        const img = logoContainer.querySelector('.brand-logo-img');
        const fallback = logoContainer.querySelector('.brand-logo-fallback');
        
        if (img) img.style.display = 'none';
        if (fallback) fallback.style.display = 'flex';
    }
}

// Update Statistics
function updateStats() {
    const uniqueCategories = new Set();
    const uniqueCountries = new Set();
    
    currentBrands.forEach(brand => {
        brand.categories.forEach(category => uniqueCategories.add(category));
        uniqueCountries.add(brand.country);
    });
    
    totalBrands.textContent = currentBrands.length;
    totalCategories.textContent = uniqueCategories.size;
    totalCountries.textContent = uniqueCountries.size;
}

// Generate Region Filters
function generateRegionFilters() {
    const regions = new Set();
    globalBrandsData.forEach(brand => {
        regions.add(brand.region);
    });

    regionFilters.innerHTML = `
        <span class="filter-tag active" data-region="">All Regions</span>
        ${Array.from(regions).map(region => 
            `<span class="filter-tag" data-region="${region}">${region}</span>`
        ).join('')}
    `;

    // Add filter events
    regionFilters.querySelectorAll('.filter-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            const region = this.getAttribute('data-region');
            filterByRegion(region);
            
            // Update active state
            regionFilters.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Generate Category Filters
function generateCategoryFilters() {
    const categories = new Set();
    globalBrandsData.forEach(brand => {
        brand.categories.forEach(category => categories.add(category));
    });

    categoryFilters.innerHTML = `
        <span class="filter-tag active" data-category="">All Categories</span>
        ${Array.from(categories).map(category => 
            `<span class="filter-tag" data-category="${category}">${category}</span>`
        ).join('')}
    `;

    // Add filter events
    categoryFilters.querySelectorAll('.filter-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterByCategory(category);
            
            // Update active state
            categoryFilters.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Generate Search Tags
function generateSearchTags() {
    // Currently using HTML static tags
}

// Perform Search
function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        // Show all brands if search is empty
        currentBrands = [...globalBrandsData];
        if (currentRegion || currentCategory) {
            applyFilters();
        } else {
            displayBrands(currentBrands);
            updateStats();
        }
        return;
    }

    // Search logic
    const filteredBrands = globalBrandsData.filter(brand => {
        // Search brand name
        if (brand.name.toLowerCase().includes(searchTerm)) {
            return true;
        }
        
        // Search country
        if (brand.country.toLowerCase().includes(searchTerm)) {
            return true;
        }
        
        // Search description
        if (brand.description.toLowerCase().includes(searchTerm)) {
            return true;
        }
        
        // Search categories
        if (brand.categories.some(category => 
            category.toLowerCase().includes(searchTerm)
        )) {
            return true;
        }
        
        // Search product names
        if (brand.products.some(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        )) {
            return true;
        }
        
        // Search features
        if (brand.features.some(feature => 
            feature.toLowerCase().includes(searchTerm)
        )) {
            return true;
        }
        
        return false;
    });

    currentBrands = filteredBrands;
    currentRegion = ''; // Clear current filters
    currentCategory = '';
    
    displayBrands(currentBrands);
    updateStats();
    
    // Reset filter states
    regionFilters.querySelectorAll('.filter-tag').forEach(tag => {
        tag.classList.remove('active');
        if (tag.getAttribute('data-region') === '') {
            tag.classList.add('active');
        }
    });
    
    categoryFilters.querySelectorAll('.filter-tag').forEach(tag => {
        tag.classList.remove('active');
        if (tag.getAttribute('data-category') === '') {
            tag.classList.add('active');
        }
    });
}

// Filter by Region
function filterByRegion(region) {
    currentRegion = region;
    applyFilters();
}

// Filter by Category
function filterByCategory(category) {
    currentCategory = category;
    applyFilters();
}

// Apply Filters
function applyFilters() {
    let filteredBrands = [...globalBrandsData];
    
    // Apply region filter
    if (currentRegion) {
        filteredBrands = filteredBrands.filter(brand => brand.region === currentRegion);
    }
    
    // Apply category filter
    if (currentCategory) {
        filteredBrands = filteredBrands.filter(brand => 
            brand.categories.includes(currentCategory)
        );
    }
    
    currentBrands = filteredBrands;
    displayBrands(currentBrands);
    updateStats();
}

// Show Brand Detail
function showBrandDetail(brandId) {
    const brand = globalBrandsData.find(b => b.id === brandId);
    if (!brand) return;

    modalContent.innerHTML = `
        <div class="modal-brand-header">
            <div class="modal-brand-logo">${brand.logo}</div>
            <h2 class="modal-brand-name">${brand.name}</h2>
            <div class="modal-brand-country">${brand.country}</div>
            <p class="modal-brand-desc">${brand.description}</p>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title">Product Categories</h3>
            <div class="modal-categories">
                ${brand.categories.map(category => 
                    `<span class="modal-category-tag">${category}</span>`
                ).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title">Contact Information</h3>
            <div class="modal-contact-info">
                <div class="contact-item">
                    <span class="contact-icon">📞</span>
                    <a href="tel:${brand.contact.phone}" class="contact-link">${brand.contact.phone}</a>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">✉️</span>
                    <a href="mailto:${brand.contact.email}" class="contact-link">${brand.contact.email}</a>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">🌐</span>
                    <a href="${brand.contact.website}" target="_blank" class="contact-link">${brand.contact.website}</a>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">📍</span>
                    <span>${brand.contact.address}</span>
                </div>
            </div>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title">Featured Products</h3>
            <div class="modal-products">
                ${brand.products.map(product => `
                    <div class="product-item">
                        <div class="product-name">${product.name}</div>
                        <div class="product-desc">${product.description}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title">Key Features</h3>
            <div class="modal-categories">
                ${brand.features.map(feature => 
                    `<span class="modal-category-tag">${feature}</span>`
                ).join('')}
            </div>
        </div>
    `;

    brandModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Brand Modal
function closeBrandModal() {
    brandModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Keyboard Shortcuts
document.addEventListener('keydown', function(e) {
    // ESC key to close modal
    if (e.key === 'Escape' && brandModal.style.display === 'block') {
        closeBrandModal();
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
});

// Search Suggestions
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim().toLowerCase();
    
    if (searchTerm.length < 2) return;
    
    // Could add search suggestions here
});

// Performance Optimization: Debounced Search
let searchTimeout;
searchInput.addEventListener('input', function() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        if (this.value.trim() === '') {
            performSearch();
        }
    }, 500);
});

// Add Brand Card Hover Effects
function addBrandCardHoverEffects() {
    const brandCards = document.querySelectorAll('.brand-card');
    brandCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Page Load Completion
window.addEventListener('load', function() {
    addBrandCardHoverEffects();
    
    // Add page load animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Export functions for global use
window.showBrandDetail = showBrandDetail;
window.closeBrandModal = closeBrandModal; 