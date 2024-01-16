import GoogleMapApi from "./components/GoogleMapApi";
import ResizableDiv from "./components/ResizableDiv";
function App() {
 
  
  return (
    <div className=""> {/* Use Tailwind CSS for layout */}
        <GoogleMapApi/>
        <ResizableDiv/>
    </div>
  )
}

export default App;
