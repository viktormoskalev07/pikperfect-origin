if(document.querySelector(".swiperDescription"))var swiper=new Swiper(".swiperDescription",{pagination:{el:".swiperDescription-pagination",clickable:!0},grabCursor:!0,autoplay:{delay:3e3}});swiper=new Swiper(".section-reviews__swiper",{loop:!0,autoplay:{delay:3e3},navigation:{nextEl:".section-reviews__button-next",prevEl:".section-reviews__button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:100},1200:{slidesPerView:3,spaceBetween:100},1400:{slidesPerView:3,spaceBetween:115}}});var swiperTabsControl=new Swiper(".section-hero__tab-activators",{slidesPerView:6,direction:"vertical",cssMode:!0,spaceBetween:15}),swiperTabs=new Swiper(".section-hero__swiper",{pagination:{el:".section-hero__swiper-pagination",clickable:!0},thumbs:{swiper:swiperTabsControl}});function videoInSlider(){let e=1;const i=document.querySelector(".hero-video-slide"),t=document.querySelector(".hero-video-slide__preloader");const r=new MutationObserver((function(){e&&i&&i.matches(".swiper-slide-active")&&(video=document.getElementById("hero-video"),video.src=video.dataset.src,e=0,setTimeout(()=>{t.style.opacity=0},1e3),r.disconnect())}));r.observe(i,{childList:!1,attributes:!0,characterData:!1,attributeFilter:["class"]})}videoInSlider();