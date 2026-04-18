# Portfolio snapshot — commit 538b9a9 (2026-04-14)

This folder is a **frozen copy** of the **deployed static site** from commit `538b9a967b046ff5d71f368214aa760fe12d029d` (“Shift portfolio to AI Engineer focus + fix theme toggle”).

It contains the production **Vite build** (`index.html` + `assets/`) that GitHub Pages served from the repo root at that time.

**Note:** At this commit, `portfolio-new/src` did not contain matching React source (several files were empty placeholders). The **authoritative** version of that UI in git is this compiled output.

**Local preview:** from this directory, run any static server (e.g. `npx serve .`) and open the URL shown. Asset paths use leading `/`, so the server root must be this folder.

**Light mode:** the original theme block used invalid selectors (`.text-white/[90]`). That is corrected in `assets/index-B6rKWLKB.css` so light mode text and cards remain readable.
