You can provide a profile photo in one of two ways:

- Preferred (easy): place your image at `public/profile.png`. The app will load `/profile.png` automatically.
- Alternative: replace the bundled `src/assets/profile.svg` with your own SVG at the same path.

Guidelines:
- Square image recommended (1:1) with a clear subject.
- For best results, crop to a head-and-shoulders composition and save as PNG or JPG.

Galaxy vibe tip:
- To get a stronger galaxy/cyberpunk vibe, add `public/noise.png`, `public/blur-blob.png`, and `public/grad-aurora.png`. I can create placeholder assets if you want.

After adding or replacing the image, run:

```powershell
cd c:\site-automation\Cloudflare-Pages-Deployer
npm run dev
```
