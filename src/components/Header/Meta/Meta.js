const Meta = (props) => {
        document.title = 'Finstore - ' + props.title;
        return <div>{props.children}</div>;
     ;
}
 
export default Meta;