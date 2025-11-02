import "./App.css";
import Grid from "@mui/material/Grid";
import ContactList from "./components/ContactList";
import { ContactForm } from "./components/ContactForm";

function App() {
  return (
    <div style={{ padding: 16 }}>
      <h1> ContactBook</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ContactForm />
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactList />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
