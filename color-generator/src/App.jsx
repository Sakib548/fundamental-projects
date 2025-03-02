import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Values from "values.js";
import ColorList from "./components/ColorList";
import Form from "./components/Form";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(new Values(`${color}`).all(10));
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
