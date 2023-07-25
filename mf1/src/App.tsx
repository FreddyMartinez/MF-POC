import "./index.css";

const App = ({value}: {value : string}) =>   (
    <div className="container">
      <div>Name: {value || 'hijo'}</div>
    </div>
  );

export default App;
