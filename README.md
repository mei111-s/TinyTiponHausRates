# Tiny Haus & Tipon Haus — Rates Site

A single static page that recreates your rate card, with an in-browser
editor so you can update rates yourself any time — no code required.

## What's inside
```
index.html          the whole page (styling + editor logic included)
images/              the two photo collages, cropped from your original rate card
vercel.json          minimal config so Vercel serves it as a static site
```

## Deploy to Vercel (fastest way — no terminal needed)

1. Go to https://vercel.com and log in (or sign up, it's free).
2. Click **Add New → Project**.
3. Choose **"Deploy without a Git repository"** (sometimes shown as a drag-and-drop
   area) and drag this whole folder in — or zip it and upload the zip.
4. Vercel will detect it as a static site automatically. Click **Deploy**.
5. You'll get a live URL like `your-project.vercel.app` in under a minute.

### Alternative: deploy from the terminal
If you have Node.js installed:
```bash
npm install -g vercel
cd this-folder
vercel
```
Follow the prompts (press Enter to accept defaults) and it will give you a live link.

### Alternative: GitHub
Push this folder to a new GitHub repo, then on vercel.com choose
**Add New → Project → Import Git Repository** and pick that repo. Every time
you push a change, Vercel redeploys automatically.

## How to edit the rates on the live site

1. Open your deployed site.
2. Click the **"Edit rates"** button in the bottom-right corner.
3. Any text with a dashed outline is now clickable — click into it and type
   to change it, just like editing a text field.
4. When you're done, click **"Save changes"**. A confirmation toast will pop up.
5. Click **"Stop editing"** to go back to normal view.

Your edits are saved right in the visitor's browser (this uses a technology
called `localStorage`). That means:

- **On your own device/browser**, your edits will still be there next time
  you open the site — perfect for updating rates yourself.
- **Other visitors** will still see the last text that was saved into the
  actual file (the original rates), not your personal browser edits, since
  edits don't sync across devices automatically.

**To make a rate change visible to everyone who visits the site:**
Open `index.html` in any text editor, find the text you want to change
(it's plain, readable HTML — search for the rate amount, e.g. "PHP 6K"),
edit it directly, save the file, and redeploy (drag the folder into Vercel
again, or `git push` if you used GitHub). This takes under a minute and
guarantees every visitor sees the update.

If you'd like, I can also wire this up to a simple database instead, so that
edits made via the "Edit rates" button update the live site for everyone
immediately — just ask.

## Notes
- Click **"Reset to defaults"** while in edit mode to clear your local edits
  and revert to the original rates shown in this file.
- The two photo collages in `images/` are cropped directly from the rate
  card you uploaded, so the visuals match exactly.
