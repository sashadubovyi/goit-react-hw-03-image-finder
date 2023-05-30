import { Main } from './App.styled';

export const App = () => {
  return (
    <Main>
      <form>
        <input
          type="text"
          id="search-input"
          name="query"
          plaseholder="Enter tag for search images..."
        />
      </form>
      <ul className="gallery">
        <li className="gallery-item"></li>
        <li></li>
        <li></li>
      </ul>
      <button>Load more</button>
      <modal></modal>
    </Main>
  );
};
