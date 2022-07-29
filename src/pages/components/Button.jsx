export default 

function Button({ btnId, btnText, btnClass, onClick }) 
{
    return (
        <button type="button" onClick={ onClick } className={'btn ' +btnClass} id={btnId}>
                    {btnText}
        </button>
    )
}