// icons
import { FaArrowRightLong } from "react-icons/fa6";

// css
import './button.css';

// component function
export default function CallToActionButton( {label}: {label: string} ) {
  return (
    <button className="main-call-button">
      {label} <FaArrowRightLong/>
    </button>
  )
}