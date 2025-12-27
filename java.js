    // -------------------- كود الجافاسكريبت المتبقي (خاص بالـ Highlight والـ Scroll) --------------------
    // 1. تحديد العنصر

    // العناصر اللي ما تغيرت
    const scrollingContainer = document.querySelector('.scrolling-container');
    const contentSections = document.querySelectorAll('.content-section');
    const imageWrappers = document.querySelectorAll('.image-wrapper');
    const Logo = document.getElementById('logo');
    const container = document.getElementById('text-container');
    const textElement = document.getElementById('my-sentence');
    const textElement2 = document.getElementById('my-sentence2');
    let ImgID = document.getElementById("imgID");
    const Navmenu = document.querySelector('.nevmenu');
      const pups = document.getElementById('pup-1'); 
     const name = document.getElementById("meal-name");
     const imageElement = document.getElementById("myImage");
     
      // 2. تحديد نسبة العرض للارتفاع (16:9). القيمة هي (الارتفاع / العرض)
//     function fitTextToContainer(N,T) {

  
//   // لو ما لقيت العنصر ما تكمل
//   if (!container || !T) return; 

//   const containerWidth = container.offsetWidth;
//   let fontSize = N; // ابدأ بحجم خط كبير (مثلاً 40px)
//   T.style.fontSize = `${fontSize}px`; // تعيين الحجم الأولي

//   // طالما عرض النص أكبر من عرض الحاوية (السطر ما وسع)
//   while (T.offsetWidth > containerWidth && fontSize > 10) {
//     fontSize -= 1; // صغّر حجم الخط 1px
//     T.style.fontSize = `${fontSize}px`; // تطبيق الحجم الجديد
//   }
// }
    const activationPoint = 650;
    function removeAllHighlights() {
        type="module";
        imageWrappers.forEach(wrapper => {
            wrapper.classList.remove('highlighted');
        });
    }
    function checkScrollPosition(){
         const scrollPosition = window.scrollY;
        if ( scrollPosition >= activationPoint ) {
    // تغيير خاصية اللون (الخلفية)
    //  scrollingContainer.style.backgroundImage = 'url("https://drive.google.com/thumbnail?id=1di_G5dxOIdAUaBNLcJCEVaNB5cz1h_ik&sz=w1000")';
    if(window.innerWidth < 690){
     scrollingContainer.style.backgroundImage = 'url("images/menu2.png")';
     scrollingContainer.style.backgroundColor= '#11111100';      
    }
    else if(window.innerWidth >= 690){
       scrollingContainer.style.backgroundColor= 'rgba(17, 17, 17, 0.6)';   
    }
     Navmenu.style.backgroundColor = '#11111100';
    // أو تغيير لون النص
    // myDiv.style.color = 'white';
 }else {
        
        // إذا كان موقع السكرول لسا فوق نقطة التفعيل: منرجّع اللون رمادي
        
         scrollingContainer.style.backgroundImage = 'url("images/menu2.png")';
         scrollingContainer.style.backgroundColor= 'black';
         Navmenu.style.backgroundColor = '#111';
         
        
    }
    }
    window.addEventListener('scroll', checkScrollPosition);
    function checkScrollAndHighlight() {
        const scrollPosition = window.scrollY || window.pageYOffset;
        const activationOffset = 150; 

        contentSections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id'); 

            if (scrollPosition >= sectionTop - activationOffset && 
                scrollPosition < sectionTop + sectionHeight - activationOffset) {
                
                removeAllHighlights();

                const correspondingWrapperId = `wrapper-${sectionId}`;
                const correspondingWrapper = document.getElementById(correspondingWrapperId);

                if (correspondingWrapper) {
                    correspondingWrapper.classList.add('highlighted');
                    
                    const containerWidth = scrollingContainer.offsetWidth;
                    const wrapperOffset = correspondingWrapper.offsetLeft;
                    const wrapperWidth = correspondingWrapper.offsetWidth;
                    
                   const newScrollPosition = wrapperOffset - (containerWidth / 1.9) + (wrapperWidth /1);

                    scrollingContainer.scrollTo({
                        left: newScrollPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

 
   
function show_pup() {
    pups.classList.add('open');
}
function updateElementText(elementId, newText) {
    // 1. منجيب العنصر عن طريق الـ ID تبعه
    const element = document.getElementById(elementId);
    
    // 2. منتحقق إذا لقينا العنصر (مشان ما يصير خطأ بالبرنامج)
        element.textContent = newText;
        console.log(`تم تعديل العنصر #${elementId} إلى: ${newText}`);

}
function changeAllContent(title,ingredients,I) {
    // 📢 استدعاء التابع لتعديل العنوان الرئيسي
    updateElementText('meal-name',title); 
    updateElementText('meal-ingredients',ingredients);
    imageElement.src = I;
}
function hide_pup(){
   pups.classList.remove('open');
}




// كيف بتنده الفانكشين (مثلاً عند الضغط على زر):
// document.getElementById('myButton').addEventListener('click', changeAllClasses);

//من هون بتخلص 
    // تفعيل الدالة عند تحميل الصفحة وأثناء حركة السكرول
    window.addEventListener('scroll', checkScrollAndHighlight);
    window.addEventListener('load', checkScrollAndHighlight);
    // تشغيل الدالة أول مرة
// fitTextToContainer(22,textElement); 
// fitTextToContainer(18,textElement2); 
// هي الدالة بتشتغل أول ما تفتح الصفحة
function revealImage() {
    const hiddenImg = document.getElementById('hiddenLoader');
    const logo = document.querySelector('.logo');
    if (hiddenImg && logo) {
        hiddenImg.classList.add('loaded');
         logo.classList.add('loaded');
        console.log("تمت العملية بنجاح.. الكلاس انضاف!");
    }
}

// منجرب نشغلها بكل الطرق الممكنة
if (document.readyState === 'complete') {
    revealImage();
} else {
    window.addEventListener('load', revealImage);
}


