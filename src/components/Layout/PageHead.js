import './Layout.css'

const PageHead = ({title, page}) => {
    return ( 
        <div className="page_header">
            <h2>{title}</h2>
            <p>Home {`>`} <span>{page}</span></p>
        </div>
     );
}
 
export default PageHead;