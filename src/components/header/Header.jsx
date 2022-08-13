import classes from "./Header.module.scss";

const Header = ({ title }) => {
  return (
    <div className={classes.header}>
      <h1 className={classes.header__title}>{title}</h1>
    </div>
  );
};

export default Header;
