import './App.css';
import Blog from './Blog.js';
import Footer from './pages/footer.js';

function App() {
  return (
    <div className="app-container">
      <main className="content">
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
