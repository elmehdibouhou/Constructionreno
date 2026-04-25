import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const PROMPT_TEMPLATE = "Professional interior photography, {desc}, Canadian residential home, Ottawa Ontario, photorealistic, no people, architectural photography style, natural daylight, clean composition, high resolution, shot on Canon 5D, 24mm lens, no text, no watermarks, no filters";

async function generateImage(prompt, outputPath) {
  if (fs.existsSync(outputPath)) {
    console.log(`⏭️ Skipping (already exists): ${outputPath}`);
    return outputPath;
  }
  console.log(`⏳ Generating/Saving: ${outputPath}`);
  const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash-preview-image-generation" 
  });
  
  try {
    const response = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { responseModalities: ["IMAGE", "TEXT"] }
    });

    for (const part of response.response.candidates[0].content.parts) {
      if (part.inlineData) {
        const imageData = part.inlineData.data;
        const buffer = Buffer.from(imageData, "base64");
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        fs.writeFileSync(outputPath, buffer);
        console.log(`✅ Saved: ${outputPath}`);
        return outputPath;
      }
    }
  } catch (error) {
    console.error(`❌ Failed to generate ${outputPath}:`, error.message);
  }
  return null;
}

async function processKitchen() {
  const dataPath = path.resolve("./src/data/inspiration.json");
  const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  
  const kitchen = data.find(item => item.slug === "kitchen");
  if (!kitchen) {
    console.error("Kitchen data not found in JSON!");
    return;
  }
  
  // 1. Hero
  console.log("--- Generating Kitchen Hero ---");
  const heroPrompt = PROMPT_TEMPLATE.replace("{desc}", "luxury modern kitchen renovation with large island and premium finishes");
  const heroPath = "public/images/inspiration/kitchen/kitchen-hero.webp";
  await generateImage(heroPrompt, path.resolve(heroPath));
  kitchen.heroImg = "/images/inspiration/kitchen/kitchen-hero.webp";

  // 2. Ideas
  console.log("--- Generating Kitchen Ideas ---");
  const ideaPrompts = [
    { key: "openconcept", desc: "open-concept kitchen seamlessly flowing into a dining and living area" },
    { key: "quartz", desc: "close-up of premium white quartz countertops with subtle marble veining in a modern kitchen" },
    { key: "twotone", desc: "luxury kitchen featuring two-tone cabinetry with deep navy lower cabinets and crisp white upper cabinets" },
    { key: "island", desc: "stunning kitchen statement island with white waterfall edge countertops and modern integrated seating" }
  ];
  
  for (let i = 0; i < kitchen.ideas.length; i++) {
    if (ideaPrompts[i]) {
      const idea = ideaPrompts[i];
      const p = PROMPT_TEMPLATE.replace("{desc}", idea.desc);
      const outPath = `public/images/inspiration/kitchen/kitchen-idea-${idea.key}.webp`;
      await generateImage(p, path.resolve(outPath));
      kitchen.ideas[i].img = `/images/inspiration/kitchen/kitchen-idea-${idea.key}.webp`;
    }
  }

  // 3. Gallery
  console.log("--- Generating Kitchen Gallery ---");
  const styleVariants = ["farmhouse", "modern", "transitional", "luxury", "bespoke", "contemporary"];
  const newGallery = [];
  for (let i = 0; i < kitchen.gallery.length; i++) {
    const style = styleVariants[i % styleVariants.length];
    const p = PROMPT_TEMPLATE.replace("{desc}", `beautiful ${style} renovated kitchen`);
    const outPath = `public/images/inspiration/kitchen/kitchen-project-${i + 1}.webp`;
    await generateImage(p, path.resolve(outPath));
    newGallery.push(`/images/inspiration/kitchen/kitchen-project-${i + 1}.webp`);
  }
  kitchen.gallery = newGallery;
  
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  console.log("🎉 Updated src/data/inspiration.json for Kitchen!");
}

processKitchen().catch(console.error);
