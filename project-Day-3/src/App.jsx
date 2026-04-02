import Card from './components/Card'
import ThemeButton from './components/ThemeButton'
import './App.css'

function App() {
  return (
    <main className="page">
      <h1>React Day 3 Exercises</h1>

      <Card title="Exercise 1: CSS Modules">
        <p>
          This card uses <code>Card.module.css</code>. Open browser devtools and
          inspect this element to see class names like
          <code> Card_container__hash123</code>.
        </p>
      </Card>

      <Card title="Exercise 2: Theme Button">
        <p>Click the button to switch between Light and Dark mode styles.</p>
        <ThemeButton />
      </Card>
    </main>
  )
}

export default App
