const DisplayNav = ({ nav }) => {
  const { id, text, path } = nav;
  return (
    <div className="">
      <ul>
        <li className="hover:bg-purple-700 px-2 hover:text-white ">
          <a href={path}>{text}</a>
        </li>
      </ul>
    </div>
  );
};

export default DisplayNav;
