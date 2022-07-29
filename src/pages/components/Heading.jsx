import Button from "./Button";

// This component is a combination of h1 and two button components. It is what the client sees at the top of the page.

export default function Heading({ title, firstBtnId, firstBtnText, firstBtnOnClick , secondBtnId, secondBtnText, secondBtnOnClick}) 
{
    return (
        <nav className="heading">

            <h1 className="title">{title}</h1>

            <div className="buttons">

                <Button onClick={firstBtnOnClick} btnId={firstBtnId} btnText={firstBtnText} btnClass="green-btn" />

                <Button onClick={secondBtnOnClick} btnId={secondBtnId} btnText={secondBtnText} btnClass="red-btn" />

            </div>

        </nav>
        )
}