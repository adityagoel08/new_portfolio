import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

const textureLoader = new THREE.TextureLoader();
const imageUrls = [

  "/images/icons/tf2.png",
  "/images/icons/amplitude2.png",
  "/images/icons/aws2.png",
  "/images/icons/canva2.png",
  "/images/icons/chroma2.png",
  "/images/icons/claude2.png",
  "/images/icons/fastapi2.png",
  "/images/icons/figma2.png",
  "/images/icons/gcp2.png",
  "/images/icons/gemini2.png",
  "/images/icons/github2.png",
  "/images/icons/huggingface2.png",
  "/images/icons/jira2.png",
  "/images/icons/langchain2.png",
  "/images/icons/linear2.png",
  "/images/icons/llama2.png",
  "/images/icons/mistral2.png",
  "/images/icons/mixpanel2.png",
  "/images/icons/notion2.png",
  "/images/icons/openai2.png",
  "/images/icons/pbi2.png",
  "/images/icons/pboard2.png",
  "/images/icons/python2.png",
  "/images/icons/sql2.png",
  "/images/icons/streamlit2.png",
  "/images/icons/tableau2.png",

];
const textures = imageUrls.map((url) => textureLoader.load(url));

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const scales = [0.7, 1, 0.8, 1, 1];

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const threshold = document
        .getElementById("work")!
        .getBoundingClientRect().top;
      setIsActive(scrollY > threshold);
    };
    document.querySelectorAll(".header a").forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", () => {
        const interval = setInterval(() => {
          handleScroll();
        }, 10);
        setTimeout(() => {
          clearInterval(interval);
        }, 1000);
      });
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: 0.3,
          metalness: 0.5,
          roughness: 1,
          clearcoat: 0.1,
        })
    );
  }, []);

  return (
    <div className="techstack" id="techstack">
      <h2>My TechStack</h2>

      <div className="tech-canvas-container">
        <Canvas
          shadows
          gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
          camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
          onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
          className="tech-canvas"
        >
          <ambientLight intensity={1} />
          <spotLight
            position={[20, 20, 25]}
            penumbra={1}
            angle={0.2}
            color="white"
            castShadow
            shadow-mapSize={[512, 512]}
          />
          <directionalLight position={[0, 5, -4]} intensity={2} />
          <Physics gravity={[0, 0, 0]}>
            <Pointer isActive={isActive} />
            {materials.map((material, i) => (
              <SphereGeo
                key={i}
                scale={scales[i % scales.length]}
                material={material}
                isActive={isActive}
              />
            ))}
          </Physics>
          <Environment
            files="/models/char_enviorment.hdr"
            environmentIntensity={0.5}
            environmentRotation={[0, 4, 2]}
          />
          <EffectComposer enableNormalPass={false}>
            <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
          </EffectComposer>
        </Canvas>
      </div>

      <div className="tech-details">
        <div className="tech-category">
          <h3>Intelligence & Models</h3>
          <p>
            Building context-aware applications using frontier LLMs and vector orchestration.
          </p>
          <div className="tech-tags-container">
            <div className="tech-tag-item">OpenAI (o1/GPT-4o)</div>
            <div className="tech-tag-item">Anthropic Claude</div>
            <div className="tech-tag-item">Google Gemini</div>
            <div className="tech-tag-item">Llama-3</div>
            <div className="tech-tag-item">Mistral AI</div>
            <div className="tech-tag-item">LangChain / LlamaIndex</div>
            <div className="tech-tag-item">ChromaDB</div>
          </div>
        </div>

        <div className="tech-category">
          <h3>Data & Product Insights</h3>
          <p>
            Closing the feedback loop with data-driven iteration and visual storytelling.
          </p>
          <div className="tech-tags-container">
            <div className="tech-tag-item">Python / SQL</div>
            <div className="tech-tag-item">Tableau / Power BI</div>
            <div className="tech-tag-item">Amplitude / Mixpanel</div>
            <div className="tech-tag-item">Streamlit</div>
            <div className="tech-tag-item">TensorFlow</div>
            <div className="tech-tag-item">Hugging Face</div>
          </div>
        </div>

        <div className="tech-category">
          <h3>Product Engineering</h3>
          <p>
            Driving the 0-to-1 lifecycle with rapid prototyping and scalable infrastructure.
          </p>
          <div className="tech-tags-container">
            <div className="tech-tag-item">FastAPI</div>
            <div className="tech-tag-item">AWS / GCP</div>
            <div className="tech-tag-item">Linear / Jira</div>
            <div className="tech-tag-item">Productboard</div>
            <div className="tech-tag-item">GitHub</div>
            <div className="tech-tag-item">Figma / Canva</div>
            <div className="tech-tag-item">Notion</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
