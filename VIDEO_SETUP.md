# Hero Video Background Setup Guide

## What's New in Your Hero

Your hero section now has:
✅ **Layered parallax** - Background, content, and image move at different speeds  
✅ **Clip-path reveal animations** - Text appears with smooth reveals  
✅ **GPU acceleration** - Smooth 60fps animations  
✅ **Video background layer** - Ready for your video  
✅ **Floating animations** - Subtle continuous movement on the image  

---

## Adding a Video Background

### Step 1: Prepare Your Video

**Best practices:**
- **Format**: MP4 (H.264) with fallback WebM
- **Dimensions**: At least 1920x1080 (or 1280x720 for mobile optimization)
- **Duration**: 6-15 seconds looping
- **File size**: Compress to < 10MB for faster loading
- **Content**: Subtle movement, medical/healthcare themed

**How to create:**
1. Record/source your video
2. Use **FFmpeg** to compress:
   ```bash
   ffmpeg -i input.mov -c:v libx264 -preset slow -crf 28 -c:a aac -b:a 128k -vf scale=1920:1080 hero-bg.mp4
   ```
3. Or use an online tool like **CloudConvert**

### Step 2: Add Video to Public Folder

1. Place your video in: `public/videos/hero-bg.mp4`
2. Create the folder if it doesn't exist

### Step 3: Uncomment Video Code

In **HeroSection.tsx**, find this section and **uncomment it**:

```tsx
{/* Optional: Video background (uncomment when you have a video file) */}
{/* <video
  ref={videoRef}
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
  style={{
    background: "linear-gradient(135deg, hsl(168 76% 97%) 0%, hsl(0 0% 100%) 100%)"
  }}
>
  <source src="/videos/hero-bg.mp4" type="video/mp4" />
  <source src="/videos/hero-bg.webm" type="video/webm" />
</video> */}
```

Change to:

```tsx
{/* Video background */}
<video
  ref={videoRef}
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
  style={{
    background: "linear-gradient(135deg, hsl(168 76% 97%) 0%, hsl(0 0% 100%) 100%)"
  }}
>
  <source src="/videos/hero-bg.mp4" type="video/mp4" />
  <source src="/videos/hero-bg.webm" type="video/webm" />
</video>
```

---

## Animation Breakdown

### 1. **Initial Load Sequence** (0-1.2s)
```
0ms   → Background fades in and scales up
100ms → Text elements appear with clip-path reveal
200ms → Image fades in with scale effect
```

### 2. **Layered Parallax on Scroll**
```
Background layer  → Moves -40px (slowest - furthest away)
Content layer     → Moves -100px (medium speed)
Image layer       → Moves -60px (fastest - foreground)
```

The different speeds create a **3D depth effect**.

### 3. **Floating Effect** (continuous)
```
Image floats up/down with 3 second duration
Creates subtle, alive feeling
```

---

## Performance Tips

✅ **What we optimized:**
- GPU acceleration enabled (`will-change`, `transform`)
- No repaints on scroll (using `transform` only)
- `scrub` values tuned (0.5-1.2) for smoothness
- Video is muted (required for autoplay on most browsers)

✅ **Further optimization:**
- Use WebP images instead of PNG
- Compress video to < 8MB
- Use `srcset` for responsive images
- Consider lazy loading for below-the-fold elements

---

## Video Sources You Can Use

**Free stock video sites:**
- Pexels.com (healthcare videos)
- Pixabay.com
- Coverr.co (perfect for hero videos)
- Mixkit.co

**Search for:**
- "Medical technology"
- "Healthcare professional"
- "Digital health"
- "Modern medicine"
- "Doctor patient"

---

## Troubleshooting

### Video won't play
```
✓ Use muted attribute (required for autoplay)
✓ Check video format (MP4 + WebM fallback)
✓ Ensure video is in public/videos folder
✓ Browser security might block autoplay - add loop and playsInline
```

### Video too large
```
✓ Re-encode: ffmpeg -i input.mp4 -crf 30 -b:v 500k output.mp4
✓ Reduce resolution to 1280x720
✓ Reduce duration or trim unnecessary parts
```

### Animation stuttering
```
✓ Reduce video bitrate
✓ Enable hardware acceleration in browser
✓ Check for other CPU-intensive scripts
✓ Test on real device, not just dev tools
```

---

## Next Steps

1. ✅ Prepare your video (MP4, < 10MB, 1920x1080)
2. ✅ Place in `public/videos/hero-bg.mp4`
3. ✅ Uncomment video code in HeroSection.tsx
4. ✅ Test and adjust opacity if needed

Your hero will now have **cinema-grade animations** 🎬

