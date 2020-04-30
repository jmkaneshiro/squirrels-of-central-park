export function Graph() {
  const dataset = [1,2,3,5];

  d3.select('.test-section')
    .selectAll('p')
    .data(dataset)
    .enter()
    .append('p')
    // .text('d3 is awesome!');
    .text(function(d) { return `Paragraph ${d}`; });
}