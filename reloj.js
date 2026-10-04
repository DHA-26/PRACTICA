const relojId = setInterval(() => {
  console.clear();
  const ahora = new Date();
  console.log(ahora.toLocaleTimeString());
}, 1000);
