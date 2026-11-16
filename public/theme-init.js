try {
  const savedScheme = window.localStorage.getItem("color-scheme");
  if (savedScheme === "light" || savedScheme === "dark") {
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) {
      meta.setAttribute("content", savedScheme);
    }
  }
} catch {
  // Ignore restricted storage environments
}
