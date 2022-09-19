const DropDownMenu = ({ setVisible, isVisible }) => {
  return (
    <div>
      {isVisible && (
        <div
          onClick={() => setVisible(false)}
          className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-menuB min-h-screen"
        >
          <ul className="fixed right-[7.5%] top-20 w-[12rem] bg-white dark:bg-menuB rounded-md border dark:border-white px-4 py-2 border-black">
            <li className="mb-2">
              <a href="https://docs.google.com/document/d/1wuW1WWw1xA2uE9pS-0Lw7nJsE_4OQ0QxgFxQBNBQcBU/edit?usp=sharing">
                Resume
              </a>
            </li>
            <li>
              <a href="https://github.com/whylone1y/portfolio">View Source</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
