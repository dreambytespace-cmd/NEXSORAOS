import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WebGLShader({ dark }) {
  const canvasRef = useRef(null);
  const materialRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;
    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;
      uniform vec3 color1;
      uniform vec3 color2;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        float d = length(p) * distortion;
        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);
        float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);
        vec3 base = mix(color1, color2, p.y * 0.5 + 0.5);
        gl_FragColor = vec4(base + vec3(r, g, b) * 0.42, 1.0);
      }
    `;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 2);
    camera.position.z = 1;
    const uniforms = {
      resolution: { value: new THREE.Vector2() },
      time: { value: 0 },
      xScale: { value: 1.4 },
      yScale: { value: 0.42 },
      distortion: { value: 0.07 },
      color1: { value: new THREE.Color(0x040616) },
      color2: { value: new THREE.Color(0x051729) },
    };
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        new Float32Array([
          -1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0,
        ]),
        3,
      ),
    );
    const material = new THREE.RawShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      side: THREE.DoubleSide,
    });
    materialRef.current = material;
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      renderer.setSize(width, height, false);
      uniforms.resolution.value.set(width, height);
    };
    const animate = () => {
      uniforms.time.value += 0.01;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    let frameId;
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.color1.value.set(dark ? 0x0a0a1a : 0xf7f7f7);
      materialRef.current.uniforms.color2.value.set(dark ? 0x1a1a3a : 0xe0e0e0);
    }
  }, [dark]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        display: "block",
        width: "100%",
        height: "100%",
        opacity: 0.58,
      }}
    />
  );
}
