# Site Ideas — projects.title22.org

A running list of future improvements, features, and experiments.
Add freely, cross off when done, revisit when bored.

---

## Projects Page

- [ ] Real thumbnails/screenshots per project (not shared header image)
- [ ] `stack` field in JSON — render as small tags (JavaScript, Canvas, Arduino, etc.)
- [ ] Featured spotlight — first featured project gets a large hero card at top
- [ ] Grid layout (2-col cards) instead of vertical list — better portfolio feel
- [ ] Tag/type filter bar — client-side filter buttons by tag (Simulation, Data Viz, etc.)
- [ ] `in-progress` status badge so WIP builds are visible without looking unfinished
- [ ] "What I'm building now" pinned section — separate from completed projects
- [ ] Project detail pages — `writeup` field in JSON → dedicated writeup or modal
- [ ] GitHub live data — fetch star count / last commit date via GitHub API
- [ ] Estimated play/read time field per project

---

## Tools Page

- [ ] Grouped layout — separate Maintenance tools from Calculators if section grows
- [ ] "Use online" vs "Download / GitHub" distinction in cards
- [ ] Screenshot or diagram thumbnails for each tool
- [ ] Difficulty/audience badge (Field Use, Engineering, General)

---

## Calculator & Tool Ideas — Water Treatment

### Chemical Feed & Dosing
- [ ] **Chlorine dose calculator** — target residual, flow rate → feed rate (mg/L to lbs/day or GPH)
- [ ] **Breakpoint chlorination calculator** — chloramine destruction to free residual
- [ ] **CT disinfection credit calculator** — Giardia/virus log inactivation, contact time × concentration
- [ ] **Chemical solution prep** — dilute stock to target concentration (percent to mg/L, gallons to mix)
- [ ] **Days-on-hand inventory calculator** — current stock ÷ daily usage rate
- [ ] **Coagulant dose estimator** — jar test results → full-scale feed rate
- [ ] **Fluoride dose calculator** — target concentration, flow, stock strength → pump setting
- [ ] **Polymer feed rate calculator** — dry vs. liquid, dilution ratio, flow-paced or time-paced
- [ ] **Sodium hypochlorite degradation estimator** — age + temperature → actual available chlorine

### Water Quality & Chemistry
- [ ] **Langelier Saturation Index (LSI)** — corrosion/scaling potential from pH, temp, hardness, alkalinity, TDS
- [ ] **pH adjustment calculator** — soda ash, lime, or CO₂ dose to hit target pH
- [ ] **Hardness / softening calculator** — lime-soda softening, precipitation targets
- [ ] **Alkalinity / bicarbonate balance** — carbonate system speciation
- [ ] **Blending calculator** — mix two source waters to hit target quality (chloride, hardness, pH, etc.)
- [ ] **Turbidity unit converter** — NTU, FTU, JTU, mg/L context
- [ ] **THM/HAA precursor index** — rough formation potential from TOC and bromide
- [ ] **UV dose calculator** — intensity × exposure time → mJ/cm² log credit

### Flow, Volume & System Hydraulics
- [ ] **Tank volume calculator** — cylinder, rectangle, cone bottom, with fill % display
- [ ] **Flow unit converter** — GPM, MGD, CFS, L/s, m³/hr (the unit shuffle is constant)
- [ ] **Detention time calculator** — tank volume ÷ flow rate → hours/minutes
- [ ] **Filter loading rate** — flow ÷ filter area → GPM/ft²
- [ ] **Backwash rate and volume estimator** — target rate, duration → total volume and waste
- [ ] **Pipe flow velocity** — flow + pipe diameter → ft/s (Hazen-Williams for head loss optional)
- [ ] **Chemical feed pump calibration** — stroke rate, stroke length → GPH, cross-check with catch test

### Regulatory / Compliance
- [ ] **Running Annual Average (RAA) calculator** — paste in quarterly samples, get RAA for MCL comparison
- [ ] **90th percentile calculator** — Lead & Copper Rule — sort samples, find 90th %ile value
- [ ] **MCL exceedance tracker** — enter results, flag any over MCL/action level
- [ ] **Monitoring schedule reminder tool** — sample frequency by system size, source type, contaminant
- [ ] **Operator continuing education tracker** — log CEUs by category toward renewal requirements

---

## Calculator & Tool Ideas — Facility Maintenance

### Mechanical & Pumping
- [ ] **Pump TDH calculator** — suction + discharge head + friction losses → total dynamic head
- [ ] **NPSH available calculator** — flag cavitation risk before it happens
- [ ] **Pump efficiency estimator** — flow, head, motor HP → wire-to-water efficiency
- [ ] **Belt drive calculator** — sheave sizes, RPM ratio, belt speed
- [ ] **Pipe pressure loss (Hazen-Williams)** — flow, pipe diameter, material, length → psi drop
- [ ] **Motor amperage estimator** — HP, voltage, power factor, efficiency → FLA
- [ ] **Lubrication interval calculator** — bearing size, RPM, temperature → regreasing schedule

### HVAC & Building Systems
- [ ] **Cooling tower make-up / blowdown calculator** — cycles of concentration, evaporation rate
- [ ] **Boiler efficiency estimator** — stack temperature, excess air → combustion efficiency
- [ ] **Air handler CFM / velocity calculator** — duct size + velocity → CFM
- [ ] **Refrigerant charge estimator** — superheat / subcooling reference by refrigerant type
- [ ] **Filter change schedule** — MERV rating, occupancy, airflow → replacement interval

### Electrical & Controls
- [ ] **Voltage drop calculator** — wire gauge, length, current → % drop (NEC check)
- [ ] **Conduit fill calculator** — wire count, gauge → conduit size (NEC)
- [ ] **VFD speed / flow relationship** — affinity laws: speed → flow, pressure, power changes
- [ ] **Transformer load calculator** — VA loading, derating for ambient temperature

### Preventive Maintenance
- [ ] **PM interval builder** — enter asset type, generate suggested PM task list with frequencies
- [ ] **Equipment runtime logger** — simple hours-based maintenance trigger calculator
- [ ] **Chemical compatibility quick-check** — two chemicals → safe to store/mix? (basic reference table)
- [ ] **Confined space / LOTO checklist generator** — fill in asset info → print-ready permit sheet
- [ ] **Valve exercise log template** — list of valves, last exercised, next due

### Electrical & Instrumentation
- [ ] **4–20mA signal calculator** — % of range → mA, or mA → engineering units
- [ ] **RTD / thermocouple conversion** — resistance or mV → temperature by type (PT100, Type K, etc.)
- [ ] **PID tuning reference** — proportional band, integral time notes by process type

---

## Research Page

- [ ] Reading time estimate on each article
- [ ] Tag filter by topic (PFAS, AI, Operations, Regulatory, etc.)
- [ ] "Related articles" suggestions at bottom of each research page
- [ ] Progress indicator bar on long reads
- [ ] Print / PDF export button on research pages
- [ ] RSS feed for research section

---

## Fun / Finds Pages

- [ ] Preview screenshots or animated GIFs for games/tools
- [ ] Platform badge (Web, ESP32, Mobile, etc.)
- [ ] "Try it" inline embed or iframe preview option for browser-based projects

---

## Resume Page

- [ ] Print-friendly CSS (`@media print`) — clean single-column layout
- [ ] PDF download link (generated from print CSS)
- [ ] Skills section as visual bar/dot ratings or categorized chips

---

## Site-Wide

### Navigation & UX
- [ ] Mobile hamburger menu — nav doesn't collapse on small screens currently
- [ ] Breadcrumb navigation on sub-pages
- [ ] Active section highlight in nav (already on some pages, audit all)
- [ ] Search bar — client-side search across all JSON content
- [ ] Dark mode toggle

### SEO & Sharing
- [ ] OpenGraph meta tags per page (title, description, image for social previews)
- [ ] JSON-LD structured data (Person, CreativeWork schema)
- [ ] Sitemap.xml
- [ ] Canonical URLs

### Content & Features
- [ ] About/Bio page — longer form than resume intro
- [ ] Changelog / "What's New" page — simple dated list of site updates
- [ ] Contact form (Formspree or similar — no backend needed)
- [ ] Newsletter actually wired up (Buttondown, Mailchimp, or Kit)
- [ ] Tag index pages — all content tagged "PFAS" or "Simulation" in one view

### Analytics & Performance
- [ ] Privacy-friendly analytics (Plausible, Umami, or Fathom)
- [ ] Lazy-load audit — confirm all images use `loading="lazy"`
- [ ] WebP images for all remaining non-optimized assets

---

## Experimental / Fun

- [ ] Terminal-style `/about` easter egg — type commands, get bio output
- [ ] Interactive water treatment process diagram (clickable unit processes)
- [ ] SCADA-style dashboard aesthetic page — operator console feel
- [ ] Water quality calculator tool (chlorine dose, pH adjustment, etc.)
- [ ] Operator certification quiz builder — study tool for exams
- [ ] Animated section transitions or scroll-triggered reveals
- [ ] "Random find" button — sends you to a random item in Finds or Fun

---

## Infrastructure / Deploy

- [ ] Add `content/keith_resume.md` to rsync excludes in `deploy-to-webroot.sh`
  (currently excluded from git via .gitignore but rsync still copies it to webroot)
- [ ] CI/CD — GitHub Action to auto-deploy on push to main
- [ ] Staging environment — deploy to a subdomain before pushing to prod
- [ ] Cache-busting for JS/CSS (query string version param)

---

*Last updated: 2026-02-20 — expanded water/facility calculator ideas*
