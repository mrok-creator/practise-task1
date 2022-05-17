import PropTypes from "prop-types";

import s from "./menu.module.css";

function Menu({ items }) {
  const elements = items.map((i) => (
    <li key={i.id}>
      <a href={i.link}>{i.label}</a>
    </li>
  ));
  return <ul>{elements}</ul>;
}

Menu.defaultProps = {
  items: [],
};

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default Menu;
