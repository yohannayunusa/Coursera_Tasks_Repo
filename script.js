// script.js - functionality for demo pages
document.addEventListener('DOMContentLoaded', function(){
    // set year in footer
    const yearEls = document.querySelectorAll('#year');
    yearEls.forEach(e => e.textContent = new Date().getFullYear());
  
    // contact form handler (client-side demo)
    const contactForm = document.getElementById('contactForm');
    if(contactForm){
      contactForm.addEventListener('submit', function(e){
        e.preventDefault();
        const status = document.getElementById('formStatus');
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if(!name || !email || !message){
          status.textContent = 'Please fill all fields.';
          return;
        }
        status.textContent = 'Thanks — message recorded locally (demo).';
        contactForm.reset();
      });
    }
  
    // country recommendation demo
    const countrySelect = document.getElementById('countrySelect');
    const countryResults = document.getElementById('countryResults');
    if(countrySelect && countryResults){
      const data = {
        japan: [
          { title: 'Kyoto Temple', img: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=800&q=60', desc: 'Historic temples, zen gardens, and traditional tea houses.' },
          { title: 'Okinawa Beach', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=60', desc: 'Tropical islands with clear waters and coral reefs.' }
        ],
        nigeria: [
          { title: 'Lekki Beach', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=802&q=60', desc: 'Popular sandy beaches close to urban centers.' },
          { title: 'Osun-Osogbo Grove', img: 'https://images.unsplash.com/photo-1533743983669-94fa2a1f1b6c?w=801&q=60', desc: 'Sacred cultural site and UNESCO heritage region.' }
        ],
        brazil: [
          { title: 'Copacabana', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=803&q=60', desc: 'World famous urban beach with lively atmosphere.' },
          { title: 'Iguazu Falls', img: 'https://images.unsplash.com/photo-1508264165352-c0e0f9f3d7a2?w=800&q=60', desc: 'Spectacular waterfalls at the Brazil-Argentina border.' }
        ]
      };
  
      function renderCountry(key){
        countryResults.innerHTML = '';
        if(!key || !data[key]){ countryResults.innerHTML = '<p class="muted">Select a country to see recommendations.</p>'; return; }
        data[key].forEach(item => {
          const card = document.createElement('div');
          card.className = 'place';
          card.innerHTML = `<img src="${item.img}" alt="${item.title}" /><h3>${item.title}</h3><p>${item.desc}</p>`;
          countryResults.appendChild(card);
        });
      }
  
      // initial message
      renderCountry('');
  
      countrySelect.addEventListener('change', function(){ renderCountry(this.value); });
    }
  });
  