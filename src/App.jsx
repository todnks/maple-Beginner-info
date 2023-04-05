import { createTheme } from '@mui/material/styles';
import BaseHeader from '@/container/BaseHeader.jsx';
const theme = createTheme();
function App() {
  return (
    <div className='app'>
      <BaseHeader />
    </div>
  );
}

export default App;
