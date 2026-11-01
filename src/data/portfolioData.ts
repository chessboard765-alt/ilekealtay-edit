/**
 * ==============================================================================
 * ILEKEALTAY PORTFOLIO DATA ARCHITECTURE
 * ==============================================================================
 * 
 * 💡 HOW TO REPLACE PLACEHOLDERS WITH YOUR REAL PROJECTS:
 * 1. Find the project object in the `PROJECTS` array below.
 * 2. Update `title` with your project title.
 * 3. Set `isPlaceholder: false`.
 * 4. Add your thumbnail URL to `thumbnailUrl` (e.g., local image path or external link).
 * 5. Add your video link:
 *    - For YouTube embed: set `embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"`
 *    - For direct MP4: set `videoUrl: "/videos/my-project.mp4"`
 * 6. Customize `category`, `shortDescription`, `editingApproach`, and `toolsUsed`.
 * 7. You can add or remove projects as your portfolio grows (5–10 projects recommended).
 * ==============================================================================
 */

export interface Project {
  id: string;
  number: string;
  title: string;
  category: 'SHORT-FORM' | 'LONG-FORM' | 'GAMING' | 'CREATIVE';
  platform: string;
  aspectRatio: '9:16' | '16:9';
  shortDescription: string;
  fullDescription: string;
  editingApproach: string[];
  toolsUsed: string[];
  timecode: string;
  fps: string;
  resolution: string;
  thumbnailUrl?: string;
  videoUrl?: string;
  embedUrl?: string;
  isPlaceholder: boolean;
  accentColor?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'project-01',
    number: '01',
    title: 'HIGH-RETENTION SHORTS EDIT',
    category: 'SHORT-FORM',
    platform: 'YouTube Shorts & TikTok',
    aspectRatio: '9:16',
    shortDescription: 'Fast-paced storytelling with dynamic camera whip pans, custom sound design, and text punch-ins built to maximize viewer retention in the first 3 seconds.',
    fullDescription: 'Architected for modern short-form algorithms where the opening hook dictates reach. Built using tight jump cuts, directional audio cues, and strategic micro-zooms that sustain viewer focus throughout.',
    editingApproach: [
      'Engineered hook within the first 1.5 seconds',
      'High-energy SFX layered beneath key punchlines and transitions',
      'Dynamic on-screen kinetic captions with electric accent tracking',
      'Optimized loop pacing for repeat watch time'
    ],
    toolsUsed: ['Adobe Premiere Pro', 'Adobe After Effects', 'CapCut'],
    timecode: '00:00:34:18',
    fps: '60 FPS',
    resolution: '1080x1920 (9:16)',
    thumbnailUrl: 'https://img.youtube.com/vi/RJO0vtC2ujg/hqdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/RJO0vtC2ujg?autoplay=1&rel=0',
    videoUrl: 'https://youtu.be/RJO0vtC2ujg',
    isPlaceholder: false,
  },
  {
    id: 'project-02',
    number: '02',
    title: 'ENGAGING YOUTUBE LONG-FORM',
    category: 'LONG-FORM',
    platform: 'YouTube',
    aspectRatio: '16:9',
    shortDescription: 'Full narrative pacing structure, seamless B-roll integration, and clean motion graphics for an immersive 15-minute video that eliminates viewer drop-off.',
    fullDescription: 'A masterclass in rhythm and narrative retention. Alternating between intense dialogue setups, cinematic context transitions, and playful pacing breaks designed to hold attention across long watch times.',
    editingApproach: [
      'Retention curve optimization with pattern interrupts every 12–15 seconds',
      'Color grade balance for punchy natural skin tones and deep contrast',
      'Custom motion graphic callouts and lower-thirds',
      'Multi-track audio mix balancing voiceover, ambient score, and punch FX'
    ],
    toolsUsed: ['Adobe Premiere Pro', 'Adobe After Effects', 'Adobe Photoshop'],
    timecode: '00:14:48:22',
    fps: '60 FPS',
    resolution: '3840x2160 (4K)',
    thumbnailUrl: 'https://img.youtube.com/vi/xcojmr5mMfo/hqdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/xcojmr5mMfo?autoplay=1&rel=0',
    videoUrl: 'https://youtu.be/xcojmr5mMfo',
    isPlaceholder: false,
  },
  {
    id: 'project-03',
    number: '03',
    title: 'GAMING HIGHLIGHT & STREAM CUT',
    category: 'GAMING',
    platform: 'Twitch & YouTube',
    aspectRatio: '16:9',
    shortDescription: 'High-octane gaming montage synchronizing intense gameplay clutching moments with hard-hitting bass drops, 3D camera tracks, and streamer camera framing.',
    fullDescription: 'Crafted with gaming culture intuition. Zero dead air, rapid comedic zoom-ins on chat reactions, frame-accurate beat sync, and crisp audio mixing that amplifies the thrill of the win.',
    editingApproach: [
      'Beat-matched sync cuts aligning gameplay impacts with music peaks',
      'Camera-shake and custom kinetic impact distortions',
      'Twitch chat overlay integration with motion tracking',
      'Sound design with spatialized in-game SFX and meme audio stingers'
    ],
    toolsUsed: ['Adobe Premiere Pro', 'Adobe After Effects'],
    timecode: '00:08:12:05',
    fps: '60 FPS',
    resolution: '1440p QHD',
    thumbnailUrl: '/src/assets/images/abstract_creative_geometry_1793523275557.jpg',
    isPlaceholder: true,
  },
  {
    id: 'project-04',
    number: '04',
    title: 'VIRAL REELS HOOK EDIT',
    category: 'SHORT-FORM',
    platform: 'Instagram Reels',
    aspectRatio: '9:16',
    shortDescription: 'Vertical visual punch edit designed for creator brand authority, clean soundscaping, and smooth motion graphics that stop the endless scroll.',
    fullDescription: 'Engineered for Instagram algorithms. High visual clarity, centered mobile safe-zones, punchy typography overlays, and seamless loop transitions that replay naturally.',
    editingApproach: [
      'Mobile safe zone composition (avoiding platform UI buttons)',
      'Subtle kinetic typography matching speech cadence',
      'Micro-sound effects giving tactile feedback to visual cues',
      'Speed ramped footage transitions'
    ],
    toolsUsed: ['Adobe Premiere Pro', 'CapCut', 'Adobe Illustrator'],
    timecode: '00:00:28:12',
    fps: '60 FPS',
    resolution: '1080x1920 (9:16)',
    thumbnailUrl: '/src/assets/images/abstract_timeline_motion_1793523275669.jpg',
    isPlaceholder: true,
  },
  {
    id: 'project-05',
    number: '05',
    title: 'CINEMATIC CREATIVE STORYLINE',
    category: 'CREATIVE',
    platform: 'Digital Media & YouTube',
    aspectRatio: '16:9',
    shortDescription: 'Experimental edit blending cinematic letterbox transitions, atmospheric sound design, and custom graphic overlays for an elevated creator documentary.',
    fullDescription: 'Pushing past generic YouTube templates. This format explores documentary-style pacing, archival film texture overlays, and nuanced pacing that builds genuine emotional resonance.',
    editingApproach: [
      'Subtle 35mm film grain and light leak organic textures',
      'Ambient binaural soundscape mixing',
      'Paced narrative pauses allowing high-impact lines to breathe',
      'Custom geometric title sequences'
    ],
    toolsUsed: ['Adobe Premiere Pro', 'Adobe After Effects', 'Adobe Photoshop'],
    timecode: '00:11:30:19',
    fps: '24 FPS Cinematic',
    resolution: '3840x2160 (4K)',
    thumbnailUrl: '/src/assets/images/abstract_creative_geometry_1793523275557.jpg',
    isPlaceholder: true,
  },
  {
    id: 'project-06',
    number: '06',
    title: 'STREAMER SPEEDRUN / PACED CUT',
    category: 'GAMING',
    platform: 'YouTube & TikTok',
    aspectRatio: '16:9',
    shortDescription: 'Rapid-fire content condensing hours of livestream gameplay into a tight, comedic, high-retention episodic package with high viewer engagement.',
    fullDescription: 'Transforming lengthy stream VODs into snappy, highly shareable entertainment. Featuring intelligent sub-plots, recurring comedic motifs, and zero lull moments.',
    editingApproach: [
      'Smart VOD curation extracting highest-energy moments',
      'Audio leveling balancing streamer shouts and whisper jokes',
      'Visual zoom punch-ins for facecam comedy',
      'Chapter structuring for YouTube algorithm indexing'
    ],
    toolsUsed: ['Adobe Premiere Pro', 'Adobe Photoshop', 'CapCut'],
    timecode: '00:18:04:08',
    fps: '60 FPS',
    resolution: '1080p FHD',
    thumbnailUrl: '/src/assets/images/abstract_soundwave_dark_1793523275552.jpg',
    isPlaceholder: true,
  },
];

export const TOOLKIT_ITEMS = [
  {
    name: 'Adobe Premiere Pro',
    category: 'Core NLE & Pacing',
    description: 'Precision narrative cutting, multi-cam synchronization, speed ramps, and seamless timeline assembly.',
    tag: 'Primary NLE',
    highlight: 'Master Level',
  },
  {
    name: 'Adobe After Effects',
    category: 'Motion Graphics & VFX',
    description: 'Kinetic typography, dynamic tracking, 3D camera moves, screen replacements, and custom visual transitions.',
    tag: 'Motion & VFX',
    highlight: 'Advanced',
  },
  {
    name: 'Adobe Photoshop',
    category: 'Thumbnail & Graphic Assets',
    description: 'High-CTR thumbnail composition, visual masking, asset isolation, and custom graphic accents.',
    tag: 'Visual Assets',
    highlight: 'Precision',
  },
  {
    name: 'Adobe Illustrator',
    category: 'Vector Overlays & Icons',
    description: 'Bespoke vector graphics, UI element recreations, lower-thirds, and clean illustrative flourishes.',
    tag: 'Vector Design',
    highlight: 'Clean Vectors',
  },
  {
    name: 'CapCut',
    category: 'Mobile Native & Pacing',
    description: 'Fast-response mobile optimizations, trending audio mapping, and rapid short-form turnaround.',
    tag: 'Short-Form Velocity',
    highlight: 'High Speed',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'THE BRIEF',
    summary: 'We define the project, content style and creative direction.',
    detail: 'We review raw footage, target audience, platform algorithms, reference styles, and turnaround deadlines so the vision is crystal clear before cutting a single frame.',
  },
  {
    step: '02',
    title: 'THE EDIT',
    summary: 'The content is shaped with pacing, structure and creative details.',
    detail: 'Raw footage is sculpted into a gripping narrative with pattern interrupts, sound design, hook calibration, and kinetic motion graphics tailored for maximum retention.',
  },
  {
    step: '03',
    title: 'FEEDBACK',
    summary: 'Review the edit and refine the important details.',
    detail: 'Streamlined review loop where timecode-specific tweaks, comedic timing, music choices, and caption tweaks are polished to perfection with zero friction.',
  },
  {
    step: '04',
    title: 'FINAL DELIVERY',
    summary: 'Receive the final content ready for your platform.',
    detail: 'Full-resolution master exports delivered in optimal bitrates and color profiles, fully primed for immediate upload to YouTube, TikTok, or Instagram.',
  },
];

export const SERVICES = [
  {
    id: 'service-01',
    number: '01',
    name: 'SHORT-FORM EDITING',
    platforms: ['YouTube Shorts', 'TikTok', 'Instagram Reels'],
    summary: 'Short-form content designed for modern platforms, strong pacing and audience attention.',
    description: 'In the short-form ecosystem, you have 1.5 seconds to convince a viewer not to scroll away. I craft high-velocity edits with punchy text animation, strategic sound cues, and seamless loops that keep watch-time high and trigger platform distribution.',
    features: [
      'Engineered opening 3-second hook structure',
      'Dynamic kinetic typography & sound design',
      'Platform-safe framing for zero UI overlap',
      'Smooth loop cut transitions for continuous views'
    ],
    idealFor: 'Creators, streamers, and personal brands seeking explosive reach and organic follower growth.'
  },
  {
    id: 'service-02',
    number: '02',
    name: 'LONG-FORM EDITING',
    platforms: ['YouTube Main Channel', 'Documentary & VODs', 'Video Podcasts'],
    summary: 'Engaging YouTube videos with clean pacing, storytelling and modern editing.',
    description: 'Long-form content is where creators build deep loyalty and sustainable revenue. I balance thoughtful narrative storytelling with modern pattern interrupts, rich audio atmospheres, and custom motion elements so your 10–30 minute videos never drag.',
    features: [
      'Full narrative arc pacing & chapter structuring',
      'Curated B-roll selection & visual contextualization',
      'Comprehensive multi-track audio leveling & score scoring',
      'Custom branded motion graphics and title sequences'
    ],
    idealFor: 'YouTube creators and streamers who want to elevate their channel production value and average view duration.'
  }
];

export const CONTACT_CONFIG = {
  email: 'ilekealtay@gmail.com', // Placeholder for personal creative contact
  telegram: 'https://t.me/ilekealtay', // Easily editable placeholder
  telegramHandle: '@ilekealtay',
  linkedin: 'https://www.linkedin.com/in/ilekealtay', // Easily editable placeholder
  linkedinHandle: 'linkedin.com/in/ilekealtay',
  availabilityStatus: 'AVAILABLE FOR SELECT PROJECTS',
  turnaroundTime: '24–72h for Short-Form · 3–6 Days for Long-Form',
};
