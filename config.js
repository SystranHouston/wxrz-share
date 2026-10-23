// ============================================================
//  PRODUCT VIEWER CONFIG — Pilot Control Valve (Mooney regulator)
//  Swap this file out to use a different model.
//
//  Versioning: wxrz (WebXR-for-zSpace) restarts numbering at
//  v0.1.0 (2026-07-11, first verified stereo on hardware).
//  Entries labelled v1.0aXX below are the inherited pre-XR
//  desktop viewer this app was built from.
// ============================================================

window.VIEWER_CONFIG = {

  // ----------------------------------------------------------
  // Branding
  // ----------------------------------------------------------
  title:       "Pilot Control Valve",
  subtitle:    "Interactive 3D Viewer",
  // Valve open/close animation duration (seconds). On-hardware history:
  // 0.7 jarring, 1.5 still too fast. ?animsecs= overrides for tuning.
  valveAnimSeconds: 2.5,
  version:     "v1.1.0",
  // Branding for the in-XR ABOUT panel (white-on-transparent for dark glass).
  brand: {
    logoWhite: "systranLogoWhite.png",
    line:      "SYSTRAN · Custom Learning Solutions",
  },
  // NOTE: still the gate-valve Wistia clip — swap when a pilot-valve video exists.
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
        "The '3D NOT AVAILABLE' warning and the RE-ENTER notice now name the usual culprit — Microsoft Teams holding the 3D tracking camera — with the quit-and-relaunch fix spelled out for trainees",
        "Frozen-tracking detector: a session whose head tracking never moves surfaces the Teams hint on exit instead of ending in a silent flat view",
      ],
    },
    {
      version: "v1.0.1",
      date: "2026-07-29",
      items: [
        "All XR controls consolidated into one capsule top-right — reset (↺), orbit (drawn planet-and-ring icon), about (i), close (✕) — with bigger, brighter icons; top bar slimmed to title + progress for long equipment names",
        "Stylus tracking overhauled: pose-flip filtering now covers orientation, rejects the phantom pose by identity, arbitrates onto the moving pose after Alt-Tab, and can never freeze the ray for more than a moment — launch freak-out and the post-Alt-Tab dead stylus are gone",
        "RE-ENTER 3D is one click: a session that dies during the 3D system's spin-up is retried automatically",
        "ABOUT card simplified to logo + version and floats toward the viewer",
      ],
    },
    {
      version: "v1.0.0",
      date: "2026-07-29",
      items: [
        "MVP release — all launch gates verified on zSpace hardware: stereo look pass, stylus interaction hardened (pose-flip filtering for grabs AND the beam, snap-back fixed, RESET snapshot), keyboard-free trainee flow, version + ABOUT (Systran) in the XR view",
        "Stylus side buttons mapped by hardware color: blue explodes, orange isolates (baked gamepad indices, press-order learning only as fallback)",
        "One-pill interaction legend at the bottom of the XR view; part labels bridge to their component with a full leader line; HUD at true zero parallax",
        "Headset guard: a VR headset gets a clear 'designed for zSpace displays' notice instead of a broken scene (?zspace=1 launch tag overrides)",
      ],
    },
    {
      version: "v0.4.2",
      date: "2026-07-28",
      items: [
        "Multi-model support: ?model=NAME loads config.NAME.js in place of this file (the MVP model-select mechanism) — the original gate valve is back as ?model=gatevalve; a wrong name falls back to the default model",
        "EXIT 3D button in the top corner of the 2D page while a session runs — after Alt-Tab back to the browser it ends the session cleanly (safe: only closing/reloading the tab crashes the zSpace XR service, a clean in-page exit does not)",
      ],
    },
    {
      version: "v0.4.1",
      date: "2026-07-21",
      items: [
        "Model rests fully ASSEMBLED and closed: frame 0 of the explode animation is baked at load (the FBX's default pose is the exploded layout), and the front body shell's hinge-open rotation track — which three.js's FBX loader mangles into a dead 1-key track — is rebuilt from the raw curve data read out of the FBX binary, so the body closes at rest and swings open at the end of the explode exactly as authored",
        "Textures assigned by the FBX's authored material name (pilotControlValve = cast-iron body/steel flanges/spring case, pilotParts = bronze regulator internals) instead of a mesh-name list that sent the body to the bronze set; body renders matte cast iron with the embossed MOONEY text (roughness 1.0, exposure 0.92, envIntensity 0.55)",
        "Inlet/outlet flow ports render as translucent green; reference grid off by default; launch-screen thumbnail ~40% larger; look tunable live via ?exposure= ?envint= ?rough= ?metal= ?env=",
      ],
    },
    {
      version: "v0.4.0",
      date: "2026-07-21",
      items: [
        "Model swapped from the gate valve to the Mooney pilot control valve (pilot-operated pressure regulator) — new FBX, two PBR texture sets (pilotControlValve + pilotParts), and full content rebuild",
        "Parts, definitions, guided tour, and Q&A rewritten for the regulator: body, inlet/outlet, diaphragm, throttle plate, spacer, main spring, spring case, regulator, filter, plus the body seal and o-ring seals",
        "Cross-section button now makes the front body shell (_bodyFront) transparent to reveal the diaphragm, spring, and internal flow path; flange bolts and front shell grouped under the Body part",
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
    url:       "pilotControlValve.fbx",
    // Starting orientation — tune on hardware with ?xrx/?xry/?xrz if needed.
    rotation:  { x: 0, y: Math.PI, z: 0 },
    // FBX ships one baked AnimStack named "Scene" (the explode/open clip);
    // loader falls back to animations[0] if the name ever changes.
    animation: "Scene",
    // Loader-bug repair (the FBX itself is correct): three's FBXLoader mangles
    // _bodyFront's hinge-rotation curve into a dead 1-key track, so the front
    // shell never closes onto the body. These are the raw keyframes read
    // straight out of the FBX binary (X rotation, degrees): closed at 270°
    // until t≈3.17, then the shell swings open to 112.62° — the clamshell
    // flip at the end of the explode. index.js rebuilds the quaternion track
    // from them at load.
    trackFixes: [
      {
        node:  "_bodyFront",
        eulerOrder: "ZYX",
        times: [0.0333,3.1667,3.2,3.2333,3.2667,3.3,3.3333,3.3667,3.4,3.4333,3.4667,3.5,3.5333,3.5667,3.6,3.6333,3.6667,3.7,3.7333,3.7667,3.8,3.8333],
        xDeg:  [270,270,269.181,266.782,262.833,257.3,250.122,241.248,230.689,218.59,205.285,191.31,177.336,164.031,151.931,141.372,132.498,125.32,119.788,115.838,113.44,112.62],
      },
    ],
  },

  // ----------------------------------------------------------
  // Textures — chosen by the FBX's AUTHORED MATERIAL NAME (`authored`),
  // the reliable source the model already carries per mesh:
  //   pilotControlValve → cast-iron/steel body, flanges, spring case,
  //                       spacer, bolts, pilot tubing (BaseMap = gray body
  //                       + the embossed MOONEY text; MaskMap green body =
  //                       non-metallic, yellow flanges = metallic steel)
  //   pilotParts        → brass/bronze regulator internals, diaphragm,
  //                       seals, main spring, filter
  // (The old code matched by mesh NAME, which mis-sent Body / _bodyFront /
  // tubing to the bronze pilotParts set — that's why the body came out
  // bronze instead of gray. `assignTo` still works as a mesh-name override,
  // but `authored` wins.)
  // ----------------------------------------------------------
  textureSets: [
    {
      // Default / fallback — pilotParts (bronze internals). (The "transp"
      // inlet/outlet ports get the translucent-green material, not a texture.)
      baseMap:   "pilotParts_BaseMap.png",
      normalMap: "pilotParts_Normal.png",
      maskMap:   "pilotParts_MaskMap.png",
      authored:  ["pilotparts"],
      assignTo:  [],
    },
    {
      // pilotControlValve — gray cast-iron body, steel flanges, spring case,
      // spacer, bolts, pilot tubing.
      baseMap:   "pilotControlValve_BaseMap.png",
      normalMap: "pilotControlValve_Normal.png",
      maskMap:   "pilotControlValve_MaskMap.png",
      authored:  ["pilotcontrolvalve"],
      assignTo:  [],
    },
  ],

  // ----------------------------------------------------------
  // Cross-section — the Slice button makes the front body shell
  // (_bodyFront) transparent so the diaphragm, spring, throttle
  // plate and internal flow path become visible. off/on empty:
  // no meshes are hidden/revealed, only the shell fades.
  // ----------------------------------------------------------
  crossSection: {
    off: [],
    on:  [],
    transparentParts: ["_bodyFront"],
    opacity: 0.25,
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
    // Translucent material by AUTHORED material name. The inlet/outlet flow
    // cylinders are authored "transp"; lime green per David (plain green read
    // too green — needed yellow).
    translucent: {
      names:   ["transp"],
      color:   "#9ccc3f",
      opacity: 0.5,
    },
    // Per-mesh color tints (multiply the base map). The regulator's bronze
    // read too red — pull red/blue down a touch so it leans brass.
    tints: [
      // Stronger anti-red pull (David: still too red at #f2ffcc) — cuts red
      // and blue against green so the bronze leans brass/gold.
      { match: "regulator", color: "#dcf5ae" },
    ],
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
  // Dialed against the reference render (2026-07-21): the body is
  // MATTE cast-iron gray, not glossy silver — so roughness is maxed
  // (1.0) and exposure/envIntensity pulled down from the old glossy
  // 1.38/0.69. All overridable live: ?exposure= ?envint= ?rough=
  // ?metal= ?env=flat|room|none.
  // ----------------------------------------------------------
  look: {
    toneMapping:  "Neutral",
    exposure:     1.1,     // David 2026-07-21
    envIntensity: 1.0,     // David 2026-07-21 — room env is the main light
    // AO was greying the embossed MOONEY lettering (it sits in an AO crease);
    // lower intensity keeps crevice shading but lets the letters read whiter.
    aoIntensity:  0.45,
    metalness:    0.62,
    roughness:    1.0,
    normalScale:  0.7,
  },

  // ----------------------------------------------------------
  // Parts — single source of truth for labels, descriptions,
  // merge lists, and tour text.
  //   color: swatch used for the XR label dot and definition-card
  //   swatch (palette from the look & feel spec).
  // ----------------------------------------------------------
  //
  //  Mesh-name matching note (index.js normName strips spaces/_/-):
  //  part→mesh matching (findMeshesForPart) is substring, so "body"
  //  also touches "Body Seal" and "_bodyFront", "diaphragm" touches
  //  "Diaphragm O-Ring", and "spacer" touches "Spacer O-Ring".
  //  Selecting the parent therefore also highlights its seal/o-ring —
  //  acceptable (the seal belongs to the part). Click-to-identify uses
  //  longest-match, so each seal/o-ring still resolves to its OWN part.
  parts: [
    {
      id:    "body",
      label: "Body",
      color: "#d4c400",
      // _bodyFront = transparent front shell (see crossSection);
      // _bolts = flange bolts. Both ride with the Body part.
      merge: ["_bodyFront", "_bolts"],
      title: "Body",
      description: "The main pressure-containing housing of the regulator. It connects to the pipeline, supports the internal parts, and provides the passage through which the process fluid flows.",
      tourText: "The body is the main pressure-containing housing. It connects to the pipeline, supports all the internal parts, and provides the passage the process fluid flows through.",
    },
    {
      id:    "inlet",
      label: "Inlet",
      color: "#d48f00",
      title: "Inlet",
      description: "The connection where higher-pressure process fluid enters the regulator. Inlet pressure provides the energy that moves the fluid through the valve.",
      tourText: "The inlet is where higher-pressure fluid enters the regulator. That inlet pressure provides the energy that drives flow through the valve.",
    },
    {
      id:    "outlet",
      label: "Outlet",
      color: "#d48f00",
      title: "Outlet",
      description: "The connection where the controlled, lower-pressure fluid leaves the regulator and continues to downstream equipment or piping.",
      tourText: "The outlet is where the controlled, lower-pressure fluid leaves the regulator and continues downstream to the rest of the system.",
    },
    {
      id:    "diaphragm",
      label: "Diaphragm",
      color: "#2f7fff",
      title: "Diaphragm",
      description: "A flexible, reinforced component that acts as both the regulator's moving actuator and its main flow-control element. Pressure differences cause it to lift away from or press against the throttle plate.",
      tourText: "The diaphragm is the heart of the regulator — a flexible, reinforced membrane that is both the moving actuator and the main flow-control element. Pressure differences lift it off, or press it onto, the throttle plate.",
    },
    {
      id:    "diaphragm-o-ring",
      label: "Diaphragm O-Ring",
      color: "#3dbf7a",
      title: "Diaphragm O-Ring",
      description: "A sealing ring located near the diaphragm assembly. It prevents pressure from leaking between chambers so the diaphragm can respond correctly to pressure changes.",
    },
    {
      id:    "throttle-plate",
      label: "Throttle Plate",
      color: "#2f7fff",
      title: "Throttle Plate",
      description: "The internal plate that supports the diaphragm and provides the sealing surface used to stop flow. As the diaphragm lifts away from the plate, gas passes through the regulator.",
      tourText: "The throttle plate supports the diaphragm and provides the sealing surface that stops flow. As the diaphragm lifts away from the plate, gas is allowed to pass through the regulator.",
    },
    {
      id:    "spacer",
      label: "Spacer",
      color: "#9aa0a6",
      title: "Spacer",
      description: "The internal section positioned between the throttle plate and the diaphragm. It creates the space and flow passage through which gas moves inside the regulator.",
      tourText: "The spacer sits between the throttle plate and the diaphragm, creating the space and flow passage through which gas moves inside the regulator.",
    },
    {
      id:    "spacer-o-ring",
      label: "Spacer O-Ring",
      color: "#3dbf7a",
      title: "Spacer O-Ring",
      description: "A flexible sealing ring installed around the spacer. It prevents gas from leaking between the spacer and the adjoining regulator parts.",
    },
    {
      id:    "main-spring",
      label: "Main Spring",
      color: "#2f7fff",
      title: "Main Spring",
      description: "The spring that applies closing force to the diaphragm. It helps the regulator respond quickly, remain stable, and close securely when flow is not required.",
      tourText: "The main spring applies the closing force to the diaphragm. It helps the regulator respond quickly, stay stable, and close securely when no flow is required.",
    },
    {
      id:    "spring-case",
      label: "Spring Case",
      color: "#d4c400",
      title: "Spring Case",
      description: "The upper housing that contains the main spring and forms the pressure chamber above the diaphragm. Pilot loading pressure enters this chamber to help control the regulator's opening and closing.",
      tourText: "The spring case is the upper housing. It holds the main spring and forms the pressure chamber above the diaphragm; pilot loading pressure enters here to help control the regulator's opening and closing.",
    },
    {
      id:    "regulator",
      label: "Regulator",
      color: "#d4c400",
      title: "Regulator",
      description: "An automatic pressure-control device that reduces or maintains fluid pressure at a selected level. It adjusts its opening as pressure and flow demand change.",
      tourText: "The regulator is the automatic pressure-control device. It reduces or maintains fluid pressure at a set level, adjusting how far it opens as pressure and flow demand change.",
    },
    {
      id:    "filter",
      label: "Filter",
      color: "#9aa0a6",
      title: "Filter",
      description: "A small device in the pilot control system that removes dirt, rust, and other particles from the control gas. It protects the pilot valve and small control passages from blockage or damage.",
      tourText: "The filter removes dirt, rust, and particles from the control gas, protecting the pilot valve and the narrow control passages from blockage or damage.",
    },
    {
      id:    "body-seal",
      label: "Body Seal",
      color: "#3dbf7a",
      title: "Body Seal",
      description: "The gasket or sealing element placed between the regulator body and another major section. It keeps the process fluid contained and prevents external leakage.",
    },
  ],

  // ----------------------------------------------------------
  // Guided tour — ordered list of part IDs to visit.
  // ----------------------------------------------------------
  tourSteps: [
    {
      partId: null,
      title:  "Pilot Control Valve Overview",
      text:   "Welcome to the interactive Pilot Control Valve viewer. This is a pilot-operated pressure regulator: a pilot control valve senses downstream pressure and adjusts the loading pressure above the main diaphragm, which opens or closes the regulator to hold the outlet pressure steady. Use the controls to explore each component.",
    },
    { partId: "body" },
    { partId: "inlet" },
    { partId: "outlet" },
    { partId: "diaphragm" },
    { partId: "throttle-plate" },
    { partId: "spacer" },
    { partId: "main-spring" },
    { partId: "spring-case" },
    { partId: "regulator" },
    { partId: "filter" },
  ],

  // ----------------------------------------------------------
  // Q&A keyword pairs
  // ----------------------------------------------------------
  qa: [
    {
      keywords: ["how", "work", "operate", "regulate", "control"],
      answer: "The regulator holds a steady outlet pressure. A pilot control valve senses downstream pressure and adjusts the loading pressure in the spring case above the main diaphragm. When outlet pressure drops, the pilot loads the diaphragm to open the regulator; when it rises, the diaphragm moves toward the throttle plate to close it.",
    },
    {
      keywords: ["pilot", "loading", "sense", "downstream"],
      answer: "The pilot control valve is a small pressure-sensing valve that controls the loading pressure above the main diaphragm. It opens or closes in response to downstream pressure changes, which in turn causes the main regulator to adjust its flow.",
    },
    {
      keywords: ["diaphragm", "actuator", "membrane"],
      answer: "The diaphragm is both the moving actuator and the main flow-control element. Pressure differences between the spring case above it and the flow passage below it lift it away from or press it against the throttle plate, opening or closing the regulator.",
    },
    {
      keywords: ["spring", "close", "closing", "force"],
      answer: "The main spring, housed in the spring case, applies closing force to the diaphragm. It helps the regulator respond quickly, stay stable, and close securely when no flow is required.",
    },
    {
      keywords: ["filter", "dirt", "clean", "particle", "protect"],
      answer: "The filter removes dirt, rust, and other particles from the control gas before it reaches the pilot valve, protecting the pilot and the narrow control passages from blockage or damage.",
    },
    {
      keywords: ["leak", "seal", "gasket", "o-ring", "oring"],
      answer: "Sealing is handled by the body seal between major sections and the o-rings around the diaphragm and spacer. The body seal prevents external leakage; the o-rings keep pressure from leaking between internal chambers so the diaphragm responds correctly.",
    },
    {
      keywords: ["inlet", "outlet", "flow", "direction", "pressure"],
      answer: "Higher-pressure fluid enters at the inlet and provides the energy that moves it through the valve; controlled, lower-pressure fluid leaves at the outlet toward downstream equipment. The regulator's job is to reduce and hold that outlet pressure at the set level.",
    },
    {
      keywords: ["material", "made of", "metal", "steel"],
      answer: "The body, spring case, and internal metal parts are typically cast or machined steel sized for the line pressure. The diaphragm is a flexible, reinforced elastomer, and the seals and o-rings are elastomeric sealing materials chosen for the service fluid.",
    },
  ],

};