
function Socials(props) {
  return (
    <div className="social-container">
      <a href={props.link}>
        <img src={props.imgURL} className="social-img" alt={props.alt} />
      </a>
    </div>
  );
}

export default Socials;
