import Button from "../components/Button";
import { FaFly, FaAffiliatetheme, FaJsSquare, FaLastfm } from "react-icons/fa";

function ButtonPage() {
  // const handleclick = () => console.log("CLICKED");

  return (
    <div className="flex items-center justify-center min-h-screen gap-4">
      <div>
        <Button primary>
          <FaFly />
          click me
        </Button>
      </div>
      <div>
        <Button secondary>
          <FaAffiliatetheme />
          something
        </Button>
      </div>
      <div>
        <Button warning rounded>
          <FaJsSquare />
          anything
        </Button>
      </div>
      <div>
        <Button danger>
          <FaLastfm />
          sell
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
