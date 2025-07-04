# Global TV Brands Directory

A comprehensive directory showcasing major television manufacturers from around the world, featuring both international and Chinese brands with professional English descriptions.

## Features

### 🌍 Global Coverage
- **International Brands**: Samsung, LG, Sony, Panasonic, Sharp, Philips, Toshiba, Vizio
- **Chinese Brands**: TCL, Hisense, Skyworth, Changhong, Konka, Xiaomi, Huawei
- **European Brands**: Thomson, Grundig, Loewe, Blaupunkt, Bang & Olufsen
- **Regional Brands**: Vestel, Beko, Arçelik (Turkey), and more

### 🔍 Advanced Search & Filtering
- **Multi-dimensional Search**: Brand names, countries, categories, products, features
- **Region Filtering**: Asia, Europe, Americas
- **Category Filtering**: 4K TV, OLED TV, QLED TV, Smart TV, Gaming TV, etc.
- **Real-time Statistics**: Total brands, categories, and countries

### 📱 Modern Interface
- **Responsive Design**: Perfect for desktop, tablet, and mobile
- **Professional UI**: Clean, modern design with smooth animations
- **Interactive Elements**: Hover effects, modal dialogs, smooth transitions

## File Structure

```
电视/
├── index.html              # Main page (Global brands showcase)
├── global-styles.css       # Global brands styling
├── global-data.js          # Global brands data (10 brands sample)
├── global-script.js        # Global brands functionality
├── GLOBAL-README.md        # This documentation
├── chinese-brands.html     # Chinese brands page
├── styles.css              # Chinese brands styling
├── data.js                 # Chinese brands data
├── script.js               # Chinese brands functionality
└── README.md               # Chinese brands documentation
```

## Usage

### 1. Direct Access
Simply open `index.html` in any modern web browser to access the main global brands page.

### 2. Page Navigation
- **Main Page**: `index.html` - Global TV brands showcase (English interface)
- **Chinese Page**: `chinese-brands.html` - Chinese TV brands showcase (Chinese interface)

### 2. Local Server (Recommended)
For optimal performance, use a local server:

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000/index.html`

## Brand Information

Each brand includes comprehensive information:

### Contact Details
- 📞 **Phone**: Direct customer service numbers
- ✉️ **Email**: Official support email addresses
- 🌐 **Website**: Official brand websites
- 📍 **Address**: Corporate headquarters

### Product Categories
- 4K TV, 8K TV, OLED TV, QLED TV
- Smart TV, Gaming TV, Premium TV
- Laser TV, Mini LED TV, The Frame TV

### Key Features
- Advanced display technologies
- Smart platforms and AI features
- Audio technologies and gaming modes
- Design innovations and eco-friendly features

## Sample Brands Included

### Major International Brands
1. **Samsung** (South Korea) - QLED and Micro LED technology
2. **LG** (South Korea) - OLED technology leader
3. **Sony** (Japan) - Premium picture quality
4. **Panasonic** (Japan) - Professional-grade displays
5. **Sharp** (Japan) - XLED technology pioneer
6. **Philips** (Netherlands) - Ambilight innovation
7. **Toshiba** (Japan) - Reliable performance
8. **Vizio** (USA) - High-value smart TVs
9. **TCL** (China) - Global electronics leader
10. **Hisense** (China) - Laser TV specialist

### Chinese Brands
- **Skyworth** - OLED and eye protection
- **Changhong** - Military-grade reliability
- **Konka** - Stable performance
- **Xiaomi** - Internet-focused approach
- **Huawei** - HarmonyOS smart screens

## Technical Features

### Frontend Technology
- **Pure HTML/CSS/JavaScript**: No framework dependencies
- **Responsive Grid Layout**: CSS Grid for flexible brand cards
- **Modern CSS**: Flexbox, CSS Grid, animations, gradients
- **Progressive Enhancement**: Works without JavaScript

### Interactive Features
- **Real-time Search**: Instant filtering as you type
- **Modal Dialogs**: Detailed brand information popups
- **Keyboard Shortcuts**: ESC to close, Ctrl+K to search
- **Touch-friendly**: Optimized for mobile devices

### Performance Optimizations
- **Debounced Search**: Prevents excessive API calls
- **Lazy Loading**: Efficient modal content generation
- **Smooth Animations**: CSS transitions for better UX
- **Optimized Images**: Minimal resource usage

## Customization

### Adding More Brands
To add more brands, edit `global-data.js`:

```javascript
{
    id: 11,
    name: "New Brand",
    logo: "N",
    country: "Country Name",
    region: "Region",
    description: "Brand description...",
    categories: ["4K TV", "Smart TV"],
    contact: {
        phone: "+1-234-567-8900",
        email: "service@newbrand.com",
        website: "https://www.newbrand.com",
        address: "Company Address"
    },
    products: [
        { name: "Product Name", description: "Product description" }
    ],
    features: ["Feature 1", "Feature 2"]
}
```

### Styling Modifications
- Edit `global-styles.css` for visual changes
- Modify color schemes, layouts, and animations
- Customize responsive breakpoints

### Functionality Enhancements
- Add new search filters in `global-script.js`
- Implement additional interactive features
- Extend modal content and functionality

## Browser Compatibility

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile Browsers**: iOS Safari, Chrome Mobile

## Future Enhancements

### Planned Features
- **Advanced Filtering**: Price range, screen size, release year
- **Comparison Tool**: Side-by-side brand comparison
- **User Reviews**: Customer ratings and reviews
- **Dealer Locator**: Find authorized dealers
- **News Integration**: Latest brand announcements

### Data Expansion
- **100+ Brands**: Complete global directory
- **Regional Variants**: Country-specific models
- **Historical Data**: Brand evolution timeline
- **Market Share**: Industry statistics

## Support

For questions or suggestions about the Global TV Brands Directory:

1. **Documentation**: Check this README file
2. **Code Issues**: Review the JavaScript console for errors
3. **Feature Requests**: Consider the customization section above

---

**Global TV Brands Directory** - Connecting the world through television technology! 