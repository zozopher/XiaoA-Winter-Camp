//点赞、收藏效果实现
const sideBtns = document.querySelectorAll('.side-btn');
sideBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

//大小图切换
document.addEventListener('DOMContentLoaded', function() {
    const contentImgs = document.querySelector('.content-imgs');
    const gridContainer = document.querySelector('.grid-container');
    const gridItems = document.querySelectorAll('.grid-item');
    
    //收集所有图片路径
    const images = Array.from(gridItems).map(item => 
        item.querySelector('img').src
    );
    
    let currentIndex = 0;
    
    //创建大图模式容器
    const largeContainer = document.createElement('div');
    largeContainer.className = 'large-image-container';
    
    //创建大图
    const largeImage = document.createElement('img');
    largeImage.className = 'large-image';
    largeImage.src = images[0]; 
    
    //创建左右切换按钮
    const prevBtn = document.createElement('div');
    prevBtn.className = 'nav-btn prev';
    prevBtn.innerHTML = '❮';
    
    const nextBtn = document.createElement('div');
    nextBtn.className = 'nav-btn next';
    nextBtn.innerHTML = '❯';
    
    //创建预览小图容器
    const previewContainer = document.createElement('div');
    previewContainer.className = 'preview-container';
    
    //组装大图容器
    largeContainer.appendChild(prevBtn);
    largeContainer.appendChild(nextBtn);
    largeContainer.appendChild(largeImage);
    largeContainer.appendChild(previewContainer);
    
    //插入到gridContainer之前
    contentImgs.insertBefore(largeContainer, gridContainer);
    
    //创建预览小图
    images.forEach((src, index) => {
        const previewItem = document.createElement('div');
        previewItem.className = 'preview-item';
        if (index === 0) previewItem.classList.add('active'); 
        
        const previewImg = document.createElement('img');
        previewImg.src = src;
        
        previewItem.appendChild(previewImg);
        previewContainer.appendChild(previewItem);
        
        //预览小图点击事件
        previewItem.addEventListener('click', function(e) {
            e.stopPropagation(); //防止冒泡
            switchImage(index);
        });
    });
    
    //获取所有预览小图
    const previewItems = document.querySelectorAll('.preview-item');
    
    //切换图片函数
    function switchImage(index) {
        currentIndex = index;
        
        //更新大图
        largeImage.src = images[currentIndex];
        
        //更新预览小图选中状态
        previewItems.forEach((item, i) => {
            if (i === currentIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
    
    //小图点击事件 - 进入大图模式
    gridItems.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            
            //切换到对应图片
            switchImage(index);
            
            //隐藏九宫格
            gridContainer.style.display = 'none';
            
            //显示大图模式
            largeContainer.classList.add('active');
        });
    });
    
    //大图点击事件 - 返回九宫格
    largeImage.addEventListener('click', function(e) {
        e.stopPropagation();
        
        //显示九宫格
        gridContainer.style.display = 'grid';
        
        //隐藏大图模式
        largeContainer.classList.remove('active');
    });
    
    //上一张按钮
    prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        
        if (currentIndex > 0) {
            switchImage(currentIndex - 1);
        } else {
            //循环到最后一张
            switchImage(images.length - 1);
        }
    });
    
    //下一张按钮
    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        
        if (currentIndex < images.length - 1) {
            switchImage(currentIndex + 1);
        } else {
            //循环到第一张
            switchImage(0);
        }
    });
    
    //防止点击预览容器和按钮时关闭大图模式
    previewContainer.addEventListener('click', function(e) {
        e.stopPropagation();
    });

});