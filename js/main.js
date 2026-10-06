// Ocupe Sua Presença - Interações e Comportamento
document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }

  // 3. Modules Accordion
  const moduleItems = document.querySelectorAll('.module-item');
  moduleItems.forEach(item => {
    const header = item.querySelector('.module-header');
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other accordions for cleaner view
      moduleItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });

  // 4. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });

  // 5. Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 6. Dynamic current year in footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 7. Carrossel Infinito dos 3 Eixos Sistêmicos (Exclusivo Mobile)
  const eixosWrapper = document.querySelector('.eixos-carousel-wrapper');
  const eixosTrack = document.getElementById('eixosTrack');

  if (eixosWrapper && eixosTrack) {
    const originalCards = Array.from(eixosTrack.querySelectorAll('.eixo-card:not(.eixo-card-clone)'));
    const totalOriginal = originalCards.length; // 3

    if (totalOriginal > 0) {
      let isMobile = window.innerWidth <= 768;
      let currentIndex = totalOriginal; // Começa no conjunto central (índice 3: Eixo 1)
      let isAnimating = false;
      let isTouching = false;
      let startX = 0;
      let startY = 0;
      let currentX = 0;
      let currentY = 0;
      let dragDeltaX = 0;
      let isHorizontalIntent = false;
      let intentDecided = false;

      // Cria clones: 3 antes e 3 depois para transição infinita perfeitamente contínua
      const clonesBefore = originalCards.map(card => {
        const clone = card.cloneNode(true);
        clone.classList.add('eixo-card-clone');
        clone.setAttribute('aria-hidden', 'true');
        return clone;
      });

      const clonesAfter = originalCards.map(card => {
        const clone = card.cloneNode(true);
        clone.classList.add('eixo-card-clone');
        clone.setAttribute('aria-hidden', 'true');
        return clone;
      });

      clonesBefore.reverse().forEach(clone => {
        eixosTrack.insertBefore(clone, eixosTrack.firstChild);
      });

      clonesAfter.forEach(clone => {
        eixosTrack.appendChild(clone);
      });

      const allCards = Array.from(eixosTrack.querySelectorAll('.eixo-card'));

      // Calcula o deslocamento para centralizar perfeitamente o card ativo
      function getTargetScroll(idx) {
        if (!allCards[idx]) return 0;
        const card = allCards[idx];
        const wrapperWidth = eixosWrapper.clientWidth;
        const cardWidth = card.offsetWidth;
        const cardLeft = card.offsetLeft;
        return cardLeft - (wrapperWidth - cardWidth) / 2;
      }

      // Atualiza estado visual (cards ativos e dots de paginação)
      function updateActiveStates() {
        const realIndex = ((currentIndex % totalOriginal) + totalOriginal) % totalOriginal;

        allCards.forEach((card, idx) => {
          if (idx === currentIndex) {
            card.classList.add('is-active');
          } else {
            card.classList.remove('is-active');
          }
        });

        const dots = eixosWrapper.querySelectorAll('.eixos-dot');
        dots.forEach((dot, idx) => {
          if (idx === realIndex) {
            dot.classList.add('active');
            dot.setAttribute('aria-current', 'true');
          } else {
            dot.classList.remove('active');
            dot.removeAttribute('aria-current');
          }
        });
      }

      function setPosition(targetScroll, animate = true) {
        if (animate) {
          eixosTrack.style.transition = 'transform 0.38s cubic-bezier(0.25, 1, 0.5, 1)';
          isAnimating = true;
        } else {
          eixosTrack.style.transition = 'none';
          isAnimating = false;
        }
        eixosTrack.style.transform = `translate3d(${-targetScroll}px, 0, 0)`;
      }

      function moveTo(idx, animate = true) {
        if (!isMobile) return;
        currentIndex = idx;
        const targetScroll = getTargetScroll(currentIndex);
        setPosition(targetScroll, animate);
        updateActiveStates();
      }

      // Salto invisível no final da transição (loop infinito sem reiniciar visualmente)
      eixosTrack.addEventListener('transitionend', (e) => {
        if (e.target !== eixosTrack) return;
        isAnimating = false;
        if (!isMobile) return;

        // Se ultrapassou o conjunto original para a direita (>= 6)
        if (currentIndex >= totalOriginal * 2) {
          currentIndex -= totalOriginal;
          const targetScroll = getTargetScroll(currentIndex);
          setPosition(targetScroll, false);
          void eixosTrack.offsetWidth; // Força repaint sem delay
          updateActiveStates();
        } 
        // Se ultrapassou o conjunto original para a esquerda (< 3)
        else if (currentIndex < totalOriginal) {
          currentIndex += totalOriginal;
          const targetScroll = getTargetScroll(currentIndex);
          setPosition(targetScroll, false);
          void eixosTrack.offsetWidth;
          updateActiveStates();
        }
      });

      // Botões de navegação
      const prevBtn = eixosWrapper.querySelector('.eixos-prev-btn');
      const nextBtn = eixosWrapper.querySelector('.eixos-next-btn');
      const dots = eixosWrapper.querySelectorAll('.eixos-dot');

      if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
          e.preventDefault();
          if (!isMobile || isAnimating) return;
          moveTo(currentIndex - 1, true);
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
          e.preventDefault();
          if (!isMobile || isAnimating) return;
          moveTo(currentIndex + 1, true);
        });
      }

      dots.forEach((dot, dotIdx) => {
        dot.addEventListener('click', (e) => {
          e.preventDefault();
          if (!isMobile || isAnimating) return;
          const realCurrent = ((currentIndex % totalOriginal) + totalOriginal) % totalOriginal;
          const diff = dotIdx - realCurrent;
          moveTo(currentIndex + diff, true);
        });
      });

      // Suporte a Touch Drag com preservação da rolagem vertical da página
      function handleTouchStart(e) {
        if (!isMobile || isAnimating) return;
        isTouching = true;
        intentDecided = false;
        isHorizontalIntent = false;
        dragDeltaX = 0;

        const point = e.touches ? e.touches[0] : e;
        startX = point.clientX;
        startY = point.clientY;
        currentX = startX;
        currentY = startY;
      }

      function handleTouchMove(e) {
        if (!isTouching || !isMobile) return;
        const point = e.touches ? e.touches[0] : e;
        currentX = point.clientX;
        currentY = point.clientY;
        const diffX = currentX - startX;
        const diffY = currentY - startY;

        if (!intentDecided) {
          // Se o usuário está rolando a página na vertical, não interfere
          if (Math.abs(diffY) > 8 && Math.abs(diffY) >= Math.abs(diffX)) {
            isTouching = false;
            return;
          }
          // Se o gesto é horizontal, trava intenção no carrossel
          if (Math.abs(diffX) > 8 && Math.abs(diffX) > Math.abs(diffY)) {
            intentDecided = true;
            isHorizontalIntent = true;
            eixosTrack.classList.add('is-dragging');
          }
        }

        if (isHorizontalIntent) {
          if (e.cancelable) e.preventDefault();
          dragDeltaX = diffX;
          const baseScroll = getTargetScroll(currentIndex);
          const currentScroll = baseScroll - dragDeltaX;
          eixosTrack.style.transition = 'none';
          eixosTrack.style.transform = `translate3d(${-currentScroll}px, 0, 0)`;
        }
      }

      function handleTouchEnd() {
        if (!isTouching || !isMobile) {
          isTouching = false;
          eixosTrack.classList.remove('is-dragging');
          return;
        }
        isTouching = false;
        eixosTrack.classList.remove('is-dragging');

        if (!isHorizontalIntent) return;

        const threshold = 40; // Distância mínima de arraste
        if (dragDeltaX < -threshold) {
          moveTo(currentIndex + 1, true);
        } else if (dragDeltaX > threshold) {
          moveTo(currentIndex - 1, true);
        } else {
          moveTo(currentIndex, true);
        }
        dragDeltaX = 0;
        isHorizontalIntent = false;
      }

      // Eventos de toque no mobile
      eixosTrack.addEventListener('touchstart', handleTouchStart, { passive: true });
      eixosTrack.addEventListener('touchmove', handleTouchMove, { passive: false });
      eixosTrack.addEventListener('touchend', handleTouchEnd, { passive: true });
      eixosTrack.addEventListener('touchcancel', handleTouchEnd, { passive: true });

      // Eventos de mouse para emulação e testes
      eixosTrack.addEventListener('mousedown', handleTouchStart);
      window.addEventListener('mousemove', handleTouchMove);
      window.addEventListener('mouseup', handleTouchEnd);

      // Responsividade e redimensionamento de tela
      function handleResize() {
        const newIsMobile = window.innerWidth <= 768;
        if (newIsMobile !== isMobile) {
          isMobile = newIsMobile;
          if (isMobile) {
            currentIndex = totalOriginal;
            moveTo(currentIndex, false);
          } else {
            // Limpa estilos no desktop
            eixosTrack.style.transform = '';
            eixosTrack.style.transition = '';
            allCards.forEach(c => c.classList.remove('is-active'));
          }
        } else if (isMobile) {
          moveTo(currentIndex, false);
        }
      }

      let resizeTimer;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(handleResize, 100);
      });

      // Inicialização se carregado no mobile
      if (isMobile) {
        requestAnimationFrame(() => {
          moveTo(currentIndex, false);
        });
      }
    }
  }
});
