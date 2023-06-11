export const TravelList = ({ routes }) => {
  const getInitialState = () => {
    const routeNames = [];
    routes.map(({ name }) => routeNames.push(name));
    return routeNames;
  };

  const renderRoutes = () =>
    getInitialState().map((route, index) => {
      return <p key={index}>{route}</p>;
    });

  return (
    <div className="tourist-routes_list">
      <h2>Travel List</h2>
      {renderRoutes()}
    </div>
  );
};
