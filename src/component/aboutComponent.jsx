export default function About(props) {
  return (
    <>
      <div className="row mx-5">
         <div class="col-1"></div> 
        <div class="col-3 m-0">
          <h1 class="display-5 fw-bold">{props.title2}</h1>
        </div>
        <div class="col-8 m-0">
          <p>{props.text}</p>
          <div>
            <p>
              <a class="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1xyeaQvNCFltoIR-hnmHSma9jM-zXyWQp/view?usp=sharing">
                Download Resume 
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
