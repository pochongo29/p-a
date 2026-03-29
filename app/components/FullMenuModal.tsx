"use client";

import { useEffect, useRef, useState } from "react";
import { RatingStars } from "./RatingStars";

/* ═══════════════════════════════════════════════
   FULL MENU MODAL — 4 categorías con tabs
   ═══════════════════════════════════════════════ */

// ─── DATOS ───────────────────────────────────────

const MENU_NORMAL = [
  {
    category: "Entradas",
    label: "Para Comenzar",
    items: [
      { name: "Carpaccio de Res al Trufa", description: "Láminas de filete de res curadas en sal de mar, aceite de trufa negra, alcaparras, rúcula y parmesano añejo rallado en mesa.", tag: "Firma de la casa", price: "$280" },
      { name: "Tostadas de Atún Sellado", description: "Atún aleta azul marinado en jengibre y soya, sellado al momento sobre tostada artesanal con aguacate cremoso y sriracha de la casa.", tag: null, price: "$245" },
      { name: "Caldo de Hueso Artesanal", description: "Caldo de hueso rostizado a fuego lento durante 24 horas, con médula, hierbas finas, limón encurtido y pan de masa madre tostado.", tag: null, price: "$195" },
      { name: "Tabla de Charcutería PÚA", description: "Selección de embutidos artesanales, quesos maduros de origen selecto, frutos secos tostados, miel de flores silvestres y mermelada de higo.", tag: "Para compartir", price: "$380" },
    ],
  },
  {
    category: "Del Mar",
    label: "Productos del Océano",
    items: [
      { name: "Salmón en Costra de Hierbas", description: "Filete de salmón del Atlántico con costra de hierbas finas y mantequilla de limón, sobre puré de coliflor trufado y espuma de limón Meyer.", tag: null, price: "$420" },
      { name: "Pulpo a las Brasas", description: "Tentáculo de pulpo confitado en aceite de oliva y terminado a la brasa. Servido con puré de papa ahumado, aceite de páprika y microgreens.", tag: "Firma de la casa", price: "$480" },
      { name: "Ceviche de Camarón Azul", description: "Camarón azul de Sinaloa en leche de tigre de chile habanero y cítricos. Con mango Manila, pepino, cebolla morada y tostadas de maíz azul.", tag: null, price: "$320" },
    ],
  },
  {
    category: "Especialidades",
    label: "De Nuestra Cocina",
    items: [
      { name: "Cordero Confitado", description: "Pierna de cordero confitada 12 horas a baja temperatura, glaseada con miel de agave y chile guajillo. Sobre polenta cremosa con queso de cabra.", tag: null, price: "$580" },
      { name: "Pato en Mole Negro", description: "Pechuga de pato rostizada de piel crujiente, con mole negro de Guerrero elaborado en casa. Arroz de hierba santa y jícama encurtida.", tag: "Cocina de autor", price: "$520" },
      { name: "Tasting de la Casa", description: "Experiencia de cinco tiempos maridada con nuestra selección de vinos. Un recorrido curado por los sabores insignia de PÚA.", tag: "Experiencia completa", price: "$980" },
    ],
  },
  {
    category: "Guarniciones",
    label: "Para Acompañar",
    items: [
      { name: "Puré Trufado", description: "Papa Cambray, mantequilla francesa y aceite de trufa negra.", tag: null, price: "$145" },
      { name: "Papas Rostizadas al Romero", description: "Papas cambray rostizadas con romero fresco, ajo confitado y flor de sal.", tag: null, price: "$120" },
      { name: "Espárragos a la Brasa", description: "Espárragos verdes a la brasa con mantequilla de limón y almendras tostadas.", tag: null, price: "$155" },
      { name: "Ensalada de Rúcula y Parmesano", description: "Rúcula fresca, parmesano laminado, nueces caramelizadas y vinagreta balsámica.", tag: null, price: "$135" },
      { name: "Arroz de Azafrán", description: "Arroz de grano largo infusionado en azafrán de La Mancha con hierbas finas.", tag: null, price: "$125" },
    ],
  },
  {
    category: "Postres",
    label: "Para Concluir",
    items: [
      { name: "Coulant de Chocolate Oscuro", description: "Bizcocho tibio de chocolate 70% cacao con corazón fundente, helado de vainilla de Madagascar y caramelo salado artesanal.", tag: "El favorito", price: "$195" },
      { name: "Cheesecake de Cajeta", description: "Base de galleta artesanal, cremoso de cajeta de Celaya, gel de frutos rojos silvestres y crumble de avellana tostada.", tag: null, price: "$175" },
      { name: "Sorbete de Temporada", description: "Preparación diaria con frutas de temporada de Guerrero, servido con espuma de champagne y flores comestibles.", tag: null, price: "$155" },
      { name: "Tabla de Quesos", description: "Selección de quesos artesanales mexicanos y europeos, miel de abeja, nueces, uvas y pan brioche tostado.", tag: "Para compartir", price: "$285" },
    ],
  },
];

const CORTES = [
  {
    category: "Cortes Premium",
    label: "A la Brasa de Encino",
    items: [
      { name: "Ribeye a la Brasa", description: "Corte USDA Prime de 400g, madurado 28 días en seco. Sellado sobre brasa viva de encino, servido con reducción de vino tinto y vegetales de temporada.", tag: "El más solicitado", price: "$650" },
      { name: "New York Strip", description: "Corte de 350g con marmoleado perfecto, costra de pimienta negra y flor de sal Maldon. Acompañado de mantequilla compuesta de hierbas finas.", tag: null, price: "$580" },
      { name: "Tomahawk para Dos", description: "Corte espectacular de 1.2kg madurado en seco 45 días. Presentación en tabla, con chimichurri PÚA, salsa bordelesa y guarnición a elegir.", tag: "Para compartir", price: "$1,280" },
      { name: "Filete Mignon", description: "El más tierno de nuestros cortes. 250g envuelto en tocino artesanal, sobre salsa bordelesa de vino tinto y puré trufado al momento.", tag: null, price: "$520" },
      { name: "Arrachera Premium", description: "Corte marinado 24 horas en mezcal joven y especias de la casa. A la brasa, con guacamole de chile de árbol y tortillas artesanales.", tag: null, price: "$380" },
      { name: "T-Bone Clásico", description: "Corte de 600g con dos texturas: lomo y filete separados por el hueso en T. Madurado 21 días, terminado con mantequilla de ajo negro.", tag: null, price: "$720" },
    ],
  },
  {
    category: "Puntos de Cocción",
    label: "A su preferencia",
    items: [
      { name: "Rojo Inglés (Blue)", description: "Sellado exterior, completamente crudo al centro. Solo para cortes de alta calidad.", tag: null, price: "—" },
      { name: "Término Medio (Medium Rare)", description: "Centro rosado cálido a 57°C. El punto recomendado por nuestra cocina para preservar los jugos.", tag: "Recomendado", price: "—" },
      { name: "Tres Cuartos (Medium Well)", description: "Ligero rosado al centro, a 68°C. Firme y jugoso.", tag: null, price: "—" },
    ],
  },
];

const COCTELERIA = [
  {
    category: "Cócteles de Autor",
    label: "Creaciones PÚA",
    items: [
      { name: "Brasa Negroni", description: "Mezcal joven ahumado, Campari, vermut rosso, twist de naranja flambeada. Servido en roca con esfera de hielo.", tag: "Firma de la barra", price: "$185" },
      { name: "Margarita de Tamarindo", description: "Tequila blanco, licor de tamarindo artesanal, jugo de limón, sal de gusano en el borde. Servido en copa fría.", tag: null, price: "$165" },
      { name: "Rosado de la Casa", description: "Vodka premium, licor de rosas, jugo de limón, agua tónica premium. Elegante y floral, perfecto como aperitivo.", tag: null, price: "$155" },
      { name: "Encino Sour", description: "Whisky ahumado de encino, miel de agave, jugo de limón, clara de huevo, bitters de angostura. Espuma densa y aromática.", tag: null, price: "$195" },
    ],
  },
  {
    category: "Clásicos Redefinidos",
    label: "Con nuestro toque",
    items: [
      { name: "Old Fashioned de Mezonte", description: "Mezcal de agave tobalá, azúcar mascabado, bitters de naranja y cacao. Servido en vaso bajo con gran esfera de hielo transparente.", tag: null, price: "$205" },
      { name: "Mojito de Hierba Santa", description: "Ron blanco agricole, hierba santa fresca, lima, azúcar de caña, agua mineral. Refrescante y herbal.", tag: null, price: "$155" },
      { name: "Aperol Spritz PÚA", description: "Aperol, cava español brut, rodaja de naranja, aceitunas. La versión italiana con nuestro sello.", tag: null, price: "$165" },
      { name: "Paloma Artesanal", description: "Tequila reposado, jugo de toronja fresco, jarabe de hibisco, sal marina en borde. Vibrante y cítrico.", tag: null, price: "$160" },
    ],
  },
  {
    category: "Sin Alcohol",
    label: "Mocktails de temporada",
    items: [
      { name: "Agua de Jamaica Elegante", description: "Infusión concentrada de flor de jamaica, jengibre fresco, menta, agua mineral, miel de abeja. Sin alcohol, lleno de sabor.", tag: null, price: "$95" },
      { name: "Limonada de Coco y Albahaca", description: "Jugo de limón, leche de coco, albahaca fresca, jarabe natural, agua con gas. Tropical y aromático.", tag: null, price: "$105" },
      { name: "Tepache de la Casa", description: "Fermentado artesanal de piña con piloncillo y especias. Suave, burbujeante y con notas terrosas.", tag: "De temporada", price: "$110" },
    ],
  },
];

const VINOS = [
  {
    category: "Vinos Blancos",
    label: "Frescos y Aromáticos",
    items: [
      { name: "Chardonnay Valle de Guadalupe", description: "Notas de durazno blanco, vainilla y tostado sutil. Fermentado en barrica de roble francés. Baja California, México.", tag: "Local", price: "$420 / copa $145" },
      { name: "Sauvignon Blanc Marlborough", description: "Cítrico y herbal con notas de maracuyá y lima. Acidez vibrante, ideal para mariscos. Nueva Zelanda.", tag: null, price: "$480 / copa $165" },
      { name: "Albariño Rías Baixas", description: "Floral y mineral, con acidez fresca y notas de manzana verde. El complemento perfecto para el pulpo. España.", tag: "Sommelier recomienda", price: "$520 / copa $180" },
    ],
  },
  {
    category: "Vinos Tintos",
    label: "Cuerpo y Profundidad",
    items: [
      { name: "Malbec Mendoza Reserva", description: "Ciruela negra, chocolate amargo y especias. Taninos sedosos y final largo. El compañero ideal para nuestros cortes. Argentina.", tag: "El más pedido", price: "$560 / copa $185" },
      { name: "Cabernet Sauvignon Napa Valley", description: "Potente y estructurado. Cassis, cedro, tabaco y roble tostado. Madurado 18 meses en barrica nueva. EUA.", tag: "Premium", price: "$980 / copa $320" },
      { name: "Tempranillo Ribera del Duero", description: "Elegante y equilibrado. Frutos rojos, especias y tierra húmeda. Gran expresión del terruño castellano. España.", tag: null, price: "$640 / copa $210" },
      { name: "Pinot Noir Borgoña", description: "Delicado y complejo. Cereza, frambuesa, cuero y tierra. La elección refinada para el Tasting de la Casa. Francia.", tag: "De autor", price: "$1,200 / copa $395" },
    ],
  },
  {
    category: "Rosados y Espumosos",
    label: "Celebración y Aperitivo",
    items: [
      { name: "Rosé de Provence", description: "Pálido y elegante. Fresas silvestres, pétalos de rosa, mineralidad salina. Perfecto para comenzar la velada. Francia.", tag: null, price: "$490 / copa $165" },
      { name: "Cava Brut Nature", description: "Burbujas finas y persistentes. Manzana verde, brioche y levadura. Sin azúcar añadida. Excelente como aperitivo. España.", tag: null, price: "$420 / copa $145" },
      { name: "Champagne Blanc de Blancs", description: "100% Chardonnay. Tostado, cítrico y mineral. Burbujas elegantes. Para los momentos que lo merecen. Francia.", tag: "Gran ocasión", price: "$2,400 / copa $780" },
    ],
  },
  {
    category: "Vinos por la Copa",
    label: "Selección del día",
    items: [
      { name: "Blanco del día", description: "Selección diaria de nuestro sommelier. Consulta disponibilidad con tu mesero.", tag: null, price: "$120" },
      { name: "Tinto del día", description: "Rotación semanal de nuestros tintos favoritos. Gran relación precio-calidad.", tag: null, price: "$135" },
      { name: "Maridaje 3 copas", description: "Tres copas seleccionadas por nuestro sommelier para acompañar tu experiencia en PÚA.", tag: "Recomendado", price: "$380" },
    ],
  },
];

// ─── TIPOS ───────────────────────────────────────

type TabId = "menu" | "cortes" | "cocteleria" | "vinos";

const TABS: { id: TabId; label: string; sublabel: string }[] = [
  { id: "menu",       label: "Menú",       sublabel: "Platillos" },
  { id: "cortes",     label: "Cortes",     sublabel: "A la Brasa" },
  { id: "cocteleria", label: "Coctelería", sublabel: "Bebidas" },
  { id: "vinos",      label: "Vinos",      sublabel: "La Cava" },
];

type Section = { category: string; label: string; items: { name: string; description: string; tag: string | null; price: string }[] };

const TAB_DATA: Record<TabId, Section[]> = {
  menu:       MENU_NORMAL,
  cortes:     CORTES,
  cocteleria: COCTELERIA,
  vinos:      VINOS,
};

// ─── COMPONENTE ITEMS ────────────────────────────

function MenuItems({ sections }: { sections: Section[] }) {
  return (
    <div className="space-y-14 md:space-y-24">
      {sections.map((section) => (
        <div key={section.category}>
          <div className="mb-10 md:mb-14">
            <span className="text-gold-500/70 text-[9px] tracking-widest-3xl uppercase font-extralight">
              {section.label}
            </span>
            <h3 className="font-serif text-2xl md:text-4xl text-cream-100 mt-2 font-light">
              {section.category}
            </h3>
            <div className="h-px w-10 bg-gold-500/20 mt-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10">
            {section.items.map((item) => (
              <div
                key={item.name}
                className="group border-b border-white/[0.03] pb-7 hover:border-gold-500/10 transition-colors duration-700"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4 className="font-serif text-base md:text-lg text-cream-100/95 group-hover:text-gold-400/92 transition-colors duration-500 leading-snug font-light">
                    {item.name}
                  </h4>
                  <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                    <span className="shimmer-gold font-serif text-base font-light leading-none">
                      {item.price}
                    </span>
                    {item.tag && (
                      <span className="text-[8px] tracking-widest-xl uppercase text-gold-500/72 border border-gold-500/10 px-2 py-0.5 font-extralight">
                        {item.tag}
                      </span>
                    )}
                  </div>
                </div>
                <RatingStars dishId={item.name} />
                <p className="text-cream-300/80 text-sm font-extralight leading-[1.8]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── MODAL PRINCIPAL ─────────────────────────────

interface FullMenuModalProps {
  onClose: () => void;
}

export function FullMenuModal({ onClose }: FullMenuModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [activeTab, setActiveTab] = useState<TabId>("menu");
  const [visible, setVisible] = useState(true);

  // Lock body scroll — iOS Safari fix
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  useEffect(() => { closeButtonRef.current?.focus(); }, []);

  // Escape + focus trap
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusable = panel.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Cambiar tab con fade suave
  const handleTabChange = (tab: TabId) => {
    if (tab === activeTab) return;
    setVisible(false);
    setTimeout(() => {
      setActiveTab(tab);
      setVisible(true);
      panelRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-brand-black/[0.97] backdrop-blur-2xl"
      role="dialog"
      aria-modal="true"
      aria-label="Carta completa de PÚA Brasa y Vino"
    >
      {/* Scroll container */}
      <div
        ref={panelRef}
        className="absolute inset-0 overflow-y-auto"
        style={{
          overscrollBehavior: "contain",
          WebkitOverflowScrolling: "touch",
          touchAction: "pan-y",
        } as React.CSSProperties}
      >
        <div className="w-full max-w-5xl mx-auto min-h-full bg-brand-black/80 border-x border-white/[0.03] flex flex-col">

          {/* ── Sticky header ── */}
          <div className="sticky top-0 z-20 bg-brand-black/98 backdrop-blur-xl border-b border-white/[0.04]">
            {/* Fila superior: logo + cerrar */}
            <div className="px-4 sm:px-6 md:px-12 pt-4 pb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-serif text-lg md:text-xl text-cream-100/95 tracking-wider font-light">PÚA</span>
                <div className="h-3.5 w-px bg-white/[0.08]" />
                <span className="text-[9px] tracking-widest-2xl text-gold-500/80 uppercase font-extralight hidden sm:inline">
                  Carta Completa
                </span>
              </div>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="flex items-center gap-2 text-cream-200/70 hover:text-gold-400 transition-colors duration-300 text-[10px] tracking-widest-xl uppercase font-extralight touch-manipulation"
                aria-label="Cerrar carta"
              >
                <span className="hidden sm:inline">Cerrar</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* ── Tabs ── */}
            <div className="px-4 sm:px-6 md:px-12 overflow-x-auto scrollbar-none">
              <div className="flex items-end gap-0 min-w-max">
                {TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      className={`relative flex flex-col items-center px-5 md:px-8 pt-2 pb-3 transition-all duration-300 touch-manipulation focus:outline-none group
                        ${isActive ? "text-cream-100" : "text-cream-200/40 hover:text-cream-200/70"}`}
                    >
                      <span className={`text-[10px] tracking-widest-xl uppercase font-light transition-all duration-300
                        ${isActive ? "text-gold-500/80" : "text-gold-500/30 group-hover:text-gold-500/50"}`}>
                        {tab.sublabel}
                      </span>
                      <span className="font-serif text-base md:text-lg font-light mt-0.5 leading-none">
                        {tab.label}
                      </span>
                      {/* Gold underline activo */}
                      <span className={`absolute bottom-0 left-4 right-4 h-px transition-all duration-400
                        ${isActive ? "bg-gold-500/70 opacity-100" : "bg-transparent opacity-0"}`}
                      />
                    </button>
                  );
                })}
              </div>
              {/* línea base de tabs */}
              <div className="h-px bg-white/[0.04] -mt-px" />
            </div>
          </div>

          {/* ── Contenido con fade ── */}
          <div
            className="flex-1 px-4 sm:px-6 md:px-12 py-10 md:py-16"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.25s ease, transform 0.25s ease",
            }}
          >
            <MenuItems sections={TAB_DATA[activeTab]} />

            {/* Footer */}
            <div className="text-center pt-16 pb-8">
              <div className="h-px w-16 bg-gold-500/10 mx-auto mb-10" />
              <p className="text-cream-200/45 text-[11px] font-extralight tracking-wide leading-relaxed max-w-sm mx-auto">
                Algunos platillos pueden contener alérgenos. Consulta a nuestro equipo para más información.
              </p>
              <a
                href="#reservar"
                onClick={onClose}
                className="inline-flex items-center gap-3 mt-10 px-12 py-4 bg-gold-500/90 text-brand-black text-[10px] tracking-widest-xl uppercase font-medium hover:bg-gold-400 transition-colors duration-500 touch-manipulation"
              >
                Reservar Mesa
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
