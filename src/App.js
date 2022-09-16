import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer>
          <p>
            This project was coded by Olha Prokofieva and it's open-sourced on{" "}
            <a
              href="https://github.com/OlyaProkofieva/react-project-weather-app"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
