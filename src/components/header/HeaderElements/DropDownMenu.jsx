const DropDownMenu = ({ setVisible, isVisible }) => {
  return (
    <div>
      {isVisible && (
        <div
          onClick={() => setVisible(false)}
          className="fixed top-0 bottom-0 left-0 right-0 z-10"
        >
          <ul className="fixed right-4 top-20 w-[45%] bg-white dark:bg-menuB rounded-md border dark:border-white px-4 py-2 border-black">
            <li className="mb-2">
              <a href="https://docs.google.com/document/d/1qKBlNDzELDojqJevIExHf9Wd7jum0SAtx7Vtzyx0tOI/edit">
                Resume
              </a>
            </li>
            <li>
              <a href="http://github.com">View Source</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
