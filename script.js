const open_btn = document.querySelector('.open');
const close_btn = document.querySelector('.close');

const howWeWorkText = "How we work";
const blogText = "Blog";
const accountText = "Account";
const viewPlansText = "View plans";

document.getElementById("how-we-work").innerText = howWeWorkText;
document.getElementById("blog").innerText = blogText;
document.getElementById("account").innerText = accountText;
document.getElementById("view-plans").innerText = viewPlansText;

const howWeWorkMobileText = "How we work";
const blogMobileText = "Blog";
const accountMobileText = "Account";
const viewPlansMobileText = "View plans";

document.getElementById("how-we-work-mobile").innerText = howWeWorkMobileText;
document.getElementById("blog-mobile").innerText = blogMobileText;
document.getElementById("account-mobile").innerText = accountMobileText;
document.getElementById("view-plans-mobile").innerText = viewPlansMobileText;

const heroTitleText = "Humanizing your insurance.";
const heroTextText =
  "Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.";
const heroButtonText = "View plans";

document.getElementById("hero-title").innerText = heroTitleText;
document.getElementById("hero-text").innerText = heroTextText;
document.getElementById("hero-button").innerText = heroButtonText;

const differentTitleText = "We’re different";

document.getElementById("different-title").innerText = differentTitleText;

const cardsData = [
  {
    icon: "./images/icon-snappy-process.svg",
    title: "Snappy Process",
    text:
      "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
  },
  {
    icon: "./images/icon-affordable-prices.svg",
    title: "Affordable Prices",
    text:
      "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
  },
  {
    icon: "./images/icon-people-first.svg",
    title: "People First",
    text:
      "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
  },
];

const cardsContainer = document.getElementById("different-cards");
cardsData.forEach((card) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.innerHTML = `
    <img src="${card.icon}" alt="${card.title} icon" />
    <h3>${card.title}</h3>
    <p>${card.text}</p>
  `;
  cardsContainer.appendChild(cardElement);
});

const ctaTitleText = "Find out more about how we work";
const ctaButtonText = "How we work";

document.getElementById("cta-title").innerText = ctaTitleText;
document.getElementById("cta-button").innerText = ctaButtonText;

const footerCardsData = [
  {
    title: "Our company",
    items: ["How we work", "Why Insure?", "View plans", "Reviews"],
  },
  {
    title: "Help me",
    items: ["FAQ", "Terms of use", "Privacy policy", "Cookies"],
  },
  {
    title: "Contact",
    items: ["Sales", "Support", "Live chat"],
  },
  {
    title: "Others",
    items: ["Careers", "Press", "Licenses"],
  },
];

const footerCardsContainer = document.getElementById("footer-cards");
footerCardsData.forEach((footerCard) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("footer__card");
  cardElement.innerHTML = `
    <h4>${footerCard.title}</h4>
    <ul>
      ${footerCard.items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
  footerCardsContainer.appendChild(cardElement);
});
open_btn.addEventListener('click', () => {
  document.querySelector('.open').style.display = 'none';
  document.querySelector('.close').style.display = 'inline';
  document.querySelector('.mobile__nav').style.display = 'block';
});

close_btn.addEventListener('click', () => {
  document.querySelector('.open').style.display = 'inline';
  document.querySelector('.close').style.display = 'none';
  document.querySelector('.mobile__nav').style.display = 'none';
});


