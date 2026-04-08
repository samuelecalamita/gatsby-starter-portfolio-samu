(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=document.querySelector("#canvas"),p=window.matchMedia("(prefers-reduced-motion: reduce)");async function w(){if(!u)return;const o=await import("https://cdn.jsdelivr.net/npm/three@0.179.1/build/three.module.js"),r=new o.Scene,s=new o.OrthographicCamera(-1,1,1,-1,0,1),e=new o.WebGLRenderer({canvas:u,antialias:!0,alpha:!0}),t={uTime:{value:0},uResolution:{value:new o.Vector2(1,1)},uPointer:{value:new o.Vector2(.5,.5)},uColors:{value:[new o.Color("#010157"),new o.Color("#2323d9"),new o.Color("#51e334"),new o.Color("#a0d8f1")]}},n=new o.ShaderMaterial({uniforms:t,vertexShader:`
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uPointer;
      uniform vec3 uColors[4];
      varying vec2 vUv;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);

        return mix(
          mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
          mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
          u.y
        );
      }

      mat2 rotate2d(float angle) {
        float s = sin(angle);
        float c = cos(angle);
        return mat2(c, -s, s, c);
      }

      void main() {
        vec2 p = vUv * 2.0 - 1.0;
        p.x *= uResolution.x / uResolution.y;

        vec2 pointer = uPointer * 2.0 - 1.0;
        pointer.x *= uResolution.x / uResolution.y;

        float t = uTime * 0.18;
        vec2 q = p * rotate2d(0.45 + sin(t * 0.7) * 0.2);
        q += pointer * 0.14;

        float n1 = noise(q * 1.1 + vec2(t * 1.7, -t * 1.2));
        float n2 = noise(q * 2.0 - vec2(t * 0.8, t * 1.5));
        float n3 = noise((q + n1 * 0.55) * 3.3 + vec2(-t * 1.4, t * 0.9));

        float bendA = sin(q.y * 4.5 + n1 * 5.0 + t * 6.0);
        float bendB = sin(q.x * 3.4 - n2 * 4.3 - t * 4.4);
        float bendC = sin((q.x + q.y) * 2.7 + n3 * 5.2 + t * 3.6);

        float mixA = smoothstep(-1.0, 1.0, bendA);
        float mixB = smoothstep(-1.0, 1.0, bendB);
        float mixC = smoothstep(-1.0, 1.0, bendC);

        vec3 color = mix(uColors[0], uColors[1], mixA);
        color = mix(color, uColors[2], mixB * 0.78);
        color = mix(color, uColors[3], mixC * 0.62);

        float vignette = smoothstep(1.8, 0.18, length(p));
        color *= 0.5 + vignette * 0.95;

        gl_FragColor = vec4(color, 1.0);
      }
    `}),f=new o.Mesh(new o.PlaneGeometry(2,2),n);r.add(f);function c(){const i=window.innerWidth,l=window.innerHeight,h=Math.min(window.devicePixelRatio||1,2);e.setPixelRatio(h),e.setSize(i,l,!1),t.uResolution.value.set(i,l)}function m(i){t.uPointer.value.set(i.clientX/window.innerWidth,1-i.clientY/window.innerHeight)}c(),window.addEventListener("resize",c),window.addEventListener("pointermove",m,{passive:!0});const v=new o.Clock;function a(){t.uTime.value=v.getElapsedTime(),e.render(r,s),!p.matches&&window.requestAnimationFrame(a)}a()}w();
