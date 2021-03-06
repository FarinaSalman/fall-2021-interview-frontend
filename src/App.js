import './App.css';
import backdrop from './assets/backdrop.jpg';
import google_logo from './assets/google_logo.svg';
import outstem_logo from './assets/outstem_logo_icon.png';

function App() {

  return (
    <div className="container">
      <div className="image">
        <img src={backdrop} className="backdrop-img" alt="backdrop"/>
        <img src={outstem_logo} className="outstem-logo" alt="Outstem Logo"/>
      </div>
      <div className="sign-in">
        <h2>Sign up to begin your adventure</h2>
        <p>Already a member? <a href="">Login instead</a></p>
        <button className="google-button"><img src={google_logo} alt="Google logo" width="20"/>Continue with Google</button>
        <p>or sign up with email</p>
        <form className="sign-in-email">
          <label htmlFor="email">Email</label>
          <br></br>
          <input type="text" name="email" id="email"/>
          <br></br>
          <label htmlFor="password">Password (min. 8 characters)</label>
          <br></br>
          <input type="text" name="password" id="password"/>
          <div className="checkbox">
            <input type="checkbox" name="terms-privacy" id="terms-privacy"/>
            <label htmlFor="terms-privacy">I agree to the <a href="">Terms of Service</a> and <a href="">Privacy Policy</a></label>
          </div>
          <button type="submit" className="submit">Get Started</button>
        </form>
      </div>
    </div> 
  );
}

export default App;
