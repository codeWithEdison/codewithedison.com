# Create Next.js project with TypeScript
npx create-next-app@latest codewithedison --typescript --tailwind --eslint

cd codewithedison

# Install additional dependencies
npm install @heroicons/react @headlessui/react framer-motion next-themes next-mdx-remote gray-matter reading-time @types/node @types/react @types/react-dom @tailwindcss/typography @tailwindcss/forms

# Create project structure
mkdir -p src/{components/{layout,ui,sections},lib,types,utils,hooks,styles,content/{blog,projects}}

# Create base component files
touch src/components/layout/{Header,Footer,Layout}.tsx
touch src/components/ui/{Button,Card,Container,ThemeToggle}.tsx
touch src/components/sections/{Hero,About,Projects,Blog,Mentorship,Contact}.tsx

# Create utility files
touch src/utils/{mdx.ts,animations.ts}
touch src/hooks/{useScrollspy.ts,useAnimations.ts}
touch src/types/index.ts
touch src/styles/globals.css

# Create content files
touch src/content/projects.ts
touch src/content/blog/hello-world.mdx

# Project structure will look like:
#
# codewithedison/
# ├── src/
# │   ├── components/
# │   │   ├── layout/
# │   │   │   ├── Header.tsx
# │   │   │   ├── Footer.tsx
# │   │   │   └── Layout.tsx
# │   │   ├── ui/
# │   │   │   ├── Button.tsx
# │   │   │   ├── Card.tsx
# │   │   │   ├── Container.tsx
# │   │   │   └── ThemeToggle.tsx
# │   │   └── sections/
# │   │       ├── Hero.tsx
# │   │       ├── About.tsx
# │   │       ├── Projects.tsx
# │   │       ├── Blog.tsx
# │   │       ├── Mentorship.tsx
# │   │       └── Contact.tsx
# │   ├── lib/
# │   ├── types/
# │   │   └── index.ts
# │   ├── utils/
# │   │   ├── mdx.ts
# │   │   └── animations.ts
# │   ├── hooks/
# │   │   ├── useScrollspy.ts
# │   │   └── useAnimations.ts
# │   ├── styles/
# │   │   └── globals.css
# │   └── content/
# │       ├── blog/
# │       │   └── hello-world.mdx
# │       └── projects.ts
# ├── public/
# │   └── images/
# ├── pages/
# │   ├── _app.tsx
# │   ├── _document.tsx
# │   ├── index.tsx
# │   ├── blog/
# │   │   ├── index.tsx
# │   │   └── [slug].tsx
# │   └── api/
# ├── tailwind.config.js
# ├── tsconfig.json
# └── package.json