import { useState } from "react";
import menu from "./data";
import Kategorie from "./Kategorie";
import Menu from "./Menu";

const filterKategorii = [
  "všetko",
  ...new Set(menu.map((item) => item.category)),
];

function App() {
  const [menuItems, setMenuItems] = useState(menu);

  const filterCast = function (cast) {
    if (cast === "všetko") {
      return setMenuItems(menu);
    }
    const kategoria = menu.filter((item) => item.category === cast);
    return setMenuItems(kategoria);
  };

  return (
    <>
      <div className="container text-center">
        <h1 className="mt-5 mb-5">Menu našej Reštaurácie</h1>

        <div className="buttony">
          {filterKategorii.map((kat, index) => {
            return (
              <Kategorie key={index} kategoria={kat} filter={filterCast} />
            );
          })}
        </div>
        <div className="row mt-5">
          {menuItems.map((item) => {
            return <Menu key={item.id} {...item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
