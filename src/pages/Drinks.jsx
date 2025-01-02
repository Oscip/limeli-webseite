import ContentCentered from "../Components/TextFormating/ContentCentered.jsx";
import image from "../assets/limeli-pictures/svg/logo-color.svg";

export default function Drinks() {
    return(
        <div>
            <ContentCentered title="Test" text="blah blah blah blah" image={image} imageAlt="This icon is not available"/>
            <h1>Drinks</h1>
        </div>
    )
}