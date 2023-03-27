import PropTypes from "prop-types";
import Star from "./Star";

const Stars = ({ count }) => {
  const list = [];
  for (let i = 0; i < count; i++) {
    list.push(i);
  }

  const listOfStars = list.map((el) => {
    return (
      <li key={el}>
        <Star />
      </li>
    );
  });

  const starsUl =
    count > 0 && count <= 5 ? (
      <ul className="card-body-stars u-clearfix">{listOfStars}</ul>
    ) : null;

  return <>{starsUl}</>;
};

Stars.defaultProps = {
  count: 0,
};

Stars.propTypes = {
  count: PropTypes.oneOf([0, 1, 2, 3, 4, 5]).isRequired,
};

export default Stars;
