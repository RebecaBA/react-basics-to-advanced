import logo from './logo.svg';
import './App.css';

function App() {
  const blockInfo = [
    {
      title: 'Card 1',
      description: 'Learn React JS from scratch with hands-on practice assignments and projects.',
      index: 1,
    },
    {
      title: 'Card 2',
      description: 'Learn React JS from scratch with hands-on practice assignments and projects.',
      index: 2,
    },
    {
      title: 'Card 3',
      description: 'Learn React JS from scratch with hands-on practice assignments and projects.',
      index: 3,
    },
    {
      title: 'Card 4',
      description: 'Learn React JS from scratch with hands-on practice assignments and projects.',
      index: 4,
    },
    {
      title: 'Card 5',
      description: 'Learn React JS from scratch with hands-on practice assignments and projects.',
      index: 5,
    }
  ]
  return (
    <div className="App">
      {blockInfo && blockInfo.map((blog) => (
        <div className="blog-card" key={blog.index}>
          <h3>{blog.title}</h3>
          <div>{blog.description}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
