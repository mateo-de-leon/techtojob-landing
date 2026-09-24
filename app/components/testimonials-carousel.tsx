"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { Avatar } from "./ui";

type TestimonialItem = { initials: string; name: string; role: string; quote: string };

export function TestimonialsCarousel({ items, exampleLabel }: { items: TestimonialItem[]; exampleLabel: string }) {
  const carouselItems = [...items,
    { initials: "AT", name: "Ana Torres", role: "UX Engineer", quote: "La comunidad me ayudó a ordenar mis ideas y a encontrar un proyecto donde podía aportar desde el primer día." },
    { initials: "NS", name: "Nico Silva", role: "Backend Developer", quote: "Me llevé feedback concreto, una mejor historia para contar y ganas de volver al próximo desafío." },
    { initials: "VC", name: "Valentina Costa", role: "Data Analyst", quote: "Fue el lugar ideal para hacer preguntas sin sentir que tenía que saberlo todo antes de participar." },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const maxIndex = Math.max(0, carouselItems.length - visibleCount);
  const currentIndex = Math.min(activeIndex, maxIndex);

  useEffect(() => {
    const update = () => setVisibleCount(window.innerWidth <= 780 ? 1 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveIndex((current) => current >= maxIndex ? 0 : current + 1), 5200);
    return () => window.clearInterval(timer);
  }, [maxIndex]);

  const move = (direction: -1 | 1) => setActiveIndex((current) => direction === 1
    ? current >= maxIndex ? 0 : current + 1
    : current <= 0 ? maxIndex : current - 1);

  return (
    <div className="testimonials-carousel">
      <div className="testimonials-carousel-viewport">
        <div className="testimonials-carousel-track" style={{ "--carousel-index": currentIndex } as CSSProperties}>
          {carouselItems.map((item, index) => (
            <article className="testimonial-slide" key={item.name}>
              <div className="testimonial-card">
                <div className="testimonial-meta"><span>{exampleLabel}</span><span className="testimonial-rating" aria-label="5 de 5 estrellas">★★★★★</span></div>
                <div className="quote-mark">“</div>
                <p className="testimonial-quote">{item.quote}</p>
                <div className="testimonial-person"><Avatar initials={item.initials} tone={index % 3 === 0 ? "aqua" : index % 3 === 1 ? "orange" : "violet"} /><div><strong>{item.name}</strong><span>{item.role}</span></div></div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="testimonials-carousel-footer">
        <span className="testimonials-carousel-count">{String(currentIndex + 1).padStart(2, "0")} / {String(maxIndex + 1).padStart(2, "0")}</span>
        <div className="testimonials-carousel-dots" aria-label="Seleccionar reseña">
          {Array.from({ length: maxIndex + 1 }, (_, index) => <button className={index === currentIndex ? "is-active" : ""} type="button" key={index} onClick={() => setActiveIndex(index)} aria-label={`Mostrar grupo ${index + 1}`} />)}
        </div>
        <div className="testimonials-carousel-buttons">
          <button type="button" onClick={() => move(-1)} aria-label="Reseñas anteriores">←</button>
          <button type="button" onClick={() => move(1)} aria-label="Más reseñas">→</button>
        </div>
      </div>
    </div>
  );
}
