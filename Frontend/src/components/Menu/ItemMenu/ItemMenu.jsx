import React from 'react';
import { Link } from 'react-router-dom';

const ItemMenu = ({ link, className, href, onClick, useRouter = false }) => {
  return (
    <li className={className}>
      {useRouter ? (
        <Link to={href} className={className}>
          {link}
        </Link>
      ) : (
        <a classNam
          href={href}
          className={className}
          onClick={(e) => {
            e.preventDefault(); // Evita o recarregamento da página
            onClick && onClick();
          }}
        >
          {link}
        </a>
      )}
    </li>
  );
};

export default ItemMenu;
