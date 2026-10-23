// ============================================================
//  PRODUCT VIEWER CONFIG — Gate Valve  (?model=gatevalve)
//
//  Alternate-model config for the ?model= select in index.html:
//  config.<name>.js loads in place of the default config.js.
//  Content is the gate-valve config as shipped on main (v0.3.4,
//  the model this app was built with) — the second model that
//  proves the multi-model content pattern (PLAN Phase 4).
//
//  Schema note: written pre-look-rework, so it has no env/
//  lightScale/bgIntensity in `look` and no `authored` keys in
//  textureSets — index.js defaults cover all of those (env=room);
//  set 0 with empty assignTo is the fallback texture set.
// ============================================================

window.VIEWER_CONFIG = {

  // ----------------------------------------------------------
  // Branding
  // ----------------------------------------------------------
  title:       "Gate Valve",
  subtitle:    "Interactive 3D Viewer",
  // Valve open/close animation duration (seconds). On-hardware history:
  // 0.7 jarring, 1.5 still too fast. ?animsecs= overrides for tuning.
  valveAnimSeconds: 2.5,
  version:     "v1.1.0",
  videoUrl:    "https://fast.wistia.net/embed/iframe/1fzad2me8l?web_component=true&seo=false&autoPlay=1",

  // ----------------------------------------------------------
  // Changelog (newest first) — rendered dynamically in sidebar
  // ----------------------------------------------------------
  changelog: [
    {
      version: "v1.1.0",
      date: "2026-10-23",
      items: [
        "Stylus loss recovered in place: when the tracker drops the stylus the 3D system hands the viewer a frozen copy of the old pose interleaved with the real one — the viewer now tells the two apart every frame and follows the hand, so putting the stylus down and picking it up no longer freezes the ray or throws the model",
        "The automatic 3D restart on stylus loss is gone (it was restarting into a 3D system that kept killing new sessions); the centre button on the re-sync card restarts on request, and a restart that dies young is retried for up to ten seconds",
        "Re-sync card explains what is happening and what to do while tracking recovers",
        "3D controls can no longer vanish at the screen edges when the laptop lid angle changes",
        "Placing a part with a slow, deliberate click keeps it where you put it instead of snapping back",
        "Developer: ?stylusdbg=1 shows a live stylus-tracking panel inside 3D; ?dil=0 disables the new filter; ?autobounce=1 restores the old automatic restart",
      ],
    },
    {
      version: "v1.0.2",
      date: "2026-09-18",
      items: [
        "Gate valve now ships as its own LMS package (wxrz-lms-vX.Y.Z-gatevalve.zip) with this config promoted to the default — no ?model= parameter needed inside Rise",
        "Rides the v1.0.x app core: consolidated XR control capsule, hardened stylus tracking, one-click RE-ENTER 3D, non-XR warning gate, and the Teams-aware failure messages ('3D NOT AVAILABLE' and RE-ENTER name Microsoft Teams holding the tracking camera, with the trainee-level fix)",
        "Gate-valve content itself (parts, tour, materials, Q&A) is unchanged since v0.3.4 — this entry marks the app-core catch-up, not a content change",
      ],
    },
    {
      version: "v0.3.4",
      date: "2026-07-13",
      items: [
        "Isolate is now a strict toggle: press once to isolate the pointed-at part, press again to bring everything back — always, no matter where the beam points. Previously the faint ghosted parts could still catch the beam, so the un-isolate press re-isolated a background part with broken (double-ghosted) materials",
        "Only one part can ever be isolated at a time (applies to the stylus button, I key, in-XR mouse double-click, and the desktop Isolate button)",
      ],
    },
    {
      version: "v0.3.3",
      date: "2026-07-13",
      items: [
        "Valve open/close animation slowed to 2.5s (1.5s still read too fast on hardware); duration now set by valveAnimSeconds in config.js, ?animsecs= overrides for tuning",
        "Stylus side buttons no longer swap roles mid-session: first button pressed = explode, second = isolate, latched and remembered across sessions (localStorage wxrz-stylus-btns; clear to relearn, ?explodebtn/?isolatebtn to force)",
      ],
    },
    {
      version: "v0.3.2",
      date: "2026-07-13",
      items: [
        "Fullscreen toggle hidden while an XR session is presenting (desktop chrome must not float over the XR view); restored on session end",
      ],
    },
    {
      version: "v0.3.1",
      date: "2026-07-13",
      items: [
        "Renderer requests the discrete GPU (powerPreference: high-performance) — on hybrid Intel/NVIDIA Inspires, WebGL landing on the iGPU while the zSpace compositor weaves on the dGPU shows as a black XR session (3D LED on, no image)",
        "Stereo probes (stereotest.html, readiness script -Probe) request the same GPU as the app and log which adapter they got",
      ],
    },
    {
      version: "v0.3.0",
      date: "2026-07-11",
      items: [
        "XR interface rebuilt to the glass-HUD look & feel spec: one pixel density, one corner radius, one type ramp, semi-transparent panels — top bar (title, Explored N/8, Orbit, Reset), hover-revealed part labels with color dots, definition card docked right, bottom hint bar, EXIT VR top-right",
        "Tap a part (stylus or mouse) to read its definition; hold to grab; labels are clickable too",
        "Stylus side buttons: explode + isolate (?explodebtn/?isolatebtn override); E/I keys as backup",
        "Stylus beam is 50% translucent with a ring reticle at the aim point; color still signals state",
        "Mouse works inside XR as a stylus backup: point, tap, drag to carry, wheel for depth, double-click isolates",
        "Auto-orbit toggle spins the model at 0.35 rad/s",
        "Parts brighten when the beam hovers them; explode animation eased (1.5s)",
        "XR-capable machines now always open on the launch screen — flat model thumbnail + START 3D EXPERIENCE, no desktop viewer chrome (?full=1 restores the full interface for development)",
        "All hit areas padded to the 2-degree vendor minimum",
      ],
    },
    {
      version: "v0.2.3",
      date: "2026-07-11",
      items: [
        "LMS pipeline proven: runs inside RISE/TalentLMS via Mighty Maestro, hosted in the SCORM package itself",
        "OPEN 3D VIEWER escape hatch (iframes can't get XR permission) opens a full-screen launch screen in its own tab: START 3D EXPERIENCE, RE-ENTER 3D after exit, Back to course closes the tab",
        "Browser VR-permission prompt handled gracefully (first run per machine only)",
        "Builds are LMS-ready by default: relative paths, config.js bundled, auto-embed when iframed",
      ],
    },
    {
      version: "v0.2.0",
      date: "2026-07-11",
      items: [
        "First in-XR user interface: left-edge control column at zero parallax (EXIT VR, OPEN/CLOSE, live part-name readout, part description panel), styled to match the desktop viewer",
        "Stylus side buttons follow the zSpace standard mapping: one isolates the pointed-at part, the other opens its description; center button grabs and clicks UI",
        "Stylus beam is now a visible 1.5 mm cylinder (THREE.Line renders 1px on Windows and was invisible)",
        "Phantom static controller filtered out — it was parking a stray beam in the scene and wedging the part-name readout",
        "Isolate works in XR (ghosts other parts without moving the camera)",
      ],
    },
    {
      version: "v0.1.0",
      date: "2026-07-11",
      items: [
        "Version numbering restarted for wxrz — the WebXR-for-zSpace app (previous v1.0aXX entries are the inherited pre-XR desktop viewer)",
        "First verified glasses-free stereo 3D in Chrome on zSpace Inspire 2 (head tracking + 6DOF stylus)",
        "Model depth/size tuned on hardware for ghosting and the Inspire 2's 34x19 cm screen (xrz=-0.15, xrsize=0.21)",
        "EXIT VR panel pinned at zero parallax inside the physical screen; stylus beam simplified (cone tip removed)",
        "Valve animation on one stylus side button (auto-latched); grab releases safely on stylus tracking loss",
        "Desktop layout fully restored after XR sessions; ENTER VR auto-retries the first-click-after-boot failure",
        "?embed=1 minimal-chrome mode for RISE e-learning packaging",
      ],
    },
    {
      version: "v1.0a14",
      date: "Legacy viewer",
      items: [
        "Cross-section / explode cut faces (slice, slice_F) now render as clean, even gray that tracks their body halves and stays visible in both views — fixes the garbled-yellow, black, and hollow-half cut-face issues",
        "Cut-face shading uses low metalness + a polygon offset so flat faces read clearly and don't go black or z-fight",
        "Clicking a component during a guided tour now exits the tour and opens that component's definition",
      ],
    },
    {
      version: "v1.0a13",
      date: "Previous",
      items: [
        "Material assignment now honors the FBX's per-mesh materials instead of force-painting every mesh with the body texture",
        "New config-driven 'materials.flat' block (names, color, metalness, roughness, opacity) — meshes on a flat material render solid instead of textured",
      ],
    },
    {
      version: "v1.0a12",
      date: "Previous",
      items: [
        "Seat Ring added as a selectable component and guided-tour step",
        "Components list alphabetized (display order only — tour and data order unchanged)",
        "HDRP MaskMap now correctly channel-split: metalness = R, roughness = 1 − smoothness (A), AO = G; UV copied to uv1 so AO samples correctly",
        "Tone mapping switched from ACES to Neutral for truer color saturation",
        "New config-driven 'look' block: tone mapping, exposure, env intensity, AO, metalness, roughness, normal scale",
        "Narration (TTS) is now a toggle — clicking the speaker again stops playback; switching panels restarts it",
        "Narration stops automatically when the definition panel or tour closes, when the component changes, and on tour Prev/Next",
        "Opening the guided tour now closes any open definition window (and suppresses it for the duration of the tour)",
      ],
    },
    {
      version: "v1.0a11",
      date: "Previous",
      items: [
        "Version bumped to v1.0a11",
        "Copy Camera button added to debug panel — captures position, target, fov, near/far, and distance limits as a ready-to-paste config block",
        "Camera system is now config-driven with auto-fit fallback from model bounding box",
        "Viewer is fully config-driven — title, subtitle, version, video, cross-section, changelog all from config.js",
        "Cross-section transparency targets driven by config (transparentParts array)",
        "Material defaults (roughness, metalness) driven by config",
      ],
    },
    {
      version: "v1.0a10",
      date: "Previous",
      items: [
        "Part info and tour content merged into single config data source",
        "Gate Valve Overview intro only shown during guided tour",
        "Cross-section: only Slice / Slice_F meshes affected by toggle",
        "Body_F goes transparent when cross-section is active",
        "THREE.Timer replaces deprecated THREE.Clock",
        "PCFShadowMap replaces deprecated PCFSoftShadowMap",
      ],
    },
    {
      version: "v1.0a9",
      date: "Previous",
      items: [
        "Debug log panel with color-coded entries",
        "Mesh names and part identification logged for diagnostics",
        "Clear button and auto-scroll with 500-entry cap",
      ],
    },
    {
      version: "v1.0a8",
      items: [
        "Fullscreen toggle button",
        "Pinch-to-zoom and touch-friendly controls",
        "Wistia video embed with autoplay",
      ],
    },
    {
      version: "v1.0a7",
      items: [
        "True turntable auto-rotate",
        "All panels now draggable",
        "Tour fully explodes model on start",
      ],
    },
    {
      version: "v1.0a6",
      items: [
        "Auto-Rotate toggle",
        "Grid/None ground toggle simplified",
        "Q&A panel hidden by default",
      ],
    },
    {
      version: "v1.0a5",
      items: [
        "Isolate mode with ghost fade",
        "Smooth camera fly-in to isolated part",
        "Procedural studio env map and rim light",
      ],
    },
    {
      version: "v1.0a4",
      items: [
        "Q&A toggle and TTS on info/tour panels",
      ],
    },
    {
      version: "v1.0a3",
      items: [
        "10-step guided tour mode with auto-play",
      ],
    },
    {
      version: "v1.0a2",
      items: [
        "Version badge, changelog, zoom slider, floor toggle",
      ],
    },
    {
      version: "v1.0a1",
      date: "Initial Alpha",
      items: [
        "FBX model loading with PBR textures",
        "Explode/assemble, cross-section, click-to-inspect, hover tooltips, Q&A",
      ],
    },
  ],

  // ----------------------------------------------------------
  // Camera (optional overrides — omit to auto-fit from model)
  //   position: [x, y, z]  — initial camera position
  //   target:   [x, y, z]  — orbit target (look-at point)
  //   near / far           — clipping planes
  //   fov                  — field of view in degrees
  //   minDistance / maxDistance — orbit zoom limits
  // ----------------------------------------------------------
  // camera: {
  //   position: [3, 2.5, 3],
  //   target:   [0, 0.8, 0],
  //   fov:      45,
  //   near:     0.1,
  //   far:      500,
  //   minDistance: 0.5,
  //   maxDistance: 10,
  // },

  // ----------------------------------------------------------
  // Model
  // ----------------------------------------------------------
  model: {
    url:       "gateValve.fbx",
    rotation:  { x: 0, y: Math.PI, z: 0 },
    animation: "Take_001",
  },

  // ----------------------------------------------------------
  // Textures
  // ----------------------------------------------------------
  textureSets: [
    {
      baseMap:   "gateValve_BaseMap.png",
      normalMap: "gateValve_Normal.png",
      maskMap:   "gateValve_MaskMap.png",
      assignTo:  [],
    },
    {
      // Was gateValve_*-2.png — those files were byte-identical duplicates
      // of the primary set, removed when the textures were optimized.
      baseMap:   "gateValve_BaseMap.png",
      normalMap: "gateValve_Normal.png",
      maskMap:   "gateValve_MaskMap.png",
      assignTo:  ["handwheel", "gland", "stem"],
    },
  ],

  // ----------------------------------------------------------
  // Cross-section meshes (toggled by the Slice button)
  // "off" meshes shown normally; "on" meshes shown when sliced
  // ----------------------------------------------------------
  crossSection: {
    off: [],
    on:  [],
    transparentParts: ["body_f"],
    opacity: 0.3,
  },

  // ----------------------------------------------------------
  // Materials — meshes keep the material the model authored.
  // Any mesh whose FBX material name is listed in `flat.names`
  // (plus the cross-section cut caps) renders as a solid color
  // instead of the body texture. Everything else gets the
  // textured PBR set(s) above.
  //   Low metalness keeps a flat cut face an even, readable gray
  //   (a fully metallic flat face mirrors the env and can go black).
  //   opacity 1 = solid cut face; lower it to see through the cut plane.
  // ----------------------------------------------------------
  materials: {
    flat: {
      names:     ["slice"],
      color:     "#9aa0a8",
      metalness: 0.1,
      roughness: 0.55,
      opacity:   1.0,
    },
  },

  // ----------------------------------------------------------
  // Material defaults for all meshes
  // ----------------------------------------------------------
  materialDefaults: {
    roughness:         0.6,
    metalness:         0.5,
    roughnessTextured: 0.55,
    metalnessTextured: 0.7,
  },

  // ----------------------------------------------------------
  // Look — render/material tuning (applied after the HDRP mask
  // is split into metalness=R, roughness=1-A, ao=G).
  //   toneMapping: "Neutral" | "ACES" | "AgX" | "None"
  // ----------------------------------------------------------
  look: {
    toneMapping:  "Neutral",
    exposure:     1.38,
    envIntensity: 0.69,
    aoIntensity:  0.71,
    metalness:    0.62,
    roughness:    0.78,
    normalScale:  0.7,
  },

  // ----------------------------------------------------------
  // Parts — single source of truth for labels, descriptions,
  // merge lists, and tour text.
  //   color: swatch used for the XR label dot and definition-card
  //   swatch (palette from the look & feel spec).
  // ----------------------------------------------------------
  parts: [
    {
      id:    "body",
      label: "Body",
      color: "#d4c400",
      merge: ["body_f"],
      title: "Body",
      description: "The main pressure-containing shell of the valve. Cast from carbon steel or stainless steel, it houses the gate and provides the end connections (flanged or butt-weld). Must withstand full line pressure and temperature cycling.",
      tourText: "The body is the main pressure-containing shell. Cast from carbon steel, it houses the gate and provides the flanged end connections to the pipeline.",
    },
    {
      id:    "bonnet",
      label: "Bonnet",
      color: "#d4c400",
      title: "Bonnet",
      description: "Bolted cover that encloses the upper part of the body. Provides the pressure boundary around the stem and packing chamber. Removable for internal maintenance without removing the valve from the line.",
      tourText: "The bonnet is bolted to the top of the body and encloses the stem and packing chamber. It can be removed for internal maintenance without taking the valve out of service.",
    },
    {
      id:    "gate",
      label: "Gate",
      color: "#2f7fff",
      title: "Gate (Wedge Disc)",
      description: "The closure element that moves perpendicular to flow to open or shut the valve. A solid wedge design ensures a tight bi-directional seal against the body seats when fully closed.",
      tourText: "The gate is the closure element. It moves perpendicular to flow — fully up to open, fully down to close. The solid wedge design ensures a tight bi-directional seal.",
    },
    {
      id:    "seat",
      label: "Seat Ring",
      color: "#3dbf7a",
      title: "Seat Ring",
      description: "Renewable sealing surfaces set into the body bore. The gate wedges down against the seat rings to form the shutoff seal. Typically hard-faced (e.g., Stellite) and replaceable, since the seats absorb most of the wear and erosion from cycling and any throttling.",
      tourText: "The seat rings are the sealing surfaces in the body bore. The gate wedges down against them to shut off flow. They are hard-faced and renewable, because they take the brunt of the wear during operation.",
    },
    {
      id:    "gland",
      label: "Gland",
      color: "#e23434",
      title: "Gland",
      description: "Compression fitting that retains the packing around the stem. Tightening the gland bolts compresses the packing to prevent leakage along the stem. Can be adjusted in service.",
      tourText: "The gland compresses the packing rings around the stem to prevent leakage to atmosphere. It can be tightened in service if a small stem leak develops.",
    },
    {
      id:    "handwheel",
      label: "Handwheel",
      color: "#d4c400",
      title: "Handwheel",
      description: "Manual actuator used to open and close the valve. Clockwise rotation closes; counter-clockwise opens. Wheel diameter is sized to achieve the required torque without additional tooling.",
      tourText: "The handwheel is the manual actuator. Turn clockwise to close, counter-clockwise to open. The wheel diameter is sized to achieve the required operating torque.",
    },
    {
      id:    "packing",
      label: "Packing",
      color: "#d48f00",
      title: "Stem Packing",
      description: "Deformable sealing rings housed in the stuffing box around the stem. Prevents process fluid from escaping along the stem to atmosphere. Common materials include graphite, PTFE, and braided aramid.",
    },
    {
      id:    "stem",
      label: "Stem",
      color: "#9aa0a6",
      title: "Stem",
      description: "Threaded rod connecting the handwheel to the gate. Converts rotational motion into linear travel. Rising-stem design gives a visual open/closed indicator. Made from stainless steel for corrosion resistance.",
      tourText: "The stem connects the handwheel to the gate. As the handwheel turns, the stem rises or falls, carrying the gate with it. The rising design gives a clear visual indication of valve position.",
    },
  ],

  // ----------------------------------------------------------
  // Guided tour — ordered list of part IDs to visit.
  // ----------------------------------------------------------
  tourSteps: [
    {
      partId: null,
      title:  "Gate Valve Overview",
      text:   "Welcome to the interactive Gate Valve viewer. This is a full-bore, rising-stem gate valve used in industrial pipeline systems. Use the controls to explore each component.",
    },
    { partId: "body" },
    { partId: "bonnet" },
    { partId: "gate" },
    { partId: "seat" },
    { partId: "stem" },
    { partId: "handwheel" },
    { partId: "gland" },
  ],

  // ----------------------------------------------------------
  // Q&A keyword pairs
  // ----------------------------------------------------------
  qa: [
    {
      keywords: ["material", "made of", "metal", "steel"],
      answer: "The body and bonnet are typically cast from carbon steel (ASTM A216 WCB) or stainless steel (ASTM A351 CF8M). Trim parts like the stem use stainless steel for corrosion resistance.",
    },
    {
      keywords: ["pressure", "rating", "class", "psi", "bar"],
      answer: "Gate valves are available in ASME pressure classes from Class 150 (20 bar) up to Class 2500 (420 bar). The class is stamped on the body.",
    },
    {
      keywords: ["temperature", "temp", "hot", "cold"],
      answer: "Carbon steel gate valves typically operate from -29°C to 425°C. Stainless steel versions extend the range to 538°C. Low-temperature grades are available for cryogenic service.",
    },
    {
      keywords: ["how", "work", "operate", "open", "close"],
      answer: "Turning the handwheel rotates the stem, which moves the gate up or down perpendicular to flow. Fully raised = fully open (unobstructed bore); fully lowered = fully closed (gate seats against body).",
    },
    {
      keywords: ["leak", "packing", "gland", "seal"],
      answer: "Minor stem leaks can be stopped by tightening the gland bolts to compress the packing. If leakage persists, the packing should be replaced during the next shutdown.",
    },
    {
      keywords: ["maintenance", "service", "inspect"],
      answer: "Gate valves require periodic inspection of packing, gasket, and seat surfaces. The bolted bonnet design allows internal access without removing the valve from the pipeline.",
    },
    {
      keywords: ["size", "dimension", "bore", "diameter"],
      answer: "This model represents a standard full-bore gate valve. Sizes typically range from DN15 (½\") to DN600 (24\") with matching pipeline bore dimensions.",
    },
  ],

};