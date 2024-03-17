import Image from "next/image";
var $ = require("jquery");
// if (typeof window !== "undefined”) {
//    window.$ = window.jQuery = require("jquery”);
// }
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Home() {
  return (
    <div className="conatiner">
      hello main page
    </div>
  );
}
