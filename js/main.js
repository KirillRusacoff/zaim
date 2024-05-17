//hidden menu

const menuButton = document.querySelector('.menu-button');
const hiddenMenu = document.querySelector('.hidden-menu');
const hiddenMenuLink = document.querySelectorAll('.hidden-menu__list li a');

menuButton.addEventListener('click', function(){
  menuButton.classList.toggle('menu-button--active');
  hiddenMenu.classList.toggle('hidden-menu--active');
});

hiddenMenuLink.forEach(function(item){
  item.addEventListener('click', function(){
    menuButton.classList.remove('menu-button--active');
  hiddenMenu.classList.remove('hidden-menu--active');
  });
});

//calculator

document.addEventListener("DOMContentLoaded", function() {
    const loanAmountInput = document.getElementById("loanAmount");
    const loanTermInput = document.getElementById("loanTerm");
    const loanAmountOutput = document.getElementById("loanAmountValue");
    const loanTermOutput = document.getElementById("loanTermValue");
    const requestedAmountOutput = document.getElementById("requestedAmount");
    const loanEndDateOutput = document.getElementById("loanEndDate");
    const totalRepaymentOutput = document.getElementById("totalRepayment");
  
    // Установка значений по умолчанию
    const defaultLoanAmount = 10000;
    const defaultLoanTerm = 10;
  
    loanAmountInput.value = defaultLoanAmount;
    loanTermInput.value = defaultLoanTerm;
  
    loanAmountOutput.textContent = defaultLoanAmount.toLocaleString('ru-RU', { maximumFractionDigits: 0 });
    loanTermOutput.textContent = defaultLoanTerm;
  
    requestedAmountOutput.textContent = defaultLoanAmount.toLocaleString('ru-RU', { maximumFractionDigits: 0 });
  
    const today = new Date();
    const defaultLoanEndDate = new Date(today.getTime() + defaultLoanTerm * 24 * 60 * 60 * 1000);
    loanEndDateOutput.textContent = formatDate(defaultLoanEndDate);
  
    updateTotalRepayment(defaultLoanAmount, defaultLoanTerm);
  
    loanAmountInput.addEventListener("input", function() {
      const loanAmount = parseInt(this.value);
      loanAmountOutput.textContent = loanAmount.toLocaleString('ru-RU', { maximumFractionDigits: 0 });
      requestedAmountOutput.textContent = loanAmount.toLocaleString('ru-RU', { maximumFractionDigits: 0 });
      updateTotalRepayment(loanAmount, parseInt(loanTermInput.value));
    });
  
    loanTermInput.addEventListener("input", function() {
      const loanTerm = parseInt(this.value);
      loanTermOutput.textContent = loanTerm;
      const loanEndDate = new Date(today.getTime() + loanTerm * 24 * 60 * 60 * 1000);
      loanEndDateOutput.textContent = formatDate(loanEndDate);
      updateTotalRepayment(parseInt(loanAmountInput.value), loanTerm);
    });
  
    function formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('ru-RU', options);
    };
  
    function updateTotalRepayment(amount, term) {
      const totalRepayment = amount + amount * 0.008 * term;
      totalRepaymentOutput.textContent = totalRepayment.toLocaleString('ru-RU', { maximumFractionDigits: 0 });
    };
});

//Reviews slider

const swiper = new Swiper('.slider', {
  slidesPerView: 2,
  direction: 'horizontal',
  loop: true,

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 2,
      },
    }
});

const swiperOffer = new Swiper('.offer-slider', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView: 1,

});

//header blocks

const headerBody = document.querySelector('.header__body');
const headerResult = document.querySelector('.header__result');

//main blocks

const OffersBlock = document.querySelector('#offers');

//nav blocks

const navMainLink = document.querySelectorAll('.nav__item--main');
const navOffersLink = document.querySelectorAll('.nav__item--offers');

//registration, data and choice

const registrationBlock = document.querySelector('.registration');
const registrationButton = document.querySelectorAll('.button');
const registrationCross = document.querySelector('.registration__cross');
const registrationCode = document.querySelector('#code');
const registrationCodeOk = document.querySelector('#ok');
const codeBlock = document.querySelector('.registration__code');

const dataBlock = document.querySelector('.data');
const dataCross = document.querySelector('.data__cross');
const dataOk = document.querySelector('#ok-2');

const choiceBlock = document.querySelector('.choice');
const choiceCross = document.querySelector('.choice__cross');
const choiceButton = document.querySelector('.choice__button');
const choiceTitle = document.querySelector('.choice__title');
const choiceForm = document.querySelector('.choice__form');
const choiceLoader = document.querySelector('.choice__loader');

registrationButton.forEach(function(item){
  item.addEventListener('click', function(){
    registrationBlock.classList.add('registration--active');
  });
});

registrationCross.addEventListener('click', function(){
  codeBlock.classList.remove('registration__code--active');
  registrationBlock.classList.remove('registration--active');
});

registrationCode.addEventListener('click', function(){
  codeBlock.classList.add('registration__code--active');
});

registrationCodeOk.addEventListener('click', function(){
  codeBlock.classList.remove('registration__code--active');
  registrationBlock.classList.remove('registration--active');
  dataBlock.classList.add('data--active');
});

dataCross.addEventListener('click', function(){
  dataBlock.classList.remove('data--active');
});

dataOk.addEventListener('click', function(){
  dataBlock.classList.remove('data--active');
  choiceBlock.classList.add('choice--active');
  setTimeout(function(){
    choiceBlock.classList.remove('choice--active');
    headerBody.classList.add('header__body--hidden');
    headerResult.classList.add('header__result--active');
    OffersBlock.style = 'display:none';
    navMainLink.forEach(function(item){
      item.style = 'display:block';
    });
    navOffersLink.forEach(function(item){
      item.style = 'display:none';
    });
  },6000);
});

choiceCross.addEventListener('click', function(){
  choiceBlock.classList.remove('choice--active');
  location.reload();
});

//Card mini hidden blocks

const cards = document.querySelectorAll('.card-mini');

cards.forEach(function(card) {
  const cardButton = card.querySelector('.card-mini__button');
  const cardHiddenBlock = card.querySelector('.card-mini__hidden');
  const cardCross = card.querySelector('.card-mini__hidden li img');
  
  cardButton.addEventListener('click', function() {
    cardHiddenBlock.classList.add('card-mini__hidden--active');
  });
  
  cardCross.addEventListener('click', function() {
    cardHiddenBlock.classList.remove('card-mini__hidden--active');
  });
});

  