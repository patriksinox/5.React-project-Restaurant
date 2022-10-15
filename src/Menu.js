function Menu({ title, price, img, desc }) {
  return (
    <>
      <article className="col-sm-6">
        <img src={img} alt={title} className="img img-fluid" />

        <div className="title">
          <h6>{title}</h6>
          <h6>{price} €</h6>
        </div>
        <p>{desc}</p>
      </article>
    </>
  );
}
export default Menu;
