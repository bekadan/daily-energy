import { IMenuItem } from "from/interfaces/menu";

const HeaderMenuItem: React.FC<{ item: IMenuItem }> = ({ item }) => {
  return (
    <a href={item.href} className="header-menu-item">
      {item.title}
    </a>
  );
};

export default HeaderMenuItem;
