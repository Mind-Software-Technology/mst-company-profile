"use client";

import { useEffect, useRef } from "react";

const vertexShaderGLSL = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShaderGLSL = `
precision highp float;
varying vec2 vUv;

uniform vec2  u_resolution;
uniform float u_time;
uniform float u_grain;
uniform float u_intensity;
uniform vec3  u_colors[4];
uniform vec3  u_bg;

vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = vUv;
  float ratio = u_resolution.x / u_resolution.y;
  vec2 p = uv - 0.5;
  p.x *= ratio;

  float t = u_time * 0.1;

  float n1 = snoise(p * 0.4 + vec2(t * 0.2, -t * 0.3));
  float n2 = snoise(p * 0.55 + vec2(-t * 0.15, t * 0.25) + n1 * 0.25);
  float n3 = snoise(p * 0.75 + vec2(t * 0.1, -t * 0.2) + n2 * 0.2);

  vec3 col = u_bg;

  float dist = length(p) * 1.5;

  /* Clear zone in the middle (where the headline sits) and at the far
     corners, with the richest color in a mid-distance ring — keeps text
     legible while still giving the section one bold, colorful gesture. */
  float colorVisibility = smoothstep(0.0, 0.75, dist) * (1.0 - smoothstep(1.05, 1.6, dist));

  col = mix(col, u_colors[0], smoothstep(-0.2, 0.5, n1) * 0.85 * u_intensity);
  col = mix(col, u_colors[1], smoothstep(-0.1, 0.6, n2) * 0.7 * u_intensity);
  col = mix(col, u_colors[2], smoothstep(-0.3, 0.4, n3) * 0.6 * u_intensity);
  col = mix(col, u_colors[3], smoothstep(0.0, 0.7, n1 * n2) * 0.5 * u_intensity);

  float glow = smoothstep(0.8, 0.0, dist) * 0.3 * u_intensity * colorVisibility;
  col += u_colors[1] * glow;

  col = mix(u_bg, col, clamp(colorVisibility, 0.0, 1.0));

  float grain = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453 + u_time);
  col += (grain - 0.5) * u_grain * 0.1;

  gl_FragColor = vec4(col, 1.0);
}
`;

const DARK = { bg: "#0A0B10", colors: ["#C4B5FD", "#8B5CF6", "#0EA5E9", "#06B6D4"], intensity: 1.0 };

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16) / 255,
    parseInt(h.slice(2, 4), 16) / 255,
    parseInt(h.slice(4, 6), 16) / 255,
  ];
}

export default function HeroGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Hero is always a dark banner — independent of the site-wide theme —
    // so the white text in it stays reliably legible either way.
    const palette = DARK;

    const createShader = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const program = gl.createProgram()!;
    gl.attachShader(program, createShader(gl.VERTEX_SHADER, vertexShaderGLSL));
    gl.attachShader(program, createShader(gl.FRAGMENT_SHADER, fragmentShaderGLSL));
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const locs = {
      res: gl.getUniformLocation(program, "u_resolution"),
      time: gl.getUniformLocation(program, "u_time"),
      grain: gl.getUniformLocation(program, "u_grain"),
      intensity: gl.getUniformLocation(program, "u_intensity"),
      colors: gl.getUniformLocation(program, "u_colors"),
      bg: gl.getUniformLocation(program, "u_bg"),
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = container.clientWidth * dpr;
      canvas.height = container.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const bgRgb = hexToRgb(palette.bg);
    const colorsFlat = new Float32Array(palette.colors.slice(0, 4).flatMap(hexToRgb));

    let raf: number;
    const draw = (t: number) => {
      gl.uniform2f(locs.res, canvas.width, canvas.height);
      gl.uniform1f(locs.time, t * 0.001 * 1.4);
      gl.uniform1f(locs.grain, 0.3);
      gl.uniform1f(locs.intensity, palette.intensity);
      gl.uniform3f(locs.bg, bgRgb[0], bgRgb[1], bgRgb[2]);
      gl.uniform3fv(locs.colors, colorsFlat);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    if (reducedMotion) {
      draw(0);
    } else {
      const render = (t: number) => {
        draw(t);
        raf = requestAnimationFrame(render);
      };
      raf = requestAnimationFrame(render);
    }

    return () => {
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
