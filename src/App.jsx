
import "./App.css";

export default function App() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="offer">
          Don't miss limited-time savings:
          <span> Savings 20%</span>
        </p>

        <h1>
          Everything for
          <br />
          Your Site to
          <br />
          Succeed
        </h1>

        <p className="credit">
          Image from <a href="https://www.freepik.com/">Freepik</a>
        </p>

        <div className="hero-actions">
          <button>Get Started</button>

          <div className="price">
            <p>Starting at only</p>
            <strong>$4.75/mo*</strong>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="/hero.jpeg" alt="hero" />
      </div>
    </section>
  );
}


