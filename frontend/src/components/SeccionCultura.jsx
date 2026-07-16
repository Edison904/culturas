export default function SeccionCultura({ pais }) {
  return (
    <section className="seccion-cultura">
      <span className="seccion-cultura__eyebrow">Cultura</span>
      <h2 className="seccion-cultura__title">{pais.cultura_titulo}</h2>
      <p className="seccion-cultura__texto">{pais.cultura_texto}</p>
    </section>
  );
}
