document.addEventListener('DOMContentLoaded', function() {
    // Lấy đối tượng nút cuộn và khu vực chứa danh sách game
    const btnScrollDown = document.getElementById('btnScrollDown');
    const gameListSection = document.getElementById('game-list');

    // Thêm sự kiện click cho nút "Khám phá ngay"
    if (btnScrollDown && gameListSection) {
        btnScrollDown.addEventListener('click', function() {
            // Cuộn mượt mà xuống Section 2 (game-list)
            gameListSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' 
            });
        });
    }

    // Nút cuộn lên đầu trang
    const btnScrollTop = document.getElementById('btnScrollTop');
    
    if (btnScrollTop) {
        // Hiện/ẩn nút dựa trên vị trí cuộn
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                btnScrollTop.classList.add('show');
            } else {
                btnScrollTop.classList.remove('show');
            }
        });

        // Xử lý sự kiện click để cuộn mượt lên đầu trang
        btnScrollTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
