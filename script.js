document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. تفاعل زر إضافة منتج للسلة (Quick Add) ---
    const quickAddButtons = document.querySelectorAll('.quick-add');
    const cartCountSpan = document.querySelector('.cart-count');
    let cartCount = 0;

    quickAddButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // منع الحدث من التأثير على العناصر المحيطة
            e.stopPropagation();
            
            // زيادة عدد السلة
            cartCount++;
            cartCountSpan.textContent = cartCount;

            // تغيير نص الزر مؤقتاً لتأكيد الإضافة
            const originalText = button.textContent;
            button.textContent = "✓ تمت الإضافة";
            button.style.backgroundColor = "#8C6D53"; // لون البني الثانوي

            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = "#3D2C22"; // الرجوع للون الأساسي
            }, 1500);
        });
    });

    // --- 2. تفاعل القائمة الجانبية للموبايل (Mobile Menu Toggle) ---
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            // إظهار أو إخفاء القائمة في الشاشات الصغيرة
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.right = '0';
                navLinks.style.backgroundColor = '#F7F4F0';
                navLinks.style.width = '100%';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 10px 15px rgba(61, 44, 34, 0.1)';
                navLinks.style.borderBottom = '1px solid rgba(61, 44, 34, 0.1)';
            }
        });
    }

    // --- 3. تأثير بسيط لشريط البحث ---
    const searchInput = document.querySelector('.search-box input');
    
    searchInput.addEventListener('focus', () => {
        searchInput.parentElement.style.borderColor = '#3D2C22';
        searchInput.parentElement.style.boxShadow = '0 0 5px rgba(61, 44, 34, 0.1)';
    });

    searchInput.addEventListener('blur', () => {
        searchInput.parentElement.style.borderColor = 'rgba(61, 44, 34, 0.2)';
        searchInput.parentElement.style.boxShadow = 'none';
    });

});
