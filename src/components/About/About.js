import "./About.css";
import logo from "../logo.svg";

function About() {
    return (
        <div className="about">
            <img src={logo} alt="about-image" />
            <p>
                Sed ligula neque, vulputate at velit vitae, pharetra tristique libero. Nullam
                volutpat rutrum magna, ac iaculis lectus tempus eget. Nullam fringilla justo viverra
                orci aliquet feugiat. Mauris faucibus, nisl eu vestibulum semper, nulla lorem
                lobortis elit, laoreet efficitur lacus lorem vel ex. Quisque sed dictum orci. Nulla
                ut cursus velit. Maecenas auctor nulla dui, nec eleifend lorem tristique sed.
                Aliquam ac tortor eget lorem cursus fringilla a quis lacus. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas suscipit
                volutpat dui in mollis. Ut tincidunt fringilla dolor. Vivamus molestie efficitur
                posuere. Sed euismod accumsan turpis, dapibus vestibulum massa hendrerit nec. Aenean
                egestas nibh vel turpis aliquet pulvinar. Etiam erat nibh, maximus in dapibus sit
                amet, gravida vel nulla.
            </p>
        </div>
    );
}

export default About;
