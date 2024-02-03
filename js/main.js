//JavaScripda biror bir elementni biror bir jarayon orqali o'zgartirish mumkun.

// Buning uchun o'zgartirilishi kerak bo'lgan elementni klasini tuyidagicha topib olamiz
const elLogolink = document.querySelector('.site-logo');

// Undan keyin jarayon ya'ni shu knopka bosilganda element o'zgaradigan knopkani clasini topib olamiz
const elchangelogotextbutton = document.querySelector('.change-logo-text-button');

//o'zgartiruvchi knopkani bosganimizda element o'zgarishu uchun uning klesig .addEventListener xodisaga quloq soluvchini qo'shib olamiz
//.addEventListener - hodisaga quloq soluvchi
//click - hodisa turi
//elLogolink.textContent = ('Hamma'); knopka bosilsa element hamma degan so'zga o'zgaradi
elchangelogotextbutton.addEventListener('click', function() {
  elLogolink.textContent = ('Hamma');
})