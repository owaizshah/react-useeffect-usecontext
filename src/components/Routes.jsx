import useNavigation from "../hooks/use-navigation";

function Routes({ path, children }) {
  const { currentPath } = useNavigation();

  if (path === currentPath) return <div>{children}</div>;

  return null;
}

export default Routes;
