# WordWheel (واژه‌گردون) 🌀

A bilingual **English ⇄ Persian 3D dictionary** that runs entirely in the browser. Spin a 3D ring of word cards, flip them to see meanings, and practice with a quiz, flashcards and a memory game.

No build step, no dependencies, no backend. Just HTML, CSS and vanilla JavaScript.

**Live demo:** https://claude.ai/artifact/K9exhYQgZhHexr1fLyZt2b

## Features

- **3D word wheel**: cards sit on a rotating ring built with CSS 3D transforms. Drag with mouse or finger, use the ← → keys, or tap Next/Previous. The scene also tilts gently with your pointer.
- **Flip cards**: tap the front card to see the Persian explanation, an English definition and an example sentence.
- **Bilingual search**: search in English or Persian, in words, meanings and definitions.
- **10-question quiz**: multiple choice, alternating English → Persian and Persian → English. Tracks score, streak and your best score (saved in `localStorage`).
- **Flashcards**: mark words as "Got it" or "Not yet"; missed cards return to the end of the deck. Includes text-to-speech pronunciation (Web Speech API).
- **Memory game**: match each English word with its Persian meaning.
- **Bilingual UI**: every label appears in Persian and English.
- **Light and dark themes**, RTL layout, mobile friendly, respects `prefers-reduced-motion`.

## Project structure

```
index.html   page structure
style.css    layout, themes, 3D scene, game styles
script.js    word data, 3D ring, search, quiz, flashcards, memory game
```

## Tech

HTML5, CSS3 (3D transforms, custom properties, `prefers-color-scheme`), vanilla JavaScript (pointer events, `MutationObserver`, `localStorage`, Web Speech API).

## Ideas

- More word categories (food, travel, body, numbers)
- Fill-in-the-blank and listening exercises
- Word of the day
- Difficulty levels

---

# فارسی

**واژه‌گردون** یک دیکشنری سه‌بعدی و دوزبانه‌ی انگلیسی ⇄ فارسی است که کامل داخل مرورگر اجرا می‌شود. کارت‌های واژه روی یک حلقه‌ی سه‌بعدی می‌چرخند، با کلیک برمی‌گردند و معنی، تعریف و جمله‌ی مثال را نشان می‌دهند. برای تمرین هم آزمون، فلش‌کارت و بازی حافظه دارد.
