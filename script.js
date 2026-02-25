let chutou = false;

  // :one: Cria o canvas imediatamente
  const svg = d3
    .select("#canvas")
    .append("svg")
    .attr("width", 300)
    .attr("height", 400)
    .attr("viewBox", "0 0 200 300");

  // :two: Grupo base da cena
  const scene = svg.append("g");

  let perna; // referência global

  // :three: Importa PRIMEIRO a perna (fica atrás)
  d3.xml("leg.svg").then(data => {
    const legNode = data.documentElement.querySelector("#leg");
    scene.node().appendChild(legNode);

    perna = d3.select(legNode);

    // pivô no quadril
    perna
      .attr("transform-origin", "100px 150px")
      .style("cursor", "pointer");

    // interação
    perna.on("click", () => {
      chutou = !chutou;

      perna
        .transition()
        .duration(400)
        .attr(
          "transform",
          chutou
            ? "rotate(-90 100 150)"
            : "rotate(0 100 150)"
 );
 });
 });

  // :four: Importa DEPOIS o corpo (fica por cima)
  d3.xml("body.svg").then(data => {
    const bodyNode = data.documentElement.querySelector("#body");
    scene.node().appendChild(bodyNode);
 });