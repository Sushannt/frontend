import PropTypes from "prop-types";

const ListComponent = ({ title, list }) => {
  return (
    <>
      <h3 className="text-xl text-black font-semibold py-5">{title}</h3>
      <ul className="pl-5 flex flex-col gap-y-5">
        {list?.map((item, index) => (
          <li className="hover:cursor-pointer" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

ListComponent.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default ListComponent;
