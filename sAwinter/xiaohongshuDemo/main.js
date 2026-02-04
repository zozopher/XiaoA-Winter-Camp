let dpCreation = document.querySelector('.creation');
let dpBusiness = document.querySelector('.business');
let functionBtn = document.querySelectorAll('.function-list li');

functionBtn.forEach((item,index) => {
    item.addEventListener('mouseenter', function() {
        dpCreation.style.display = 'none';
        dpBusiness.style.display = 'none';

        if (index === 0) {
            dpCreation.style.display = 'block';
        } else if (index === 1) {
            dpBusiness.style.display = 'block';
        }

    });
});

let dpList = document.querySelectorAll('.dplist');
dpList.forEach((item) => {
    item.addEventListener('mouseleave', function() {
        item.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const contentContainer = document.querySelector('.content-container');
    const restLength = 100; 
    

    window.addEventListener('scroll', function() {
        const scrollBottom = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
        
        if (scrollBottom < restLength) {
            loadMoreContent();
        }
    });
    
    function loadMoreContent() {
        for (let i = 0; i < 20; i++) {
            addContentCard();
        }
    }
    
    function addContentCard() {
        const card = document.createElement('div');
        card.className = 'content-card';
        
        card.innerHTML = `
            <div class="card-img"></div>
            <div class="card-title">这是一个标题</div>
            <div class="card-infor">
                <div class="infor-avatar">
                    <div class="avatar-img">
                        <svg t="1770104297950" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16370" width="23" height="23">
                            <path d="M510 64.4c-246.5 0-447.6 200-447.6 447.6 0 246.5 200 447.6 447.6 447.6 246.5 0 447.6-200 447.6-447.6 0-246.5-200.1-447.6-447.6-447.6z m0 831.9c-212.3 0-384.3-172-384.3-384.3s172-384.3 384.3-384.3 384.3 172 384.3 384.3-172 384.3-384.3 384.3z m229.1-181.2c-18.4-70.4-67.9-125.5-131.2-153.6 48-30.6 79.6-84.2 79.6-144.9 0-94.9-77.1-172-172-172s-172 77.1-172 172c0 61.2 31.6 114.8 79.6 144.9-63.8 27.6-113.3 83.2-131.7 153.6-4.1 16.3 5.6 33.2 21.9 37.3 2.6 0.5 5.1 1 7.7 1 13.8 0 26-9.2 29.6-23 19.4-75 87.3-127.1 164.3-127.1S660 655.4 679.4 730.4c4.1 16.3 20.9 26 37.3 21.9 16.8-4 27-20.9 22.4-37.2zM515.6 305.8c61.2 0 110.7 49.5 110.7 110.7s-49.5 110.7-110.7 110.7-110.7-49.5-110.7-110.7 49.5-110.7 110.7-110.7z" fill="#8a8a8a" p-id="16371"></path>
                        </svg>
                    </div>
                    <span class="avatar-name">用户名</span>
                </div>
                <div class="likes">
                    <svg t="1770104234057" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14401" width="23" height="23">
                        <path d="M523.733333 841.024l33.173334-32.576 99.690666-97.813333c70.976-69.632 120.32-117.973333 138.709334-135.893334 59.008-57.514667 93.248-121.28 99.626666-184.234666 6.250667-61.44-15.488-119.744-61.589333-164.672-44.992-43.84-98.88-61.909333-157.034667-52.906667-49.365333 7.616-101.034667 34.624-150.016 78.848a21.333333 21.333333 0 0 1-28.586666 0c-48.981333-44.224-100.650667-71.232-150.016-78.869333-58.154667-8.96-112.042667 9.088-157.034667 52.928-46.101333 44.928-67.84 103.210667-61.610667 164.693333 6.4 62.933333 40.64 126.72 99.648 184.213333a100207.573333 100207.573333 0 0 1 145.92 142.826667l24.256 23.765333L512 852.522667l11.733333-11.498667z m-11.733333 11.52l-1.493333 1.429333A2.133333 2.133333 0 0 1 512 853.333333c0.512 0 1.045333 0.213333 1.493333 0.64l-1.493333-1.450666z m157.781333-721.792c71.637333-11.093333 138.901333 11.477333 193.344 64.533333 55.317333 53.930667 81.834667 124.992 74.282667 199.530667-7.466667 73.642667-46.549333 146.368-112.32 210.474667-18.346667 17.898667-67.669333 66.218667-138.453333 135.637333-31.829333 31.232-65.706667 64.448-99.84 97.984L553.6 871.466667l-13.184 12.949333a40.554667 40.554667 0 0 1-56.832 0l-114.602667-112.64-24.213333-23.722667a677626.346667 677626.346667 0 0 0-145.856-142.762666C133.141333 541.184 94.08 468.48 86.613333 394.816c-7.552-74.538667 18.944-145.6 74.282667-199.530667 54.442667-53.056 121.706667-75.605333 193.344-64.533333 53.162667 8.213333 107.093333 34.688 157.781333 76.949333 50.709333-42.24 104.618667-68.736 157.781334-76.949333z" fill="#8a8a8a" p-id="14402"></path>
                    </svg>
                    <span class="likes-num">0210</span>
                </div>
            </div>
        `;
        
        contentContainer.appendChild(card);
    }
});