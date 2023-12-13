// script.tsx

document.getElementById("trigger")?.addEventListener("mouseenter", () => {
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.style.opacity = "1";
  }
});

document.getElementById("overlay")?.addEventListener("mouseleave", () => {
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.style.opacity = "0";
  }
});

// Add this empty export statement
export {};
