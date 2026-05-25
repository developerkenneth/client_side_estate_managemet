import { ToastContainer } from "react-toastify";

export default function Notify() {
  return (
    <ToastContainer
      position="top-right" // top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
      autoClose={5000} // Close after 3 seconds (set to false to disable)
      hideProgressBar={false} // Show/hide the countdown timer bar
      newestOnTop={false} // Put newer toasts on top of older ones
      closeOnClick // Close the toast when clicked
      rtl={false} // Right-to-left language support
      pauseOnFocusLoss // Pause timer if user switches browser tabs
      draggable // Allow swipe to dismiss on mobile
      pauseOnHover // Pause timer when mouse hovers over toast
      theme="colored" // "light", "dark", or "colored"
    />
  );
}
