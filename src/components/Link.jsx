import useNavigation from "../hooks/use-navigation";

function Link({ children, to }) {
  const { navigate, currentPath } = useNavigation();

  const handler = (e) => {
    if (e.MetaKey || e.ctrlKey) return;

    e.preventDefault();

    navigate(to);
  };

  return (
    <a
      href={to}
      onClick={handler}
      className={
        currentPath === to
          ? "font-bold cursor-pointer text-blue-500 ml-3 border-l-4 border-blue-500 pl-2"
          : "cursor-pointer text-blue-500"
      }
    >
      {children}
    </a>
  );
}

export default Link;
