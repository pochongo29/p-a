"use client";

import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";

/* ═══════════════════════════════════════════════
   DISH 3D VIEWER — Three.js interactive viewer
   Drag to rotate · Pinch/scroll to zoom
   ═══════════════════════════════════════════════ */

// ─── PLATE BASE (shared across all dishes) ──────

function Plate() {
  return (
    <group>
      {/* Ceramic plate body */}
      <mesh receiveShadow castShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[1.55, 1.45, 0.1, 72]} />
        <meshStandardMaterial color="#F0EBE1" roughness={0.22} metalness={0.04} />
      </mesh>
      {/* Raised rim */}
      <mesh receiveShadow position={[0, 0.05, 0]}>
        <torusGeometry args={[1.48, 0.09, 14, 72]} />
        <meshStandardMaterial color="#EAE4D8" roughness={0.28} metalness={0.05} />
      </mesh>
      {/* Gold accent ring */}
      <mesh position={[0, 0.09, 0]}>
        <torusGeometry args={[1.46, 0.025, 10, 72]} />
        <meshStandardMaterial color="#C8A24E" roughness={0.3} metalness={0.75} />
      </mesh>
      {/* Inner well (slightly concave illusion) */}
      <mesh receiveShadow position={[0, 0.04, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 0.04, 64]} />
        <meshStandardMaterial color="#F5F1E8" roughness={0.18} metalness={0.02} />
      </mesh>
    </group>
  );
}

// ─── FOOD MESHES BY CATEGORY ────────────────────

function SteakMesh() {
  const ref = useRef<THREE.Group>(null);
  return (
    <group ref={ref} position={[0, 0.17, 0]}>
      {/* Main cut */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.05, 0.28, 0.72]} />
        <meshStandardMaterial color="#4A1A06" roughness={0.92} metalness={0.0} />
      </mesh>
      {/* Seared crust top */}
      <mesh castShadow position={[0, 0.15, 0]}>
        <boxGeometry args={[1.05, 0.02, 0.72]} />
        <meshStandardMaterial color="#2A0A02" roughness={0.98} metalness={0.0} />
      </mesh>
      {/* Grill marks */}
      {[-0.28, 0, 0.28].map((x, i) => (
        <mesh key={i} position={[x, 0.165, 0]} castShadow>
          <boxGeometry args={[0.06, 0.025, 0.72]} />
          <meshStandardMaterial color="#150500" roughness={1} metalness={0} />
        </mesh>
      ))}
      {/* Fat marbling strip */}
      <mesh position={[0.3, 0.05, 0]} castShadow>
        <boxGeometry args={[0.18, 0.26, 0.72]} />
        <meshStandardMaterial color="#C8A06A" roughness={0.88} metalness={0.0} />
      </mesh>
      {/* Herb garnish */}
      {[[-0.3, 0.17, 0.25], [0.1, 0.17, -0.2]].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]} rotation={[0.4, i * 1.2, 0.3]} castShadow>
          <sphereGeometry args={[0.07, 8, 8]} />
          <meshStandardMaterial color="#2D5A1B" roughness={0.95} metalness={0} />
        </mesh>
      ))}
    </group>
  );
}

function FishMesh() {
  return (
    <group position={[0, 0.18, 0]}>
      {/* Fillet body */}
      <mesh castShadow receiveShadow rotation={[0, 0.3, 0.12]}>
        <capsuleGeometry args={[0.22, 0.82, 5, 18]} />
        <meshStandardMaterial color="#D4623A" roughness={0.68} metalness={0.1} />
      </mesh>
      {/* Herb crust top */}
      <mesh castShadow position={[0.05, 0.1, 0]} rotation={[0, 0.3, 0.12]}>
        <capsuleGeometry args={[0.18, 0.72, 5, 18]} />
        <meshStandardMaterial color="#3A6B22" roughness={0.88} metalness={0} />
      </mesh>
      {/* Sauce pool */}
      <mesh receiveShadow position={[0, -0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.55, 32]} />
        <meshStandardMaterial color="#F2E8C8" roughness={0.35} metalness={0.05} transparent opacity={0.9} />
      </mesh>
      {/* Lemon slice */}
      <mesh castShadow position={[0.55, 0.05, -0.1]} rotation={[0.2, 0.5, 0.3]}>
        <cylinderGeometry args={[0.13, 0.13, 0.04, 16]} />
        <meshStandardMaterial color="#F5D060" roughness={0.6} metalness={0} />
      </mesh>
    </group>
  );
}

function LambMesh() {
  return (
    <group position={[0, 0.2, 0]}>
      {/* Leg shape */}
      <mesh castShadow receiveShadow rotation={[0, 0.4, 0.15]}>
        <capsuleGeometry args={[0.28, 0.9, 6, 20]} />
        <meshStandardMaterial color="#5C2010" roughness={0.88} metalness={0.0} />
      </mesh>
      {/* Glaze */}
      <mesh castShadow rotation={[0, 0.4, 0.15]}>
        <capsuleGeometry args={[0.29, 0.88, 6, 20]} />
        <meshStandardMaterial color="#7A3018" roughness={0.5} metalness={0.15} transparent opacity={0.6} />
      </mesh>
      {/* Polenta bed */}
      <mesh receiveShadow position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.7, 32]} />
        <meshStandardMaterial color="#E8D080" roughness={0.55} metalness={0.0} />
      </mesh>
    </group>
  );
}

function EntranceMesh() {
  return (
    <group position={[0, 0.14, 0]}>
      {/* Main piece */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.62, 0.55, 0.18, 32]} />
        <meshStandardMaterial color="#C8A05A" roughness={0.7} metalness={0.05} />
      </mesh>
      {/* Truffle shavings */}
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i / 5) * Math.PI * 2;
        return (
          <mesh key={i} castShadow
            position={[Math.cos(angle) * 0.3, 0.12, Math.sin(angle) * 0.3]}
            rotation={[0.3, angle, 0.1]}
          >
            <boxGeometry args={[0.14, 0.03, 0.1]} />
            <meshStandardMaterial color="#1A0A00" roughness={0.95} metalness={0} />
          </mesh>
        );
      })}
      {/* Microgreens */}
      {[0, 1, 2].map((i) => {
        const angle = (i / 3) * Math.PI * 2 + 0.3;
        return (
          <mesh key={i} castShadow
            position={[Math.cos(angle) * 0.42, 0.16, Math.sin(angle) * 0.42]}
          >
            <sphereGeometry args={[0.07, 8, 6]} />
            <meshStandardMaterial color="#2D5A1B" roughness={0.9} metalness={0} />
          </mesh>
        );
      })}
    </group>
  );
}

function DessertMesh() {
  return (
    <group position={[0, 0.16, 0]}>
      {/* Cake slice */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.55, 0.55, 0.38, 32, 1, false, 0, Math.PI * 0.6]} />
        <meshStandardMaterial color="#2A0C00" roughness={0.9} metalness={0} />
      </mesh>
      {/* Ganache top */}
      <mesh castShadow position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.56, 0.56, 0.04, 32, 1, false, 0, Math.PI * 0.6]} />
        <meshStandardMaterial color="#1A0800" roughness={0.55} metalness={0.05} />
      </mesh>
      {/* Molten chocolate flow */}
      <mesh receiveShadow position={[0.1, -0.02, 0.1]}>
        <sphereGeometry args={[0.2, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial color="#3D1200" roughness={0.4} metalness={0.0} transparent opacity={0.92} />
      </mesh>
      {/* Gold dust */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} castShadow
          position={[Math.cos(i * 2) * 0.25, 0.22, Math.sin(i * 2) * 0.2]}
        >
          <sphereGeometry args={[0.025, 6, 6]} />
          <meshStandardMaterial color="#C8A24E" roughness={0.2} metalness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

function CocktailGlass({ color = "#F5C842" }: { color?: string }) {
  return (
    <group position={[0, 0.05, 0]}>
      {/* Liquid inside */}
      <mesh castShadow position={[0, 0.62, 0]}>
        <cylinderGeometry args={[0.38, 0.05, 0.42, 32, 1, true]} />
        <meshStandardMaterial color={color} roughness={0.05} metalness={0.05} transparent opacity={0.82} side={THREE.DoubleSide} />
      </mesh>
      {/* Glass bowl */}
      <mesh castShadow position={[0, 0.62, 0]}>
        <cylinderGeometry args={[0.42, 0.06, 0.48, 32, 1, true]} />
        <meshStandardMaterial color="#CCEEFF" roughness={0.02} metalness={0.12} transparent opacity={0.28} side={THREE.DoubleSide} />
      </mesh>
      {/* Glass rim */}
      <mesh castShadow position={[0, 0.87, 0]}>
        <torusGeometry args={[0.42, 0.015, 8, 40]} />
        <meshStandardMaterial color="#DDEEFF" roughness={0.02} metalness={0.15} transparent opacity={0.5} />
      </mesh>
      {/* Stem */}
      <mesh castShadow position={[0, 0.22, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.52, 14]} />
        <meshStandardMaterial color="#CCEEFF" roughness={0.02} metalness={0.12} transparent opacity={0.45} />
      </mesh>
      {/* Base */}
      <mesh castShadow receiveShadow position={[0, -0.04, 0]}>
        <cylinderGeometry args={[0.32, 0.32, 0.05, 40]} />
        <meshStandardMaterial color="#CCEEFF" roughness={0.02} metalness={0.12} transparent opacity={0.45} />
      </mesh>
      {/* Garnish */}
      <mesh castShadow position={[0.42, 0.87, 0]} rotation={[0, 0, -0.4]}>
        <cylinderGeometry args={[0.06, 0.06, 0.025, 16]} />
        <meshStandardMaterial color="#F5D060" roughness={0.6} metalness={0} />
      </mesh>
    </group>
  );
}

function WineGlass({ isRed = true }: { isRed?: boolean }) {
  const wineColor = isRed ? "#6B1A22" : "#D4C87E";
  const wineOpacity = isRed ? 0.88 : 0.72;
  return (
    <group position={[0, 0.0, 0]}>
      {/* Wine fill */}
      <mesh castShadow position={[0, 0.72, 0]}>
        <cylinderGeometry args={[0.3, 0.15, 0.5, 32, 1, true]} />
        <meshStandardMaterial color={wineColor} roughness={0.06} metalness={0.08} transparent opacity={wineOpacity} side={THREE.DoubleSide} />
      </mesh>
      {/* Bowl */}
      <mesh castShadow position={[0, 0.68, 0]}>
        <cylinderGeometry args={[0.35, 0.12, 0.68, 32, 1, true]} />
        <meshStandardMaterial color="#E8F4FF" roughness={0.01} metalness={0.15} transparent opacity={0.22} side={THREE.DoubleSide} />
      </mesh>
      {/* Rim */}
      <mesh castShadow position={[0, 1.02, 0]}>
        <torusGeometry args={[0.35, 0.012, 8, 40]} />
        <meshStandardMaterial color="#E8F4FF" roughness={0.01} metalness={0.15} transparent opacity={0.4} />
      </mesh>
      {/* Stem */}
      <mesh castShadow position={[0, 0.26, 0]}>
        <cylinderGeometry args={[0.022, 0.022, 0.6, 14]} />
        <meshStandardMaterial color="#E8F4FF" roughness={0.01} metalness={0.15} transparent opacity={0.38} />
      </mesh>
      {/* Base */}
      <mesh castShadow receiveShadow position={[0, -0.04, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.04, 40]} />
        <meshStandardMaterial color="#E8F4FF" roughness={0.01} metalness={0.15} transparent opacity={0.38} />
      </mesh>
    </group>
  );
}

// ─── DISH SELECTOR ──────────────────────────────

function DishMesh({ category, name }: { category: string; name: string }) {
  const cat = category.toLowerCase();
  const nm = name.toLowerCase();

  if (cat.includes("corte") || nm.includes("ribeye") || nm.includes("arrachera") || nm.includes("filete") || nm.includes("tomahawk") || nm.includes("brisket") || nm.includes("t-bone") || nm.includes("new york")) {
    return <><Plate /><SteakMesh /></>;
  }
  if (cat.includes("mar") || nm.includes("salmón") || nm.includes("pulpo") || nm.includes("atún") || nm.includes("robalo") || nm.includes("camarón")) {
    return <><Plate /><FishMesh /></>;
  }
  if (nm.includes("cordero") || nm.includes("lamb")) {
    return <><Plate /><LambMesh /></>;
  }
  if (cat.includes("postre") || nm.includes("coulant") || nm.includes("chocolate") || nm.includes("helado") || nm.includes("tarta")) {
    return <><Plate /><DessertMesh /></>;
  }
  if (cat.includes("vino") || cat.includes("copa") || nm.includes("vino") || nm.includes("cava") || nm.includes("champagne")) {
    const isRed = nm.includes("tinto") || nm.includes("malbec") || nm.includes("cabernet") || nm.includes("tempranillo") || nm.includes("rioja");
    return <WineGlass isRed={isRed} />;
  }
  if (cat.includes("coctel") || cat.includes("bebida") || cat.includes("shot") || cat.includes("mocktail")) {
    const drinkColor = nm.includes("aperol") ? "#F5682A"
      : nm.includes("mezcal") || nm.includes("margarita") ? "#C8E840"
      : nm.includes("mojito") || nm.includes("limonada") ? "#A8E855"
      : nm.includes("espresso") ? "#3A1A00"
      : "#F5C842";
    return <CocktailGlass color={drinkColor} />;
  }
  // Default: elegant starter presentation
  return <><Plate /><EntranceMesh /></>;
}

// ─── SCENE SETUP ────────────────────────────────

function InitialRotation() {
  const { scene } = useThree();
  const elapsed = useRef(0);
  const controls = useRef<{ autoRotate: boolean } | null>(null);

  useFrame((state, delta) => {
    elapsed.current += delta;
    // After 2.5s auto-rotate stops — user takes control
    void scene;
    void controls;
  });

  return null;
}

function Scene({ category, name, modelUrl }: { category: string; name: string; modelUrl?: string }) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[3, 6, 4]}
        intensity={1.4}
        castShadow
        color="#FFF8EC"
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={20}
        shadow-camera-left={-4}
        shadow-camera-right={4}
        shadow-camera-top={4}
        shadow-camera-bottom={-4}
      />
      <pointLight position={[-3, 4, -2]} intensity={0.7} color="#C8A24E" />
      <pointLight position={[2, 1, 3]} intensity={0.35} color="#FFFFFF" />
      <pointLight position={[0, -1, 2]} intensity={0.15} color="#FFF0D8" />

      {/* Shadow receiver plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.08, 0]} receiveShadow>
        <planeGeometry args={[14, 14]} />
        <shadowMaterial transparent opacity={0.28} />
      </mesh>

      <Suspense fallback={null}>
        {modelUrl ? (
          <GLBModel url={modelUrl} />
        ) : (
          <DishMesh category={category} name={name} />
        )}
        <Environment preset="apartment" />
      </Suspense>

      <InitialRotation />

      <OrbitControls
        enablePan={false}
        minDistance={2.2}
        maxDistance={7}
        minPolarAngle={Math.PI * 0.08}
        maxPolarAngle={Math.PI * 0.72}
        autoRotate
        autoRotateSpeed={1.2}
        dampingFactor={0.06}
        enableDamping
        touches={{ ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN }}
      />
    </>
  );
}

// ─── GLB LOADER ─────────────────────────────────

function GLBModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!ref.current) return;
    const box = new THREE.Box3().setFromObject(ref.current);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    ref.current.position.sub(center);
    ref.current.scale.setScalar(2.4 / maxDim);
    ref.current.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, []);

  return <primitive ref={ref} object={scene} />;
}

// ─── PUBLIC VIEWER COMPONENT ────────────────────

export interface DishViewer3DProps {
  name: string;
  description: string;
  price: string;
  category: string;
  tag?: string | null;
  modelUrl?: string;
  onClose: () => void;
}

export function DishViewer3D({ name, description, price, category, tag, modelUrl, onClose }: DishViewer3DProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col transition-opacity duration-400 ${loaded ? "opacity-100" : "opacity-0"}`}
      style={{ background: "#0A0806" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 md:px-8 py-4 border-b border-white/[0.05] flex-shrink-0">
        <div className="flex flex-col">
          {tag && (
            <span className="text-[8px] tracking-widest-2xl uppercase text-gold-500/60 font-light mb-0.5">{tag}</span>
          )}
          <h3 className="font-serif text-base md:text-xl text-cream-100 font-light leading-none">{name}</h3>
          <span className="text-[9px] tracking-widest text-cream-200/35 uppercase font-light mt-1">{category}</span>
        </div>
        <div className="flex items-center gap-5">
          <span className="shimmer-gold font-serif text-lg md:text-xl font-light">{price}</span>
          <button
            onClick={onClose}
            aria-label="Cerrar visor 3D"
            className="w-8 h-8 flex items-center justify-center text-cream-200/40 hover:text-gold-400 transition-colors touch-manipulation"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 relative">
        <Canvas
          shadows
          camera={{ position: [0, 1.8, 4.2], fov: 42 }}
          gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
          dpr={[1, 2]}
        >
          <color attach="background" args={["#0A0806"]} />
          <Scene category={category} name={name} modelUrl={modelUrl} />
        </Canvas>

        {/* Hint overlay */}
        <div className="absolute bottom-5 inset-x-0 flex justify-center pointer-events-none">
          <div className="flex items-center gap-3 bg-brand-black/50 backdrop-blur-sm border border-white/[0.06] px-4 py-2 rounded-sm">
            <span className="text-[8px] tracking-widest text-cream-200/35 uppercase font-light">Arrastra para rotar</span>
            <span className="text-gold-500/20 text-xs">·</span>
            <span className="text-[8px] tracking-widest text-cream-200/35 uppercase font-light">Pellizca para zoom</span>
          </div>
        </div>
      </div>

      {/* Description bar */}
      {description && (
        <div className="px-6 md:px-12 py-4 border-t border-white/[0.04] flex-shrink-0">
          <p className="text-cream-300/50 text-xs font-extralight leading-relaxed text-center max-w-xl mx-auto">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
