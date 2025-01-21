import './Menu.css';

const MobileIcon = ({ onClick }) => {
  return (
    <div className="nav-menu-icon" onClick={onClick} aria-label="Abrir menu">
      <span className="bar1"></span>
      <span className="bar2"></span>
      <span className="bar3"></span>
    </div>
  );
};

export default MobileIcon;
