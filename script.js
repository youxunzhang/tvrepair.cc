// 全局变量
let currentBrands = [];
let currentCategory = '';

// DOM元素
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const brandsGrid = document.getElementById('brandsGrid');
const totalBrands = document.getElementById('totalBrands');
const totalCategories = document.getElementById('totalCategories');
const categoryFilters = document.getElementById('categoryFilters');
const brandModal = document.getElementById('brandModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

// 初始化应用
function initializeApp() {
    currentBrands = [...brandsData];
    displayBrands(currentBrands);
    updateStats();
    generateCategoryFilters();
    generateSearchTags();
}

// 设置事件监听器
function setupEventListeners() {
    // 搜索功能
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // 模态框关闭
    closeModal.addEventListener('click', closeBrandModal);
    window.addEventListener('click', function(e) {
        if (e.target === brandModal) {
            closeBrandModal();
        }
    });

    // 热门搜索标签
    document.querySelectorAll('.tag[data-search]').forEach(tag => {
        tag.addEventListener('click', function() {
            const searchTerm = this.getAttribute('data-search');
            searchInput.value = searchTerm;
            performSearch();
        });
    });
}

// 显示品牌列表
function displayBrands(brands) {
    if (brands.length === 0) {
        brandsGrid.innerHTML = '<div class="no-results">没有找到相关品牌，请尝试其他搜索关键词</div>';
        return;
    }

    brandsGrid.innerHTML = brands.map(brand => `
        <div class="brand-card" onclick="showBrandDetail(${brand.id})">
            <div class="brand-logo">${brand.logo}</div>
            <h3 class="brand-name">${brand.name}</h3>
            <p class="brand-desc">${brand.description}</p>
            <div class="brand-categories">
                ${brand.categories.slice(0, 3).map(category => 
                    `<span class="category-tag">${category}</span>`
                ).join('')}
                ${brand.categories.length > 3 ? `<span class="category-tag">+${brand.categories.length - 3}</span>` : ''}
            </div>
            <button class="contact-btn">查看详情</button>
        </div>
    `).join('');
}

// 更新统计信息
function updateStats() {
    const uniqueCategories = new Set();
    currentBrands.forEach(brand => {
        brand.categories.forEach(category => uniqueCategories.add(category));
    });
    
    totalBrands.textContent = currentBrands.length;
    totalCategories.textContent = uniqueCategories.size;
}

// 生成分类筛选器
function generateCategoryFilters() {
    const categories = new Set();
    brandsData.forEach(brand => {
        brand.categories.forEach(category => categories.add(category));
    });

    categoryFilters.innerHTML = `
        <span class="filter-tag active" data-category="">全部</span>
        ${Array.from(categories).map(category => 
            `<span class="filter-tag" data-category="${category}">${category}</span>`
        ).join('')}
    `;

    // 添加筛选事件
    categoryFilters.querySelectorAll('.filter-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterByCategory(category);
            
            // 更新活跃状态
            categoryFilters.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// 生成搜索标签
function generateSearchTags() {
    // 这里可以动态生成更多搜索标签
    // 目前使用HTML中的静态标签
}

// 执行搜索
function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        // 如果搜索词为空，显示所有品牌
        currentBrands = [...brandsData];
        if (currentCategory) {
            filterByCategory(currentCategory);
        } else {
            displayBrands(currentBrands);
            updateStats();
        }
        return;
    }

    // 搜索逻辑
    const filteredBrands = brandsData.filter(brand => {
        // 搜索品牌名称
        if (brand.name.toLowerCase().includes(searchTerm)) {
            return true;
        }
        
        // 搜索品牌描述
        if (brand.description.toLowerCase().includes(searchTerm)) {
            return true;
        }
        
        // 搜索分类
        if (brand.categories.some(category => 
            category.toLowerCase().includes(searchTerm)
        )) {
            return true;
        }
        
        // 搜索产品名称
        if (brand.products.some(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        )) {
            return true;
        }
        
        // 搜索特色功能
        if (brand.features.some(feature => 
            feature.toLowerCase().includes(searchTerm)
        )) {
            return true;
        }
        
        return false;
    });

    currentBrands = filteredBrands;
    currentCategory = ''; // 清除当前分类筛选
    
    displayBrands(currentBrands);
    updateStats();
    
    // 重置分类筛选状态
    categoryFilters.querySelectorAll('.filter-tag').forEach(tag => {
        tag.classList.remove('active');
        if (tag.getAttribute('data-category') === '') {
            tag.classList.add('active');
        }
    });
}

// 按分类筛选
function filterByCategory(category) {
    currentCategory = category;
    
    if (category === '') {
        // 显示所有品牌
        currentBrands = [...brandsData];
    } else {
        // 按分类筛选
        currentBrands = brandsData.filter(brand => 
            brand.categories.includes(category)
        );
    }
    
    displayBrands(currentBrands);
    updateStats();
}

// 显示品牌详情
function showBrandDetail(brandId) {
    const brand = brandsData.find(b => b.id === brandId);
    if (!brand) return;

    modalContent.innerHTML = `
        <div class="modal-brand-header">
            <div class="modal-brand-logo">${brand.logo}</div>
            <h2 class="modal-brand-name">${brand.name}</h2>
            <p class="modal-brand-desc">${brand.description}</p>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title">产品分类</h3>
            <div class="modal-categories">
                ${brand.categories.map(category => 
                    `<span class="modal-category-tag">${category}</span>`
                ).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title">联系方式</h3>
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
            <h3 class="modal-section-title">主打产品</h3>
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
            <h3 class="modal-section-title">技术特色</h3>
            <div class="modal-categories">
                ${brand.features.map(feature => 
                    `<span class="modal-category-tag">${feature}</span>`
                ).join('')}
            </div>
        </div>
    `;

    brandModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // 防止背景滚动
}

// 关闭品牌详情模态框
function closeBrandModal() {
    brandModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // 恢复背景滚动
}

// 键盘快捷键支持
document.addEventListener('keydown', function(e) {
    // ESC键关闭模态框
    if (e.key === 'Escape' && brandModal.style.display === 'block') {
        closeBrandModal();
    }
    
    // Ctrl/Cmd + K 聚焦搜索框
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
});

// 搜索建议功能
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim().toLowerCase();
    
    if (searchTerm.length < 2) return;
    
    // 这里可以添加搜索建议功能
    // 比如显示匹配的品牌名称或分类
});

// 性能优化：防抖搜索
let searchTimeout;
searchInput.addEventListener('input', function() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        if (this.value.trim() === '') {
            performSearch();
        }
    }, 500);
});

// 添加品牌卡片悬停效果
function addBrandCardHoverEffects() {
    const brandCards = document.querySelectorAll('.brand-card');
    brandCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// 页面加载完成后的额外初始化
window.addEventListener('load', function() {
    addBrandCardHoverEffects();
    
    // 添加页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 导出函数供全局使用
window.showBrandDetail = showBrandDetail;
window.closeBrandModal = closeBrandModal; 