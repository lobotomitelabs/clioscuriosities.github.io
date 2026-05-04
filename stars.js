window.onload = function() {
    const container = document.getElementById('stars');
    for (let i = 0; i < 80; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 2.5 + 0.5;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.setProperty('--d', (Math.random() * 3 + 1).toFixed(1) + 's');
      star.style.animationDelay = (Math.random() * 3).toFixed(1) + 's';
      container.appendChild(star);
    }
  };

const title = "Clios Curiosities";
const container2 = document.getElementById('floating-keys');
[...title].forEach((char, i) => {
const key = document.createElement('div');
if (char === ' ') {
    key.className = 'title-key space';
} else {
    key.className = 'title-key';
    key.textContent = char;
}
key.style.setProperty('--i', i);
container2.appendChild(key);
});

const tooltip = document.getElementById('curiosity-tooltip');
const tooltipTitle = document.getElementById('tooltip-title');
const tooltipDesc = document.getElementById('tooltip-desc');

document.querySelectorAll('.curiosity').forEach(item => {
  item.addEventListener('mouseenter', (e) => {
    tooltipTitle.textContent = item.dataset.title;
    tooltipDesc.textContent = item.dataset.desc;
    tooltip.classList.add('visible');
  });

  item.addEventListener('mousemove', (e) => {
    const cabinet = document.getElementById('cabinet');
    const rect = cabinet.getBoundingClientRect();
    tooltip.style.left = (e.clientX - rect.left + 12) + 'px';
    tooltip.style.top = (e.clientY - rect.top - 60) + 'px';
  });

  item.addEventListener('mouseleave', () => {
    tooltip.classList.remove('visible');
  });

  item.addEventListener('click', () => {
    const link = item.dataset.link;
    if (link && link !== '#') window.open(link, '_blank');
  });
});

const jarPopupMap = {
    'Contacts': 'popup-contacts',
    'Support': 'popup-support',
    'Side Quests': 'popup-sidequests',
    'Commomissions': 'popup-commissions',
    'Fun': 'popup-fun',
  };
  
  document.querySelectorAll('.jar').forEach(jar => {
    jar.addEventListener('click', () => {
      closeAllPopups();
      const popupId = jarPopupMap[jar.dataset.title];
      if (popupId) {
        document.getElementById(popupId).classList.add('visible');
        document.getElementById('popup-overlay').classList.add('visible');
      }
    });
  });
  
function closeAllPopups() {
    document.querySelectorAll('.jar-popup-panel').forEach(p => p.classList.remove('visible'));
    document.getElementById('popup-overlay').classList.remove('visible');
}
