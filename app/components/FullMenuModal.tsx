"use client";

import { useEffect } from "react";

/* ═══════════════════════════════════════════════
   FULL MENU MODAL — Michelin Edition
   Premium full-screen overlay displaying the
   complete carta organized by category.
   More editorial, more breathing room, refined details.
   ═══════════════════════════════════════════════ */

const MENU = [
  {
    category: "Entradas",
    label: "Para Comenzar",
    items: [
      {
        name: "Carpaccio de Res al Trufa",
        description:
          "Láminas de filete de res curadas en sal de mar, aceite de trufa negra, alcaparras, rúcula y parmesano añejo rallado en mesa.",
        tag: "Firma de la casa",
      },
      {
        name: "Tostadas de Atún Sellado",
        description:
          "Atún aleta azul marinado en jengibre y soya, sellado al momento sobre tostada artesanal con aguacate cremoso y sriracha de la casa.",
        tag: null,
      },
      {
        name: "Caldo de Hueso Artesanal",
        description:
          "Caldo de hueso rostizado a fuego lento durante 24 horas, con médula, hierbas finas, limón encurtido y pan de masa madre tostado.",
        tag: null,
      },
      {
        name: "Tabla de Charcutería PÚA",
        description:
          "Selección de embutidos artesanales, quesos maduros de origen selecto, frutos secos tostados, miel de flores silvestres y mermelada de higo.",
        tag: "Para compartir",
      },
    ],
  },
  {
    category: "Cortes Premium",
    label: "A la Brasa de Encino",
    items: [
      {
        name: "Ribeye a la Brasa",
        description:
          "Corte USDA Prime de 400g, madurado 28 días en seco. Sellado sobre brasa viva de encino, servido con reducción de vino tinto y vegetales de temporada.",
        tag: "El más solicitado",
      },
      {
        name: "New York Strip",
        description:
          "Corte de 350g con marmoleado perfecto, costra de pimienta negra y flor de sal Maldon. Acompañado de mantequilla compuesta de hierbas finas.",
        tag: null,
      },
      {
        name: "Tomahawk para Dos",
        description:
          "Corte espectacular de 1.2kg madurado en seco 45 días. Presentación en tabla, con chimichurri PÚA, salsa bordelesa y guarnición a elegir.",
        tag: "Para compartir",
      },
      {
        name: "Filete Mignon",
        description:
          "El más tierno de nuestros cortes. 250g envuelto en tocino artesanal, sobre salsa bordelesa de vino tinto y puré trufado al momento.",
        tag: null,
      },
      {
        name: "Arrachera Premium",
        description:
          "Corte marinado 24 horas en mezcal joven y especias de la casa. A la brasa, con guacamole de chile de árbol y tortillas artesanales.",
        tag: null,
      },
    ],
  },
  {
    category: "Del Mar",
    label: "Productos del Océano",
    items: [
      {
        name: "Salmón en Costra de Hierbas",
        description:
          "Filete de salmón del Atlántico con costra de hierbas finas y mantequilla de limón, sobre puré de coliflor trufado y espuma de limón Meyer.",
        tag: null,
      },
      {
        name: "Pulpo a las Brasas",
        description:
          "Tentáculo de pulpo confitado en aceite de oliva y terminado a la brasa. Servido con puré de papa ahumado, aceite de páprika y microgreens.",
        tag: "Firma de la casa",
      },
      {
        name: "Ceviche de Camarón Azul",
        description:
          "Camarón azul de Sinaloa en leche de tigre de chile habanero y cítricos. Con mango Manila, pepino, cebolla morada y tostadas de maíz azul.",
        tag: null,
      },
    ],
  },
  {
    category: "Especialidades",
    label: "De Nuestra Cocina",
    items: [
      {
        name: "Cordero Confitado",
        description:
          "Pierna de cordero confitada 12 horas a baja temperatura, glaseada con miel de agave y chile guajillo. Sobre polenta cremosa con queso de cabra.",
        tag: null,
      },
      {
        name: "Pato en Mole Negro",
        description:
          "Pechuga de pato rostizada de piel crujiente, con mole negro de Guerrero elaborado en casa. Arroz de hierba santa y jícama encurtida.",
        tag: "Cocina de autor",
      },
      {
        name: "Tasting de la Casa",
        description:
          "Experiencia de cinco tiempos maridada con nuestra selección de vinos. Un recorrido curado por los sabores insignia de PÚA.",
        tag: "Experiencia completa",
      },
    ],
  },
  {
    category: "Guarniciones",
    label: "Para Acompañar",
    items: [
      {
        name: "Puré Trufado",
        description: "Papa Cambray, mantequilla francesa y aceite de trufa negra.",
        tag: null,
      },
      {
        name: "Papas Rostizadas al Romero",
        description: "Papas cambray rostizadas con romero fresco, ajo confitado y flor de sal.",
        tag: null,
      },
      {
        name: "Espárragos a la Brasa",
        description: "Espárragos verdes a la brasa con mantequilla de limón y almendras tostadas.",
        tag: null,
      },
      {
        name: "Ensalada de Rúcula y Parmesano",
        description: "Rúcula fresca, parmesano laminado, nueces caramelizadas y vinagreta balsámica.",
        tag: null,
      },
      {
        name: "Arroz de Azafrán",
        description: "Arroz de grano largo infusionado en azafrán de La Mancha con hierbas finas.",
        tag: null,
      },
    ],
  },
  {
    category: "Postres",
    label: "Para Concluir",
    items: [
      {
        name: "Coulant de Chocolate Oscuro",
        description:
          "Bizcocho tibio de chocolate 70% cacao con corazón fundente, helado de vainilla de Madagascar y caramelo salado artesanal.",
        tag: "El favorito",
      },
      {
        name: "Cheesecake de Cajeta",
        description:
          "Base de galleta artesanal, cremoso de cajeta de Celaya, gel de frutos rojos silvestres y crumble de avellana tostada.",
        tag: null,
      },
      {
        name: "Sorbete de Temporada",
        description:
          "Preparación diaria con frutas de temporada de Guerrero, servido con espuma de champagne y flores comestibles.",
        tag: null,
      },
      {
        name: "Tabla de Quesos",
        description:
          "Selección de quesos artesanales mexicanos y europeos, miel de abeja, nueces, uvas y pan brioche tostado.",
        tag: "Para compartir",
      },
    ],
  },
];

interface FullMenuModalProps {
  onClose: () => void;
}

export function FullMenuModal({ onClose }: FullMenuModalProps) {
  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-stretch justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Carta completa de PÚA Brasa y Vino"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brand-black/[0.97] backdrop-blur-2xl"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-full max-w-5xl mx-auto overflow-y-auto bg-brand-black/80 border-x border-white/[0.03]">
        {/* Sticky header — more refined */}
        <div className="sticky top-0 z-10 bg-brand-black/95 backdrop-blur-xl border-b border-white/[0.04] px-4 sm:px-6 md:px-16 py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-serif text-xl md:text-2xl text-cream-100/80 tracking-wider font-light">
              PÚA
            </span>
            <div className="h-4 w-px bg-white/[0.08]" />
            <span className="text-[9px] tracking-widest-2xl text-gold-500/50 uppercase font-extralight">
              Carta Completa
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex items-center gap-3 text-cream-200/25 hover:text-gold-400/60 transition-colors duration-500 text-[10px] tracking-widest-xl uppercase font-extralight"
            aria-label="Cerrar carta"
          >
            <span className="hidden sm:inline">Cerrar</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu content — more generous spacing */}
        <div className="px-4 sm:px-6 md:px-16 py-10 md:py-24 space-y-14 md:space-y-28">
          {/* Intro line */}
          <div className="text-center">
            <div className="h-px w-16 bg-gold-500/20 mx-auto mb-10" />
            <p className="text-cream-200/25 font-extralight text-sm leading-[1.9] max-w-md mx-auto">
              Nuestra carta cambia con las estaciones para honrar los mejores
              ingredientes de cada momento. Consulta a nuestro equipo para conocer
              las creaciones del día.
            </p>
            <div className="h-px w-16 bg-gold-500/20 mx-auto mt-10" />
          </div>

          {/* Categories */}
          {MENU.map((section) => (
            <div key={section.category}>
              {/* Category header — more editorial */}
              <div className="mb-12 md:mb-16">
                <span className="text-gold-500/40 text-[9px] tracking-widest-3xl uppercase font-extralight">
                  {section.label}
                </span>
                <h3 className="font-serif text-2xl md:text-4xl lg:text-5xl text-cream-100/90 mt-3 font-light">
                  {section.category}
                </h3>
                <div className="h-px w-12 bg-gold-500/20 mt-6" />
              </div>

              {/* Items grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="group border-b border-white/[0.03] pb-10 hover:border-gold-500/10 transition-colors duration-700"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h4 className="font-serif text-lg md:text-xl text-cream-100/80 group-hover:text-gold-400/70 transition-colors duration-500 leading-snug font-light">
                        {item.name}
                      </h4>
                      {item.tag && (
                        <span className="flex-shrink-0 text-[8px] tracking-widest-xl uppercase text-gold-500/35 border border-gold-500/10 px-2.5 py-1 font-extralight mt-1">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-cream-300/60 text-sm font-extralight leading-[1.8]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Footer note */}
          <div className="text-center pt-8 pb-8">
            <div className="h-px w-16 bg-gold-500/10 mx-auto mb-10" />
            <p className="text-cream-200/15 text-[11px] font-extralight tracking-wide leading-relaxed max-w-sm mx-auto">
              Informamos a nuestros comensales que algunos platillos pueden contener
              alérgenos. Consulta a nuestro equipo para más información.
            </p>
            <a
              href="#reservar"
              onClick={onClose}
              className="inline-flex items-center gap-3 mt-12 px-14 py-4 bg-gold-500/90 text-brand-black text-[10px] tracking-widest-xl uppercase font-medium hover:bg-gold-400 transition-colors duration-500"
            >
              Reservar Mesa
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
