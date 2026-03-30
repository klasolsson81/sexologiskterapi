# Sexologiskterapi.com

Din nya hemsida! Byggd med ren HTML och CSS — inga ramverk eller komplicerade verktyg.

**Förhandsvisning:** [sexologiskterapi.netlify.app](https://sexologiskterapi.netlify.app)

---

## Så här lägger du in sidan på Simply.com

### Steg 1: Ladda ner filerna

1. Klicka på den gröna knappen **"<> Code"** högst upp på denna sida
2. Välj **"Download ZIP"**
3. Packa upp ZIP-filen på din dator

### Steg 2: Ladda upp till Simply

1. Logga in på [Simply.com](https://www.simply.com) → gå till din webbplats
2. Öppna **Filhanteraren**
3. Ta bort (eller byt namn på) den befintliga `index.html` om det finns en
4. Ladda upp följande filer och mappar:
   - `index.html` — själva hemsidan
   - `integritetspolicy.html` — integritetspolicy-sidan
   - `images/` — hela mappen med bilder
   - `robots.txt`
   - `sitemap.xml`

> **OBS:** Du behöver INTE ladda upp `netlify.toml`, `package.json`, `package-lock.json`, `node_modules/`, `screenshots/`, eller `screenshot.mjs` — de behövs bara för utveckling.

### Steg 3: Kontaktformuläret

Kontaktformuläret på sidan är just nu kopplat till Netlify Forms, vilket inte fungerar på Simply. Du har två alternativ:

**Alternativ A — Formspree (gratis, rekommenderas):**
1. Skapa ett gratis konto på [formspree.io](https://formspree.io)
2. Skapa ett nytt formulär och kopiera ditt formulär-ID
3. Öppna `index.html` i en textredigerare (t.ex. Notepad)
4. Sök efter `netlify` i filen och byt ut formulärets action-rad till:
   ```html
   <form action="https://formspree.io/f/DITT_ID" method="POST">
   ```
5. Ta bort attributet `data-netlify="true"` från samma form-tagg

**Alternativ B — Enkel mailto-länk:**
Byt ut hela formuläret mot en e-postlänk. Då öppnas besökarens e-postprogram istället.

---

## Om du vill ändra något

All text, styling och kod finns i en enda fil: `index.html`. Öppna den i valfri textredigerare (Notepad fungerar) och sök efter den text du vill ändra med `Ctrl+H`.

### Bilder

Dina bilder ligger i `images/`-mappen. Om du vill byta en bild, lägg in den nya med samma filnamn så slipper du ändra i koden.

| Fil | Var den syns |
|---|---|
| `portrait.jpeg` | Din profilbild |
| `nature.jpg` | Bakgrundsbild överst |
| `plant.png` | Dekorationsbild |
| `therapy-room.jpg` | Bakgrundsbild |
| `kolteckningar.jpeg` | Dekorationsbild |

---

## SEO (sökmotoroptimering)

Sidan är byggd med SEO i åtanke:
- Meta-taggar för Google och sociala medier
- Strukturerad data (schema.org) så Google förstår att det är en mottagning
- Sitemap och robots.txt
- Snabba laddtider

Det betyder att Google lättare hittar och visar din sida i sökresultaten.

---

## Behöver du hjälp?

Kontakta [klasolsson81](https://github.com/klasolsson81) här på GitHub om något krånglar!
