function Kategorie({ kategoria, filter }) {
  return (
    <>
      <button className="btn btn-primary" onClick={() => filter(kategoria)}>
        {kategoria}{" "}
      </button>
    </>
  );
}
export default Kategorie;
