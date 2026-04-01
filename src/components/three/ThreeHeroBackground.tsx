"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = {
  className?: string;
  /**
   * Permet de désactiver l’antialias sur appareils lents.
   * Par défaut: auto (désactivé si DPR trop élevé / reduce motion).
   */
  antialias?: boolean;
};

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export function ThreeHeroBackground({ className, antialias }: Props) {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reducedMotion = prefersReducedMotion();

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 12, 32);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0.25, 10.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias:
        antialias ??
        (!reducedMotion && (window.devicePixelRatio ?? 1) <= 2),
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const canvas = renderer.domElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    canvas.style.pointerEvents = "none";
    host.appendChild(canvas);

    const dpr = clamp(window.devicePixelRatio ?? 1, 1, 2);
    renderer.setPixelRatio(dpr);

    const ambient = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffffff, 0.9);
    key.position.set(3, 4, 6);
    scene.add(key);

    const rim = new THREE.DirectionalLight(0x4a63ff, 0.65);
    rim.position.set(-6, 2, -4);
    scene.add(rim);

    // Globe "premium" (simple, léger)
    const globeGeo = new THREE.IcosahedronGeometry(2.25, 6);
    const baseColor = new THREE.Color(0x1e1e2f);
    const hoverColor = new THREE.Color(0x4a63ff);
    const globeMat = new THREE.MeshStandardMaterial({
      color: baseColor,
      roughness: 0.35,
      metalness: 0.22,
      emissive: new THREE.Color(0x0b1025),
      emissiveIntensity: 0.6,
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    globe.position.set(1.1, 0.2, 0);
    scene.add(globe);

    const wire = new THREE.Mesh(
      globeGeo,
      new THREE.MeshBasicMaterial({
        color: 0xf2b705,
        wireframe: true,
        transparent: true,
        opacity: 0.14,
      }),
    );
    wire.position.copy(globe.position);
    scene.add(wire);

    // Particules réactives au scroll (fond subtil)
    const particlesCount = 900;
    const pGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      positions[i3 + 0] = (Math.random() - 0.5) * 22;
      positions[i3 + 1] = (Math.random() - 0.5) * 14;
      positions[i3 + 2] = (Math.random() - 0.5) * 18 - 2;
      sizes[i] = Math.random() * 1.0 + 0.35;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pGeo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const pMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.035,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    // Interaction: rotation au mouvement de la souris + parallax caméra
    const pointer = new THREE.Vector2(0, 0);
    let isHovering = false;
    const raycaster = new THREE.Raycaster();

    const onMouseMove = (e: MouseEvent) => {
      const rect = host.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      pointer.x = x * 2 - 1;
      pointer.y = -(y * 2 - 1);
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Interaction: particules + caméra réagissent au scroll
    let scrollT = 0;
    const onScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      scrollT = clamp(window.scrollY / max, 0, 1);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Resize / responsive
    const resize = () => {
      const w = host.clientWidth;
      const h = host.clientHeight;
      camera.aspect = w / Math.max(1, h);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(host);
    resize();

    // Animation
    let raf = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      raf = window.requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      const motion = reducedMotion ? 0.25 : 1;

      // Parallax caméra (léger, premium)
      const targetCamX = pointer.x * 0.55;
      const targetCamY = pointer.y * 0.25 + 0.15;
      camera.position.x += (targetCamX - camera.position.x) * 0.035 * motion;
      camera.position.y += (targetCamY - camera.position.y) * 0.035 * motion;

      // Scroll: "push" de profondeur très subtil + énergie des particules
      const scrollDepth = 10.5 - scrollT * 1.25;
      camera.position.z += (scrollDepth - camera.position.z) * 0.03 * motion;
      camera.lookAt(0.3, 0.1, 0);

      // Globe: rotation + pulsation
      globe.rotation.y += 0.0055 * motion;
      globe.rotation.x = (pointer.y * 0.35) * motion;
      globe.rotation.z = (pointer.x * 0.15) * motion;

      const pulse = 1 + Math.sin(t * 1.8) * 0.015 * motion;
      globe.scale.setScalar(pulse);
      wire.scale.setScalar(pulse * 1.02);
      wire.rotation.y -= 0.0035 * motion;

      // Hover: changement de couleur au survol (raycast via pointeur)
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObject(globe, false);
      const nowHover = hit.length > 0;
      if (nowHover !== isHovering) {
        isHovering = nowHover;
      }
      const target = isHovering ? hoverColor : baseColor;
      globeMat.color.lerp(target, 0.08 * motion);

      // Particules: dérive + réaction au scroll
      points.rotation.y += (0.0009 + scrollT * 0.0032) * motion;
      points.rotation.x += 0.00035 * motion;
      pMat.opacity = 0.22 + scrollT * 0.18;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);

      scene.remove(globe, wire, points, ambient, key, rim);

      globeGeo.dispose();
      globeMat.dispose();
      (wire.material as THREE.Material).dispose();
      pGeo.dispose();
      pMat.dispose();

      renderer.dispose();
      canvas.remove();
    };
  }, [antialias]);

  return <div ref={hostRef} className={className} aria-hidden="true" />;
}

