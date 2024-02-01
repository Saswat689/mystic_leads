const colors = {
  "base-500": "#f59e0b",
  "base-200": "#212f53",
  "base-300": "#212f53",
  "base-400": "#293a65",
  "main-400": "#7f9cf5",
  "main-200": "#c3dafe",
  "main-100": "#101627",
  solid: "#1c2641",
  "solid-900": "#a06807",
};

export default (icon) => {
  Object.keys(colors).forEach((key) => {
    const value = colors[key];
    const str = icon.replaceAll(`var(--${key})`, value);
    icon = str;
  });

  const additionalProps = ` width="100" `
  
  const svg = [icon.slice(0, 5), additionalProps, icon.slice(5)];
   
  return svg.join(" ");
};
